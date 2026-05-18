import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CVPage from './pages/CVPage';
import PortfolioPage from './pages/PortfolioPage';
import ReviewsPage from './pages/ReviewsPage';
import ContactPage from './pages/ContactPage';

function AppContent() {
  const [page, setPage] = useState('home');

  const handleNavigate = (p: string) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    if (page.startsWith('cv-')) {
      return <CVPage memberId={page.replace('cv-', '')} onNavigate={handleNavigate} />;
    }
    switch (page) {
      case 'home': return <HomePage onNavigate={handleNavigate} />;
      case 'about': return <AboutPage onNavigate={handleNavigate} />;
      case 'portfolio': return <PortfolioPage />;
      case 'reviews': return <ReviewsPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-site-bg text-theme-primary relative">
      <ParticlesBackground />
      <div className="relative z-10">
        <Navbar currentPage={page} onNavigate={handleNavigate} />
        <main>{renderPage()}</main>
        <Footer onNavigate={handleNavigate} />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
