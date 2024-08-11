import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/24/outline'; // Importing an icon from Heroicons v2

// LandingPage component definition
const LandingPage = () => {
    // State to track the visibility of the dropdown menu
    const [menuOpen, setMenuOpen] = useState(false);

    // Function to toggle the dropdown menu visibility
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Function to scroll smoothly to the "more-info" section
    const scrollToSection = () => {
        document.getElementById('more-info').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            {/* Main container for the landing page with a background video */}
            <div className="relative h-screen flex flex-col justify-between overflow-hidden rounded-bottom" >
            
    <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
        style={{
            filter: 'blur(8px)',
            zIndex: '-1',
            transform: 'scale(1.1)',  // Scale the video to cover the edges
            borderBottomLeftRadius: '16px',  // Customize this value
            borderBottomRightRadius: '16px'  // Customize this value
        }}
    >
        <source src="/gym.mp4" type="video/mp4" />
    </video>

                {/* Navigation bar with a menu button */}
                <nav className="w-full p-4 flex justify-end pr-8">
                    <div className="relative inline-block text-left">
                        <button 
                            onClick={toggleMenu} 
                            className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-opacity-30 bg-gray-800 text-white text-sm font-medium hover:bg-opacity-50 focus:outline-none"
                        >
                            Menu
                            {/* SVG icon for the dropdown menu */}
                            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                        {/* Dropdown menu options */}
                        {menuOpen && (
                            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 bg-opacity-90 ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                                <div className="py-1">
                                    <Link to="/" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Home</Link>
                                    <Link to="/about" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">About</Link>
                                    <Link to="/login" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Login</Link>
                                    <Link to="/register" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Register</Link>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>

                {/* Main content: Headline and Call-to-Action button */}
                <div className="flex flex-col items-center justify-center flex-grow text-center">
                    <h1 className="text-5xl font-bold text-white mb-4">Achieve Your Fitness Goals</h1>
                    <p className="text-xl text-white mb-8">Get personalized workout plans tailored to your needs.</p>
                    <Link to="/ai-workout" className="bg-gray-800 bg-opacity-30 text-white font-semibold py-2 px-4 rounded shadow hover:bg-opacity-50 transition duration-300">Get Started</Link>
                </div>

                {/* Button to scroll down to the next section */}
                <div className="w-full flex justify-center mb-4">
                    <button 
                        onClick={scrollToSection}
                        className="flex items-center bg-gray-800 bg-opacity-30 text-white font-semibold py-2 px-4 rounded shadow hover:bg-opacity-50 transition duration-300"
                    >
                        <span>Learn More</span>
                        <ChevronDownIcon className="h-5 w-5 ml-2" />
                    </button>
                </div>
            </div>

            {/* "More Information" section with three informational cards */}
            <div id="more-info" className="min-h-screen bg-gradient-to-b from-black via-gray-800 to-gray-900 flex flex-col items-center justify-center text-white backdrop-blur-lg">


                <h2 className="text-4xl font-bold mb-8">Learn More About Our Features</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    <div className="max-w-xs bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl">
                        <img className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-90" src="https://via.placeholder.com/150" alt="Card 1" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2 text-white">Personalized Plans</h3>
                            <p className="text-gray-300">Get workout plans tailored to your individual goals.</p>
                        </div>
                    </div>
                    <div className="max-w-xs bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl">
                        <img className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-90" src="https://via.placeholder.com/150" alt="Card 2" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2 text-white">Track Your Progress</h3>
                            <p className="text-gray-300">Monitor your improvements with detailed progress tracking.</p>
                        </div>
                    </div>
                    <div className="max-w-xs bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl">
                        <img className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-90" src="https://via.placeholder.com/150" alt="Card 3" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2 text-white">Join the Community</h3>
                            <p className="text-gray-300">Connect with others, share workouts, and stay motivated.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;






