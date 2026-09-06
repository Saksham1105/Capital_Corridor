import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { calculateEMI, formatINR } from '../../utils/calculatorMath';

export function EmiCalculator() {
  const [loanAmount, setLoanAmount] = useState<number>(5000000);
  const [rate, setRate] = useState<number>(9.5);
  const [tenureYears, setTenureYears] = useState<number>(15);

  const result = calculateEMI(loanAmount, rate, tenureYears);
  const principalPercent = result.totalPayable > 0 ? Math.round((result.principalAmount / result.totalPayable) * 100) : 0;
  const interestPercent = result.totalPayable > 0 ? Math.round((result.totalInterest / result.totalPayable) * 100) : 0;

  const handleReset = () => {
    setLoanAmount(5000000);
    setRate(9.5);
    setTenureYears(15);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Input Card */}
        <div className="lg:col-span-6 p-8 bg-white border border-[#E0D9CD] rounded-sm shadow-sm space-y-6">
          <div className="flex justify-between items-center pb-4 border-b border-[#EFECE6]">
            <div>
              <h2 className="text-xl font-serif font-bold text-slate-900">1. EMI Calculator</h2>
              <p className="text-xs text-slate-500 font-light mt-0.5">Model monthly installments and total interest outflow</p>
            </div>
            <button
              onClick={handleReset}
              className="text-xs font-semibold text-slate-500 hover:text-[#9A7830] flex items-center gap-1.5 transition-colors px-2.5 py-1 rounded bg-[#FAF8F5] border border-[#E0D9CD]"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Reset
            </button>
          </div>

          {/* Loan Amount */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold text-slate-800">
              <span>Loan Amount</span>
              <span className="text-[#9A7830] font-mono text-sm font-bold">{formatINR(loanAmount)}</span>
            </div>
            <input
              type="range"
              min={100000}
              max={250000000}
              step={100000}
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full accent-[#C5A059] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-light">
              <span>₹1 Lakh</span>
              <span>₹10 Cr</span>
              <span>₹25 Cr</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold text-slate-800">
              <span>Annual Interest Rate (% p.a.)</span>
              <span className="text-[#9A7830] font-mono text-sm font-bold">{rate}%</span>
            </div>
            <input
              type="range"
              min={5}
              max={22}
              step={0.1}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full accent-[#C5A059] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-light">
              <span>5%</span>
              <span>12%</span>
              <span>22%</span>
            </div>
          </div>

          {/* Tenure */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold text-slate-800">
              <span>Loan Tenure (Years)</span>
              <span className="text-[#9A7830] font-mono text-sm font-bold">{tenureYears} Years ({tenureYears * 12} Mos)</span>
            </div>
            <input
              type="range"
              min={1}
              max={30}
              step={1}
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full accent-[#C5A059] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-light">
              <span>1 Year</span>
              <span>15 Years</span>
              <span>30 Years</span>
            </div>
          </div>
        </div>

        {/* Result Card */}
        <div className="lg:col-span-6 p-8 bg-[#050C18] text-white border border-[#14233D] rounded-sm shadow-md flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

          <div>
            <span className="text-[#C5A059] text-[10px] font-bold tracking-[0.25em] uppercase block mb-1">
              MONTHLY INSTALLMENT
            </span>
            <p className="text-4xl sm:text-5xl font-serif text-white font-bold mb-6 tracking-tight">
              {formatINR(result.monthlyEMI)} <span className="text-xs text-slate-400 font-sans font-light">/ month</span>
            </p>

            <div className="grid grid-cols-2 gap-4 p-4 bg-[#091528] border border-[#162744] rounded-sm mb-6">
              <div>
                <span className="text-slate-400 text-xs block font-light">Principal Borrowed</span>
                <span className="text-white font-serif text-lg font-bold">{formatINR(result.principalAmount)}</span>
              </div>
              <div>
                <span className="text-slate-400 text-xs block font-light">Total Interest</span>
                <span className="text-[#C5A059] font-serif text-lg font-bold">{formatINR(result.totalInterest)}</span>
              </div>
              <div className="col-span-2 pt-3 border-t border-[#162744]">
                <span className="text-slate-400 text-xs block font-light">Total Outflow Over Tenure</span>
                <span className="text-white font-serif text-xl font-bold">{formatINR(result.totalPayable)}</span>
              </div>
            </div>

            {/* Principal vs Interest Breakdown Bar */}
            <div className="space-y-1.5 mb-6">
              <div className="flex justify-between text-xs text-slate-300">
                <span>Principal: <strong className="text-white">{principalPercent}%</strong></span>
                <span>Interest: <strong className="text-[#C5A059]">{interestPercent}%</strong></span>
              </div>
              <div className="h-2.5 w-full bg-[#112240] flex rounded-full overflow-hidden">
                <div className="bg-[#C5A059] transition-all duration-300" style={{ width: `${principalPercent}%` }} />
                <div className="bg-amber-600 transition-all duration-300" style={{ width: `${interestPercent}%` }} />
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#122038]">
            <a
              href="/contact"
              className="w-full text-center py-3.5 bg-[#C5A059] text-[#050C18] font-bold text-xs uppercase tracking-[0.18em] hover:bg-[#D4B473] transition-all rounded-sm block shadow-md"
            >
              Discuss Structured Debt Options
            </a>
          </div>
        </div>
      </div>

      {/* Amortization Schedule */}
      {result.yearlySchedule.length > 0 && (
        <div className="p-8 bg-white border border-[#E0D9CD] rounded-sm shadow-sm">
          <h3 className="text-lg font-serif font-bold text-slate-900 mb-4">Yearly Amortization Schedule</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-[#050C18] text-[#C5A059] uppercase tracking-wider font-mono">
                  <th className="p-3">Year</th>
                  <th className="p-3">Principal Paid (₹)</th>
                  <th className="p-3">Interest Paid (₹)</th>
                  <th className="p-3">Balance Remaining (₹)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-light">
                {result.yearlySchedule.map((row) => (
                  <tr key={row.year} className="hover:bg-[#FAF8F5] transition-colors">
                    <td className="p-3 font-semibold text-slate-900">Year {row.year}</td>
                    <td className="p-3 text-slate-700 font-mono">{formatINR(row.principalPaid)}</td>
                    <td className="p-3 text-amber-800 font-mono">{formatINR(row.interestPaid)}</td>
                    <td className="p-3 text-slate-900 font-mono font-medium">{formatINR(row.balanceRemaining)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
