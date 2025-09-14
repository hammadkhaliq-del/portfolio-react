import { useState, useEffect } from 'react';
import { Sun, Moon, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getTheme, toggleTheme, subscribe } from '../themeStore';

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(getTheme());
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  
  function getCurrentTime() {
    return new Date().toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  
  // Subscribe to theme changes
  useEffect(() => {
    // This function will be called whenever theme changes
    const unsubscribe = subscribe((darkMode) => {
      setIsDarkMode(darkMode);
    });
    
    // Cleanup subscription when component unmounts
    return unsubscribe;
  }, []);
  
  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 60000);
    
    return () => clearInterval(timer);
  }, []);

  // The toggle now uses our global store function
  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <nav className={`w-full ${isDarkMode ? 'bg-gray-900 border-gray-700 text-white' : 'bg-white border-gray-200'} border-b px-5 py-4 transition-colors`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo/Brand */}
        <div className={`font-medium text-2xl ${isDarkMode ? 'text-white' : 'text-gray-900'} bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent`}>
          Hammad Khaliq
        </div>
        
        {/* Main Navigation */}
        <div className="hidden md:flex items-center space-x-10 text-lg">
          <Link
          to="/hero"
          className={`${isDarkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'} transition-colors transform hover:scale-105`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`${isDarkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'} transition-colors transform hover:scale-105`}
          >
            About
          </Link>
          <Link 
            to="/projects" 
            className={`${isDarkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'} transition-colors transform hover:scale-105`}
          >
            Projects
          </Link>
          <Link 
            to="/skills" 
            className={`${isDarkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'} transition-colors transform hover:scale-105`}
          >
            Skills
          </Link>
          <Link 
            to="/contact" 
            className={`${isDarkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'} transition-colors transform hover:scale-105`}
          >
            Contact
          </Link>
          <Link 
            to="/fun" 
            className={`${isDarkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'} transition-colors transform hover:scale-105`}
          >
            Fun
          </Link>
        </div>
        
        {/* Right Side Controls */}
        <div className="flex items-center space-x-4">
          {/* Time Indicator */}
          <div className={`flex items-center space-x-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            <Clock className="w-4 h-4" />
            <span>{currentTime}</span>
          </div>
          
          {/* Theme Switcher */}
          <button
            onClick={handleToggleTheme}
            className={`p-2 ${isDarkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'} transition-colors`}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;