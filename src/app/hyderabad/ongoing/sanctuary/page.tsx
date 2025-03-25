import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaTree, FaRulerCombined, FaHome, FaRoad, FaWater, FaLeaf, FaArrowRight } from 'react-icons/fa';
import ImageCarousel from '@/components/ImageCarousel';

export default function SanctuaryPage() {
  // Project details
  const projectHighlights = [
    { icon: <FaTree className="text-xl" />, title: "Premium Villa Plots", text: "Ready-to-build villa plots" },
    { icon: <FaRulerCombined className="text-xl" />, title: "Land Extent", text: "30.2 Acres" },
    { icon: <FaHome className="text-xl" />, title: "Plot Sizes", text: "200-500 sq.yds" },
    { icon: <FaRoad className="text-xl" />, title: "Infrastructure", text: "Well-developed with wide roads" },
    { icon: <FaWater className="text-xl" />, title: "Water Supply", text: "24/7 water supply with bore wells" },
    { icon: <FaLeaf className="text-xl" />, title: "Environment", text: "Lush green surroundings" },
  ];

  const projectOverview = {
    location: "Tukkuguda, Srisailam Highway, Hyderabad",
    landExtent: "30.2 Acres",
    totalPlots: "450+ villa plots",
    plotSizes: "200-500 sq.yds",
    status: "Ready for Construction",
    possession: "Immediate",
    rera: "P3456789012"
  };

  const thumbnails = [
    { id: 1, src: "https://northstarhomes.in/assets/images/sac-new-desktop-1.jpg", alt: "Sanctuary Villa Plots" },
    { id: 2, src: "https://northstarhomes.in/assets/images/sac-new-desktop-2.jpg", alt: "Sanctuary Villa Plots" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[350px] bg-gray-900 bg-cover bg-center flex items-center" style={{ backgroundImage: "url('https://northstarhomes.in/assets/images/sac-new-desktop-1.jpg')" }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              SANCTUARY - Premium Villa Plots
            </h1>
            <div className="flex items-center mb-6">
              <FaMapMarkerAlt className="text-primary mr-2" />
              <span className="text-white text-lg">Tukkuguda, Srisailam Highway, Hyderabad</span>
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
                    <span className="text-gray-200">Sanctuary</span>
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
                  <div className="w-40 font-medium text-gray-700">Total Plots</div>
                  <div>{projectOverview.totalPlots}</div>
                </div>
                <div className="flex items-start">
                  <div className="w-40 font-medium text-gray-700">Plot Sizes</div>
                  <div>{projectOverview.plotSizes}</div>
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
            <h2 className="text-3xl font-bold mb-6">About Sanctuary</h2>
            <div className="prose prose-lg max-w-none">
              <p>Sanctuary is a premium villa plot project situated along the Srisailam Highway near Tukkuguda, Hyderabad. Spanning across 30.2 acres of lush greenery, Sanctuary offers well-developed villa plots that are ready for construction.</p>
              
              <p>The project features a range of plot sizes from 200 to 500 square yards, catering to different needs and preferences. Each plot is carefully laid out to provide optimal space utilization and privacy for future residents.</p>
              
              <p>Sanctuary boasts excellent infrastructure with wide roads, underground drainage systems, street lighting, and 24/7 water supply through bore wells. The project is designed with ample green spaces and landscaped gardens, creating a serene environment for residents.</p>
              
              <p>Located near the Shamshabad International Airport and with excellent connectivity to major business hubs, educational institutions, and healthcare facilities, Sanctuary offers the perfect balance of tranquility and convenience. Invest in your future home at Sanctuary by Northstar Homes, where nature meets luxury.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Master Plan */}
      <section className="py-12 bg-gray-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Master Plan</h2>
          <div className="space-y-8">
            <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden">
              <Image 
                src="https://northstarhomes.in/assets/images/masterplan-sanctuary-Villa.jpg" 
                alt="Sanctuary Master Plan" 
                fill 
                style={{ objectFit: "contain" }}
                className="rounded-lg"
              />
            </div>
            <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden">
              <Image 
                src="https://northstarhomes.in/assets/images/masterplan-sanctuary-plots.jpg" 
                alt="Sanctuary Plots Master Plan" 
                fill 
                style={{ objectFit: "contain" }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Location</h2>
          <div className="space-y-8">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60912.12728754707!2d78.47946579728976!3d17.334695300578616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba47d81291181%3A0x9ae3b78315f2bd67!2sTukkuguda%2C%20Telangana!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image 
                src="https://northstarhomes.in/assets/images/sanctuary-masterplan-map.jpg" 
                alt="Sanctuary Location Map" 
                fill 
                style={{ objectFit: "contain" }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Villa Elevation */}
      <section className="py-12 bg-gray-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Villa Elevation</h2>
          <div className="max-w-4xl mx-auto">
            <ImageCarousel 
              images={[
                { id: 1, src: "https://northstarhomes.in/assets/images/sanctuary/villa-elevation-img1.jpg", alt: "Sanctuary Villa Elevation 1" },
                { id: 2, src: "https://northstarhomes.in/assets/images/sanctuary/villa-elevation-img2.jpg", alt: "Sanctuary Villa Elevation 2" },
              ]} 
            />
          </div>
        </div>
      </section>

      {/* Additional Images */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden">
              <Image 
                src="https://northstarhomes.in/assets/images/sanctuary/Sanctuary_3_1920X10803.jpg" 
                alt="Sanctuary Villa View 1" 
                fill 
                style={{ objectFit: "contain" }}
                className="rounded-lg"
              />
            </div>
            <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden">
              <Image 
                src="https://northstarhomes.in/assets/images/sanctuary/Sanctuary_3_1920X10804.jpg" 
                alt="Sanctuary Villa View 2" 
                fill 
                style={{ objectFit: "contain" }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in Sanctuary?</h2>
            <p className="text-gray-700 mb-8 text-lg">
              Connect with our property experts to learn more about this premium villa plot project and schedule a site visit.
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