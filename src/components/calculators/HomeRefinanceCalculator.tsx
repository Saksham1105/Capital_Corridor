import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { calculateRefinance, formatINR } from '../../utils/calculatorMath';

export function HomeRefinanceCalculator() {
  const [balance, setBalance] = useState<number>(7500000);
  const [currentRate, setCurrentRate] = useState<number>(9.75);
  const [remainingYears, setRemainingYears] = useState<number>(18);
  const [newRate, setNewRate] = useState<number>(8.5);
  const [newTenure, setNewTenure] = useState<number>(18);
  const [closingCosts, setClosingCosts] = useState<number>(45000);

  const res = calculateRefinance(balance, currentRate, remainingYears, newRate, newTenure, closingCosts);

  const handleReset = () => {
    setBalance(7500000);
    setCurrentRate(9.75);
    setRemainingYears(18);
    setNewRate(8.5);
    setNewTenure(18);
    setClosingCosts(45000);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Input Card */}
        <div className="lg:col-span-6 p-8 bg-white border border-[#E0D9CD] rounded-sm shadow-sm space-y-4">
          <div className="flex justify-between items-center pb-4 border-b border-[#EFECE6]">
            <div>
              <h2 className="text-xl font-serif font-bold text-slate-900">9. Home Loan Balance Transfer &amp; Refinance</h2>
              <p className="text-xs text-slate-500 font-light mt-0.5">Calculate interest savings and break-even period</p>
            </div>
            <button
              onClick={handleReset}
              className="text-xs font-semibold text-slate-500 hover:text-[#9A7830] flex items-center gap-1.5 transition-colors px-2.5 py-1 rounded bg-[#FAF8F5] border border-[#E0D9CD]"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Reset
            </button>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Outstanding Loan Principal (₹)</label>
              <input
                type="number"
                value={balance}
                onChange={(e) => setBalance(Number(e.target.value))}
                className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded font-mono"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Current Rate (% p.a.)</label>
                <input
                  type="number"
                  step="0.05"
                  value={currentRate}
                  onChange={(e) => setCurrentRate(Number(e.target.value))}
                  className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded font-mono"
                />
              </div>
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Remaining Tenure (Yrs)</label>
                <input
                  type="number"
                  value={remainingYears}
                  onChange={(e) => setRemainingYears(Number(e.target.value))}
                  className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded font-mono"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">New Refinance Rate (%)</label>
                <input
                  type="number"
                  step="0.05"
                  value={newRate}
                  onChange={(e) => setNewRate(Number(e.target.value))}
                  className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded font-mono"
                />
              </div>
              <div>
                <label className="font-semibold text-slate-700 block mb-1">New Loan Tenure (Yrs)</label>
                <input
                  type="number"
                  value={newTenure}
                  onChange={(e) => setNewTenure(Number(e.target.value))}
                  className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded font-mono"
                />
              </div>
            </div>
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Switching / Transfer Costs (₹)</label>
              <input
                type="number"
                value={closingCosts}
                onChange={(e) => setClosingCosts(Number(e.target.value))}
                className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded font-mono"
              />
            </div>
          </div>
        </div>

        {/* Result Card */}
        <div className="lg:col-span-6 p-8 bg-[#050C18] text-white border border-[#14233D] rounded-sm shadow-md flex flex-col justify-between space-y-6">
          <div>
            <span className="text-[#C5A059] text-[10px] font-bold tracking-[0.25em] uppercase block mb-1">
              NET LIFETIME SAVINGS
            </span>
            <p className="text-4xl sm:text-5xl font-serif text-white font-bold mb-6 tracking-tight">
              {formatINR(res.netLifetimeSavings)}
            </p>

            <div className="space-y-3 p-4 bg-[#091528] border border-[#162744] rounded-sm text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">Current Monthly EMI:</span>
                <span className="text-slate-300 font-mono">{formatINR(res.currentEMI)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">New Monthly EMI:</span>
                <span className="text-[#C5A059] font-mono font-bold">{formatINR(res.newEMI)}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#14233D]">
                <span className="text-slate-400">Monthly Cashflow Savings:</span>
                <span className="text-emerald-400 font-bold">{formatINR(res.monthlySavings)} / mo</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Break-Even Period:</span>
                <span className="text-white font-bold">{res.breakEvenMonths} Months</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#122038]">
            <a
              href="/contact"
              className="w-full text-center py-3.5 bg-[#C5A059] text-[#050C18] font-bold text-xs uppercase tracking-[0.18em] hover:bg-[#D4B473] transition-all rounded-sm block shadow-md"
            >
              Initiate Loan Balance Transfer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
