import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/themes';
import GlobalStyles from './styles/globals';

import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import Hero3D from './components/Hero3D';
import Services from './components/Services';
import Projects from './components/Projects';
import Pricing from './components/Pricing';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Navbar />

      {/* Optional theme toggle */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem 2rem' }}>
        <ThemeToggle toggleTheme={toggleTheme} isDark={isDark} />
      </div>

      <Hero3D />
      <Services />
      <Projects />
      <Pricing />
      <About />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
