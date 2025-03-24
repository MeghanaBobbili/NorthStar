import Link from 'next/link';
import Image from 'next/image';

export default function BusinessEnquiryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[250px] bg-gray-900 bg-cover bg-center flex items-center">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Business Enquiry
            </h1>
            <p className="text-white text-lg mb-6">Partner with Northstar Homes for your business needs</p>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3 text-white">
                <li className="inline-flex items-center">
                  <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2">/</span>
                    <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2">/</span>
                    <span className="text-gray-200">Business Enquiry</span>
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
            {/* Form Column */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Submit Business Enquiry</h2>
                <p className="text-gray-700 mb-6">
                  Whether you're interested in a joint venture, land partnership, or any other business collaboration, please fill out the form below and our team will get back to you shortly.
                </p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name*</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company Name*</label>
                      <input 
                        type="text" 
                        id="company" 
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address*</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number*</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="enquiry-type" className="block text-gray-700 font-medium mb-2">Enquiry Type*</label>
                    <select 
                      id="enquiry-type" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="joint-venture">Joint Venture Partnership</option>
                      <option value="land-partnership">Land Partnership</option>
                      <option value="investment">Investment Opportunity</option>
                      <option value="supplier">Supplier/Vendor</option>
                      <option value="other">Other Business Enquiry</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="location" className="block text-gray-700 font-medium mb-2">Preferred Location</label>
                    <select 
                      id="location" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      <option value="">Select a location</option>
                      <option value="hyderabad">Hyderabad</option>
                      <option value="visakhapatnam">Visakhapatnam</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message*</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Please provide details about your business enquiry..."
                      required
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="consent" 
                      className="mt-1 mr-2"
                      required
                    />
                    <label htmlFor="consent" className="text-gray-700 text-sm">
                      I consent to having this website store my submitted information. See our <Link href="/policies" className="text-primary hover:underline">privacy policy</Link> to learn more about how we use data.
                    </label>
                  </div>
                  
                  <div>
                    <button type="submit" className="btn-primary w-full sm:w-auto">
                      Submit Enquiry
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Contact Information */}
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold mb-4">Business Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <h4 className="font-bold">Business Development</h4>
                      <p className="text-gray-700">+91 8657553355</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h4 className="font-bold">Email</h4>
                      <p className="text-gray-700">business@northstar.in</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h4 className="font-bold">Hyderabad Office</h4>
                      <p className="text-gray-700">Northstar Homes, Corporate Office, Hyderabad, Telangana, India</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Saturday:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary/10 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Why Partner With Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>15+ years of real estate experience</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Strong reputation for quality and reliability</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Successful projects across Hyderabad and Vizag</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Committed to sustainable development</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Transparent and ethical business practices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">What types of business partnerships do you offer?</h3>
              <p className="text-gray-700">
                We offer various partnership opportunities including joint venture development, land partnerships, investment options, and supplier collaborations. Each partnership is tailored to meet the specific needs and goals of all parties involved.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">What is the minimum investment required?</h3>
              <p className="text-gray-700">
                The minimum investment varies depending on the type of partnership and the specific project. Our team will provide detailed information about investment requirements during our initial discussions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">How long does the partnership process take?</h3>
              <p className="text-gray-700">
                The timeline varies based on the complexity of the partnership. Typically, after initial contact, we schedule a meeting within 1-2 weeks. The complete process from inquiry to agreement can take anywhere from 1-3 months.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">What documentation is required for business partnerships?</h3>
              <p className="text-gray-700">
                Required documentation typically includes business registration documents, financial statements, project proposals (if applicable), and identification documents. Our team will guide you through the specific requirements for your partnership type.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Explore Business Opportunities?</h2>
            <p className="text-gray-700 mb-8 text-lg">
              Our business development team is ready to discuss how we can create successful partnerships together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Schedule a Meeting
              </Link>
              <Link href="/about" className="btn-outline">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 