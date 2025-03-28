import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const { visitorId, first_name, last_name, email, phone, projectName } = await request.json();

    if (!visitorId || !first_name || !last_name || !email || !phone || !projectName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Find or create user
    const { data: existingUser, error: userError } = await supabase
      .from('users')
      .select(`
        *,
        downloads (
          id,
          project_name,
          created_at
        )
      `)
      .eq('visitor_id', visitorId)
      .eq('downloads.project_name', projectName)
      .order('downloads.created_at', { ascending: false })
      .limit(1)
      .single();

    if (userError && userError.code !== 'PGRST116') {
      throw userError;
    }

    let user = existingUser;

    if (!user) {
      // Create new user
      const { data: newUser, error: createError } = await supabase
        .from('users')
        .insert({
          visitor_id: visitorId,
          first_name,
          last_name,
          email,
          phone,
        })
        .select()
        .single();

      if (createError) throw createError;
      user = newUser;
    } else {
      // Update existing user
      const { data: updatedUser, error: updateError } = await supabase
        .from('users')
        .update({
          first_name,
          last_name,
          email,
          phone,
        })
        .eq('id', user.id)
        .select()
        .single();

      if (updateError) throw updateError;
      user = updatedUser;
    }

    // Check download limits
    const lastDownload = user.downloads?.[0];
    if (lastDownload) {
      const timeSinceLastDownload = Date.now() - new Date(lastDownload.created_at).getTime();
      if (timeSinceLastDownload < 24 * 60 * 60 * 1000) {
        return NextResponse.json(
          { error: 'Please wait 24 hours before downloading again' },
          { status: 429 }
        );
      }
    }

    // Record download
    const { error: downloadError } = await supabase
      .from('downloads')
      .insert({
        user_id: user.id,
        project_name: projectName,
      });

    if (downloadError) throw downloadError;

    return NextResponse.json({
      success: true,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      phone: user.phone,
    });
  } catch (error) {
    console.error('Error processing download:', error);
    return NextResponse.json(
      { error: 'Failed to process download' },
      { status: 500 }
    );
  }
} 