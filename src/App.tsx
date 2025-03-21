import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Leadership from './pages/Leadership';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[var(--vscode-bg)] text-[var(--vscode-text)]">
        <Sidebar />
        <div className="pl-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;