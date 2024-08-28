// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import AIWorkout from './components/AIWorkout';
import Header from './components/Header';
import Footer from './components/Footer';
import ExercisesPage from "./components/Exercises";
import './index.css'; 


/**
 * App Component
 *
 * This is the main component of the application.
 * It sets up the React Router for navigation between different pages of the app.
 */

function App() {
    return (
        <Router>
            <Routes>
                 {/* Routes component holds all the Route pages */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/ai-workout" element={<AIWorkout />} />
                <Route path="/exercises" element={<ExercisesPage />} />
            </Routes>
        </Router>
    );
}

export default App;
