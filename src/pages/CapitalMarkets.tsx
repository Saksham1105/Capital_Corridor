import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, ArrowRight, CheckCircle2, ShieldCheck, 
  BarChart3, Building2, Sparkles, Layers, FileText, Users 
} from 'lucide-react';

export function CapitalMarkets() {
  const fivePs = [
    {
      num: "01",
      title: "Planning",
      desc: "Comprehensive IPO readiness assessment, business model validation, capital structure review, and bespoke listing roadmap."
    },
    {
      num: "02",
      title: "Preparation",
      desc: "Coordination of due diligence with qualified professionals, corporate governance structuring, and Draft Red Herring Prospectus (DRHP) coordination."
    },
    {
      num: "03",
      title: "Process Coordination",
      desc: "Liaising with SEBI-registered Merchant Bankers, stock exchanges (BSE/NSE), legal counsel, statutory auditors, and registrars."
    },
    {
      num: "04",
      title: "Public Offering Support",
      desc: "Formulating institutional investor positioning, valuation advisory, book-building strategy, and anchor investor coordination."
    },
    {
      num: "05",
      title: "Post-IPO Advisory",
      desc: "Post-listing governance advisory, quarterly compliance alignment, investor relations (IR) roadmap, and future secondary capital raising."
    }
  ];

  const listedAcquisition = [
    { num: "01", title: "Target Identification & Screening", desc: "Identifying viable listed company targets suited for acquisition or reverse merger." },
    { num: "02", title: "Transaction Structuring", desc: "Structuring share purchase agreements, open offers, and preferential allotments." },
    { num: "03", title: "Business Integration & Restructuring", desc: "Post-acquisition corporate restructuring and strategic value creation." },
    { num: "04", title: "Regulatory & SEBI Compliance", desc: "Liaising with SEBI merchant bankers, legal counsel, and stock exchange desks." },
    { num: "05", title: "Capital Markets IR & Re-rating", desc: "Institutional positioning to unlock long-term enterprise valuation." }
  ];

  return (
    <div className="flex flex-col w-full bg-[#FBF9F5]">
      <SEO 
        title="Capital Markets & IPO Advisory (5 P's Framework) — Capital Corridor" 
        description="Comprehensive Equity Capital Market (ECM) solutions, SME & Mainboard IPO advisory under the 5 P's Framework, and Listed Company Acquisition advisory."
        canonicalUrl="/services/capital-markets"
      />

      {/* Hero Header */}
      <section className="pt-36 pb-20 bg-[#050C18] text-white border-b border-[#14233D] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.06),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#091528] border border-[#C5A059]/40 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#C5A059]">
              CAPITAL MARKETS ADVISORY
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif text-white tracking-tight leading-tight">
            Public Capital Markets &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5EAD4] via-[#C5A059] to-[#DFBF7A] italic">
              Strategic Equity Solutions
            </span>
          </h1>

          <p className="text-base sm:text-lg font-light text-slate-300 max-w-3xl leading-relaxed">
            Guiding high-growth enterprises and promoters through public market listings, Qualified Institutional Placements (QIP), and strategic listed company acquisitions.
          </p>
        </div>
      </section>

      {/* Section 1: The 5 P's IPO Framework */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-bold text-[#9A7830] uppercase tracking-widest block mb-2">
              PROPRIETARY FRAMEWORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
              The IPO Framework (5 P&apos;s) &amp; End-to-End Support
            </h2>
            <p className="text-sm font-light text-slate-600 mt-2 leading-relaxed">
              We structure your journey to the capital markets through a disciplined 5-stage advisory process, coordinating with SEBI-registered merchant bankers and institutional desks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fivePs.map((p) => (
              <div 
                key={p.num}
                className="bg-white border border-[#E0D9CD] p-8 rounded-sm shadow-sm hover:border-[#C5A059] transition-all space-y-3"
              >
                <span className="font-mono text-xs font-bold text-[#9A7830] bg-[#FAF5EC] px-2.5 py-1 rounded border border-[#EADBBE]">
                  PHASE {p.num}
                </span>
                <h3 className="font-serif text-xl font-bold text-slate-900 mt-2">{p.title}</h3>
                <p className="text-xs font-light text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 2: Listed Company Acquisition */}
      <section className="py-20 bg-[#070F1E] text-white px-4 sm:px-6 lg:px-8 border-b border-[#14233D]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-bold text-[#C5A059] uppercase tracking-widest block mb-2">
              STRATEGIC M&amp;A
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white">
              Listed Company Acquisition &amp; Public Market Entry
            </h2>
            <p className="text-sm font-light text-slate-300 mt-2 leading-relaxed">
              Helping businesses pursue public market participation through acquisitions, reverse mergers, and strategic listed company takeovers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listedAcquisition.map((item) => (
              <div 
                key={item.num}
                className="p-6 bg-[#09152A] border border-[#162744] rounded-sm space-y-2 hover:border-[#C5A059]/60 transition-colors"
              >
                <div className="font-mono text-[11px] text-[#C5A059] font-bold">STEP {item.num}</div>
                <h3 className="font-serif text-base font-semibold text-white">{item.title}</h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#050C18] text-white px-4 sm:px-6 lg:px-8 border-b border-[#14233D]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-serif text-white">
              Planning a Capital Markets Transaction?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light">
              Connect with our Partners for a confidential assessment of your listing readiness or acquisition structure.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-8 py-4 bg-[#C5A059] text-[#050C18] text-xs font-bold uppercase tracking-[0.18em] rounded-sm hover:bg-[#D4B473] transition-colors shrink-0 shadow-lg"
          >
            Consult Capital Markets Team
          </Link>
        </div>
      </section>

    </div>
  );
}
