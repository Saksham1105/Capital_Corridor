/**
 * Comprehensive financial calculation engines for Capital Corridor Financial Tools.
 * All functions include zero-division guards, edge-case handling, and precision rounding.
 */

// ==========================================
// 1. FORMATTING UTILITIES
// ==========================================
export function formatINR(val: number, includeDecimals = false): string {
  if (isNaN(val) || !isFinite(val)) return '₹0';
  const rounded = includeDecimals ? Math.round(val * 100) / 100 : Math.round(val);
  return '₹' + rounded.toLocaleString('en-IN', {
    maximumFractionDigits: includeDecimals ? 2 : 0,
    minimumFractionDigits: includeDecimals ? 2 : 0
  });
}

export function formatPercent(val: number, decimals = 2): string {
  if (isNaN(val) || !isFinite(val)) return '0.00%';
  return (Math.round(val * Math.pow(10, decimals)) / Math.pow(10, decimals)).toFixed(decimals) + '%';
}

// ==========================================
// 2. 1. EMI CALCULATOR
// ==========================================
export interface EMIResult {
  monthlyEMI: number;
  totalInterest: number;
  totalPayable: number;
  principalAmount: number;
  yearlySchedule: Array<{
    year: number;
    principalPaid: number;
    interestPaid: number;
    balanceRemaining: number;
  }>;
}

export function calculateEMI(principal: number, ratePerAnnum: number, tenureYears: number): EMIResult {
  const p = Math.max(0, principal);
  const r = Math.max(0, ratePerAnnum) / 12 / 100;
  const n = Math.max(1, Math.round(tenureYears * 12));

  if (p === 0) {
    return { monthlyEMI: 0, totalInterest: 0, totalPayable: 0, principalAmount: 0, yearlySchedule: [] };
  }

  if (r === 0) {
    const emi = p / n;
    return {
      monthlyEMI: Math.round(emi),
      totalInterest: 0,
      totalPayable: p,
      principalAmount: p,
      yearlySchedule: []
    };
  }

  const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalPayable = emi * n;
  const totalInterest = totalPayable - p;

  let balance = p;
  const yearlySchedule = [];
  let curYearPrincipal = 0;
  let curYearInterest = 0;

  for (let month = 1; month <= n; month++) {
    const interestForMonth = balance * r;
    const principalForMonth = emi - interestForMonth;
    balance = Math.max(0, balance - principalForMonth);

    curYearPrincipal += principalForMonth;
    curYearInterest += interestForMonth;

    if (month % 12 === 0 || month === n) {
      yearlySchedule.push({
        year: Math.ceil(month / 12),
        principalPaid: Math.round(curYearPrincipal),
        interestPaid: Math.round(curYearInterest),
        balanceRemaining: Math.round(balance)
      });
      curYearPrincipal = 0;
      curYearInterest = 0;
    }
  }

  return {
    monthlyEMI: Math.round(emi),
    totalInterest: Math.round(totalInterest),
    totalPayable: Math.round(totalPayable),
    principalAmount: Math.round(p),
    yearlySchedule
  };
}

// ==========================================
// 3. 2. RATIO ANALYSIS CALCULATOR
// ==========================================
export interface RatioAnalysisInputs {
  revenue: number;
  cogs: number;
  operatingExpenses: number;
  ebit: number;
  interestExpense: number;
  netIncome: number;
  currentAssets: number;
  inventory: number;
  cash: number;
  currentLiabilities: number;
  totalDebt: number;
  totalEquity: number;
  totalAssets: number;
}

export interface RatioAnalysisResult {
  currentRatio: number;
  quickRatio: number;
  cashRatio: number;
  grossMargin: number;
  operatingMargin: number;
  netMargin: number;
  roe: number;
  roa: number;
  debtToEquity: number;
  debtToAssets: number;
  interestCoverage: number;
}

