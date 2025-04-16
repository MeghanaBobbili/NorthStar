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
    bhks: ["3", "4"],
    area: "Abids",
    
    url: "/hyderabad/ongoing/sp-palacio",
    features: [
      "3 & 4 BHK apartments from 2251 sft. to 3376 sft.",
      "Amenities including Cricket practice nets, jogging track, Swimming pool, gym",
      "Serene elderly seating area, car wash area",
      "1 Basement + 4 Elevated Parking Levels + 16 Floors",
      "150 premium apartments"
    ]
  },
  {
    name: "ALLURA",
    Location: "Hyderabad",
    description: "4 BHK Luxury Villas in Kokapet",
    bhks: ["4"],
    area: "Kokapet",
    url: "/hyderabad/ongoing/allura",
    features: [
      "4 BHK villas from 4000 sq.ft. to 5000 sq.ft.",
      "Amenities including Amphi Theater, Seating Area, Zen Garden",
      "OutDoor Gym, Half Basket Ball, Kids Play Area",
      "Cricket Practicing Net",
      "Clubhouse with Swimming pool, Gymnasium, Meeting Hall"
    ]
  },
  {
    name: "SANCTUARY",
    Location: "Hyderabad",
    description: "Premium Plots & 4 BHK Villas near Tukkuguda on Srisailam Highway",
    bhks: ["4"],
    area: "Tukkuguda",
    url: "/hyderabad/ongoing/sanctuary",
    features: [
      "4 BHK villas from 343 sq.yards to 500 sq.yards",
      "Premium plots available",
      "Located on Srisailam Highway",
      "Modern amenities and facilities"
    ]
  },
  {
    name: "AIRPORT BOULEVARD COMMERCIAL",
    Location: "Hyderabad",
    description: "Commercial property near Shamshabad Airport",
    bhks: [],
    area: "Shamshabad",
    url: "/hyderabad/ongoing/airport-boulevard-commercial",
    features: [
      "Commercial spaces from 500-5000 sq.ft.",
      "200+ commercial spaces",
      "Ample parking space for visitors",
      "Prime location near Shamshabad Airport"
    ]
  },
  {
    name: "PARK AVENUE",
    Location: "Visakhapatnam",
    description: "2, 2.5, 3 BHK Premium Apartments in Madhurawada",
    bhks: ["2", "2.5", "3"],
    area: "Madhurawada",
    url: "/vizag/ongoing/park-avenue",
    features: [
      "Premium apartments with modern amenities",
      "2, 2.5, and 3 BHK configurations",
      "Located in Madhurawada",
      "Gated community with security"
    ]
  },
  {
    name: "GOLDEN VALLEY",
    Location: "Visakhapatnam",
    description: "Premium Apartments in Madhurawada",
    bhks: ["2", "2.5", "3", "3.5"],
    area: "Madhurawada",
    url: "/vizag/ongoing/golden-valley",
    features: [
      "Premium apartments with modern amenities",
      "2, 2.5, 3, and 3.5 BHK configurations",
      "Located in Madhurawada",
      "Gated community with security"
    ]
  }
];

