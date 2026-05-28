import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, Zap, Globe, Smartphone, Layers } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const words = ['Websites', 'Mobile Apps', 'Backend APIs', 'UI/UX Design'];

export default function HomePage({ onNavigate }: HomePageProps) {
  const { t } = useLang();
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { icon: Globe, label: 'Web Development', color: 'from-blue-500 to-cyan-400' },
    { icon: Smartphone, label: 'Mobile Apps', color: 'from-cyan-400 to-teal-400' },
    { icon: Layers, label: 'Backend Systems', color: 'from-blue-600 to-blue-400' },
    { icon: Zap, label: 'UI/UX Design', color: 'from-teal-400 to-cyan-300' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 liquid-glass rounded-full px-4 py-2 mb-8 text-sm text-blue-500">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            Premium Software Agency — Namangan, Uzbekistan
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-theme-primary leading-tight mb-6 tracking-tight">
            <span className="block">Velix</span>
            <span className="block bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
              {t.hero.title}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-theme-secondary mb-4 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>

          <div className="h-10 flex items-center justify-center mb-10">
            <span
              className={`text-2xl md:text-3xl font-bold text-blue-500 transition-all duration-400 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              {words[wordIndex]}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('portfolio')}
              className="btn-primary group"
            >
              {t.hero.cta1}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="btn-secondary group"
            >
              {t.hero.cta2}
            </button>
          </div>

          <div className="mt-16 flex items-center justify-center gap-2 text-theme-muted text-sm animate-bounce-slow">
            <span>{t.hero.scroll}</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { number: '50+', label: 'Projects Delivered' },
              { number: '30+', label: 'Happy Clients' },
              { number: '4+', label: 'Years Experience' },
            ].map((stat, i) => (
              <div key={i} className="liquid-glass rounded-2xl p-8 text-center">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-theme-secondary text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon: Icon, label, color }, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-6 cursor-default"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-theme-primary font-semibold text-sm">{label}</h3>
                <p className="text-theme-muted text-xs mt-1">Expert solutions</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}