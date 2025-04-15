"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaSearch, FaTimes } from "react-icons/fa";

// Mock property data
const mockProperties = [
  { id: 1, name: "Allura", type: "2BHK", location: "Hyderabad", price: "75L", path: "/hyderabad/ongoing/allura" },
  { id: 2, name: "SP Palacio", type: "3BHK", location: "Hyderabad", price: "85L", path: "/hyderabad/ongoing/sp-palacio" },
  { id: 3, name: "Sanctuary", type: "Villa", location: "Hyderabad", price: "1.2Cr", path: "/hyderabad/ongoing/sanctuary" },
  { id: 4, name: "Park Avenue", type: "2BHK,2.5BHK,3BHK", location: "Visakhapatnam, Vizag", price: "45L", path: "/vizag/ongoing/park-avenue" },
  { id: 5, name: "Golden Valley", type: "2.5BHK,3BHK,3.5BHK", location: "Visakhapatnam, Vizag", price: "55L", path: "/vizag/ongoing/golden-valley" },
];

interface SearchResult {
  id: number;
  name: string;
  type: string;
  location: string;
  price: string;
  path: string;
}

const SmartSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Parse search query and find matches
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (!query.trim()) {
      setResults([]);
      return;
    }

    // Extract key information using regex
    const typeMatch = query.match(/(\d+BHK|plot|villa|apartment)/i);
    const locationMatch = query.match(/(hyderabad|vizag|visakhapatnam|mokila)/i);
    const priceMatch = query.match(/under\s*₹?(\d+\.?\d*[LCR])/i);

    const type = typeMatch ? typeMatch[1].toLowerCase() : null;
    const location = locationMatch ? locationMatch[1].toLowerCase() : null;
    const price = priceMatch ? priceMatch[1].toLowerCase() : null;

    // Filter properties based on extracted information
    const filteredResults = mockProperties.filter(property => {
      const matchesType = !type || property.type.toLowerCase().includes(type);
      const matchesLocation = !location || property.location.toLowerCase().includes(location);
      const matchesPrice = !price || property.price.toLowerCase().includes(price);
      return matchesType && matchesLocation && matchesPrice;
    });

    setResults(filteredResults);
  };

  const handleResultClick = (path: string) => {
    router.push(path);
    setIsOpen(false);
    setSearchQuery("");
  };

  return (
    <div className="relative" ref={searchRef}>
      {/* Compact view (when closed) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="text-[#111827] hover:text-primary transition-colors"
          aria-label="Search"
        >
          <FaSearch className="h-5 w-5" />
        </button>
      )}

      {/* Expanded view (when open) */}
      {isOpen && (
        <div className="flex items-center z-50">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search properties..."
              className="w-36 lg:w-48 py-1 px-3 text-sm text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              autoFocus
            />
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              <FaTimes className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Search Results */}
      {isOpen && results.length > 0 && (
        <div className="absolute right-0 top-full mt-1 w-64 bg-white rounded-lg shadow-lg z-50 border border-gray-200">
          <div className="max-h-60 overflow-y-auto py-1">
            {results.map((result) => (
              <div
                key={result.id}
                onClick={() => handleResultClick(result.path)}
                className="p-2 hover:bg-primary hover:text-white cursor-pointer transition-colors"
              >
                <div className="font-medium">{result.name}</div>
                <div className="text-xs text-gray-600 group-hover:text-white">
                  {result.type} • {result.location} • ₹{result.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Search Tips */}
      {isOpen && searchQuery && results.length === 0 && (
        <div className="absolute right-0 top-full mt-1 w-64 bg-white rounded-lg shadow-lg z-50 border border-gray-200 p-2">
          <div className="text-xs text-gray-500">
            Try searching with:
            <ul className="list-disc list-inside mt-1">
              <li>Property type (2BHK, 3BHK, Plot)</li>
              <li>Location (Hyderabad, Visakhapatnam)</li>
              <li>Budget (under ₹50L, under ₹1Cr)</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmartSearch; 