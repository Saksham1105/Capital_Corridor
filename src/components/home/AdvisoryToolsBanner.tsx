import { Link } from 'react-router-dom';
import { Calculator, BookOpen, ArrowRight, FileSpreadsheet, TrendingUp } from 'lucide-react';

export function AdvisoryToolsBanner() {
  return (
    <section className="py-20 bg-[#060D1A] text-white border-b border-[#14233D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Financial Tools & Calculators */}
          <div className="p-8 bg-[#09152A] border border-[#162744] rounded-sm flex flex-col justify-between hover:border-[#C5A059]/60 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="h-10 w-10 bg-[#0E1F3D] text-[#C5A059] flex items-center justify-center rounded-sm border border-[#1E3A65]">
                <Calculator className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C5A059]">
                  Institutional Modeling Tools
                </span>
                <h3 className="text-2xl font-serif font-bold text-white mt-1">
                  Financial Calculators &amp; Estimation Suites
                </h3>
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Estimate loan repayments, working capital requirements, Debt Service Coverage Ratios (DSCR), and lease rental cash flows.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#162744] flex items-center justify-between">
              <span className="text-[11px] text-slate-400 font-light">Interactive financial planning</span>
              <Link 
                to="/calculators"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#C5A059] group-hover:underline"
              >
                <span>Launch Calculators</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: Insights & Regulatory Frameworks */}
          <div className="p-8 bg-[#09152A] border border-[#162744] rounded-sm flex flex-col justify-between hover:border-[#C5A059]/60 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="h-10 w-10 bg-[#0E1F3D] text-[#C5A059] flex items-center justify-center rounded-sm border border-[#1E3A65]">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C5A059]">
                  Advisory Insights &amp; Briefings
                </span>
                <h3 className="text-2xl font-serif font-bold text-white mt-1">
                  Capital Markets &amp; Credit Whitepapers
                </h3>
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Read our perspectives on SME IPO readiness, SARFAESI resolution strategies, private credit trends, and CMA data structuring.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#162744] flex items-center justify-between">
              <span className="text-[11px] text-slate-400 font-light">Knowledge base for CXOs</span>
              <Link 
                to="/resources"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#C5A059] group-hover:underline"
              >
                <span>Read Perspectives</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
