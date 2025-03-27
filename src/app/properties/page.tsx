'use client';

import Link from 'next/link';
import PropertyCard from '@/components/PropertyCard';
import { useState } from 'react';

export default function PropertiesPage() {
  const properties = [
    // Hyderabad Completed Projects
    {
      id: 1,
      title: "THE LEELA",
      type: "Apartment",
      status: "completed",
      price: "₹1.2Cr - ₹1.8Cr",
      location: "Padmarao Nagar, Hyderabad",
      bedrooms: 3,
      bathrooms: 3,
      area: 2200,
      image: "/images/leela01.jpg",
      link: "/hyderabad/completed/the-leela",
      city: "Hyderabad",
      featured: true,
    },
    {
      id: 2,
      title: "EDEN GARDEN",
      type: "Villa",
      status: "completed",
      price: "₹2.5Cr - ₹3.2Cr",
      location: "Kompally, Hyderabad",
      bedrooms: 4,
      bathrooms: 4,
      area: 3500,
      image: "/images/edengarden01.jpg",
      link: "/hyderabad/completed/eden-garden",
      city: "Hyderabad",
      featured: true,
    },
    {
      id: 3,
      title: "HILLSIDE",
      type: "Villa",
      status: "completed",
      price: "₹2.8Cr - ₹3.5Cr",
      location: "Gandipet, Hyderabad",
      bedrooms: 4,
      bathrooms: 4,
      area: 3800,
      image: "/images/hillside-01.jpg",
      link: "/hyderabad/completed/hillside",
      city: "Hyderabad",
      featured: false,
    },
    {
      id: 4,
      title: "AIRPORT BOULEVARD",
      type: "Villa",
      status: "completed",
      price: "₹1.8Cr - ₹2.2Cr",
      location: "Tukkuguda, Hyderabad",
      bedrooms: 3,
      bathrooms: 3,
      area: 2800,
      image: "/images/airport-boulevard01.jpg",
      link: "/hyderabad/completed/airport-boulevard",
      city: "Hyderabad",
      featured: false,
    },
    {
      id: 5,
      title: "GARDEN SUITES",
      type: "Apartment",
      status: "completed",
      price: "₹3.5Cr - ₹4.2Cr",
      location: "Banjara Hills, Hyderabad",
      bedrooms: 3,
      bathrooms: 3,
      area: 4000,
      image: "/images/garden-suites/garden-suitsbanner.jpg",
      link: "/hyderabad/completed/garden-suites",
      city: "Hyderabad",
      featured: true,
    },
    {
      id: 6,
      title: "VEDA",
      type: "Apartment",
      status: "completed",
      price: "₹1.5Cr - ₹2Cr",
      location: "Himayatnagar, Hyderabad",
      bedrooms: 3,
      bathrooms: 3,
      area: 2500,
      image: "/images/veda01.jpg",
      link: "/hyderabad/completed/veda",
      city: "Hyderabad",
      featured: false,
    },
    // Hyderabad Ongoing Projects
    {
      id: 7,
      title: "ALLURA",
      type: "Apartment",
      status: "ongoing",
      price: "₹1.5Cr - ₹2Cr",
      location: "Beach Road, Hyderabad",
      bedrooms: 3,
      bathrooms: 2,
      area: 2400,
      image: "/images/Allura-ongoing-project-632-x-946.jpg",
      link: "/hyderabad/ongoing/allura",
      city: "Hyderabad",
      featured: true,
    },
    {
      id: 8,
      title: "SP PALACIO",
      type: "Apartment",
      status: "ongoing",
      price: "₹2.2Cr - ₹2.8Cr",
      location: "Jubilee Hills, Hyderabad",
      bedrooms: 3,
      bathrooms: 3,
      area: 2800,
      image: "/images/surekaplaza01.jpg",
      link: "/hyderabad/ongoing/sp-palacio",
      city: "Hyderabad",
      featured: true,
    },
    {
      id: 9,
      title: "SANCTUARY",
      type: "Villa",
      status: "ongoing",
      price: "₹2.5Cr - ₹3Cr",
      location: "Madhurawada, Hyderabad",
      bedrooms: 4,
      bathrooms: 3,
      area: 3200,
      image: "/images/sanctuary-thumbnail.jpg",
      link: "/hyderabad/ongoing/sanctuary",
      city: "Hyderabad",
      featured: true,
    },
    // Vizag Completed Projects
    {
      id: 10,
      title: "EDEN GARDEN",
      type: "Villa",
      status: "completed",
      price: "₹2.2Cr - ₹2.8Cr",
      location: "Madhurawada, Vizag",
      bedrooms: 3,
      bathrooms: 3,
      area: 2800,
      image: "/images/edengardenva.jpg",
      link: "/vizag/completed/eden-garden",
      city: "Vizag",
      featured: true,
    },
    // Vizag Ongoing Projects
    {
      id: 11,
      title: "PARK AVENUE",
      type: "Apartment",
      status: "ongoing",
      price: "₹1.2Cr - ₹1.6Cr",
      location: "Beach Road, Vizag",
      bedrooms: 3,
      bathrooms: 2,
      area: 2200,
      image: "/images/parkave01.jpg",
      link: "/vizag/ongoing/park-avenue",
      city: "Vizag",
      featured: true,
    },
    {
      id: 12,
      title: "GOLDEN VALLEY",
      type: "Villa",
      status: "ongoing",
      price: "₹2Cr - ₹2.5Cr",
      location: "Madhurawada, Vizag",
      bedrooms: 3,
      bathrooms: 3,
      area: 3000,
      image: "/images/GOLDEN-VALLEY01.jpg",
      link: "/vizag/ongoing/golden-valley",
      city: "Vizag",
      featured: true,
    }
  ];

  const [filters, setFilters] = useState({
    propertyType: '',
    location: '',
    priceRange: '',
    bedrooms: ''
  });

  const [filteredProperties, setFilteredProperties] = useState(properties);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearch = () => {
    let filtered = [...properties];

    // Filter by property type
    if (filters.propertyType) {
      filtered = filtered.filter(property => 
        property.type.toLowerCase() === filters.propertyType.toLowerCase()
      );
    }

    // Filter by location
    if (filters.location) {
      filtered = filtered.filter(property => 
        property.city.toLowerCase() === filters.location.toLowerCase()
      );
    }

    // Filter by price range
    if (filters.priceRange) {
      filtered = filtered.filter(property => {
        const price = parseInt(property.price.split(' ')[0].replace('₹', ''));
        switch (filters.priceRange) {
          case '0-70':
            return price <= 70;
          case '70-1':
            return price > 70 && price <= 100;
          case '1-2':
            return price > 100 && price <= 200;
          case '2+':
            return price > 200;
          default:
            return true;
        }
      });
    }

    // Filter by bedrooms
    if (filters.bedrooms) {
      filtered = filtered.filter(property => 
        property.bedrooms >= parseInt(filters.bedrooms)
      );
    }

    setFilteredProperties(filtered);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[300px] bg-cover bg-center flex items-center" style={{ backgroundImage: "url('https://northstarhomes.in/assets/images/veda-cp-img.webp')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Properties
            </h1>
            <p className="text-white text-lg mb-6">
              Discover exceptional homes and investment opportunities
            </p>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3 text-white">
                <li className="inline-flex items-center">
                  <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2">/</span>
                    <span className="text-gray-200">Properties</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Property Search Section */}
      <section className="py-12 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="bg-white p-6 rounded-lg shadow-md -mt-20 relative z-10">
            <h2 className="text-2xl font-bold text-center mb-6">Find Your Perfect Property</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                <select 
                  name="propertyType"
                  value={filters.propertyType}
                  onChange={handleFilterChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">All Types</option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <select 
                  name="location"
                  value={filters.location}
                  onChange={handleFilterChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">All Locations</option>
                  <option value="hyderabad">Hyderabad</option>
                  <option value="vizag">Visakhapatnam</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                <select 
                  name="priceRange"
                  value={filters.priceRange}
                  onChange={handleFilterChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Any Price</option>
                  <option value="0-70">₹0 - ₹70 L</option>
                  <option value="70-1">₹70 L - ₹1 Cr</option>
                  <option value="1-2">₹1 Cr - ₹2 Cr</option>
                  <option value="2+">₹2 Cr+</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
                <select 
                  name="bedrooms"
                  value={filters.bedrooms}
                  onChange={handleFilterChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
              </div>

              <div className="flex items-end">
                <button 
                  onClick={handleSearch}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded transition duration-300"
                >
                  Search Properties
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Properties Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">All Properties</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our complete collection of exceptional properties in Hyderabad and Visakhapatnam
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-cta-pattern bg-cover bg-center py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Help Finding the Perfect Property?
            </h2>
            <p className="text-white text-lg mb-8">
              Our real estate experts are ready to assist you in finding the perfect property that meets all your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link href="/about" className="bg-white text-primary hover:bg-gray-100 font-medium py-2 px-6 rounded transition duration-300">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 