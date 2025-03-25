import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube
} from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Logo textColor="text-white" accentColor="text-primary" className="mb-4" />
            <p className="text-gray-300 mb-4">
              Your trusted partner in finding your dream home. We specialize in luxury properties 
              and personalized real estate services in Hyderabad and Visakhapatnam.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/NorthstarHomesProjects" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-primary transition-colors">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/_northstarhomes" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-primary transition-colors">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/northstar_homes/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-primary transition-colors">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/c/NorthstarHomesproperties" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-400 hover:text-primary transition-colors">
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Hyderabad Projects */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hyderabad Projects</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <h5 className="font-medium text-primary mb-2">Ongoing</h5>
                <ul className="space-y-1">
                  <li>
                    <Link href="/hyderabad/ongoing/allura" className="text-gray-300 hover:text-primary transition-colors text-sm">
                      Allura
                    </Link>
                  </li>
                  <li>
                    <Link href="/hyderabad/ongoing/sp-palacio" className="text-gray-300 hover:text-primary transition-colors text-sm">
                      SP Palacio
                    </Link>
                  </li>
                  <li>
                    <Link href="/hyderabad/ongoing/sanctuary" className="text-gray-300 hover:text-primary transition-colors text-sm">
                      Sanctuary
                    </Link>
                  </li>
                  <li>
                    <Link href="/hyderabad/ongoing/airport-boulevard-commercial" className="text-gray-300 hover:text-primary transition-colors text-sm">
                      Airport Boulevard Commercial
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-primary mb-2">Completed</h5>
                <ul className="space-y-1">
                  <li>
                    <Link href="/hyderabad/completed/the-leela" className="text-gray-300 hover:text-primary transition-colors text-sm">
                      The Leela
                    </Link>
                  </li>
                  <li>
                    <Link href="/hyderabad/completed/eden-garden" className="text-gray-300 hover:text-primary transition-colors text-sm">
                      Eden Garden
                    </Link>
                  </li>
                  <li>
                    <Link href="/hyderabad/completed/hillside" className="text-gray-300 hover:text-primary transition-colors text-sm">
                      Hillside
                    </Link>
                  </li>
                  <li>
                    <Link href="/hyderabad/completed/veda" className="text-gray-300 hover:text-primary transition-colors text-sm">
                      Veda
                    </Link>
                  </li>
                  <li>
                    <Link href="/hyderabad/completed/garden-suites" className="text-gray-300 hover:text-primary transition-colors text-sm">
                      Garden Suites
                    </Link>
                  </li>
                  <li>
                    <Link href="/hyderabad/completed/airport-boulevard" className="text-gray-300 hover:text-primary transition-colors text-sm">
                      Airport Boulevard
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Visakhapatnam Projects */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Visakhapatnam Projects</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <h5 className="font-medium text-primary mb-2">Ongoing</h5>
                <ul className="space-y-1">
                  <li>
                    <Link href="/vizag/ongoing/park-avenue" className="text-gray-300 hover:text-primary transition-colors text-sm">
                      Park Avenue
                    </Link>
                  </li>
                  <li>
                    <Link href="/vizag/ongoing/golden-valley" className="text-gray-300 hover:text-primary transition-colors text-sm">
                      Golden Valley
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-primary mb-2">Completed</h5>
                <ul className="space-y-1">
                  <li>
                    <Link href="/vizag/completed/eden-garden" className="text-gray-300 hover:text-primary transition-colors text-sm">
                      Eden Garden
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="h-5 w-5 text-primary mt-1 mr-3" />
                <span className="text-gray-300">
                  Plot No.8-2-293/82/A/1057/F1, 2nd Floor, Road No.45 Jubilee Hills, Hyderabad 500033
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="h-5 w-5 text-primary mr-3" />
                <a href="tel:+918657553355" className="text-gray-300 hover:text-primary transition-colors">
                  +91 8657 553 355
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="h-5 w-5 text-primary mr-3" />
                <a href="mailto:sales@northstar.in" className="text-gray-300 hover:text-primary transition-colors">
                  sales@northstar.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <a href="https://credai.org/" target="_blank" rel="noopener noreferrer" className="text-center">
            <div className="text-gray-300 font-medium mb-2 hover:text-primary transition-colors">CREDAI</div>
          </a>
          <a href="https://architude.org/" target="_blank" rel="noopener noreferrer" className="text-center">
            <div className="text-gray-300 font-medium mb-2 hover:text-primary transition-colors">ARCHITUDE.ORG-3D TECHNOLOGIES</div>
          </a>
          <a href="https://propcheck.in/" target="_blank" rel="noopener noreferrer" className="text-center">
            <div className="text-gray-300 font-medium mb-2 hover:text-primary transition-colors">PROPCHECK.IN-PROPERTY VERIFICATION PARTNERS</div>
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} NorthStarHomes.in. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-400">
            <Link href="/gallery" className="hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/careers" className="hover:text-primary transition-colors">
              Careers
            </Link>
            <Link href="/partners" className="hover:text-primary transition-colors">
              Channel Partners
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 