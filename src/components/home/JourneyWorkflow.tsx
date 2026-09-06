import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const workflowSteps = [
  {
    step: '01',
    title: 'Financial Diagnostic & Need Structuring',
    desc: 'In-depth assessment of business financial statements, debt service capacity, collateral pool, and specific capital requirements.',
  },
  {
    step: '02',
    title: 'Lender Selection & Information Memorandum',
    desc: 'Formulating the credit proposal, CMA data, and DPR, then identifying appropriate banking partners and private credit institutions.',
  },
  {
    step: '03',
    title: 'Credit Committee & Terms Negotiation',
    desc: 'Active engagement with bank credit committees, risk teams, and sanction authorities to negotiate interest rates, covenants, and collateral terms.',
  },
  {
    step: '04',
    title: 'Sanction, Documentation & Disbursal',
    desc: 'Overseeing legal documentation, compliance checks, security creation, and final disbursal coordination.',
  },
];

export function JourneyWorkflow() {
  return (
    <section className="bg-[#050B14] py-20 lg:py-32 text-white relative border-t border-[#1E3356]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 border-b border-[#1E3356] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-[#C5A059]" />
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-[#C5A059]">
                OUR ADVISORY PROCESS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              From Initial Requirement to <span className="italic text-[#C5A059]">Financial Close.</span>
            </h2>
          </div>
          <p className="text-slate-400 font-light text-sm max-w-md">
            A structured, transparent four-phase execution methodology ensuring complete clarity at every stage of the debt syndication cycle.
          </p>
        </div>

        {/* Clean Editorial Numbered Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workflowSteps.map((s, idx) => (
            <div
              key={idx}
              className="pt-6 border-t border-[#1E3356] flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-3xl font-bold text-[#C5A059] block mb-3">
                  {s.step}
                </span>
                <h3 className="font-serif text-xl font-bold text-white mb-3">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm font-light text-slate-400 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-[#1E3356] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-[#C5A059]" />
            <span>End-to-end facilitation support until final disbursal</span>
          </div>
          <Link
            to="/about#how-our-service-works"
            className="inline-flex items-center gap-2 font-bold uppercase tracking-[0.18em] text-[#C5A059] hover:underline"
          >
            <span>Learn More About Our Process</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
