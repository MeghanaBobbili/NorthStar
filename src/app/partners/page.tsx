import Link from 'next/link';
import Image from 'next/image';

export default function PartnersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[250px] bg-gray-900 bg-cover bg-center flex items-center">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Channel Partners
            </h1>
            <p className="text-white text-lg mb-6">Join our network and grow with Northstar Homes</p>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3 text-white">
                <li className="inline-flex items-center">
                  <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2">/</span>
                    <span className="text-gray-200">Channel Partners</span>
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Content Column */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-bold mb-6">Become a Northstar Homes Channel Partner</h2>
              <p className="text-gray-700 mb-6">
                At Northstar Homes, we believe in the power of collaboration. Our Channel Partner Program is designed to forge strong relationships with real estate professionals who share our commitment to excellence and customer satisfaction.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Why Partner With Us?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-primary">
                    <h4 className="font-bold text-lg mb-2">Attractive Commission Structure</h4>
                    <p className="text-gray-700">Earn competitive commissions on successful referrals, with timely payouts and transparent tracking.</p>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-primary">
                    <h4 className="font-bold text-lg mb-2">Marketing Support</h4>
                    <p className="text-gray-700">Access to premium marketing materials, including brochures, digital assets, and customizable templates.</p>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-primary">
                    <h4 className="font-bold text-lg mb-2">Training Programs</h4>
                    <p className="text-gray-700">Regular training sessions and workshops to enhance your product knowledge and sales skills.</p>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-primary">
                    <h4 className="font-bold text-lg mb-2">Dedicated Support</h4>
                    <p className="text-gray-700">A dedicated relationship manager to assist with queries, property visits, and client communication.</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Partner Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Priority access to new project launches and pre-launch benefits</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Regular updates on project developments and market trends</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Exclusive partner events and networking opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Performance-based incentives and recognition programs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Site visits and property tours for you and your clients</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Ideal Partners</h3>
                <p className="mb-4">Our channel partner program is ideal for:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Real Estate Brokers and Agencies</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Property Consultants and Individual Agents</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Wealth Managers and Financial Advisors</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>NRI Consultants and Overseas Property Specialists</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Form Column */}
            <div className="lg:col-span-5">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6">Register as a Channel Partner</h3>
                <form className="space-y-6">
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
                    <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company Name (if applicable)</label>
                    <input 
                      type="text" 
                      id="company" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
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
                    <label htmlFor="location" className="block text-gray-700 font-medium mb-2">Primary Location*</label>
                    <select 
                      id="location" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    >
                      <option value="">Select your primary location</option>
                      <option value="hyderabad">Hyderabad</option>
                      <option value="visakhapatnam">Visakhapatnam</option>
                      <option value="other-india">Other (India)</option>
                      <option value="international">International</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="experience" className="block text-gray-700 font-medium mb-2">Years of Experience*</label>
                    <select 
                      id="experience" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    >
                      <option value="">Select your experience</option>
                      <option value="0-2">0-2 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="6-10">6-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="rera" className="block text-gray-700 font-medium mb-2">RERA Registration Number (if applicable)</label>
                    <input 
                      type="text" 
                      id="rera" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Additional Information</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Tell us about your experience, client base, and why you want to partner with Northstar Homes..."
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
                      I consent to having Northstar Homes store my submitted information. See our <Link href="/policies" className="text-primary hover:underline">privacy policy</Link> to learn more about how we use data.
                    </label>
                  </div>
                  
                  <div>
                    <button type="submit" className="btn-primary w-full">
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-gray-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Partners Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xl mr-4">
                  RS
                </div>
                <div>
                  <h4 className="font-bold">Rahul Singh</h4>
                  <p className="text-gray-600 text-sm">Premier Properties, Hyderabad</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Partnering with Northstar Homes has been a game-changer for our agency. Their transparent commission structure and marketing support have helped us close more deals and grow our business."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xl mr-4">
                  AP
                </div>
                <div>
                  <h4 className="font-bold">Aarti Patel</h4>
                  <p className="text-gray-600 text-sm">Elite Realty Solutions, Mumbai</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The training programs and dedicated support from Northstar Homes have been invaluable. My clients are impressed with the quality of their projects, making it easier to convert leads into sales."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xl mr-4">
                  VK
                </div>
                <div>
                  <h4 className="font-bold">Vijay Kumar</h4>
                  <p className="text-gray-600 text-sm">NRI Property Consultants, Dubai</p>
                </div>
              </div>
              <p className="text-gray-700">
                "As an NRI consultant, I appreciate Northstar's attention to detail and their ability to provide virtual tours and detailed information for my overseas clients. The partnership has been mutually beneficial."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-primary/30"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="relative">
                  <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 relative z-10">
                    1
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-center">Register</h3>
                  <p className="text-gray-700 text-center">
                    Complete and submit the channel partner registration form with your details.
                  </p>
                </div>
                
                <div className="relative">
                  <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 relative z-10">
                    2
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-center">Verification</h3>
                  <p className="text-gray-700 text-center">
                    Our team will review your application and contact you within 48 hours.
                  </p>
                </div>
                
                <div className="relative">
                  <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 relative z-10">
                    3
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-center">Onboarding</h3>
                  <p className="text-gray-700 text-center">
                    Complete the onboarding process, including training and account setup.
                  </p>
                </div>
                
                <div className="relative">
                  <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 relative z-10">
                    4
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-center">Start Earning</h3>
                  <p className="text-gray-700 text-center">
                    Begin referring clients and earning commissions on successful deals.
                  </p>
                </div>
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
              <h3 className="text-xl font-bold mb-3">How is the commission calculated?</h3>
              <p className="text-gray-700">
                Commissions are calculated as a percentage of the property value, with rates varying based on the project and property type. Our standard commission rates range from 2% to 3.5%, with potential for increased rates based on performance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">When are commissions paid out?</h3>
              <p className="text-gray-700">
                Commission payments are processed within 15 working days after the customer makes the booking payment. The full commission schedule is detailed in the Channel Partner Agreement provided during onboarding.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Do I need to be RERA registered?</h3>
              <p className="text-gray-700">
                While RERA registration is preferred, it is not mandatory in all cases. However, all partners must comply with local real estate regulations and laws applicable in their operating regions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">What marketing materials will I receive?</h3>
              <p className="text-gray-700">
                Partners receive digital brochures, project presentations, high-resolution images, virtual tour links, and customizable email templates. We also provide access to our partner portal with downloadable resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Partner With Us?</h2>
            <p className="text-gray-700 mb-8 text-lg">
              Join our network of successful channel partners and grow your real estate business with Northstar Homes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="btn-primary">
                Register Now
              </a>
              <Link href="/contact" className="btn-outline">
                Contact Sales Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 