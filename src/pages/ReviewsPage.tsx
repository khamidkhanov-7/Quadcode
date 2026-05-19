import { useState } from 'react';
import { Star, Send, Quote } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

interface LocalReview {
  id: string;
  name: string;
  rating: number;
  message: string;
  created_at: string;
}

export default function ReviewsPage() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: '', email: '', message: '', rating: 5 });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);
  const [userReviews, setUserReviews] = useState<LocalReview[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setUserReviews((prev) => [
      {
        id: `u${Date.now()}`,
        name: form.name,
        rating: form.rating,
        message: form.message,
        created_at: new Date().toISOString(),
      },
      ...prev,
    ]);
    setSubmitting(false);
    setSuccess(true);
    setForm({ name: '', email: '', message: '', rating: 5 });
    setTimeout(() => setSuccess(false), 4000);
  };

  const staticReviews: LocalReview[] = [
    {
      id: 's1',
      name: 'James Carter',
      rating: 5,
      message: 'Absolutely blown away by the quality of work. Valix delivered a world-class platform that exceeded every expectation.',
      created_at: '2024-01-15',
    },
    {
      id: 's2',
      name: 'Olivia Reyes',
      rating: 5,
      message: 'Professional, fast, and incredibly talented. The mobile app they built for us increased our user engagement by 300%.',
      created_at: '2024-02-20',
    },
    {
      id: 's3',
      name: 'Marcus Hoffman',
      rating: 5,
      message: 'Valix turned our complex requirements into an elegant solution. Their backend architecture is rock-solid and highly scalable.',
      created_at: '2024-03-10',
    },
  ];

  const displayReviews = [...userReviews, ...staticReviews];

  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 liquid-glass rounded-full px-4 py-2 mb-4 text-sm text-blue-500">
            <span className="w-2 h-2 bg-blue-500 rounded-full" />
            Testimonials
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-theme-primary mb-4">{t.reviews.title}</h1>
          <p className="text-theme-secondary text-lg max-w-xl mx-auto">{t.reviews.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {displayReviews.map((review) => (
            <div
              key={review.id}
              className="liquid-glass rounded-2xl p-6 relative"
            >
              <Quote size={24} className="text-blue-500/30 mb-4" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}
                  />
                ))}
              </div>
              <p className="text-theme-primary text-sm leading-relaxed mb-5 italic">
                "{review.message}"
              </p>
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid var(--divider-light)' }}>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-xs font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="text-theme-primary text-sm font-medium">{review.name}</div>
                  <div className="text-theme-muted text-xs">
                    {new Date(review.created_at).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="liquid-glass rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-theme-primary mb-6 text-center">
              {t.reviews.leaveReview}
            </h2>

            {success ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center mx-auto mb-4">
                  <Send size={24} className="text-green-400" />
                </div>
                <p className="text-green-400 font-medium">{t.reviews.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-theme-secondary text-sm mb-2 block">{t.reviews.rating}</label>
                  <div className="flex gap-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onMouseEnter={() => setHoverRating(i + 1)}
                        onMouseLeave={() => setHoverRating(0)}
                        onClick={() => setForm((f) => ({ ...f, rating: i + 1 }))}
                        className="transition-transform hover:scale-110"
                      >
                        <Star
                          size={28}
                          className={`transition-colors ${
                            i < (hoverRating || form.rating)
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-600'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-theme-secondary text-sm mb-1.5 block">{t.reviews.name}</label>
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
                    <label className="text-theme-secondary text-sm mb-1.5 block">{t.reviews.email}</label>
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
                  <label className="text-theme-secondary text-sm mb-1.5 block">{t.reviews.message}</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    required
                    rows={4}
                    className="input-field resize-none"
                    placeholder="Share your experience..."
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
                      {t.reviews.submit}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
