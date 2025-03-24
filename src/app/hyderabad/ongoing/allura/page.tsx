import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaHome, FaRulerCombined, FaTree, FaSwimmingPool, FaShieldAlt, FaCheck, FaArrowRight } from 'react-icons/fa';

export default function AlluraPage() {
  // Project details
  const projectHighlights = [
    { icon: <FaHome className="text-xl" />, title: "Premium Villas", text: "Exclusive 4 BHK luxury villas" },
    { icon: <FaRulerCombined className="text-xl" />, title: "Land Extent", text: "15.2 Acres" },
    { icon: <FaTree className="text-xl" />, title: "Open Space", text: "60% open space with landscaped gardens" },
    { icon: <FaSwimmingPool className="text-xl" />, title: "Amenities", text: "25+ world-class amenities" },
    { icon: <FaShieldAlt className="text-xl" />, title: "Security", text: "24/7 security with CCTV surveillance" },
  ];

  const projectOverview = {
    location: "Kokapet, Hyderabad",
    landExtent: "15.2 Acres",
    totalUnits: "85 Luxury Villas",
    villaSize: "4000-5000 sq.ft.",
    status: "Under Construction",
    possession: "December 2025",
    rera: "P1234567890"
  };

  const thumbnails = [
    { id: 1, src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop", alt: "Villa Exterior" },
    { id: 2, src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop", alt: "Living Room" },
    { id: 3, src: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2070&auto=format&fit=crop", alt: "Kitchen" },
    { id: 4, src: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?q=80&w=2071&auto=format&fit=crop", alt: "Master Bedroom" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[350px] bg-gray-900 bg-cover bg-center flex items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              ALLURA - Luxury Villas
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
                    <Link href="/hyderabad/ongoing" className="hover:text-primary transition-colors">Ongoing Projects</Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2">/</span>
                    <span className="text-gray-200">Allura</span>
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
                  alt="Allura Villa" 
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
                  <div className="w-40 font-medium text-gray-700">Villa Size</div>
                  <div>{projectOverview.villaSize}</div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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
            <h2 className="text-3xl font-bold mb-6">About Allura</h2>
            <div className="prose prose-lg max-w-none">
              <p>Welcome to Allura, a premium villa project nestled in the serene surroundings of Kokapet, Hyderabad. Spanning across 15.2 acres of lush greenery, Allura offers exclusive 4 BHK luxury villas designed for those who appreciate the finer things in life.</p>
              
              <p>Each villa is meticulously crafted with attention to detail, offering spacious living areas, modern amenities, and premium finishes. The project features 60% open space with beautifully landscaped gardens, creating a tranquil environment for residents.</p>
              
              <p>Allura offers over 25 world-class amenities including a clubhouse, swimming pool, fitness center, sports facilities, children's play area, and much more. The gated community provides 24/7 security with CCTV surveillance, ensuring peace of mind for all residents.</p>
              
              <p>Located in the rapidly developing area of Kokapet, Allura provides excellent connectivity to major business hubs, educational institutions, healthcare facilities, and entertainment centers. Experience luxury living at its finest with Northstar Homes' Allura.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Master Plan */}
      <section className="py-12 bg-gray-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Master Plan</h2>
          <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden">
            <Image 
              src="https://northstarhomes.in/assets/images/newallura-masterplan.jpg" 
              alt="Allura Master Plan" 
              fill 
              style={{ objectFit: "contain" }}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Location</h2>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30452.76807056745!2d78.31292389551242!3d17.42292491200457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93deaaaaaaa7%3A0x6daac8c9404f9e4a!2sKokapet%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin" 
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
            <h2 className="text-3xl font-bold mb-6">Interested in Allura?</h2>
            <p className="text-gray-700 mb-8 text-lg">
              Connect with our property experts to learn more about this exclusive villa project and schedule a site visit.
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