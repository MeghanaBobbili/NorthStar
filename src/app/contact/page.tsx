import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaTablet } from 'react-icons/fa';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[300px] bg-contact-pattern bg-cover bg-center flex items-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-white text-lg mb-6">
              We're here to help you find your dream home
            </p>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3 text-white">
                <li className="inline-flex items-center">
                  <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2">/</span>
                    <span className="text-gray-200">Contact</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Contact Info Tabs */}
      <section className="py-12 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg -mt-24 relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Whether you're interested in our properties, have questions about our services, or want to discuss investment opportunities, we're here to help.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Hyderabad Office Card */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-primary text-white text-center py-3">
                  <h3 className="text-xl font-bold">HYDERABAD OFFICE</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
                      <FaPhone size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Phone Number</h4>
                      <p className="text-gray-700">+91 99899 33366</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
                      <FaEnvelope size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">E-mail</h4>
                      <p className="text-gray-700">sales@northstar.in</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
                      <FaMapMarkerAlt size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Address</h4>
                      <p className="text-gray-700">Plot No.8-2-293/82/A/1057/F1, 2nd Floor, Road No.45 Jubilee Hills, Hyderabad 500033</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vizag Office Card */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-primary text-white text-center py-3">
                  <h3 className="text-xl font-bold">VIZAG OFFICE</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
                      <FaPhone size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Phone Number</h4>
                      <p className="text-gray-700">+91 99897 30303</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
                      <FaEnvelope size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">E-mail</h4>
                      <p className="text-gray-700">vizag@northstar.in</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
                      <FaMapMarkerAlt size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Address</h4>
                      <p className="text-gray-700">Plot no. 9-334, S.No: 167, Behind CMR Function Hall, Venkojipalem, Vizag - 530 017</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-gray-700 mb-8">
                Fill out the form below and one of our representatives will get back to you shortly.
              </p>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <ContactForm />
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Visit Our Offices</h2>
              <p className="text-gray-700 mb-8">
                We invite you to visit our offices in Hyderabad and Visakhapatnam to explore our property portfolios and meet our team.
              </p>
              
              <div className="space-y-6">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <div className="aspect-video">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.171232390449!2d78.40458571538459!3d17.44722720489152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91224d1c0821%3A0xb3b1d68ef2c8a58b!2sNorthstar%20Homes!5e0!3m2!1sen!2sin!4v1661969425289!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Hyderabad Office Location"
                    ></iframe>
                  </div>
                  <div className="p-4 bg-primary text-white">
                    <h3 className="font-bold text-xl mb-1">Hyderabad Office</h3>
                    <p>Plot No.8-2-293/82/A/1057/F1, 2nd Floor, Road No.45 Jubilee Hills, Hyderabad 500033</p>
                  </div>
                </div>
                
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <div className="aspect-video">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.228617106979!2d83.31933831539119!3d17.800242686505343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395dd594723d0b%3A0xc9986cc7a6d4cac0!2sVenkojipalem%2C%20Visakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1661969574481!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Vizag Office Location"
                    ></iframe>
                  </div>
                  <div className="p-4 bg-primary text-white">
                    <h3 className="font-bold text-xl mb-1">Vizag Office</h3>
                    <p>Plot no. 9-334, S.No: 167, Behind CMR Function Hall, Venkojipalem, Vizag - 530 017</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">An Ideal Space Designed for You</h2>
            <p className="text-gray-700 mb-8">
              Northstar Homes is dedicated to creating exceptional living spaces that combine luxury, comfort, and sustainability. Let us help you find your dream home in Hyderabad or Visakhapatnam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/properties" className="btn-primary">
                View Properties
              </Link>
              <a href="tel:+918657553355" className="bg-white text-primary hover:bg-gray-100 border border-primary font-medium py-2 px-6 rounded transition duration-300">
                Call Us: +91 8657553355
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 