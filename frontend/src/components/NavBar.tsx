import React from "react";
import profilePic from "../assets/profile pic.jpg";

const menuItems = [
  { name: "Home", href: "/portfolio/" },
  { name: "Projects", href: "/portfolio/projects" },
  { name: "About", href: "#about" },
  { name: " ", href: "/portfolio/security" },
];

const NavBar: React.FC = () => {
  return (
    <nav className="bg-sky-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left Section: Logo or Brand */}
          <div className="flex-shrink-0 text-white font-bold text-lg">
            MyPortfolio
          </div>

          {/* Middle: Menu items */}
          <div className="hidden sm:flex sm:items-center sm:space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium rounded-md hover:bg-sky-700 transition"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex items-center">
            <img
              className="w-8 h-8 rounded-full ring-2"
              src={profilePic}
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
