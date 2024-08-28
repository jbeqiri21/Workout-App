/**
 * LandingPage.jsx
 * 
 * This file defines the landing page component for the web application.
 * The landing page is the first page users see when they visit the website.
 * It contains an introductory message, a "Get Started" button that opens a survey modal,
 * and a "Learn More" button that scrolls to a section with additional information.
 * The design includes a full-screen background video, a navigation header, and a 
 * dynamic survey modal that collects information to generate a personalized workout plan.
 */
import React, { useState } from 'react'; // Import React and the useState hook
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import { ChevronDownIcon } from '@heroicons/react/24/outline'; // Import an icon from Heroicons v2
import Header from './Header'; // Import the Header component
import SurveyModal from './SurveyModal'; // Import the SurveyModal component
import Footer from './Footer';


/**
 * LandingPage component
 *
 * This component renders the main landing page of the website.
 * It includes a full-screen background video, a header, a central message,
 * buttons for user interaction, and an informational section.
 * The "Get Started" button opens a survey modal that collects user data.
 */
const LandingPage = () => {
    // State to manage the visibility of the survey modal
    const [isSurveyOpen, setSurveyOpen] = useState(false);

    /**
     * openSurvey function
     *
     * This function sets the isSurveyOpen state to true, which triggers the display of the survey modal.
     */
    const openSurvey = () => setSurveyOpen(true);

    /**
     * closeSurvey function
     *
     * This function sets the isSurveyOpen state to false, which closes the survey modal.
     */
    const closeSurvey = () => setSurveyOpen(false);

    /**
     * scrollToSection function
     *
     * This function scrolls the page smoothly to the "more-info" section when the "Learn More" button is clicked.
     */
    const scrollToSection = () => {
        document.getElementById('more-info').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            {/**
             * Main container for the landing page with a background video
             * The background video provides a visually appealing introduction to the website.
             */}
            <div className="relative h-screen flex flex-col justify-between overflow-hidden">
                {/**
                 * Background video with a blur effect
                 * The video is set to auto-play, loop, and mute to create a dynamic background without sound.
                 * The filter property applies a blur effect, and zIndex ensures the video stays in the background.
                 */}
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute w-full h-full object-cover"
                    style={{ filter: 'blur(8px)', zIndex: '-1' }}
                >
                    <source src="/gym.mp4" type="video/mp4" />
                </video>

                {/* Header component for site navigation */}
                <Header />

                {/**
                 * Central content with a main heading and a "Get Started" button
                 * The "Get Started" button triggers the openSurvey function to open the survey modal.
                 */}
                <div className="flex flex-col items-center justify-center flex-grow text-center">
                    <h1 className="text-5xl font-bold text-white mb-4">Achieve Your Fitness Goals</h1>
                    <p className="text-xl text-white mb-8">Get personalized workout plans tailored to your needs.</p>
                    <button
                        onClick={openSurvey} // Open the survey modal when clicked
                        className="bg-gray-800 bg-opacity-30 text-white font-semibold py-2 px-4 rounded shadow hover:bg-opacity-50 transition duration-300"
                    >
                        Get Started
                    </button>
                </div>

                {/**
                 * Button to scroll down to the "more-info" section
                 * When clicked, the page smoothly scrolls down to display additional information.
                 */}
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

            {/**
             * "More Information" section
             * This section provides additional details about the website's features, displayed as interactive cards.
             * The backdrop-blur-lg class adds a blur effect behind the content for a modern, layered look.
             */}
            <div id="more-info" className="min-h-screen bg-gradient-to-b from-black via-gray-800 to-gray-900 flex flex-col items-center justify-center text-white backdrop-blur-lg">
                <h2 className="text-4xl font-bold mb-8">Learn More About Our Features</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {/**
                     * First card - "Explore"
                     * Introduces users to the website's comprehensive workout options.
                     */}
                    <Link to="/explore" className="max-w-xs bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl">
                        <img className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-90" src="https://via.placeholder.com/150" alt="Explore" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2 text-white">Explore</h3>
                            <p className="text-gray-300">Explore our comprehensive list of workouts.</p>
                        </div>
                    </Link>

                    {/**
                     * Second card - "Create Your Plan"
                     * Encourages users to create a personalized workout plan through the survey.
                     */}
                    <Link to="/create-plan" className="max-w-xs bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl">
                        <img className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-90" src="https://via.placeholder.com/150" alt="Create Plan" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2 text-white">Create Your Plan</h3>
                            <p className="text-gray-300">Take a short survey to get an AI-generated workout plan tailored to your specific needs.</p>
                        </div>
                    </Link>

                    {/**
                     * Third card - "Join the Community"
                     * Highlights the social aspect of the website, encouraging users to connect with others.
                     */}
                    <Link to="/community" className="max-w-xs bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl">
                        <img className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-90" src="https://via.placeholder.com/150" alt="Join the Community" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2 text-white">Join the Community</h3>
                            <p className="text-gray-300">Connect with others, share workouts, and stay motivated.</p>
                        </div>
                    </Link>
                </div>
            </div>

            {/**
             * SurveyModal component
             * The modal is rendered here and controlled by the isSurveyOpen state.
             * The closeModal function is passed as a prop to close the modal when needed.
             */}
            <SurveyModal isOpen={isSurveyOpen} closeModal={closeSurvey} />

            {/* Footer component */}
            <Footer />
        </>
    );
};

export default LandingPage;
