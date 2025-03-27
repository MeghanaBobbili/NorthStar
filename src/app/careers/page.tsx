import Link from 'next/link';
import Image from 'next/image';

export default function CareersPage() {
  // Sample job openings - would be replaced with actual data
  const jobOpenings = [
    {
      id: 1,
      title: "Civil QA/QC Engineer",
      location: "Hyderabad & Vizag",
      type: "Full-time",
      experience: "5-10 years",
      description: "We're looking for experienced Civil QA/QC Engineers with building construction experience and quality audit certification to ensure the highest standards in our construction projects.",
      requirements: [
        "5-10 years of experience in building construction QA/QC",
        "Quality audit certification",
        "Experience with inspection procedures",
        "Strong attention to detail",
        "Excellent communication skills"
      ]
    },
    {
      id: 2,
      title: "Architectural Designer",
      location: "Hyderabad",
      type: "Full-time",
      experience: "3-7 years",
      description: "Join our architectural team to create innovative designs for our luxury residential projects. You'll collaborate with senior architects and contribute to all phases of the design process.",
      requirements: [
        "Bachelor's or Master's degree in Architecture",
        "3-7 years of experience in residential architecture",
        "Proficiency in AutoCAD, Revit, and SketchUp",
        "Strong design portfolio",
        "Knowledge of sustainable design practices"
      ]
    },
    {
      id: 3,
      title: "Marketing Manager",
      location: "Hyderabad",
      type: "Full-time",
      experience: "5+ years",
      description: "We're seeking a creative Marketing Manager to develop and implement marketing strategies for our real estate projects, focusing on digital marketing, content creation, and brand positioning.",
      requirements: [
        "5+ years of marketing experience, preferably in real estate",
        "Strong understanding of digital marketing channels",
        "Experience managing marketing campaigns",
        "Excellent project management skills",
        "Bachelor's degree in Marketing or related field"
      ]
    },
    {
      id: 4,
      title: "Sales Executive",
      location: "Visakhapatnam",
      type: "Full-time",
      experience: "2-5 years",
      description: "Join our sales team to help customers find their dream homes. You'll be responsible for property presentations, client interactions, and closing sales for our premium projects in Vizag.",
      requirements: [
        "2-5 years of sales experience, preferably in real estate",
        "Excellent communication and negotiation skills",
        "Results-oriented with a proven track record",
        "Knowledge of the local property market",
        "Willingness to work flexible hours"
      ]
    }
  ];

  // Company values
  const companyValues = [
    {
      title: "Excellence",
      description: "We strive for excellence in every aspect of our work, from design and construction to customer service and employee development."
    },
    {
      title: "Integrity",
      description: "We conduct our business with the highest ethical standards, ensuring transparency and honesty in all our dealings."
    },
    {
      title: "Innovation",
      description: "We embrace innovative ideas and technologies to create better living spaces and more efficient work processes."
    },
    {
      title: "Sustainability",
      description: "We are committed to sustainable development practices that minimize environmental impact and create healthier communities."
    },
    {
      title: "Teamwork",
      description: "We believe in the power of collaboration and foster a supportive environment where everyone's contributions are valued."
    },
    {
      title: "Customer Focus",
      description: "We are dedicated to understanding and exceeding our customers' expectations, creating homes they are proud to live in."
    }
  ];

  // Employee benefits
  const benefits = [
    "Competitive salary packages",
    "Health insurance coverage",
    "Professional development opportunities",
    "Performance-based incentives",
    "Work-life balance",
    "Team building events",
    "Career growth pathways",
    "Collaborative work environment"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[350px] bg-gray-900 bg-cover bg-center flex items-center">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Join Our Team
            </h1>
            <p className="text-white text-lg mb-6">Build your career with one of India's leading real estate developers</p>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3 text-white">
                <li className="inline-flex items-center">
                  <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2">/</span>
                    <span className="text-gray-200">Careers</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* About Working at Northstar */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Work With Us?</h2>
              <p className="text-gray-700 mb-4">
                At Northstar Homes, we're building more than just properties – we're creating communities and shaping the future of urban living. Our team consists of passionate professionals who are dedicated to delivering excellence in everything we do.
              </p>
              <p className="text-gray-700 mb-4">
                We believe that our success is driven by our people, which is why we invest in their growth and well-being. When you join Northstar Homes, you become part of a dynamic environment where innovation is encouraged, achievements are recognized, and career growth is supported.
              </p>
              <p className="text-gray-700">
                Whether you're an experienced professional or just starting your career, Northstar Homes offers exciting opportunities to make an impact in the real estate industry while developing your skills and realizing your potential.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Northstar Team" 
                fill 
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-12 bg-gray-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyValues.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGluZGlhbiUyMGVtcGxveWVlfGVufDB8fDB8fHww" 
                alt="Employee Benefits" 
                fill 
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Employee Benefits</h2>
              <p className="text-gray-700 mb-6">
                We believe in taking care of our team members. That's why we offer a comprehensive benefits package designed to support your well-being and professional growth.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-12 bg-gray-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Current Openings</h2>
          
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-2xl font-bold">{job.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                    <span className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                      {job.location}
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                      {job.type}
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                      {job.experience}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{job.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-bold mb-2">Requirements:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="text-gray-700">{req}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-end">
                  <Link 
                    href={`/careers/${job.id}`} 
                    className="btn-primary"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Hiring Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Application</h3>
              <p className="text-gray-700">Submit your resume and cover letter through our online application system.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Screening</h3>
              <p className="text-gray-700">Our HR team will review your application and may conduct an initial phone interview.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Interview</h3>
              <p className="text-gray-700">Selected candidates will be invited for in-person or virtual interviews with the hiring team.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Offer</h3>
              <p className="text-gray-700">Successful candidates will receive a job offer and welcome to the Northstar Homes team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Don't See a Suitable Position?</h2>
            <p className="text-gray-700 mb-8 text-lg">
              We're always looking for talented individuals to join our team. Send us your resume, and we'll keep it on file for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Send Your Resume
              </Link>
              <a href="mailto:hr@northstar.in" className="btn-outline">
                Email: hr@northstar.in
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 