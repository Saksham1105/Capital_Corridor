import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { calculateWACC, formatINR } from '../../utils/calculatorMath';

export function WaccCalculator() {
  const [equity, setEquity] = useState<number>(60000000);
  const [costOfEquity, setCostOfEquity] = useState<number>(15);
  const [debt, setDebt] = useState<number>(40000000);
  const [costOfDebt, setCostOfDebt] = useState<number>(10);
  const [taxRate, setTaxRate] = useState<number>(25);

  const res = calculateWACC(equity, costOfEquity, debt, costOfDebt, taxRate);

  const handleReset = () => {
    setEquity(60000000);
    setCostOfEquity(15);
    setDebt(40000000);
    setCostOfDebt(10);
    setTaxRate(25);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Input Card */}
        <div className="lg:col-span-6 p-8 bg-white border border-[#E0D9CD] rounded-sm shadow-sm space-y-4">
          <div className="flex justify-between items-center pb-4 border-b border-[#EFECE6]">
            <div>
              <h2 className="text-xl font-serif font-bold text-slate-900">4. WACC Calculator</h2>
              <p className="text-xs text-slate-500 font-light mt-0.5">Weighted Average Cost of Capital calculation</p>
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
              <label className="font-semibold text-slate-700 block mb-1">Total Equity Capital (₹)</label>
              <input
                type="number"
                value={equity}
                onChange={(e) => setEquity(Number(e.target.value))}
                className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded font-mono"
              />
            </div>
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Cost of Equity / Ke (% p.a.)</label>
              <input
                type="number"
                step="0.1"
                value={costOfEquity}
                onChange={(e) => setCostOfEquity(Number(e.target.value))}
                className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded font-mono"
              />
            </div>
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Total Debt Capital (₹)</label>
              <input
                type="number"
                value={debt}
                onChange={(e) => setDebt(Number(e.target.value))}
                className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded font-mono"
              />
            </div>
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Cost of Debt / Kd (% p.a.)</label>
              <input
                type="number"
                step="0.1"
                value={costOfDebt}
                onChange={(e) => setCostOfDebt(Number(e.target.value))}
                className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded font-mono"
              />
            </div>
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Marginal Corporate Tax Rate (%)</label>
              <input
                type="number"
                step="1"
                value={taxRate}
                onChange={(e) => setTaxRate(Number(e.target.value))}
                className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded font-mono"
              />
            </div>
          </div>
        </div>

        {/* Result Card */}
        <div className="lg:col-span-6 p-8 bg-[#050C18] text-white border border-[#14233D] rounded-sm shadow-md flex flex-col justify-between space-y-6">
          <div>
            <span className="text-[#C5A059] text-[10px] font-bold tracking-[0.25em] uppercase block mb-1">
              WEIGHTED AVERAGE COST OF CAPITAL (WACC)
            </span>
            <p className="text-4xl sm:text-5xl font-serif text-white font-bold mb-6 tracking-tight">
              {res.wacc}% <span className="text-xs text-slate-400 font-sans font-light">p.a.</span>
            </p>

            <div className="space-y-3 p-4 bg-[#091528] border border-[#162744] rounded-sm text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">Total Capital Employed:</span>
                <span className="text-white font-serif font-bold text-sm">{formatINR(res.totalCapital)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Equity Weight (We):</span>
                <span className="text-[#C5A059] font-bold">{res.equityWeight}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Debt Weight (Wd):</span>
                <span className="text-[#C5A059] font-bold">{res.debtWeight}%</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#14233D]">
                <span className="text-slate-400">After-Tax Cost of Debt [Kd*(1-T)]:</span>
                <span className="text-emerald-400 font-bold">{res.afterTaxCostOfDebt}%</span>
              </div>
            </div>

            {/* Capital Weight Bar */}
            <div className="space-y-1.5 mt-4">
              <div className="flex justify-between text-xs text-slate-300">
                <span>Equity: <strong className="text-white">{res.equityWeight}%</strong></span>
                <span>Debt: <strong className="text-[#C5A059]">{res.debtWeight}%</strong></span>
              </div>
              <div className="h-2.5 w-full bg-[#112240] flex rounded-full overflow-hidden">
                <div className="bg-slate-400 transition-all duration-300" style={{ width: `${res.equityWeight}%` }} />
                <div className="bg-[#C5A059] transition-all duration-300" style={{ width: `${res.debtWeight}%` }} />
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#122038]">
            <a
              href="/contact"
              className="w-full text-center py-3.5 bg-[#C5A059] text-[#050C18] font-bold text-xs uppercase tracking-[0.18em] hover:bg-[#D4B473] transition-all rounded-sm block shadow-md"
            >
              Optimize Corporate Capital Structure
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
