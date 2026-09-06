import { useState } from 'react';
import { RotateCcw, Plus, Trash2 } from 'lucide-react';
import { calculateDebtPayoff, DebtItem, formatINR } from '../../utils/calculatorMath';

export function DebtPayoffCalculator() {
  const [debts, setDebts] = useState<DebtItem[]>([
    { id: '1', name: 'Credit Card Outstanding', balance: 250000, interestRate: 38, minPayment: 12500 },
    { id: '2', name: 'Personal Loan', balance: 500000, interestRate: 14.5, minPayment: 14000 },
    { id: '3', name: 'Car Loan Facility', balance: 400000, interestRate: 9.5, minPayment: 9000 }
  ]);
  const [extraPayment, setExtraPayment] = useState<number>(15000);
  const [strategy, setStrategy] = useState<'avalanche' | 'snowball'>('avalanche');

  const res = calculateDebtPayoff(debts, extraPayment, strategy);

  const addDebt = () => {
    setDebts((prev) => [
      ...prev,
      { id: Date.now().toString(), name: 'New Debt Account', balance: 100000, interestRate: 12, minPayment: 3000 }
    ]);
  };

  const removeDebt = (id: string) => {
    setDebts((prev) => prev.filter((d) => d.id !== id));
  };

  const updateDebt = (id: string, field: keyof DebtItem, val: any) => {
    setDebts((prev) => prev.map((d) => (d.id === id ? { ...d, [field]: val } : d)));
  };

  const handleReset = () => {
    setDebts([
      { id: '1', name: 'Credit Card Outstanding', balance: 250000, interestRate: 38, minPayment: 12500 },
      { id: '2', name: 'Personal Loan', balance: 500000, interestRate: 14.5, minPayment: 14000 },
      { id: '3', name: 'Car Loan Facility', balance: 400000, interestRate: 9.5, minPayment: 9000 }
    ]);
    setExtraPayment(15000);
    setStrategy('avalanche');
  };

  return (
    <div className="space-y-8">
      <div className="p-8 bg-white border border-[#E0D9CD] rounded-sm shadow-sm space-y-6">
        <div className="flex justify-between items-center pb-4 border-b border-[#EFECE6]">
          <div>
            <h2 className="text-xl font-serif font-bold text-slate-900">14. Multi-Debt Payoff Calculator</h2>
            <p className="text-xs text-slate-500 font-light mt-0.5">Compare Debt Avalanche (Highest APR First) vs Debt Snowball (Lowest Balance First)</p>
          </div>
          <button
            onClick={handleReset}
            className="text-xs font-semibold text-slate-500 hover:text-[#9A7830] flex items-center gap-1.5 transition-colors px-2.5 py-1 rounded bg-[#FAF8F5] border border-[#E0D9CD]"
          >
            <RotateCcw className="h-3.5 w-3.5" /> Reset
          </button>
        </div>

        {/* Strategy and Extra Payment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-[#FAF8F5] border border-[#DDD5C7] rounded-sm">
          <div>
            <label className="font-semibold text-xs text-slate-800 block mb-2">Payoff Strategy Protocol</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setStrategy('avalanche')}
                className={`p-2.5 text-xs font-bold rounded ${strategy === 'avalanche' ? 'bg-[#050C18] text-[#C5A059]' : 'bg-white text-slate-600 border border-[#DDD5C7]'}`}
              >
                Avalanche (Highest Interest First)
              </button>
              <button
                type="button"
                onClick={() => setStrategy('snowball')}
                className={`p-2.5 text-xs font-bold rounded ${strategy === 'snowball' ? 'bg-[#050C18] text-[#C5A059]' : 'bg-white text-slate-600 border border-[#DDD5C7]'}`}
              >
                Snowball (Lowest Balance First)
              </button>
            </div>
          </div>
          <div>
            <label className="font-semibold text-xs text-slate-800 block mb-1">
              Extra Monthly Payment Allocated: <span className="text-[#9A7830] font-mono font-bold">{formatINR(extraPayment)}</span>
            </label>
            <input
              type="range"
              min={0}
              max={100000}
              step={1000}
              value={extraPayment}
              onChange={(e) => setExtraPayment(Number(e.target.value))}
              className="w-full accent-[#C5A059] cursor-pointer mt-2"
            />
          </div>
        </div>

        {/* Debts List */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-serif font-bold text-sm text-slate-900">Current Debt Obligations</h3>
            <button
              onClick={addDebt}
              className="text-xs font-bold text-[#050C18] bg-[#C5A059] px-3 py-1.5 rounded flex items-center gap-1 hover:bg-[#D4B473]"
            >
              <Plus className="h-3.5 w-3.5" /> Add Debt
            </button>
          </div>

          <div className="space-y-3">
            {debts.map((debt) => (
              <div key={debt.id} className="grid grid-cols-1 sm:grid-cols-12 gap-3 p-3 bg-[#FAF8F5] border border-[#DDD5C7] rounded items-center text-xs">
                <div className="sm:col-span-4">
                  <input
                    type="text"
                    value={debt.name}
                    onChange={(e) => updateDebt(debt.id, 'name', e.target.value)}
                    className="w-full p-1.5 bg-white border border-[#DDD5C7] rounded font-medium"
                    placeholder="Debt Name"
                  />
                </div>
                <div className="sm:col-span-3">
                  <input
                    type="number"
                    value={debt.balance}
                    onChange={(e) => updateDebt(debt.id, 'balance', Number(e.target.value))}
                    className="w-full p-1.5 bg-white border border-[#DDD5C7] rounded font-mono"
                    placeholder="Balance ₹"
                  />
                </div>
                <div className="sm:col-span-2">
                  <input
                    type="number"
                    step="0.1"
                    value={debt.interestRate}
                    onChange={(e) => updateDebt(debt.id, 'interestRate', Number(e.target.value))}
                    className="w-full p-1.5 bg-white border border-[#DDD5C7] rounded font-mono"
                    placeholder="Interest %"
                  />
                </div>
                <div className="sm:col-span-2">
                  <input
                    type="number"
                    value={debt.minPayment}
                    onChange={(e) => updateDebt(debt.id, 'minPayment', Number(e.target.value))}
                    className="w-full p-1.5 bg-white border border-[#DDD5C7] rounded font-mono"
                    placeholder="Min EMI ₹"
                  />
                </div>
                <div className="sm:col-span-1 text-right">
                  <button
                    onClick={() => removeDebt(debt.id)}
                    className="text-slate-400 hover:text-red-600 p-1"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Result Card */}
      <div className="p-8 bg-[#050C18] text-white border border-[#14233D] rounded-sm shadow-md space-y-6">
        <span className="text-[#C5A059] text-[10px] font-bold tracking-[0.25em] uppercase block">
          ACCELERATED DEBT FREEDOM SCHEDULE ({strategy.toUpperCase()})
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-4 bg-[#091528] border border-[#162744] rounded">
            <span className="text-[10px] text-slate-400 block uppercase">Debt-Free In</span>
            <span className="font-serif text-3xl font-bold text-white block mt-1">{res.monthsToDebtFree} Months</span>
            <span className="text-[10px] text-emerald-400 mt-1 block">({(res.monthsToDebtFree / 12).toFixed(1)} Years)</span>
          </div>
          <div className="p-4 bg-[#091528] border border-[#162744] rounded">
            <span className="text-[10px] text-[#C5A059] block uppercase">Interest Saved</span>
            <span className="font-serif text-3xl font-bold text-[#C5A059] block mt-1">{formatINR(res.interestSavedVsMin)}</span>
            <span className="text-[10px] text-slate-400 mt-1 block">vs minimum payments</span>
          </div>
          <div className="p-4 bg-[#091528] border border-[#162744] rounded">
            <span className="text-[10px] text-slate-400 block uppercase">Time Saved</span>
            <span className="font-serif text-3xl font-bold text-emerald-400 block mt-1">{res.monthsSaved} Months</span>
            <span className="text-[10px] text-slate-400 mt-1 block">Shaved off debt tenure</span>
          </div>
        </div>
      </div>
    </div>
  );
}
