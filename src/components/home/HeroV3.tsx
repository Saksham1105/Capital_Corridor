import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Logo } from '../Logo';

export function HeroV3() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between bg-[#040812] text-white overflow-hidden pt-28 pb-10 lg:pt-32 lg:pb-12 border-b border-[#1A2638]">
      {/* Right Column Background Image (Executive Penthouse Boardroom overlooking City Skyline at Dusk) */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[48%] pointer-events-none z-0 hidden lg:block overflow-hidden">
        {/* Real Penthouse Executive Boardroom Background Image */}
        <img 
          src="/images/boardroom_hero.png" 
          alt="Executive Boardroom" 
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.82] contrast-[1.08]"
        />
        
        {/* Dark Navy Blending Gradients for Superior Contrast & Seamless Integration */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040812] via-[#040812]/75 to-transparent w-2/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040812] via-transparent to-[#040812]/50 h-full" />
        <div className="absolute inset-0 bg-[#040812]/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Content Anchor (~52% Width) */}
          <div className="lg:col-span-7 max-w-3xl">
            
            {/* Gold Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-px bg-[#C5A059]" />
              <span className="text-[#C5A059] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em]">
                CORPORATE ADVISORY &amp; STRUCTURED FINANCE
              </span>
            </motion.div>

            {/* Main High-Contrast Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[4.15rem] font-bold leading-[1.08] tracking-tight mb-6 text-white"
            >
              Syndicating<br />
              Corporate Capital.<br />
              <span className="italic font-normal text-[#C5A059] block mt-1">
                Restructuring Complex<br />
                Debt.
              </span>
            </motion.h1>

            {/* Grounded Description Copy */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-xl mb-9"
            >
              Over three decades of debt syndication, structured credit, investment banking advisory, and stressed asset resolution — supporting businesses, real estate developers, and promoters across India.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-between gap-4 px-7 py-4 bg-[#C5A059] text-[#040812] font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#D4B473] transition-all shadow-md group min-w-[220px]"
              >
                <span>INITIATE ADVISORY DISCUSSION</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-between gap-4 px-7 py-4 border border-slate-700/80 hover:border-[#C5A059] text-white font-medium text-xs uppercase tracking-[0.2em] transition-all bg-[#08101F]/80 min-w-[220px] group"
              >
                <span>EXPLORE PRACTICE PORTFOLIO</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#C5A059] group-hover:translate-x-1 transition-all" />
              </Link>
            </motion.div>

          </div>

          {/* Right Column: Executive Visual & Approved Logo Brand Centerpiece (~48% Width) */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-end relative min-h-[380px] lg:min-h-[440px] px-2 sm:px-4">
            
            {/* Executive Container for Logo & Vertical Keywords */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 flex flex-col items-center justify-center text-center p-6 sm:p-8 max-w-[340px] w-full rounded-lg bg-[#040812]/40 backdrop-blur-[2px] border border-white/5"
            >
              {/* Soft Ambient Radial Backdrop for Contrast */}
              <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.15)_0%,transparent_70%)] pointer-events-none filter blur-xl" />

              {/* Render Approved Logo Vector Brand Artwork */}
              <Logo variant="dark" size="lg" showSubtitle={true} />

              {/* Vertical Messaging Block Beside Logo */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-center gap-6 text-[#C5A059]/90 text-[10px] font-semibold tracking-[0.28em] uppercase">
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#C5A059]/60 to-transparent" />
                <div className="flex gap-4">
                  <span>CAPITAL</span>
                  <span>•</span>
                  <span>STRATEGY</span>
                  <span>•</span>
                  <span>SOLUTIONS</span>
                  <span>•</span>
                  <span>GROWTH</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
