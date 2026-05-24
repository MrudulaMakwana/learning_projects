// src/components/ThemeToggle.jsx
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="p-2 border rounded mb-4">
      {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}
