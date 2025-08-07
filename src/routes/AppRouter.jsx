import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero3D from '../components/Hero3D';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={
        <>
          <Hero3D />
          <Services />
          <Pricing />
          <Projects />
          <Contact />
        </>
      } />
    </Routes>
  </Router>
);

export default AppRouter;
