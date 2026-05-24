// src/App.jsx
import ThemeToggle from './components/ThemeToggle';
import PdfViewer from './components/PdfViewer';
import { ThemeProvider } from './ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <div
        className="
          min-h-screen flex items-center justify-center px-4
          bg-white  text-black           /* light mode */
          darkMode:bg-gray-900 darkMode:text-white /* dark mode */
        "
      >
        <div className="w-full max-w-3xl text-center space-y-6">
          <h1 className="text-3xl font-bold">📚 PDF Reader App</h1>
          <ThemeToggle />
          <PdfViewer />
        </div>
      </div>
    </ThemeProvider>
  );
}
