import React from "react";
import { CalendarDays } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="bg-white text-gray-800 py-6 px-8 shadow-lg border-b-2 border-cyan-500/50">
      <div className="flex items-center gap-3">
        <div className="bg-cyan-100 p-3 rounded-full shadow-sm">
          <CalendarDays className="w-7 h-7 text-cyan-600" />
        </div>
        <h1 className="text-3xl font-bold text-cyan-700 tracking-tight">
          Event Finder
        </h1>
      </div>

      <p className="text-md text-gray-500 mt-3 sm:mt-0">
        Discover and create amazing events in your area
      </p>
    </header>
  );
};

export default Header;
