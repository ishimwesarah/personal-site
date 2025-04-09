// src/contexts/ThemeContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Initialize state: check localStorage first, then system preference, default to 'light'
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      return storedTheme;
    }
    // Check system preference (run only on client-side)
    const prefersDark = typeof window !== 'undefined' && 
                        window.matchMedia && 
                        window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  useEffect(() => {
    // Ensure this runs only on the client-side
    if (typeof window !== 'undefined') {
      // Apply the theme class to the body
      document.body.classList.remove('light-mode', 'dark-mode');
      document.body.classList.add(`${theme}-mode`);
      // Save theme preference to localStorage
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};