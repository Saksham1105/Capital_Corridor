import { motion } from 'motion/react';
import { SEO } from '../components/SEO';

export function CapitalMarkets() {
  return (
    <div className="flex flex-col w-full bg-[#FDFBF7]">
      <SEO 
        title="Capital Markets Advisory" 
        description="Strategic advisory for public and private equity market instruments, including IPOs."
        canonicalUrl="/capital-markets"
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
            <p className="text-[#C5A059] font-medium tracking-[0.2em] uppercase mb-6 text-xs">Capital Markets</p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-slate-900 mb-8 leading-tight tracking-tight">
              Strategic advisory for <span className="italic font-light text-slate-500">public & private equity.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            
            <div className="space-y-8">
              <h3 className="text-2xl font-serif text-slate-900 border-b border-slate-900 pb-4">Public Market Issuances</h3>
              <ul className="space-y-4 font-light text-slate-700">
                {["Initial Public Offering (IPO)", "Follow-on Public Offering (FPO)", "Rights Issue", "Bonus Issue", "Offer for Sale (OFS)"].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-4 border-t border-[#C5A059] mr-4"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-8">
              <h3 className="text-2xl font-serif text-slate-900 border-b border-slate-900 pb-4">Private Market Issuances</h3>
              <ul className="space-y-4 font-light text-slate-700">
                {["Qualified Institutional Placement (QIP)", "Private Placement", "Preferential Allotment", "Pre-IPO Placements"].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-4 border-t border-[#C5A059] mr-4"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-8">
              <h3 className="text-2xl font-serif text-slate-900 border-b border-slate-900 pb-4">Market Listing & Access</h3>
              <ul className="space-y-4 font-light text-slate-700">
                {["SME IPO", "Mainboard IPO", "Direct Listing"].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-4 border-t border-[#C5A059] mr-4"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-8">
              <h3 className="text-2xl font-serif text-slate-900 border-b border-slate-900 pb-4">Transaction Support Services</h3>
              <ul className="space-y-4 font-light text-slate-700">
                {["Block Placement Advisory", "IPO Transaction Coordination", "Capital Markets Documentation Coordination", "Investor & Institutional Coordination", "Coordination with SEBI-Registered Intermediaries", "Due Diligence Coordination"].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-4 border-t border-[#C5A059] mr-4"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 5 P's Framework */}
      <section className="py-24 lg:py-32 bg-[#0B1120] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-serif mb-6">IPO Framework (5 P's)</h2>
            <p className="text-slate-400 font-light text-lg max-w-2xl leading-relaxed">
              Our structured 5 P's Framework supports IPO readiness, facilitates coordination with SEBI-registered intermediaries, and assists clients throughout the capital-raising process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 border-t border-slate-800 pt-12">
            {[
              { title: "PLANNING", items: ["IPO readiness assessment", "Capital structure review", "Listing strategy"] },
              { title: "PREPARATION", items: ["Documentation coordination", "Due diligence coordination", "Corporate restructuring", "DRHP coordination"] },
              { title: "PROCESS", items: ["Regulatory submissions", "Intermediary coordination", "Timeline monitoring"] },
              { title: "PUBLIC OFFERING", items: ["Investor positioning", "Valuation advisory", "Public offering support"] },
              { title: "POST-IPO", items: ["Post-listing advisory", "Investor relations", "Future growth advisory"] }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <span className="block text-[#C5A059] font-serif text-3xl italic mb-6">0{idx + 1}</span>
                <h3 className="text-sm font-bold tracking-widest uppercase mb-6">{step.title}</h3>
                <ul className="space-y-3">
                  {step.items.map((item, i) => (
                    <li key={i} className="text-sm text-slate-400 font-light leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Listed Company Advisory */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-3xl lg:text-4xl font-serif text-slate-900 leading-tight mb-6">
                Listed Company <br/>
                <span className="italic font-light text-slate-500">Acquisition & Entry</span>
              </h2>
              <p className="text-slate-600 font-light leading-relaxed mb-8">
                Helping businesses pursue public markets through strategic listed company transactions.
              </p>
              <div className="p-6 bg-slate-50 border border-slate-200 text-xs font-light text-slate-500 leading-relaxed">
                <strong className="font-medium text-slate-700 block mb-2">Regulatory Note:</strong>
                Capital Corridor is not a SEBI-registered Investment Adviser, Merchant Banker, or Stockbroker. Any advisory relating to shares, securities, or IPOs is informational and consultative in nature. Where required, we coordinate with SEBI-registered intermediaries in accordance with applicable laws.
              </div>
            </div>
            
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                {[
                  "Listed Company Identification",
                  "Transaction Structuring & Capital Planning",
                  "Business Integration & Restructuring",
                  "Regulatory & Governance Coordination",
                  "Capital Markets & Investor Relations",
                  "Growth & Strategic Value Creation",
                  "End-to-End Advisory & Coordination"
                ].map((item, idx) => (
                  <div key={idx} className="border-b border-slate-200 pb-4">
                    <h3 className="text-sm text-slate-800 font-medium">{item}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
