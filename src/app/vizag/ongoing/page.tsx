import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function VizagOngoingPage() {
  // Projects data
  const ongoingProjects = [
    {
      id: 1,
      title: "PARK AVENUE",
      subtitle: "Premium Apartments in Yendada",
      image: "https://northstarhomes.in/assets/images/parkave01.jpg",
      link: "/vizag/ongoing/park-avenue"
    },
    {
      id: 2,
      title: "GOLDEN VALLEY",
      subtitle: "Luxury Villas in Rushikonda",
      image: "https://northstarhomes.in/assets/images/GOLDEN-VALLEY01.jpg",
      link: "/vizag/ongoing/golden-valley"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[350px] bg-gray-900 bg-cover bg-center flex items-center" style={{ backgroundImage: "url('/images/properties-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ongoing Projects in Vizag
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
                    <span className="text-gray-200">Ongoing Projects</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Projects Listing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Discover Our Ongoing Projects in Vizag</h2>
            <p className="text-gray-600">
              Explore Northstar Homes' premium ongoing residential projects in Vishakhapatnam, 
              featuring luxury apartments and villas in prime locations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ongoingProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                <div className="relative h-[300px]">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                      ONGOING
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <div className="flex items-center mb-4">
                    <FaMapMarkerAlt className="text-primary mr-2" />
                    <span className="text-gray-600">{project.subtitle}</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    A premium residential project by Northstar Homes offering world-class amenities 
                    and contemporary design in a prime location in Vizag.
                  </p>
                  <Link href={project.link} className="btn-primary inline-block">
                    View Details
                  </Link>
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
            <h2 className="text-3xl font-bold mb-6">Looking for Your Dream Home in Vizag?</h2>
            <p className="text-gray-700 mb-8 text-lg">
              Explore our ongoing projects or contact our team to schedule a site visit 
              and learn more about our premium residential offerings.
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

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto grid gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">What is the typical completion timeline for your projects?</h3>
              <p className="text-gray-600">
                Our projects typically take between 24-36 months to complete from the launch date. Each project has specific completion timelines which we are committed to meeting.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">What payment plans do you offer for ongoing projects?</h3>
              <p className="text-gray-600">
                We offer flexible payment plans including construction-linked plans, down payment options with discounts, and customized payment schedules. Please contact our sales team for project-specific payment details.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Can I customize the interiors of my apartment/villa?</h3>
              <p className="text-gray-600">
                Yes, we offer customization options for interiors depending on the construction stage of the project. Our design team can work with you to accommodate personalized requirements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">How can I schedule a site visit?</h3>
              <p className="text-gray-600">
                You can schedule a site visit by contacting our sales team at +91 8657553355 or by filling out the contact form on our website. We'll arrange a convenient time for you to visit the project site.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 