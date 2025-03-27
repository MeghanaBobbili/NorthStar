import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaBuilding, FaRulerCombined, FaLeaf, FaSwimmingPool, FaCog, FaArrowRight } from 'react-icons/fa';
import ImageCarousel from '@/components/ImageCarousel';
import DownloadBrochure from '@/components/DownloadBrochure';

export default function GardenSuitesPage() {
  // Project details
  const projectHighlights = [
    { icon: <FaBuilding className="text-xl" />, title: "Luxury Apartments", text: "4 floors with 1 flat per floor" },
    { icon: <FaRulerCombined className="text-xl" />, title: "Apartment Size", text: "4000 sq.ft. each" },
    { icon: <FaLeaf className="text-xl" />, title: "Hanging Gardens", text: "On all sides of the building" },
    { icon: <FaCog className="text-xl" />, title: "Home Automation", text: "Smart home features" },
    { icon: <FaSwimmingPool className="text-xl" />, title: "Terrace Garden", text: "With pool and barbeque" },
    { icon: <FaLeaf className="text-xl" />, title: "Landscaped Entry", text: "Natural stones and woodwork" },
  ];

  const projectOverview = {
    location: "Road 12, Banjara Hills, Hyderabad",
    completionYear: "2020",
    totalUnits: "4 premium apartments",
    configurations: "3 BHK luxury apartments",
    amenities: "Terrace pool, gym, meditation space, landscaped gardens",
    occupancy: "100% sold out and occupied"
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[350px] bg-gray-900 bg-cover bg-center flex items-center" style={{ backgroundImage: "url('/images/garden-suites/garden-suitsbanner.jpg')" }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              GARDEN SUITES
            </h1>
            <div className="flex items-center mb-6">
              <FaMapMarkerAlt className="text-primary mr-2" />
              <span className="text-white text-lg">Banjara Hills, Hyderabad</span>
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
                    <span className="text-gray-200">Garden Suites</span>
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
                    { id: 1, src: "/images/garden-suites/garden-suitsbanner.jpg", alt: "Garden Suites Banner" },
                    { id: 2, src: "/images/garden-suites/GS_G_978x418-19.jpg", alt: "Garden Suites View 1" },
                    { id: 3, src: "/images/garden-suites/GS_G_978x418-3.jpg", alt: "Garden Suites View 2" },
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
              
              <div className="pt-6 border-t border-gray-200 space-y-4">
                <Link href="/contact" className="btn-primary w-full flex justify-center items-center">
                  Enquire Now
                </Link>
                <DownloadBrochure 
                  projectName="Garden Suites"
                  brochurePath="/brochures/ghmc-approvedplans.pdf"
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
            <h2 className="text-3xl font-bold mb-6">About Garden Suites</h2>
            <div className="prose prose-lg max-w-none">
              <p>Garden Suites is an exclusive luxury apartment complex situated at the upscale Banjara Hills in Hyderabad. This uber-luxury construction boasts unique aesthetics, lavish interiors, and world-class amenities. The project brings together the best blend of technology, architecture, and design to create an abode which is pleasing to all your senses.</p>
              
              <p>The project features 4 floors with just 1 flat on each floor, each spanning a generous 4000 sq.ft. All apartments are east-facing, offering abundant natural light and ventilation. The building showcases a contemporary elevation with double-height balconies and hanging gardens on all sides, creating a harmonious blend with nature.</p>
              
              <p>Garden Suites is equipped with home and building automation systems, allowing residents to control various aspects of their living environment with ease. Each apartment features a modular kitchen with island style, premium wooden flooring, and landscaped sitouts for a luxurious living experience.</p>
              
              <p>Located on Road 12 in Banjara Hills, one of Hyderabad's most prestigious addresses, Garden Suites offers excellent connectivity to major business districts, educational institutions, healthcare facilities, shopping centers, and entertainment venues. The property is secured with 24-hour security systems, ensuring peace of mind for all residents.</p>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.96626379025!2d78.43191011431873!3d17.413406588063104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9728a069e0df%3A0x7d7ead2b338c76!2sNorthstar+Garden+Suites%2C+Rd+Number+12%2C+Banjara+Green+Colony%2C+Ministers+Colony%2C+Anand+Banjara+Colony%2C+Banjara+Hills%2C+Hyderabad%2C+Telangana+500034!5e0!3m2!1sen!2sin!4v1490597322255"
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

      {/* Floor Plans */}
      <section className="py-12 bg-gray-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Floor Plans</h2>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-center">Ground Floor Plan</h3>
              <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden">
                <Image 
                  src="/images/garden-suites/gardensuites1.jpg" 
                  alt="Ground Floor Plan" 
                  fill 
                  style={{ objectFit: "contain" }}
                  className="rounded-lg"
                />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-center">First Floor Plan</h3>
              <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden">
                <Image 
                  src="/images/garden-suites/gardensuites2.jpg" 
                  alt="First Floor Plan" 
                  fill 
                  style={{ objectFit: "contain" }}
                  className="rounded-lg"
                />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-center">Second Floor Plan</h3>
              <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden">
                <Image 
                  src="/images/garden-suites/gardensuites3.jpg" 
                  alt="Second Floor Plan" 
                  fill 
                  style={{ objectFit: "contain" }}
                  className="rounded-lg"
                />
              </div>
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
              <h3 className="text-xl font-bold mb-4 text-center">Terrace Garden</h3>
              <p className="text-gray-700 text-center">Luxurious terrace garden with swimming pool, gazebo and barbeque area for entertaining guests.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">Modular Kitchen</h3>
              <p className="text-gray-700 text-center">Contemporary modular kitchen with island style, premium fixtures and high-end appliances.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">Wellness Space</h3>
              <p className="text-gray-700 text-center">Air-conditioned gym and meditation space for physical and mental wellbeing.</p>
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
                  <span className="text-xl font-bold text-primary">SK</span>
                </div>
                <div>
                  <h4 className="font-bold">Sanjana Kapoor</h4>
                  <p className="text-sm text-gray-600">Resident since 2020</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Living at Garden Suites has been a wonderful experience. The apartments are spacious and well-designed, and the community is vibrant. The location is convenient with all amenities nearby. Northstar Homes delivered exactly what they promised, and we couldn't be happier."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-primary">RM</span>
                </div>
                <div>
                  <h4 className="font-bold">Raj Malhotra</h4>
                  <p className="text-sm text-gray-600">Resident since 2021</p>
                </div>
              </div>
              <p className="text-gray-700">
                "We were looking for a premium apartment in Banjara Hills with complete privacy and luxury, and Garden Suites exceeded our expectations. The build quality is exceptional, the terrace garden is our favorite spot, and the home automation features add a layer of convenience to everyday living. It's an excellent example of Northstar Homes' commitment to quality."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in Garden Suites?</h2>
            <p className="text-gray-700 mb-8 text-lg">
              While Garden Suites is fully sold out, we can help you explore resale options or similar upcoming luxury apartment projects by Northstar Homes.
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