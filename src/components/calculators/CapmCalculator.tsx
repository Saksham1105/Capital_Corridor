import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { calculateCAPM } from '../../utils/calculatorMath';

export function CapmCalculator() {
  const [rf, setRf] = useState<number>(7.1); // 10-Yr Indian G-Sec Yield
  const [beta, setBeta] = useState<number>(1.15);
  const [rm, setRm] = useState<number>(13.5); // Expected Market return

  const res = calculateCAPM(rf, beta, rm);

  const handleReset = () => {
    setRf(7.1);
    setBeta(1.15);
    setRm(13.5);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Input Card */}
        <div className="lg:col-span-6 p-8 bg-white border border-[#E0D9CD] rounded-sm shadow-sm space-y-6">
          <div className="flex justify-between items-center pb-4 border-b border-[#EFECE6]">
            <div>
              <h2 className="text-xl font-serif font-bold text-slate-900">5. CAPM Calculator</h2>
              <p className="text-xs text-slate-500 font-light mt-0.5">Capital Asset Pricing Model for Required Equity Return</p>
            </div>
            <button
              onClick={handleReset}
              className="text-xs font-semibold text-slate-500 hover:text-[#9A7830] flex items-center gap-1.5 transition-colors px-2.5 py-1 rounded bg-[#FAF8F5] border border-[#E0D9CD]"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Reset
            </button>
          </div>

          <div className="space-y-4 text-xs">
            <div>
              <div className="flex justify-between font-semibold text-slate-700 mb-1">
                <span>Risk-Free Rate (Rf) (% p.a. - e.g. 10Y G-Sec)</span>
                <span className="text-[#9A7830] font-mono font-bold">{rf}%</span>
              </div>
              <input
                type="range"
                min={2}
                max={12}
                step={0.1}
                value={rf}
                onChange={(e) => setRf(Number(e.target.value))}
                className="w-full accent-[#C5A059] cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between font-semibold text-slate-700 mb-1">
                <span>Asset Beta (β - Systematic Volatility)</span>
                <span className="text-[#9A7830] font-mono font-bold">{beta}</span>
              </div>
              <input
                type="range"
                min={0.2}
                max={3.0}
                step={0.05}
                value={beta}
                onChange={(e) => setBeta(Number(e.target.value))}
                className="w-full accent-[#C5A059] cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between font-semibold text-slate-700 mb-1">
                <span>Expected Market Return (Rm) (% p.a.)</span>
                <span className="text-[#9A7830] font-mono font-bold">{rm}%</span>
              </div>
              <input
                type="range"
                min={6}
                max={25}
                step={0.5}
                value={rm}
                onChange={(e) => setRm(Number(e.target.value))}
                className="w-full accent-[#C5A059] cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Result Card */}
        <div className="lg:col-span-6 p-8 bg-[#050C18] text-white border border-[#14233D] rounded-sm shadow-md flex flex-col justify-between space-y-6">
          <div>
            <span className="text-[#C5A059] text-[10px] font-bold tracking-[0.25em] uppercase block mb-1">
              REQUIRED RETURN ON EQUITY (Ke)
            </span>
            <p className="text-4xl sm:text-5xl font-serif text-white font-bold mb-6 tracking-tight">
              {res.expectedReturn}% <span className="text-xs text-slate-400 font-sans font-light">p.a.</span>
            </p>

            <div className="space-y-3 p-4 bg-[#091528] border border-[#162744] rounded-sm text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">Market Risk Premium (Rm - Rf):</span>
                <span className="text-[#C5A059] font-bold">{res.marketRiskPremium}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Systematic Risk Beta (β):</span>
                <span className="text-white font-bold">{beta}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#14233D]">
                <span className="text-slate-400">Risk Classification:</span>
                <span className="text-emerald-400 font-medium">{res.riskCategory}</span>
              </div>
            </div>

            <div className="mt-4 p-3 bg-[#091528] border border-[#162744] text-[11px] text-slate-300 font-light rounded">
              Formula: <span className="font-mono text-[#C5A059]">E(R) = Rf + β × [Rm - Rf]</span> = {rf}% + {beta} × ({rm}% - {rf}%) = <strong className="text-white">{res.expectedReturn}%</strong>
            </div>
          </div>

          <div className="pt-4 border-t border-[#122038]">
            <a
              href="/contact"
              className="w-full text-center py-3.5 bg-[#C5A059] text-[#050C18] font-bold text-xs uppercase tracking-[0.18em] hover:bg-[#D4B473] transition-all rounded-sm block shadow-md"
            >
              Consult On Equity Valuation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
