import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { calculateCreditCardPayoff, formatINR } from '../../utils/calculatorMath';

export function CreditCardPayoffCalculator() {
  const [balance, setBalance] = useState<number>(350000);
  const [apr, setApr] = useState<number>(38.0); // 38% credit card APR typical in India
  const [mode, setMode] = useState<'fixed-payment' | 'target-months'>('fixed-payment');
  const [value, setValue] = useState<number>(15000); // Monthly payment or target months

  const res = calculateCreditCardPayoff(balance, apr, mode, value);

  const handleReset = () => {
    setBalance(350000);
    setApr(38.0);
    setMode('fixed-payment');
    setValue(15000);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Input Card */}
        <div className="lg:col-span-6 p-8 bg-white border border-[#E0D9CD] rounded-sm shadow-sm space-y-4">
          <div className="flex justify-between items-center pb-4 border-b border-[#EFECE6]">
            <div>
              <h2 className="text-xl font-serif font-bold text-slate-900">12. Credit Card Payoff Calculator</h2>
              <p className="text-xs text-slate-500 font-light mt-0.5">Model timeline and interest cost to reach zero credit card debt</p>
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
              <label className="font-semibold text-slate-700 block mb-1">Total Credit Card Outstanding (₹)</label>
              <input
                type="number"
                value={balance}
                onChange={(e) => setBalance(Number(e.target.value))}
                className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded font-mono"
              />
            </div>
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Annual Percentage Rate (APR % p.a.)</label>
              <input
                type="number"
                step="0.5"
                value={apr}
                onChange={(e) => setApr(Number(e.target.value))}
                className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded font-mono"
              />
            </div>

            <div className="pt-2">
              <label className="font-semibold text-slate-700 block mb-2">Calculation Goal Strategy</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => { setMode('fixed-payment'); setValue(15000); }}
                  className={`p-2.5 text-xs font-bold rounded ${mode === 'fixed-payment' ? 'bg-[#050C18] text-[#C5A059]' : 'bg-[#FAF8F5] text-slate-600 border border-[#DDD5C7]'}`}
                >
                  Fixed Monthly Payment
                </button>
                <button
                  type="button"
                  onClick={() => { setMode('target-months'); setValue(24); }}
                  className={`p-2.5 text-xs font-bold rounded ${mode === 'target-months' ? 'bg-[#050C18] text-[#C5A059]' : 'bg-[#FAF8F5] text-slate-600 border border-[#DDD5C7]'}`}
                >
                  Pay Off by Target Months
                </button>
              </div>
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">
                {mode === 'fixed-payment' ? 'Monthly Payment Planned (₹)' : 'Target Payoff Time (Months)'}
              </label>
              <input
                type="number"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded font-mono"
              />
            </div>
          </div>
        </div>

        {/* Result Card */}
        <div className="lg:col-span-6 p-8 bg-[#050C18] text-white border border-[#14233D] rounded-sm shadow-md flex flex-col justify-between space-y-6">
          <div>
            <span className="text-[#C5A059] text-[10px] font-bold tracking-[0.25em] uppercase block mb-1">
              TIME TO DEBT FREEDOM
            </span>
            <p className="text-4xl sm:text-5xl font-serif text-white font-bold mb-6 tracking-tight">
              {res.monthsToPayoff >= 600 ? 'Unpayable at this amount' : `${res.monthsToPayoff} Months`}
            </p>

            <div className="space-y-3 p-4 bg-[#091528] border border-[#162744] rounded-sm text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">Total Interest to be Paid:</span>
                <span className="text-amber-400 font-bold font-mono">{formatINR(res.totalInterestPaid)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Total Outflow (Principal + Interest):</span>
                <span className="text-white font-mono font-bold">{formatINR(res.totalAmountPaid)}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#14233D]">
                <span className="text-slate-400">Monthly Required Payment:</span>
                <span className="text-[#C5A059] font-bold font-mono text-sm">{formatINR(res.monthlyPaymentRequired)} / mo</span>
              </div>
            </div>

            <div className="mt-4 p-3 bg-[#091528] border border-[#162744] text-[11px] text-slate-400 font-light rounded">
              High interest rates (30-42% APR) drain working cashflow rapidly. Consider structured debt consolidation at lower prime rates (10-14%).
            </div>
          </div>

          <div className="pt-4 border-t border-[#122038]">
            <a
              href="/contact"
              className="w-full text-center py-3.5 bg-[#C5A059] text-[#050C18] font-bold text-xs uppercase tracking-[0.18em] hover:bg-[#D4B473] transition-all rounded-sm block shadow-md"
            >
              Explore Debt Consolidation Facility
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
