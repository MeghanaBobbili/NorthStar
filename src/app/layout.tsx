import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AzureChatbot from "@/components/AzureChatbot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Northstar Homes | Luxury Real Estate",
  description: "Discover premium properties with Northstar Homes, your trusted partner in finding your dream home. Explore our gallery, blog, career opportunities, business enquiries, and channel partner programs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <AzureChatbot />
      </body>
    </html>
  );
}