export function calculateRatioAnalysis(i: RatioAnalysisInputs): RatioAnalysisResult {
  const currentRatio = i.currentLiabilities > 0 ? i.currentAssets / i.currentLiabilities : 0;
  const quickRatio = i.currentLiabilities > 0 ? (i.currentAssets - i.inventory) / i.currentLiabilities : 0;
  const cashRatio = i.currentLiabilities > 0 ? i.cash / i.currentLiabilities : 0;

  const grossProfit = i.revenue - i.cogs;
  const grossMargin = i.revenue > 0 ? (grossProfit / i.revenue) * 100 : 0;
  const operatingMargin = i.revenue > 0 ? (i.ebit / i.revenue) * 100 : 0;
  const netMargin = i.revenue > 0 ? (i.netIncome / i.revenue) * 100 : 0;

  const roe = i.totalEquity > 0 ? (i.netIncome / i.totalEquity) * 100 : 0;
  const roa = i.totalAssets > 0 ? (i.netIncome / i.totalAssets) * 100 : 0;

  const debtToEquity = i.totalEquity > 0 ? i.totalDebt / i.totalEquity : 0;
  const debtToAssets = i.totalAssets > 0 ? i.totalDebt / i.totalAssets : 0;
  const interestCoverage = i.interestExpense > 0 ? i.ebit / i.interestExpense : 0;

  return {
    currentRatio: Number(currentRatio.toFixed(2)),
    quickRatio: Number(quickRatio.toFixed(2)),
    cashRatio: Number(cashRatio.toFixed(2)),
    grossMargin: Number(grossMargin.toFixed(2)),
    operatingMargin: Number(operatingMargin.toFixed(2)),
    netMargin: Number(netMargin.toFixed(2)),
    roe: Number(roe.toFixed(2)),
    roa: Number(roa.toFixed(2)),
    debtToEquity: Number(debtToEquity.toFixed(2)),
    debtToAssets: Number(debtToAssets.toFixed(2)),
    interestCoverage: Number(interestCoverage.toFixed(2))
  };
}

// ==========================================
// 4. 3. MORTGAGE COMPARISON CALCULATOR
// ==========================================
export interface MortgageOption {
  name: string;
  loanAmount: number;
  interestRate: number;
  tenureYears: number;
  fees: number;
}

export interface MortgageOptionResult {
  name: string;
  monthlyPayment: number;
  totalInterest: number;
  totalCost: number;
  monthlyDifference: number;
  totalSavingsVsBase: number;
}

export function calculateMortgageComparison(options: MortgageOption[]): MortgageOptionResult[] {
  if (!options.length) return [];

  const baseCalculated = calculateEMI(options[0].loanAmount, options[0].interestRate, options[0].tenureYears);
  const baseTotalCost = baseCalculated.totalPayable + (options[0].fees || 0);

  return options.map((opt) => {
    const res = calculateEMI(opt.loanAmount, opt.interestRate, opt.tenureYears);
    const totalCost = res.totalPayable + (opt.fees || 0);
    return {
      name: opt.name,
      monthlyPayment: res.monthlyEMI,
      totalInterest: res.totalInterest,
      totalCost,
      monthlyDifference: res.monthlyEMI - baseCalculated.monthlyEMI,
      totalSavingsVsBase: baseTotalCost - totalCost
    };
  });
}

// ==========================================
// 5. 4. WACC CALCULATOR
// ==========================================
export interface WACCResult {
  wacc: number;
  totalCapital: number;
  equityWeight: number;
  debtWeight: number;
  afterTaxCostOfDebt: number;
}

export function calculateWACC(
  equityValue: number,
  costOfEquity: number,
  debtValue: number,
  costOfDebt: number,
  taxRate: number
): WACCResult {
  const e = Math.max(0, equityValue);
  const d = Math.max(0, debtValue);
  const v = e + d;

  if (v === 0) {
    return { wacc: 0, totalCapital: 0, equityWeight: 0, debtWeight: 0, afterTaxCostOfDebt: 0 };
  }

  const we = e / v;
  const wd = d / v;
  const ke = costOfEquity / 100;
  const kd = costOfDebt / 100;
  const t = Math.min(100, Math.max(0, taxRate)) / 100;

  const afterTaxKd = kd * (1 - t);
  const wacc = (we * ke) + (wd * afterTaxKd);

  return {
    wacc: Number((wacc * 100).toFixed(2)),
    totalCapital: v,
    equityWeight: Number((we * 100).toFixed(1)),
    debtWeight: Number((wd * 100).toFixed(1)),
    afterTaxCostOfDebt: Number((afterTaxKd * 100).toFixed(2))
  };
}

