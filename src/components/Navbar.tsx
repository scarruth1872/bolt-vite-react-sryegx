import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, User, BookOpen, Heart, Library, ScrollText } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8" />
            <span className="font-bold text-xl">FitnessPro</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <NavLink to="/workouts" icon={<Heart className="h-5 w-5" />} text="Workouts" />
            <NavLink to="/exercises" icon={<Library className="h-5 w-5" />} text="Exercises" />
            <NavLink to="/counseling" icon={<BookOpen className="h-5 w-5" />} text="Counseling" />
            <NavLink to="/articles" icon={<ScrollText className="h-5 w-5" />} text="Articles" />
            <NavLink to="/profile" icon={<User className="h-5 w-5" />} text="Profile" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) => (
  <Link
    to={to}
    className="flex items-center space-x-1 hover:text-indigo-200 transition-colors duration-200"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default Navbar;