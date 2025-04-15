"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhone, FaBars, FaTimes, FaChevronDown, FaChevronRight, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Logo from "./Logo";
import SmartSearch from "./SmartSearch";

// Define menu structure
const menuItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about",
    submenu: [
      { name: "Overview", path: "/about" },
      { name: "Team", path: "/about" },
      { name: "Awards", path: "/about" },
    ],
  },
  {
    name: "Hyderabad",
    path: "#",
    submenu: [
      { name: "Ongoing", path: "/hyderabad/ongoing" },
      { name: "Completed", path: "/hyderabad/completed" },
    ],
  },
  {
    name: "Visakhapatnam",
    path: "#",
    submenu: [
      { name: "Ongoing", path: "/vizag/ongoing" },
      { name: "Completed", path: "/vizag/completed" },
    ],
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Resources",
    path: "#",
    submenu: [
      { name: "Blog", path: "/blog" },
      { name: "Careers", path: "/careers" },
    ],
  },
  {
    name: "Contact Us",
    path: "#",
    submenu: [
      { name: "Business Enquiry", path: "/contact/business-enquiry" },
      { name: "Channel Partners", path: "/partners" },
      { name: "Contact", path: "/contact" },
    ],
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const toggleMobileSubmenu = (index: number) => {
    setOpenMobileSubmenu(openMobileSubmenu === index ? null : index);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#111827] text-white py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center">
            <FaPhone className="mr-2" />
            <a href="tel:+918657553355" className="hover:text-accent transition-colors">
              +91 8657553355
            </a>
          </div>
          <div className="flex space-x-3">
            <a href="https://www.facebook.com/NorthstarHomesProjects" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-primary transition-colors">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/_northstarhomes" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white hover:text-primary transition-colors">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/northstar_homes/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-primary transition-colors">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/c/NorthstarHomesproperties" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white hover:text-primary transition-colors">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`w-full z-50 transition-all duration-300 bg-white ${
          isScrolled ? "sticky top-0 shadow-md py-2" : "py-4"
        }`}
        ref={dropdownRef}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {menuItems.map((item, index) => (
                <div key={index} className="relative" onClick={() => item.submenu && toggleDropdown(index)}>
                  {item.submenu ? (
                    <button className="flex items-center text-[#111827] hover:text-primary px-1 py-2 font-medium">
                      {item.name}
                      <FaChevronDown className={`ml-1 h-3 w-3 transition-transform ${openDropdown === index ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link href={item.path} className="text-[#111827] hover:text-primary px-1 py-2 font-medium">
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.submenu && openDropdown === index && (
                    <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md py-2 min-w-[200px] z-20 border border-gray-100">
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.path}
                          className="block px-4 py-2 text-gray-800 hover:bg-primary hover:text-white transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {/* Add SmartSearch component */}
              <SmartSearch />
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="flex items-center space-x-4 lg:hidden">
              <SmartSearch />
              <button 
                className="text-[#111827] hover:text-primary"
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
              >
                {isMenuOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#004B8D] border-t border-accent/20">
            <div className="px-4 py-3 space-y-1 divide-y divide-accent/20">
              {menuItems.map((item, index) => (
                <div key={index} className="py-2">
                  {item.submenu ? (
                    <>
                      <button 
                        className="flex items-center justify-between w-full text-white hover:text-accent py-2"
                        onClick={() => toggleMobileSubmenu(index)}
                      >
                        {item.name}
                        <FaChevronDown className={`h-3 w-3 transition-transform ${openMobileSubmenu === index ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {openMobileSubmenu === index && (
                        <div className="pl-4 mt-2 space-y-1 border-l-2 border-accent/20">
                          {item.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.path}
                              className="block py-2 text-gray-300 hover:text-accent"
                              onClick={toggleMenu}
                            >
                              <FaChevronRight className="inline-block mr-2 h-3 w-3" />
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link 
                      href={item.path} 
                      className="block py-2 text-white hover:text-accent"
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar; 