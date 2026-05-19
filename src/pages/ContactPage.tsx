import { useState } from 'react';
import { Send, MapPin, Clock, MessageSquare } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

export default function ContactPage() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: '', email: '', telegram: '', description: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSuccess(true);
    setForm({ name: '', email: '', telegram: '', description: '' });
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 liquid-glass rounded-full px-4 py-2 mb-4 text-sm text-blue-500">
            <span className="w-2 h-2 bg-blue-500 rounded-full" />
            Let's Talk
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-theme-primary mb-4">{t.contact.title}</h1>
          <p className="text-theme-secondary text-lg max-w-xl mx-auto">{t.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="liquid-glass rounded-2xl p-6">
              <h2 className="text-xl font-bold text-theme-primary mb-3">{t.contact.info.title}</h2>
              <p className="text-theme-secondary text-sm leading-relaxed mb-6">{t.contact.info.desc}</p>

              {[
                { icon: Clock, text: t.contact.info.response, color: 'text-blue-500' },
                { icon: MapPin, text: t.contact.info.location, color: 'text-cyan-500' },
                { icon: MessageSquare, text: '@valix', color: 'text-blue-500' },
              ].map(({ icon: Icon, text, color }, i) => (
                <div key={i} className="flex items-center gap-3 mb-4 last:mb-0">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className={color} />
                  </div>
                  <span className="text-theme-primary text-sm">{text}</span>
                </div>
              ))}
            </div>

            <div className="liquid-glass rounded-2xl p-6">
              <h3 className="text-theme-primary font-semibold mb-4 text-sm uppercase tracking-widest">
                Technologies We Work With
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Node.js', 'Python', 'Flutter', 'React Native', 'PostgreSQL', 'AWS'].map((tech) => (
                  <span key={tech} className="text-xs text-theme-muted bg-theme-tag rounded px-2 py-1" style={{ border: '1px solid var(--tag-border)' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="liquid-glass rounded-3xl p-8">
              {success ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center mx-auto mb-6">
                    <Send size={32} className="text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-theme-primary mb-2">Sent!</h3>
                  <p className="text-theme-secondary">{t.contact.success}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-theme-secondary text-sm mb-1.5 block">{t.contact.name}</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        required
                        className="input-field"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="text-theme-secondary text-sm mb-1.5 block">{t.contact.email}</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        required
                        className="input-field"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-theme-secondary text-sm mb-1.5 block">{t.contact.telegram}</label>
                    <input
                      type="text"
                      value={form.telegram}
                      onChange={(e) => setForm((f) => ({ ...f, telegram: e.target.value }))}
                      className="input-field"
                      placeholder="@username"
                    />
                  </div>

                  <div>
                    <label className="text-theme-secondary text-sm mb-1.5 block">{t.contact.description}</label>
                    <textarea
                      value={form.description}
                      onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                      required
                      rows={6}
                      className="input-field resize-none"
                      placeholder="Tell us about your project goals, timeline, and budget..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full justify-center"
                  >
                    {submitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={16} />
                        {t.contact.send}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
