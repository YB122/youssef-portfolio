import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About me", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Feedback", path: "/feedback" },
    { name: "Contact me", path: "/contact" },
  ];

  const socialLinks = [
    {
      icon: "fab fa-linkedin-in",
      url: "https://www.linkedin.com/in/youssef-benyamine-b55a81219/",
      label: "LinkedIn",
    },
    { icon: "fab fa-github", url: "https://github.com/YB122", label: "GitHub" },
    {
      icon: "fab fa-youtube",
      url: "https://www.youtube.com/@youssefbenyamine944",
      label: "YouTube",
    },
    {
      icon: "far fa-file-pdf",
      url: "/Youssef_Benyamine_Tawfike_Amine.pdf",
      label: "CV",
    },
  ];

  return (
    <footer className="bg-[#0D0D0D] border-t border-[rgba(255,107,53,0.2)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center">
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-red-600 bg-clip-text text-transparent tracking-wide mb-8"
          >
            Youssef Benyamine
          </Link>

          <ul className="flex flex-wrap items-center justify-center gap-8 mb-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-sm font-medium text-[#888888] hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                className="w-10 h-10 flex items-center justify-center border border-[rgba(255,107,53,0.3)] rounded-full text-[#888888] transition-all duration-300 hover:border-[#FF6B35] hover:text-[#FF6B35]"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 mb-8 text-sm text-[#888888]">
            <a
              href="mailto:youssefbenyamine2eme@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors duration-300"
            >
              <i className="far fa-envelope"></i>
              youssefbenyamine2eme@gmail.com
            </a>
            <a
              href="tel:+201284584675"
              className="flex items-center gap-2 hover:text-white transition-colors duration-300"
            >
              <i className="fas fa-phone-alt"></i>
              +201284584675
            </a>
          </div>

          <div className="border-t border-[rgba(255,107,53,0.2)] w-full max-w-xl pt-6">
            <p className="text-xs text-[#888888]">
              Designed by{" "}
              <span className="font-semibold text-white">
                Youssef Benyamine
              </span>{" "}
              Full Stack Developer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
