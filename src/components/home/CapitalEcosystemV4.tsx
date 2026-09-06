import { Link } from 'react-router-dom';
import { 
  Building, Landmark, Briefcase, Globe, 
  Coins, LineChart, PieChart, ShieldCheck, ArrowRight 
} from 'lucide-react';

export function CapitalEcosystemV4() {
  const channels = [
    { title: "Public Sector Banks", desc: "Large consortium lending, term loans, working capital limits & priority sector lending." },
    { title: "Private Sector Banks", desc: "Fast-track structured credit, corporate loans, trade finance instruments & treasury lines." },
    { title: "NBFCs & HFCs", desc: "Flexible credit underwriting, LAP, developer construction finance & bridge debt." },
    { title: "Alternative Investment Funds (AIFs)", desc: "Category II & III funds providing growth debt, special situation capital & structured credit." },
    { title: "Private Credit Funds", desc: "Mezzanine debt, acquisition financing, holdco debt & bespoke structured liquidity." },
    { title: "Asset Reconstruction Companies (ARCs)", desc: "NPA debt resolution, stressed asset takeovers, debt acquisition & restructuring." },
    { title: "Private Equity (PE) Firms", desc: "Strategic equity investments, minority stakes, buyout capital & enterprise growth equity." },
    { title: "Venture Capital (VC) Funds", desc: "Series A through C growth financing for scalable tech and consumer enterprises." },
    { title: "Family Offices & HNIs", desc: "Discreet patient capital, bespoke mezzanine debt, and co-investment equity structures." },
    { title: "Institutional Investors", desc: "Sovereign wealth platforms, pension funds, and insurance credit desks." },
    { title: "Foreign Direct Investors", desc: "External Commercial Borrowings (ECB), FDI equity & cross-border debt facilities." },
    { title: "Empanelled Professionals", desc: "Coordinating with certified CAs, CSs, Insolvency Professionals (IPs) and Valuers." }
  ];

  return (
    <section className="py-24 bg-[#070F1E] text-white border-b border-[#14233D] relative overflow-hidden">
      
      {/* Background illumination */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-[#C5A059] text-[11px] font-bold tracking-[0.25em] uppercase mb-3">
            06 &bull; INSTITUTIONAL ECOSYSTEM
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            One Platform. 12+ Institutional Capital Sources.
          </h2>
          <p className="text-sm font-light text-slate-300 mt-4 leading-relaxed">
            Our extensive ecosystem enables us to access diverse capital sources, structure complex transactions, and deliver customized financial advisory across all stages of business maturity.
          </p>
        </div>

        {/* 12 Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {channels.map((c, idx) => (
            <div 
              key={idx}
              className="p-6 bg-[#09152A] border border-[#162947] rounded-sm hover:border-[#C5A059]/50 transition-all duration-300 space-y-2 group"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#C5A059] font-bold">
                  {idx + 1 < 10 ? `CH-0${idx + 1}` : `CH-${idx + 1}`}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]/60 group-hover:bg-[#C5A059]" />
              </div>
              <h3 className="font-serif text-sm font-semibold text-white group-hover:text-[#C5A059] transition-colors">
                {c.title}
              </h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Institutional Disclaimer Card */}
        <div className="mt-12 p-6 bg-[#0B182E] border border-[#1C3254] rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 text-[#C5A059] shrink-0 mt-0.5" />
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              <strong className="text-white font-medium">Empanelled &amp; Network Coordination:</strong> Capital Corridor works closely with credit committees, fund managers, and empanelled valuation partners to deliver seamless transaction appraisal and closing.
            </p>
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#C5A059] hover:underline shrink-0"
          >
            <span>Learn About Our Network</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
