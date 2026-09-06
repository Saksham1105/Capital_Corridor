import { Link } from 'react-router-dom';
import { ArrowRight, AlertTriangle, ShieldCheck, CheckCircle2 } from 'lucide-react';

const complexScenarios = [
  {
    title: 'SMA-1 & SMA-2 Overdue Debt',
    description: 'Injecting timely liquidity and restructuring repayment schedules before accounts slip into non-performing classification.',
  },
  {
    title: 'NPA & Stressed Account Resolution',
    description: 'Formulating resolution plans, holding bank consortium negotiations, and arranging debt revival funding.',
  },
  {
    title: 'One-Time Settlement (OTS) Funding',
    description: 'Structuring OTS terms with lenders and arranging bridge finance or investor capital for full settlement.',
  },
  {
    title: 'Insolvency (IBC) & Resolution Support',
    description: 'Advisory and funding coordination for Resolution Applicants and stressed business buyouts.',
  },
];

export function ChallengingCases() {
  return (
    <section className="bg-[#050B14] py-20 lg:py-32 text-white relative border-t border-[#1E3356]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Positioning */}
          <div className="lg:col-span-5 pr-0 lg:pr-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#C5A059]" />
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-[#C5A059]">
                INDUSTRY &amp; SPECIAL SITUATIONS PRACTICE
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Advisory Built for <span className="italic text-[#C5A059]">Complex Industry Solutions.</span>
            </h2>

            <p className="text-slate-300 font-light text-sm sm:text-base leading-relaxed mb-6">
              Standard corporate lending advisors often struggle when debt situations become stressed or complex. Capital Corridor brings decades of specialized experience in working capital solutions across industries and restructuring SMA/NPA accounts.
            </p>

            <div className="p-4 bg-[#070E1C] border-l-2 border-[#C5A059] text-xs text-slate-400 font-light mb-8">
              <span className="font-bold text-white block mb-1">Confidential Partner Advisory:</span>
              All stressed asset and complex sector discussions are conducted with strict confidentiality directly between company promoters and our partners.
            </div>

            <Link
              to="/industry-solutions"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C5A059] text-[#070E1C] font-bold text-xs uppercase tracking-[0.18em] hover:bg-[#D4B473] transition-colors"
            >
              <span>Explore Industry Solutions</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right Column: 4 Cases List */}
          <div className="lg:col-span-7 bg-[#070E1C] border border-[#1E3356] p-8 rounded-sm space-y-6">
            {complexScenarios.map((item, idx) => (
              <div key={idx} className="pt-6 border-t border-[#1E3356] first:border-t-0 first:pt-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-serif text-lg font-bold text-[#C5A059]">0{idx + 1}.</span>
                  <h3 className="font-serif text-xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm font-light text-slate-400 leading-relaxed pl-8">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
