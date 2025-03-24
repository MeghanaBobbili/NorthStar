import Link from "next/link";
import { FaHome, FaBuilding, FaKey, FaChartLine } from "react-icons/fa";

interface ServiceProps {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
}

interface ServiceCardProps {
  service: ServiceProps;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "house":
        return <FaHome className="w-10 h-10 text-primary" />;
      case "building":
        return <FaBuilding className="w-10 h-10 text-primary" />;
      case "key":
        return <FaKey className="w-10 h-10 text-primary" />;
      case "chart":
        return <FaChartLine className="w-10 h-10 text-primary" />;
      default:
        return <FaHome className="w-10 h-10 text-primary" />;
    }
  };

  return (
    <div className="card p-6 flex flex-col h-full hover:border-primary">
      <div className="bg-primary/10 p-4 rounded-lg inline-flex mb-4 w-fit">
        {getIcon(service.icon)}
      </div>
      
      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
      
      <p className="text-gray-600 mb-5 flex-grow">{service.description}</p>
      
      <Link
        href={service.link}
        className="mt-auto text-primary font-medium hover:text-primary-dark flex items-center"
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
  );
};

export default ServiceCard; 