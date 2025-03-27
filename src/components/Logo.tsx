import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src="/images/scrolled-logo.png"
        alt="Northstar Homes"
        width={200}
        height={50}
        className="h-auto"
      />
    </Link>
  );
};

export default Logo; 