"use client";

import Image from "next/image";
import Link from "next/link";
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt } from "react-icons/fa";

interface Property {
  id: number;
  title: string;
  type: string;
  status: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  featured?: boolean;
  link: string;
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <div className="property-card">
      <div className="relative">
        <div className="relative h-64 w-full">
          <Image
            src={property.image}
            alt={property.title}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-t-lg"
          />
        </div>
        <div className="property-badge">{property.status}</div>
        
        {property.featured && (
          <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex items-center mb-2">
          <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
            {property.type}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2 line-clamp-1">{property.title}</h3>
        <div className="flex items-center text-gray-600 mb-4">
          <FaMapMarkerAlt className="mr-1 text-primary" />
          <span className="text-sm">{property.location}</span>
        </div>
        
        <div className="property-price mb-4">{property.price}</div>
        
        <div className="property-features border-t pt-4">
          <div className="feature">
            <FaBed className="text-primary" />
            <span>{property.bedrooms} {property.bedrooms > 1 ? 'Beds' : 'Bed'}</span>
          </div>
          <div className="feature">
            <FaBath className="text-primary" />
            <span>{property.bathrooms} {property.bathrooms > 1 ? 'Baths' : 'Bath'}</span>
          </div>
          <div className="feature">
            <FaRulerCombined className="text-primary" />
            <span>{property.area} sq.ft</span>
          </div>
        </div>
        
        <Link 
          href={property.link}
          className="block w-full text-center bg-white border border-primary text-primary hover:bg-primary hover:text-white mt-5 py-2 rounded transition duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard; 