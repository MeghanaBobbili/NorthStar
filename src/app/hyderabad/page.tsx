import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaBuilding, FaHome, FaHistory, FaArrowRight } from 'react-icons/fa';

export default function HyderabadPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[350px] bg-gray-900 bg-cover bg-center flex items-center" style={{ backgroundImage: "url('/images/properties-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Projects in Hyderabad
            </h1>
            <p className="text-white text-lg mb-6">
              Discover premium residential projects in the City of Pearls
            </p>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3 text-white">
                <li className="inline-flex items-center">
                  <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2">/</span>
                    <span className="text-gray-200">Hyderabad</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Projects Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Explore Our Projects in Hyderabad</h2>
            <p className="text-gray-600">
              From luxury apartments to premium villas, Northstar Homes offers a diverse portfolio of residential projects in Hyderabad, catering to varied preferences and budgets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ongoing Projects */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="relative h-[250px]">
                <Image 
                  src="/images/allura/allura-gallery-new-2.jpg" 
                  alt="Ongoing Projects" 
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <div className="mb-3">
                      <span className="text-sm font-medium bg-warning/10 text-warning px-3 py-1 rounded-full">
                        ONGOING
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Ongoing Projects</h3>
                    <p className="text-white/80 mb-4">
                      Explore our current under-construction properties in prime locations across Hyderabad.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Currently featuring 3 premium projects:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <FaMapMarkerAlt className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>SP Palacio - Luxury Apartments in Gachibowli</span>
                  </li>
                  <li className="flex items-start">
                    <FaMapMarkerAlt className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>Sanctuary - Premium Villas in Kokapet</span>
                  </li>
                  <li className="flex items-start">
                    <FaMapMarkerAlt className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>Allura - Modern Apartments in Financial District</span>
                  </li>
                </ul>
                <Link href="/hyderabad/ongoing" className="btn-primary inline-block">
                  View Ongoing Projects <FaArrowRight className="ml-2 inline" />
                </Link>
              </div>
            </div>

            {/* Completed Projects */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="relative h-[250px]">
                <Image 
                  src="/images/eden-garden/EGK_8_978x418.jpg" 
                  alt="Completed Projects" 
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <div className="mb-3">
                      <span className="text-sm font-medium bg-success/10 text-success px-3 py-1 rounded-full">
                        COMPLETED
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Completed Projects</h3>
                    <p className="text-white/80 mb-4">
                      Explore our successfully delivered properties across Hyderabad.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Successfully delivered 4 premium projects:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <FaMapMarkerAlt className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>Eden Garden - Luxury Apartments in Gachibowli</span>
                  </li>
                  <li className="flex items-start">
                    <FaMapMarkerAlt className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>Veda - Premium Villas in Kokapet</span>
                  </li>
                  <li className="flex items-start">
                    <FaMapMarkerAlt className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>Garden Suites - Modern Apartments in Financial District</span>
                  </li>
                  <li className="flex items-start">
                    <FaMapMarkerAlt className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>The Leela - Luxury Residences in Gachibowli</span>
                  </li>
                </ul>
                <Link href="/hyderabad/completed" className="btn-primary inline-block">
                  View Completed Projects <FaArrowRight className="ml-2 inline" />
                </Link>
              </div>
            </div>

            {/* Upcoming Projects */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="relative h-[250px]">
                <Image 
                  src="https://images.unsplash.com/photo-1542747527-122025b13094?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVyYmFufGVufDB8fDB8fHww" 
                  alt="Upcoming Projects" 
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <div className="mb-3">
                      <span className="text-sm font-medium bg-info/10 text-info px-3 py-1 rounded-full">
                        UPCOMING
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Upcoming Projects</h3>
                    <p className="text-white/80 mb-4">
                      Stay tuned for our upcoming premium residential projects in Hyderabad.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Exciting new projects coming soon:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <FaMapMarkerAlt className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>New luxury project in Financial District</span>
                  </li>
                  <li className="flex items-start">
                    <FaMapMarkerAlt className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>Premium villas in Kokapet</span>
                  </li>
                </ul>
                <span className="text-gray-500 italic block mb-4">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Hyderabad */}
      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Invest in Hyderabad?</h2>
              <div className="prose prose-lg max-w-none">
                <p>Hyderabad, the City of Pearls, has emerged as one of India's most dynamic real estate markets. With its thriving IT sector, rich cultural heritage, and excellent infrastructure, Hyderabad offers a perfect blend of tradition and modernity.</p>
                
                <p>The city is experiencing unprecedented growth in its real estate sector, particularly in areas like Gachibowli, Kokapet, and Financial District. With world-class infrastructure, international connectivity, and a favorable business environment, Hyderabad continues to attract both domestic and international investors.</p>
                
                <p>Northstar Homes strategically develops projects in Hyderabad's most sought-after neighborhoods, offering premium living spaces with excellent connectivity to IT hubs, educational institutions, and essential amenities.</p>
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FaBuilding className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">IT Hub Growth</h3>
                    <p className="text-gray-600">Home to major tech companies and IT parks, driving real estate demand.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FaHome className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Strong Investment Potential</h3>
                    <p className="text-gray-600">Consistent appreciation in property values and high rental yields.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FaHistory className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Quality Infrastructure</h3>
                    <p className="text-gray-600">Metro rail, international airport, and modern road networks.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image 
                src="/images/about-img.jpg"
                alt="Hyderabad Cityscape"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Looking for Your Dream Home in Hyderabad?</h2>
            <p className="text-gray-700 mb-8 text-lg">
              Contact our team to learn more about our projects or to schedule a site visit to any of our properties in Hyderabad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link href="tel:+919876543210" className="btn-secondary">
                Call Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 