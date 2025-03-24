import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaBuilding, FaRulerCombined, FaBed, FaBath, FaSwimmingPool, FaTree, FaArrowRight } from 'react-icons/fa';

export default function TheLeelaPage() {
  // Project details
  const projectHighlights = [
    { icon: <FaBuilding className="text-xl" />, title: "Premium Apartments", text: "Luxury 2, 3 & 4 BHK apartments" },
    { icon: <FaRulerCombined className="text-xl" />, title: "Land Extent", text: "4.2 Acres" },
    { icon: <FaBed className="text-xl" />, title: "Flat Sizes", text: "1250-2800 sq.ft." },
    { icon: <FaBath className="text-xl" />, title: "Modern Bathrooms", text: "Premium fittings & fixtures" },
    { icon: <FaSwimmingPool className="text-xl" />, title: "Swimming Pool", text: "Temperature controlled pool" },
    { icon: <FaTree className="text-xl" />, title: "Green Spaces", text: "40% open space & landscaped gardens" },
  ];

  const projectOverview = {
    location: "Padmarao Nagar, Hyderabad",
    completionYear: "2020",
    totalUnits: "240 premium apartments",
    configurations: "2, 3 & 4 BHK apartments",
    amenities: "Clubhouse, gym, pool, children's play area",
    occupancy: "95% occupied by families"
  };

  const thumbnails = [
    { id: 1, src: "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=2070&auto=format&fit=crop", alt: "Building Exterior" },
    { id: 2, src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop", alt: "Living Room" },
    { id: 3, src: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop", alt: "Kitchen" },
    { id: 4, src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop", alt: "Master Bedroom" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[350px] bg-gray-900 bg-cover bg-center flex items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              THE LEELA
            </h1>
            <div className="flex items-center mb-6">
              <FaMapMarkerAlt className="text-primary mr-2" />
              <span className="text-white text-lg">Padmarao Nagar, Hyderabad</span>
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
                    <span className="text-gray-200">The Leela</span>
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
                  src="https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=2070&auto=format&fit=crop" 
                  alt="The Leela Apartments" 
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
            <h2 className="text-3xl font-bold mb-6">About The Leela</h2>
            <div className="prose prose-lg max-w-none">
              <p>The Leela is a premium residential apartment complex located in the vibrant neighborhood of Padmarao Nagar, Hyderabad. Completed in 2020, this elegant project spans across 4.2 acres and offers 240 luxury apartments designed to provide a perfect blend of comfort, convenience, and style.</p>
              
              <p>The apartments at The Leela are thoughtfully designed with spacious layouts, excellent cross-ventilation, and abundant natural light. The project offers 2, 3, and 4 BHK configurations ranging from 1250 to 2800 square feet, catering to different lifestyle needs.</p>
              
              <p>The Leela boasts world-class amenities including a fully-equipped clubhouse, temperature-controlled swimming pool, state-of-the-art gymnasium, children's play area, landscaped gardens, walking tracks, and multi-purpose hall. The gated community provides 24/7 security with CCTV surveillance, ensuring peace of mind for all residents.</p>
              
              <p>Located in Padmarao Nagar, one of Hyderabad's well-established residential areas, The Leela offers excellent connectivity to major business districts, educational institutions, healthcare facilities, shopping centers, and entertainment venues. Experience elevated living at The Leela by Northstar Homes.</p>
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
              <h3 className="text-2xl font-bold mb-4 text-center">2 BHK - 1250 sq.ft.</h3>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop" 
                  alt="2 BHK Floor Plan" 
                  fill 
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-center">3 BHK - 1800 sq.ft.</h3>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop" 
                  alt="3 BHK Floor Plan" 
                  fill 
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-center">4 BHK - 2800 sq.ft.</h3>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop" 
                  alt="4 BHK Floor Plan" 
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
                src="https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=2070&auto=format&fit=crop" 
                alt="Building Exterior" 
                fill 
                style={{ objectFit: "cover" }}
                className="rounded-lg hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop" 
                alt="Swimming Pool" 
                fill 
                style={{ objectFit: "cover" }}
                className="rounded-lg hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop" 
                alt="Gym" 
                fill 
                style={{ objectFit: "cover" }}
                className="rounded-lg hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop" 
                alt="Clubhouse" 
                fill 
                style={{ objectFit: "cover" }}
                className="rounded-lg hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=2070&auto=format&fit=crop" 
                alt="Children's Play Area" 
                fill 
                style={{ objectFit: "cover" }}
                className="rounded-lg hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop" 
                alt="Landscaped Gardens" 
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
          <h2 className="text-3xl font-bold mb-8 text-center">Location</h2>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15226.125132850762!2d78.48292389564005!3d17.4104249120024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93684604d5d403!2sPadmarao%20Nagar%2C%20Secunderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
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
                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop"
                    alt="Resident"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h4 className="font-bold">Anil Reddy</h4>
                  <p className="text-sm text-gray-600">Resident since 2020</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Living at The Leela has been a wonderful experience for my family. The quality of construction is excellent, and the amenities are well-maintained. The community has a great mix of families, and the location is perfect for access to the city."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop"
                    alt="Resident"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h4 className="font-bold">Lakshmi Prasad</h4>
                  <p className="text-sm text-gray-600">Resident since 2021</p>
                </div>
              </div>
              <p className="text-gray-700">
                "We purchased a 3 BHK apartment at The Leela after looking at several projects in Hyderabad. The spacious layouts, quality finishes, and excellent amenities made it an easy choice. Northstar Homes delivered on all their promises, and we are happy to call The Leela our home."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in The Leela?</h2>
            <p className="text-gray-700 mb-8 text-lg">
              Contact our sales team to learn more about available resale options at The Leela.
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