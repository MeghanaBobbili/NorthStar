import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaHome, FaRulerCombined, FaMountain, FaLeaf, FaShieldAlt, FaArrowRight } from 'react-icons/fa';

export default function HillsidePage() {
  // Project details
  const projectHighlights = [
    { icon: <FaHome className="text-xl" />, title: "Luxury Villas", text: "Premium 4 & 5 BHK villas" },
    { icon: <FaRulerCombined className="text-xl" />, title: "Land Extent", text: "32 Acres" },
    { icon: <FaRulerCombined className="text-xl" />, title: "Villa Sizes", text: "3200-5500 sq.ft." },
    { icon: <FaMountain className="text-xl" />, title: "Scenic Views", text: "Panoramic hillside views" },
    { icon: <FaLeaf className="text-xl" />, title: "Green Living", text: "60% open spaces" },
    { icon: <FaShieldAlt className="text-xl" />, title: "Security", text: "Advanced 24/7 security systems" },
  ];

  const projectOverview = {
    location: "Gandipet, Hyderabad",
    completionYear: "2018",
    totalUnits: "85 luxury villas",
    configurations: "4 & 5 BHK villas",
    amenities: "Clubhouse, infinity pool, spa, gym, nature trails",
    occupancy: "100% sold out and occupied"
  };

  const thumbnails = [
    { id: 1, src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop", alt: "Villa Exterior" },
    { id: 2, src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop", alt: "Living Room" },
    { id: 3, src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2092&auto=format&fit=crop", alt: "Garden" },
    { id: 4, src: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=2070&auto=format&fit=crop", alt: "Hillside View" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[350px] bg-gray-900 bg-cover bg-center flex items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              HILLSIDE
            </h1>
            <div className="flex items-center mb-6">
              <FaMapMarkerAlt className="text-primary mr-2" />
              <span className="text-white text-lg">Gandipet, Hyderabad</span>
            </div>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3 text-white">
                <li className="inline-flex items-center">
                  <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2">/</span>
                    <Link href="/hyderabad" className="hover:text-primary transition-colors">Hyderabad</Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2">/</span>
                    <Link href="/hyderabad/completed" className="hover:text-primary transition-colors">Completed Projects</Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2">/</span>
                    <span className="text-gray-200">Hillside</span>
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
                  src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop" 
                  alt="Hillside Luxury Villas" 
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
                  <div className="w-40 font-medium text-gray-700">Completion Year</div>
                  <div>{projectOverview.completionYear}</div>
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
                  <div>{projectOverview.occupancy}</div>
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
            <h2 className="text-3xl font-bold mb-6">About Hillside</h2>
            <div className="prose prose-lg max-w-none">
              <p>Hillside is an exclusive villa enclave strategically located in the scenic area of Gandipet, Hyderabad. Completed in 2018, this premium project is sprawled across 32 acres of undulating terrain, offering 85 ultra-luxury villas designed to provide an unparalleled living experience that harmonizes with the natural landscape.</p>
              
              <p>The villas at Hillside are architectural masterpieces, crafted with meticulous attention to detail and designed to maximize the panoramic views of the surrounding hills and Gandipet Lake. The project offers spacious 4 and 5 BHK configurations ranging from 3200 to 5500 square feet, catering to discerning homeowners seeking exclusivity and luxury.</p>
              
              <p>Hillside features world-class amenities including an infinity pool overlooking the valley, a fully-equipped clubhouse, spa and wellness center, state-of-the-art gymnasium, nature trails, and extensive landscaped gardens. The gated community provides sophisticated security systems with 24/7 surveillance, ensuring complete privacy and peace of mind for residents.</p>
              
              <p>Located in Gandipet, one of Hyderabad's most prestigious and environmentally rich areas, Hillside offers the perfect balance of serenity and convenience. Despite its tranquil setting, the community provides excellent connectivity to major business districts, educational institutions, healthcare facilities, and entertainment venues. Experience elevated living at Hillside by Northstar Homes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Villa Plans */}
      <section className="py-12 bg-gray-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Villa Plans</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-center">4 BHK - 3200 sq.ft.</h3>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1606744888344-493238951221?q=80&w=2074&auto=format&fit=crop" 
                  alt="4 BHK Villa Plan" 
                  fill 
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-center">5 BHK - 5500 sq.ft.</h3>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2092&auto=format&fit=crop" 
                  alt="5 BHK Villa Plan" 
                  fill 
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
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
                src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop" 
                alt="Villa Exterior" 
                fill 
                style={{ objectFit: "cover" }}
                className="rounded-lg hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop" 
                alt="Villa Interior" 
                fill 
                style={{ objectFit: "cover" }}
                className="rounded-lg hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=2070&auto=format&fit=crop" 
                alt="Infinity Pool" 
                fill 
                style={{ objectFit: "cover" }}
                className="rounded-lg hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=2070&auto=format&fit=crop" 
                alt="Nature Trails" 
                fill 
                style={{ objectFit: "cover" }}
                className="rounded-lg hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop" 
                alt="Clubhouse" 
                fill 
                style={{ objectFit: "cover" }}
                className="rounded-lg hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop" 
                alt="Hillside View" 
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
                src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop" 
                alt="Location Map" 
                fill 
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-lg font-medium">Hillside, Gandipet, Hyderabad</p>
              <p className="text-gray-600">Near Gandipet Lake, 20 min drive from Financial District</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Resident Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop"
                    alt="Testimonial"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h4 className="font-bold">Vikram Mehta</h4>
                  <p className="text-sm text-gray-600">Resident since 2018</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Living in Hillside has been a dream come true for our family. The tranquil environment, panoramic views, and luxurious amenities create an unparalleled living experience. The architectural design of our villa perfectly blends with the natural surroundings, and the community maintains high standards of privacy and security."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2092&auto=format&fit=crop"
                    alt="Testimonial"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h4 className="font-bold">Nandini Prasad</h4>
                  <p className="text-sm text-gray-600">Resident since 2019</p>
                </div>
              </div>
              <p className="text-gray-700">
                "We moved to Hillside seeking a retreat from the city's chaos while staying connected to Hyderabad's business districts. The result has exceeded our expectations. The infinity pool overlooking the valley, the well-designed nature trails, and the sense of community among residents make this place special. Northstar Homes has truly delivered a lifestyle, not just a home."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in Hillside?</h2>
            <p className="text-gray-700 mb-8 text-lg">
              While Hillside is fully sold out, we can help you explore resale options or similar upcoming luxury villa projects by Northstar Homes.
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