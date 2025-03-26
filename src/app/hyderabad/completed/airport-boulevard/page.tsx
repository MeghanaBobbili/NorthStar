import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaHome, FaRulerCombined, FaPlane, FaRoad, FaLeaf, FaArrowRight } from 'react-icons/fa';
import ImageCarousel from '@/components/ImageCarousel';

export default function AirportBoulevardPage() {
  // Project details
  const projectHighlights = [
    { icon: <FaHome className="text-xl" />, title: "Smart Villas", text: "Modern 3 & 4 BHK villas" },
    { icon: <FaRulerCombined className="text-xl" />, title: "Land Extent", text: "28 Acres" },
    { icon: <FaRulerCombined className="text-xl" />, title: "Villa Sizes", text: "2200-3800 sq.ft." },
    { icon: <FaPlane className="text-xl" />, title: "Airport Proximity", text: "15 minutes from airport" },
    { icon: <FaRoad className="text-xl" />, title: "Connectivity", text: "Easy access to ORR & NH" },
    { icon: <FaLeaf className="text-xl" />, title: "Green Living", text: "45% open spaces" },
  ];

  const projectOverview = {
    location: "Tukkuguda, Hyderabad",
    completionYear: "2021",
    totalUnits: "160 smart villas",
    configurations: "3 & 4 BHK villas",
    amenities: "Clubhouse, gym, pool, smart home features",
    occupancy: "95% sold out and occupied"
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[350px] bg-gray-900 bg-cover bg-center flex items-center" style={{ backgroundImage: "url('https://northstarhomes.in/assets/images/AB_978x418-20.png')" }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              AIRPORT BOULEVARD
            </h1>
            <div className="flex items-center mb-6">
              <FaMapMarkerAlt className="text-primary mr-2" />
              <span className="text-white text-lg">Tukkuguda, Hyderabad</span>
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
                    <span className="text-gray-200">Airport Boulevard</span>
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
            {/* Left Column - Image */}
            <div className="lg:col-span-2">
              <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden">
                <ImageCarousel 
                  images={[
                    { id: 1, src: "https://northstarhomes.in/assets/images/airportbanner.jpg", alt: "Airport Boulevard Banner" },
                    { id: 2, src: "https://northstarhomes.in/assets/images/AB_978x418-20.png", alt: "Airport Boulevard View 1" },
                    { id: 3, src: "https://northstarhomes.in/assets/images/AB_978x418-22.png", alt: "Airport Boulevard View 2" },
                  ]} 
                />
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
            <h2 className="text-3xl font-bold mb-6">About Airport Boulevard</h2>
            <div className="prose prose-lg max-w-none">
              <p>Airport Boulevard is a premium smart villa community strategically located in the rapidly developing area of Tukkuguda, near Shamshabad Airport in Hyderabad. Completed in 2021, this modern project spans across 28 acres and offers 160 smart villas designed to provide a perfect blend of technology, comfort, and convenience.</p>
              
              <p>The villas at Airport Boulevard are thoughtfully designed with contemporary architecture, spacious layouts, and smart home features. The project offers 3 and 4 BHK configurations ranging from 2200 to 3800 square feet, catering to modern families looking for a tech-enabled lifestyle with excellent connectivity.</p>
              
              <p>Airport Boulevard boasts world-class amenities including a fully-equipped clubhouse, temperature-controlled swimming pool, state-of-the-art gymnasium, sports facilities, children's play area, and landscaped gardens. Each villa comes with pre-installed smart home features including video door phones, motion sensors, smart lighting, and centralized control systems. The gated community provides 24/7 security with CCTV surveillance, ensuring peace of mind for all residents.</p>
              
              <p>Located in Tukkuguda, just 15 minutes from Rajiv Gandhi International Airport, Airport Boulevard offers unmatched connectivity to major business hubs, educational institutions, healthcare facilities, and entertainment venues. The project's proximity to the Outer Ring Road (ORR) and National Highway ensures quick access to all parts of Hyderabad, making it an ideal residential choice for frequent travelers and professionals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Location</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d15243.574714581244!2d78.4762653!3d17.2239464!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bcba52be7cb9461%3A0x1e000aadb04e3134!2sNORTH%20STAR%20Airport%20Boulevard%20Tukkuguda%20-%20Airport%20View%20Point%20Rd%20Almasguda%2C%20Telangana%20501218!3m2!1d17.2239464!2d78.4762653!5e0!3m2!1sen!2sin!4v1639556765175!5m2!1sen!2sin"
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
        </div>
      </section>

      {/* Master Plan */}
      <section className="py-12 bg-gray-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Master Plan</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
              <Image 
                src="https://northstarhomes.in/assets/images/masterplan-b.jpg" 
                alt="Airport Boulevard Master Plan" 
                fill 
                style={{ objectFit: "contain" }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Smart Features Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Smart Home Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <FaHome className="text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Home Automation</h3>
              <p className="text-gray-600">Control lighting, air conditioning, and appliances from your smartphone</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <FaHome className="text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Security System</h3>
              <p className="text-gray-600">Video door phones, motion sensors, and 24/7 monitored security cameras</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <FaHome className="text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Voice Control</h3>
              <p className="text-gray-600">Compatible with voice assistants for hands-free control of smart features</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gray-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Resident Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=2074&auto=format&fit=crop"
                    alt="Testimonial"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h4 className="font-bold">Rahul Khanna</h4>
                  <p className="text-sm text-gray-600">Resident since 2021</p>
                </div>
              </div>
              <p className="text-gray-700">
                "As a frequent business traveler, the location of Airport Boulevard is perfect for me. The smart home features make life incredibly convenient, and the community has a great mix of families. The clubhouse and amenities are top-notch, making this the perfect place to call home."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop"
                    alt="Testimonial"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h4 className="font-bold">Meera Gupta</h4>
                  <p className="text-sm text-gray-600">Resident since 2022</p>
                </div>
              </div>
              <p className="text-gray-700">
                "We were looking for a modern home with all the latest technologies, and Airport Boulevard exceeded our expectations. The smart features are intuitive and make daily life so much easier. The community is well-planned with excellent amenities, and the proximity to the airport is a big plus for our family."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in Airport Boulevard?</h2>
            <p className="text-gray-700 mb-8 text-lg">
              Limited villas are still available. Contact us to schedule a visit or explore resale options in this premium smart villa community.
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