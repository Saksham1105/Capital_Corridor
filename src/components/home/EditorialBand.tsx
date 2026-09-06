import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function EditorialBand() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#050B14] text-white overflow-hidden border-t border-[#1E3356]">
      {/* Background Image with Dark Gradient Tint */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src="/images/executive_boardroom.png"
          alt="Capital Corridor Advisory"
          className="w-full h-full object-cover object-center grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B14] via-[#050B14]/90 to-[#050B14]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-[#C5A059] block mb-4">
          CLIENT-FOCUSED FINANCIAL ADVISORY
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6">
          "Three Decades of Financial Advisory — Built on Execution, Confidentiality, and Institutional Trust."
        </h2>

        <p className="text-slate-300 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed mb-8">
          Whether you are evaluating corporate term borrowing, working capital optimization, debt restructuring, or capital market entry — our partners are available for a confidential discussion.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A059] text-[#070E1C] font-bold text-xs sm:text-sm uppercase tracking-[0.18em] hover:bg-[#D4B473] transition-colors"
        >
          <span>Initiate a Confidential Discussion</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
