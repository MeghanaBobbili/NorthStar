import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaHome, FaRulerCombined, FaTree, FaWater, FaShieldAlt, FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import ImageCarousel from '@/components/ImageCarousel';
import DownloadBrochure from '@/components/DownloadBrochure';

export default function HillsidePage() {
  // Project details
  const projectHighlights = [
    { icon: <FaHome className="text-xl" />, title: "Luxury Villas", text: "Exclusive 3 & 4 BHK villas" },
    { icon: <FaRulerCombined className="text-xl" />, title: "Land Extent", text: "30 Acres" },
    { icon: <FaRulerCombined className="text-xl" />, title: "Villa Sizes", text: "3000-4500 sq.ft." },
    { icon: <FaTree className="text-xl" />, title: "Green Spaces", text: "60% open space & landscaped gardens" },
    { icon: <FaWater className="text-xl" />, title: "Water Features", text: "Multiple lakes and water bodies" },
    { icon: <FaShieldAlt className="text-xl" />, title: "Security", text: "24/7 security with CCTV surveillance" },
  ];

  const projectOverview = {
    location: "Kokapet, Hyderabad",
    completionYear: "2020",
    totalUnits: "150 luxury villas",
    configurations: "3 & 4 BHK villas",
    amenities: "Clubhouse, gym, pool, tennis court, jogging track",
    occupancy: "100% sold out and occupied"
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[350px] bg-gray-900 bg-cover bg-center flex items-center">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              HILLSIDE
            </h1>
            <div className="flex items-center mb-6">
              <FaMapMarkerAlt className="text-primary mr-2" />
              <span className="text-white text-lg">Kokapet, Hyderabad</span>
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
            {/* Left Column - Image */}
            <div className="lg:col-span-2">
              <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden">
                <ImageCarousel 
                  images={[
                    { id: 1, src: "/images/hillside/A30I9544.jpg", alt: "Hillside Banner" },
                    { id: 2, src: "/images/hillside/HS_G_978x418-7.jpg", alt: "Hillside View 1" },
                    { id: 3, src: "/images/hillside/HS_G_978x418-6.jpg", alt: "Hillside View 2" },
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
              
              <div className="space-y-4">
                <a
                  href="https://wa.me/919100000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="h-4 w-4" />
                  Enquire Now
                </a>
                <DownloadBrochure 
                  projectName="Hillside"
                  brochurePath="/brochures/hillside-brochure.pdf"
                />
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
              <p>Hillside is a premium gated villa community located in the serene neighborhood of Kokapet, Hyderabad. Completed in 2020, this elegant project spans across 30 acres and offers 150 luxury villas designed to provide a perfect blend of comfort, sophistication, and natural beauty.</p>
              
              <p>The villas at Hillside are thoughtfully designed with spacious layouts, excellent cross-ventilation, and abundant natural light. The project offers 3 and 4 BHK configurations ranging from 3000 to 4500 square feet, catering to discerning homeowners looking for luxury and privacy.</p>
              
              <p>Hillside boasts world-class amenities including a fully-equipped clubhouse, temperature-controlled swimming pool, state-of-the-art gymnasium, tennis court, jogging track, children's play area, and expansive landscaped gardens with multiple lakes. The gated community provides 24/7 security with CCTV surveillance, ensuring peace of mind for all residents.</p>
              
              <p>Located in Kokapet, one of Hyderabad's fastest-growing residential areas, Hillside offers excellent connectivity to major business districts, educational institutions, healthcare facilities, shopping centers, and entertainment venues. Experience elevated living at Hillside by Northstar Homes.</p>
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
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7615.230677850201!2d78.325122!3d17.382233!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb94e5a79c431f%3A0xf5db3ae7e7ce52bb!2sNorthstar%20Hillside!5e0!3m2!1sen!2sin!4v1573554146654!5m2!1sen!2sin"
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
          <div className="max-w-4xl mx-auto">
            <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden">
              <Image 
                src="/images/hillside/Master-Plan-hillside.jpg" 
                alt="Hillside Master Plan" 
                fill 
                style={{ objectFit: "contain" }}
                className="rounded-lg"
              />
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
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-primary">RK</span>
                </div>
                <div>
                  <h4 className="font-bold">Ravi Kumar</h4>
                  <p className="text-sm text-gray-600">Resident since 2020</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Living in Hillside has been a wonderful experience for my family. The villa design is excellent with spacious rooms and great ventilation. The community is well-maintained with beautiful gardens and excellent amenities. The security system gives us complete peace of mind."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-primary">PS</span>
                </div>
                <div>
                  <h4 className="font-bold">Priya Sharma</h4>
                  <p className="text-sm text-gray-600">Resident since 2021</p>
                </div>
              </div>
              <p className="text-gray-700">
                "We chose Hillside for its excellent location and premium villas. The community has exceeded our expectations with its world-class amenities and beautiful landscaping. The central lake is our favorite spot for evening walks. Northstar Homes has delivered a truly premium living experience."
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
              While Hillside is fully sold out, we can help you explore resale options or similar upcoming projects by Northstar Homes.
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