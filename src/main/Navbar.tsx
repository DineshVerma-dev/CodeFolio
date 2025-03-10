import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DATA } from "../data/resume";
import { faLinkedin, faXTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

// Responsive icon components
const HomeIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-5 w-5 md:h-6 md:w-6 ${className}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);

const AboutIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-5 w-5 md:h-6 md:w-6 ${className}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const BlogIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-5 w-5 md:h-6 md:w-6 ${className}`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    />
  </svg>
);

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

function NavItem({ to, icon, label, active }: NavItemProps) {
  return (
    <Link
      to={to}
      className={`group relative flex flex-col items-center p-2 md:p-3 mx-1 rounded-xl transition-all duration-300 ${
        active 
          ? "bg-gradient-to-b from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/50"
          : "hover:bg-gradient-to-b from-gray-700 to-gray-800 text-gray-300 hover:text-white hover:shadow-lg hover:shadow-blue-500/30"
      }`}
    >
      <div className="transform transition-all duration-300 group-hover:-translate-y-1 md:group-hover:-translate-y-2">
        {icon}
      </div>
      <span className={`absolute -bottom-2 text-[0.6rem] md:text-xs font-medium ${
        active ? 'text-blue-200' : 'text-gray-300'
      } opacity-100 md:opacity-0 group-hover:md:opacity-100 transition-opacity duration-300`}>
        {label}
      </span>
      {active && (
        <div className="absolute -bottom-1 md:-bottom-2 w-1 h-1 bg-blue-300 rounded-full animate-ping"></div>
      )}
    </Link>
  );
}

function Navbar() {
  return (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-2xl md:top-4 md:bottom-auto pb-safe md:pb-0">
      <div className="flex bg-gray-800/80 backdrop-blur-sm rounded-none md:rounded-xl shadow-2xl p-1 md:p-1.5 mx-4 md:mx-auto justify-between md:justify-center">
        <NavItem 
          to="/" 
          icon={<HomeIcon className="group-hover:stroke-[1.5] transition-all" />} 
          label="Home" 
          active 
        />
        <NavItem
          to={DATA.link.linkedin}
          icon={<FontAwesomeIcon icon={faLinkedin} className="text-lg md:text-xl" />}
          label="LinkedIn"
        />
        <NavItem
          to={DATA.link.leetcode}
          icon={<FontAwesomeIcon icon={faXTwitter} className="text-lg md:text-xl" />}
          label="Twitter"
        />
        <NavItem 
          to={DATA.link.github} 
          icon={<FontAwesomeIcon icon={faGithub} className="text-lg md:text-xl" />} 
          label="GitHub" 
        />
        <NavItem 
          to="/blog" 
          icon={<BlogIcon className="group-hover:stroke-[1.5] transition-all" />} 
          label="Blog" 
        />
        <NavItem 
          to="/about" 
          icon={<AboutIcon className="group-hover:stroke-[1.5] transition-all" />} 
          label="About" 
        />
      </div>
    </nav>
  );
}

export default Navbar;