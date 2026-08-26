import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export function OurProcess() {
  const steps = [
    {
      title: "Understanding Your Requirements",
      desc: "We understand your business profile, funding requirements, financial position, growth plans, and strategic objectives."
    },
    {
      title: "Financial Evaluation",
      desc: "We assess cash flows, existing liabilities, repayment capacity, asset profile, financial position, and overall business viability to evaluate suitable financing options."
    },
    {
      title: "Solution Structuring",
      desc: "Based on your specific requirements, we provide advisory and structuring support to develop an appropriate funding strategy and financing structure aligned with the requirements of prospective lenders, investors, or other capital providers."
    },
    {
      title: "Documentation Coordination",
      desc: "We coordinate the preparation of lender-ready and investor-ready documentation, including financial statements, project reports, CMA data, credit proposals, business plans, and other transaction documents, through qualified professionals, wherever required."
    },
    {
      title: "Lender & Investor Mapping",
      desc: "Leveraging our network of banks, NBFCs, financial institutions, Alternative Investment Funds (AIFs), private credit funds, family offices, institutional investors, and other capital providers, we identify and engage with the most suitable funding partners."
    },
    {
      title: "Transaction Coordination & Due Diligence",
      desc: "We coordinate with lenders, investors, and other stakeholders throughout the credit appraisal, due diligence, documentation, negotiation, and approval processes."
    },
    {
      title: "Documentation & Funding Coordination",
      desc: "Following the issuance of approvals or sanctions, we coordinate documentation, fulfilment of sanction conditions, execution of transaction documents, and facilitate the funding process through the relevant financial institution or capital provider."
    },
    {
      title: "Ongoing Strategic Support",
      desc: "Our relationship extends beyond funding through ongoing strategic advisory, refinancing support, capital structure optimisation, expansion funding advisory, debt restructuring advisory, and long-term financial planning."
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[#FDFBF7]">
      <SEO 
        title="Our Process" 
        description="Our structured, transparent, and execution-focused approach to financial advisory."
        canonicalUrl="/our-process"
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
            <p className="text-[#C5A059] font-medium tracking-[0.2em] uppercase mb-6 text-xs">Methodology</p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-slate-900 mb-8 leading-tight tracking-tight">
              An institutional <span className="italic font-light text-slate-500">execution process.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Editorial Timeline */}
      <section className="py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-1/2"></div>
            
            <div className="space-y-16 lg:space-y-24">
              {steps.map((step, idx) => (
                <div key={idx} className="relative flex flex-col md:flex-row items-start md:justify-between group">
                  
                  {/* Marker */}
                  <div className="absolute left-0 md:left-1/2 flex items-center justify-center w-14 h-14 bg-[#FDFBF7] md:-translate-x-1/2 z-10 border border-slate-200 rounded-full group-hover:border-[#C5A059] transition-colors">
                    <span className="font-serif text-slate-900 italic">0{idx + 1}</span>
                  </div>
                  
                  {/* Content - Alternating Sides */}
                  <div className={`ml-20 md:ml-0 md:w-[calc(50%-4rem)] pt-2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:order-last md:pl-12 md:text-left'}`}>
                    <h3 className="text-xl sm:text-2xl font-serif text-slate-900 mb-4">{step.title}</h3>
                    <p className="text-slate-600 font-light leading-relaxed">{step.desc}</p>
                  </div>
                  
                  {/* Empty spacer for flex grid on desktop */}
                  <div className="hidden md:block md:w-[calc(50%-4rem)]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0B1120] text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-serif mb-8">Ready to begin?</h2>
          <Link to="/contact" className="inline-flex justify-center items-center px-10 py-4 bg-[#C5A059] text-white text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-[#0B1120] transition-colors">
            Initiate Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
