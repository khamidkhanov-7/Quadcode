import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { projects } from '../data/projects';
import { Language } from '../lib/translations';

const categories = ['All', 'Web', 'Mobile', 'Backend'];

export default function PortfolioPage() {
  const { t, lang } = useLang();
  const l = lang as Language;
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 liquid-glass rounded-full px-4 py-2 mb-4 text-sm text-blue-500">
            <span className="w-2 h-2 bg-blue-500 rounded-full" />
            Selected Work
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-theme-primary mb-4">{t.portfolio.title}</h1>
          <p className="text-theme-secondary text-lg max-w-xl mx-auto">{t.portfolio.subtitle}</p>
        </div>

        <div className="flex justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                  : 'glass-card text-theme-secondary hover:text-theme-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="liquid-glass rounded-2xl overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--card-img-overlay-from), var(--card-img-overlay-via), var(--card-img-overlay-to))' }} />
                <div className="absolute top-3 right-3">
                  <span className="text-xs bg-blue-500/20 border border-blue-500/40 text-blue-500 rounded-full px-2 py-0.5 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-theme-primary font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-theme-secondary text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description[l]}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-theme-muted bg-theme-tag rounded px-2 py-0.5"
                      style={{ border: '1px solid var(--tag-border)' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-500 text-sm font-medium hover:bg-blue-500/20 transition-all duration-300"
                  >
                    <ExternalLink size={14} />
                    {t.portfolio.liveDemo}
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg glass-card text-theme-secondary text-sm font-medium hover:text-theme-primary transition-all duration-300"
                  >
                    <Github size={14} />
                    {t.portfolio.github}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
