import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaBuilding, FaRulerCombined, FaWater, FaTree, FaCar, FaArrowRight } from 'react-icons/fa';
import ImageCarousel from '@/components/ImageCarousel';

export default function VedaPage() {
  // Project details
  const projectHighlights = [
    { icon: <FaBuilding className="text-xl" />, title: "Signature Apartments", text: "Premium 2 & 3 BHK apartments" },
    { icon: <FaRulerCombined className="text-xl" />, title: "Apartment Sizes", text: "1250-2100 sq.ft." },
    { icon: <FaWater className="text-xl" />, title: "Water Features", text: "Reflecting pool & water wall" },
    { icon: <FaTree className="text-xl" />, title: "Zen Garden", text: "Japanese-inspired landscaping" },
    { icon: <FaBuilding className="text-xl" />, title: "Architecture", text: "Contemporary design with Vastu principles" },
    { icon: <FaCar className="text-xl" />, title: "Parking", text: "Dedicated basement parking" },
  ];

  const projectOverview = {
    location: "Himayatnagar, Hyderabad",
    completionYear: "2019",
    totalUnits: "36 signature apartments",
    configurations: "2 & 3 BHK luxury apartments",
    amenities: "Rooftop garden, fitness center, community hall, children's play area",
    occupancy: "100% sold out and occupied"
  };

  const thumbnails = [
    { id: 1, src: "https://images.unsplash.com/photo-1486304873000-235643847519?q=80&w=2072&auto=format&fit=crop", alt: "Building Exterior" },
    { id: 2, src: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop", alt: "Living Room" },
    { id: 3, src: "https://images.unsplash.com/photo-1555529771-122e5d9f2341?q=80&w=2070&auto=format&fit=crop", alt: "Zen Garden" },
    { id: 4, src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2074&auto=format&fit=crop", alt: "Rooftop Garden" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[350px] bg-gray-900 bg-cover bg-center flex items-center" style={{ backgroundImage: "url('https://northstarhomes.in/assets/images/HS_G_978x418-3.jpg')" }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              VEDA
            </h1>
            <div className="flex items-center mb-6">
              <FaMapMarkerAlt className="text-primary mr-2" />
              <span className="text-white text-lg">Himayatnagar, Hyderabad</span>
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
                    <span className="text-gray-200">Veda</span>
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
                    { id: 1, src: "https://northstarhomes.in/assets/images/vedabanner.jpg", alt: "Veda Banner" },
                    { id: 2, src: "https://northstarhomes.in/assets/images/VEDA_G_978x418-3.jpg", alt: "Veda View 1" },
                    { id: 3, src: "https://northstarhomes.in/assets/images/HS_G_978x418-3.jpg", alt: "Veda View 2" },
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
            <h2 className="text-3xl font-bold mb-6">About Veda</h2>
            <div className="prose prose-lg max-w-none">
              <p>Veda is a signature residential project located in the heart of Himayatnagar, one of Hyderabad's most sought-after residential neighborhoods. Completed in 2019, this premium project embodies a harmonious blend of modern architecture and Vastu principles, creating a serene living environment in the midst of urban convenience.</p>
              
              <p>The project features 36 meticulously crafted apartments spread across 6 floors, offering 2 and 3 BHK configurations ranging from 1250 to 2100 square feet. Every apartment at Veda is designed to maximize natural light and ventilation, with well-proportioned rooms and quality finishes that reflect a commitment to sustainable luxury.</p>
              
              <p>Drawing inspiration from ancient Eastern philosophies, Veda incorporates elements of nature and balance throughout its design. The central courtyard features a reflecting pool and Zen garden, creating a tranquil focal point for the community. The rooftop garden provides a peaceful retreat with panoramic views of the city skyline, complete with meditation spaces and seating areas.</p>
              
              <p>Located in Himayatnagar, Veda offers exceptional connectivity to major commercial centers, educational institutions, healthcare facilities, and entertainment venues. The neighborhood is known for its vibrant cultural scene, diverse dining options, and excellent infrastructure, making it an ideal location for families and professionals seeking a balanced urban lifestyle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Master Plan */}
      <section className="py-12 bg-gray-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Master Plan</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden">
              <Image 
                src="https://northstarhomes.in/assets/images/masterplanveda.jpg" 
                alt="Veda Master Plan" 
                fill 
                style={{ objectFit: "contain" }}
                className="rounded-lg"
              />
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
              <h3 className="text-xl font-bold mb-4 text-center">Zen Garden</h3>
              <p className="text-gray-700 text-center">Japanese-inspired garden with a reflecting pool, carefully arranged stones, and manicured plants creating a peaceful ambiance.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">Rooftop Garden</h3>
              <p className="text-gray-700 text-center">Landscaped rooftop garden with seating areas, meditation spaces, and panoramic views of the city skyline.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">Fitness Center</h3>
              <p className="text-gray-700 text-center">Well-equipped fitness center with cardio machines, weight training equipment, and a yoga studio.</p>
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
                    src="/images/property-3.jpg"
                    alt="Testimonial"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h4 className="font-bold">Dr. Suresh Kumar</h4>
                  <p className="text-sm text-gray-600">Resident since 2019</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Veda has been the perfect home for our family. The thoughtful design, quality construction, and peaceful environment make it a joy to live here. The central location in Himayatnagar means everything we need is just a short walk away. The Zen garden is our favorite spot to unwind after a busy day."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/images/property-1.jpg"
                    alt="Testimonial"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h4 className="font-bold">Lakshmi Menon</h4>
                  <p className="text-sm text-gray-600">Resident since 2020</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Moving to Veda was one of the best decisions we made. The apartment is spacious and well-designed, with plenty of natural light. The community here is warm and welcoming, and the maintenance is excellent. We especially appreciate the rooftop garden, which has become our favorite spot for evening relaxation and weekend gatherings with friends."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in Veda?</h2>
            <p className="text-gray-700 mb-8 text-lg">
              While Veda is fully sold out, we can help you explore resale options or similar upcoming projects by Northstar Homes in prime locations across Hyderabad.
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