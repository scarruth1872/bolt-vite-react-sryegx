import React from 'react';
import { ArrowRight, Activity, Brain, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-16">
      <header className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-gray-900">
          Transform Your Life with FitnessPro
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your all-in-one platform for personalized workouts, expert guidance, and a supportive community
        </p>
      </header>

      <section className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<Activity className="w-8 h-8 text-indigo-600" />}
          title="Smart Workout Tracking"
          description="Track your progress with intelligent workout plans tailored to your goals"
          link="/workouts"
        />
        <FeatureCard
          icon={<Brain className="w-8 h-8 text-indigo-600" />}
          title="Expert Counseling"
          description="Get personalized advice from certified fitness professionals"
          link="/counseling"
        />
        <FeatureCard
          icon={<Users className="w-8 h-8 text-indigo-600" />}
          title="Community Support"
          description="Join a community of like-minded individuals on their fitness journey"
          link="/profile"
        />
      </section>

      <section className="bg-indigo-50 rounded-2xl p-8 mt-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
          <p className="text-gray-600 mt-2">Stay informed with the latest fitness insights</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArticles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, link }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}) => (
  <Link to={link} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
    <div className="space-y-4">
      {icon}
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="flex items-center text-indigo-600 hover:text-indigo-700">
        Learn more <ArrowRight className="ml-2 w-4 h-4" />
      </div>
    </div>
  </Link>
);

const ArticleCard = ({ image, title, excerpt }: {
  image: string;
  title: string;
  excerpt: string;
}) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{excerpt}</p>
    </div>
  </div>
);

const featuredArticles = [
  {
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "The Science of Muscle Growth",
    excerpt: "Understanding the key principles behind muscle development and growth."
  },
  {
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Nutrition for Performance",
    excerpt: "Learn how to fuel your body for optimal athletic performance."
  },
  {
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Mental Health and Exercise",
    excerpt: "Exploring the powerful connection between physical activity and mental wellbeing."
  }
];

export default Home;