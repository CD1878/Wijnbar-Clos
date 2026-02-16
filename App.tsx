import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Groups } from './pages/Groups';
import { Jobs } from './pages/Jobs';
import { Tasting } from './pages/Tasting';
import { Menu } from './pages/Menu';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-brand-grey bg-brand-cream selection:bg-brand-gold selection:text-brand-forest">
      <ScrollToTop />
      <Navbar scrolled={scrolled} />

      <main className="flex-grow w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/groepen" element={<Groups />} />
          <Route path="/vacatures" element={<Jobs />} />
          <Route path="/wijnproeven" element={<Tasting />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;