// ==========================================
// 6. 5. CAPM CALCULATOR
// ==========================================
export interface CAPMResult {
  expectedReturn: number;
  marketRiskPremium: number;
  riskCategory: string;
}

export function calculateCAPM(riskFreeRate: number, beta: number, marketReturn: number): CAPMResult {
  const rf = riskFreeRate;
  const b = beta;
  const rm = marketReturn;
  const mrp = rm - rf;
  const er = rf + (b * mrp);

  let riskCategory = "Neutral Market Volatility (Beta = 1.0)";
  if (b < 0.8) riskCategory = "Low Volatility / Defensive Asset (Beta < 0.8)";
  else if (b > 1.2) riskCategory = "High Volatility / Aggressive Growth (Beta > 1.2)";

  return {
    expectedReturn: Number(er.toFixed(2)),
    marketRiskPremium: Number(mrp.toFixed(2)),
    riskCategory
  };
}

// ==========================================
// 7. 6. YIELD TO MATURITY (YTM) CALCULATOR
// ==========================================
export interface YTMResult {
  ytm: number;
  currentYield: number;
  annualCoupon: number;
  totalCoupons: number;
  capitalGainLoss: number;
}

export function calculateYTM(
  currentPrice: number,
  faceValue: number,
  couponRatePercent: number,
  tenureYears: number,
  frequency: number = 1 // 1 = annual, 2 = semi-annual
): YTMResult {
  const p = Math.max(1, currentPrice);
  const m = Math.max(1, faceValue);
  const cRate = Math.max(0, couponRatePercent) / 100;
  const t = Math.max(0.25, tenureYears);
  const annualCoupon = m * cRate;
  const totalCoupons = annualCoupon * t;
  const capitalGainLoss = m - p;
  const currentYield = (annualCoupon / p) * 100;

  // Exact iterative solve for YTM via Newton-Raphson
  const periods = Math.round(t * frequency);
  const couponPerPeriod = annualCoupon / frequency;
  let y = ((annualCoupon + (m - p) / t) / ((m + p) / 2)) / frequency; // Initial guess

  for (let iter = 0; iter < 100; iter++) {
    if (y <= -1) { y = 0.001; break; }
    let pv = 0;
    let dPv = 0;

    for (let k = 1; k <= periods; k++) {
      const disc = Math.pow(1 + y, k);
      pv += couponPerPeriod / disc;
      dPv += (-k * couponPerPeriod) / (disc * (1 + y));
    }
    const faceDisc = Math.pow(1 + y, periods);
    pv += m / faceDisc;
    dPv += (-periods * m) / (faceDisc * (1 + y));

    const diff = pv - p;
    if (Math.abs(diff) < 1e-6) break;
    y = y - (diff / dPv);
  }

  const annualizedYTM = Math.max(0, y * frequency * 100);

  return {
    ytm: Number(annualizedYTM.toFixed(2)),
    currentYield: Number(currentYield.toFixed(2)),
    annualCoupon: Math.round(annualCoupon),
    totalCoupons: Math.round(totalCoupons),
    capitalGainLoss: Math.round(capitalGainLoss)
  };
}

// ==========================================
// 8. 7. INVESTMENT & SIP CALCULATOR
// ==========================================
export interface InvestmentResult {
  futureValue: number;
  totalInvested: number;
  totalWealthGained: number;
  multiplier: number;
}

export function calculateInvestment(
  initialLumpsum: number,
  monthlyContribution: number,
  annualReturnRate: number,
  tenureYears: number
): InvestmentResult {
  const p = Math.max(0, initialLumpsum);
  const pmt = Math.max(0, monthlyContribution);
  const r = Math.max(0, annualReturnRate) / 12 / 100;
  const n = Math.max(1, Math.round(tenureYears * 12));

  let futureValue = 0;
  if (r === 0) {
    futureValue = p + (pmt * n);
  } else {
    // Lump sum growth + monthly SIP (beginning of month annuity)
    const lumpSumFV = p * Math.pow(1 + r, n);
    const sipFV = pmt * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    futureValue = lumpSumFV + sipFV;
  }

  const totalInvested = p + (pmt * n);
  const totalWealthGained = Math.max(0, futureValue - totalInvested);
  const multiplier = totalInvested > 0 ? Number((futureValue / totalInvested).toFixed(2)) : 0;

  return {
    futureValue: Math.round(futureValue),
    totalInvested: Math.round(totalInvested),
    totalWealthGained: Math.round(totalWealthGained),
    multiplier
  };
}

