import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export function ClosingCTAV4() {
  return (
    <section className="py-24 bg-[#040812] text-white border-b border-[#14233D] relative overflow-hidden">
      
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.08),transparent_65%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#091528] border border-[#C5A059]/40 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-semibold text-[#C5A059]">
            DIRECT PARTNER CONSULTATION
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-tight">
          Initiate a Confidential <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5EAD4] via-[#C5A059] to-[#DFBF7A] italic">
            Executive Financial Dialogue
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
          Whether structuring high-value debt syndication, planning an IPO, navigating stressed asset resolution, or requiring bank-grade documentation — engage directly with the firm's Partners.
        </p>

        {/* Dual Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-9 py-4 bg-[#C5A059] text-[#040812] text-xs font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-[#D4B36D] transition-all shadow-xl shadow-[#C5A059]/10 inline-flex items-center justify-center gap-2"
          >
            <span>Request Consultation</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <a
            href="https://wa.me/918003157877"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-[#091528] text-slate-200 text-xs font-semibold uppercase tracking-[0.2em] border border-[#1C3254] hover:border-[#C5A059]/70 hover:text-white transition-all rounded-sm inline-flex items-center justify-center gap-2"
          >
            <MessageCircle className="h-4 w-4 text-[#25D366]" />
            <span>WhatsApp Direct</span>
          </a>
        </div>

        {/* Quick Contact Footer Strip */}
        <div className="pt-8 border-t border-[#122038] flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400 font-light">
          <a href="tel:+919982222210" className="hover:text-[#C5A059] transition-colors">
            Rahul Mantri: <span className="text-white font-medium">+91 99822 22210</span>
          </a>
          <span className="hidden sm:inline text-slate-700">&bull;</span>
          <a href="tel:+918003157877" className="hover:text-[#C5A059] transition-colors">
            Daksh Khandelwal: <span className="text-white font-medium">+91 80031 57877</span>
          </a>
          <span className="hidden sm:inline text-slate-700">&bull;</span>
          <a href="mailto:contact@capitalcorridor.in" className="hover:text-[#C5A059] transition-colors">
            Email: <span className="text-white font-medium">contact@capitalcorridor.in</span>
          </a>
        </div>

      </div>
    </section>
  );
}
