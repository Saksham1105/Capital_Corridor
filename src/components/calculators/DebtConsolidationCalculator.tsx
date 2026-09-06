import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { calculateDebtConsolidation, ExistingDebtForConsolidation, formatINR } from '../../utils/calculatorMath';

export function DebtConsolidationCalculator() {
  const [debts, setDebts] = useState<ExistingDebtForConsolidation[]>([
    { name: 'High-Interest Credit Cards', balance: 400000, interestRate: 38, monthlyPayment: 18000 },
    { name: 'Personal Unsecured Loan', balance: 600000, interestRate: 15, monthlyPayment: 16500 },
    { name: 'Equipment Loan', balance: 500000, interestRate: 12.5, monthlyPayment: 12000 }
  ]);
  const [newRate, setNewRate] = useState<number>(9.5); // Consolidated structured facility rate
  const [newTenureYears, setNewTenureYears] = useState<number>(5);
  const [feePercent, setFeePercent] = useState<number>(1.0);

  const res = calculateDebtConsolidation(debts, newRate, newTenureYears, feePercent);

  const updateDebt = (idx: number, field: keyof ExistingDebtForConsolidation, val: any) => {
    setDebts((prev) => {
      const next = [...prev];
      next[idx] = { ...next[idx], [field]: val };
      return next;
    });
  };

  const handleReset = () => {
    setDebts([
      { name: 'High-Interest Credit Cards', balance: 400000, interestRate: 38, monthlyPayment: 18000 },
      { name: 'Personal Unsecured Loan', balance: 600000, interestRate: 15, monthlyPayment: 16500 },
      { name: 'Equipment Loan', balance: 500000, interestRate: 12.5, monthlyPayment: 12000 }
    ]);
    setNewRate(9.5);
    setNewTenureYears(5);
    setFeePercent(1.0);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Input Card */}
        <div className="lg:col-span-6 p-8 bg-white border border-[#E0D9CD] rounded-sm shadow-sm space-y-4">
          <div className="flex justify-between items-center pb-4 border-b border-[#EFECE6]">
            <div>
              <h2 className="text-xl font-serif font-bold text-slate-900">15. Debt Consolidation Calculator</h2>
              <p className="text-xs text-slate-500 font-light mt-0.5">Combine high-cost fragmented liabilities into one lower-cost structured credit facility</p>
            </div>
            <button
              onClick={handleReset}
              className="text-xs font-semibold text-slate-500 hover:text-[#9A7830] flex items-center gap-1.5 transition-colors px-2.5 py-1 rounded bg-[#FAF8F5] border border-[#E0D9CD]"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Reset
            </button>
          </div>

          {/* Current Debts List */}
          <div className="space-y-3">
            <label className="font-semibold text-xs text-slate-800 block">Existing Fragmented Debt Accounts</label>
            {debts.map((debt, idx) => (
              <div key={idx} className="p-3 bg-[#FAF8F5] border border-[#DDD5C7] rounded text-xs space-y-2">
                <input
                  type="text"
                  value={debt.name}
                  onChange={(e) => updateDebt(idx, 'name', e.target.value)}
                  className="font-medium text-slate-900 bg-transparent border-b border-slate-300 w-full pb-1 focus:outline-none"
                />
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <span className="text-[10px] text-slate-500 block">Balance (₹)</span>
                    <input
                      type="number"
                      value={debt.balance}
                      onChange={(e) => updateDebt(idx, 'balance', Number(e.target.value))}
                      className="w-full p-1 bg-white border border-[#DDD5C7] rounded font-mono"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">Interest Rate (%)</span>
                    <input
                      type="number"
                      step="0.5"
                      value={debt.interestRate}
                      onChange={(e) => updateDebt(idx, 'interestRate', Number(e.target.value))}
                      className="w-full p-1 bg-white border border-[#DDD5C7] rounded font-mono"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">Current EMI (₹)</span>
                    <input
                      type="number"
                      value={debt.monthlyPayment}
                      onChange={(e) => updateDebt(idx, 'monthlyPayment', Number(e.target.value))}
                      className="w-full p-1 bg-white border border-[#DDD5C7] rounded font-mono"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Consolidated Loan Terms */}
          <div className="pt-2 border-t border-slate-200 space-y-3 text-xs">
            <label className="font-semibold text-slate-800 block">New Consolidated Facility Structure</label>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <span className="text-slate-600 block mb-1">New Consolidated Rate (% p.a.)</span>
                <input
                  type="number"
                  step="0.1"
                  value={newRate}
                  onChange={(e) => setNewRate(Number(e.target.value))}
                  className="w-full p-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded font-mono"
                />
              </div>
              <div>
                <span className="text-slate-600 block mb-1">New Tenure (Years)</span>
                <input
                  type="number"
                  value={newTenureYears}
                  onChange={(e) => setNewTenureYears(Number(e.target.value))}
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
              MONTHLY CASHFLOW RELIEF
            </span>
            <p className="text-4xl sm:text-5xl font-serif text-white font-bold mb-6 tracking-tight">
              {formatINR(res.monthlySavings)} <span className="text-xs text-slate-400 font-sans font-light">saved / month</span>
            </p>

            <div className="space-y-3 p-4 bg-[#091528] border border-[#162744] rounded-sm text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">Total Debt Consolidated:</span>
                <span className="text-white font-mono font-bold">{formatINR(res.currentTotalBalance)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Current Weighted Interest Rate:</span>
                <span className="text-amber-400 font-bold font-mono">{res.currentWeightedRate}% p.a.</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">New Single Facility Rate:</span>
                <span className="text-emerald-400 font-bold font-mono">{newRate}% p.a.</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#14233D]">
                <span className="text-slate-400">Current Total Monthly Payment:</span>
                <span className="text-slate-300 font-mono">{formatINR(res.currentTotalMonthlyPayment)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">New Single Monthly EMI:</span>
                <span className="text-[#C5A059] font-mono font-bold text-sm">{formatINR(res.consolidatedMonthlyEMI)}</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#122038]">
            <a
              href="/contact"
              className="w-full text-center py-3.5 bg-[#C5A059] text-[#050C18] font-bold text-xs uppercase tracking-[0.18em] hover:bg-[#D4B473] transition-all rounded-sm block shadow-md"
            >
              Structure Debt Consolidation Mandate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
