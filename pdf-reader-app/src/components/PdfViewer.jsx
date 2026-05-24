// src/components/PdfViewer.jsx
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

//  Correct worker path — no 404, no mismatch
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

export default function PdfViewer() {
  const [file, setFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [page, setPage] = useState(1);
  const [scale, setScale] = useState(1);

  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file?.type === 'application/pdf') {
      setFile(file);
      setPage(1);
      setScale(1);
    } else {
      alert('Please upload a PDF');
    }
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="p-4 text-white">
      <h2 className="text-xl font-bold mb-4">📄 PDF Viewer</h2>

      <input
        type="file"
        accept="application/pdf"
        onChange={onFileChange}
        className="mb-4 bg-white text-black px-2 py-1 rounded"
      />

      {file && (
        <>
          <div className="mb-4">
            <button onClick={() => setPage((p) => Math.max(p - 1, 1))} className="bg-gray-700 px-3 py-1 rounded">⬅ Prev</button>
            <span>Page {page} / {numPages}</span>
            <button onClick={() => setPage((p) => Math.min(p + 1, numPages))} className="bg-gray-700 px-3 py-1 rounded">Next ➡</button>
            <button onClick={() => setScale((s) => s + 0.2)} className="ml-4 bg-gray-700 px-3 py-1 rounded">➕ Zoom</button>
            <button onClick={() => setScale((s) => Math.max(s - 0.2, 0.5))} className="bg-gray-700 px-3 py-1 rounded">➖ Zoom</button>
          </div>

          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={(err) => console.error("❌ PDF load error:", err)}
          >
            <Page pageNumber={page} scale={scale} />
          </Document>
        </>
      )}
    </div>
  );
}
