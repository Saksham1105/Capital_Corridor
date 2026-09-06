import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { calculateCompoundInterest, formatINR } from '../../utils/calculatorMath';

export function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState<number>(1000000);
  const [annualRate, setAnnualRate] = useState<number>(8.5);
  const [tenureYears, setTenureYears] = useState<number>(5);
  const [frequency, setFrequency] = useState<number>(12); // 12 = Monthly, 4 = Quarterly, 1 = Annual

  const res = calculateCompoundInterest(principal, annualRate, tenureYears, frequency);

  const handleReset = () => {
    setPrincipal(1000000);
    setAnnualRate(8.5);
    setTenureYears(5);
    setFrequency(12);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Input Card */}
        <div className="lg:col-span-6 p-8 bg-white border border-[#E0D9CD] rounded-sm shadow-sm space-y-4">
          <div className="flex justify-between items-center pb-4 border-b border-[#EFECE6]">
            <div>
              <h2 className="text-xl font-serif font-bold text-slate-900">8. Compound Interest Calculator</h2>
              <p className="text-xs text-slate-500 font-light mt-0.5">Model interest compounding across customizable frequencies</p>
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
              <label className="font-semibold text-slate-700 block mb-1">Principal Deposit Amount (₹)</label>
              <input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded font-mono"
              />
            </div>
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Annual Interest Rate (% p.a.)</label>
              <input
                type="number"
                step="0.1"
                value={annualRate}
                onChange={(e) => setAnnualRate(Number(e.target.value))}
                className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded font-mono"
              />
            </div>
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Tenure (Years)</label>
              <input
                type="number"
                step="1"
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded font-mono"
              />
            </div>
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Compounding Frequency</label>
              <select
                value={frequency}
                onChange={(e) => setFrequency(Number(e.target.value))}
                className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded"
              >
                <option value={12}>Compounded Monthly (12 times/year)</option>
                <option value={4}>Compounded Quarterly (4 times/year)</option>
                <option value={2}>Compounded Semi-Annually (2 times/year)</option>
                <option value={1}>Compounded Annually (1 time/year)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Result Card */}
        <div className="lg:col-span-6 p-8 bg-[#050C18] text-white border border-[#14233D] rounded-sm shadow-md flex flex-col justify-between space-y-6">
          <div>
            <span className="text-[#C5A059] text-[10px] font-bold tracking-[0.25em] uppercase block mb-1">
              TOTAL COMPOUNDED VALUE
            </span>
            <p className="text-4xl sm:text-5xl font-serif text-white font-bold mb-6 tracking-tight">
              {formatINR(res.futureValue)}
            </p>

            <div className="space-y-3 p-4 bg-[#091528] border border-[#162744] rounded-sm text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">Principal Deposited:</span>
                <span className="text-white font-serif font-bold text-sm">{formatINR(res.totalPrincipal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Total Interest Earned:</span>
                <span className="text-[#C5A059] font-bold">{formatINR(res.totalInterest)}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#14233D]">
                <span className="text-slate-400">Effective Annual Rate (EAR):</span>
                <span className="text-emerald-400 font-bold">{res.effectiveAnnualRate}% p.a.</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#122038]">
            <a
              href="/contact"
              className="w-full text-center py-3.5 bg-[#C5A059] text-[#050C18] font-bold text-xs uppercase tracking-[0.18em] hover:bg-[#D4B473] transition-all rounded-sm block shadow-md"
            >
              Consult On Yield Optimization
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
