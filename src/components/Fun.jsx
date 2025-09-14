import React, { useState, useEffect } from 'react';
import { CloudLightning, Sun, CloudRain, Wind, Sunrise } from 'lucide-react';
import { getTheme, subscribe } from "../themeStore";

function Fun() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mood, setMood] = useState('happy');
  const [weatherIcon, setWeatherIcon] = useState(<Sun className="w-16 h-16 text-yellow-500" />);
  const [weatherName, setWeatherName] = useState('Sunny');
  const [advice, setAdvice] = useState('');
  const [weatherBackground, setWeatherBackground] = useState('bg-gradient-to-br from-blue-400 to-cyan-300');
  const [fact, setFact] = useState('');
  
  // Initialize dark mode from localStorage
  useEffect(() => {
      const unsubscribe = subscribe((darkMode) => {
        setIsDarkMode(darkMode);
      });
    
      return unsubscribe;
      }, []);

  const weatherOptions = [
    { 
      name: 'Sunny', 
      icon: <Sun className="w-16 h-16 text-yellow-500" />,
      background: 'bg-gradient-to-br from-blue-400 to-cyan-300',
      advice: 'Perfect day to work on a new project! Maybe build something with animations?'
    },
    { 
      name: 'Stormy', 
      icon: <CloudLightning className="w-16 h-16 text-gray-600" />,
      background: 'bg-gradient-to-br from-gray-700 to-gray-900',
      advice: 'Good time to debug that complex problem or refactor some code.'
    },
    { 
      name: 'Rainy', 
      icon: <CloudRain className="w-16 h-16 text-blue-500" />,
      background: 'bg-gradient-to-br from-blue-600 to-blue-800',
      advice: 'Perfect weather for learning a new technology. How about GraphQL?'
    },
    { 
      name: 'Windy', 
      icon: <Wind className="w-16 h-16 text-teal-500" />,
      background: 'bg-gradient-to-br from-teal-400 to-cyan-500',
      advice: 'Great day to clean up your code and improve performance!'
    },
    { 
      name: 'Dawn', 
      icon: <Sunrise className="w-16 h-16 text-orange-500" />,
      background: 'bg-gradient-to-br from-orange-300 to-red-400',
      advice: 'Early start! Begin that project you have been putting off.'
    }
  ];

  const codingFacts = [
    "The first programmer in the world was a woman, Ada Lovelace.",
    "The first computer bug was an actual bug - a moth stuck in a relay of the Harvard Mark II computer in 1947.",
    "The Ruby programming language was named after the birthstone of one of the creator's colleagues.",
    "The JavaScript programming language was created in just 10 days.",
    "The term 'debugging' originated from removing an actual moth from a computer.",
    "The Python programming language was named after Monty Python, not the snake.",
    "The most common password is '123456'.",
    "The first website ever created is still online: http://info.cern.ch.",
    "There are approximately 700 programming languages in existence.",
    "The first computer game was created in 1961 called 'Spacewar!'",
  ];

  const changeWeather = () => {
    const randomIndex = Math.floor(Math.random() * weatherOptions.length);
    const selected = weatherOptions[randomIndex];
    setWeatherIcon(selected.icon);
    setWeatherName(selected.name);
    setAdvice(selected.advice);
    setWeatherBackground(selected.background);
  };

  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * codingFacts.length);
    setFact(codingFacts[randomIndex]);
  };

  useEffect(() => {
    changeWeather();
    getRandomFact();
  }, []);

  const moods = {
    happy: 'bg-yellow-100 border-yellow-400',
    creative: 'bg-purple-100 border-purple-400',
    focused: 'bg-blue-100 border-blue-400',
    relaxed: 'bg-green-100 border-green-400'
  };

  const moodsDark = {
    happy: 'bg-yellow-900 border-yellow-600',
    creative: 'bg-purple-900 border-purple-600',
    focused: 'bg-blue-900 border-blue-600',
    relaxed: 'bg-green-900 border-green-600'
  };

  return (
    <section className={`w-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} px-5 py-20 min-h-screen`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
            Developer Mood Board
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          <p className={`mt-6 text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            A fun little interactive space to brighten your day!
          </p>
        </div>
        
        {/* Weather Card */}
        <div className={`rounded-xl shadow-lg overflow-hidden mb-12 text-white ${weatherBackground}`}>
          <div className="p-8 text-center">
            <div className="flex justify-center mb-4">
              {weatherIcon}
            </div>
            <h3 className="text-2xl font-bold mb-2">Today's Coding Weather: {weatherName}</h3>
            <p className="text-lg mb-6">{advice}</p>
            <button 
              onClick={changeWeather}
              className="bg-white text-gray-800 font-medium py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Change Weather
            </button>
          </div>
        </div>
        
        {/* Mood Selector */}
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-md p-6 mb-12`}>
          <h3 className={`text-xl font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>How are you feeling today?</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(isDarkMode ? moodsDark : moods).map(([moodName, moodClass]) => (
              <button
                key={moodName}
                onClick={() => setMood(moodName)}
                className={`p-4 rounded-lg border-2 ${
                  mood === moodName ? moodClass + ' ring-2 ring-offset-2 ring-indigo-500' : isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
                } transition-all`}
              >
                <span className={`capitalize font-medium ${isDarkMode ? 'text-white' : ''}`}>
                  {moodName}
                </span>
              </button>
            ))}
          </div>
          <div className={`mt-6 p-4 rounded-lg ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'} border`}>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {mood === 'happy' && "Great! Happy developers write better code. Why not try building something fun today?"}
              {mood === 'creative' && "Perfect! Channel that creativity into solving a challenging problem in a unique way."}
              {mood === 'focused' && "Excellent! Use that focus to tackle the most complex task on your list."}
              {mood === 'relaxed' && "Wonderful! A relaxed mind can often see solutions that a stressed mind misses."}
            </p>
          </div>
        </div>
        
        {/* Random Coding Fact */}
        <div className={`${isDarkMode ? 'bg-indigo-900 border-indigo-800' : 'bg-indigo-50 border-indigo-200'} border rounded-xl p-6`}>
          <h3 className={`text-xl font-medium ${isDarkMode ? 'text-indigo-200' : 'text-indigo-900'} mb-4`}>Random Coding Fact</h3>
          <p className={`${isDarkMode ? 'text-indigo-300' : 'text-indigo-700'} mb-4`}>{fact}</p>
          <button 
            onClick={getRandomFact}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            New Fact
          </button>
        </div>
      </div>
    </section>
  );
}

export default Fun;