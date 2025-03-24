import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

export default function HyderabadCompletedPage() {
  const completedProjects = [
    {
      id: 1,
      title: "THE LEELA",
      subtitle: "Premium Apartments in Padmarao Nagar, Hyderabad",
      image: "https://northstarhomes.in/assets/images/leela01.jpg",
      link: "/hyderabad/completed/the-leela",
      featured: true,
    },
    {
      id: 2,
      title: "EDEN GARDEN",
      subtitle: "Luxury Villas in Kompally, Hyderabad",
      image: "https://northstarhomes.in/assets/images/edengarden01.jpg",
      link: "/hyderabad/completed/eden-garden",
      featured: true,
    },
    {
      id: 3,
      title: "HILLSIDE",
      subtitle: "Luxury Villas in Gandipet, Hyderabad",
      image: "https://northstarhomes.in/assets/images/hillside-01.jpg",
      link: "/hyderabad/completed/hillside",
      featured: false,
    },
    {
      id: 4,
      title: "AIRPORT BOULEVARD",
      subtitle: "Smart Villas in Tukkuguda, Hyderabad",
      image: "https://northstarhomes.in/assets/images/airport-boulevard01.jpg",
      link: "/hyderabad/completed/airport-boulevard",
      featured: false,
    },
    {
      id: 5,
      title: "GARDEN SUITES",
      subtitle: "Premium Apartments in Banjara Hills, Hyderabad",
      image: "https://northstarhomes.in/assets/images/garden-suites01.jpg",
      link: "/hyderabad/completed/garden-suites",
      featured: true,
    },
    {
      id: 6,
      title: "VEDA",
      subtitle: "Signature Apartments in Himayatnagar, Hyderabad",
      image: "https://northstarhomes.in/assets/images/veda01.jpg",
      link: "/hyderabad/completed/veda",
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
              Completed Luxury Apartment & Villa Projects in Hyderabad
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
                    <span className="text-gray-200">Completed Projects</span>
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
            {completedProjects.map((project) => (
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
                      <span className="text-sm font-medium bg-success/10 text-success px-3 py-1 rounded-full">
                        COMPLETED PROJECT
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold mb-3">{project.title}</h2>
                    <p className="text-gray-600 mb-6 text-lg">{project.subtitle}</p>
                    
                    <div className="flex flex-wrap gap-4 mt-auto">
                      <Link 
                        href={project.link} 
                        className="btn-primary inline-flex items-center"
                      >
                        View Details <FaArrowRight className="ml-2" />
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

      {/* Achievements Section */}
      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Achievements in Hyderabad</h2>
            <p className="text-gray-700 text-lg">
              We have successfully delivered premium real estate projects across Hyderabad, meeting the highest standards of quality and design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-gray-700">Completed Projects</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">1200+</div>
              <p className="text-gray-700">Happy Families</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">1.8M</div>
              <p className="text-gray-700">Sq.ft Developed</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">12</div>
              <p className="text-gray-700">Awards Won</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-700 text-lg">
              Hear from the satisfied owners of our completed projects in Hyderabad.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/images/about-img.jpg"
                    alt="Testimonial"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h4 className="font-bold">Anil Reddy</h4>
                  <p className="text-sm text-gray-600">Owner at The Leela</p>
                </div>
              </div>
              <p className="text-gray-700">
                "I purchased an apartment at The Leela and I'm extremely satisfied with my investment. The location is prime, the construction quality is excellent, and the amenities are top-notch. The team at Northstar Homes was professional throughout the buying process."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/images/property-2.jpg"
                    alt="Testimonial"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h4 className="font-bold">Sanjana Kapoor</h4>
                  <p className="text-sm text-gray-600">Resident at Garden Suites</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Living at Garden Suites has been a wonderful experience. The apartments are spacious and well-designed, and the community is vibrant. The location is convenient with all amenities nearby. Northstar Homes delivered exactly what they promised, and we couldn't be happier."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in Our Completed Projects?</h2>
            <p className="text-gray-700 mb-8 text-lg">
              Visit our completed projects to experience the quality and craftsmanship that defines Northstar Homes.
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