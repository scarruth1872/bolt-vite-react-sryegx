import React from 'react';
import { Calendar, Plus, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';

const Workouts = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">My Workouts</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-indigo-700">
          <Plus className="h-5 w-5" /> New Workout
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} {...workout} />
        ))}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Calendar className="h-5 w-5 text-indigo-600" /> Upcoming Schedule
        </h2>
        <div className="space-y-4">
          {schedule.map((item) => (
            <ScheduleItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const WorkoutCard = ({ name, exercises, duration, difficulty }: {
  name: string;
  exercises: number;
  duration: number;
  difficulty: string;
}) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-semibold mb-2">{name}</h3>
    <div className="space-y-2 text-gray-600">
      <p>{exercises} exercises</p>
      <p>{duration} minutes</p>
      <span className="inline-block px-2 py-1 bg-indigo-100 text-indigo-800 rounded text-sm">
        {difficulty}
      </span>
    </div>
    <button className="mt-4 text-indigo-600 font-medium flex items-center gap-1 hover:text-indigo-700">
      Start Workout <ChevronRight className="h-4 w-4" />
    </button>
  </div>
);

const ScheduleItem = ({ time, workout }: { time: string; workout: string }) => (
  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
    <div className="flex items-center gap-3">
      <span className="text-gray-600">{time}</span>
      <span className="font-medium">{workout}</span>
    </div>
    <button className="text-indigo-600 hover:text-indigo-700">
      <ChevronRight className="h-5 w-5" />
    </button>
  </div>
);

const workouts = [
  {
    id: '1',
    name: 'Full Body Strength',
    exercises: 8,
    duration: 45,
    difficulty: 'Intermediate'
  },
  {
    id: '2',
    name: 'HIIT Cardio',
    exercises: 6,
    duration: 30,
    difficulty: 'Advanced'
  },
  {
    id: '3',
    name: 'Core Focus',
    exercises: 5,
    duration: 20,
    difficulty: 'Beginner'
  }
];

const schedule = [
  {
    id: '1',
    time: format(new Date().setHours(9, 0), 'h:mm a'),
    workout: 'Morning Yoga'
  },
  {
    id: '2',
    time: format(new Date().setHours(17, 30), 'h:mm a'),
    workout: 'Evening HIIT'
  }
];

export default Workouts;