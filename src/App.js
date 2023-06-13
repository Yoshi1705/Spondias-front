import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Components/inc/NavBar/Navbar';
import Footer from './Components/inc/Footer/Footer';
import Home from './Components/Pages/Home';
import About from './Components/Pages/ABOUT/About';
import Services from './Components/Pages/Services/Services';
import Projects from './Components/Pages/Projects/Projects';
import Contact from './Components/Pages/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/clientProjects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
           
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
