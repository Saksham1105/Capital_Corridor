import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { calculateYTM, formatINR } from '../../utils/calculatorMath';

export function YtmCalculator() {
  const [currentPrice, setCurrentPrice] = useState<number>(950);
  const [faceValue, setFaceValue] = useState<number>(1000);
  const [couponRate, setCouponRate] = useState<number>(8.5);
  const [tenureYears, setTenureYears] = useState<number>(5);
  const [frequency, setFrequency] = useState<number>(1); // 1 = Annual, 2 = Semi-annual

  const res = calculateYTM(currentPrice, faceValue, couponRate, tenureYears, frequency);

  const handleReset = () => {
    setCurrentPrice(950);
    setFaceValue(1000);
    setCouponRate(8.5);
    setTenureYears(5);
    setFrequency(1);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Input Card */}
        <div className="lg:col-span-6 p-8 bg-white border border-[#E0D9CD] rounded-sm shadow-sm space-y-4">
          <div className="flex justify-between items-center pb-4 border-b border-[#EFECE6]">
            <div>
              <h2 className="text-xl font-serif font-bold text-slate-900">6. Yield to Maturity (YTM) Calculator</h2>
              <p className="text-xs text-slate-500 font-light mt-0.5">Fixed income bond yield &amp; cash flow pricing</p>
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
              <label className="font-semibold text-slate-700 block mb-1">Current Bond Trading Price (₹)</label>
              <input
                type="number"
                value={currentPrice}
                onChange={(e) => setCurrentPrice(Number(e.target.value))}
                className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded font-mono"
              />
            </div>
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Face Value / Par Value (₹)</label>
              <input
                type="number"
                value={faceValue}
                onChange={(e) => setFaceValue(Number(e.target.value))}
                className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded font-mono"
              />
            </div>
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Annual Coupon Rate (% p.a.)</label>
              <input
                type="number"
                step="0.1"
                value={couponRate}
                onChange={(e) => setCouponRate(Number(e.target.value))}
                className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded font-mono"
              />
            </div>
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Years to Maturity</label>
              <input
                type="number"
                step="0.5"
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded font-mono"
              />
            </div>
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Coupon Payment Frequency</label>
              <select
                value={frequency}
                onChange={(e) => setFrequency(Number(e.target.value))}
                className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded"
              >
                <option value={1}>Annual (Once per year)</option>
                <option value={2}>Semi-Annual (Twice per year)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Result Card */}
        <div className="lg:col-span-6 p-8 bg-[#050C18] text-white border border-[#14233D] rounded-sm shadow-md flex flex-col justify-between space-y-6">
          <div>
            <span className="text-[#C5A059] text-[10px] font-bold tracking-[0.25em] uppercase block mb-1">
              YIELD TO MATURITY (YTM)
            </span>
            <p className="text-4xl sm:text-5xl font-serif text-white font-bold mb-6 tracking-tight">
              {res.ytm}% <span className="text-xs text-slate-400 font-sans font-light">p.a.</span>
            </p>

            <div className="space-y-3 p-4 bg-[#091528] border border-[#162744] rounded-sm text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">Current Yield (Coupon / Price):</span>
                <span className="text-[#C5A059] font-bold">{res.currentYield}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Annual Coupon Payout:</span>
                <span className="text-white font-mono">{formatINR(res.annualCoupon)} / year</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Total Coupon Cashflows:</span>
                <span className="text-white font-mono">{formatINR(res.totalCoupons)}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#14233D]">
                <span className="text-slate-400">Capital Gain / Loss at Maturity:</span>
                <span className={res.capitalGainLoss >= 0 ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold'}>
                  {res.capitalGainLoss >= 0 ? `+${formatINR(res.capitalGainLoss)} (Discount)` : `${formatINR(res.capitalGainLoss)} (Premium)`}
                </span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#122038]">
            <a
              href="/contact"
              className="w-full text-center py-3.5 bg-[#C5A059] text-[#050C18] font-bold text-xs uppercase tracking-[0.18em] hover:bg-[#D4B473] transition-all rounded-sm block shadow-md"
            >
              Consult On Bond Issuance &amp; Private Placement
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
