import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaBuilding, FaRulerCombined, FaSwimmingPool, FaTree, FaShieldAlt, FaArrowRight } from 'react-icons/fa';

export default function ParkAvenuePage() {
  // Project details
  const projectHighlights = [
    { icon: <FaBuilding className="text-xl" />, title: "Premium Apartments", text: "2, 2.5 & 3 BHK luxury apartments" },
    { icon: <FaRulerCombined className="text-xl" />, title: "Apartment Sizes", text: "1100-1850 sq.ft." },
    { icon: <FaSwimmingPool className="text-xl" />, title: "Infinity Pool", text: "Rooftop pool with sea view" },
    { icon: <FaTree className="text-xl" />, title: "Green Spaces", text: "40% open spaces with landscaping" },
    { icon: <FaBuilding className="text-xl" />, title: "Modern Architecture", text: "Contemporary design with sea views" },
    { icon: <FaShieldAlt className="text-xl" />, title: "Security", text: "24/7 security with smart access" },
  ];

  const projectOverview = {
    location: "Madhurawada, Visakhapatnam",
    status: "Under Construction",
    possessionDate: "December 2025",
    totalUnits: "120 premium apartments",
    configurations: "2, 2.5 & 3 BHK luxury apartments",
    amenities: "Rooftop infinity pool, fitness center, clubhouse, children's play area, multipurpose hall",
    priceRange: "Starting from ₹65 Lakhs*"
  };

  const thumbnails = [
    { id: 1, src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop", alt: "Building Exterior" },
    { id: 2, src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop", alt: "Living Room" },
    { id: 3, src: "https://images.unsplash.com/photo-1536743939714-23ec5ac2dbae?q=80&w=2076&auto=format&fit=crop", alt: "Swimming Pool" },
    { id: 4, src: "https://images.unsplash.com/photo-1571984405176-5958b5f49f31?q=80&w=2070&auto=format&fit=crop", alt: "Garden Area" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[350px] bg-gray-900 bg-cover bg-center flex items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              PARK AVENUE
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
                    <span className="text-gray-200">Park Avenue</span>
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
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" 
                  alt="Park Avenue Apartment Complex" 
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
            <h2 className="text-3xl font-bold mb-6">About Park Avenue</h2>
            <div className="prose prose-lg max-w-none">
              <p>Park Avenue is a premier residential project nestled in the scenic neighborhood of Madhurawada in Visakhapatnam. This luxurious residential complex offers a perfect blend of modern architecture, thoughtful design, and premium amenities, creating an unparalleled living experience with breathtaking views of the Bay of Bengal.</p>
              
              <p>Spread across 3.5 acres of lush greenery, Park Avenue offers 120 meticulously designed 2, 2.5, and 3 BHK apartments ranging from 1100 to 1850 square feet. Each apartment is crafted with precision, featuring spacious living areas, well-ventilated rooms, premium fixtures, and high-quality finishes that reflect sophistication and elegance.</p>
              
              <p>The project is strategically located in Madhurawada, one of Vizag's fastest-growing neighborhoods, offering excellent connectivity to major business hubs, educational institutions, healthcare facilities, and entertainment venues. The proximity to the beach and IT hub adds to the charm of this residential paradise.</p>
              
              <p>Park Avenue is designed to provide an elevated lifestyle with world-class amenities including a spectacular rooftop infinity pool offering panoramic views of the sea, a state-of-the-art fitness center, beautifully landscaped gardens, a modern clubhouse, and dedicated play areas for children. The project also features secure parking, 24/7 security with smart access control, and power backup, ensuring a comfortable and convenient living experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plans */}
      <section className="py-12 bg-gray-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Floor Plans</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-center">2 BHK - 1100 sq.ft.</h3>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop" 
                  alt="2 BHK Floor Plan" 
                  fill 
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
              <p className="text-center text-gray-700 mt-4">Spacious 2-bedroom apartment with modern layout, private balcony, and sea view options.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-center">2.5 BHK - 1400 sq.ft.</h3>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop" 
                  alt="2.5 BHK Floor Plan" 
                  fill 
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
              <p className="text-center text-gray-700 mt-4">Elegant 2.5-bedroom apartment with study room, spacious balcony, and premium finishes.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-center">3 BHK - 1850 sq.ft.</h3>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop" 
                  alt="3 BHK Floor Plan" 
                  fill 
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
              <p className="text-center text-gray-700 mt-4">Luxurious 3-bedroom apartment with spacious living areas, master suite, and panoramic sea views.</p>
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
              <h3 className="text-xl font-bold mb-4 text-center">Rooftop Infinity Pool</h3>
              <div className="relative h-[200px] rounded-lg overflow-hidden mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1536743939714-23ec5ac2dbae?q=80&w=2076&auto=format&fit=crop" 
                  alt="Infinity Pool" 
                  fill 
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
              <p className="text-gray-700 text-center">Stunning infinity pool on the rooftop with panoramic views of the Bay of Bengal, perfect for relaxation and entertainment.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">Modern Clubhouse</h3>
              <div className="relative h-[200px] rounded-lg overflow-hidden mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1571984405176-5958b5f49f31?q=80&w=2070&auto=format&fit=crop" 
                  alt="Clubhouse" 
                  fill 
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
              <p className="text-gray-700 text-center">Elegant clubhouse featuring a multipurpose hall, indoor games, and lounge areas for socializing and community events.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">Fitness Center</h3>
              <div className="relative h-[200px] rounded-lg overflow-hidden mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" 
                  alt="Fitness Center" 
                  fill 
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
              <p className="text-gray-700 text-center">State-of-the-art fitness center equipped with modern exercise machines, cardio equipment, and yoga space.</p>
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
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" 
                alt="Building Exterior" 
                fill 
                style={{ objectFit: "cover" }}
                className="rounded-lg hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop" 
                alt="Living Room" 
                fill 
                style={{ objectFit: "cover" }}
                className="rounded-lg hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1536743939714-23ec5ac2dbae?q=80&w=2076&auto=format&fit=crop" 
                alt="Infinity Pool" 
                fill 
                style={{ objectFit: "cover" }}
                className="rounded-lg hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1571984405176-5958b5f49f31?q=80&w=2070&auto=format&fit=crop" 
                alt="Landscaped Garden" 
                fill 
                style={{ objectFit: "cover" }}
                className="rounded-lg hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" 
                alt="Children's Play Area" 
                fill 
                style={{ objectFit: "cover" }}
                className="rounded-lg hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop" 
                alt="Master Bedroom" 
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
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" 
                alt="Location Map" 
                fill 
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-lg font-medium">Park Avenue, Madhurawada, Visakhapatnam</p>
              <p className="text-gray-600">Close to IT hub and 15 minutes from the city center</p>
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
              <h3 className="text-xl font-bold mb-3">Education</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 5 minutes from Delhi Public School</li>
                <li>• 10 minutes from GITAM University</li>
                <li>• 15 minutes from international schools</li>
                <li>• Multiple preschools in the vicinity</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Lifestyle</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 10 minutes from beaches</li>
                <li>• 15 minutes from major shopping malls</li>
                <li>• Renowned restaurants nearby</li>
                <li>• Healthcare facilities within 10 minutes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Plans Section */}
      <section className="py-12 bg-gray-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Payment Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-center">Construction-Linked Plan</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex justify-between">
                  <span>Booking Amount</span>
                  <span className="font-medium">10%</span>
                </li>
                <li className="flex justify-between">
                  <span>On Agreement</span>
                  <span className="font-medium">10%</span>
                </li>
                <li className="flex justify-between">
                  <span>On Completion of Foundation</span>
                  <span className="font-medium">15%</span>
                </li>
                <li className="flex justify-between">
                  <span>On Completion of Structure</span>
                  <span className="font-medium">25%</span>
                </li>
                <li className="flex justify-between">
                  <span>On Completion of Finishing</span>
                  <span className="font-medium">30%</span>
                </li>
                <li className="flex justify-between">
                  <span>On Possession</span>
                  <span className="font-medium">10%</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-center">Down Payment Plan</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex justify-between">
                  <span>Booking Amount</span>
                  <span className="font-medium">10%</span>
                </li>
                <li className="flex justify-between">
                  <span>Within 30 days</span>
                  <span className="font-medium">85%</span>
                </li>
                <li className="flex justify-between">
                  <span>On Possession</span>
                  <span className="font-medium">5%</span>
                </li>
                <li className="flex justify-between pt-3">
                  <span className="font-medium">Discount</span>
                  <span className="font-bold text-primary">7%</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-center">Bank Loan Facility</h3>
              <p className="text-gray-600 mb-4">Home loan assistance available from all major banks:</p>
              <ul className="text-gray-600 space-y-2">
                <li>• SBI Home Loans</li>
                <li>• HDFC Home Loans</li>
                <li>• Axis Bank</li>
                <li>• ICICI Bank</li>
                <li>• LIC Housing Finance</li>
              </ul>
              <p className="text-gray-600 mt-4">Our team will assist you with the loan application process and documentation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in Park Avenue?</h2>
            <p className="text-gray-700 mb-8 text-lg">
              Schedule a site visit or speak with our sales team to learn more about this premium residential project in Vizag.
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