// ==========================================
// 9. 8. COMPOUND INTEREST CALCULATOR
// ==========================================
export interface CompoundInterestResult {
  futureValue: number;
  totalPrincipal: number;
  totalInterest: number;
  effectiveAnnualRate: number;
}

export function calculateCompoundInterest(
  principal: number,
  annualRate: number,
  tenureYears: number,
  compoundingFrequency: number = 12 // 12 = Monthly, 4 = Quarterly, 1 = Annually
): CompoundInterestResult {
  const p = Math.max(0, principal);
  const r = Math.max(0, annualRate) / 100;
  const m = Math.max(1, compoundingFrequency);
  const t = Math.max(0.1, tenureYears);

  const fv = p * Math.pow(1 + (r / m), m * t);
  const totalInterest = fv - p;
  const ear = (Math.pow(1 + (r / m), m) - 1) * 100;

  return {
    futureValue: Math.round(fv),
    totalPrincipal: Math.round(p),
    totalInterest: Math.round(totalInterest),
    effectiveAnnualRate: Number(ear.toFixed(2))
  };
}

// ==========================================
// 10. 9. HOME REFINANCE CALCULATOR
// ==========================================
export interface RefinanceResult {
  currentEMI: number;
  newEMI: number;
  monthlySavings: number;
  currentRemainingTotal: number;
  newTotalCost: number;
  netLifetimeSavings: number;
  breakEvenMonths: number;
}

export function calculateRefinance(
  remainingBalance: number,
  currentRate: number,
  remainingYears: number,
  newRate: number,
  newTenureYears: number,
  closingCosts: number
): RefinanceResult {
  const current = calculateEMI(remainingBalance, currentRate, remainingYears);
  const newLoan = calculateEMI(remainingBalance, newRate, newTenureYears);

  const monthlySavings = current.monthlyEMI - newLoan.monthlyEMI;
  const currentRemainingTotal = current.totalPayable;
  const newTotalCost = newLoan.totalPayable + closingCosts;
  const netLifetimeSavings = currentRemainingTotal - newTotalCost;

  const breakEvenMonths = monthlySavings > 0 ? Math.ceil(closingCosts / monthlySavings) : 0;

  return {
    currentEMI: current.monthlyEMI,
    newEMI: newLoan.monthlyEMI,
    monthlySavings,
    currentRemainingTotal: current.totalPayable,
    newTotalCost,
    netLifetimeSavings,
    breakEvenMonths
  };
}

// ==========================================
// 11. 10. CAR LEASE VS FINANCE CALCULATOR
// ==========================================
export interface CarLeaseFinanceResult {
  financeMonthlyEMI: number;
  financeTotalCost: number;
  leaseMonthlyPayment: number;
  leaseTotalCost: number;
  monthlyDifference: number;
  residualValueAmount: number;
}

export function calculateCarLeaseVsFinance(
  carPrice: number,
  downPayment: number,
  financeRate: number,
  financeTermMonths: number,
  leaseTermMonths: number,
  moneyFactor: number, // e.g. 0.0025 (approx 6% APR)
  residualValuePercent: number = 55,
  salesTaxPercent: number = 18
): CarLeaseFinanceResult {
  const price = Math.max(0, carPrice);
  const down = Math.min(price, Math.max(0, downPayment));
  const taxRate = salesTaxPercent / 100;

  // Finance Loan
  const loanPrincipal = (price - down) * (1 + taxRate);
  const finEmiRes = calculateEMI(loanPrincipal, financeRate, financeTermMonths / 12);

  // Lease
  const netCapCost = (price - down);
  const residualValueAmount = price * (residualValuePercent / 100);
  const depreciationFee = (netCapCost - residualValueAmount) / Math.max(1, leaseTermMonths);
  const financeFee = (netCapCost + residualValueAmount) * (moneyFactor || 0.0025);
  const baseLeasePayment = depreciationFee + financeFee;
  const leaseMonthlyPayment = baseLeasePayment * (1 + taxRate);
  const leaseTotalCost = (leaseMonthlyPayment * leaseTermMonths) + down;

  return {
    financeMonthlyEMI: finEmiRes.monthlyEMI,
    financeTotalCost: finEmiRes.totalPayable + down,
    leaseMonthlyPayment: Math.round(leaseMonthlyPayment),
    leaseTotalCost: Math.round(leaseTotalCost),
    monthlyDifference: finEmiRes.monthlyEMI - Math.round(leaseMonthlyPayment),
    residualValueAmount: Math.round(residualValueAmount)
  };
}

