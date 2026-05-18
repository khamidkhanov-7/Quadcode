import { ArrowLeft, Github, Send, Instagram, Star, CheckCircle } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { team } from '../data/team';
import { Language } from '../lib/translations';

interface CVPageProps {
  memberId: string;
  onNavigate: (page: string) => void;
}

export default function CVPage({ memberId, onNavigate }: CVPageProps) {
  const { t, lang } = useLang();
  const l = lang as Language;
  const member = team.find((m) => m.id === memberId);

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-theme-secondary">Developer not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => onNavigate('about')}
          className="flex items-center gap-2 text-theme-secondary hover:text-blue-500 transition-colors mb-8 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          {t.cv.backToTeam}
        </button>

        <div className="liquid-glass rounded-3xl overflow-hidden mb-8">
          <div className="h-40 relative" style={{ background: `linear-gradient(to right, var(--cv-header-bg-from), var(--cv-header-bg-via), var(--cv-header-bg-to))` }}>
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(0,180,255,0.15), transparent 70%)' }} />
          </div>
          <div className="px-8 pb-8">
            <div className="flex flex-col md:flex-row md:items-end gap-6 -mt-16 mb-6">
              <div className="relative">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-28 h-28 rounded-2xl object-cover border-4 shadow-xl shadow-blue-500/20"
                  style={{ borderColor: 'var(--site-bg)' }}
                />
                <div className="absolute -bottom-2 -right-2 w-5 h-5 bg-green-400 rounded-full" style={{ border: '2px solid var(--online-dot-border)' }} />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-black text-theme-primary">{member.name}</h1>
                <p className="text-blue-500 font-medium">{member.role[l]}</p>
              </div>
              <div className="flex gap-3">
                <a href={member.social.github} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-theme-muted hover:text-blue-500 transition-all duration-300">
                  <Github size={18} />
                </a>
                <a href={member.social.telegram} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-theme-muted hover:text-blue-500 transition-all duration-300">
                  <Send size={18} />
                </a>
                <a href={member.social.instagram} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-theme-muted hover:text-pink-500 transition-all duration-300">
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            <a
              href={member.social.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex w-full md:w-auto justify-center"
            >
              <Send size={16} />
              {t.cv.message}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="liquid-glass rounded-2xl p-6">
            <h2 className="text-theme-primary font-bold text-lg mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-blue-500 rounded-full" />
              {t.cv.skills}
            </h2>
            <div className="space-y-4">
              {member.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-theme-primary">{skill.name}</span>
                    <span className="text-blue-500">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--tag-bg)' }}>
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full skill-bar"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="liquid-glass rounded-2xl p-6">
            <h2 className="text-theme-primary font-bold text-lg mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-cyan-500 rounded-full" />
              {t.cv.technologies}
            </h2>
            <div className="flex flex-wrap gap-2">
              {member.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm font-medium hover:bg-blue-500/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="liquid-glass rounded-2xl p-6 lg:col-span-2">
            <h2 className="text-theme-primary font-bold text-lg mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-blue-500 rounded-full" />
              {t.cv.experience}
            </h2>
            <div className="space-y-6">
              {member.experience.map((exp, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                    {i < member.experience.length - 1 && (
                      <div className="w-0.5 flex-1 bg-blue-500/20 mt-2" />
                    )}
                  </div>
                  <div className="pb-4">
                    <div className="text-xs text-blue-500 font-medium mb-0.5">{exp.year}</div>
                    <div className="text-theme-primary font-semibold">{exp.title[l]}</div>
                    <div className="text-cyan-500 text-sm">{exp.company}</div>
                    <div className="text-theme-secondary text-sm mt-1">{exp.desc[l]}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="liquid-glass rounded-2xl p-6">
            <h2 className="text-theme-primary font-bold text-lg mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-cyan-500 rounded-full" />
              {t.cv.certificates}
            </h2>
            <div className="space-y-3">
              {member.certificates.map((cert, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-theme-primary text-sm font-medium">{cert.name}</div>
                    <div className="text-theme-muted text-xs">{cert.issuer} · {cert.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="liquid-glass rounded-2xl p-6">
            <h2 className="text-theme-primary font-bold text-lg mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-blue-500 rounded-full" />
              {t.cv.projects}
            </h2>
            <div className="space-y-4">
              {member.projects.map((proj, i) => (
                <div key={i} className="rounded-xl p-3 transition-colors" style={{ border: '1px solid var(--divider-light)' }}>
                  <div className="text-theme-primary font-semibold text-sm mb-1">{proj.name}</div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {proj.tech.map((t) => (
                      <span key={t} className="text-xs bg-blue-500/10 text-blue-500 rounded px-1.5 py-0.5">{t}</span>
                    ))}
                  </div>
                  <div className="text-theme-secondary text-xs">{proj.desc[l]}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="liquid-glass rounded-2xl p-6 lg:col-span-2">
            <h2 className="text-theme-primary font-bold text-lg mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-cyan-500 rounded-full" />
              {t.cv.clientReviews}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {member.clientReviews.map((review, i) => (
                <div key={i} className="rounded-xl p-4 transition-colors" style={{ border: '1px solid var(--divider-light)' }}>
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-theme-primary text-sm italic mb-3">"{review.text[l]}"</p>
                  <p className="text-theme-muted text-xs font-medium">— {review.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
