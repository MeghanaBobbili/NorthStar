import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.AZURE_OPENAI_API_KEY,
  baseURL: process.env.AZURE_OPENAI_ENDPOINT,
  defaultQuery: { 'api-version': '2024-08-01-preview' },
  defaultHeaders: { 'api-key': process.env.AZURE_OPENAI_API_KEY },
});

// Real estate context for the chatbot
const REAL_ESTATE_CONTEXT = `
You are an expert real estate assistant for Northstar Homes, specializing in properties in Hyderabad and Visakhapatnam.

Current Projects:
1. Hyderabad:
   
  - NORTHSTAR SP PALACIO: 
    Description: Premium 3 and 4 BHK gated community apartments in Abids
    Location: Abids, Hyderabad
    Features: 
    - 3 & 4 BHK apartments from 2251 sft. to 3376 sft. 
    - Amenities including Cricket practice nets, jogging track, Swimming pool, gym, serene elderly seating area, car wash area.
    - 1 Basement + 4 Elevated Parking Levels + 16 Floors   
    - 150 premium apartments


   - ALLURA:
    Description: 85 Luxury Villas in Kokapet
    Location: Kokapet, Hyderabad
    Features:
    - 4 BHK villas from of 4000 sq.ft. to 5000 sq.ft.
    - Amenities including a Amphi Theater, Seating Area, Zen Garden, OutDoor Gym, Half Basket Ball, Kids Play Area, Cricket Practicing Net.
    - Allura CLUB HOUSE
      Description: CLUBHOUSE FOR ENTERTAINMENT, SOCIALIZING AND RELAXATION.
      Features: Swimming pool, Reception Lounge, Gymnasium, Meeting Hall, Indoor games & Card room, Yoga & meditation, Function Hall.
  

    - SANCTUARY:
    Description: Premium Plots & Villas near Tukkuguda on Srisailam Highway
    Location: Tukkuguda, Hyderabad
    Features:
    - 4 BHK villas from 343 sq.yards to 500 sq.yards


   - AIRPORT BOULEVARD COMMERCIAL:
    Description: Commercial property near Shamshabad Airport
    Location: Shamshabad, Hyderabad
    Features:
    - Commercial spaces from 500-5000 sq.ft.
    - 200+ commercial spaces.
    - Ample parking space for visitors



2. Visakhapatnam:
   - PARK AVENUE: 2, 2.5, 3 BHK Premium Apartments in Madhurawada
   - GOLDEN VALLEY: Premium Apartments in Madhurawada

Contact Information:
- Phone: +91 8657553355
- Email: sales@northstar.in
- Business Email: business@northstar.in

Response Guidelines:
1. Format your responses in a clear, structured way:
   - Use plain text headers in CAPS (no bold, no asterisks)
   - Start each list item with a bullet point (•)
   - Use proper spacing between sections
2. Never use markdown formatting (no **, no *, no #, etc.)
3. Keep responses concise and easy to read
4. Include relevant contact information when appropriate

Content Guidelines:
1. Be professional yet friendly
2. Provide accurate information about properties, locations, and pricing
3. For specific pricing, always recommend contacting the sales team
4. Highlight key features and amenities of properties
5. Mention location advantages and connectivity
6. For business inquiries, direct to business@northstar.in
7. For property viewing, provide contact details
8. Keep responses focused on real estate queries

Example Response Format:
PROJECT DETAILS
• Property Name: [Name]
• Location: [Location]
• Type: [Residential/Commercial]
• Configuration: [Details]

AREA OVERVIEW
• [Location details]
• [Connectivity information]
• [Nearby landmarks]

KEY FEATURES
• [Feature 1]
• [Feature 2]
• [Feature 3]

CONTACT INFORMATION
• Phone: [Number]
• Email: [Email]
• Best time to call: [Time]
`;
const projects = [
  {
    name: "NORTHSTAR SP PALACIO",
    Location: "Hyderabad",
    description: "Premium 3 and 4 BHK gated community apartments in Abids",
    url: "/hyderabad/ongoing/sp-palacio"
  },
  {
    name: "ALLURA",
    Location: "Hyderabad",
    description: "85 Luxury Villas in Kokapet",
    url: "/hyderabad/ongoing/allura"
  },
  {
    name: "SANCTUARY",
    Location: "Hyderabad",
    description: "Premium Plots & Villas near Tukkuguda on Srisailam Highway",
    url: "/hyderabad/ongoing/sanctuary"
  },
  {
    name: "AIRPORT BOULEVARD COMMERCIAL",
    Location: "Hyderabad",
    description: "Commercial property near Shamshabad Airport",
    url: "/hyderabad/ongoing/airport-boulevard-commercial"
  },
  {
    name: "PARK AVENUE",
    Location: "Visakhapatnam",
    description: "2, 2.5, 3 BHK Premium Apartments in Madhurawada",
    url: "/vizag/ongoing/park-avenue"
  },
  {
    name: "GOLDEN VALLEY",
    Location: "Visakhapatnam",
    description: "Premium Apartments in Madhurawada",
    url: "/vizag/ongoing/golden-valley"
  }
];


function getProjectResponse(message: string) {
  const msg = message.toLowerCase();

  // Detect location
  let location = "";
  if (msg.includes("hyderabad") || msg.includes("hyd")) {
    location = "Hyderabad";
  } else if (msg.includes("vizag") || msg.includes("visakhapatnam") || msg.includes("vskp") || msg.includes("vishakapatnam")) {
    location = "Visakhapatnam";
  }

  // If no city mentioned and no project-related keywords, skip static response
  const keywords = ["project", "projects", "homes", "property", "properties", "Ongoing", "Ongoing Projects", "Ongoing Projects in Hyderabad", "Ongoing Projects in Visakhapatnam"];
  const hasKeywords = keywords.some((keyword) => msg.includes(keyword));

  if (!location && !hasKeywords) {
    return null;
  }

  // Filter projects
  const filteredProjects = location
    ? projects.filter((p) => p.Location.toLowerCase().includes(location.toLowerCase()))
    : projects;

  if (filteredProjects.length === 0) {
    return `😕 Sorry, we couldn't find any projects${location ? " in " + location : ""}.`;
  }

  return (
    `Here are some of our featured projects${location ? " in " + location : ""}:\n\n` +
    filteredProjects
      .map(
        (p) =>
          `🏡 ${p.name}\n${p.description}\n[View More](${p.url})`
      )
      .join("\n\n")
  );
}




export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const staticReply = getProjectResponse(message);
    if (staticReply) {
      return NextResponse.json({ message: staticReply });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: REAL_ESTATE_CONTEXT
        },
        {
          role: "user",
          content: message
        }
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    return NextResponse.json({ message: completion.choices[0].message.content });
  } catch (error) {
    console.error('Error:', error);

    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    );
  }
} 