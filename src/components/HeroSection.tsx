"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const heroSlides = [
  {
    id: 1,
    title: "Northstar Homes: Luxury Living at Its Best",
    subtitle: "Premium Living Spaces Designed For Those Who Seek the Essence of Luxury",
    ctaText: "Explore Properties",
    ctaLink: "/properties",
    image: "images/sanctuary/sanctuary-clubhouse.jpg",
  },
  {
    id: 2,
    title: "Discover Your Dream Home in Hyderabad",
    subtitle: "Exceptional Gated Community Apartments & Villas in Prime Locations",
    ctaText: "View Hyderabad Projects",
    ctaLink: "/hyderabad/ongoing",
    image: "/images/sp_palacio-banner1.jpg",
  },
  {
    id: 3,
    title: "Luxury Properties in Visakhapatnam",
    subtitle: "Premium Waterfront Living with Breathtaking Views",
    ctaText: "View Vizag Projects",
    ctaLink: "/vizag/ongoing",
    image: "/images/goldenvalley/GV_BUILDING01.jpg",
  },
  {
    id: 4,
    title: "Explore Northstar's Resources",
    subtitle: "Discover our gallery, blog, career opportunities and partnership programs",
    ctaText: "View Gallery",
    ctaLink: "/gallery",
    image: "/images/allura/978x418-Allura-Gallery-12.jpg",
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen-75 overflow-hidden">
      {/* Slides */}
      {heroSlides.map((slide, index) => (
  <div
    key={slide.id}
    className={`absolute inset-0 transition-opacity duration-1000 ${
      index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
    }`}
  >

          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${slide.image})`,
            }}
          />
          
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4 text-center md:text-left">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-playfair">
                  {slide.title}
                </h1>
                <p className="text-white text-lg mb-8">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={slide.ctaLink} className="btn-primary">
                    {slide.ctaText}
                  </Link>
                  <Link href="/contact" className="bg-white text-primary hover:bg-gray-100 font-medium py-2 px-6 rounded transition duration-300">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-primary" : "bg-white bg-opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection; 