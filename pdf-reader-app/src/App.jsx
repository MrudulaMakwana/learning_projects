// src/App.jsx
import ThemeToggle from './components/ThemeToggle';
import PdfViewer from './components/PdfViewer';
import { ThemeProvider } from './ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <div className=" bg-red-900 text-white flex items-center justify-center px-4">
        <div className="w-full max-w-3xl text-center space-y-6">
          <h1 className="text-3xl font-bold">📚 PDF Reader App</h1>
          <ThemeToggle />
          <PdfViewer />
        </div>
      </div>
    </ThemeProvider>
  );
}
