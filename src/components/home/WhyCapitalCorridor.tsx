import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const pillars = [
  {
    num: '01',
    title: 'Three Decades Market Heritage',
    desc: '30+ years of capital markets, stock broking, and corporate debt experience navigating diverse credit cycles in India.',
  },
  {
    num: '02',
    title: 'Independent Banking Network',
    desc: 'Active syndication capabilities across 25+ public sector banks, private commercial lenders, NBFCs, and private credit funds.',
  },
  {
    num: '03',
    title: 'Specialized Stressed Asset Depth',
    desc: 'Deep expertise in SMA account restructuring, NPA resolution, One-Time Settlement (OTS) structuring, and IBC coordination.',
  },
  {
    num: '04',
    title: 'Senior Partner Engagement',
    desc: 'Direct oversight by partners Rahul Mantri and Daksh Khandelwal on every client engagement.',
  },
  {
    num: '05',
    title: 'End-to-End Execution',
    desc: 'Complete transaction support from diagnostic and CMA/DPR preparation to credit committee presentation and disbursal.',
  },
  {
    num: '06',
    title: 'Unbiased Client-Centric Advisory',
    desc: 'Independent corporate advisory focused solely on securing optimal interest rates and credit structures for the client.',
  },
];

export function WhyCapitalCorridor() {
  return (
    <section className="bg-[#F8F6F0] py-20 lg:py-32 text-[#070E1C] relative border-t border-[#E2DCD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 border-b border-[#E2DCD0] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-[#C5A059]" />
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-[#C5A059]">
                STRATEGIC DIFFERENTIATION
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#070E1C] leading-tight">
              Why Corporate Clients Choose <span className="italic text-[#C5A059]">Capital Corridor.</span>
            </h2>
          </div>
          <p className="text-slate-600 font-light text-sm max-w-md">
            Built on integrity, solution-focused advisory, and three decades of financial market relationships across India.
          </p>
        </div>

        {/* Clean Editorial Grid (No Repeating Dark Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="pt-6 border-t border-[#E2DCD0]">
              <span className="font-serif text-xl font-bold text-[#C5A059] block mb-2">
                {pillar.num}.
              </span>
              <h3 className="font-serif text-xl font-bold text-[#070E1C] mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm font-light text-slate-700 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-16 p-8 bg-[#050B14] text-white rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6 border-l-4 border-[#C5A059]">
          <div>
            <p className="font-serif text-lg sm:text-xl font-bold text-white mb-1">
              Need a confidential diagnostic of your capital structure?
            </p>
            <p className="text-xs font-light text-slate-300">
              Speak directly with our partners to explore options for debt syndication or restructuring.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 bg-[#C5A059] text-[#070E1C] text-xs font-bold uppercase tracking-[0.18em] hover:bg-[#D4B473] transition-colors shrink-0"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </section>
  );
}
