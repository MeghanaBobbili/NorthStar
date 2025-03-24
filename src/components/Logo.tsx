import Link from "next/link";

interface LogoProps {
  className?: string;
  textColor?: string;
  accentColor?: string;
}

const Logo = ({ 
  className = "", 
  textColor = "text-primary", 
  accentColor = "text-accent" 
}: LogoProps) => {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <span className={`text-2xl font-playfair font-bold ${textColor}`}>
        Northstar<span className={accentColor}>Homes</span>
      </span>
    </Link>
  );
};

export default Logo; 