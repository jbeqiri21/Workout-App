import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/24/outline'; // Importing an icon from Heroicons v2

// LandingPage component definition
const LandingPage = () => {
    

   

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






