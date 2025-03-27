import Link from 'next/link';
import Image from 'next/image';

export default function BlogPage() {
  // Sample blog posts - would be replaced with actual data
  const featuredPost = {
    id: 1,
    title: "The Future of Real Estate in India: Trends to Watch",
    excerpt: "Discover the emerging trends that are shaping the real estate market in India, from sustainable development to smart homes and changing buyer preferences.",
    date: "August 15, 2024",
    author: "Rajesh Kumar",
    category: "Market Trends",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
  };

  const blogPosts = [
    {
      id: 2,
      title: "Why Visakhapatnam is Becoming a Real Estate Hotspot",
      excerpt: "With its beautiful coastline, growing IT sector, and improving infrastructure, Visakhapatnam is emerging as one of India's most promising cities for real estate investment.",
      date: "July 28, 2024",
      author: "Priya Sharma",
      category: "Investment",
      image: "https://images.unsplash.com/flagged/photo-1558954157-aa76c0d246c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 3,
      title: "Sustainable Building Practices in Modern Construction",
      excerpt: "How Northstar Homes is implementing eco-friendly building practices to create sustainable, energy-efficient living spaces for the conscious homebuyer.",
      date: "July 15, 2024",
      author: "Arun Patel",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1531321538006-82b62d9fbb1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VzdGFpbmFibGUlMjBidWlsZGluZ3N8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 4,
      title: "Home Buying Guide: Essential Tips for First-Time Buyers",
      excerpt: "Navigate the complex process of buying your first home with confidence using these expert tips and insights from real estate professionals.",
      date: "June 30, 2024",
      author: "Sneha Reddy",
      category: "Buying Guide",
      image: "https://images.unsplash.com/photo-1533561797500-4fad4750814e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3VpZGV8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 5,
      title: "Interior Design Trends for 2024: Creating Your Dream Home",
      excerpt: "Explore the latest interior design trends that are transforming living spaces and learn how to incorporate them into your home.",
      date: "June 15, 2024",
      author: "Vikram Nair",
      category: "Interior Design",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW50ZXJpb3IlMjBkZXNpZ24lMjB0cmVtZHN8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 6,
      title: "The Impact of Infrastructure Development on Property Values",
      excerpt: "How new roads, metro lines, and other infrastructure projects are influencing property values and creating investment opportunities in urban areas.",
      date: "May 28, 2024",
      author: "Kamal Joshi",
      category: "Investment",
      image: "https://images.unsplash.com/photo-1588720516255-fc99581c9716?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1wYWN0fGVufDB8fDB8fHww"
    },
  ];

  const categories = [
    { name: "Market Trends", count: 8 },
    { name: "Investment", count: 12 },
    { name: "Buying Guide", count: 6 },
    { name: "Interior Design", count: 9 },
    { name: "Sustainability", count: 5 },
    { name: "Project Updates", count: 14 },
  ];

  const recentPosts = [
    { id: 1, title: "The Future of Real Estate in India: Trends to Watch", date: "August 15, 2024" },
    { id: 2, title: "Why Visakhapatnam is Becoming a Real Estate Hotspot", date: "July 28, 2024" },
    { id: 3, title: "Sustainable Building Practices in Modern Construction", date: "July 15, 2024" },
    { id: 4, title: "Home Buying Guide: Essential Tips for First-Time Buyers", date: "June 30, 2024" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[250px] bg-gray-900 bg-cover bg-center flex items-center">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Blog
            </h1>
            <p className="text-white text-lg mb-6">Insights, advice, and updates from the world of real estate</p>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3 text-white">
                <li className="inline-flex items-center">
                  <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2">/</span>
                    <span className="text-gray-200">Blog</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Featured Post */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">Featured Post</h2>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-[400px]">
                    <Image 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full mb-3">
                      {featuredPost.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-3">
                      <Link href={`/blog/${featuredPost.id}`} className="hover:text-primary transition-colors">
                        {featuredPost.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                          <span className="text-primary font-bold">{featuredPost.author.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="font-medium">{featuredPost.author}</p>
                          <p className="text-gray-500 text-sm">{featuredPost.date}</p>
                        </div>
                      </div>
                      <Link href={`/blog/${featuredPost.id}`} className="text-primary font-medium hover:underline">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Latest Posts */}
              <div>
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">Latest Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {blogPosts.map((post) => (
                    <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="relative h-48">
                        <Image 
                          src={post.image} 
                          alt={post.title}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="p-5">
                        <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full mb-3">
                          {post.category}
                        </span>
                        <h3 className="text-xl font-bold mb-3">
                          <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                            {post.title}
                          </Link>
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <p className="text-gray-500 text-sm">{post.date}</p>
                          <Link href={`/blog/${post.id}`} className="text-primary font-medium hover:underline text-sm">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-10">
                  <div className="flex space-x-2">
                    <button className="w-10 h-10 rounded-md border border-gray-300 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      &laquo;
                    </button>
                    <button className="w-10 h-10 rounded-md bg-primary text-white flex items-center justify-center">
                      1
                    </button>
                    <button className="w-10 h-10 rounded-md border border-gray-300 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      2
                    </button>
                    <button className="w-10 h-10 rounded-md border border-gray-300 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      3
                    </button>
                    <button className="w-10 h-10 rounded-md border border-gray-300 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      &raquo;
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Search */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold mb-4">Search</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search articles..." 
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <ul className="space-y-3">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link href={`/blog/category/${category.name.toLowerCase().replace(' ', '-')}`} className="flex justify-between items-center hover:text-primary transition-colors">
                        <span>{category.name}</span>
                        <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          {category.count}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
                <ul className="space-y-4">
                  {recentPosts.map((post) => (
                    <li key={post.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                      <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                        <h4 className="font-medium mb-1 line-clamp-2">{post.title}</h4>
                        <p className="text-gray-500 text-sm">{post.date}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Subscribe */}
              <div className="bg-primary/10 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-gray-700 mb-4">Stay updated with our latest projects and real estate insights.</p>
                <form>
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                  <button type="submit" className="btn-primary w-full">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Have Questions About Real Estate?</h2>
            <p className="text-gray-700 mb-8 text-lg">
              Our experts are here to help you navigate the property market with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Our Team
              </Link>
              <Link href="/hyderabad/ongoing" className="btn-outline">
                Explore Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 