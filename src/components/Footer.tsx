import { Code2, Github, Send, Instagram, } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const { t } = useLang();

  const navTo = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative" style={{ borderTop: '1px solid var(--divider)', backgroundColor: 'var(--footer-bg)' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, var(--footer-gradient-from), transparent)' }} />
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <button onClick={() => navTo('home')} className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                <Code2 size={18} className="text-white" />
              </div>
              <span className="text-xl font-bold text-theme-primary">
                Velix<span className="text-blue-500"></span>
              </span>
            </button>
            <p className="text-theme-secondary text-sm leading-relaxed max-w-xs">
              {t.footer.description}
            </p>
            <div className="flex gap-4 mt-6">
              {[
                { icon: Github, href: '#' },
                { icon: Send, href: '#' },
                { icon: Instagram, href: '#' },
                
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-theme-muted hover:text-blue-500 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-theme-primary font-semibold mb-4 text-sm uppercase tracking-widest">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {[
                { key: 'home', label: t.nav.home },
                { key: 'about', label: t.nav.about },
                { key: 'portfolio', label: t.nav.portfolio },
                { key: 'reviews', label: t.nav.reviews },
                { key: 'contact', label: t.nav.contact },
              ].map((item) => (
                <li key={item.key}>
                  <button
                    onClick={() => navTo(item.key)}
                    className="text-theme-secondary hover:text-blue-500 text-sm transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-theme-primary font-semibold mb-4 text-sm uppercase tracking-widest">
              {t.footer.services}
            </h4>
            <ul className="space-y-3">
              {t.footer.serviceList.map((s, i) => (
                <li key={i} className="text-theme-secondary text-sm">{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid var(--divider)' }}>
          <p className="text-theme-muted text-sm">{t.footer.copyright}</p>
          <div className="flex items-center gap-1 text-theme-muted text-sm">
            <span>Built with</span>
            <span className="text-blue-500 mx-1">&#9830;</span>
            <span>Velix</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
