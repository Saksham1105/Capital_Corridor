import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { calculateCarLeaseVsFinance, formatINR } from '../../utils/calculatorMath';

export function CarLeaseVsFinanceCalculator() {
  const [carPrice, setCarPrice] = useState<number>(2500000);
  const [downPayment, setDownPayment] = useState<number>(500000);
  const [financeRate, setFinanceRate] = useState<number>(9.0);
  const [financeMonths, setFinanceMonths] = useState<number>(60);
  const [leaseMonths, setLeaseMonths] = useState<number>(36);
  const [residualPercent, setResidualPercent] = useState<number>(52);

  const res = calculateCarLeaseVsFinance(
    carPrice,
    downPayment,
    financeRate,
    financeMonths,
    leaseMonths,
    0.0025, // approx 6% APR money factor
    residualPercent,
    18 // GST
  );

  const handleReset = () => {
    setCarPrice(2500000);
    setDownPayment(500000);
    setFinanceRate(9.0);
    setFinanceMonths(60);
    setLeaseMonths(36);
    setResidualPercent(52);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Input Card */}
        <div className="lg:col-span-6 p-8 bg-white border border-[#E0D9CD] rounded-sm shadow-sm space-y-4">
          <div className="flex justify-between items-center pb-4 border-b border-[#EFECE6]">
            <div>
              <h2 className="text-xl font-serif font-bold text-slate-900">10. Car Lease vs. Loan Calculator</h2>
              <p className="text-xs text-slate-500 font-light mt-0.5">Compare corporate leasing vs ownership loan funding</p>
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
              <label className="font-semibold text-slate-700 block mb-1">Vehicle Price Ex-Showroom (₹)</label>
              <input
                type="number"
                value={carPrice}
                onChange={(e) => setCarPrice(Number(e.target.value))}
                className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded font-mono"
              />
            </div>
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Down Payment / Initial Margin (₹)</label>
              <input
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded font-mono"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Loan Rate (% p.a.)</label>
                <input
                  type="number"
                  step="0.1"
                  value={financeRate}
                  onChange={(e) => setFinanceRate(Number(e.target.value))}
                  className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded font-mono"
                />
              </div>
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Loan Tenure (Months)</label>
                <input
                  type="number"
                  value={financeMonths}
                  onChange={(e) => setFinanceMonths(Number(e.target.value))}
                  className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded font-mono"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Lease Tenure (Months)</label>
                <input
                  type="number"
                  value={leaseMonths}
                  onChange={(e) => setLeaseMonths(Number(e.target.value))}
                  className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded font-mono"
                />
              </div>
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Estimated Residual Value (%)</label>
                <input
                  type="number"
                  value={residualPercent}
                  onChange={(e) => setResidualPercent(Number(e.target.value))}
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
              MONTHLY PAYMENT COMPARISON
            </span>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="p-4 bg-[#091528] border border-[#162744] rounded">
                <span className="text-[10px] text-slate-400 block uppercase">Ownership Loan EMI</span>
                <span className="font-serif text-2xl font-bold text-white block mt-1">{formatINR(res.financeMonthlyEMI)}</span>
                <span className="text-[10px] text-slate-400 mt-1 block font-mono">Total: {formatINR(res.financeTotalCost)}</span>
              </div>
              <div className="p-4 bg-[#091528] border border-[#162744] rounded">
                <span className="text-[10px] text-[#C5A059] block uppercase">Operating Lease Monthly</span>
                <span className="font-serif text-2xl font-bold text-[#C5A059] block mt-1">{formatINR(res.leaseMonthlyPayment)}</span>
                <span className="text-[10px] text-slate-400 mt-1 block font-mono">Total: {formatINR(res.leaseTotalCost)}</span>
              </div>
            </div>

            <div className="space-y-3 p-4 bg-[#091528] border border-[#162744] rounded-sm text-xs mt-4">
              <div className="flex justify-between">
                <span className="text-slate-400">Monthly Cashflow Differential:</span>
                <span className="text-emerald-400 font-bold">{formatINR(Math.abs(res.monthlyDifference))} / mo (Lease lower)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Estimated Residual Balloon Value:</span>
                <span className="text-white font-mono">{formatINR(res.residualValueAmount)}</span>
              </div>
              <div className="pt-2 border-t border-[#14233D] text-[11px] text-slate-400 leading-relaxed">
                *Operating leases provide tax-deductible expense benefits for registered corporate entities and businesses.
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#122038]">
            <a
              href="/contact"
              className="w-full text-center py-3.5 bg-[#C5A059] text-[#050C18] font-bold text-xs uppercase tracking-[0.18em] hover:bg-[#D4B473] transition-all rounded-sm block shadow-md"
            >
              Inquire Corporate Fleet &amp; Asset Finance
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
