// src/context/ThemeContext.jsx
import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem('theme') === 'dark'
  );
// ThemeProvider (already in your code)
useEffect(() => {
  const root = document.documentElement;      // <html>
  if (darkMode) {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
}, [darkMode]);


  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
