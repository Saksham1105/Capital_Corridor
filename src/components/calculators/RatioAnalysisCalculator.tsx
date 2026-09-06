import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { calculateRatioAnalysis, RatioAnalysisInputs } from '../../utils/calculatorMath';

export function RatioAnalysisCalculator() {
  const [inputs, setInputs] = useState<RatioAnalysisInputs>({
    revenue: 100000000,
    cogs: 65000000,
    operatingExpenses: 15000000,
    ebit: 20000000,
    interestExpense: 5000000,
    netIncome: 11250000,
    currentAssets: 45000000,
    inventory: 15000000,
    cash: 8000000,
    currentLiabilities: 25000000,
    totalDebt: 35000000,
    totalEquity: 50000000,
    totalAssets: 85000000
  });

  const res = calculateRatioAnalysis(inputs);

  const handleReset = () => {
    setInputs({
      revenue: 100000000,
      cogs: 65000000,
      operatingExpenses: 15000000,
      ebit: 20000000,
      interestExpense: 5000000,
      netIncome: 11250000,
      currentAssets: 45000000,
      inventory: 15000000,
      cash: 8000000,
      currentLiabilities: 25000000,
      totalDebt: 35000000,
      totalEquity: 50000000,
      totalAssets: 85000000
    });
  };

  const updateField = (field: keyof RatioAnalysisInputs, val: number) => {
    setInputs((prev) => ({ ...prev, [field]: Math.max(0, val) }));
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Input Card */}
        <div className="lg:col-span-6 p-8 bg-white border border-[#E0D9CD] rounded-sm shadow-sm space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-[#EFECE6]">
            <div>
              <h2 className="text-xl font-serif font-bold text-slate-900">2. Ratio Analysis Calculator</h2>
              <p className="text-xs text-slate-500 font-light mt-0.5">Corporate liquidity, profitability & solvency metrics</p>
            </div>
            <button
              onClick={handleReset}
              className="text-xs font-semibold text-slate-500 hover:text-[#9A7830] flex items-center gap-1.5 transition-colors px-2.5 py-1 rounded bg-[#FAF8F5] border border-[#E0D9CD]"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Reset
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Annual Revenue (₹)</label>
              <input
                type="number"
                value={inputs.revenue}
                onChange={(e) => updateField('revenue', Number(e.target.value))}
                className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded text-xs font-mono focus:outline-none focus:border-[#C5A059]"
              />
            </div>
            <div>
              <label className="font-semibold text-slate-700 block mb-1">COGS (₹)</label>
              <input
                type="number"
                value={inputs.cogs}
                onChange={(e) => updateField('cogs', Number(e.target.value))}
                className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded text-xs font-mono focus:outline-none focus:border-[#C5A059]"
              />
            </div>
            <div>
              <label className="font-semibold text-slate-700 block mb-1">EBIT / Operating Profit (₹)</label>
              <input
                type="number"
                value={inputs.ebit}
                onChange={(e) => updateField('ebit', Number(e.target.value))}
                className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded text-xs font-mono focus:outline-none focus:border-[#C5A059]"
              />
            </div>
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Interest Expense (₹)</label>
              <input
                type="number"
                value={inputs.interestExpense}
                onChange={(e) => updateField('interestExpense', Number(e.target.value))}
                className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded text-xs font-mono focus:outline-none focus:border-[#C5A059]"
              />
            </div>
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Net Profit / PAT (₹)</label>
              <input
                type="number"
                value={inputs.netIncome}
                onChange={(e) => updateField('netIncome', Number(e.target.value))}
                className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded text-xs font-mono focus:outline-none focus:border-[#C5A059]"
              />
            </div>
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Current Assets (₹)</label>
              <input
                type="number"
                value={inputs.currentAssets}
                onChange={(e) => updateField('currentAssets', Number(e.target.value))}
                className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded text-xs font-mono focus:outline-none focus:border-[#C5A059]"
              />
            </div>
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Inventory (₹)</label>
              <input
                type="number"
                value={inputs.inventory}
                onChange={(e) => updateField('inventory', Number(e.target.value))}
                className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded text-xs font-mono focus:outline-none focus:border-[#C5A059]"
              />
            </div>
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Current Liabilities (₹)</label>
              <input
                type="number"
                value={inputs.currentLiabilities}
                onChange={(e) => updateField('currentLiabilities', Number(e.target.value))}
                className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded text-xs font-mono focus:outline-none focus:border-[#C5A059]"
              />
            </div>
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Total Debt (₹)</label>
              <input
                type="number"
                value={inputs.totalDebt}
                onChange={(e) => updateField('totalDebt', Number(e.target.value))}
                className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded text-xs font-mono focus:outline-none focus:border-[#C5A059]"
              />
            </div>
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Total Net Worth / Equity (₹)</label>
              <input
                type="number"
                value={inputs.totalEquity}
                onChange={(e) => updateField('totalEquity', Number(e.target.value))}
                className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded text-xs font-mono focus:outline-none focus:border-[#C5A059]"
              />
            </div>
          </div>
        </div>

        {/* Result Dashboard */}
        <div className="lg:col-span-6 p-8 bg-[#050C18] text-white border border-[#14233D] rounded-sm shadow-md space-y-6">
          <div className="flex justify-between items-center pb-3 border-b border-[#14233D]">
            <span className="text-[#C5A059] text-[10px] font-bold tracking-[0.25em] uppercase">
              FINANCIAL HEALTH SCORECARD
            </span>
          </div>

          {/* Liquidity Ratios */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Liquidity Ratios</h4>
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 bg-[#091528] border border-[#162744] rounded text-center">
                <span className="text-[10px] text-slate-400 block">Current Ratio</span>
                <span className="font-serif text-lg font-bold text-white">{res.currentRatio}x</span>
                <span className={`text-[9px] block ${res.currentRatio >= 1.33 ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {res.currentRatio >= 1.33 ? '● Benchmark Met' : '▲ Below 1.33'}
                </span>
              </div>
              <div className="p-3 bg-[#091528] border border-[#162744] rounded text-center">
                <span className="text-[10px] text-slate-400 block">Quick Ratio</span>
                <span className="font-serif text-lg font-bold text-white">{res.quickRatio}x</span>
                <span className="text-[9px] text-slate-400 block">Acid Test</span>
              </div>
              <div className="p-3 bg-[#091528] border border-[#162744] rounded text-center">
                <span className="text-[10px] text-slate-400 block">Cash Ratio</span>
                <span className="font-serif text-lg font-bold text-white">{res.cashRatio}x</span>
                <span className="text-[9px] text-slate-400 block">Liquid Cash</span>
              </div>
            </div>
          </div>

          {/* Profitability Ratios */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Profitability &amp; Returns</h4>
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 bg-[#091528] border border-[#162744] rounded text-center">
                <span className="text-[10px] text-slate-400 block">Gross Margin</span>
                <span className="font-serif text-lg font-bold text-[#C5A059]">{res.grossMargin}%</span>
              </div>
              <div className="p-3 bg-[#091528] border border-[#162744] rounded text-center">
                <span className="text-[10px] text-slate-400 block">Operating Margin</span>
                <span className="font-serif text-lg font-bold text-white">{res.operatingMargin}%</span>
              </div>
              <div className="p-3 bg-[#091528] border border-[#162744] rounded text-center">
                <span className="text-[10px] text-slate-400 block">Net Margin</span>
                <span className="font-serif text-lg font-bold text-emerald-400">{res.netMargin}%</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-3">
              <div className="p-3 bg-[#091528] border border-[#162744] rounded flex justify-between items-center">
                <span className="text-xs text-slate-300">Return on Equity (ROE)</span>
                <span className="font-serif text-base font-bold text-white">{res.roe}%</span>
              </div>
              <div className="p-3 bg-[#091528] border border-[#162744] rounded flex justify-between items-center">
                <span className="text-xs text-slate-300">Return on Assets (ROA)</span>
                <span className="font-serif text-base font-bold text-white">{res.roa}%</span>
              </div>
            </div>
          </div>

          {/* Solvency & Leverage */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Solvency &amp; Debt Coverage</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-[#091528] border border-[#162744] rounded flex justify-between items-center">
                <span className="text-xs text-slate-300">Debt-to-Equity (D/E)</span>
                <span className="font-serif text-base font-bold text-[#C5A059]">{res.debtToEquity}x</span>
              </div>
              <div className="p-3 bg-[#091528] border border-[#162744] rounded flex justify-between items-center">
                <span className="text-xs text-slate-300">Interest Coverage (ICR)</span>
                <span className="font-serif text-base font-bold text-emerald-400">{res.interestCoverage}x</span>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-[#14233D]">
            <a
              href="/contact"
              className="w-full text-center py-3 bg-[#C5A059] text-[#050C18] font-bold text-xs uppercase tracking-[0.18em] hover:bg-[#D4B473] transition-all rounded-sm block shadow-md"
            >
              Request Institutional Credit Assessment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
