// ThemeContext.tsx

import React, { createContext, useState, useEffect, ReactNode } from 'react';

// Create a context for the theme
export const ThemeContext = createContext<any>(null);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // State to store the theme: light or dark
  const [theme, setTheme] = useState<string>('light');

  // Effect to load the saved theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme); // Update HTML element for CSS variables
    } else {
      document.documentElement.setAttribute('data-theme', 'light'); // Default to light theme
    }
  }, []);

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    console.log('Theme toggled to:', newTheme); // Log the theme change to check
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
};

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
