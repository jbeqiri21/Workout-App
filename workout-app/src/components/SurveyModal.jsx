/**
 * SurveyModal.jsx
 * 
 * This file defines a modal component that presents users with a multi-step survey.
 * The purpose of this survey is to gather information from users so that a personalized workout plan 
 * can be generated based on their fitness goals, training preferences, weight, and BMI range.
 * The modal includes "Next" and "Previous" buttons to navigate through the survey steps,
 * and a "Submit" button to submit the survey at the end.
 */

import React, { useState } from 'react'; // Import React and the useState hook

/**
 * SurveyModal component
 * 
 * @param {boolean} isOpen - Controls whether the modal is visible or not.
 * @param {function} closeModal - Function to close the modal.
 * 
 * The SurveyModal component is responsible for rendering the survey inside a modal dialog.
 * It includes three steps, each asking the user different questions about their fitness preferences.
 * The component uses React's useState hook to manage the current step of the survey.
 */
const SurveyModal = ({ isOpen, closeModal }) => {
    // State to keep track of the current step in the survey
    const [currentStep, setCurrentStep] = useState(1);

    // Define the total number of steps in the survey
    const totalSteps = 3;

    /**
     * handleNext function
     * 
     * This function increments the current step by 1 when the "Next" button is clicked,
     * as long as the current step is less than the total number of steps.
     */
    const handleNext = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    /**
     * handlePrevious function
     * 
     * This function decrements the current step by 1 when the "Previous" button is clicked,
     * as long as the current step is greater than 1.
     */
    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        /**
         * Conditional rendering
         * 
         * The modal will only be rendered if the `isOpen` prop is true. This means that
         * the modal will appear on the screen only when the user triggers it, such as by clicking a button.
         */
        isOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
                {/* Modal container with background and padding */}
                <div className="bg-gray-900 text-white p-6 rounded-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-4">Personalized Workout Survey</h2>

                    {/* Step 1: Ask about fitness goals and training frequency */}
                    {currentStep === 1 && (
                        <div>
                            <label className="block mb-2">What's your fitness goal?</label>
                            <select className="w-full mb-4 p-2 rounded bg-gray-800">
                                <option>Lose Weight</option>
                                <option>Build Muscle</option>
                                <option>Improve Endurance</option>
                            </select>
                            <label className="block mb-2">How many days per week can you train?</label>
                            <input type="number" className="w-full mb-4 p-2 rounded bg-gray-800" />
                        </div>
                    )}

                    {/* Step 2: Ask about preferred training style and current weight */}
                    {currentStep === 2 && (
                        <div>
                            <label className="block mb-2">Preferred training style?</label>
                            <select className="w-full mb-4 p-2 rounded bg-gray-800">
                                <option>Weight Lifting</option>
                                <option>Cardio</option>
                                <option>HIIT</option>
                            </select>
                            <label className="block mb-2">Current Weight (kg)</label>
                            <input type="number" className="w-full mb-4 p-2 rounded bg-gray-800" />
                        </div>
                    )}

                    {/* Step 3: Ask about BMI range and specific goals */}
                    {currentStep === 3 && (
                        <div>
                            <label className="block mb-2">BMI Range</label>
                            <select className="w-full mb-4 p-2 rounded bg-gray-800">
                                <option>Under 18.5 (Underweight)</option>
                                <option>18.5 - 24.9 (Normal)</option>
                                <option>25 - 29.9 (Overweight)</option>
                                <option>30 and above (Obese)</option>
                            </select>
                            <label className="block mb-2">Any specific goals?</label>
                            <select className="w-full mb-4 p-2 rounded bg-gray-800">
                                <option>Increase Strength</option>
                                <option>Increase Flexibility</option>
                                <option>Improve Stamina</option>
                            </select>
                        </div>
                    )}

                    {/* Navigation buttons: Previous, Next, and Submit */}
                    <div className="flex justify-between">
                        {/* Cancel button to close the modal */}
                        <button
                            onClick={closeModal}
                            className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
                        >
                            Cancel
                        </button>
                        <div>
                            {/* Previous button, only shown if not on the first step */}
                            {currentStep > 1 && (
                                <button
                                    onClick={handlePrevious}
                                    className="px-4 py-2 bg-gray-700 rounded hover:bg-blue-900 mr-2"
                                >
                                    Previous
                                </button>
                            )}
                            {/* Next button for all steps except the last one */}
                            {currentStep < totalSteps ? (
                                <button
                                    onClick={handleNext}
                                    className="px-4 py-2 bg-gray-700 rounded bg-blue-900"
                                >
                                    Next
                                </button>
                            ) : (
                                /* Submit button on the last step */
                                <button
                                    onClick={() => {
                                        // Handle the final submission here
                                        closeModal(); // Close the modal after submission
                                    }}
                                    className="px-4 py-2 bg-blue-900 rounded hover:bg-blue-900"
                                >
                                    Submit
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default SurveyModal;




