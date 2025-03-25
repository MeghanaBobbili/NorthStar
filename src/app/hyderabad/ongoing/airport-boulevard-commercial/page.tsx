import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaBuilding, FaRulerCombined, FaStore, FaPlane, FaRoad, FaParking, FaArrowRight } from 'react-icons/fa';

export default function AirportBoulevardCommercialPage() {
  // Project details
  const projectHighlights = [
    { icon: <FaBuilding className="text-xl" />, title: "Commercial Spaces", text: "Retail shops, offices, and more" },
    { icon: <FaRulerCombined className="text-xl" />, title: "Land Extent", text: "5.8 Acres" },
    { icon: <FaStore className="text-xl" />, title: "Unit Sizes", text: "500-5000 sq.ft." },
    { icon: <FaPlane className="text-xl" />, title: "Airport Proximity", text: "Just 3 km from Shamshabad Airport" },
    { icon: <FaRoad className="text-xl" />, title: "Connectivity", text: "Located on Srisailam Highway" },
    { icon: <FaParking className="text-xl" />, title: "Parking", text: "Ample parking space for visitors" },
  ];

  const projectOverview = {
    location: "Tukkuguda, Near Shamshabad Airport, Hyderabad",
    landExtent: "5.8 Acres",
    totalUnits: "200+ commercial spaces",
    unitSizes: "500-5000 sq.ft.",
    status: "Under Construction",
    possession: "March 2026",
    rera: "P4567890123"
  };

  const thumbnails = [
    { id: 1, src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop", alt: "Building Exterior" },
    { id: 2, src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop", alt: "Office Space" },
    { id: 3, src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop", alt: "Meeting Room" },
    { id: 4, src: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=2070&auto=format&fit=crop", alt: "Parking Area" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[350px] bg-gray-900 bg-cover bg-center flex items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              AIRPORT BOULEVARD COMMERCIAL
            </h1>
            <div className="flex items-center mb-6">
              <FaMapMarkerAlt className="text-primary mr-2" />
              <span className="text-white text-lg">Tukkuguda, Near Shamshabad Airport, Hyderabad</span>
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
                    <Link href="/hyderabad/ongoing" className="hover:text-primary transition-colors">Ongoing Projects</Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2">/</span>
                    <span className="text-gray-200">Airport Boulevard Commercial</span>
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
                <Image 
                  src="https://northstarhomes.in/assets/images/airport-banner.jpg" 
                  alt="Airport Boulevard Commercial" 
                  fill 
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="bg-white p-6 rounded-lg shadow-md h-fit">
              <div className="mb-2">
                <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
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
                  <div className="w-40 font-medium text-gray-700">Land Extent</div>
                  <div>{projectOverview.landExtent}</div>
                </div>
                <div className="flex items-start">
                  <div className="w-40 font-medium text-gray-700">Total Units</div>
                  <div>{projectOverview.totalUnits}</div>
                </div>
                <div className="flex items-start">
                  <div className="w-40 font-medium text-gray-700">Unit Sizes</div>
                  <div>{projectOverview.unitSizes}</div>
                </div>
                <div className="flex items-start">
                  <div className="w-40 font-medium text-gray-700">Status</div>
                  <div>{projectOverview.status}</div>
                </div>
                <div className="flex items-start">
                  <div className="w-40 font-medium text-gray-700">Possession</div>
                  <div>{projectOverview.possession}</div>
                </div>
                <div className="flex items-start">
                  <div className="w-40 font-medium text-gray-700">RERA Number</div>
                  <div>{projectOverview.rera}</div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <Link href="/contact" className="btn-primary w-full flex justify-center items-center">
                  Get in Touch
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
            <h2 className="text-3xl font-bold mb-6">About Airport Boulevard Commercial</h2>
            <div className="prose prose-lg max-w-none">
              <p>Airport Boulevard Commercial is a premium commercial project strategically located in Tukkuguda, just 3 kilometers from the Rajiv Gandhi International Airport in Shamshabad, Hyderabad. This project offers a range of commercial spaces including retail shops, offices, food courts, and entertainment zones.</p>
              
              <p>The project spans across 5.8 acres and features modern architecture with state-of-the-art facilities. Each commercial space is designed to maximize visibility and customer footfall, making it an ideal investment for businesses looking to establish their presence near the airport.</p>
              
              <p>Airport Boulevard Commercial boasts excellent infrastructure with wide internal roads, ample parking space, 24/7 power backup, water supply, and security. The project also includes landscaped gardens and common areas for visitors and employees to relax.</p>
              
              <p>Located on the busy Srisailam Highway and in close proximity to the airport, this commercial project enjoys excellent connectivity to all parts of Hyderabad. Invest in Airport Boulevard Commercial by Northstar Homes for a promising business opportunity in one of the fastest-growing areas of Hyderabad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Location</h2>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60911.82874080941!2d78.46946579729117!3d17.33969530056945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb987c38f3ed47%3A0x1a91c731d83f4259!2sRajiv%20Gandhi%20International%20Airport!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin" 
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

      {/* CTA Section */}
      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in Airport Boulevard Commercial?</h2>
            <p className="text-gray-700 mb-8 text-lg">
              Connect with our property experts to learn more about this premium commercial project and schedule a site visit.
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