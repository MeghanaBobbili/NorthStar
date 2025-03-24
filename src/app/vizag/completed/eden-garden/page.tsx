import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaBuilding, FaRulerCombined, FaSwimmingPool, FaTree, FaShieldAlt, FaArrowRight } from 'react-icons/fa';

export default function EdenGardenPage() {
  // Project details
  const projectHighlights = [
    { icon: <FaBuilding className="text-xl" />, title: "Iconic T-shape", text: "Lets in sunlight and sea breeze in all rooms" },
    { icon: <FaRulerCombined className="text-xl" />, title: "3 BHK Luxury Flats", text: "1788-3584 sq.ft." },
    { icon: <FaSwimmingPool className="text-xl" />, title: "Grand Clubhouse", text: "14,000 sq.ft. clubhouse with amenities" },
    { icon: <FaTree className="text-xl" />, title: "Private Corridor", text: "Private corridor for each flat" },
    { icon: <FaBuilding className="text-xl" />, title: "Lavish Balconies", text: "Spacious balconies with scenic views" },
    { icon: <FaShieldAlt className="text-xl" />, title: "Prime Location", text: "Just 2.5 KM from Tenneti Park Beach" },
  ];

  const projectOverview = {
    location: "Between Kailasagiri and Simhachalam Hills, Vizag",
    status: "Completed (2020)",
    totalUnits: "Luxury apartments",
    configurations: "3 BHK luxury flats (1788-3584 sq.ft.)",
    amenities: "Swimming pool, clubhouse, gym, children's play area, basketball court, yoga room",
    occupancy: "100% sold out and occupied",
    rera: "RERA Approved Project Register No: P03280080465"
  };

  const thumbnails = [
    { id: 1, src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop", alt: "Building Exterior" },
    { id: 2, src: "https://images.unsplash.com/photo-1582037928046-2723d6fcad38?q=80&w=2070&auto=format&fit=crop", alt: "Living Room" },
    { id: 3, src: "https://images.unsplash.com/photo-1540539234-c14a20fb7c7b?q=80&w=2070&auto=format&fit=crop", alt: "Swimming Pool" },
    { id: 4, src: "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?q=80&w=2070&auto=format&fit=crop", alt: "Garden Area" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[350px] bg-gray-900 bg-cover bg-center flex items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              EDEN GARDEN
            </h1>
            <div className="flex items-center mb-6">
              <FaMapMarkerAlt className="text-primary mr-2" />
              <span className="text-white text-lg">Vizag, Andhra Pradesh</span>
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
                    <Link href="/vizag/completed" className="hover:text-primary transition-colors">Completed Projects</Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2">/</span>
                    <span className="text-gray-200">Eden Garden</span>
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
                  src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop" 
                  alt="Eden Garden Apartment Complex" 
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
                <span className="text-sm font-medium bg-success/10 text-success px-3 py-1 rounded-full">
                  COMPLETED PROJECT
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
                  <div className="w-40 font-medium text-gray-700">Occupancy</div>
                  <div className="font-semibold text-success">{projectOverview.occupancy}</div>
                </div>
                <div className="flex items-start">
                  <div className="w-40 font-medium text-gray-700">RERA</div>
                  <div>{projectOverview.rera}</div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <Link href="/contact" className="btn-primary w-full flex justify-center items-center">
                  Contact for Resale Options
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
            <h2 className="text-3xl font-bold mb-6">Dream. Discover. Dwell.</h2>
            <div className="prose prose-lg max-w-none">
              <p><strong>A magical realm which defines luxury</strong></p>
              
              <p>Epitome of elegance and luxury living. Imagine a setting which transports you to a magical reality where you are nothing but extraordinary. The exclusive address, by invitation clubs, grand homes and world-class amenities will immediately make you part of the swish set in town.</p>
              
              <p>Eden Garden at Vizag offers you a grand life in the harbour city of Andhra. We at Northstar understand that home is the place you identify with your loved ones and yourself. Wake up every day to a panoramic view of the city and blissfully immerse yourself in the light and sounds of your home, which is designed to let nature in.</p>
              
              <p>Nestled in pure serenity between Kailasagiri and Simhachalam Hills, Eden Garden provides a perfect blend of natural beauty and modern luxury. With its iconic T-shaped design that allows sunlight and sea breeze into all rooms, private corridors for each flat, and lavish balconies, this project truly stands out among residential developments in Visakhapatnam.</p>
              
              <p>The project's strategic location just 2.5 KM from Tenneti Park Beach offers residents convenient access to the city's natural beauty while maintaining proximity to essential services and amenities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plans */}
      <section className="py-12 bg-gray-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Floor Plans</h2>
          <p className="text-center text-gray-700 mb-8">The detailed floor plans of EDEN GARDEN showcase 3 BHK luxury flats in Vizag with lavish balconies. Being close to the beach, these spacious balconies are features you'll cherish.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-center">East Tower - 1788-2005 sq.ft.</h3>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1582037928046-2723d6fcad38?q=80&w=2070&auto=format&fit=crop" 
                  alt="East Tower Floor Plan" 
                  fill 
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
              <p className="text-center text-gray-700 mt-4">Spacious 3-bedroom layout with iconic T-shape design allowing maximum natural light and ventilation.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-center">North Tower - 3325-3584 sq.ft.</h3>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=2070&auto=format&fit=crop" 
                  alt="North Tower Floor Plan" 
                  fill 
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
              <p className="text-center text-gray-700 mt-4">Luxurious 3-bedroom apartment with expansive living areas, lavish balconies, and premium finishes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Premium Amenities</h2>
          <p className="text-center text-gray-700 mb-8">The premium amenities at EDEN GARDEN make it stand out from other residential apartments in Vizag.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">Children's Play Area</h3>
              <div className="relative h-[200px] rounded-lg overflow-hidden mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Children's Play Area" 
                  fill 
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
              <p className="text-gray-700 text-center">Safe and engaging play areas designed for children of all ages.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">Swimming Pool</h3>
              <div className="relative h-[200px] rounded-lg overflow-hidden mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1540539234-c14a20fb7c7b?q=80&w=2070&auto=format&fit=crop" 
                  alt="Swimming Pool" 
                  fill 
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
              <p className="text-gray-700 text-center">Elegant swimming pool with relaxation deck, perfect for leisure and recreation.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">Basketball Court</h3>
              <div className="relative h-[200px] rounded-lg overflow-hidden mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1540539234-c14a20fb7c7b?q=80&w=2070&auto=format&fit=crop" 
                  alt="Basketball Court" 
                  fill 
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
              <p className="text-gray-700 text-center">Professional-grade basketball court for sports enthusiasts.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">Gym</h3>
              <div className="relative h-[200px] rounded-lg overflow-hidden mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1582037928046-2723d6fcad38?q=80&w=2070&auto=format&fit=crop" 
                  alt="Gym" 
                  fill 
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
              <p className="text-gray-700 text-center">State-of-the-art fitness center with modern equipment.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">Theatre</h3>
              <div className="relative h-[200px] rounded-lg overflow-hidden mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Theatre" 
                  fill 
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
              <p className="text-gray-700 text-center">Private theatre for an immersive entertainment experience.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">Yoga and Meditation Room</h3>
              <div className="relative h-[200px] rounded-lg overflow-hidden mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Yoga Room" 
                  fill 
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
              <p className="text-gray-700 text-center">Tranquil space dedicated to yoga and meditation practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-12 bg-gray-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Specifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Structure</h3>
              <p className="text-gray-700">RCC Framed Structure, to withstand wind and seismic loads for Zone - II Light Weight Brick work in cement mortar</p>
              
              <h3 className="text-xl font-bold mb-4 mt-6">Plastering</h3>
              <p className="text-gray-700"><strong>Internal:</strong> Two coats cement plastering of 12 mm thick finished with luppam.</p>
              <p className="text-gray-700"><strong>External:</strong> Two coats sand faced cement plastering 18 mm thick</p>
              
              <h3 className="text-xl font-bold mb-4 mt-6">Painting</h3>
              <p className="text-gray-700"><strong>Internal:</strong> Two coats of premium quality Plastic Emulsion of Asian or equivalent paint over two coats of luppam.</p>
              <p className="text-gray-700"><strong>External:</strong> Two Coats of Weather Proof Apex paint over Primer of Asian or Equivalent</p>
              <p className="text-gray-700"><strong>Parking Area:</strong> Two Coats of OBD of Asian or equivalent</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Electrical Works</h3>
              <p className="text-gray-700">Concealed copper wiring of Poly Cab / Finolex or Equivalent & Switches of Legrand or Equivalent. Power outlets for A/Cs in Living & Bedrooms. Power outlets for geysers in all bathrooms. Power Outlets for cooking range chimney, refrigerator, microwave oven and mixer grinders in kitchen.</p>
              
              <h3 className="text-xl font-bold mb-4 mt-6">Flooring & Skirting</h3>
              <p className="text-gray-700"><strong>Living & Dining:</strong> 1 Meter X 1 Meter Full Body Vitrified Tile from RAK / Nitco or equivalent</p>
              <p className="text-gray-700"><strong>Bedrooms:</strong> 2 Feet X 2 Feet Vitrified tiles of RAK / Nitco or equivalent</p>
              <p className="text-gray-700"><strong>Toilets:</strong> Best quality acid resistant, anti-skid designer tiles</p>
              
              <h3 className="text-xl font-bold mb-4 mt-6">Toilets</h3>
              <p className="text-gray-700">Washbasin with counter, Wall Mount European water closet with flush tank of Jaguar / Hindware or equivalent, Hot and cold wall mixer with shower. All fixtures are C.P. coated from Jaguar / Hindware or equivalent</p>
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
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop" 
                alt="Building Exterior" 
                fill 
                style={{ objectFit: "cover" }}
                className="rounded-lg hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1582037928046-2723d6fcad38?q=80&w=2070&auto=format&fit=crop" 
                alt="Living Room" 
                fill 
                style={{ objectFit: "cover" }}
                className="rounded-lg hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1540539234-c14a20fb7c7b?q=80&w=2070&auto=format&fit=crop" 
                alt="Swimming Pool" 
                fill 
                style={{ objectFit: "cover" }}
                className="rounded-lg hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?q=80&w=2070&auto=format&fit=crop" 
                alt="Landscaped Garden" 
                fill 
                style={{ objectFit: "cover" }}
                className="rounded-lg hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop" 
                alt="Clubhouse Interior" 
                fill 
                style={{ objectFit: "cover" }}
                className="rounded-lg hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1582037928046-2723d6fcad38?q=80&w=2070&auto=format&fit=crop" 
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
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop" 
                alt="Location Map" 
                fill 
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-lg font-medium">Eden Garden, Vizag, Andhra Pradesh</p>
              <p className="text-gray-600">Nestled between Kailasagiri and Simhachalam Hills, just 2.5 KM from Tenneti Park Beach</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Resident Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">AM</span>
                </div>
                <div>
                  <h4 className="font-bold">Anil Mehta</h4>
                  <p className="text-gray-600 text-sm">Resident since 2020</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Living at Eden Garden has been a wonderful experience for our family. The iconic T-shaped design allows amazing natural light and sea breeze into our apartment. The quality of construction, thoughtful design, and premium amenities have exceeded our expectations. The community is vibrant, and the location offers excellent access to all the necessities."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">SK</span>
                </div>
                <div>
                  <h4 className="font-bold">Suresh Kumar</h4>
                  <p className="text-gray-600 text-sm">Resident since 2020</p>
                </div>
              </div>
              <p className="text-gray-700">
                "We've been living in Eden Garden for over three years now, and we're still impressed by the quality and craftsmanship. The lavish balconies are perfect for enjoying the sea breeze, and the private corridor for each flat adds an exclusive feel. The maintenance of common areas is excellent, and the management team is responsive. Choosing Eden Garden was one of the best decisions we've made."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in Eden Garden?</h2>
            <p className="text-gray-700 mb-8 text-lg">
              While all units at Eden Garden are sold out, we can assist with resale inquiries or help you explore similar properties in our portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Our Team
              </Link>
              <Link href="/vizag/ongoing" className="btn-outline">
                View Ongoing Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 