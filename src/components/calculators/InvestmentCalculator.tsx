import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { calculateInvestment, formatINR } from '../../utils/calculatorMath';

export function InvestmentCalculator() {
  const [initialLumpsum, setInitialLumpsum] = useState<number>(200000);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(25000);
  const [annualReturnRate, setAnnualReturnRate] = useState<number>(12.0);
  const [tenureYears, setTenureYears] = useState<number>(10);

  const res = calculateInvestment(initialLumpsum, monthlyContribution, annualReturnRate, tenureYears);
  const investedPercent = res.futureValue > 0 ? Math.round((res.totalInvested / res.futureValue) * 100) : 0;
  const growthPercent = res.futureValue > 0 ? Math.round((res.totalWealthGained / res.futureValue) * 100) : 0;

  const handleReset = () => {
    setInitialLumpsum(200000);
    setMonthlyContribution(25000);
    setAnnualReturnRate(12.0);
    setTenureYears(10);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Input Card */}
        <div className="lg:col-span-6 p-8 bg-white border border-[#E0D9CD] rounded-sm shadow-sm space-y-6">
          <div className="flex justify-between items-center pb-4 border-b border-[#EFECE6]">
            <div>
              <h2 className="text-xl font-serif font-bold text-slate-900">7. Investment &amp; SIP Calculator</h2>
              <p className="text-xs text-slate-500 font-light mt-0.5">SIP and lumpsum compounded wealth growth projector</p>
            </div>
            <button
              onClick={handleReset}
              className="text-xs font-semibold text-slate-500 hover:text-[#9A7830] flex items-center gap-1.5 transition-colors px-2.5 py-1 rounded bg-[#FAF8F5] border border-[#E0D9CD]"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Reset
            </button>
          </div>

          {/* Initial Lumpsum */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold text-slate-800">
              <span>Initial Lump Sum (₹)</span>
              <span className="text-[#9A7830] font-mono text-sm font-bold">{formatINR(initialLumpsum)}</span>
            </div>
            <input
              type="range"
              min={0}
              max={10000000}
              step={50000}
              value={initialLumpsum}
              onChange={(e) => setInitialLumpsum(Number(e.target.value))}
              className="w-full accent-[#C5A059] cursor-pointer"
            />
          </div>

          {/* Monthly Contribution */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold text-slate-800">
              <span>Monthly SIP Contribution (₹)</span>
              <span className="text-[#9A7830] font-mono text-sm font-bold">{formatINR(monthlyContribution)}</span>
            </div>
            <input
              type="range"
              min={1000}
              max={500000}
              step={1000}
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(Number(e.target.value))}
              className="w-full accent-[#C5A059] cursor-pointer"
            />
          </div>

          {/* Expected Return */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold text-slate-800">
              <span>Expected Annual Return (% p.a.)</span>
              <span className="text-[#9A7830] font-mono text-sm font-bold">{annualReturnRate}%</span>
            </div>
            <input
              type="range"
              min={4}
              max={25}
              step={0.5}
              value={annualReturnRate}
              onChange={(e) => setAnnualReturnRate(Number(e.target.value))}
              className="w-full accent-[#C5A059] cursor-pointer"
            />
          </div>

          {/* Tenure */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold text-slate-800">
              <span>Time Horizon (Years)</span>
              <span className="text-[#9A7830] font-mono text-sm font-bold">{tenureYears} Years</span>
            </div>
            <input
              type="range"
              min={1}
              max={35}
              step={1}
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full accent-[#C5A059] cursor-pointer"
            />
          </div>
        </div>

        {/* Result Card */}
        <div className="lg:col-span-6 p-8 bg-[#050C18] text-white border border-[#14233D] rounded-sm shadow-md flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

          <div>
            <span className="text-[#C5A059] text-[10px] font-bold tracking-[0.25em] uppercase block mb-1">
              ESTIMATED MATURITY WEALTH
            </span>
            <p className="text-4xl sm:text-5xl font-serif text-white font-bold mb-6 tracking-tight">
              {formatINR(res.futureValue)}
            </p>

            <div className="grid grid-cols-2 gap-4 p-4 bg-[#091528] border border-[#162744] rounded-sm mb-6">
              <div>
                <span className="text-slate-400 text-xs block font-light">Total Capital Invested</span>
                <span className="text-white font-serif text-lg font-bold">{formatINR(res.totalInvested)}</span>
              </div>
              <div>
                <span className="text-slate-400 text-xs block font-light">Estimated Wealth Gained</span>
                <span className="text-[#C5A059] font-serif text-lg font-bold">{formatINR(res.totalWealthGained)}</span>
              </div>
              <div className="col-span-2 pt-3 border-t border-[#162744] flex justify-between items-center text-xs">
                <span className="text-slate-400">Wealth Multiplier:</span>
                <span className="text-emerald-400 font-bold font-mono text-base">{res.multiplier}x Invested Amount</span>
              </div>
            </div>

            {/* Breakdown Bar */}
            <div className="space-y-1.5 mb-6">
              <div className="flex justify-between text-xs text-slate-300">
                <span>Principal: <strong className="text-white">{investedPercent}%</strong></span>
                <span>Growth: <strong className="text-[#C5A059]">{growthPercent}%</strong></span>
              </div>
              <div className="h-2.5 w-full bg-[#112240] flex rounded-full overflow-hidden">
                <div className="bg-slate-500 transition-all duration-300" style={{ width: `${investedPercent}%` }} />
                <div className="bg-[#C5A059] transition-all duration-300" style={{ width: `${growthPercent}%` }} />
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#122038]">
            <a
              href="/contact"
              className="w-full text-center py-3.5 bg-[#C5A059] text-[#050C18] font-bold text-xs uppercase tracking-[0.18em] hover:bg-[#D4B473] transition-all rounded-sm block shadow-md"
            >
              Discuss Institutional Wealth &amp; Fund Strategies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
