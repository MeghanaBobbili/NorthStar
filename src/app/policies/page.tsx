import Link from 'next/link';
import Image from 'next/image';

export default function PoliciesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[250px] bg-gray-900 bg-cover bg-center flex items-center">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Policies
            </h1>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3 text-white">
                <li className="inline-flex items-center">
                  <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2">/</span>
                    <span className="text-gray-200">Policies</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-6 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center space-x-0 md:space-x-4 space-y-2 md:space-y-0">
            <a href="#privacy-policy" className="btn-outline py-2 px-4">Privacy Policy</a>
            <a href="#terms-conditions" className="btn-outline py-2 px-4">Terms & Conditions</a>
            <a href="#cookies-policy" className="btn-outline py-2 px-4">Cookies Policy</a>
            <a href="#disclaimer" className="btn-outline py-2 px-4">Disclaimer</a>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section id="privacy-policy" className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Privacy Policy</h2>
            <div className="prose prose-lg max-w-none">
              <p>At Northstar Homes, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website or engage with our services.</p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Information We Collect</h3>
              <p>We collect personal information that you provide to us, such as your name, email address, phone number, and postal address when you:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Fill out a contact form</li>
                <li>Subscribe to our newsletter</li>
                <li>Register for an event or property viewing</li>
                <li>Submit an inquiry about our properties</li>
              </ul>
              
              <h3 className="text-xl font-bold mt-6 mb-3">How We Use Your Information</h3>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Respond to your inquiries and provide information about our properties</li>
                <li>Process and manage your property interest or purchase</li>
                <li>Send you updates, newsletters, and marketing communications (if you've opted in)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Information Sharing</h3>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Service providers who assist us in operating our website and business</li>
                <li>Legal and regulatory authorities when required by law</li>
                <li>Professional advisors such as lawyers, accountants, and insurance companies</li>
              </ul>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Data Security</h3>
              <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Your Rights</h3>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Opt-out of marketing communications</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Updates to This Policy</h3>
              <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We encourage you to review this page periodically for the latest information.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Section */}
      <section id="terms-conditions" className="py-12 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Terms & Conditions</h2>
            <div className="prose prose-lg max-w-none">
              <p>These Terms and Conditions govern your use of the Northstar Homes website and services. By accessing our website, you agree to be bound by these terms.</p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Use of Website</h3>
              <p>You may use our website for lawful purposes only. You agree not to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Use the website in any way that breaches applicable local, national, or international laws</li>
                <li>Use the website to transmit, or procure the sending of, any unsolicited or unauthorized advertising or promotional material</li>
                <li>Knowingly transmit any data or material that contains viruses, Trojan horses, worms, or other harmful programs</li>
                <li>Attempt to gain unauthorized access to our website, the server on which our website is stored, or any server, computer, or database connected to our website</li>
              </ul>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Intellectual Property</h3>
              <p>All content on this website, including but not limited to text, graphics, logos, images, floor plans, designs, and software, is the property of Northstar Homes and is protected by copyright and intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our explicit written permission.</p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Accuracy of Information</h3>
              <p>While we make every effort to ensure that the information on our website is accurate and up-to-date, we do not guarantee the completeness, reliability, or accuracy of this information. All properties are subject to availability, and the information, floor plans, and CGI visuals are provided for guidance only.</p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Links to Third-Party Websites</h3>
              <p>Our website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of those websites and accept no responsibility for them or for any loss or damage that may arise from your use of them.</p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Limitation of Liability</h3>
              <p>To the maximum extent permitted by law, Northstar Homes will not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, or use of, this website. This includes damages for loss of profits, goodwill, data, or other intangible losses.</p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Changes to Terms</h3>
              <p>We reserve the right to revise these Terms and Conditions at any time. By continuing to use our website after such changes, you agree to be bound by the revised terms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cookies Policy Section */}
      <section id="cookies-policy" className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Cookies Policy</h2>
            <div className="prose prose-lg max-w-none">
              <p>This Cookies Policy explains what cookies are and how Northstar Homes uses them on our website.</p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">What Are Cookies?</h3>
              <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.</p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">How We Use Cookies</h3>
              <p>We use cookies for a variety of reasons, including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Essential cookies:</strong> Required for the operation of our website, such as cookies that enable you to log into secure areas</li>
                <li><strong>Analytical/performance cookies:</strong> Allow us to recognize and count the number of visitors and see how visitors move around our website</li>
                <li><strong>Functionality cookies:</strong> Enable the website to provide enhanced functionality and personalization</li>
                <li><strong>Targeting cookies:</strong> Record your visit to our website, the pages you have visited, and the links you have followed to deliver more relevant advertisements</li>
              </ul>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Managing Cookies</h3>
              <p>Most web browsers allow you to control cookies through their settings preferences. You can typically find these settings in the "options" or "preferences" menu of your browser. However, if you disable certain cookies, you may find that some features of our website do not work as intended.</p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Third-Party Cookies</h3>
              <p>We also use third-party cookies, such as Google Analytics, to help us analyze how visitors use our website. These cookies collect information about your use of our website, including your IP address. This information is transmitted to and stored by Google on servers in the United States.</p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Changes to Our Cookies Policy</h3>
              <p>We may update our Cookies Policy from time to time. Any changes will be posted on this page, and if the changes are significant, we will provide a more prominent notice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section id="disclaimer" className="py-12 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Disclaimer</h2>
            <div className="prose prose-lg max-w-none">
              <p>The information contained on the Northstar Homes website is for general information purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website.</p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Property Information</h3>
              <p>All property details, floor plans, CGI visuals, and other information displayed on our website are provided as a general guide only. They do not constitute a contract, part of a contract, or warranty. Dimensions are approximate and for general guidance only. Exact layouts, finishes, and specifications may vary.</p>
              <p>Prices shown are indicative and subject to change without notice. Availability status is subject to confirmation at the time of inquiry.</p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Investment Advice</h3>
              <p>Nothing on this website constitutes investment advice or an invitation to invest. Any decision to invest in property should be made only after seeking appropriate professional advice.</p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Limitation of Liability</h3>
              <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Limit or exclude our or your liability for death or personal injury</li>
                <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation</li>
                <li>Limit any of our or your liabilities in any way that is not permitted under applicable law</li>
                <li>Exclude any of our or your liabilities that may not be excluded under applicable law</li>
              </ul>
              
              <h3 className="text-xl font-bold mt-6 mb-3">External Links</h3>
              <p>Our website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Have Questions About Our Policies?</h2>
            <p className="text-gray-700 mb-8 text-lg">
              If you need clarification on any of our policies or have specific questions, our team is ready to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Our Team
              </Link>
              <Link href="/" className="btn-outline">
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 