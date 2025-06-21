"use client";

import { Home, Star, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="mt-5 sticky top-10 z-30">
      <div className="w-full flex justify-center">
        <div className="backdrop-blur-md border border-fuchsia-500 rounded-xl px-6 py-3 flex flex-col md:flex-row items-center justify-center max-w-4xl w-full gap-4 md:gap-0">

          {/* Navigation */}
          <nav className="flex flex-row gap-6 text-sm items-center">
            <a href="#Home" className="flex items-center gap-1 text-white/70 text-base font-bold font-serif transition-colors duration-200 hover:text-white">
              <Home className="w-4 h-4 md:hidden" /> Home
            </a>
            <a href="#Features" className="flex items-center gap-1 text-white/70 text-base font-bold font-serif transition-colors duration-200 hover:text-white">
              <Star className="w-4 h-4 md:hidden" /> Features
            </a>
            <a href="#Contact" className="flex items-center gap-1 text-white/70 text-base font-bold font-serif transition-colors duration-200 hover:text-white">
              <Mail className="w-4 h-4 md:hidden" /> Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
