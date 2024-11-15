import React from 'react';
import { Search, Filter } from 'lucide-react';

const ExerciseLibrary = () => {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Exercise Library</h1>
        <p className="text-gray-600 mt-2">Discover exercises for every muscle group and fitness level</p>
      </header>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-64 bg-white p-4 rounded-lg shadow">
          <h2 className="font-semibold mb-4 flex items-center gap-2">
            <Filter className="h-5 w-5" /> Filters
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select className="w-full border rounded p-2">
                <option>All Categories</option>
                <option>Strength</option>
                <option>Cardio</option>
                <option>Flexibility</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Difficulty</label>
              <select className="w-full border rounded p-2">
                <option>All Levels</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Equipment</label>
              <select className="w-full border rounded p-2">
                <option>All Equipment</option>
                <option>No Equipment</option>
                <option>Dumbbells</option>
                <option>Resistance Bands</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search exercises..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {exercises.map((exercise) => (
              <ExerciseCard key={exercise.id} {...exercise} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ExerciseCard = ({ name, imageUrl, category, difficulty }: {
  name: string;
  imageUrl: string;
  category: string;
  difficulty: string;
}) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-semibold text-lg">{name}</h3>
      <div className="flex items-center justify-between mt-2">
        <span className="text-sm text-gray-600">{category}</span>
        <span className="text-sm px-2 py-1 bg-indigo-100 text-indigo-800 rounded">
          {difficulty}
        </span>
      </div>
    </div>
  </div>
);

const exercises = [
  {
    id: '1',
    name: 'Push-ups',
    category: 'Strength',
    difficulty: 'Beginner',
    imageUrl: 'https://images.unsplash.com/photo-1598971639058-999f6d0c55c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    name: 'Squats',
    category: 'Strength',
    difficulty: 'Beginner',
    imageUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    name: 'Plank',
    category: 'Core',
    difficulty: 'Intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

export default ExerciseLibrary;