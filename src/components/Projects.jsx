import { useState, useEffect } from 'react';
import { getTheme, subscribe } from "../themeStore";

export default function Projects() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const unsubscribe = subscribe((darkMode) => {
      setIsDarkMode(darkMode);
    });
    return unsubscribe;
  }, []);

  const projects = [
    {
      name: "Past Papers Bank",
      technologies: ["Django", "HTML", "CSS", "JavaScript"],
      features: [
        "Subject-wise accordion layout for past papers",
        "Separate tabs for mids and finals",
        "Download PDFs and images directly",
        "Search bar for quick filtering"
      ],
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=100&h=60&fit=crop",
      link: "https://hammadkhaliq.pythonanywhere.com/"
    },
    {
      name: "Omni Track",
      technologies: ["JavaFX", "Scene Builder"],
      features: [
        "Tracks habits, to-dos, projects, finances",
        "Integrated AI assistant for reminders",
        "Clean dashboard with modular widgets",
        "Secure login/signup system"
      ],
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=100&h=60&fit=crop",
      link: null
    }
  ];

  return (
    <section id="work" className={`w-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} px-5 py-20`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
            Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${isDarkMode ? 'bg-gray-800 border-gray-700 shadow-gray-900' : 'bg-white border-gray-200 shadow-sm'} rounded-lg p-6 border hover:shadow-md transition-shadow`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                
                {/* Timeline indicator */}
                <div className="hidden md:flex flex-col items-center">
                  <div className={`w-12 h-12 ${isDarkMode ? 'bg-indigo-900' : 'bg-indigo-100'} rounded-full flex items-center justify-center mb-4`}>
                    <div className="w-6 h-6 bg-indigo-600 rounded-full"></div>
                  </div>
                  {index !== projects.length - 1 && (
                    <div className={`w-px h-24 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Website name */}
                  <h3 className={`text-xl font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                    {project.name}
                  </h3>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 text-sm rounded-full font-medium ${
                          isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-4">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className={`flex items-start space-x-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Thumbnail + link */}
                  <div className="flex items-center space-x-4">
                    <div className={`w-24 h-14 rounded border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} overflow-hidden`}>
                      <img 
                        src={project.image} 
                        alt={`${project.name} thumbnail`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-indigo-600 font-medium hover:underline"
                    >
                      Live Website →
                    </a>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
