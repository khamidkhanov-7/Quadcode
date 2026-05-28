import { useState, useEffect } from 'react';
import { Menu, X, Code2, Sun, Moon } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Language } from '../lib/translations';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const langLabels: Record<Language, string> = { en: 'EN', ru: 'RU', uz: 'UZ' };

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const { t, lang, setLang } = useLang();
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navItems = [
    { key: 'home', label: t.nav.home },
    { key: 'about', label: t.nav.about },
    { key: 'portfolio', label: t.nav.portfolio },
    { key: 'reviews', label: t.nav.reviews },
    { key: 'contact', label: t.nav.contact },
  ];

  const handleNav = (page: string) => {
    onNavigate(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-nav shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/40 group-hover:shadow-blue-500/60 transition-all duration-300">
            <Code2 size={18} className="text-white" />
          </div>
          <span className="text-xl font-bold text-theme-primary tracking-tight">
            Valix<span className="text-blue-500"></span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNav(item.key)}
              className={`text-sm font-medium transition-all duration-300 relative group ${
                currentPage === item.key
                  ? 'text-blue-500'
                  : 'text-theme-secondary hover:text-theme-primary'
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${
                  currentPage === item.key ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1 glass-card rounded-full px-1 py-1">
            {(['en', 'ru', 'uz'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
                  lang === l
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                    : 'text-theme-muted hover:text-theme-primary'
                }`}
              >
                {langLabels[l]}
              </button>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className="w-9 h-9 glass-card rounded-xl flex items-center justify-center text-theme-secondary hover:text-blue-500 hover:border-blue-500/40 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            className="md:hidden text-theme-primary p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden glass-nav px-6 py-4 flex flex-col gap-4" style={{ borderTop: '1px solid var(--divider)' }}>
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNav(item.key)}
              className={`text-left text-sm font-medium py-2 transition-colors ${
                currentPage === item.key ? 'text-blue-500' : 'text-theme-secondary'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="flex gap-2 pt-2" style={{ borderTop: '1px solid var(--divider)' }}>
            {(['en', 'ru', 'uz'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  lang === l
                    ? 'bg-blue-500 text-white'
                    : 'text-theme-muted border border-theme-divider'
                }`}
              >
                {langLabels[l]}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
