import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DATA } from "../data/resume"

// Placeholder icons with brand colors
const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
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

const AboutIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
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

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const LinkedInIcon = () => (
    <FontAwesomeIcon icon={faLinkedin} size="xl" style={{color: "#8accff"}}  />
);

import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

const TwitterIcon = () => (
    <FontAwesomeIcon icon={faXTwitter} size="xl" style={{color: "#ffffff",}} />
);

import { faGithub } from "@fortawesome/free-brands-svg-icons";

const GitHubIcon = () => (
  <FontAwesomeIcon icon={faGithub} size="xl" style={{color: "#ffffff",}} />
);

const BlogIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="#FF5722" // Blog brand color (example: orange)
    viewBox="0 0 24 24"
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

function NavItem({ to, icon, active }: NavItemProps) {
  return (
    <Link
      to={to}
      className={`flex flex-col items-center p-2 mx-1 rounded-lg transition-all duration-300 ${
        active
          ? "bg-gray-700 text-white shadow-lg"
          : "hover:bg-gray-600 text-gray-300 hover:text-white"
      }`}
    >
      {icon}
    
    </Link>
  );
}

function Navbar() {
  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2  max-w-2xl md:top-4 md:bottom-auto md:left-1/2">
      <div className="flex  bg-gray-800 rounded-xl shadow-2xl">
        <NavItem to="/" icon={<HomeIcon />} label="Home" active />
       
        <NavItem
          to={DATA.link.linkedin}
          icon={<LinkedInIcon />}
          label="LinkedIn"
        />
        <NavItem
          to={DATA.link.leetcode}
          icon={<TwitterIcon />}
          label="LeetCode"
        />
        <NavItem to={DATA.link.github} icon={<GitHubIcon />} label="GitHub" />
        <NavItem to="/blog" icon={<BlogIcon />} label="Blog" />
         <NavItem to="/about" icon={<AboutIcon />} label="About" />
      </div>
    </nav>
  );
}

export default Navbar;