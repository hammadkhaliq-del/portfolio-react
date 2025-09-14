// A simple global theme store with pub/sub pattern

// Initialize theme from localStorage or system preference
const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  return savedTheme === 'dark' || (!savedTheme && prefersDark);
};

// State
let isDarkMode = getInitialTheme();

// Initialize document class on load
if (isDarkMode) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

// Subscribers collection
const listeners = new Set();

// Get current theme
export const getTheme = () => isDarkMode;

// Toggle theme
export const toggleTheme = () => {
  isDarkMode = !isDarkMode;
  
  // Update document class for Tailwind
  if (isDarkMode) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
  
  // Notify all subscribers
  listeners.forEach(listener => listener(isDarkMode));
};

// Subscribe to theme changes
export const subscribe = (listener) => {
  listeners.add(listener);
  // Return unsubscribe function
  return () => listeners.delete(listener);
};