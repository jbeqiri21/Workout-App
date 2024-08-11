import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Header from './Header';


const LandingPage = () => {

    const scrollToSection = () => {
        document.getElementById('more-info').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div className="relative h-screen flex flex-col justify-between overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute w-full h-full object-cover"
                    style={{ filter: 'blur(8px)', zIndex: '-1' }}
                >
                    <source src="/gym.mp4" type="video/mp4" />
                </video>

                <Header />

                <div className="flex flex-col items-center justify-center flex-grow text-center">
                    <h1 className="text-5xl font-bold text-white mb-4">Achieve Your Fitness Goals</h1>
                    <p className="text-xl text-white mb-8">Get personalized workout plans tailored to your needs.</p>
                    <Link to="/ai-workout" className="bg-gray-800 bg-opacity-30 text-white font-semibold py-2 px-4 rounded shadow hover:bg-opacity-50 transition duration-300">Get Started</Link>
                </div>
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
            <div id="more-info" className="min-h-screen bg-white flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold mb-8">More Information About This Website</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
                        <img className="w-full h-48 object-cover" src="https://via.placeholder.com/150" alt="Card 1" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">Card 1</h3>
                            <p className="text-gray-700">Description for card 1. This is a brief description.</p>
                        </div>
                    </div>
                    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
                        <img className="w-full h-48 object-cover" src="https://via.placeholder.com/150" alt="Card 2" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">Card 2</h3>
                            <p className="text-gray-700">Description for card 2. This is a brief description.</p>
                        </div>
                    </div>
                    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
                        <img className="w-full h-48 object-cover" src="https://via.placeholder.com/150" alt="Card 3" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">Card 3</h3>
                            <p className="text-gray-700">Description for card 3. This is a brief description.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;
