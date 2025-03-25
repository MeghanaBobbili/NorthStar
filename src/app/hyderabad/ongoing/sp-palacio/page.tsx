import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaBuilding, FaRulerCombined, FaBed, FaRegBuilding, FaShieldAlt, FaWifi, FaCarAlt, FaArrowRight } from 'react-icons/fa';
import ImageCarousel from '@/components/ImageCarousel';

export default function SPPalacioPage() {
  // Project details
  const projectHighlights = [
    { icon: <FaBuilding className="text-xl" />, title: "Luxury Apartments", text: "3 & 4 BHK premium apartments" },
    { icon: <FaRulerCombined className="text-xl" />, title: "Land Extent", text: "2.5 Acres" },
    { icon: <FaBed className="text-xl" />, title: "Flat Sizes", text: "1800-2500 sq.ft." },
    { icon: <FaRegBuilding className="text-xl" />, title: "Total Floors", text: "Ground + 19 floors" },
    { icon: <FaShieldAlt className="text-xl" />, title: "Security", text: "24/7 security with CCTV surveillance" },
    { icon: <FaWifi className="text-xl" />, title: "Smart Homes", text: "Home automation features" },
    { icon: <FaCarAlt className="text-xl" />, title: "Parking", text: "Dedicated parking with EV charging" },
  ];

  const projectOverview = {
    location: "Abids, Hyderabad",
    landExtent: "2.5 Acres",
    totalUnits: "120 Apartments",
    flatSizes: "1800-2500 sq.ft.",
    totalFloors: "G+19",
    status: "Under Construction",
    possession: "June 2025",
    rera: "P2345678901"
  };

  const thumbnails = [
    { id: 1, src: "https://northstarhomes.in/assets/images/sp_palacio-banner1.jpg", alt: "SP Palacio" },
    { id: 2, src: "https://northstarhomes.in/assets/images/sp_palacio-banner2.jpg", alt: "SP Palacio" },
    { id: 3, src: "https://northstarhomes.in/assets/images/sp_palacio-banner3.jpg", alt: "SP Palacio" },
    { id: 4, src: "https://northstarhomes.in/assets/images/sp_palacio-banner4.jpg", alt: "SP Palacio" },
    { id: 5, src: "https://northstarhomes.in/assets/images/sp_palacio-banner5.jpg", alt: "SP Palacio" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[350px] bg-gray-900 bg-cover bg-center flex items-center" style={{ backgroundImage: "url('https://northstarhomes.in/assets/images/sp_palacio-banner1.jpg')" }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              SP PALACIO - Premium Apartments
            </h1>
            <div className="flex items-center mb-6">
              <FaMapMarkerAlt className="text-primary mr-2" />
              <span className="text-white text-lg">Abids, Hyderabad</span>
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
                    <span className="text-gray-200">SP Palacio</span>
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
              <ImageCarousel images={thumbnails} />
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
                  <div className="w-40 font-medium text-gray-700">Flat Sizes</div>
                  <div>{projectOverview.flatSizes}</div>
                </div>
                <div className="flex items-start">
                  <div className="w-40 font-medium text-gray-700">Total Floors</div>
                  <div>{projectOverview.totalFloors}</div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
            <h2 className="text-3xl font-bold mb-6">About SP Palacio</h2>
            <div className="prose prose-lg max-w-none">
              <p>SP Palacio is a prestigious residential project located in the heart of Hyderabad at Abids. This high-rise luxury apartment complex offers premium 3 and 4 BHK apartments designed for modern urban living.</p>
              
              <p>The apartments at SP Palacio are thoughtfully designed with spacious rooms, high-quality finishes, and contemporary aesthetics. Each apartment maximizes natural light and ventilation, creating a comfortable and elegant living space for residents.</p>
              
              <p>The project boasts of world-class amenities including a fully-equipped gymnasium, swimming pool, children's play area, landscaped gardens, multipurpose hall, and more. The building is equipped with smart home features, allowing residents to control various aspects of their homes through their smartphones.</p>
              
              <p>Located in Abids, one of Hyderabad's most well-connected neighborhoods, SP Palacio offers excellent proximity to business districts, educational institutions, healthcare facilities, shopping malls, and entertainment venues. Experience the perfect blend of luxury, comfort, and convenience at SP Palacio by Northstar Homes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plans */}
      <section className="py-12 bg-gray-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Master Plan</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-center">Ground Floor</h3>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image 
                  src="https://northstarhomes.in/assets/images/sp_palacio-groundfloor.jpg" 
                  alt="Ground Floor Plan" 
                  fill 
                  style={{ objectFit: "contain" }}
                  className="rounded-lg"
                />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-center">Level 1</h3>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image 
                  src="https://northstarhomes.in/assets/images/SP-palacio-Level-1.jpg" 
                  alt="Level 1 Floor Plan" 
                  fill 
                  style={{ objectFit: "contain" }}
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-center">Typical Floor Plan (3 to 16 floors)</h3>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image 
                  src="https://northstarhomes.in/assets/images/sp_palacio-Typical-floor-plan.jpg" 
                  alt="Typical Floor Plan" 
                  fill 
                  style={{ objectFit: "contain" }}
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-center">Terrace Floor Plan</h3>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image 
                  src="https://northstarhomes.in/assets/images/sp_palacio-terrace-floor-plan.jpg" 
                  alt="Terrace Floor Plan" 
                  fill 
                  style={{ objectFit: "contain" }}
                  className="rounded-lg"
                />
              </div>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30453.30653301348!2d78.4608064955119!3d17.39346451209063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb978a6e1a939b%3A0xcb5a69e4aaf113fb!2sAbids%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin" 
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
            <h2 className="text-3xl font-bold mb-6">Interested in SP Palacio?</h2>
            <p className="text-gray-700 mb-8 text-lg">
              Connect with our property experts to learn more about this premium apartment project and schedule a site visit.
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