function getProjectResponse(message: string) {
  const msg = message.toLowerCase();

  // Function to calculate similarity between two strings
  const similarity = (s1: string, s2: string) => {
    const longer = s1.length > s2.length ? s1 : s2;
    const shorter = s1.length > s2.length ? s2 : s1;
    const longerLength = longer.length;
    if (longerLength === 0) return 1.0;
    return (longerLength - editDistance(longer, shorter)) / longerLength;
  };

  // Function to calculate edit distance
  const editDistance = (s1: string, s2: string) => {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    const costs = [];
    for (let i = 0; i <= s1.length; i++) {
      let lastValue = i;
      for (let j = 0; j <= s2.length; j++) {
        if (i === 0) costs[j] = j;
        else {
          if (j > 0) {
            let newValue = costs[j - 1];
            if (s1.charAt(i - 1) !== s2.charAt(j - 1))
              newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
            costs[j - 1] = lastValue;
            lastValue = newValue;
          }
        }
      }
      if (i > 0) costs[s2.length] = lastValue;
    }
    return costs[s2.length];
  };

  // Check for specific project queries with fuzzy matching
  const projectNames = projects.map(p => ({
    original: p.name,
    normalized: p.name.toLowerCase().replace("northstar ", "").replace(/\s+/g, '')
  }));

  // Try to find a matching project with fuzzy matching
  let bestMatch = null;
  let bestScore = 0.7; // Minimum similarity threshold

  for (const project of projects) {
    const normalizedProjectName = project.name.toLowerCase().replace("northstar ", "").replace(/\s+/g, '');
    const normalizedMsg = msg.replace(/\s+/g, '');
    
    // Check for exact match or partial match
    if (normalizedMsg.includes(normalizedProjectName) || 
        normalizedProjectName.includes(normalizedMsg)) {
      bestMatch = project;
      bestScore = 1;
      break;
    }
    
    // Calculate similarity score
    const score = similarity(normalizedMsg, normalizedProjectName);
    if (score > bestScore) {
      bestScore = score;
      bestMatch = project;
    }
  }

  if (bestMatch) {
    let response = `🏡 ${bestMatch.name}\n\n`;
    response += `📍 Location: ${bestMatch.Location} - ${bestMatch.area}\n`;
    response += `📝 Description: ${bestMatch.description}\n\n`;
    
    if (bestMatch.bhks.length > 0) {
      response += `🏠 Available Configurations: ${bestMatch.bhks.join(', ')} BHK\n\n`;
    }
    
    response += `✨ Key Features:\n`;
    bestMatch.features.forEach(feature => {
      response += `• ${feature}\n`;
    });
    
    response += `\n[View More Details](${bestMatch.url})`;
    return response;
  }

  // Extract BHK information with more flexible matching
  const bhkMatch = msg.match(/(\d+(?:\.\d+)?)\s*(?:bhk|bedroom|bed|room)/i);
  const requestedBhks = bhkMatch ? bhkMatch[1].split(/[.,&]/).map(b => b.trim()) : null;

  // Extract location information with more flexible matching
  let location = "";
  let area = "";
  
  // Check for city with variations
  const cityVariations = {
    hyderabad: ["hyderabad", "hyd", "hyderbad", "hyderabd"],
    visakhapatnam: ["visakhapatnam", "vizag", "vskp", "vishakapatnam", "vizak"]
  };

  for (const [city, variations] of Object.entries(cityVariations)) {
    if (variations.some(v => msg.includes(v))) {
      location = city.charAt(0).toUpperCase() + city.slice(1);
      break;
    }
  }

  // Check for specific areas with variations
  const areaVariations = {
    kokapet: ["kokapet", "kokapet", "kokapete"],
    abids: ["abids", "abid"],
    tukkuguda: ["tukkuguda", "tukuguda", "tukuguda"],
    shamshabad: ["shamshabad", "shamshbad", "shamshbad"],
    madhurawada: ["madhurawada", "madhurawda", "madhurawda"]
  };

  for (const [areaName, variations] of Object.entries(areaVariations)) {
    if (variations.some(v => msg.includes(v))) {
      area = areaName;
      break;
    }
  }

  // Filter projects based on criteria
  let filteredProjects = projects;

  if (location) {
    filteredProjects = filteredProjects.filter(p => p.Location.toLowerCase() === location.toLowerCase());
  }

  if (area) {
    filteredProjects = filteredProjects.filter(p => p.area.toLowerCase() === area.toLowerCase());
  }

  if (requestedBhks) {
    filteredProjects = filteredProjects.filter(p => 
      p.bhks.some(bhk => requestedBhks.some(reqBhk => bhk === reqBhk))
    );
  }

  // If no specific filters but contains project-related keywords
  const keywords = ["project", "projects", "homes", "property", "properties", "ongoing"];
  const hasKeywords = keywords.some(keyword => msg.includes(keyword));

  if (!location && !area && !requestedBhks && !hasKeywords) {
    return null;
  }

  if (filteredProjects.length === 0) {
    // Find similar projects
    let similarProjects = projects;
    
    // If location was specified but no matches, show all projects in that city
    if (location) {
      similarProjects = similarProjects.filter(p => p.Location.toLowerCase() === location.toLowerCase());
    }
    
    // If BHK was specified but no matches, show projects with similar BHK configurations
    if (requestedBhks) {
      const requestedBhkNum = parseFloat(requestedBhks[0]);
      similarProjects = similarProjects.filter(p => 
        p.bhks.some(bhk => {
          const bhkNum = parseFloat(bhk);
          return Math.abs(bhkNum - requestedBhkNum) <= 1; // Show projects with BHK within ±1 of requested
        })
      );
    }

    // If area was specified but no matches, show projects in the same city
    if (area && similarProjects.length === 0) {
      similarProjects = projects.filter(p => p.Location.toLowerCase() === location.toLowerCase());
    }

    if (similarProjects.length > 0) {
      let response = "😕 We couldn't find exact matches, but here are some similar projects";
      if (location) response += ` in ${location}`;
      if (area) response += ` near ${area}`;
      if (requestedBhks) response += ` with similar BHK configurations`;
      response += ":\n\n";

      return response + similarProjects
        .map(p => `🏡 ${p.name}\n${p.description}\n[View More](${p.url})`)
        .join("\n\n");
    }

    // If no similar projects found, show all projects
    return "😕 We couldn't find any matching projects. Here are all our current projects:\n\n" +
      projects
        .map(p => `🏡 ${p.name}\n${p.description}\n[View More](${p.url})`)
        .join("\n\n");
  }

  let response = "Here are the projects matching your criteria";
  if (location) response += ` in ${location}`;
  if (area) response += ` in ${area}`;
  if (requestedBhks) response += ` with ${requestedBhks.join(' & ')} BHK`;
  response += ":\n\n";

  return response + filteredProjects
    .map(p => `🏡 ${p.name}\n${p.description}\n[View More](${p.url})`)
    .join("\n\n");
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