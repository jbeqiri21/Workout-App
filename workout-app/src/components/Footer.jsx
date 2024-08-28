import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white shadow-md py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold">About Us</h2>
            <p className="mt-2 text-gray-400 max-w-xs">
              We are a company dedicated to providing the best services and products to our customers, ensuring satisfaction and quality in everything we do.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <a href="#about" className="hover:text-gray-300 mt-4 md:mt-0">About Us</a>
            <a href="#privacy" className="hover:text-gray-300 mt-4 md:mt-0">Privacy Policy</a>
            <a href="#terms" className="hover:text-gray-300 mt-4 md:mt-0">Terms of Service</a>
            <a href="#contact" className="hover:text-gray-300 mt-4 md:mt-0">Contact Us</a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500">
          <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


