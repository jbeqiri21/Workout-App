import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const ExercisesPage = () => {
  const [exercises, setExercises] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExercise, setSelectedExercise] = useState(null);

  // Fetch exercises from the database
  useEffect(() => {
    // Replace this with the actual API call or database query
    fetch('/api/exercises')
      .then((response) => response.json())
      .then((data) => setExercises(data))
      .catch((error) => console.error('Error fetching exercises:', error));
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCardClick = (exercise) => {
    setSelectedExercise(exercise);
  };

  // Filter exercises based on the search term
  const filteredExercises = exercises.filter((exercise) =>
    exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Exercises</h1>
        <input
          type="text"
          placeholder="Search for an exercise..."
          className="w-full p-2 border border-gray-300 rounded mb-6"
          value={searchTerm}
          onChange={handleSearch}
        />

        {selectedExercise ? (
          <div>
            <button
              className="mb-4 text-blue-500"
              onClick={() => setSelectedExercise(null)}
            >
              Back to Exercises
            </button>
            <h2 className="text-2xl font-bold mb-2">{selectedExercise.name}</h2>
            <p className="mb-4">{selectedExercise.description}</p>
            <img
              src={selectedExercise.image}
              alt={selectedExercise.name}
              className="mb-4 max-w-full"
            />
            <video
              controls
              src={selectedExercise.video}
              className="max-w-full"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filteredExercises.map((exercise) => (
              <div
                key={exercise.id}
                className="border rounded-lg p-4 shadow-md cursor-pointer"
                onClick={() => handleCardClick(exercise)}
              >
                <h3 className="text-xl font-bold mb-2">{exercise.name}</h3>
                <img
                  src={exercise.image}
                  alt={exercise.name}
                  className="mb-2 max-w-full h-48 object-cover rounded"
                />
                <p>{exercise.shortDescription}</p>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ExercisesPage;
