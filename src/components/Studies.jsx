import { GraduationCap, BookOpen, Award } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getTheme, subscribe } from "../themeStore";


export default function Studies() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize dark mode from localStorage
  useEffect(() => {
      const unsubscribe = subscribe((darkMode) => {
        setIsDarkMode(darkMode);
      });
    
      return unsubscribe;
      }, []);

  const studies = [
    {
      institution: "Comsats University Islamabad",
      degree: "Bachelor of Science in Artifical Intelligence",
      duration: "2024–2028",
      topics: ["Human-AI Interaction", "Software Engineering", "Machine Learning"],
      type: "university",
      icon: GraduationCap
    },
    {
      institution: "Frontend Masters",
      degree: "Advanced React & Tailwind CSS",
      duration: "2 months",
      topics: ["Basic React", "Advnaced React", "Basic Tailwind CSS"],
      type: "course",
      icon: BookOpen
    },];

  const getTypeColor = (type) => {
    if (isDarkMode) {
      switch(type) {
        case 'university': return 'bg-indigo-900 text-indigo-300';
        case 'course': return 'bg-purple-900 text-purple-300';
        default: return 'bg-gray-700 text-gray-300';
      }
    } else {
      switch(type) {
        case 'university': return 'bg-indigo-100 text-indigo-700';
        case 'course': return 'bg-purple-100 text-purple-700';
        default: return 'bg-gray-100 text-gray-700';
      }
    }
  };

  const getTypeLabel = (type) => {
    switch(type) {
      case 'university': return 'University';
      case 'course': return 'Online Course';
      case 'bootcamp': return 'Bootcamp';
      default: return 'Education';
    }
  };

  return (
    <section className={`w-full ${isDarkMode ? 'bg-gray-800' : 'bg-white'} px-5 py-20`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
            Education & Studies
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {studies.map((study, index) => {
            const IconComponent = study.icon;
            return (
              <div 
                key={index} 
                className={`${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'} rounded-lg p-6 border hover:shadow-md transition-shadow`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm`}>
                    <IconComponent className="w-6 h-6 text-indigo-600" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {study.institution}
                      </h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(study.type)}`}>
                        {getTypeLabel(study.type)}
                      </span>
                    </div>
                    
                    <p className="text-indigo-600 font-medium mb-2">
                      {study.degree}
                    </p>
                    
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-4`}>
                      {study.duration}
                    </p>
                    
                    <div className="space-y-2">
                      <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Topics Studied:</p>
                      <div className="flex flex-wrap gap-2">
                        {study.topics.map((topic, topicIndex) => (
                          <span 
                            key={topicIndex} 
                            className={`px-2 py-1 ${isDarkMode ? 'bg-gray-800 text-gray-300 border-gray-600' : 'bg-white text-gray-600 border-gray-200'} text-xs rounded border`}
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}