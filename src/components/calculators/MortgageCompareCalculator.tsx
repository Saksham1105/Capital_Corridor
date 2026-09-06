import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { calculateMortgageComparison, MortgageOption, formatINR } from '../../utils/calculatorMath';

export function MortgageCompareCalculator() {
  const [options, setOptions] = useState<MortgageOption[]>([
    { name: 'Option A (Standard Bank)', loanAmount: 10000000, interestRate: 9.0, tenureYears: 20, fees: 25000 },
    { name: 'Option B (NBFC / Concession)', loanAmount: 10000000, interestRate: 8.6, tenureYears: 20, fees: 50000 },
    { name: 'Option C (Shorter Tenure)', loanAmount: 10000000, interestRate: 8.5, tenureYears: 15, fees: 30000 }
  ]);

  const results = calculateMortgageComparison(options);

  const updateOpt = (idx: number, field: keyof MortgageOption, val: any) => {
    setOptions((prev) => {
      const next = [...prev];
      next[idx] = { ...next[idx], [field]: val };
      return next;
    });
  };

  const handleReset = () => {
    setOptions([
      { name: 'Option A (Standard Bank)', loanAmount: 10000000, interestRate: 9.0, tenureYears: 20, fees: 25000 },
      { name: 'Option B (NBFC / Concession)', loanAmount: 10000000, interestRate: 8.6, tenureYears: 20, fees: 50000 },
      { name: 'Option C (Shorter Tenure)', loanAmount: 10000000, interestRate: 8.5, tenureYears: 15, fees: 30000 }
    ]);
  };

  return (
    <div className="space-y-8">
      <div className="p-8 bg-white border border-[#E0D9CD] rounded-sm shadow-sm space-y-6">
        <div className="flex justify-between items-center pb-4 border-b border-[#EFECE6]">
          <div>
            <h2 className="text-xl font-serif font-bold text-slate-900">3. Mortgage &amp; Loan Comparison Calculator</h2>
            <p className="text-xs text-slate-500 font-light mt-0.5">Compare multiple lending offers side-by-side to identify the lowest total borrowing cost</p>
          </div>
          <button
            onClick={handleReset}
            className="text-xs font-semibold text-slate-500 hover:text-[#9A7830] flex items-center gap-1.5 transition-colors px-2.5 py-1 rounded bg-[#FAF8F5] border border-[#E0D9CD]"
          >
            <RotateCcw className="h-3.5 w-3.5" /> Reset
          </button>
        </div>

        {/* 3 Offer Input Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {options.map((opt, i) => (
            <div key={i} className="p-5 bg-[#FAF8F5] border border-[#DDD5C7] rounded-sm space-y-4">
              <input
                type="text"
                value={opt.name}
                onChange={(e) => updateOpt(i, 'name', e.target.value)}
                className="font-serif font-bold text-sm text-slate-900 bg-transparent border-b border-[#C5A059] pb-1 w-full focus:outline-none"
              />
              <div className="space-y-3 text-xs">
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Loan Amount (₹)</label>
                  <input
                    type="number"
                    value={opt.loanAmount}
                    onChange={(e) => updateOpt(i, 'loanAmount', Number(e.target.value))}
                    className="w-full p-2 bg-white border border-[#DDD5C7] rounded font-mono"
                  />
                </div>
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Interest Rate (% p.a.)</label>
                  <input
                    type="number"
                    step="0.05"
                    value={opt.interestRate}
                    onChange={(e) => updateOpt(i, 'interestRate', Number(e.target.value))}
                    className="w-full p-2 bg-white border border-[#DDD5C7] rounded font-mono"
                  />
                </div>
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Tenure (Years)</label>
                  <input
                    type="number"
                    value={opt.tenureYears}
                    onChange={(e) => updateOpt(i, 'tenureYears', Number(e.target.value))}
                    className="w-full p-2 bg-white border border-[#DDD5C7] rounded font-mono"
                  />
                </div>
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Upfront Processing Fees (₹)</label>
                  <input
                    type="number"
                    value={opt.fees}
                    onChange={(e) => updateOpt(i, 'fees', Number(e.target.value))}
                    className="w-full p-2 bg-white border border-[#DDD5C7] rounded font-mono"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Results Card */}
      <div className="p-8 bg-[#050C18] text-white border border-[#14233D] rounded-sm shadow-md space-y-6">
        <span className="text-[#C5A059] text-[10px] font-bold tracking-[0.25em] uppercase block">
          COMPARISON RESULTS BREAKDOWN
        </span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {results.map((res, i) => (
            <div key={i} className="p-6 bg-[#091528] border border-[#162744] rounded-sm space-y-4 relative">
              {res.totalSavingsVsBase > 0 && (
                <span className="absolute top-3 right-3 text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-700 px-2 py-0.5 rounded">
                  Saves {formatINR(res.totalSavingsVsBase)}
                </span>
              )}
              <h3 className="font-serif text-lg font-bold text-white">{res.name}</h3>

              <div className="space-y-3 text-xs pt-2 border-t border-[#14233D]">
                <div className="flex justify-between">
                  <span className="text-slate-400">Monthly Payment (EMI):</span>
                  <span className="text-[#C5A059] font-serif text-base font-bold">{formatINR(res.monthlyPayment)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Total Interest Paid:</span>
                  <span className="text-white font-mono">{formatINR(res.totalInterest)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#162744]">
                  <span className="text-slate-300 font-semibold">Total Cost:</span>
                  <span className="text-white font-mono font-bold">{formatINR(res.totalCost)}</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-slate-400">Monthly Diff vs Option A:</span>
                  <span className={res.monthlyDifference <= 0 ? 'text-emerald-400 font-bold' : 'text-amber-400'}>
                    {res.monthlyDifference > 0 ? `+${formatINR(res.monthlyDifference)}` : formatINR(res.monthlyDifference)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
