import Link from 'next/link';
import Image from 'next/image';

export default function GalleryPage() {
  // Sample gallery categories and images - would be replaced with actual data
  const galleryCategories = [
    { id: 'hyderabad', name: 'Hyderabad Projects' },
    { id: 'vizag', name: 'Visakhapatnam Projects' },
    { id: 'interiors', name: 'Interior Designs' },
    { id: 'amenities', name: 'Amenities' },
    { id: 'construction', name: 'Construction Updates' },
  ];

  const galleryImages = [
    { id: 1, src: '/images/property-1.jpg', alt: 'Luxury Apartment Exterior', category: 'hyderabad' },
    { id: 2, src: '/images/property-2.jpg', alt: 'Modern Living Room', category: 'interiors' },
    { id: 3, src: '/images/property-3.jpg', alt: 'Swimming Pool', category: 'amenities' },
    { id: 4, src: '/images/about-img.jpg', alt: 'Vizag Project', category: 'vizag' },
    { id: 5, src: '/images/property-1.jpg', alt: 'Construction Progress', category: 'construction' },
    { id: 6, src: '/images/property-2.jpg', alt: 'Bedroom Interior', category: 'interiors' },
    { id: 7, src: '/images/property-3.jpg', alt: 'Children Play Area', category: 'amenities' },
    { id: 8, src: '/images/about-img.jpg', alt: 'Hyderabad Project', category: 'hyderabad' },
    { id: 9, src: '/images/property-1.jpg', alt: 'Vizag Beachfront', category: 'vizag' },
    { id: 10, src: '/images/property-2.jpg', alt: 'Construction Site', category: 'construction' },
    { id: 11, src: '/images/property-3.jpg', alt: 'Kitchen Design', category: 'interiors' },
    { id: 12, src: '/images/about-img.jpg', alt: 'Clubhouse', category: 'amenities' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[250px] bg-gray-900 bg-cover bg-center flex items-center">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Gallery
            </h1>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3 text-white">
                <li className="inline-flex items-center">
                  <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2">/</span>
                    <span className="text-gray-200">Gallery</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-6 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center space-x-0 md:space-x-4 space-y-2 md:space-y-0">
            <button className="btn-primary py-2 px-4">All</button>
            {galleryCategories.map((category) => (
              <button key={category.id} className="btn-outline py-2 px-4">
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <div 
                key={image.id} 
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image 
                    src={image.src} 
                    alt={image.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-semibold">{image.alt}</h3>
                  <p className="text-gray-300 text-sm">Northstar Homes</p>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="btn-primary px-8 py-3">
              Load More
            </button>
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-12 bg-gray-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Video Gallery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Video Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 w-full">
                <Image 
                  src="/images/property-1.jpg" 
                  alt="Property Tour Video" 
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
                    <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Park Avenue Property Tour</h3>
                <p className="text-gray-700">Take a virtual tour of our luxurious Park Avenue project in Visakhapatnam.</p>
              </div>
            </div>
            
            {/* Video Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 w-full">
                <Image 
                  src="/images/property-2.jpg" 
                  alt="Construction Progress Video" 
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
                    <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Golden Valley Construction Update</h3>
                <p className="text-gray-700">Watch the latest construction progress at our Golden Valley project.</p>
              </div>
            </div>
            
            {/* Video Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 w-full">
                <Image 
                  src="/images/property-3.jpg" 
                  alt="Amenities Showcase Video" 
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
                    <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Amenities Showcase</h3>
                <p className="text-gray-700">Explore the world-class amenities available at Northstar Homes projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in Our Properties?</h2>
            <p className="text-gray-700 mb-8 text-lg">
              Schedule a visit to experience our premium properties in person.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Our Team
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