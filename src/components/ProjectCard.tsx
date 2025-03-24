"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  image: string;
  link: string;
  videoLink?: string;
}

const ProjectCard = ({ title, subtitle, image, link, videoLink }: ProjectCardProps) => {
  const [showVideo, setShowVideo] = useState(false);

  const handleVideoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  return (
    <div className="card hover:border-primary overflow-hidden group">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/50"></div>
        
        {videoLink && (
          <button 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors"
            onClick={handleVideoClick}
            aria-label="Play video"
          >
            <FaPlayCircle className="h-16 w-16" />
          </button>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{subtitle}</p>
        
        <Link 
          href={link}
          className="text-primary font-medium hover:text-primary-dark flex items-center"
        >
          Learn More
          <svg
            className="ml-1 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button 
              className="absolute -top-10 right-0 text-white hover:text-primary"
              onClick={handleCloseVideo}
            >
              <svg 
                className="w-8 h-8" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
            <div className="relative pb-[56.25%] h-0">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src={`${videoLink}?autoplay=1`}
                title={`${title} video`}
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard; 