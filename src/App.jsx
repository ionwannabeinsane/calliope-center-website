import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Newsletter from './pages/Newsletter';
import Donate from './pages/Donate';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
