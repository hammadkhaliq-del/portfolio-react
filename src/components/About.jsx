import React, { useState, useEffect } from "react";
import { getTheme, subscribe } from "../themeStore";

function About() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize dark mode from localStorage
  useEffect(() => {
    const unsubscribe = subscribe((darkMode) => {
      setIsDarkMode(darkMode);
    });
  
    return unsubscribe;
    }, []);

  return (
    <section id="about" className={`w-full ${isDarkMode ? 'bg-gray-800' : 'bg-white'} px-5 py-20`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className={`${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'} rounded-lg p-8 border`}>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-6`}>
            I'm a passionate Web Developer with over 3 months of experience bridging the gap between 
            design and development. I love creating practical projects with intuitive user experiences while ensuring 
            they're built with clean, scalable code.
          </p>
          
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-6`}>
            My expertise spans across modern web technologies, design systems, and user interface 
            development. I'm particularly passionate about creating accessible, performant applications 
            that solve real-world problems and delight users.
          </p>
          
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
            When I'm not coding or designing, you'll find me exploring new technologies, making projects
            that matter for the students or sharing knowledge through technical writing and mentoring 
            emerging developers.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
              User Experience
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              Frontend Development
            </span>
            <span className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">
              Tailwind CSS
            </span>
            <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
              React.js
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              JavaScript
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;