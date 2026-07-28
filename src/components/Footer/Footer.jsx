import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ReactIcon, NextjsIcon, VueIcon, NodejsIcon, MongoIcon,
  TailwindIcon, TypeScriptIcon, GitIcon, JavaScriptIcon,
  CIcon, CppIcon, OopIcon, GrpcIcon, AngularIcon, RabbitMQIcon,
  NestIcon, JavaIcon, RestApiIcon, WebSocketIcon, GraphQLIcon,
  MysqlIcon, SqlServerIcon, PostgresIcon,
} from "../Icons/SkillIcons";

const brandColors = {
  React: "#61DAFB", "Next.js": "#000000", "Vue.js": "#4FC08D",
  "Node.js": "#5FA04E", MongoDB: "#47A248", Tailwind: "#06B6D4",
  TypeScript: "#3178C6", JavaScript: "#F7DF1E", C: "#A8B9CC",
  "C++": "#00599C", OOP: "#FF6B35", Git: "#F03C2E",
  gRPC: "#4285F4", Angular: "#DD0031", RabbitMQ: "#FF6600",
  Nest: "#E0234E", Java: "#007396", "REST API": "#6BA539",
  WebSocket: "#010101", GraphQL: "#E10098",
  MySQL: "#4479A1", "SQL Server": "#CC2927", PostgreSQL: "#4169E1",
};

const brandIcons = [
  { name: "React", icon: ReactIcon },
  { name: "Next.js", icon: NextjsIcon },
  { name: "Vue.js", icon: VueIcon },
  { name: "Node.js", icon: NodejsIcon },
  { name: "MongoDB", icon: MongoIcon },
  { name: "Tailwind", icon: TailwindIcon },
  { name: "TypeScript", icon: TypeScriptIcon },
  { name: "JavaScript", icon: JavaScriptIcon },
  { name: "C", icon: CIcon },
  { name: "C++", icon: CppIcon },
  { name: "OOP", icon: OopIcon },
  { name: "Git", icon: GitIcon },
  { name: "gRPC", icon: GrpcIcon },
  { name: "Angular", icon: AngularIcon },
  { name: "RabbitMQ", icon: RabbitMQIcon },
  { name: "Nest", icon: NestIcon },
  { name: "Java", icon: JavaIcon },
  { name: "REST API", icon: RestApiIcon },
  { name: "WebSocket", icon: WebSocketIcon },
  { name: "GraphQL", icon: GraphQLIcon },
  { name: "MySQL", icon: MysqlIcon },
  { name: "SQL Server", icon: SqlServerIcon },
  { name: "PostgreSQL", icon: PostgresIcon },
];

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

          {/* Marquee */}
          <div className="w-full overflow-hidden mb-10 py-6 border-y border-[rgba(255,107,53,0.15)]">
            <style>{`
              .footer-marquee-track {
                display: flex;
                gap: 3rem;
                align-items: center;
                width: max-content;
                animation: footerMarquee 45s linear infinite;
              }
              @keyframes footerMarquee {
                from { transform: translateX(0); }
                to { transform: translateX(-50%); }
              }
              .footer-marquee-icon svg { fill: currentColor !important; stroke: currentColor !important; }
              .footer-marquee-icon svg path { fill: currentColor !important; stroke: currentColor !important; }
              .footer-marquee-icon svg circle { fill: currentColor !important; stroke: currentColor !important; }
              .footer-marquee-icon svg rect { fill: currentColor !important; stroke: currentColor !important; }
              .footer-marquee-icon svg ellipse { fill: currentColor !important; stroke: currentColor !important; }
              .footer-marquee-icon svg line { stroke: currentColor !important; }
            `}</style>
            <div className="footer-marquee-track">
              {[...brandIcons, ...brandIcons].map((brand, i) => {
                const Icon = brand.icon;
                const color = brandColors[brand.name];
                return (
                  <div key={i} className="flex items-center gap-2 shrink-0">
                    <span className="footer-marquee-icon" style={{ color }}>
                      <Icon size={24} />
                    </span>
                    <span className="text-sm whitespace-nowrap font-medium" style={{ color }}>{brand.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
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
