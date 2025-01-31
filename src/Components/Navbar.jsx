import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24 w-[100%]">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="font-bold text-2xl hidden md:inline">Saad Malik</div>
        <div className="space-x-6">
          <a href="#Home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About Me
          </a>
          <a href="#services" className="hover:text-gray-400">
            Services
          </a>
          <a href="#projects" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline  transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-md ">
          Connect Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
