import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle, ArrowRight, ShieldCheck, Award } from 'lucide-react';

export function LeadershipShowcaseV4() {
  return (
    <section className="py-24 bg-[#FBF9F5] text-slate-900 border-b border-[#E2DDD3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-[#9A7830] text-[11px] font-bold tracking-[0.25em] uppercase mb-3">
              07 &bull; LEADERSHIP &amp; PARTNER ACCESS
            </p>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#081224] tracking-tight">
              Guided by Decades of Market Leadership
            </h2>
          </div>
          <Link
            to="/our-team"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#9A7830] hover:text-[#081224] transition-colors shrink-0"
          >
            <span>View Full Leadership Profiles</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 2 Partner Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Partner 1: Rahul Mantri */}
          <div className="bg-white border border-[#E0D9CD] p-8 sm:p-10 rounded-sm shadow-sm flex flex-col md:flex-row gap-8 items-start hover:border-[#C5A059] transition-all duration-300">
            <div className="w-full md:w-48 shrink-0">
              <div className="aspect-[4/5] rounded-sm overflow-hidden border border-[#E0D9CD] shadow-inner bg-[#0B1528]">
                <img 
                  src="/images/rahul-mantri.jpg" 
                  alt="Rahul Mantri - Partner at Capital Corridor"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-2xl font-serif font-bold text-slate-900">
                  Rahul Mantri
                </h3>
              </div>

              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Seasoned financial markets and corporate finance leader. Former CEO of a stock broking company. Specialises in structured debt, institutional lending, debt syndication, NPA resolution, OTS structuring, and complex corporate transactions.
              </p>

              <div className="pt-3 border-t border-slate-100 space-y-2 text-xs">
                <a 
                  href="tel:+919982222210" 
                  className="flex items-center gap-2 text-slate-700 hover:text-[#9A7830] transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-[#9A7830]" />
                  <span>+91 99822 22210</span>
                </a>
                <a 
                  href="mailto:rahull@capitalcorridor.in" 
                  className="flex items-center gap-2 text-slate-700 hover:text-[#9A7830] transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 text-[#9A7830]" />
                  <span>rahull@capitalcorridor.in</span>
                </a>
              </div>
            </div>
          </div>

          {/* Partner 2: Daksh Khandelwal */}
          <div className="bg-white border border-[#E0D9CD] p-8 sm:p-10 rounded-sm shadow-sm flex flex-col md:flex-row gap-8 items-start hover:border-[#C5A059] transition-all duration-300">
            <div className="w-full md:w-48 shrink-0">
              <div className="aspect-[4/5] rounded-sm overflow-hidden border border-[#E0D9CD] shadow-inner bg-[#0B1528]">
                <img 
                  src="/images/daksh-khandelwal.jpg" 
                  alt="Daksh Khandelwal - Partner at Capital Corridor" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-2xl font-serif font-bold text-slate-900">
                  Daksh Khandelwal
                </h3>
              </div>

              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Represents the next generation of institutional leadership. Leads strategic client relationships, institutional networking, debt syndication, project finance, working capital solutions, and market expansion across key regional and national hubs.
              </p>

              <div className="pt-3 border-t border-slate-100 space-y-2 text-xs">
                <a 
                  href="tel:+918003157877" 
                  className="flex items-center gap-2 text-slate-700 hover:text-[#9A7830] transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-[#9A7830]" />
                  <span>+91 80031 57877</span>
                </a>
                <a 
                  href="mailto:daksh@capitalcorridor.in" 
                  className="flex items-center gap-2 text-slate-700 hover:text-[#9A7830] transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 text-[#9A7830]" />
                  <span>daksh@capitalcorridor.in</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
