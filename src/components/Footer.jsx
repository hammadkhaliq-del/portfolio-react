import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const currentYear = new Date().getFullYear();

  // Footer will always be dark, but we can check if the rest of the site is in dark mode
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  return (
    <footer className="w-full bg-gray-900 text-white px-5 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-medium mb-4">Hammad Khaliq</h3>
            <p className="text-gray-300 mb-6">
              Web developer passionate about creating beautiful, functional experiences 
              that make a difference in people's lives.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/hammadkhaliq-del" 
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/hammad-khaliq-ba867b326/" 
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:hammadkhaliq987@gmail.com" 
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-gray-300 hover:text-white transition-colors">
                  Technical Skills
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-medium mb-4">Get In Touch</h4>
            <div className="space-y-3 text-gray-300">
              <p>Rawalpindi, Pakistan</p>
              <p>PKT (UTC +5)</p>
              <a 
                href="mailto:hammadkhaliq987@gmail.com" 
                className="hover:text-white transition-colors block"
              >
                hammadkhaliq987@gmail.com
              </a>
            </div>
            <div className="mt-6">
              <a href='/contact' className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Schedule a Call
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Hammad Khaliq. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current mx-1" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;