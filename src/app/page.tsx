import Image from "next/image";
import Link from "next/link";
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

// Components
import PropertyCard from "@/components/PropertyCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import ServiceCard from "@/components/ServiceCard";
import TeamMember from "@/components/TeamMember";
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  // Sample featured properties data
  const featuredProperties = [
    {
      id: 1,
      title: "Luxury Villa with Ocean View",
      type: "Villa",
      status: "For Sale",
      price: "₹4.5 Cr",
      location: "Bandra West, Mumbai",
      bedrooms: 5,
      bathrooms: 6,
      area: 4200,
      image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop",
      featured: true,
    },
    {
      id: 2,
      title: "Modern Apartment in City Center",
      type: "Apartment",
      status: "For Rent",
      price: "₹1.2 L/month",
      location: "Powai, Mumbai",
      bedrooms: 3,
      bathrooms: 2,
      area: 1800,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop",
      featured: true,
    },
    {
      id: 3,
      title: "Spacious Family Home",
      type: "House",
      status: "For Sale",
      price: "₹2.8 Cr",
      location: "Juhu, Mumbai",
      bedrooms: 4,
      bathrooms: 3,
      area: 3200,
      image: "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?q=80&w=2070&auto=format&fit=crop",
      featured: true,
    },
  ];

  // Sample services data
  /*
  const services = [
    {
      id: 1,
      title: "Residential Properties",
      description: "Find your perfect home with our wide selection of residential properties.",
      icon: "house",
      link: "/services/residential",
    },
    {
      id: 2,
      title: "Commercial Properties",
      description: "Discover premium commercial spaces for your business needs.",
      icon: "building",
      link: "/services/commercial",
    },
    {
      id: 3,
      title: "Property Management",
      description: "Professional property management services for homeowners and investors.",
      icon: "key",
      link: "/services/management",
    },
    {
      id: 4,
      title: "Investment Consulting",
      description: "Expert advice on real estate investments to maximize your returns.",
      icon: "chart",
      link: "/services/investment",
    },
  ];
  */

  // Ongoing projects in Hyderabad
  const hyderabadProjects = [
    {
      title: "NORTHSTAR SP PALACIO",
      subtitle: "Premium 3 and 4 BHK apartments in Abids, Hyderabad",
      image: "https://northstarhomes.in/assets/images/sp_palacio-banner1.jpg",
      link: "/hyderabad/ongoing/sp-palacio",
    },
    {
      title: "ALLURA",
      subtitle: "LUXURY VILLAS IN KOKAPET, HYDERABAD",
      image: "https://northstarhomes.in/assets/images/allura-banner2.jpg",
      link: "/hyderabad/ongoing/allura",
    },
    {
      title: "SANCTUARY, MAHESHWARAM",
      subtitle: "Premium Plots & Villas near Tukkuguda in Srisailam Highway",
      image: "https://northstarhomes.in/assets/images/sanctuary/sanctuary-thumbnail.jpg",
      link: "/hyderabad/ongoing/sanctuary",
    },
    {
      title: "AIRPORT BOULEVARD COMMERCIAL",
      subtitle: "Commercial property IN TUKKUGUDA, HYDERABAD, NEAR SHAMSHABAD AIRPORT",
      image: "https://northstarhomes.in/assets/images/airport-banner.jpg",
      link: "/hyderabad/ongoing/airport-boulevard-commercial",
    },
  ];

  // Ongoing projects in Visakhapatnam
  const vizagProjects = [
    {
      title: "PARK AVENUE",
      subtitle: "PARK AVE - 2, 2.5, 3 BHK PREMIUM APARTMENTS AT MADHURAWADA VISAKHAPATNAM",
      image: "https://northstarhomes.in/assets/images/parkave-banner2.jpg",
      link: "/vizag/ongoing/park-avenue",
    },
    {
      title: "GOLDEN VALLEY",
      subtitle: "PREMIUM APARTMENTS AT MADHURAWADA VISAKHAPATNAM - GOLDEN VALLEY",
      image: "https://northstarhomes.in/assets/images/goldenvalley/BUILDING01.jpg",
      link: "/vizag/ongoing/golden-valley",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Find Your Dream Home Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Gated Community Apartments & Villas in Hyderabad
            </h2>
            <p className="text-gray-600">
              Find your dream home with us at Northstar Homes, where we offer exceptional gated community apartments, villas, and plots in Hyderabad, as well as luxurious living options in Vizag. Our properties are designed to deliver the best of modern living, combining style, comfort, and security to create the perfect home environment.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Ongoing Projects Section - Hyderabad */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Ongoing Projects in Hyderabad</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our selection of premium ongoing projects in Hyderabad offering exceptional value and prime locations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hyderabadProjects.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                subtitle={project.subtitle}
                image={project.image}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Projects Section - Visakhapatnam */}
      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Ongoing Projects in Visakhapatnam</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our premium ongoing projects in Visakhapatnam with breathtaking views and modern amenities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {vizagProjects.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                subtitle={project.subtitle}
                image={project.image}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Invest in Your Future Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Invest in Your Future with <span className="text-gradient">Northstar Homes</span>
              </h2>
              <p className="text-gray-700 mb-6">
                Choose Northstar Homes for a wise investment in your future. Whether it's one of our gated community apartments, luxury villas, premium plots in Hyderabad, or an exquisite apartment by the sea in Vizag, each property is crafted with meticulous attention to what homebuyers desire and require.
              </p>
              <p className="text-gray-700 mb-6">
                Committed to sustainability, Northstar Homes incorporates green building practices and energy-efficient technologies across all projects.
              </p>
              <p className="font-medium text-lg">
                Visit us today to find your new home where quality, community, and comfort meet.
              </p>
            </div>
            
            <div className="relative">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="https://northstarhomes.in/assets/images/house-img.jpeg" 
                  alt="Invest in Your Future with Northstar Homes" 
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg w-48 text-center">
                <p className="text-4xl font-bold text-primary">15+</p>
                <p className="text-sm text-gray-600">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-cta-pattern bg-cover bg-center py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-white text-lg mb-8">
              Contact us today to schedule a consultation with one of our expert real estate agents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link href="/properties" className="bg-white text-primary hover:bg-gray-100 font-medium py-2 px-6 rounded transition duration-300">
                View All Properties
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Explore Northstar Homes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover more about us through our resources and connect with our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <Link href="/gallery" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Gallery</h3>
              <p className="text-gray-600 text-sm">Explore our project images and videos</p>
            </Link>

            <Link href="/blog" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Blog</h3>
              <p className="text-gray-600 text-sm">Insights and updates from real estate experts</p>
            </Link>

            <Link href="/careers" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Careers</h3>
              <p className="text-gray-600 text-sm">Join our team of passionate professionals</p>
            </Link>

            <Link href="/contact/business-enquiry" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Business Enquiry</h3>
              <p className="text-gray-600 text-sm">Partner with us for business opportunities</p>
            </Link>

            <Link href="/partners" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Channel Partners</h3>
              <p className="text-gray-600 text-sm">Join our network of real estate professionals</p>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-light section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="https://northstarhomes.in/assets/images/sec-one-img.webp" 
                  alt="About Northstar Homes" 
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg w-48 text-center">
                <p className="text-4xl font-bold text-primary">15+</p>
                <p className="text-sm text-gray-600">Years of Experience</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                Why Choose <span className="text-gradient">Northstar Homes</span>
              </h2>
              <p className="text-gray-700 mb-6">
                Northstar Homes has been a trusted name in the real estate industry for over 15 years. We pride ourselves on delivering exceptional service and finding the perfect properties for our clients.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Expert Team</h3>
                    <p className="text-gray-600">Professional agents with deep market knowledge</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Premium Locations</h3>
                    <p className="text-gray-600">Properties in the most sought-after areas</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Client Satisfaction</h3>
                    <p className="text-gray-600">Dedicated to exceeding client expectations</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Transparent Process</h3>
                    <p className="text-gray-600">Clear communication throughout your journey</p>
                  </div>
                </div>
              </div>
              
              <Link href="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {/* 
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of real estate services to meet all your property needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Testimonials Section */}
      <section className="bg-gray-light section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our satisfied clients about their experience with Northstar Homes
            </p>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Our Expert Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet our dedicated team of real estate professionals committed to helping you find your dream property
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <TeamMember 
              name="K Laxma Reddy"
              position="CHAIRMAN"
              image="https://northstarhomes.in/assets/images/KLaxmaReddyd.jpg"
              socialLinks={{
                linkedin: "#",
                twitter: "#",
                email: "chairman@northstarhomes.in"
              }}
            />
            <TeamMember 
              name="Narayan Rao Gali"
              position="VICE-CHAIRMAN"
              image="https://northstarhomes.in/assets/images/SriNarayanRaoGali.jpg"
              socialLinks={{
                linkedin: "#",
                twitter: "#",
                email: "vicechairman@northstarhomes.in"
              }}
            />
            <TeamMember 
              name="Uttam Korupol"
              position="MANAGING PARTNER"
              image="https://northstarhomes.in/assets/images/UttamKorupol.jpg"
              socialLinks={{
                linkedin: "#",
                twitter: "#",
                email: "managingpartner@northstarhomes.in"
              }}
            />
            <TeamMember 
              name="Anil Kumar Reddy"
              position="PROJECT PARTNER, NORTHSTAR HOMES"
              image="https://northstarhomes.in/assets/images/AnilKumarReddy.jpg"
              socialLinks={{
                linkedin: "#",
                twitter: "#",
                email: "anil@northstarhomes.in"
              }}
            />
            <TeamMember 
              name="Amarendra Raju"
              position="PROJECT PARTNER, NORTHSTAR HOMES"
              image="https://northstarhomes.in/assets/images/AmarendraRaju.jpg"
              socialLinks={{
                linkedin: "#",
                twitter: "#",
                email: "amarendra@northstarhomes.in"
              }}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-700 mb-8">
                Whether you're looking to buy, sell, or rent a property, our team is here to help you every step of the way.
              </p>
              
              <div className="space-y-6 mb-8">
                {/* Corporate Office */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-xl mb-4">Corporate Office</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <FaMapMarkerAlt className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Location</h4>
                        <p className="text-gray-600">Plot No.8-2-293/82/A/1057/F1, 2nd Floor, Road No.45 Jubilee Hills, Hyderabad 500033</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <FaPhone className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Phone Number</h4>
                        <p className="text-gray-600">+91 99899 33366</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <FaEnvelope className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Email Address</h4>
                        <p className="text-gray-600">sales@northstar.in</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vizag Office */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-xl mb-4">Vizag Office</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <FaMapMarkerAlt className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Location</h4>
                        <p className="text-gray-600">Plot no. 9-334, S.No: 167, Behind CMR Function Hall, Venkojipalem, Vizag - 530 017</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <FaPhone className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Phone Number</h4>
                        <p className="text-gray-600">+91 99897 30303</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <FaEnvelope className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Email Address</h4>
                        <p className="text-gray-600">sales@northstar.in</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
