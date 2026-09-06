import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function Manifesto() {
  return (
    <section className="bg-[#F8F6F0] py-20 lg:py-32 text-[#070E1C] relative border-b border-[#E2DCD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Boardroom Photo with Editorial Framing */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-sm overflow-hidden aspect-[4/3] bg-[#050B14]">
                <img
                  src="/images/executive_boardroom.png"
                  alt="Capital Corridor Executive Boardroom Advisory"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14]/70 via-transparent to-transparent" />
                
                {/* Embedded Quote Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#050B14]/92 text-white border-l-2 border-[#C5A059]">
                  <p className="font-serif italic text-sm sm:text-base text-[#C5A059]">
                    "We assist businesses in accessing debt, structuring credit terms, and executing financial mandates across banks and financial institutions."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Grounded Advisory Overview */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-6 h-px bg-[#C5A059]" />
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-[#C5A059]">
                  INSTITUTIONAL ADVISORY PRACTICE
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#070E1C] leading-[1.12] mb-6">
                Bridging Business Capital Requirements with <span className="italic text-[#C5A059]">Institutional Credit.</span>
              </h2>

              <p className="text-slate-700 text-base sm:text-lg font-light leading-relaxed mb-6">
                Capital Corridor is an independent corporate advisory and structured finance firm with over three decades of market experience. Headquartered in Ajmer, Rajasthan, with a PAN-India execution reach, we facilitate debt syndication, working capital optimization, and financial resolution across public and private sector banks, NBFCs, private credit funds, and ARCs.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'Independent advisory facilitation without lender bias',
                  'Expertise across standard, distressed, and NPA debt restructuring',
                  'Direct engagement with PSUs, Private Banks, NBFCs, and Credit Funds',
                  'Transaction coordination from initial diagnostic to final disbursal',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#C5A059] shrink-0 mt-0.5" />
                    <span className="text-sm font-light text-slate-800 leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-[0.2em] text-[#070E1C] border-b-2 border-[#C5A059] pb-1 hover:text-[#C5A059] transition-colors group"
                >
                  <span>Read Firm Profile & Heritage</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
