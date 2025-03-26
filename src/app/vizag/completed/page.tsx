import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

export default function VizagCompletedPage() {
  // Completed projects data
  const completedProjects = [
    {
      id: "eden-garden",
      title: "EDEN GARDEN",
      subtitle: "Luxury 3 BHK Apartments in Vizag",
      image: "/images/edengardenva.jpg",
      link: "/vizag/completed/eden-garden"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[350px] bg-gray-900 bg-cover bg-center flex items-center">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Completed Projects in Vizag
            </h1>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3 text-white">
                <li className="inline-flex items-center">
                  <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2">/</span>
                    <Link href="/vizag" className="hover:text-primary transition-colors">Vizag</Link>
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

      {/* Project Listing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project) => (
              <Link 
                key={project.id}
                href={project.link} 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-8px]"
              >
                <div className="relative h-[240px]">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    style={{ objectFit: "cover" }}
                    className="transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <div className="flex items-center mb-4">
                    <FaMapMarkerAlt className="text-primary mr-2" />
                    <span className="text-gray-600">{project.subtitle}</span>
                  </div>
                  <div className="flex items-center text-primary font-medium">
                    <span>View Project</span>
                    <FaArrowRight className="ml-2 text-sm" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Completed Projects in Visakhapatnam</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Northstar Homes has successfully delivered premium residential projects in Visakhapatnam, setting new standards for luxury living in the city. Our completed projects showcase our commitment to quality construction, thoughtful design, and superior craftsmanship.
              </p>
              <p>
                Each of our completed projects in Vizag stands as a testament to our dedication to creating exceptional living spaces that enhance the quality of life for our residents. From premium apartments with modern amenities to carefully designed living spaces that maximize comfort and convenience, our completed projects represent the pinnacle of residential development in Visakhapatnam.
              </p>
              <p>
                We invite you to explore our completed projects and discover the Northstar difference. Whether you're interested in our past work or looking for inspiration for your future home, our completed projects offer valuable insights into our approach to creating outstanding residential spaces in Vizag.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Residents Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">AM</span>
                </div>
                <div>
                  <h4 className="font-bold">Anil Mehta</h4>
                  <p className="text-gray-600 text-sm">Eden Garden Resident</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Living in an apartment built by Northstar Homes has been a wonderful experience. The attention to detail, quality of construction, and thoughtfully designed living spaces have exceeded our expectations. The amenities provided make everyday living a pleasure."
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">SK</span>
                </div>
                <div>
                  <h4 className="font-bold">Suresh Kumar</h4>
                  <p className="text-gray-600 text-sm">Eden Garden Resident</p>
                </div>
              </div>
              <p className="text-gray-700">
                "We've been living in our Northstar home for over a year now, and we're still impressed by the quality and craftsmanship. The community is well-maintained, and the management team is responsive and professional. Choosing a Northstar property was one of the best decisions we've made."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in Our Projects?</h2>
            <p className="text-gray-700 mb-8 text-lg">
              Contact our team to learn more about our completed projects or to inquire about our ongoing and upcoming developments in Visakhapatnam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link href="/vizag/ongoing" className="btn-outline">
                View Ongoing Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 