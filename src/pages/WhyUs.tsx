import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Network, Cpu, Users, 
  Workflow, ArrowRight, CheckCircle2, Lock, 
  TrendingUp, Landmark, Sparkles 
} from 'lucide-react';

export function WhyUs() {
  const differentiators = [
    {
      num: "01",
      title: "Execution-Driven Transaction Leadership",
      desc: "We do not merely generate reports or pass contacts. We lead the transaction from the initial credit appraisal and CMA data structuring through lender committee negotiations to final disbursement."
    },
    {
      num: "02",
      title: "One Platform, 12+ Institutional Channels",
      desc: "Direct access across public and private sector banks, NBFCs, Alternative Investment Funds (AIFs), private credit funds, family offices, and Asset Reconstruction Companies (ARCs)."
    },
    {
      num: "03",
      title: "Mastery in High-Complexity Cases",
      desc: "Specialised advisory for stressed assets, NPA accounts, SMA-1/2 funding, One-Time Settlements (OTS), debt restructuring, and non-standard collateral structuring."
    },
    {
      num: "04",
      title: "Three Decades of Market Heritage",
      desc: "Led by former CEO of a listed broking institution with 30+ years across Indian capital markets, debt syndication, corporate restructuring, and financial consultancy."
    },
    {
      num: "05",
      title: "Direct Partner Involvement",
      desc: "No delegation to inexperienced analysts. Partners Rahul Mantri and Daksh Khandelwal personally lead every engagement with founder-level responsiveness."
    },
    {
      num: "06",
      title: "Independent & Transparent Facilitation",
      desc: "Pure advisory model. We do not act as lenders or accept deposits. We maintain complete compliance with RBI, SEBI, and statutory regulatory frameworks."
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[#FBF9F5]">
      <SEO 
        title="Why Choose Capital Corridor — Strategic Value & Institutional Differentiators" 
        description="Learn why corporate borrowers, promoters, and developers trust Capital Corridor for high-value debt syndication, structured finance, and complex credit advisory."
        canonicalUrl="/why-us"
      />

      {/* Header */}
      <section className="pt-36 pb-20 bg-[#050C18] text-white border-b border-[#14233D] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.06),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#091528] border border-[#C5A059]/40 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#C5A059]">
              STRATEGIC VALUE PROPOSITION
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif text-white tracking-tight leading-tight">
            Why Promoters &amp; CXOs <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5EAD4] via-[#C5A059] to-[#DFBF7A] italic">
              Trust Capital Corridor
            </span>
          </h1>

          <p className="text-base sm:text-lg font-light text-slate-300 max-w-3xl leading-relaxed">
            In an increasingly fragmented credit landscape, we provide the strategic clarity, institutional relationships, and execution rigor required to fund critical enterprise milestones.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((d) => (
              <div 
                key={d.num}
                className="bg-white border border-[#E0D9CD] p-8 rounded-sm shadow-sm hover:border-[#C5A059] transition-all space-y-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#9A7830] bg-[#FAF5EC] px-2.5 py-1 rounded border border-[#EADBBE]">
                      {d.num}
                    </span>
                    <ShieldCheck className="h-4 w-4 text-[#9A7830]" />
                  </div>

                  <h3 className="font-serif text-lg font-bold text-slate-900 leading-snug">
                    {d.title}
                  </h3>

                  <p className="text-xs font-light text-slate-600 leading-relaxed mt-2">
                    {d.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center text-[10px] font-semibold text-[#9A7830] uppercase tracking-wider">
                  <CheckCircle2 className="h-3 w-3 mr-1.5" /> Institutional Standard
                </div>
              </div>
            ))}
          </div>

          {/* Value Comparison Banner */}
          <div className="p-8 sm:p-10 bg-[#070F1E] text-white border border-[#162744] rounded-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C5A059]">
                CORE DIFFERENTIATOR
              </span>
              <h3 className="text-2xl font-serif font-bold text-white">
                Complex, High-Value &amp; Challenging Credit Engineering
              </h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                By combining three decades of market relationships, deep financial analysis, and direct access to senior credit committees, we successfully structure funding requirements that other advisors fail to close.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                to="/contact"
                className="px-7 py-3.5 bg-[#C5A059] text-[#050C18] text-xs font-bold uppercase tracking-[0.18em] rounded-sm hover:bg-[#D4B473] transition-colors shadow-md"
              >
                Consult on Your Case
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
