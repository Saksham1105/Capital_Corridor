import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  Building2, Factory, Stethoscope, Hotel, 
  SunMedium, Truck, Code, Layers, ArrowRight, 
  CheckCircle2, ShieldAlert, Cpu 
} from 'lucide-react';

export function IndustrySolutions() {
  const industries = [
    {
      name: "Real Estate & Construction",
      icon: Building2,
      desc: "Builder finance, last-mile construction funding, inventory monetization, LRD, and developer debt restructuring.",
      tags: ["Construction Finance", "LRD", "Land Debt"]
    },
    {
      name: "Infrastructure & EPC",
      icon: Layers,
      desc: "Long-term project finance, government tender funding, Bank Guarantees (BG), Letters of Credit (LC), and PPP debt.",
      tags: ["Tender Funding", "Bank Guarantees", "PPP Debt"]
    },
    {
      name: "Manufacturing & Heavy Engineering",
      icon: Factory,
      desc: "Machinery finance, working capital limits, supply chain discounting, export credit, and industrial expansion CapEx.",
      tags: ["CapEx Financing", "Supply Chain", "Export Bill"]
    },
    {
      name: "Healthcare & Education",
      icon: Stethoscope,
      desc: "Hospital infrastructure debt, medical equipment leasing, medical colleges, university campus funding & school franchises.",
      tags: ["Hospital Capex", "School Tie-Up", "Equipment Lease"]
    },
    {
      name: "Hospitality & Tourism",
      icon: Hotel,
      desc: "Hotel and resort development finance, operating capital, brand collaboration advisory, and distressed hotel revive debt.",
      tags: ["Resort Finance", "Brand Tie-up", "Hotel Turnaround"]
    },
    {
      name: "Warehousing & Logistics",
      icon: Truck,
      desc: "Industrial park financing, cold storage logistics funding, fleet equipment debt, and lease rental discounting.",
      tags: ["Industrial Parks", "Fleet Credit", "Storage LRD"]
    },
    {
      name: "Renewable Energy",
      icon: SunMedium,
      desc: "Solar, wind, and green energy project finance, government subsidy coordination, and non-recourse debt structures.",
      tags: ["Solar Farms", "Subsidies", "Project Debt"]
    },
    {
      name: "Technology & High-Growth SaaS",
      icon: Code,
      desc: "Venture debt, revenue-based financing, private credit structures, and growth equity advisory.",
      tags: ["Venture Debt", "Private Credit", "Growth Equity"]
    }
  ];

  const challengingScenarios = [
    {
      title: "Low CIBIL & Credit-Challenged Accounts",
      desc: "Re-evaluating underlying cash flows, collateral security, and business fundamentals to access non-traditional credit."
    },
    {
      title: "SMA-0, SMA-1, SMA-2 & Stressed Debt",
      desc: "Immediate liquidity injection, moratorium restructuring, tenure extension, and consortium debt alignment."
    },
    {
      title: "NPA Resolution & One-Time Settlement (OTS)",
      desc: "Structuring viable OTS proposals, negotiating haircuts with banks/ARCs, and arranging takeover funding."
    },
    {
      title: "Over-Leveraged Corporate Balance Sheets",
      desc: "Comprehensive debt consolidation, high-cost debt replacement, and structured mezzanine debt introduction."
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[#FBF9F5]">
      <SEO 
        title="Industry Solutions & Challenging Borrower Cases — Capital Corridor" 
        description="Explore Capital Corridor's specialized industry financing solutions and structured advisory for credit-challenged, SMA, NPA, and complex corporate situations."
        canonicalUrl="/industry-solutions"
      />

      {/* Header */}
      <section className="pt-36 pb-20 bg-[#050C18] text-white border-b border-[#14233D] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.06),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#091528] border border-[#C5A059]/40 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#C5A059]">
              SECTOR EXPERTISE &amp; COMPLEX CASES
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif text-white tracking-tight leading-tight">
            Industry Domains &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5EAD4] via-[#C5A059] to-[#DFBF7A] italic">
              Challenging Borrower Solutions
            </span>
          </h1>

          <p className="text-base sm:text-lg font-light text-slate-300 max-w-3xl leading-relaxed">
            Tailoring structured finance solutions to the distinct operating mechanics of major industries and resolving non-standard credit files.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div>
            <span className="font-mono text-xs font-bold text-[#9A7830] uppercase tracking-widest block mb-2">
              SECTOR PRACTICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
              Specialized Industry Financing
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <div 
                  key={i}
                  className="p-6 bg-white border border-[#E0D9CD] rounded-sm shadow-sm space-y-4 hover:border-[#C5A059] transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="h-10 w-10 bg-[#FAF8F5] border border-[#E5DFD3] rounded-sm text-[#9A7830] flex items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif text-base font-bold text-slate-900">{ind.name}</h3>
                    <p className="text-xs text-slate-600 font-light leading-relaxed">{ind.desc}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {ind.tags.map((t, idx) => (
                      <span key={idx} className="text-[10px] bg-[#FAF5EC] text-[#9A7830] px-2 py-0.5 rounded border border-[#EADBBE]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Challenging Cases Framework */}
      <section className="py-20 bg-[#070F1E] text-white px-4 sm:px-6 lg:px-8 border-b border-[#14233D]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-bold text-[#C5A059] uppercase tracking-widest block mb-2">
              SPECIAL SITUATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white">
              Challenging Borrower Files We Resolve
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-light mt-2 leading-relaxed">
              We specialize in advising on funding requirements that may not fit standard retail banking matrices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challengingScenarios.map((c, i) => (
              <div key={i} className="p-8 bg-[#09152A] border border-[#162744] rounded-sm space-y-3 hover:border-[#C5A059]/50 transition-colors">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#C5A059]">
                  <ShieldAlert className="h-4 w-4" />
                  <span>SCENARIO 0{i + 1}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-white">{c.title}</h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-6 bg-[#09162C] border border-[#1E3558] rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-xs text-slate-300 font-light max-w-2xl leading-relaxed">
              <strong className="text-white font-medium">Confidential Assessment:</strong> Share your file details with our leadership under non-disclosure terms for an honest viability review.
            </p>
            <Link
              to="/contact"
              className="px-6 py-3 bg-[#C5A059] text-[#050C18] text-xs font-bold uppercase tracking-[0.18em] rounded-sm hover:bg-[#D4B473] transition-colors shrink-0 shadow-md"
            >
              Consult on Your Situation
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
