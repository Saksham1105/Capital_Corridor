import { useState, useRef } from 'react';
import { SEO } from '../components/SEO';
import { 
  Calculator, ChevronLeft, ChevronRight, ShieldAlert,
  Sliders, TrendingUp, DollarSign, Percent, BarChart3, Scale, Clock, Award
} from 'lucide-react';

// Import all 15 Calculators
import { EmiCalculator } from '../components/calculators/EmiCalculator';
import { RatioAnalysisCalculator } from '../components/calculators/RatioAnalysisCalculator';
import { MortgageCompareCalculator } from '../components/calculators/MortgageCompareCalculator';
import { WaccCalculator } from '../components/calculators/WaccCalculator';
import { CapmCalculator } from '../components/calculators/CapmCalculator';
import { YtmCalculator } from '../components/calculators/YtmCalculator';
import { InvestmentCalculator } from '../components/calculators/InvestmentCalculator';
import { CompoundInterestCalculator } from '../components/calculators/CompoundInterestCalculator';
import { HomeRefinanceCalculator } from '../components/calculators/HomeRefinanceCalculator';
import { CarLeaseVsFinanceCalculator } from '../components/calculators/CarLeaseVsFinanceCalculator';
import { RentOrBuyCalculator } from '../components/calculators/RentOrBuyCalculator';
import { CreditCardPayoffCalculator } from '../components/calculators/CreditCardPayoffCalculator';
import { CreditCardCompareCalculator } from '../components/calculators/CreditCardCompareCalculator';
import { DebtPayoffCalculator } from '../components/calculators/DebtPayoffCalculator';
import { DebtConsolidationCalculator } from '../components/calculators/DebtConsolidationCalculator';

export type ToolId = 
  | 'emi'
  | 'ratio-analysis'
  | 'mortgage-compare'
  | 'wacc'
  | 'capm'
  | 'ytm'
  | 'investment'
  | 'compound-interest'
  | 'home-refinance'
  | 'car-lease-finance'
  | 'rent-vs-buy'
  | 'credit-card-payoff'
  | 'credit-card-compare'
  | 'debt-payoff'
  | 'debt-consolidation';

interface ToolDef {
  id: ToolId;
  label: string;
  shortLabel: string;
  category: 'Debt & Loans' | 'Corporate Finance' | 'Wealth & Savings' | 'Credit Management';
}

const TOOLS: ToolDef[] = [
  { id: 'emi', label: '1. Loan EMI Calculator', shortLabel: '1. Loan EMI', category: 'Debt & Loans' },
  { id: 'ratio-analysis', label: '2. Ratio Analysis Calculator', shortLabel: '2. Ratio Analysis', category: 'Corporate Finance' },
  { id: 'mortgage-compare', label: '3. Mortgage Comparison', shortLabel: '3. Mortgage Compare', category: 'Debt & Loans' },
  { id: 'wacc', label: '4. WACC Calculator', shortLabel: '4. WACC', category: 'Corporate Finance' },
  { id: 'capm', label: '5. CAPM Calculator', shortLabel: '5. CAPM', category: 'Corporate Finance' },
  { id: 'ytm', label: '6. Yield to Maturity (YTM)', shortLabel: '6. Bond YTM', category: 'Corporate Finance' },
  { id: 'investment', label: '7. Investment & SIP Growth', shortLabel: '7. SIP & Investment', category: 'Wealth & Savings' },
  { id: 'compound-interest', label: '8. Compound Interest Calculator', shortLabel: '8. Compound Interest', category: 'Wealth & Savings' },
  { id: 'home-refinance', label: '9. Home Refinance & Transfer', shortLabel: '9. Refinance', category: 'Debt & Loans' },
  { id: 'car-lease-finance', label: '10. Car Lease vs. Loan', shortLabel: '10. Lease vs Loan', category: 'Debt & Loans' },
  { id: 'rent-vs-buy', label: '11. Rent vs. Buy House', shortLabel: '11. Rent vs Buy', category: 'Wealth & Savings' },
  { id: 'credit-card-payoff', label: '12. Credit Card Payoff', shortLabel: '12. Card Payoff', category: 'Credit Management' },
  { id: 'credit-card-compare', label: '13. Credit Card Comparison', shortLabel: '13. Card Compare', category: 'Credit Management' },
  { id: 'debt-payoff', label: '14. Multi-Debt Payoff', shortLabel: '14. Debt Avalanche/Snowball', category: 'Credit Management' },
  { id: 'debt-consolidation', label: '15. Debt Consolidation', shortLabel: '15. Consolidation', category: 'Credit Management' },
];

