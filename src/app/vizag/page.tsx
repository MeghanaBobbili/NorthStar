import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaBuilding, FaHome, FaHistory, FaArrowRight } from 'react-icons/fa';

export default function VizagPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[350px] bg-gray-900 bg-cover bg-center flex items-center" style={{ backgroundImage: "url('/images/properties-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Projects in Vishakhapatnam
            </h1>
            <p className="text-white text-lg mb-6">
              Discover premium residential projects in the City of Destiny
            </p>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3 text-white">
                <li className="inline-flex items-center">
                  <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2">/</span>
                    <span className="text-gray-200">Vizag</span>
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
            <h2 className="text-3xl font-bold mb-4">Explore Our Projects in Vizag</h2>
            <p className="text-gray-600">
              From luxury villas to premium apartments, Northstar Homes offers a diverse portfolio of residential projects in Visakhapatnam, catering to varied preferences and budgets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ongoing Projects */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="relative h-[250px]">
                <Image 
                  src="/images/property-1.jpg" 
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
                      Explore our current under-construction properties in prime locations across Vizag.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Currently featuring 2 premium projects:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <FaMapMarkerAlt className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>Park Avenue - Premium Apartments in Yendada</span>
                  </li>
                  <li className="flex items-start">
                    <FaMapMarkerAlt className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>Golden Valley - Luxury Villas in Rushikonda</span>
                  </li>
                </ul>
                <Link href="/vizag/ongoing" className="btn-primary inline-block">
                  View Ongoing Projects <FaArrowRight className="ml-2 inline" />
                </Link>
              </div>
            </div>

            {/* Upcoming Projects */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="relative h-[250px]">
                <Image 
                  src="/images/property-2.jpg" 
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
                      Discover our future projects planned for development in Vizag.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Northstar Homes is planning to launch new projects in the following locations:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <FaMapMarkerAlt className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>Seaview Residences - Beachfront Apartments</span>
                  </li>
                  <li className="flex items-start">
                    <FaMapMarkerAlt className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>Mountain View Estates - Luxury Villas</span>
                  </li>
                </ul>
                <span className="text-gray-500 italic block mb-4">Coming Soon</span>
              </div>
            </div>

            {/* Completed Projects */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="relative h-[250px]">
                <Image 
                  src="/images/property-3.jpg" 
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
                      View our successfully delivered properties in Vizag.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Our completed projects showcasing our commitment to quality:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <FaMapMarkerAlt className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>Coastal Heights - Premium Apartments</span>
                  </li>
                  <li className="flex items-start">
                    <FaMapMarkerAlt className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>Marina Bay - Luxury Villa Township</span>
                  </li>
                </ul>
                <span className="text-gray-500 italic block mb-4">Details coming soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Vizag */}
      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Invest in Visakhapatnam?</h2>
              <div className="prose prose-lg max-w-none">
                <p>Visakhapatnam, also known as Vizag, is rapidly emerging as one of India's most promising real estate destinations. As Andhra Pradesh's largest city and a major port, Vizag offers a perfect blend of natural beauty, industrial growth, and urban development.</p>
                
                <p>The city is known for its pristine beaches, lush green hills, and pleasant climate throughout the year. With significant investments in infrastructure, IT, and manufacturing sectors, Visakhapatnam is experiencing robust economic growth, making it an ideal location for property investment.</p>
                
                <p>Northstar Homes strategically develops projects in Vizag's most sought-after neighborhoods, including Rushikonda, Yendada, and Madhurawada, offering spectacular views, excellent connectivity, and proximity to essential amenities.</p>
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FaBuilding className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Booming Infrastructure</h3>
                    <p className="text-gray-600">Planned smart city development, metro rail project, and expanded port facilities.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FaHome className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Appreciating Property Values</h3>
                    <p className="text-gray-600">Consistent growth in real estate prices making it an excellent long-term investment.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FaHistory className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Quality of Life</h3>
                    <p className="text-gray-600">Lower pollution, less traffic congestion, and a balanced lifestyle compared to metro cities.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image 
                src="/images/about-img.jpg"
                alt="Visakhapatnam Cityscape"
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
            <h2 className="text-3xl font-bold mb-6">Looking for Your Dream Home in Vizag?</h2>
            <p className="text-gray-700 mb-8 text-lg">
              Contact our team to learn more about our projects or to schedule a site visit to any of our properties in Visakhapatnam.
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