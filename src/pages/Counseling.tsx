import React, { useState } from 'react';
import { Calendar, MessageCircle, Video, Clock, Search, Book, Filter } from 'lucide-react';

const Counseling = () => {
  const [activeTab, setActiveTab] = useState('counselors');

  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Fitness Counseling</h1>
        <p className="text-gray-600 mt-2">Get personalized guidance from certified fitness experts</p>
      </header>

      <div className="flex space-x-4 border-b">
        <TabButton 
          active={activeTab === 'counselors'} 
          onClick={() => setActiveTab('counselors')}
        >
          Counselors
        </TabButton>
        <TabButton 
          active={activeTab === 'knowledge'} 
          onClick={() => setActiveTab('knowledge')}
        >
          Knowledge Base
        </TabButton>
        <TabButton 
          active={activeTab === 'training'} 
          onClick={() => setActiveTab('training')}
        >
          Personal Training
        </TabButton>
      </div>

      {activeTab === 'counselors' && (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {counselors.map((counselor) => (
              <CounselorCard key={counselor.id} {...counselor} />
            ))}
          </div>

          <div className="bg-indigo-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Step
                icon={<Calendar className="h-8 w-8 text-indigo-600" />}
                title="Book a Session"
                description="Choose your preferred counselor and schedule a time that works for you"
              />
              <Step
                icon={<Video className="h-8 w-8 text-indigo-600" />}
                title="Meet Online"
                description="Connect with your counselor via video call or chat"
              />
              <Step
                icon={<MessageCircle className="h-8 w-8 text-indigo-600" />}
                title="Get Guidance"
                description="Receive personalized advice and create an action plan"
              />
            </div>
          </div>
        </>
      )}

      {activeTab === 'knowledge' && (
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search knowledge base..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
              <Filter className="h-5 w-5" /> Filter
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {knowledgeBase.map((article) => (
              <KnowledgeCard key={article.id} {...article} />
            ))}
          </div>
        </div>
      )}

      {activeTab === 'training' && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingPackages.map((pkg) => (
              <TrainingPackageCard key={pkg.id} {...pkg} />
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Upcoming Training Sessions</h2>
            <div className="space-y-4">
              {trainingSessions.map((session) => (
                <SessionCard key={session.id} {...session} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const TabButton = ({ children, active, onClick }: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    className={`px-4 py-2 font-medium ${
      active
        ? 'text-indigo-600 border-b-2 border-indigo-600'
        : 'text-gray-500 hover:text-gray-700'
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

const CounselorCard = ({ name, specialty, image, availability }: {
  name: string;
  specialty: string;
  image: string;
  availability: string;
}) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-gray-600">{specialty}</p>
      <div className="flex items-center mt-4 text-sm text-gray-500">
        <Clock className="h-4 w-4 mr-1" />
        <span>{availability}</span>
      </div>
      <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition-colors">
        Book Session
      </button>
    </div>
  </div>
);

const KnowledgeCard = ({ title, category, description }: {
  title: string;
  category: string;
  description: string;
}) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex items-center gap-2 mb-2">
      <Book className="h-5 w-5 text-indigo-600" />
      <span className="text-sm text-indigo-600">{category}</span>
    </div>
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
    <button className="mt-4 text-indigo-600 font-medium hover:text-indigo-700">
      Read More →
    </button>
  </div>
);

const TrainingPackageCard = ({ name, price, features, duration }: {
  name: string;
  price: string;
  features: string[];
  duration: string;
}) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-xl font-bold mb-2">{name}</h3>
    <div className="text-2xl font-bold text-indigo-600 mb-4">{price}</div>
    <p className="text-gray-600 mb-4">{duration}</p>
    <ul className="space-y-2 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
          {feature}
        </li>
      ))}
    </ul>
    <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition-colors">
      Book Package
    </button>
  </div>
);

const SessionCard = ({ trainer, date, time, type }: {
  trainer: string;
  date: string;
  time: string;
  type: string;
}) => (
  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
    <div>
      <h4 className="font-medium">{type}</h4>
      <p className="text-sm text-gray-600">with {trainer}</p>
    </div>
    <div className="text-right">
      <p className="font-medium">{date}</p>
      <p className="text-sm text-gray-600">{time}</p>
    </div>
  </div>
);

const Step = ({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="text-center space-y-2">
    <div className="flex justify-center">{icon}</div>
    <h3 className="font-semibold">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const counselors = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialty: 'Sports Nutrition',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    availability: 'Available next week'
  },
  {
    id: '2',
    name: 'Mike Thompson',
    specialty: 'Strength Training',
    image: 'https://images.unsplash.com/photo-1612957824445-f0c090df8d89?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    availability: 'Available tomorrow'
  },
  {
    id: '3',
    name: 'Lisa Chen',
    specialty: 'Wellness Coach',
    image: 'https://images.unsplash.com/photo-1599256621730-535171e28e50?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    availability: 'Available today'
  }
];

const knowledgeBase = [
  {
    id: '1',
    title: 'Understanding Macronutrients',
    category: 'Nutrition',
    description: 'A comprehensive guide to proteins, carbohydrates, and fats in your diet.'
  },
  {
    id: '2',
    title: 'Progressive Overload',
    category: 'Training',
    description: 'Learn how to properly implement progressive overload in your training routine.'
  },
  {
    id: '3',
    title: 'Recovery Techniques',
    category: 'Wellness',
    description: 'Essential recovery methods to prevent injury and improve performance.'
  },
  {
    id: '4',
    title: 'Stress Management',
    category: 'Mental Health',
    description: 'Effective strategies for managing stress through exercise and mindfulness.'
  }
];

const trainingPackages = [
  {
    id: '1',
    name: 'Starter Package',
    price: '$199',
    duration: '1 Month',
    features: [
      '2 sessions per week',
      'Personalized workout plan',
      'Nutrition guidance',
      'Progress tracking'
    ]
  },
  {
    id: '2',
    name: 'Premium Package',
    price: '$299',
    duration: '1 Month',
    features: [
      '3 sessions per week',
      'Advanced workout plans',
      'Nutrition consultation',
      '24/7 support',
      'Video analysis'
    ]
  },
  {
    id: '3',
    name: 'Elite Package',
    price: '$499',
    duration: '1 Month',
    features: [
      'Unlimited sessions',
      'Custom meal plans',
      'Priority scheduling',
      'Monthly assessments',
      'Recovery sessions'
    ]
  }
];

const trainingSessions = [
  {
    id: '1',
    trainer: 'Mike Thompson',
    date: 'Today',
    time: '10:00 AM',
    type: 'Strength Training'
  },
  {
    id: '2',
    trainer: 'Lisa Chen',
    date: 'Tomorrow',
    time: '2:00 PM',
    type: 'HIIT Session'
  }
];

export default Counseling;