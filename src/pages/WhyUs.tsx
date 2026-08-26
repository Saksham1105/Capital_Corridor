import { motion } from 'motion/react';
import { SEO } from '../components/SEO';

export function WhyUs() {
  const valueProps = [
    {
      title: "Execution-Focused Advisory",
      desc: "We provide end-to-end advisory and execution support, from financial assessment and transaction structuring to documentation coordination, lender engagement, due diligence, and coordination throughout the transaction process until fund disbursement or resolution."
    },
    {
      title: "Finance & Investment Banking Expertise",
      desc: "Deep expertise in corporate finance, structured debt, project finance, private credit, capital raising, mergers & acquisitions (M&A), private equity, venture capital, and capital markets advisory."
    },
    {
      title: "Multiple Capital Sources",
      desc: "Access to a diversified ecosystem of public and private sector banks, NBFCs, Alternative Investment Funds (AIFs), private credit funds, family offices, institutional investors, Asset Reconstruction Companies (ARCs), and other capital providers."
    },
    {
      title: "Specialists in Complex Cases",
      desc: "Expertise in NPA funding, One-Time Settlements (OTS), debt restructuring, stressed asset resolution, turnaround financing, and other complex financing requirements requiring customised financial solutions."
    },
    {
      title: "Extensive Institutional Network",
      desc: "Strong relationships across the financial ecosystem facilitate efficient lender engagement, seamless transaction coordination, and access to specialised funding and investment opportunities."
    },
    {
      title: "Comprehensive Financial Solutions",
      desc: "Integrated advisory support across funding, capital structuring, documentation coordination, transaction management, and post-transaction advisory."
    },
    {
      title: "Strategic Financial Advisory",
      desc: "Tailored financial strategies designed to optimise capital structures, support business expansion, strengthen financial performance, and create long-term enterprise value."
    },
    {
      title: "Long-Term Business Partner",
      desc: "Committed to building enduring client relationships through ongoing financial advisory, refinancing support, growth capital planning, and strategic business guidance."
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[#FDFBF7]">
      <SEO 
        title="Why Choose Us" 
        description="Discover why clients choose Capital Corridor for execution-focused financial advisory."
        canonicalUrl="/why-us"
      />
      {/* Header */}
      <section className="pt-40 pb-20 lg:pt-48 lg:pb-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <p className="text-[#C5A059] font-medium tracking-[0.2em] uppercase mb-6 text-xs">Our Value Proposition</p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-slate-900 mb-8 leading-tight tracking-tight">
              We do more than <span className="italic font-light text-slate-500">facilitate funding.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Core Differentiator */}
      <section className="py-24 bg-[#0B1120] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="h-px w-12 bg-[#C5A059] mx-auto mb-10"></div>
          <p className="text-2xl sm:text-3xl lg:text-5xl font-serif leading-[1.3] font-light mb-12">
            "We specialise in advising on and structuring complex, high-value, and challenging funding requirements."
          </p>
          <p className="text-slate-400 max-w-3xl mx-auto font-light leading-relaxed text-lg">
            By combining deep industry expertise, a strong institutional network, and an execution-focused advisory approach, we help clients navigate complex financing situations and improve access to appropriate funding and capital solutions.
          </p>
        </div>
      </section>

      {/* Typographic List */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-0">
            {valueProps.map((item, idx) => (
              <div key={idx} className="group border-b border-slate-200 py-12 lg:py-16 flex flex-col lg:flex-row lg:items-start transition-colors">
                <div className="lg:w-1/3 pr-8 mb-6 lg:mb-0">
                  <span className="block text-[#C5A059] font-serif text-4xl lg:text-6xl italic mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                    0{idx + 1}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-serif text-slate-900 leading-tight">
                    {item.title}
                  </h3>
                </div>
                <div className="lg:w-2/3 lg:pl-16 lg:border-l border-slate-200 pt-2">
                  <p className="text-lg lg:text-xl text-slate-600 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
