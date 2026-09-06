import { Link } from 'react-router-dom';
import { 
  AlertTriangle, CheckCircle2, ArrowRight, ShieldAlert, 
  Building2, Factory, Stethoscope, Hotel, SunMedium, 
  Truck, Code, Layers 
} from 'lucide-react';

export function ChallengingMandatesV4() {
  const situations = [
    { title: "SMA & Stressed Asset Accounts", desc: "Specialised recapitalisation, liquidity injection, and debt realignment for SMA-0, SMA-1, and SMA-2 accounts." },
    { title: "NPA Resolution & OTS Structuring", desc: "Expert advisory for One-Time Settlement (OTS) structuring, negotiation with banking consortiums, and ARC takeovers." },
    { title: "High-Leverage & Balance Sheet Strain", desc: "Debt consolidation, tenure extension, and capital restructuring for over-leveraged corporate balance sheets." },
    { title: "Stalled Real Estate & Infra Projects", desc: "Last-mile construction finance, inventory funding, and refinancing for complex property developments." },
    { title: "Cash Flow vs Collateral Constraints", desc: "Structuring cash-flow-based working capital, purchase order financing, and contract monetization." },
    { title: "Credit-Challenged & Irregular History", desc: "Rebuilding lender confidence through techno-economic viability (TEV) reports and institutional private credit." }
  ];

  const industries = [
    { name: "Real Estate & Construction", icon: Building2 },
    { name: "Infrastructure & EPC", icon: Layers },
    { name: "Manufacturing & Engineering", icon: Factory },
    { name: "Healthcare & Hospitals", icon: Stethoscope },
    { name: "Hospitality & Hotels", icon: Hotel },
    { name: "Warehousing & Logistics", icon: Truck },
    { name: "Renewable Energy", icon: SunMedium },
    { name: "Technology & SaaS", icon: Code }
  ];

  return (
    <section className="py-24 bg-[#FBF9F5] text-slate-900 border-b border-[#E5DFD5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-[#9A7830] text-[11px] font-bold tracking-[0.25em] uppercase mb-3">
              05 &bull; SPECIAL SITUATIONS &amp; COMPLEX CREDIT
            </p>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#081224] tracking-tight">
              Advising on Challenging &amp; Non-Standard Borrower Files
            </h2>
          </div>
          <Link
            to="/industry-solutions"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#9A7830] hover:text-[#081224] transition-colors shrink-0"
          >
            <span>View Case Frameworks</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 2-Column Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Complex Situations Handled */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-serif text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-2.5 h-0.5 bg-[#C5A059]" /> Complex Situations We Structure
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {situations.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-5 bg-white border border-[#E5DFD5] rounded-sm shadow-sm space-y-2 hover:border-[#C5A059] transition-colors"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900 font-serif">
                    <CheckCircle2 className="h-4 w-4 text-[#9A7830] shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 font-light leading-relaxed pl-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-5 bg-[#09152A] text-white border-l-4 border-[#C5A059] rounded-sm mt-6">
              <p className="text-xs font-light text-slate-300 leading-relaxed">
                <strong className="text-[#C5A059] font-medium">Independent Credit Evaluation:</strong> Every case is evaluated on underlying enterprise cash flows, project viability, promoter track record, and asset quality. We structure bank-grade proposals that satisfy strict credit committee guidelines.
              </p>
            </div>
          </div>

          {/* Right Column: Industry Domain Coverage */}
          <div className="lg:col-span-5 bg-white border border-[#E0D9CD] p-8 rounded-sm shadow-sm space-y-6">
            <div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">
                Industry Domain Expertise
              </h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Cross-sector structuring experience across India's premier industrial and commercial segments.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {industries.map((ind, idx) => {
                const Icon = ind.icon;
                return (
                  <div 
                    key={idx}
                    className="p-3.5 bg-[#F9F7F2] border border-[#EAE4D8] rounded-sm flex items-center gap-2.5 text-xs text-slate-800 font-medium hover:border-[#C5A059] transition-colors"
                  >
                    <Icon className="h-4 w-4 text-[#9A7830] shrink-0" />
                    <span className="text-[11px] leading-tight">{ind.name}</span>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-500 font-light">Need a confidential situation assessment?</span>
              <Link
                to="/contact"
                className="text-xs font-bold uppercase tracking-wider text-[#9A7830] hover:underline"
              >
                Inquire Directly &rarr;
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
