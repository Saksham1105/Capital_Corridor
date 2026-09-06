import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Landmark, TrendingUp, Scale, FileCheck, Layers, 
  ArrowRight, CheckCircle2, ChevronRight, Sparkles 
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { servicesData } from '../../data/servicesData';

export function CoreCapabilitiesV4() {
  const [activeTab, setActiveTab] = useState<string>("funding-loans");
  const currentPractice = servicesData.find(p => p.id === activeTab) || servicesData[0];

  const getPillarIcon = (id: string) => {
    switch (id) {
      case "funding-loans": return Landmark;
      case "financial-advisory": return TrendingUp;
      case "legal-advisory": return Scale;
      case "documentation-support": return FileCheck;
      default: return Layers;
    }
  };

  return (
    <section className="py-24 bg-[#060D1A] text-white border-b border-[#14233D] relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-[#C5A059] text-[11px] font-bold tracking-[0.25em] uppercase mb-3">
              02 &bull; ADVISORY PRACTICES &amp; CAPABILITIES
            </p>
            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
              Five Pillars of Institutional Advisory
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#C5A059] hover:text-[#E2C78E] transition-colors shrink-0"
          >
            <span>View Complete Service Directory</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Asymmetric Institutional Layout: Left Practice Navigator, Right Interactive Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Pillar Selector Tabs (Left Col: 5 cols) */}
          <div className="lg:col-span-4 space-y-2">
            {servicesData.map((practice) => {
              const isSelected = activeTab === practice.id;
              const Icon = getPillarIcon(practice.id);

              return (
                <button
                  key={practice.id}
                  onClick={() => setActiveTab(practice.id)}
                  className={cn(
                    "w-full text-left p-5 transition-all duration-300 rounded-sm border flex items-start gap-4 relative group",
                    isSelected
                      ? "bg-[#0C1A32] border-[#C5A059] shadow-xl shadow-[#0C1A32]/50"
                      : "bg-[#081224] border-[#152642] hover:bg-[#0A162B] hover:border-[#1E355A]"
                  )}
                >
                  <span className={cn(
                    "font-mono text-xs font-bold pt-0.5",
                    isSelected ? "text-[#C5A059]" : "text-slate-500"
                  )}>
                    {practice.pillarNum}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className={cn(
                      "font-serif text-base font-semibold leading-snug",
                      isSelected ? "text-white" : "text-slate-300 group-hover:text-white"
                    )}>
                      {practice.name}
                    </div>
                    <div className="text-[11px] text-slate-400 font-light line-clamp-1 mt-1">
                      {practice.tagline}
                    </div>
                  </div>

                  <ChevronRight className={cn(
                    "h-4 w-4 shrink-0 transition-transform mt-1",
                    isSelected ? "text-[#C5A059] translate-x-1" : "text-slate-600 group-hover:text-slate-400"
                  )} />

                  {isSelected && (
                    <div className="absolute left-0 top-2 bottom-2 w-1 bg-[#C5A059] rounded-r" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Practice Detail Canvas (Right Col: 8 cols) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPractice.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="bg-[#09152A] border border-[#1E3458] rounded-sm p-6 sm:p-10 shadow-2xl"
              >
                
                {/* Practice Heading */}
                <div className="border-b border-[#182B4B] pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[11px] font-mono font-bold text-[#C5A059] bg-[#C5A059]/10 px-2.5 py-0.5 rounded border border-[#C5A059]/30">
                        Pillar {currentPractice.pillarNum}
                      </span>
                      <span className="text-xs uppercase tracking-widest text-slate-400 font-medium">
                        {currentPractice.services.length} Structured Facilities
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif text-white">
                      {currentPractice.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-light mt-2 max-w-2xl leading-relaxed">
                      {currentPractice.summary}
                    </p>
                  </div>

                  <Link
                    to={`/services#${currentPractice.id}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#C5A059] text-[#060D1A] text-[11px] font-bold uppercase tracking-wider rounded-sm hover:bg-[#D4B473] transition-colors shrink-0 self-start sm:self-center shadow-md"
                  >
                    <span>Full Breakdown</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                {/* Sub-Services Grid with Independent Reset Numbering (01, 02, 03...) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {currentPractice.services.map((item) => (
                    <div 
                      key={item.num}
                      className="p-4 sm:p-5 bg-[#070F1E] border border-[#162744] hover:border-[#C5A059]/40 transition-colors rounded-sm space-y-2 group"
                    >
                      <div className="flex items-baseline gap-2">
                        <span className="font-mono text-xs font-bold text-[#C5A059]">
                          {item.num}
                        </span>
                        <h4 className="font-serif text-sm font-semibold text-white group-hover:text-[#C5A059] transition-colors">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-400 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bottom Practice Note */}
                <div className="mt-8 pt-6 border-t border-[#182B4B] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-[#C5A059]" />
                    <span>Every engagement is customized around cash flow, business fundamentals, and repayment runway.</span>
                  </div>
                  <Link 
                    to="/contact" 
                    className="text-[#C5A059] font-semibold hover:underline uppercase tracking-wider text-[11px]"
                  >
                    Consult on this practice &rarr;
                  </Link>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
