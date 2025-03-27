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
    // Hyderabad Projects
    { id: 1, src: '/images/eden-garden/EGK_8_978x418.jpg', alt: 'Eden Garden - Luxury Apartments', category: 'hyderabad' },
    { id: 2, src: '/images/eden-garden/EGK_West Rear_978x418.jpg', alt: 'Eden Garden - Exterior View', category: 'hyderabad' },
    { id: 3, src: '/images/eden-garden/EGK_7_978x418.jpg', alt: 'Eden Garden - Swimming Pool', category: 'amenities' },
    { id: 4, src: '/images/eden-garden/eden-garden.jpg', alt: 'Eden Garden - Clubhouse', category: 'amenities' },
    { id: 5, src: '/images/eden-garden/masterplaneden.jpg', alt: 'Eden Garden - Master Plan', category: 'hyderabad' },
    
    // Vizag Projects
    { id: 6, src: '/images/goldenvalley/goldenvelly1.jpg', alt: 'Golden Valley - Luxury Villas', category: 'vizag' },
    { id: 7, src: '/images/goldenvalley/goldenvelly2.jpg', alt: 'Golden Valley - Villa Exterior', category: 'vizag' },
    { id: 8, src: '/images/goldenvalley/goldenvelly3.jpg', alt: 'Golden Valley - Living Area', category: 'interiors' },
    { id: 9, src: '/images/goldenvalley/goldenvelly4.jpg', alt: 'Golden Valley - Kitchen', category: 'interiors' },
    { id: 10, src: '/images/goldenvalley/GV POOL.jpg', alt: 'Golden Valley - Swimming Pool', category: 'amenities' },
    { id: 11, src: '/images/goldenvalley/Club HOUSE.jpg', alt: 'Golden Valley - Clubhouse', category: 'amenities' },
    { id: 12, src: '/images/goldenvalley/master-plan-golden.jpg', alt: 'Golden Valley - Master Plan', category: 'vizag' },
    
    // Construction Updates
    { id: 13, src: '/images/goldenvalley/BUILDING.jpg', alt: 'Golden Valley - Construction Progress', category: 'construction' },
    { id: 14, src: '/images/goldenvalley/BUILDING01.jpg', alt: 'Golden Valley - Site Work', category: 'construction' },
    { id: 15, src: '/images/goldenvalley/GV LAND SCAPE 01.jpg', alt: 'Golden Valley - Landscaping', category: 'amenities' },
    { id: 16, src: '/images/goldenvalley/GV flowers.jpg', alt: 'Golden Valley - Garden View', category: 'amenities' },
    
    // Additional Project Images
    { id: 17, src: '/images/veda/veda01.jpg', alt: 'Veda - Luxury Villas', category: 'hyderabad' },
    { id: 18, src: '/images/garden-suites/garden-suites01.jpg', alt: 'Garden Suites - Modern Apartments', category: 'hyderabad' },
    { id: 19, src: '/images/leela/leela01.jpg', alt: 'The Leela - Premium Residences', category: 'hyderabad' },
    { id: 20, src: '/images/sp-palacio/sp_palacio-banner1.jpg', alt: 'SP Palacio - Luxury Apartments', category: 'hyderabad' },
    { id: 21, src: '/images/park-ave-va/parkave01.jpg', alt: 'Park Avenue - Premium Apartments', category: 'vizag' },
    { id: 22, src: '/images/eden-garden-va/edengardenva.jpg', alt: 'Eden Garden Vizag - Luxury Living', category: 'vizag' },
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
                  src="/images/goldenvalley/goldenvelly1.jpg" 
                  alt="Golden Valley Property Tour" 
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
                <h3 className="font-bold text-lg mb-2">Golden Valley Property Tour</h3>
                <p className="text-gray-700">Take a virtual tour of our luxurious Golden Valley project in Visakhapatnam.</p>
              </div>
            </div>
            
            {/* Video Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 w-full">
                <Image 
                  src="/images/eden-garden/EGK_8_978x418.jpg" 
                  alt="Eden Garden Property Tour" 
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
                <h3 className="font-bold text-lg mb-2">Eden Garden Property Tour</h3>
                <p className="text-gray-700">Explore our premium Eden Garden apartments in Hyderabad.</p>
              </div>
            </div>
            
            {/* Video Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 w-full">
                <Image 
                  src="/images/goldenvalley/GV POOL.jpg" 
                  alt="Golden Valley Amenities Tour" 
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
                <h3 className="font-bold text-lg mb-2">Golden Valley Amenities Tour</h3>
                <p className="text-gray-700">Experience the world-class amenities at Golden Valley.</p>
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