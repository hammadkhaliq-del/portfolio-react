import { Calendar, Github, Linkedin, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';  
import { getTheme, subscribe } from '../themeStore';
import profilePicture from '../assets/pfp.jpg'


function Hero() {
  const [isDarkMode, setIsDarkMode] = useState(getTheme());

  // Subscribe to theme changes
  useEffect(() => {
    const unsubscribe = subscribe((darkMode) => {
      setIsDarkMode(darkMode);
    });
    
    return unsubscribe;
  }, []);

  return (
    <section className={`w-full ${isDarkMode ? 'bg-gradient-to-br from-gray-900 to-indigo-900 text-white' : 'bg-gradient-to-br from-indigo-50 to-purple-50'} px-5 py-20`}>
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Picture */}
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto rounded-full border-4 border-indigo-500 overflow-hidden shadow-xl bg-white">
            <img 
              src= {profilePicture} 
              alt="Profile"
              className="w-full h-full object-contain scale-110"
            />
          </div>

        </div>
        
        {/* Name and Title */}
        <h1 className={`text-4xl md:text-5xl font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
          Hammad Khaliq
        </h1>
        <h2 className="text-xl md:text-2xl text-purple-600 font-medium mb-6">
          Web Developer
        </h2>
        
        {/* Location and Timezone */}
        <div className={`flex items-center justify-center space-x-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>Rawalpindi, Pakistan</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>PKT (UTC +5)</span>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="mb-8">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center space-x-2 shadow-lg hover:shadow-xl">
            <Calendar className="w-5 h-5" />
            <Link
              to="/contact"
              className='cursor-pointer'
            >Schedule a Call</Link>
          </button>
        </div>
        
        {/* Quick Access Icons */}
        <div className="flex items-center justify-center space-x-4">
          <a 
            href="https://github.com/hammadkhaliq-del" 
            className={`p-3 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white'} rounded-full shadow-md hover:shadow-lg transition-shadow ${isDarkMode ? 'text-white' : 'text-gray-700'} hover:text-indigo-600`}
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/hammad-khaliq-ba867b326/" 
            className={`p-3 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white'} rounded-full shadow-md hover:shadow-lg transition-shadow ${isDarkMode ? 'text-white' : 'text-gray-700'} hover:text-indigo-600`}
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="mailto:hammadkhaliq987@gmail.com" 
            className={`p-3 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white'} rounded-full shadow-md hover:shadow-lg transition-shadow ${isDarkMode ? 'text-white' : 'text-gray-700'} hover:text-indigo-600`}
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;