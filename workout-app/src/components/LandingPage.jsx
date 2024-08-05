import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="relative min-h-screen overflow-hidden">
            <video
                autoPlay
                loop
                muted
                className="absolute w-full h-full object-cover"
                style={{ filter: 'blur(8px)', zIndex: '-1' }}
            >
                <source src="/gym.mp4" type="video/mp4" />
            </video>
            <nav className="w-full p-4 flex justify-end">
                <div className="relative inline-block text-left">
                    <button 
                        onClick={toggleMenu} 
                        className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-opacity-30 bg-gray-800 text-white text-sm font-medium hover:bg-opacity-50 focus:outline-none"
                    >
                        Menu
                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                    {menuOpen && (
                        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 bg-opacity-90 ring-1 ring-black ring-opacity-5 focus:outline-none">
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
            <div className="flex flex-col items-center justify-center min-h-screen text-center">
                <h1 className="text-5xl font-bold text-white mb-4 font-sans">Achieve Your Fitness Goals</h1>
                <p className="text-xl text-white mb-8">Get personalized workout plans tailored to your needs.</p>
                <Link to="/ai-workout" className="bg-gray-800 bg-opacity-30 text-white font-semibold py-2 px-4 rounded shadow hover:bg-opacity-50 transition duration-300">Get Started</Link>
            </div>
        </div>
    );
};

export default LandingPage;