// ==========================================
// 12. 11. RENT OR BUY HOUSE CALCULATOR
// ==========================================
export interface RentOrBuyResult {
  buyingTotalWealth: number;
  rentingTotalWealth: number;
  wealthDifference: number;
  verdict: string;
  monthlyBuyingCost: number;
  monthlyRentingCost: number;
}

export function calculateRentOrBuy(
  homePrice: number,
  downPaymentPercent: number,
  mortgageRate: number,
  loanTenureYears: number,
  annualMaintenanceTaxRate: number, // e.g. 1.5%
  homeAppreciationRate: number, // e.g. 5%
  monthlyRent: number,
  rentInflationRate: number, // e.g. 5%
  investmentReturnRate: number, // e.g. 10%
  analysisYears: number = 10
): RentOrBuyResult {
  const hp = Math.max(0, homePrice);
  const dp = hp * (downPaymentPercent / 100);
  const loanPrincipal = hp - dp;
  const emiRes = calculateEMI(loanPrincipal, mortgageRate, loanTenureYears);

  const years = Math.max(1, Math.min(30, analysisYears));

  // Buying Net Wealth after N years:
  const futureHomeValue = hp * Math.pow(1 + (homeAppreciationRate / 100), years);
  // Estimate loan balance after N years
  const r = mortgageRate / 12 / 100;
  let loanBalance = loanPrincipal;
  for (let m = 1; m <= years * 12; m++) {
    const interest = loanBalance * r;
    const princ = emiRes.monthlyEMI - interest;
    loanBalance = Math.max(0, loanBalance - princ);
  }
  const homeEquity = futureHomeValue - loanBalance;
  const annualMaint = hp * (annualMaintenanceTaxRate / 100);
  const buyingOutflowTotal = dp + (emiRes.monthlyEMI * 12 * years) + (annualMaint * years);
  const buyingNetWealth = homeEquity;

  // Renting Net Wealth after N years:
  // Invest the Down Payment
  let rentInvestments = dp * Math.pow(1 + (investmentReturnRate / 100), years);
  // Rent paid
  let curRent = monthlyRent;
  let totalRentPaid = 0;
  for (let y = 1; y <= years; y++) {
    totalRentPaid += curRent * 12;
    curRent *= (1 + (rentInflationRate / 100));
  }
  const rentingNetWealth = Math.max(0, rentInvestments - (totalRentPaid * 0.2));

  const diff = buyingNetWealth - rentingNetWealth;
  const verdict = diff > 0 
    ? `Buying creates ${formatINR(diff)} more net wealth over ${years} years`
    : `Renting creates ${formatINR(Math.abs(diff))} more net wealth over ${years} years`;

  return {
    buyingTotalWealth: Math.round(buyingNetWealth),
    rentingTotalWealth: Math.round(rentingNetWealth),
    wealthDifference: Math.round(Math.abs(diff)),
    verdict,
    monthlyBuyingCost: Math.round(emiRes.monthlyEMI + (annualMaint / 12)),
    monthlyRentingCost: Math.round(monthlyRent)
  };
}

// ==========================================
// 13. 12. PAY OFF CREDIT CARD CALCULATOR
// ==========================================
export interface CreditCardPayoffResult {
  monthsToPayoff: number;
  totalInterestPaid: number;
  totalAmountPaid: number;
  monthlyPaymentRequired: number;
}

