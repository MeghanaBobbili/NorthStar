import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const { visitorId } = await request.json();
    const projectName = request.headers.get('x-project-name') || '';

    if (!visitorId) {
      return NextResponse.json(
        { error: 'Visitor ID is required' },
        { status: 400 }
      );
    }

    // Find user by visitor ID
    const { data: user, error: userError } = await supabase
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
      .order('created_at', { foreignTable: 'downloads', ascending: false })
      .limit(1)
      .single();

    if (userError && userError.code !== 'PGRST116') {
      throw userError;
    }

    if (!user) {
      return NextResponse.json({ exists: false });
    }

    // Check if user can download (within cooldown period)
    const lastDownload = user.downloads?.[0];
    const canDownload = !lastDownload || 
      Date.now() - new Date(lastDownload.created_at).getTime() > 24 * 60 * 60 * 1000;

    return NextResponse.json({
      exists: true,
      canDownload,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      phone: user.phone,
    });
  } catch (error) {
    console.error('Error checking user:', error);
    return NextResponse.json(
      { error: 'Failed to check user' },
      { status: 500 }
    );
  }
} 