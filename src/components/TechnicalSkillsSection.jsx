import { Figma, Code, Brush, Database, Smartphone, Globe, Zap } from 'lucide-react';
import tailwindImg from '../assets/tailwindImg.jpg';
import { getTheme, subscribe } from "../themeStore";


import { useState, useEffect } from 'react';

export default function TechnicalSkillsSection() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize dark mode from localStorage
  useEffect(() => {
      const unsubscribe = subscribe((darkMode) => {
        setIsDarkMode(darkMode);
      });
    
      return unsubscribe;
      }, []);

  const skills = [
    {
      name: "UX Pilot",
      description: "Expert in creating design systems, prototypes, and collaborative design workflows",
      icon: Figma,
      tags: ["Design", "Prototyping", "Collaboration"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop"
    },
    {
      name: "React.js",
      description: "Building scalable React applications with server-side rendering and optimal performance",
      icon: Code,
      tags: ["JavaScript", "React", "SSR"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop"
    },
    {
      name: "JavaScript",
      description: "Writing clean, maintainable code for small-scale applications",
      icon: Globe,
      tags: ["JavaScript", "Type Safety", "Scalability"],
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300&h=200&fit=crop"
    },
    {
      name: "Tailwind CSS",
      description: "Improving web application  aesthetics  and user experience through advanced techniques",
      icon: Brush,
      tags: ["Web Vitals", "Optimization", "UX"],
      image: tailwindImg
    }
  ];

  return (
    <section className={`w-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} px-5 py-20`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div 
                key={index} 
                className= {`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg border overflow-hidden hover:shadow-lg transition-shadow group`}
              >
                {/* Skill Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={skill.image} 
                    alt={skill.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  {/* Icon and Name */}
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`p-2 ${isDarkMode ? 'bg-indigo-900' : 'bg-indigo-100'} rounded-lg`}>
                      <IconComponent className="w-5 h-5 text-indigo-600" />
                    </div>
                    <h3 className={`text-xl font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {skill.name}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 text-sm leading-relaxed`}>
                    {skill.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className={`px-2 py-1 ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'} text-xs font-medium rounded`}
                      >
                        {tag}
                      </span>
                    ))}
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