import { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid business email address.');
      return;
    }
    setError('');
    setSubscribed(true);
  };

  return (
    <div className="p-8 sm:p-12 bg-[#0B1120] text-white border-l-4 border-[#C5A059] shadow-lg">
      <div className="max-w-2xl">
        <div className="flex items-center gap-2 text-[#C5A059] text-xs font-bold tracking-[0.2em] uppercase mb-2">
          <Mail className="h-4 w-4" />
          <span>CAPITAL CORRIDOR INTELLIGENCE</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif text-white mb-3">
          Subscribe to Institutional Credit &amp; Capital Market Insights
        </h3>
        <p className="text-slate-300 font-light text-xs sm:text-sm leading-relaxed mb-6">
          Receive curated strategic briefings on debt syndication trends, NPA resolution frameworks, IPO readiness guidelines, and macro capital market changes directly from our partners.
        </p>

        {subscribed ? (
          <div className="p-4 bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-xs font-medium flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
            <span>Thank you for subscribing to Capital Corridor Insights. You will receive our monthly executive briefing.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your business email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 bg-[#112240] border border-slate-700 text-white text-xs placeholder-slate-400 focus:outline-none focus:border-[#C5A059] flex-1"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#C5A059] text-[#0B1120] text-xs font-bold uppercase tracking-widest hover:bg-[#D4B473] transition-colors shrink-0"
            >
              Subscribe Now <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </form>
        )}
        {error && <p className="text-red-400 text-xs font-light mt-2">{error}</p>}
      </div>
    </div>
  );
}