export function FinancialTools() {
  const [activeTab, setActiveTab] = useState<ToolId>('emi');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollNav = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const activeToolDef = TOOLS.find(t => t.id === activeTab) || TOOLS[0];

  return (
    <div className="flex flex-col w-full bg-[#FDFBF7]">
      <SEO 
        title="Capital Corridor Financial Tools — 15 Institutional-Grade Decision Calculators" 
        description="Access all 15 proprietary financial models: EMI, Ratio Analysis, Mortgage Compare, WACC, CAPM, Bond YTM, SIP Investment, Compound Interest, Refinance, Lease vs Finance, Rent vs Buy, Credit Card Payoff, and Debt Consolidation."
        canonicalUrl="/calculators"
      />

      {/* Hero Header */}
      <section className="pt-36 pb-16 bg-[#050C18] text-white border-b border-[#14233D] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.06),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#091528] border border-[#C5A059]/40 rounded-full">
            <Calculator className="h-3.5 w-3.5 text-[#C5A059]" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#C5A059]">
              PROPRIETARY FINANCIAL SUITE
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-tight">
            Financial Advisory &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5EAD4] via-[#C5A059] to-[#DFBF7A] italic">
              Decision Calculation Engines
            </span>
          </h1>

          <p className="text-sm sm:text-base font-light text-slate-300 max-w-3xl leading-relaxed">
            A comprehensive suite of 15 interactive financial calculators engineered for corporate borrowers, promoters, CFOs, real estate developers, and wealth managers.
          </p>
        </div>
      </section>

      {/* Sticky Single Horizontal Strip Navigation Bar */}
      <section className="sticky top-16 z-40 bg-[#050C18] border-b border-[#162744] shadow-md py-2.5 px-2 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          
          {/* Scroll Left Button */}
          <button
            onClick={() => scrollNav('left')}
            className="p-2 text-slate-400 hover:text-white hover:bg-[#0E1E38] rounded transition-colors shrink-0 hidden sm:flex items-center justify-center"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Horizontal Scrollable Strip (All 15 in one row) */}
          <div 
            ref={scrollContainerRef}
            className="flex items-center gap-1.5 overflow-x-auto whitespace-nowrap scrollbar-none scroll-smooth py-1 w-full"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {TOOLS.map((tool) => {
              const isActive = activeTab === tool.id;
              return (
                <button
                  key={tool.id}
                  onClick={() => setActiveTab(tool.id)}
                  className={`px-3.5 py-2 rounded text-[11px] font-bold uppercase tracking-wider transition-all duration-200 shrink-0 select-none ${
                    isActive
                      ? 'bg-[#C5A059] text-[#050C18] shadow-md shadow-[#C5A059]/20 font-semibold'
                      : 'bg-[#0A1628] text-slate-300 hover:text-white hover:bg-[#122340] border border-[#162744]'
                  }`}
                >
                  {tool.shortLabel}
                </button>
              );
            })}
          </div>

          {/* Scroll Right Button */}
          <button
            onClick={() => scrollNav('right')}
            className="p-2 text-slate-400 hover:text-white hover:bg-[#0E1E38] rounded transition-colors shrink-0 hidden sm:flex items-center justify-center"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

        </div>
      </section>

      {/* Active Calculator Work Area */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 min-h-[650px]">
        <div className="max-w-7xl mx-auto">
          
          {/* Category Tag Header */}
          <div className="mb-6 flex items-center justify-between pb-3 border-b border-[#E5DFD5]">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9A7830] bg-[#FAF5EC] px-2.5 py-1 rounded border border-[#EADBBE]">
                {activeToolDef.category}
              </span>
              <span className="text-xs text-slate-500 font-light hidden sm:inline">
                &bull; Tool {TOOLS.findIndex(t => t.id === activeTab) + 1} of 15
              </span>
            </div>
            <span className="text-xs font-serif font-bold text-slate-800">
              Capital Corridor Decision Engine
            </span>
          </div>

          {/* Render Current Active Calculator */}
          {activeTab === 'emi' && <EmiCalculator />}
          {activeTab === 'ratio-analysis' && <RatioAnalysisCalculator />}
          {activeTab === 'mortgage-compare' && <MortgageCompareCalculator />}
          {activeTab === 'wacc' && <WaccCalculator />}
          {activeTab === 'capm' && <CapmCalculator />}
          {activeTab === 'ytm' && <YtmCalculator />}
          {activeTab === 'investment' && <InvestmentCalculator />}
          {activeTab === 'compound-interest' && <CompoundInterestCalculator />}
          {activeTab === 'home-refinance' && <HomeRefinanceCalculator />}
          {activeTab === 'car-lease-finance' && <CarLeaseVsFinanceCalculator />}
          {activeTab === 'rent-vs-buy' && <RentOrBuyCalculator />}
          {activeTab === 'credit-card-payoff' && <CreditCardPayoffCalculator />}
          {activeTab === 'credit-card-compare' && <CreditCardCompareCalculator />}
          {activeTab === 'debt-payoff' && <DebtPayoffCalculator />}
          {activeTab === 'debt-consolidation' && <DebtConsolidationCalculator />}

          {/* Institutional Compliance Disclaimer */}
          <div className="mt-14 p-6 bg-[#FAF5EC] border border-[#E8DFC8] text-slate-700 text-xs font-light rounded-sm flex items-start gap-3.5 shadow-sm">
            <ShieldAlert className="h-5 w-5 text-[#9A7830] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#6D531D] uppercase tracking-wider block mb-1">
                Institutional Financial Modeling Disclaimer
              </span>
              <p className="leading-relaxed">
                Calculations provided by Capital Corridor Financial Tools are intended strictly for preliminary scenario analysis and computational modeling. They do not constitute formal lending sanctions, tax advisory, credit commitments, or binding investment terms. Formal corporate funding terms, applicable interest rate margins, documentation prerequisites, and facility sanction limits are determined upon institutional credit underwriting and statutory due diligence.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
