import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SEO } from '../components/SEO';
import { Link, useLocation } from 'react-router-dom';
import { 
  Landmark, TrendingUp, Scale, FileCheck, Layers, 
  ArrowRight, CheckCircle2, Search, Sparkles, MapPin, 
  Phone, Mail, MessageCircle, ChevronDown, ChevronUp, ShieldCheck
} from 'lucide-react';
import { cn } from '../lib/utils';
import { servicesData } from '../data/servicesData';

export function Services() {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState<string>("funding-loans");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const matchedCategory = servicesData.find(cat => 
        cat.id === targetId || cat.services.some(srv => srv.id === targetId)
      );
      if (matchedCategory) {
        setActiveCategory(matchedCategory.id);
        const el = document.getElementById(targetId);
        if (el) {
          setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
        }
      }
    }
  }, [location]);

  const currentCat = servicesData.find(c => c.id === activeCategory) || servicesData[0];

  const filteredServices = searchQuery.trim()
    ? currentCat.services.filter(s => 
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.sections.some(sec => sec.items.some(it => it.toLowerCase().includes(searchQuery.toLowerCase())))
      )
    : currentCat.services;

  return (
    <div className="flex flex-col w-full bg-[#FBF9F5]">
      <SEO 
        title="Comprehensive Financial Services & Advisory Directory — Capital Corridor" 
        description="Explore Capital Corridor's 5 core service pillars: Funding & Loans, Financial Advisory & ECM, Legal & Insolvency, Documentation Support, and Extended Network Services."
        canonicalUrl="/services"
      />

      {/* Hero Header */}
      <section className="pt-36 pb-20 bg-[#050C18] text-white border-b border-[#14233D] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.06),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#091528] border border-[#C5A059]/40 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#C5A059]">
              COMPREHENSIVE ADVISORY DIRECTORY
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif text-white tracking-tight leading-tight">
            Institutional Advisory &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5EAD4] via-[#C5A059] to-[#DFBF7A] italic">
              Structured Capital Solutions
            </span>
          </h1>

          <p className="text-base sm:text-lg font-light text-slate-300 max-w-3xl leading-relaxed">
            Spanning five core practices from high-value debt syndication and Equity Capital Markets (ECM) to statutory insolvency advisory and bank-grade documentation.
          </p>

          {/* Quick Pillar Jump Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-6 border-t border-[#14233D]">
            {servicesData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSearchQuery("");
                }}
                className={cn(
                  "p-3 rounded-sm border text-left transition-all duration-200",
                  activeCategory === cat.id
                    ? "bg-[#0C1A32] border-[#C5A059] text-white shadow-lg"
                    : "bg-[#081224] border-[#152642] text-slate-400 hover:text-white hover:border-[#1E3A65]"
                )}
              >
                <div className="text-[10px] font-mono text-[#C5A059] font-bold">PILLAR {cat.pillarNum}</div>
                <div className="text-xs font-serif font-semibold mt-0.5 line-clamp-1">{cat.shortName}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Active Pillar Showcase Header */}
          <div className="bg-white border border-[#E0D9CD] p-8 sm:p-10 rounded-sm shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#9A7830] bg-[#FAF5EC] px-3 py-1 rounded border border-[#EADBBE]">
                  PILLAR {currentCat.pillarNum}
                </span>
                <span className="text-xs uppercase tracking-widest text-slate-500 font-medium">
                  {currentCat.services.length} Specialized Capabilities
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
                {currentCat.name}
              </h2>
              <p className="text-xs uppercase tracking-wider text-[#9A7830] font-semibold">
                {currentCat.tagline}
              </p>
              <p className="text-sm text-slate-600 font-light leading-relaxed">
                {currentCat.summary}
              </p>
            </div>

            {/* Search Filter within current pillar */}
            <div className="w-full lg:w-72 shrink-0">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-2">
                Filter Capabilities
              </label>
              <div className="relative">
                <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2.5 bg-[#FAF8F5] border border-[#DDD5C7] rounded-sm text-xs focus:outline-none focus:border-[#C5A059]"
                />
              </div>
            </div>
          </div>

          {/* Services Cards Grid with Strict Independent Reset Numbering (01, 02, 03...) */}
          <div className="space-y-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white border border-[#E0D9CD] rounded-sm p-8 sm:p-10 shadow-sm hover:border-[#C5A059] transition-all duration-300 scroll-mt-28"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Number & Title */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-bold text-white bg-[#0A1628] px-3 py-1 rounded-sm border border-[#162744]">
                        {service.num}
                      </span>
                      {service.locationNote && (
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-[#9A7830] bg-[#FAF5EC] px-2.5 py-0.5 rounded border border-[#EADBBE] flex items-center gap-1">
                          <MapPin className="h-3 w-3" /> {service.locationNote}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                      {service.desc}
                    </p>

                    <div className="pt-2">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#9A7830] hover:text-slate-900 transition-colors"
                      >
                        <span>Initiate Transaction Structuring</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Structured Sub-sections & Instruments */}
                  <div className="lg:col-span-7 bg-[#FAF8F4] border border-[#E8E1D5] p-6 sm:p-7 rounded-sm space-y-6">
                    {service.sections.map((section, secIdx) => (
                      <div key={secIdx} className="space-y-3">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                          {section.label}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {section.items.map((item, itemIdx) => (
                            <div 
                              key={itemIdx}
                              className="p-2.5 bg-white border border-[#E5DFD3] rounded-sm text-xs text-slate-700 font-light flex items-start gap-2 shadow-2xs"
                            >
                              <CheckCircle2 className="h-3.5 w-3.5 text-[#9A7830] shrink-0 mt-0.5" />
                              <span className="leading-snug">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            ))}

            {filteredServices.length === 0 && (
              <div className="p-12 text-center bg-white border border-[#E0D9CD] rounded-sm space-y-4">
                <p className="text-sm text-slate-600 font-light">
                  No service matching &ldquo;{searchQuery}&rdquo; was found in this pillar.
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="px-4 py-2 bg-[#0A1628] text-white text-xs uppercase font-bold tracking-wider rounded-sm"
                >
                  Clear Filter
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Direct Leadership CTA Banner */}
      <section className="py-16 bg-[#060D1A] text-white px-4 sm:px-6 lg:px-8 border-b border-[#14233D]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-serif text-white">
              Need a Customized Advisory Structure?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Every mandate is unique. Connect directly with our Partners to formulate a tailored financial, credit, or documentation roadmap.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Link
              to="/contact"
              className="px-7 py-3.5 bg-[#C5A059] text-[#060D1A] text-xs font-bold uppercase tracking-[0.18em] rounded-sm hover:bg-[#D4B473] transition-colors shadow-lg"
            >
              Request Consultation
            </Link>
            <a
              href="tel:+919982222210"
              className="px-6 py-3.5 bg-[#09152A] text-slate-200 text-xs font-semibold uppercase tracking-[0.18em] border border-[#1E3458] hover:border-[#C5A059] transition-colors rounded-sm flex items-center gap-2"
            >
              <Phone className="h-3.5 w-3.5 text-[#C5A059]" />
              <span>+91 99822 22210</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
