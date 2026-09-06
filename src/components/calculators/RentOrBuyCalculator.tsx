import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { calculateRentOrBuy, formatINR } from '../../utils/calculatorMath';

export function RentOrBuyCalculator() {
  const [homePrice, setHomePrice] = useState<number>(12000000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [mortgageRate, setMortgageRate] = useState<number>(8.75);
  const [loanTenureYears, setLoanTenureYears] = useState<number>(20);
  const [maintenanceRate, setMaintenanceRate] = useState<number>(1.5);
  const [homeAppreciationRate, setHomeAppreciationRate] = useState<number>(6.0);
  const [monthlyRent, setMonthlyRent] = useState<number>(35000);
  const [rentInflationRate, setRentInflationRate] = useState<number>(6.0);
  const [investmentReturnRate, setInvestmentReturnRate] = useState<number>(11.0);
  const [analysisYears, setAnalysisYears] = useState<number>(10);

  const res = calculateRentOrBuy(
    homePrice,
    downPaymentPercent,
    mortgageRate,
    loanTenureYears,
    maintenanceRate,
    homeAppreciationRate,
    monthlyRent,
    rentInflationRate,
    investmentReturnRate,
    analysisYears
  );

  const handleReset = () => {
    setHomePrice(12000000);
    setDownPaymentPercent(20);
    setMortgageRate(8.75);
    setLoanTenureYears(20);
    setMaintenanceRate(1.5);
    setHomeAppreciationRate(6.0);
    setMonthlyRent(35000);
    setRentInflationRate(6.0);
    setInvestmentReturnRate(11.0);
    setAnalysisYears(10);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Input Card */}
        <div className="lg:col-span-6 p-8 bg-white border border-[#E0D9CD] rounded-sm shadow-sm space-y-4">
          <div className="flex justify-between items-center pb-4 border-b border-[#EFECE6]">
            <div>
              <h2 className="text-xl font-serif font-bold text-slate-900">11. Rent or Buy House Calculator</h2>
              <p className="text-xs text-slate-500 font-light mt-0.5">Comprehensive multi-year net wealth comparative model</p>
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
              <label className="font-semibold text-slate-700 block mb-1">Target Property Value (₹)</label>
              <input
                type="number"
                value={homePrice}
                onChange={(e) => setHomePrice(Number(e.target.value))}
                className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded font-mono"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Down Payment (%)</label>
                <input
                  type="number"
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded font-mono"
                />
              </div>
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Mortgage Interest Rate (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={mortgageRate}
                  onChange={(e) => setMortgageRate(Number(e.target.value))}
                  className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded font-mono"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Monthly Equivalent Rent (₹)</label>
                <input
                  type="number"
                  value={monthlyRent}
                  onChange={(e) => setMonthlyRent(Number(e.target.value))}
                  className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded font-mono"
                />
              </div>
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Analysis Period (Years)</label>
                <input
                  type="number"
                  value={analysisYears}
                  onChange={(e) => setAnalysisYears(Number(e.target.value))}
                  className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded font-mono"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Property Appreciation Rate (%)</label>
                <input
                  type="number"
                  step="0.5"
                  value={homeAppreciationRate}
                  onChange={(e) => setHomeAppreciationRate(Number(e.target.value))}
                  className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded font-mono"
                />
              </div>
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Investment Equity Return (%)</label>
                <input
                  type="number"
                  step="0.5"
                  value={investmentReturnRate}
                  onChange={(e) => setInvestmentReturnRate(Number(e.target.value))}
                  className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded font-mono"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Result Card */}
        <div className="lg:col-span-6 p-8 bg-[#050C18] text-white border border-[#14233D] rounded-sm shadow-md flex flex-col justify-between space-y-6">
          <div>
            <span className="text-[#C5A059] text-[10px] font-bold tracking-[0.25em] uppercase block mb-1">
              {analysisYears}-YEAR NET WEALTH COMPARISON
            </span>
            
            <div className="p-4 bg-[#091528] border border-[#162744] rounded mt-2">
              <span className="text-xs text-slate-300 block font-medium">{res.verdict}</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-[#091528] border border-[#162744] rounded">
                <span className="text-[10px] text-slate-400 block uppercase">Buying Net Equity</span>
                <span className="font-serif text-2xl font-bold text-white block mt-1">{formatINR(res.buyingTotalWealth)}</span>
                <span className="text-[10px] text-slate-400 mt-1 block">Monthly: {formatINR(res.monthlyBuyingCost)}</span>
              </div>
              <div className="p-4 bg-[#091528] border border-[#162744] rounded">
                <span className="text-[10px] text-[#C5A059] block uppercase">Renting Portfolio</span>
                <span className="font-serif text-2xl font-bold text-[#C5A059] block mt-1">{formatINR(res.rentingTotalWealth)}</span>
                <span className="text-[10px] text-slate-400 mt-1 block">Monthly: {formatINR(res.monthlyRentingCost)}</span>
              </div>
            </div>

            <div className="space-y-2 p-4 bg-[#091528] border border-[#162744] rounded-sm text-xs mt-4">
              <div className="flex justify-between">
                <span className="text-slate-400">Net Wealth Difference:</span>
                <span className="text-emerald-400 font-bold font-mono text-sm">{formatINR(res.wealthDifference)}</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#122038]">
            <a
              href="/contact"
              className="w-full text-center py-3.5 bg-[#C5A059] text-[#050C18] font-bold text-xs uppercase tracking-[0.18em] hover:bg-[#D4B473] transition-all rounded-sm block shadow-md"
            >
              Consult On Real Estate Funding &amp; LAP
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
