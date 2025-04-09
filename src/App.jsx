import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'; // <-- Make sure path is correct
// Import your page components (Home, About, etc.)
import Home from './Components/Homepage.jsx';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import "./styles/Styles.css"

import { ThemeProvider } from './contexts/ThemeContext.jsx'; 



function App() {
  return (
    // ----> 2. Wrap Router (and Navbar) with ThemeProvider <----
    <ThemeProvider>
      <Router>
        <Navbar /> {/* Navbar is now INSIDE ThemeProvider */}
        <main className="content">
          <Routes>
             {/* Your Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;