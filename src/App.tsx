import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Experts from './pages/Experts';
import Services from './pages/Services';
import Highlights from './pages/Highlights';
import WhyChooseUs from './pages/WhyChooseUs';
import MotherBabyCare from './pages/MotherBabyCare';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="experts" element={<Experts />} />
            <Route path="services" element={<Services />} />
            <Route path="highlights" element={<Highlights />} />
            <Route path="why-choose-us" element={<WhyChooseUs />} />
            <Route path="mother-baby-care" element={<MotherBabyCare />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;