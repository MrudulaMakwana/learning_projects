// src/components/ThemeToggle.jsx
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded border
                 border-black dark:border-white"
    >
      {darkMode ? '🌞Light Mode' : '🌙Dark Mode'}
    </button>
  );
}
