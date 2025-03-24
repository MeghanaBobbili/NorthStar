"use client";

import Image from "next/image";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  email?: string;
}

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
  socialLinks: SocialLinks;
}

const TeamMember = ({ name, position, image, socialLinks }: TeamMemberProps) => {
  return (
    <div className="card overflow-hidden group">
      <div className="relative h-80 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex justify-center space-x-3">
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label={`${name}'s LinkedIn`}
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            )}
            
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label={`${name}'s Twitter`}
              >
                <FaTwitter className="w-5 h-5" />
              </a>
            )}
            
            {socialLinks.email && (
              <a
                href={`mailto:${socialLinks.email}`}
                className="bg-white p-2 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label={`Email ${name}`}
              >
                <FaEnvelope className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-5 text-center">
        <h3 className="font-bold text-xl mb-1">{name}</h3>
        <p className="text-gray-600">{position}</p>
      </div>
    </div>
  );
};

export default TeamMember; 