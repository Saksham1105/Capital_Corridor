import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { calculateCreditCardComparison, CreditCardOption, formatINR } from '../../utils/calculatorMath';

export function CreditCardCompareCalculator() {
  const [annualSpend, setAnnualSpend] = useState<number>(600000); // 6 Lakhs per year
  const [cards, setCards] = useState<CreditCardOption[]>([
    { name: 'Card 1: Premium Travel / Metallic', annualFee: 10000, aprPercent: 42, rewardRatePercent: 3.5 },
    { name: 'Card 2: Cashback / Business', annualFee: 2500, aprPercent: 38, rewardRatePercent: 2.0 },
    { name: 'Card 3: Basic Zero-Fee', annualFee: 0, aprPercent: 36, rewardRatePercent: 0.75 }
  ]);

  const results = calculateCreditCardComparison(cards, annualSpend);

  const updateCard = (idx: number, field: keyof CreditCardOption, val: any) => {
    setCards((prev) => {
      const next = [...prev];
      next[idx] = { ...next[idx], [field]: val };
      return next;
    });
  };

  const handleReset = () => {
    setAnnualSpend(600000);
    setCards([
      { name: 'Card 1: Premium Travel / Metallic', annualFee: 10000, aprPercent: 42, rewardRatePercent: 3.5 },
      { name: 'Card 2: Cashback / Business', annualFee: 2500, aprPercent: 38, rewardRatePercent: 2.0 },
      { name: 'Card 3: Basic Zero-Fee', annualFee: 0, aprPercent: 36, rewardRatePercent: 0.75 }
    ]);
  };

  return (
    <div className="space-y-8">
      <div className="p-8 bg-white border border-[#E0D9CD] rounded-sm shadow-sm space-y-6">
        <div className="flex justify-between items-center pb-4 border-b border-[#EFECE6]">
          <div>
            <h2 className="text-xl font-serif font-bold text-slate-900">13. Credit Card Comparison Calculator</h2>
            <p className="text-xs text-slate-500 font-light mt-0.5">Evaluate rewards value vs annual maintenance fees across cards</p>
          </div>
          <button
            onClick={handleReset}
            className="text-xs font-semibold text-slate-500 hover:text-[#9A7830] flex items-center gap-1.5 transition-colors px-2.5 py-1 rounded bg-[#FAF8F5] border border-[#E0D9CD]"
          >
            <RotateCcw className="h-3.5 w-3.5" /> Reset
          </button>
        </div>

        {/* Annual Spend Input */}
        <div className="p-4 bg-[#FAF8F5] border border-[#DDD5C7] rounded-sm">
          <label className="font-semibold text-xs text-slate-800 block mb-1">
            Estimated Annual Card Expenditure (₹): <span className="text-[#9A7830] font-mono font-bold">{formatINR(annualSpend)}</span>
          </label>
          <input
            type="range"
            min={50000}
            max={5000000}
            step={50000}
            value={annualSpend}
            onChange={(e) => setAnnualSpend(Number(e.target.value))}
            className="w-full accent-[#C5A059] cursor-pointer"
          />
        </div>

        {/* 3 Cards Comparison Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div key={i} className="p-5 bg-[#FAF8F5] border border-[#DDD5C7] rounded-sm space-y-4">
              <input
                type="text"
                value={card.name}
                onChange={(e) => updateCard(i, 'name', e.target.value)}
                className="font-serif font-bold text-sm text-slate-900 bg-transparent border-b border-[#C5A059] pb-1 w-full focus:outline-none"
              />
              <div className="space-y-3 text-xs">
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Annual Fee (₹)</label>
                  <input
                    type="number"
                    value={card.annualFee}
                    onChange={(e) => updateCard(i, 'annualFee', Number(e.target.value))}
                    className="w-full p-2 bg-white border border-[#DDD5C7] rounded font-mono"
                  />
                </div>
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Effective Reward Rate (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={card.rewardRatePercent}
                    onChange={(e) => updateCard(i, 'rewardRatePercent', Number(e.target.value))}
                    className="w-full p-2 bg-white border border-[#DDD5C7] rounded font-mono"
                  />
                </div>
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">APR Interest (% p.a.)</label>
                  <input
                    type="number"
                    step="0.5"
                    value={card.aprPercent}
                    onChange={(e) => updateCard(i, 'aprPercent', Number(e.target.value))}
                    className="w-full p-2 bg-white border border-[#DDD5C7] rounded font-mono"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Results */}
      <div className="p-8 bg-[#050C18] text-white border border-[#14233D] rounded-sm shadow-md space-y-6">
        <span className="text-[#C5A059] text-[10px] font-bold tracking-[0.25em] uppercase block">
          NET ANNUAL VALUE REWARD ANALYSIS
        </span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {results.map((res, i) => (
            <div key={i} className="p-6 bg-[#091528] border border-[#162744] rounded-sm space-y-4">
              <h3 className="font-serif text-lg font-bold text-white">{res.name}</h3>

              <div className="space-y-3 text-xs pt-2 border-t border-[#14233D]">
                <div className="flex justify-between">
                  <span className="text-slate-400">Annual Gross Rewards:</span>
                  <span className="text-[#C5A059] font-mono font-bold">{formatINR(res.annualRewards)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Annual Fee Outflow:</span>
                  <span className="text-slate-300 font-mono">-{formatINR(res.annualFee)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#162744]">
                  <span className="text-slate-300 font-semibold">Net Annual Value:</span>
                  <span className={res.netAnnualValue >= 0 ? 'text-emerald-400 font-bold font-mono text-base' : 'text-amber-400 font-bold font-mono'}>
                    {formatINR(res.netAnnualValue)} / yr
                  </span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-slate-400">3-Year Cumulative Value:</span>
                  <span className="text-white font-mono">{formatINR(res.threeYearNetValue)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
