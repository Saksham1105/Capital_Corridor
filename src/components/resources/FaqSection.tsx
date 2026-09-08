import { useState, useId } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQ_DATA, FAQ_CATEGORIES, FaqCategory, FaqItem } from '../../data/faqData';

export function FaqSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);
  const baseId = useId();

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const filteredFaqs = selectedCategory === 'All'
    ? FAQ_DATA
    : FAQ_DATA.filter((item) => item.category === selectedCategory);

  // Group FAQs by category when "All" is selected or when a specific category is active
  const categoriesToDisplay = selectedCategory === 'All'
    ? FAQ_CATEGORIES
    : [selectedCategory as FaqCategory];

  return (
    <section className="py-20 bg-[#FDFBF7] border-t border-[#EAE4D9]" id="faq">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center justify-center gap-2 text-[#C5A059] text-xs font-bold tracking-[0.25em] uppercase">
            <HelpCircle className="h-4 w-4" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#0A1628] tracking-tight leading-tight">
            Answers to Your Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            Explore answers to common questions about Capital Corridor, our advisory services, funding solutions, and how we work with clients.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-3" role="tablist" aria-label="FAQ Categories">
          <button
            type="button"
            role="tab"
            aria-selected={selectedCategory === 'All'}
            onClick={() => {
              setSelectedCategory('All');
              setOpenFaqId(null);
            }}
            className={`px-4 py-2 text-xs font-medium tracking-wider uppercase transition-all rounded-sm border ${
              selectedCategory === 'All'
                ? 'bg-[#0A1628] text-[#C5A059] border-[#0A1628] shadow-sm font-semibold'
                : 'bg-white text-slate-700 border-[#E5DFD5] hover:border-[#C5A059] hover:text-[#0A1628]'
            }`}
          >
            All Categories ({FAQ_DATA.length})
          </button>

          {FAQ_CATEGORIES.map((cat) => {
            const count = FAQ_DATA.filter((item) => item.category === cat).length;
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => {
                  setSelectedCategory(cat);
                  setOpenFaqId(null);
                }}
                className={`px-4 py-2 text-xs font-medium tracking-wider uppercase transition-all rounded-sm border ${
                  isSelected
                    ? 'bg-[#0A1628] text-[#C5A059] border-[#0A1628] shadow-sm font-semibold'
                    : 'bg-white text-slate-700 border-[#E5DFD5] hover:border-[#C5A059] hover:text-[#0A1628]'
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Accordions Grouped by Category */}
        <div className="space-y-12">
          {categoriesToDisplay.map((cat) => {
            const categoryFaqs = filteredFaqs.filter((item) => item.category === cat);
            if (categoryFaqs.length === 0) return null;

            return (
              <div key={cat} className="space-y-4">
                {selectedCategory === 'All' && (
                  <div className="flex items-center gap-3 pt-4 pb-2 border-b border-[#C5A059]/30">
                    <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                    <h3 className="text-xs uppercase font-bold tracking-[0.2em] text-[#C5A059]">
                      {cat}
                    </h3>
                  </div>
                )}

                <div className="divide-y divide-[#EAE4D9] border-t border-b border-[#EAE4D9]">
                  {categoryFaqs.map((faq) => {
                    const isOpen = openFaqId === faq.id;
                    const buttonId = `${baseId}-btn-${faq.id}`;
                    const panelId = `${baseId}-panel-${faq.id}`;

                    return (
                      <div
                        key={faq.id}
                        className={`transition-colors duration-200 ${
                          isOpen ? 'bg-[#F7F3EC]/60' : 'hover:bg-[#F9F6F0]'
                        }`}
                      >
                        <h4>
                          <button
                            id={buttonId}
                            type="button"
                            aria-expanded={isOpen}
                            aria-controls={panelId}
                            onClick={() => toggleFaq(faq.id)}
                            className="w-full py-5 px-3 sm:px-4 text-left flex items-start justify-between gap-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2"
                          >
                            <span className="text-base sm:text-lg font-serif font-semibold text-[#0A1628] group-hover:text-[#B8973E] transition-colors leading-snug">
                              {faq.question}
                            </span>
                            <span
                              className={`mt-1 flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-200 ${
                                isOpen
                                  ? 'bg-[#0A1628] text-[#C5A059] border-[#0A1628]'
                                  : 'border-[#D9D1C3] text-slate-500 group-hover:border-[#C5A059] group-hover:text-[#0A1628]'
                              }`}
                              aria-hidden="true"
                            >
                              {isOpen ? (
                                <Minus className="h-4 w-4" />
                              ) : (
                                <Plus className="h-4 w-4" />
                              )}
                            </span>
                          </button>
                        </h4>

                        <div
                          id={panelId}
                          role="region"
                          aria-labelledby={buttonId}
                          className={`grid transition-all duration-300 ease-in-out ${
                            isOpen
                              ? 'grid-rows-[1fr] opacity-100 pb-6 px-3 sm:px-4'
                              : 'grid-rows-[0fr] opacity-0 overflow-hidden'
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="text-sm sm:text-base font-light text-slate-700 leading-relaxed pt-1 space-y-3">
                              <p>{faq.answer}</p>
                              {faq.steps && (
                                <ol className="list-decimal pl-6 space-y-1.5 pt-2 text-slate-800 font-normal">
                                  {faq.steps.map((step, idx) => (
                                    <li key={idx} className="pl-1">
                                      {step}
                                    </li>
                                  ))}
                                </ol>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA After FAQ */}
        <div className="mt-20 p-8 sm:p-12 bg-[#050C18] border border-[#162744] text-white rounded-sm text-center relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.08),transparent_70%)] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#C5A059]">
              STILL HAVE QUESTIONS?
            </span>

            <h3 className="text-2xl sm:text-4xl font-serif text-white tracking-tight leading-tight">
              Let&apos;s Discuss Your Financial Requirements
            </h3>

            <p className="text-sm sm:text-base font-light text-slate-300 leading-relaxed max-w-xl mx-auto">
              Connect with Capital Corridor to discuss your funding, capital-raising, restructuring, or strategic financial requirements.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#C5A059] text-[#050C18] text-xs font-bold uppercase tracking-[0.18em] rounded-sm hover:bg-[#D4B473] transition-colors shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Talk to Our Team</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link
                to="/services"
                className="w-full sm:w-auto px-8 py-3.5 border border-[#C5A059]/60 text-[#C5A059] text-xs font-bold uppercase tracking-[0.18em] rounded-sm hover:bg-[#C5A059]/10 hover:border-[#C5A059] transition-colors flex items-center justify-center"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
