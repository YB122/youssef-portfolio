import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About me", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Feedback", path: "/feedback" },
    { name: "Contact me", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D] border-b border-[rgba(255,107,53,0.2)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px]">
          <Link
            to="/"
            className="text-2xl font-bold tracking-wide bg-gradient-to-r from-orange-500 via-red-500 to-red-600 bg-clip-text text-transparent"
          >
            YB
          </Link>

          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-all duration-[0.3s] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    isActive(link.path)
                      ? "text-[#FF6B35]"
                      : "text-[#888888] hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-[#FF6B35] text-white text-sm font-medium rounded transition-all duration-[0.3s] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#ff8555] hover:scale-105"
            >
              Hire Me
            </Link>
          </div>

          <button
            className="md:hidden text-white text-xl p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden flex flex-col gap-4 py-6 border-t border-[rgba(255,107,53,0.2)]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-all duration-[0.3s] ${
                  isActive(link.path)
                    ? "text-[#FF6B35]"
                    : "text-[#888888] hover:text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-[#FF6B35] text-white text-sm font-medium rounded transition-all duration-[0.3s] hover:bg-[#ff8555] mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Hire Me
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
