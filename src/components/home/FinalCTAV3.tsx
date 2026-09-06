import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export function FinalCTAV3() {
  return (
    <section className="bg-[#050B14] py-20 lg:py-28 text-white relative border-t border-[#1E3356] overflow-hidden">
      
      {/* Background Subtle Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#C5A0590D_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#070E1C] border border-[#1E3356] p-8 sm:p-12 lg:p-16 rounded-sm shadow-2xl relative overflow-hidden text-center">
          
          {/* Subtle Watermark Monogram */}
          <span className="absolute -right-10 -bottom-10 font-serif text-[220px] font-bold text-white/[0.02] pointer-events-none select-none">
            CC
          </span>

          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C5A059] block mb-3">
            INITIATE AN ADVISORY MANDATE
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Initiate a Confidential <span className="italic text-[#C5A059]">Advisory Discussion.</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed mb-10">
            We welcome direct conversations regarding corporate term borrowing, working capital facilities, debt restructuring, or capital market entry with company promoters and CFOs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#C5A059] text-[#070E1C] text-xs sm:text-sm font-bold uppercase tracking-[0.18em] hover:bg-[#D4B473] transition-all inline-flex items-center gap-2 group shadow-lg"
            >
              <span>Schedule Strategic Discussion</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="px-7 py-4 border border-slate-700 hover:border-[#C5A059] text-slate-200 hover:text-white text-xs sm:text-sm uppercase font-medium tracking-[0.18em] transition-all bg-[#050B14]/80"
            >
              Explore 15 + Practice Areas
            </Link>
          </div>

          {/* Leadership Verified Quick Contact Bar */}
          <div className="pt-8 border-t border-[#1E3356] flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-xs font-light text-slate-400">
            <a href="tel:+919982222210" className="flex items-center gap-2 hover:text-[#C5A059] transition-colors">
              <Phone className="h-3.5 w-3.5 text-[#C5A059]" />
              <span>Rahul Mantri: +91 99822 22210</span>
            </a>
            <a href="tel:+918003157877" className="flex items-center gap-2 hover:text-[#C5A059] transition-colors">
              <Phone className="h-3.5 w-3.5 text-[#C5A059]" />
              <span>Daksh Khandelwal: +91 80031 57877</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-[#C5A059]" />
              <span>Ajmer, Rajasthan — 305001</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
