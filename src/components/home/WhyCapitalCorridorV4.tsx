import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Network, Cpu, Users, 
  Workflow, ArrowRight, CheckCircle2, Lock 
} from 'lucide-react';

export function WhyCapitalCorridorV4() {
  const pillars = [
    {
      num: "01",
      title: "Execution-Focused Advisory",
      desc: "We provide true end-to-end transaction leadership — from initial financial modeling and CMA preparation to lender committee defense, sanction condition fulfillment, and disbursement.",
      icon: Workflow
    },
    {
      num: "02",
      title: "One Platform, 12+ Capital Channels",
      desc: "Direct access across the institutional capital spectrum: Public & Private Sector Banks, NBFCs, AIFs, Private Credit Funds, Family Offices, and Asset Reconstruction Companies.",
      icon: Network
    },
    {
      num: "03",
      title: "Specialists in High-Complexity Mandates",
      desc: "Decades of expertise in solving credit-challenged scenarios: NPA resolution, OTS structuring, SMA-1/2 recapitalisation, and complex multi-banking consortium alignment.",
      icon: Cpu
    },
    {
      num: "04",
      title: "Three Decades of Market Leadership",
      desc: "Founded on senior leadership with 30+ years in capital markets and corporate finance, having previously led a stock broking institution as CEO.",
      icon: ShieldCheck
    },
    {
      num: "05",
      title: "Direct Partner Involvement",
      desc: "No junior analyst hand-offs. Rahul Mantri and Daksh Khandelwal personally structure and lead every mandate, ensuring discretion and executive precision.",
      icon: Users
    },
    {
      num: "06",
      title: "Transparent & Independent Model",
      desc: "Pure advisory and facilitation firm. We act solely as strategic consultants and coordinators, aligning strictly with statutory frameworks and banking guidelines.",
      icon: Lock
    }
  ];

  return (
    <section className="py-24 bg-[#F5F2EA] text-slate-900 border-b border-[#E2DDD3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-[#9A7830] text-[11px] font-bold tracking-[0.25em] uppercase mb-3">
              03 &bull; STRATEGIC DIFFERENTIATORS
            </p>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#081224] tracking-tight">
              Why Institutional Borrowers &amp; Investors Choose Capital Corridor
            </h2>
          </div>
          <Link
            to="/why-us"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#9A7830] hover:text-[#081224] transition-colors shrink-0"
          >
            <span>Explore Value Proposition</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 6-Grid Institutional Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.num}
                className="bg-white border border-[#E0D9CD] p-8 rounded-sm shadow-sm hover:shadow-md hover:border-[#C5A059] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-[#9A7830] bg-[#FAF5EC] px-2.5 py-1 rounded border border-[#EADBBE]">
                      {pillar.num}
                    </span>
                    <Icon className="h-5 w-5 text-slate-400 group-hover:text-[#9A7830] transition-colors" />
                  </div>
                  
                  <h3 className="font-serif text-lg font-bold text-slate-900 mb-3 group-hover:text-[#0A1628] transition-colors">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-xs font-light text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-[11px] font-semibold text-[#9A7830] uppercase tracking-wider">
                  <CheckCircle2 className="h-3.5 w-3.5 mr-1.5" /> Founder-Led Execution
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
