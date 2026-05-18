import { ExternalLink } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { team } from '../data/team';
import { Language } from '../lib/translations';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const { t, lang } = useLang();
  const l = lang as Language;

  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 liquid-glass rounded-full px-4 py-2 mb-4 text-sm text-blue-500">
            <span className="w-2 h-2 bg-blue-500 rounded-full" />
            Our People
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-theme-primary mb-4">{t.about.title}</h1>
          <p className="text-theme-secondary text-lg max-w-xl mx-auto">{t.about.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div
              key={member.id}
              className="liquid-glass rounded-3xl overflow-hidden"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--site-bg), var(--card-img-overlay-via), var(--card-img-overlay-to))' }} />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-block bg-blue-500/20 border border-blue-500/40 rounded-full px-3 py-1 text-xs text-blue-500 backdrop-blur-sm">
                    {member.role[l]}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-theme-primary mb-2">{member.name}</h3>
                <p className="text-theme-secondary text-sm leading-relaxed mb-4">{member.bio[l]}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {member.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-theme-muted bg-theme-tag rounded-full px-2 py-0.5"
                      style={{ border: '1px solid var(--tag-border)' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onNavigate(`cv-${member.id}`)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-500 text-sm font-medium hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  {t.about.viewCv}
                  <ExternalLink size={14} className="group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
