import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Landmark, TrendingUp, Award, Building2 } from 'lucide-react';

export function HeroV4() {
  const metrics = [
    { value: '30+', label: 'Years Advisory Heritage', desc: 'Continuous market leadership' },
    { value: '500+', label: 'Total Clients & Mandates', desc: 'Across MSME to corporate scale' },
    { value: '10+', label: 'Core Industry Sectors', desc: 'Real estate, infra, manufacturing' },
    { value: '100%', label: 'Independent Advisory', desc: 'Non-banking facilitation model' }
  ];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center bg-[#050C18] text-white pt-28 pb-16 overflow-hidden border-b border-[#14233D]">
      
      {/* Cinematic Architectural Background Geometry */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle radial gradients */}
        <div className="absolute top-0 right-1/4 w-[700px] h-[500px] bg-[radial-gradient(circle,rgba(197,160,89,0.06),transparent_70%)]" />
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] bg-[radial-gradient(circle,rgba(30,51,86,0.25),transparent_70%)]" />
        
        {/* Fine Architectural Gridlines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#162744_1px,transparent_1px),linear-gradient(to_bottom,#162744_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-8">
          
          {/* Main Hero Narrative */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-8 space-y-6"
          >
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#091426] border border-[#C5A059]/40 rounded-full shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-semibold text-[#C5A059]">
                Institutional Advisory &bull; Three Decades of Heritage
              </span>
            </div>

            {/* Main Statement */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-serif text-white tracking-tight leading-[1.08]">
              Strategic Capital. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5EAD4] via-[#C5A059] to-[#DFBF7A] italic">
                Engineered Execution.
              </span>
            </h1>

            {/* Positioning Description */}
            <p className="text-base sm:text-lg text-slate-300 font-light max-w-2xl leading-relaxed">
              Capital Corridor advises corporates, developers, family offices, and entrepreneurs on high-value debt syndication, structured credit, capital markets access, and complex financial restructuring.
            </p>

            {/* Core Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C5A059] text-[#060D1A] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#D4B36D] transition-all duration-200 rounded-sm shadow-xl shadow-[#C5A059]/10 group"
              >
                <span>Explore Advisory Practices</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#0B172C] text-slate-200 text-xs font-semibold uppercase tracking-[0.2em] border border-[#1E3356] hover:border-[#C5A059]/70 hover:text-white transition-all duration-200 rounded-sm"
              >
                <span>Contact Us</span>
              </Link>
            </div>

          </motion.div>

          {/* Right Column: Institutional Trust Dossier Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-4"
          >
            <div className="bg-[#081222]/90 backdrop-blur-md border border-[#1E3458] rounded-sm p-6 sm:p-7 shadow-2xl relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#C5A059]/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between border-b border-[#1A2D4E] pb-4 mb-5">
                <div className="flex items-center gap-2 text-[#C5A059] text-[11px] uppercase tracking-[0.2em] font-semibold">
                  <ShieldCheck className="h-4 w-4" /> Partner-Led Practice
                </div>
                <span className="text-[9px] font-mono text-slate-500 uppercase">EST. 1990s</span>
              </div>

              <div className="space-y-4">
                <div className="border-l-2 border-[#C5A059] pl-3 py-1">
                  <div className="text-white font-serif text-sm font-semibold">One Platform. Multiple Capital Sources.</div>
                  <p className="text-[11px] text-slate-400 font-light mt-1 leading-snug">
                    Access to public and private sector banks, NBFCs, AIFs, private credit funds, ARCs, and family offices.
                  </p>
                </div>

                <div className="border-l-2 border-[#C5A059]/60 pl-3 py-1">
                  <div className="text-white font-serif text-sm font-semibold">Execution-Driven Advisory</div>
                  <p className="text-[11px] text-slate-400 font-light mt-1 leading-snug">
                    End-to-end management from credit appraisal and structuring to documentation and sanction fulfillment.
                  </p>
                </div>

                <div className="border-l-2 border-[#C5A059]/40 pl-3 py-1">
                  <div className="text-white font-serif text-sm font-semibold">High-Complexity Mastery</div>
                  <p className="text-[11px] text-slate-400 font-light mt-1 leading-snug">
                    Specialist capabilities in NPA resolution, OTS structuring, debt consolidation, and stressed asset revival.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-[#1A2D4E] flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-400">Headquarters</div>
                  <div className="text-xs text-white font-medium">Ajmer, Rajasthan</div>
                </div>
                <Link 
                  to="/about" 
                  className="text-[10px] uppercase font-bold text-[#C5A059] tracking-widest hover:underline flex items-center gap-1"
                >
                  <span>Firm Profile</span>
                  <span>&rarr;</span>
                </Link>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-16 pt-10 border-t border-[#15253F] grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((m, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
              className="space-y-1"
            >
              <div className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight flex items-baseline gap-1">
                <span className="text-[#C5A059]">{m.value}</span>
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">{m.label}</div>
              <div className="text-[11px] text-slate-400 font-light">{m.desc}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
