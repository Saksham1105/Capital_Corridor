import { Link } from 'react-router-dom';
import { Shield, CheckCircle2, ArrowRight, Layers, Compass, Landmark } from 'lucide-react';

export function FirmOverview() {
  return (
    <section className="py-24 bg-[#FBF9F5] text-slate-900 border-b border-[#E7E1D7] relative overflow-hidden">
      
      {/* Background fine watermark */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-[#9A7830] text-[11px] font-bold tracking-[0.25em] uppercase mb-3">
            01 &bull; INSTITUTIONAL ETHOS & POSITIONING
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#081224] tracking-tight leading-tight">
            Bridging Capital Demand &amp; Institutional Capital Supply
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Editorial Statement */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-lg sm:text-xl font-serif italic text-slate-800 leading-relaxed border-l-2 border-[#C5A059] pl-6 py-1">
              &ldquo;We do more than facilitate funding — we advise, structure, and coordinate customised financial solutions that help businesses overcome complex capital hurdles and achieve sustainable enterprise value.&rdquo;
            </p>

            <p className="text-sm font-light text-slate-700 leading-relaxed">
              With over three decades of market presence, Capital Corridor operates at the intersection of corporate finance, investment banking advisory, and institutional credit. We assist corporates, MSMEs, infrastructure developers, and investors in navigating the evolving Indian financial architecture.
            </p>

            <p className="text-sm font-light text-slate-700 leading-relaxed">
              Unlike transactional brokerages, our engagements are anchored in deep financial modeling, risk assessment, and end-to-end execution. From formulating the initial Credit Monitoring Arrangement (CMA) to coordinating with consortium bankers and private debt funds, our partners remain actively involved at every stage.
            </p>

            <div className="pt-2">
              <Link 
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#9A7830] hover:text-[#081224] transition-colors group"
              >
                <span>Read Full Firm Heritage &amp; Vision</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Key Pillars of Difference */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div className="p-6 bg-white border border-[#E5DFD5] rounded-sm shadow-sm space-y-3">
              <div className="h-8 w-8 rounded-sm bg-[#0A1628] text-[#C5A059] flex items-center justify-center font-serif text-sm font-bold">
                30
              </div>
              <h3 className="font-serif text-base font-semibold text-slate-900">Three Decades of Experience</h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Founded on veteran capital markets and corporate lending experience, navigating multiple economic and credit cycles.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E5DFD5] rounded-sm shadow-sm space-y-3">
              <div className="h-8 w-8 rounded-sm bg-[#0A1628] text-[#C5A059] flex items-center justify-center font-serif text-sm font-bold">
                12
              </div>
              <h3 className="font-serif text-base font-semibold text-slate-900">Diversified Capital Ecosystem</h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Direct engagement with Public & Private Banks, NBFCs, AIFs, Private Credit Funds, ARCs, and Family Offices.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E5DFD5] rounded-sm shadow-sm space-y-3">
              <div className="h-8 w-8 rounded-sm bg-[#0A1628] text-[#C5A059] flex items-center justify-center font-serif text-sm font-bold">
                01
              </div>
              <h3 className="font-serif text-base font-semibold text-slate-900">Complex Case Specialization</h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Proven mastery in restructuring stressed loans, NPA resolution, OTS structuring, and non-standard collateral cases.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E5DFD5] rounded-sm shadow-sm space-y-3">
              <div className="h-8 w-8 rounded-sm bg-[#0A1628] text-[#C5A059] flex items-center justify-center font-serif text-sm font-bold">
                &infin;
              </div>
              <h3 className="font-serif text-base font-semibold text-slate-900">End-to-End Execution</h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Comprehensive support from financial assessment and DPR coordination to lender due diligence and sanction disbursement.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
