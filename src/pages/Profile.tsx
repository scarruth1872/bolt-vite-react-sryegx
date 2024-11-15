import React from 'react';
import { User, Target, Calendar, Award, Settings } from 'lucide-react';

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center">
            <User className="w-12 h-12 text-indigo-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-gray-600">Fitness Enthusiast</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Target className="h-5 w-5 text-indigo-600" /> Goals
          </h2>
          <div className="space-y-4">
            {goals.map((goal, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                <span>{goal}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Award className="h-5 w-5 text-indigo-600" /> Stats
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded">
                <div className="text-2xl font-bold text-indigo-600">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Calendar className="h-5 w-5 text-indigo-600" /> Recent Activity
        </h2>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <div>
                <div className="font-medium">{activity.name}</div>
                <div className="text-sm text-gray-600">{activity.date}</div>
              </div>
              <span className="text-indigo-600">{activity.duration} min</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Settings className="h-5 w-5 text-indigo-600" /> Preferences
        </h2>
        <div className="space-y-4">
          {preferences.map((pref, index) => (
            <div key={index} className="flex items-center justify-between">
              <span>{pref.label}</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked={pref.enabled} />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const goals = [
  'Build muscle mass',
  'Improve cardiovascular endurance',
  'Maintain flexibility',
  'Reduce body fat percentage'
];

const stats = [
  { label: 'Workouts', value: '24' },
  { label: 'Hours', value: '32' },
  { label: 'Calories', value: '12.4k' },
  { label: 'Streak', value: '7' }
];

const activities = [
  { name: 'Full Body Workout', date: '2 hours ago', duration: 45 },
  { name: 'Morning Run', date: 'Yesterday', duration: 30 },
  { name: 'Yoga Session', date: '2 days ago', duration: 60 }
];

const preferences = [
  { label: 'Email Notifications', enabled: true },
  { label: 'Workout Reminders', enabled: true },
  { label: 'Progress Updates', enabled: false },
  { label: 'Public Profile', enabled: false }
];

export default Profile;