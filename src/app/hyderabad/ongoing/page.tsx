import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

export default function HyderabadOngoingPage() {
  const ongoingProjects = [
    {
      id: 1,
      title: "ALLURA",
      subtitle: "Luxury Villas in Kokapet, Hyderabad",
      image: "https://northstarhomes.in/assets/images/Allura-ongoing-project-632-x-946.jpg",
      link: "/hyderabad/ongoing/allura",
      featured: true,
    },
    {
      id: 2,
      title: "SP PALACIO",
      subtitle: "Premium 3 & 4 BHK Apartments in Abids, Hyderabad",
      image: "https://northstarhomes.in/assets/images/surekaplaza01.jpg",
      link: "/hyderabad/ongoing/sp-palacio",
      featured: true,
    },
    {
      id: 3,
      title: "SANCTUARY",
      subtitle: "Premium Villa Plots near Tukkuguda, Srisailam Highway",
      image: "https://northstarhomes.in/assets/images/sanctuary/sanctuary-thumbnail.jpg",
      link: "/hyderabad/ongoing/sanctuary",
      featured: true,
    },
    {
      id: 4,
      title: "AIRPORT BOULEVARD COMMERCIAL",
      subtitle: "Commercial property in Tukkuguda, Hyderabad, near Shamshabad Airport",
      image: "https://northstarhomes.in/assets/images/airport-banner.jpg",
      link: "/hyderabad/ongoing/airport-boulevard-commercial",
      featured: false,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[350px] bg-gray-900 bg-cover bg-center flex items-center">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ongoing Luxury Apartment & Villa Projects in Hyderabad
            </h1>
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
                    <span className="text-gray-200">Ongoing Projects</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8">
            {ongoingProjects.map((project) => (
              <div key={project.id} className="project-card bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="relative h-[300px] md:h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-500 hover:scale-105"
                    />
                    {project.featured && (
                      <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                        Featured
                      </div>
                    )}
                  </div>
                  
                  <div className="p-8 flex flex-col justify-center">
                    <div className="mb-2">
                      <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                        ONGOING PROJECT
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold mb-3">{project.title}</h2>
                    <p className="text-gray-600 mb-6 text-lg">{project.subtitle}</p>
                    
                    <div className="flex flex-wrap gap-4 mt-auto">
                      <Link 
                        href={project.link} 
                        className="btn-primary inline-flex items-center"
                      >
                        Learn More <FaArrowRight className="ml-2" />
                      </Link>
                      <Link 
                        href="/contact" 
                        className="btn-outline inline-flex items-center"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Looking for Your Dream Home in Hyderabad?</h2>
            <p className="text-gray-700 mb-8 text-lg">
              Connect with our property experts to find the perfect home that meets all your requirements and suits your lifestyle.
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