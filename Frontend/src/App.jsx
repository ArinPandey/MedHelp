import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-between text-gray-900 font-sans">
        <div>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}