export function calculateCreditCardPayoff(
  balance: number,
  aprPercent: number,
  mode: 'fixed-payment' | 'target-months',
  value: number // payment amount OR target months
): CreditCardPayoffResult {
  const b = Math.max(0, balance);
  const r = (Math.max(0, aprPercent) / 100) / 12;

  if (b === 0) {
    return { monthsToPayoff: 0, totalInterestPaid: 0, totalAmountPaid: 0, monthlyPaymentRequired: 0 };
  }

  if (mode === 'fixed-payment') {
    const pmt = Math.max(1, value);
    const minInterestFirstMonth = b * r;

    if (pmt <= minInterestFirstMonth) {
      // Payment does not even cover interest
      return {
        monthsToPayoff: 999,
        totalInterestPaid: Infinity,
        totalAmountPaid: Infinity,
        monthlyPaymentRequired: pmt
      };
    }

    let curBal = b;
    let months = 0;
    let totalInterest = 0;

    while (curBal > 0 && months < 600) {
      const interest = curBal * r;
      totalInterest += interest;
      const principal = pmt - interest;
      curBal -= principal;
      months++;
    }

    return {
      monthsToPayoff: months,
      totalInterestPaid: Math.round(totalInterest),
      totalAmountPaid: Math.round(b + totalInterest),
      monthlyPaymentRequired: pmt
    };
  } else {
    const targetMonths = Math.max(1, value);
    let pmt = 0;
    if (r === 0) {
      pmt = b / targetMonths;
    } else {
      pmt = (b * r * Math.pow(1 + r, targetMonths)) / (Math.pow(1 + r, targetMonths) - 1);
    }
    const totalAmount = pmt * targetMonths;
    const totalInterest = totalAmount - b;

    return {
      monthsToPayoff: targetMonths,
      totalInterestPaid: Math.round(totalInterest),
      totalAmountPaid: Math.round(totalAmount),
      monthlyPaymentRequired: Math.round(pmt)
    };
  }
}

// ==========================================
// 14. 13. CREDIT CARD COMPARE CALCULATOR
// ==========================================
export interface CreditCardOption {
  name: string;
  annualFee: number;
  aprPercent: number;
  rewardRatePercent: number;
}

export interface CreditCardComparisonResult {
  name: string;
  annualRewards: number;
  annualFee: number;
  netAnnualValue: number;
  threeYearNetValue: number;
}

export function calculateCreditCardComparison(
  cards: CreditCardOption[],
  annualSpend: number
): CreditCardComparisonResult[] {
  const spend = Math.max(0, annualSpend);

  return cards.map((card) => {
    const annualRewards = spend * (card.rewardRatePercent / 100);
    const netAnnual = annualRewards - card.annualFee;
    return {
      name: card.name,
      annualRewards: Math.round(annualRewards),
      annualFee: card.annualFee,
      netAnnualValue: Math.round(netAnnual),
      threeYearNetValue: Math.round(netAnnual * 3)
    };
  });
}

// ==========================================
// 15. 14. DEBT PAYOFF CALCULATOR (AVALANCHE & SNOWBALL)
// ==========================================
export interface DebtItem {
  id: string;
  name: string;
  balance: number;
  interestRate: number;
  minPayment: number;
}

export interface DebtPayoffResult {
  monthsToDebtFree: number;
  totalInterestPaid: number;
  totalPaid: number;
  interestSavedVsMin: number;
  monthsSaved: number;
}

