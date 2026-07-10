import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, Info } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-md bg-white/20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        <Link to="/" className="flex items-center space-x-2">
          <HeartPulse className="h-6 w-6 text-rose-600 animate-pulse" />
          <span className="text-2xl font-bold tracking-tight text-gray-900 font-sansation">
            MedHelp <span className="text-rose-600">AI</span>
          </span>
        </Link>

        <div className="flex items-center space-x-4">
          <Link
            to="/about"
            className="flex items-center space-x-1.5 px-4 py-2 text-sm bg-rose-500 text-white font-medium text-gray-600 hover:text-rose-600 hover:bg-rose-100 rounded-lg transition-all duration-200"
          >
            <Info size={16} />
            <span>About</span>
          </Link>
          
        </div>

      </div>
    </nav>
  );
}