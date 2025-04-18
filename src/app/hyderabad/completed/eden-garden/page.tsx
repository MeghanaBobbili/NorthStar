import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaHome, FaRulerCombined, FaTree, FaWater, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import ImageCarousel from '@/components/ImageCarousel';
import DownloadBrochure from '@/components/DownloadBrochure';

export default function EdenGardenPage() {
  // Project details
  const projectHighlights = [
    { icon: <FaHome className="text-xl" />, title: "Luxury Villas", text: "Exclusive 3 & 4 BHK villas" },
    { icon: <FaRulerCombined className="text-xl" />, title: "Land Extent", text: "25 Acres" },
    { icon: <FaRulerCombined className="text-xl" />, title: "Villa Sizes", text: "2500-4000 sq.ft." },
    { icon: <FaTree className="text-xl" />, title: "Green Spaces", text: "50% open space & landscaped gardens" },
    { icon: <FaWater className="text-xl" />, title: "Water Features", text: "Central lake and fountain" },
    { icon: <FaShieldAlt className="text-xl" />, title: "Security", text: "24/7 security with CCTV surveillance" },
  ];

  const projectOverview = {
    location: "Kokapet, Hyderabad",
    completionYear: "2019",
    totalUnits: "120 luxury villas",
    configurations: "3 & 4 BHK villas",
    amenities: "Clubhouse, gym, pool, tennis court, jogging track",
    occupancy: "100% sold out and occupied"
  };

  const thumbnails = [
    { id: 1, src: "/images/about-img.jpg", alt: "Villa Exterior" },
    { id: 2, src: "/images/property-1.jpg", alt: "Living Room" },
    { id: 3, src: "/images/property-2.jpg", alt: "Garden" },
    { id: 4, src: "/images/property-3.jpg", alt: "Community Area" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[350px] bg-gray-900 bg-cover bg-center flex items-center" style={{ backgroundImage: "url('/images/eden-garden/eden-garden.jpg')" }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              EDEN GARDEN
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
            {/* Left Column - Image */}
            <div className="lg:col-span-2">
              <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden">
                <ImageCarousel 
                  images={[
                    { id: 1, src: "/images/eden-garden/eden-garden.jpg", alt: "Eden Garden Banner" },
                    { id: 2, src: "/images/eden-garden/EGK_7_978x418.jpg", alt: "Eden Garden View 1" },
                    { id: 3, src: "/images/eden-garden/EGK_West%20Rear_978x418.jpg", alt: "Eden Garden West Rear View" },
                  ]} 
                />
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="bg-white p-6 rounded-lg shadow-md h-fit">
              <div className="mb-2">
                <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
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
                  projectName="Eden Garden"
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
            <h2 className="text-3xl font-bold mb-6">About Eden Garden</h2>
            <div className="prose prose-lg max-w-none">
              <p>Eden Garden is a premium gated villa community located in the serene neighborhood of Kokapet, Hyderabad. Completed in 2019, this elegant project spans across 25 acres and offers 120 luxury villas designed to provide a perfect blend of comfort, sophistication, and natural beauty.</p>
              
              <p>The villas at Eden Garden are thoughtfully designed with spacious layouts, excellent cross-ventilation, and abundant natural light. The project offers 3 and 4 BHK configurations ranging from 2500 to 4000 square feet, catering to discerning homeowners looking for luxury and privacy.</p>
              
              <p>Eden Garden boasts world-class amenities including a fully-equipped clubhouse, temperature-controlled swimming pool, state-of-the-art gymnasium, tennis court, jogging track, children's play area, and expansive landscaped gardens with a central lake. The gated community provides 24/7 security with CCTV surveillance, ensuring peace of mind for all residents.</p>
              
              <p>Located in Kokapet, one of Hyderabad's fastest-growing residential areas, Eden Garden offers excellent connectivity to major business districts, educational institutions, healthcare facilities, shopping centers, and entertainment venues. Experience elevated living at Eden Garden by Northstar Homes.</p>
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
                src="/images/eden-garden/masterplaneden.jpg" 
                alt="Eden Garden Master Plan" 
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
                  <p className="text-sm text-gray-600">Resident since 2019</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Living in Eden Garden has been a wonderful experience for my family. The villa design is excellent with spacious rooms and great ventilation. The community is well-maintained with beautiful gardens and excellent amenities. The security system gives us complete peace of mind."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-primary">PS</span>
                </div>
                <div>
                  <h4 className="font-bold">Priya Sharma</h4>
                  <p className="text-sm text-gray-600">Resident since 2020</p>
                </div>
              </div>
              <p className="text-gray-700">
                "We chose Eden Garden for its excellent location and premium villas. The community has exceeded our expectations with its world-class amenities and beautiful landscaping. The central lake is our favorite spot for evening walks. Northstar Homes has delivered a truly premium living experience."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in Eden Garden?</h2>
            <p className="text-gray-700 mb-8 text-lg">
              While Eden Garden is fully sold out, we can help you explore resale options or similar upcoming projects by Northstar Homes.
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