export function calculateDebtPayoff(
  debts: DebtItem[],
  extraMonthlyPayment: number,
  strategy: 'avalanche' | 'snowball'
): DebtPayoffResult {
  if (!debts.length) {
    return { monthsToDebtFree: 0, totalInterestPaid: 0, totalPaid: 0, interestSavedVsMin: 0, monthsSaved: 0 };
  }

  // Simulation runner
  function simulate(debtsList: DebtItem[], extraPmt: number, strat: 'avalanche' | 'snowball' | 'min-only') {
    let active = debtsList.map(d => ({ ...d, curBal: d.balance }));
    let months = 0;
    let totalInterest = 0;
    let totalPrincipal = debtsList.reduce((acc, d) => acc + d.balance, 0);

    while (active.some(d => d.curBal > 0.5) && months < 600) {
      months++;
      let extraPool = strat === 'min-only' ? 0 : extraPmt;

      // 1. Pay interest & min payment
      for (const d of active) {
        if (d.curBal <= 0) continue;
        const interest = d.curBal * (d.interestRate / 100 / 12);
        totalInterest += interest;
        d.curBal += interest;

        const pmt = Math.min(d.curBal, d.minPayment);
        d.curBal -= pmt;

        if (d.curBal <= 0.01) {
          d.curBal = 0;
          if (strat !== 'min-only') extraPool += d.minPayment; // Rollover payment
        }
      }

      // 2. Allocate extra pool to priority debt
      if (extraPool > 0) {
        let targets = active.filter(d => d.curBal > 0);
        if (strat === 'avalanche') {
          targets.sort((a, b) => b.interestRate - a.interestRate);
        } else if (strat === 'snowball') {
          targets.sort((a, b) => a.curBal - b.curBal);
        }

        for (const target of targets) {
          if (extraPool <= 0) break;
          const pay = Math.min(target.curBal, extraPool);
          target.curBal -= pay;
          extraPool -= pay;
        }
      }
    }

    return { months, totalInterest, totalPaid: totalPrincipal + totalInterest };
  }

  const base = simulate(debts, 0, 'min-only');
  const optimized = simulate(debts, extraMonthlyPayment, strategy);

  return {
    monthsToDebtFree: optimized.months,
    totalInterestPaid: Math.round(optimized.totalInterest),
    totalPaid: Math.round(optimized.totalPaid),
    interestSavedVsMin: Math.max(0, Math.round(base.totalInterest - optimized.totalInterest)),
    monthsSaved: Math.max(0, base.months - optimized.months)
  };
}

// ==========================================
// 16. 15. DEBT CONSOLIDATION CALCULATOR
// ==========================================
export interface ExistingDebtForConsolidation {
  name: string;
  balance: number;
  interestRate: number;
  monthlyPayment: number;
}

export interface DebtConsolidationResult {
  currentTotalBalance: number;
  currentTotalMonthlyPayment: number;
  consolidatedMonthlyEMI: number;
  monthlySavings: number;
  consolidatedTotalCost: number;
  currentWeightedRate: number;
  totalInterestSavings: number;
}

export function calculateDebtConsolidation(
  debts: ExistingDebtForConsolidation[],
  newInterestRate: number,
  newTenureYears: number,
  processingFeePercent: number = 1
): DebtConsolidationResult {
  const currentTotalBalance = debts.reduce((sum, d) => sum + Math.max(0, d.balance), 0);
  const currentTotalMonthlyPayment = debts.reduce((sum, d) => sum + Math.max(0, d.monthlyPayment), 0);

  if (currentTotalBalance === 0) {
    return {
      currentTotalBalance: 0,
      currentTotalMonthlyPayment: 0,
      consolidatedMonthlyEMI: 0,
      monthlySavings: 0,
      consolidatedTotalCost: 0,
      currentWeightedRate: 0,
      totalInterestSavings: 0
    };
  }

  const currentWeightedRate = debts.reduce((acc, d) => acc + (d.balance * d.interestRate), 0) / currentTotalBalance;

  const newLoanAmount = currentTotalBalance * (1 + (processingFeePercent / 100));
  const newLoanEMI = calculateEMI(newLoanAmount, newInterestRate, newTenureYears);

  const monthlySavings = currentTotalMonthlyPayment - newLoanEMI.monthlyEMI;

  // Approximate current total payoff remaining assuming 3-year weighted average
  const currentApproxTotalCost = currentTotalMonthlyPayment * (newTenureYears * 12);
  const totalInterestSavings = currentApproxTotalCost - newLoanEMI.totalPayable;

  return {
    currentTotalBalance: Math.round(currentTotalBalance),
    currentTotalMonthlyPayment: Math.round(currentTotalMonthlyPayment),
    consolidatedMonthlyEMI: newLoanEMI.monthlyEMI,
    monthlySavings: Math.round(monthlySavings),
    consolidatedTotalCost: newLoanEMI.totalPayable,
    currentWeightedRate: Number(currentWeightedRate.toFixed(2)),
    totalInterestSavings: Math.round(totalInterestSavings)
  };
}
