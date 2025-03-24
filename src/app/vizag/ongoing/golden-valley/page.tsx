import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaHome, FaRulerCombined, FaMountain, FaTree, FaShieldAlt, FaArrowRight, FaBuilding } from 'react-icons/fa';

export default function GoldenValleyPage() {
  // Project details
  const projectHighlights = [
    { icon: <FaBuilding className="text-xl" />, title: "Premium Apartments", text: "Exclusive luxury apartments" },
    { icon: <FaRulerCombined className="text-xl" />, title: "Apartment Sizes", text: "Spacious modern layouts" },
    { icon: <FaMountain className="text-xl" />, title: "Scenic Views", text: "Panoramic views of surroundings" },
    { icon: <FaTree className="text-xl" />, title: "Green Living", text: "Eco-friendly design features" },
    { icon: <FaHome className="text-xl" />, title: "Quality Construction", text: "Premium materials and finishes" },
    { icon: <FaShieldAlt className="text-xl" />, title: "Gated Community", text: "Multi-tier security system" },
  ];

  const projectOverview = {
    location: "Madhurawada, Visakhapatnam",
    status: "Under Construction",
    possessionDate: "June 2025",
    totalUnits: "Exclusive premium apartments",
    configurations: "Luxury apartments with modern layouts",
    amenities: "Premium amenities including landscaped gardens, community spaces, fitness center, and children's play area",
    priceRange: "Premium pricing based on configuration"
  };

  const thumbnails = [
    { id: 1, src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070&auto=format&fit=crop", alt: "Building Exterior" },
    { id: 2, src: "https://images.unsplash.com/photo-1600585154526-990dced4db3d?q=80&w=2070&auto=format&fit=crop", alt: "Living Room" },
    { id: 3, src: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop", alt: "Swimming Pool" },
    { id: 4, src: "https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?q=80&w=2074&auto=format&fit=crop", alt: "Garden Area" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[350px] bg-gray-900 bg-cover bg-center flex items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              GOLDEN VALLEY
            </h1>
            <div className="flex items-center mb-6">
              <FaMapMarkerAlt className="text-primary mr-2" />
              <span className="text-white text-lg">Madhurawada, Visakhapatnam</span>
            </div>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3 text-white">
                <li className="inline-flex items-center">
                  <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2">/</span>
                    <Link href="/vizag" className="hover:text-primary transition-colors">Vizag</Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2">/</span>
                    <Link href="/vizag/ongoing" className="hover:text-primary transition-colors">Ongoing Projects</Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2">/</span>
                    <span className="text-gray-200">Golden Valley</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images */}
            <div className="lg:col-span-2">
              <div className="relative h-[400px] md:h-[500px] mb-4 rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070&auto=format&fit=crop" 
                  alt="Golden Valley Apartment Complex" 
                  fill 
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>

              <div className="grid grid-cols-4 gap-4">
                {thumbnails.map((img) => (
                  <div key={img.id} className="relative h-24 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                    <Image 
                      src={img.src}
                      alt={img.alt}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="bg-white p-6 rounded-lg shadow-md h-fit">
              <div className="mb-2">
                <span className="text-sm font-medium bg-warning/10 text-warning px-3 py-1 rounded-full">
                  ONGOING PROJECT
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="w-40 font-medium text-gray-700">Location</div>
                  <div>{projectOverview.location}</div>
                </div>
                <div className="flex items-start">
                  <div className="w-40 font-medium text-gray-700">Status</div>
                  <div>{projectOverview.status}</div>
                </div>
                <div className="flex items-start">
                  <div className="w-40 font-medium text-gray-700">Possession Date</div>
                  <div>{projectOverview.possessionDate}</div>
                </div>
                <div className="flex items-start">
                  <div className="w-40 font-medium text-gray-700">Total Units</div>
                  <div>{projectOverview.totalUnits}</div>
                </div>
                <div className="flex items-start">
                  <div className="w-40 font-medium text-gray-700">Configurations</div>
                  <div>{projectOverview.configurations}</div>
                </div>
                <div className="flex items-start">
                  <div className="w-40 font-medium text-gray-700">Amenities</div>
                  <div>{projectOverview.amenities}</div>
                </div>
                <div className="flex items-start">
                  <div className="w-40 font-medium text-gray-700">Price Range</div>
                  <div className="font-semibold text-primary">{projectOverview.priceRange}</div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <Link href="/contact" className="btn-primary w-full flex justify-center items-center">
                  Enquire Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-12 bg-gray-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Project Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectHighlights.map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="lg:max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">About Golden Valley</h2>
            <div className="prose prose-lg max-w-none">
              <p>Golden Valley is an exclusive residential project located in the prime area of Madhurawada, Visakhapatnam. This premium development offers thoughtfully designed luxury apartments in one of Vizag's most sought-after neighborhoods, providing residents with a perfect combination of comfort, convenience, and modern lifestyle.</p>
              
              <p>The project features meticulously crafted apartments with contemporary design, premium fixtures, and quality finishes, catering to the needs of discerning homebuyers. Each residence is designed to maximize space utilization while ensuring ample natural light and ventilation, creating a pleasant living environment.</p>
              
              <p>Golden Valley is strategically located in Madhurawada, a rapidly developing area of Visakhapatnam that offers excellent connectivity to key destinations in the city. The neighborhood is surrounded by established infrastructure, educational institutions, healthcare facilities, entertainment venues, and shopping centers, making it an ideal place to call home.</p>
              
              <p>Residents of Golden Valley will enjoy access to a range of premium amenities designed to enhance their quality of life. The project includes landscaped gardens, community spaces, a fitness center, and children's play areas, among other facilities, providing ample opportunities for relaxation, recreation, and socialization within the community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Apartment Types */}
      <section className="py-12 bg-gray-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Apartment Types</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-center">Type A</h3>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db3d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Type A Apartment" 
                  fill 
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
              <p className="text-center text-gray-700 mt-4">Spacious layout with modern design and premium finishes, perfect for families looking for comfort and elegance.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-center">Type B</h3>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1598928636135-d146006ff4be?q=80&w=2070&auto=format&fit=crop" 
                  alt="Type B Apartment" 
                  fill 
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
              <p className="text-center text-gray-700 mt-4">Contemporary design with open living spaces, large windows, and quality finishes throughout.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Premium Amenities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">Landscaped Gardens</h3>
              <div className="relative h-[200px] rounded-lg overflow-hidden mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?q=80&w=2074&auto=format&fit=crop" 
                  alt="Landscaped Gardens" 
                  fill 
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
              <p className="text-gray-700 text-center">Beautifully designed green spaces perfect for relaxation, outdoor activities, and connecting with nature.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">Community Center</h3>
              <div className="relative h-[200px] rounded-lg overflow-hidden mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070&auto=format&fit=crop" 
                  alt="Community Center" 
                  fill 
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
              <p className="text-gray-700 text-center">Modern community space designed for social gatherings, celebrations, and community events.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">Fitness Center</h3>
              <div className="relative h-[200px] rounded-lg overflow-hidden mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db3d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Fitness Center" 
                  fill 
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
              <p className="text-gray-700 text-center">Well-equipped fitness center featuring modern exercise equipment for residents to maintain an active lifestyle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070&auto=format&fit=crop" 
                alt="Building Exterior" 
                fill 
                style={{ objectFit: "cover" }}
                className="rounded-lg hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1600585154526-990dced4db3d?q=80&w=2070&auto=format&fit=crop" 
                alt="Living Room" 
                fill 
                style={{ objectFit: "cover" }}
                className="rounded-lg hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop" 
                alt="Community Spaces" 
                fill 
                style={{ objectFit: "cover" }}
                className="rounded-lg hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?q=80&w=2074&auto=format&fit=crop" 
                alt="Landscaped Garden" 
                fill 
                style={{ objectFit: "cover" }}
                className="rounded-lg hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1600585154526-990dced4db3d?q=80&w=2070&auto=format&fit=crop" 
                alt="Fitness Center" 
                fill 
                style={{ objectFit: "cover" }}
                className="rounded-lg hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070&auto=format&fit=crop" 
                alt="Interior Design" 
                fill 
                style={{ objectFit: "cover" }}
                className="rounded-lg hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-12 bg-gray-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Location Map</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1600585154526-990dced4db3d?q=80&w=2070&auto=format&fit=crop" 
                alt="Location Map" 
                fill 
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-lg font-medium">Golden Valley, Madhurawada, Visakhapatnam</p>
              <p className="text-gray-600">Strategically located with excellent connectivity to key areas of the city</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Advantages */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Location Advantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Connectivity</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 15 minutes from Vizag city center</li>
                <li>• 25 minutes from Visakhapatnam Railway Station</li>
                <li>• 30 minutes from Visakhapatnam Airport</li>
                <li>• Well-connected by public transportation</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Education & Healthcare</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Proximity to prestigious educational institutions</li>
                <li>• Top-rated healthcare facilities nearby</li>
                <li>• International schools within easy reach</li>
                <li>• Multiple colleges and universities in the vicinity</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Lifestyle</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Close to shopping malls and entertainment centers</li>
                <li>• Variety of dining options nearby</li>
                <li>• Easy access to beaches and recreational areas</li>
                <li>• Growing IT hub with employment opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Project Status */}
      <section className="py-12 bg-gray-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Project Status</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Current Progress (As of August 2024)</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Design & Planning</span>
                  <span className="text-success">100% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-success h-2.5 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Approvals & Permits</span>
                  <span className="text-success">100% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-success h-2.5 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Foundation Work</span>
                  <span className="text-primary">80% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Structural Work</span>
                  <span className="text-warning">40% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-warning h-2.5 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Interior Work</span>
                  <span className="text-warning">15% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-warning h-2.5 rounded-full" style={{ width: '15%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in Golden Valley?</h2>
            <p className="text-gray-700 mb-8 text-lg">
              Schedule a consultation or speak with our sales team to learn more about this premium residential project in Vizag.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <a href="tel:+918657553355" className="btn-outline">
                Call: +91 8657553355
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 