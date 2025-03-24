import Link from 'next/link';
import PropertyCard from '@/components/PropertyCard';

export default function PropertiesPage() {
  const allProperties = [
    // Hyderabad Projects
    {
      id: 1,
      title: "NORTHSTAR SP PALACIO",
      location: "Abids, Hyderabad",
      price: "₹95L - ₹1.5Cr",
      bedrooms: 3,
      bathrooms: 3,
      area: 1850,
      type: "Apartment",
      image: "https://northstarhomes.in/assets/images/leela-cp-img.webp",
      featured: true,
      status: "ongoing",
      city: "hyderabad",
    },
    {
      id: 2,
      title: "ALLURA",
      location: "Kokapet, Hyderabad",
      price: "₹2.8Cr - ₹3.5Cr",
      bedrooms: 4,
      bathrooms: 4,
      area: 3200,
      type: "Villa",
      image: "https://northstarhomes.in/assets/images/veda-cp-img.webp",
      featured: true,
      status: "ongoing",
      city: "hyderabad",
    },
    {
      id: 3,
      title: "SANCTUARY",
      location: "Maheshwaram, Hyderabad",
      price: "₹70L - ₹1.2Cr",
      bedrooms: 3,
      bathrooms: 3,
      area: 2400,
      type: "Villa",
      image: "https://northstarhomes.in/assets/images/leela-cp-img.webp",
      featured: false,
      status: "upcoming",
      city: "vizag",
    },
    {
      id: 4,
      title: "AIRPORT BOULEVARD COMMERCIAL",
      location: "Tukkuguda, Hyderabad",
      price: "₹1.2Cr - ₹3.5Cr",
      bedrooms: 0,
      bathrooms: 0,
      area: 5000,
      type: "Commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      featured: false,
      status: "ongoing",
      city: "hyderabad",
    },
    {
      id: 5,
      title: "GRAND WESTSIDE",
      location: "Financial District, Hyderabad",
      price: "₹1.1Cr - ₹1.8Cr",
      bedrooms: 3,
      bathrooms: 3,
      area: 2100,
      type: "Apartment",
      image: "https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=2070&auto=format&fit=crop",
      featured: true,
      status: "upcoming",
      city: "hyderabad",
    },
    {
      id: 6,
      title: "NORTHSTAR HEIGHTS",
      location: "Gachibowli, Hyderabad",
      price: "₹85L - ₹1.3Cr",
      bedrooms: 2,
      bathrooms: 2,
      area: 1450,
      type: "Apartment",
      image: "https://images.unsplash.com/photo-1609347744417-153cb2bfa9c4?q=80&w=1974&auto=format&fit=crop",
      featured: false,
      status: "completed",
      city: "hyderabad",
    },
    
    // Visakhapatnam Projects
    {
      id: 7,
      title: "PARK AVENUE",
      location: "Madhurawada, Visakhapatnam",
      price: "₹75L - ₹1.2Cr",
      bedrooms: 3,
      bathrooms: 2,
      area: 1650,
      type: "Apartment",
      image: "https://images.unsplash.com/photo-1613977257593-dd7c2520fc29?q=80&w=2070&auto=format&fit=crop",
      featured: true,
      status: "ongoing",
      city: "vizag",
    },
    {
      id: 8,
      title: "GOLDEN VALLEY",
      location: "Madhurawada, Visakhapatnam",
      price: "₹65L - ₹95L",
      bedrooms: 2,
      bathrooms: 2,
      area: 1350,
      type: "Apartment",
      image: "https://images.unsplash.com/photo-1580216643062-cf460548a66a?q=80&w=1958&auto=format&fit=crop",
      featured: true,
      status: "ongoing",
      city: "vizag",
    },
    {
      id: 9,
      title: "OCEAN VISTA",
      location: "Beach Road, Visakhapatnam",
      price: "₹1.5Cr - ₹2.2Cr",
      bedrooms: 3,
      bathrooms: 3,
      area: 2200,
      type: "Apartment",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop",
      featured: false,
      status: "upcoming",
      city: "vizag",
    },
  ];

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
                <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">All Types</option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">All Locations</option>
                  <option value="hyderabad">Hyderabad</option>
                  <option value="vizag">Visakhapatnam</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">Any Price</option>
                  <option value="0-70">₹0 - ₹70 L</option>
                  <option value="70-1">₹70 L - ₹1 Cr</option>
                  <option value="1-2">₹1 Cr - ₹2 Cr</option>
                  <option value="2+">₹2 Cr+</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
                <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
              </div>

              <div className="flex items-end">
                <button className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded transition duration-300">
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
            {allProperties.map((property) => (
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