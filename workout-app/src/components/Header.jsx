import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo or Brand Name */}
        <div className="text-2xl font-bold">
          <a href="/" className="text-white hover:text-gray-400">Fitness Buddy</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6 text-white" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Navbar Links */}
        <nav className={`lg:flex lg:items-center lg:space-x-8 ${menuOpen ? 'block' : 'hidden'} absolute lg:relative top-full left-0 w-full lg:w-auto lg:bg-transparent bg-gray-800 lg:border-none border-t border-gray-700 lg:rounded-none rounded-lg transition-all duration-300 ease-in-out`}>
          <a href="/" className="block text-white hover:text-gray-400 py-2 px-4 rounded-lg border-2 border-transparent hover:border-white transition-all duration-300">Home</a>
          <a href="/exercises" className="block text-white hover:text-gray-400 py-2 px-4 rounded-lg border-2 border-transparent hover:border-white transition-all duration-300">Exercises</a>
          <a href="/about" className="block text-white hover:text-gray-400 py-2 px-4 rounded-lg border-2 border-transparent hover:border-white transition-all duration-300">About</a>

          {/* Dropdown */}
          <div className="relative">
            <button onClick={toggleDropdown} className="block text-white hover:text-gray-400 py-2 px-4 rounded-lg border-2 border-transparent hover:border-white transition-all duration-300">
              Services
              <span className="ml-2">▼</span>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-700 rounded-lg shadow-lg border border-gray-600">
                <a href="/service1" className="block text-white hover:bg-gray-600 py-2 px-4 rounded-t-lg">Service 1</a>
                <a href="/service2" className="block text-white hover:bg-gray-600 py-2 px-4">Service 2</a>
                <a href="/service3" className="block text-white hover:bg-gray-600 py-2 px-4 rounded-b-lg">Service 3</a>
              </div>
            )}
          </div>

          <a href="/login" className="block text-white hover:text-gray-400 py-2 px-4 rounded-lg border-2 border-transparent hover:border-white transition-all duration-300">Login</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

