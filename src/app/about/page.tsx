import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';
import StatsSection from '@/components/StatsSection';
import TeamMember from '@/components/TeamMember';

export default function AboutPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        email: "rajesh@northstarhomes.com",
      },
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Chief Operating Officer",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop",
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        email: "priya@northstarhomes.com",
      },
    },
    {
      id: 3,
      name: "Arun Reddy",
      position: "Sales Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        email: "arun@northstarhomes.com",
      },
    },
    {
      id: 4,
      name: "Sneha Patel",
      position: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop",
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        email: "sneha@northstarhomes.com",
      },
    },
  ];

  const values = [
    {
      title: "Integrity",
      description: "We uphold the highest standards of integrity in all our actions, ensuring honesty and transparency in every interaction."
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, from property development to customer service."
    },
    {
      title: "Innovation",
      description: "We continuously innovate to deliver cutting-edge designs and sustainable living solutions."
    },
    {
      title: "Customer Focus",
      description: "We place our customers at the heart of our business, tailoring our services to meet their unique needs and expectations."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[300px] bg-cover bg-center flex items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2896&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Us
            </h1>
            <p className="text-white text-lg mb-6">
              Learn more about Northstar Homes and our mission
            </p>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3 text-white">
                <li className="inline-flex items-center">
                  <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2">/</span>
                    <span className="text-gray-200">About</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6">
                Northstar Homes was founded in 2009 with a clear vision: to create exceptional living spaces that combine luxury, comfort, and sustainability. What began as a small team of passionate real estate enthusiasts has grown into one of the region's most respected property developers.
              </p>
              <p className="text-gray-700 mb-6">
                Over the past 15 years, we have successfully delivered over 50 projects across Hyderabad and Visakhapatnam, ranging from premium apartments and villas to commercial spaces, all built with the same commitment to quality and customer satisfaction.
              </p>
              <p className="text-gray-700">
                Today, Northstar Homes stands as a beacon of excellence in the real estate industry, continuing to redefine urban living through innovative designs, strategic locations, and sustainable development practices.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                  <Image 
                    src="/images/about-img.jpg" 
                    alt="Northstar Homes Story" 
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg w-48 text-center">
                  <p className="text-4xl font-bold text-primary">2009</p>
                  <p className="text-sm text-gray-600">Year Founded</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Our Values Section */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Northstar Homes, our values guide everything we do, from how we design our properties to how we interact with our customers and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <FaCheckCircle className="text-primary text-3xl mb-4" />
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our success is driven by our dedicated team of professionals who bring expertise, passion, and vision to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <TeamMember 
                key={member.id}
                name={member.name}
                position={member.position}
                image={member.image}
                socialLinks={member.socialLinks}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-cta-pattern bg-cover bg-center py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join the Northstar Family
            </h2>
            <p className="text-white text-lg mb-8">
              Discover what makes Northstar Homes different and why thousands of families have chosen us for their dream homes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link href="/properties" className="bg-white text-primary hover:bg-gray-100 font-medium py-2 px-6 rounded transition duration-300">
                View Properties
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 