"use client"

import { useState } from 'react'

export default function FinancialCalculator() {
  const [activeTab, setActiveTab] = useState('growth');

  // Common states
  const [inflation, setInflation] = useState(7);
  const [returns, setReturns] = useState(10);

  // SIP Growth states
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [period, setPeriod] = useState(10);
  const totalInvestment = monthlyInvestment * 12 * period;
  const estimatedValue = Math.round(
    monthlyInvestment * ((Math.pow(1 + returns / 100 / 12, 12 * period) - 1) / (returns / 100 / 12)) * (1 + returns / 100 / 12)
  );

  // SIP Need states
  const [targetAmount, setTargetAmount] = useState(10000000);
  const [needPeriod, setNeedPeriod] = useState(10);
  const adjustedTarget = targetAmount * Math.pow(1 + inflation / 100, needPeriod);
  const monthlyRate = returns / 100 / 12;
  const totalMonths = needPeriod * 12;
  const sipAmount = Math.round(adjustedTarget * monthlyRate / (Math.pow(1 + monthlyRate, totalMonths) - 1));
  const projectedInvestment = sipAmount * totalMonths;

  // Retirement Calculator states
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [monthlyExpense, setMonthlyExpense] = useState(50000);
  const [retirementYears, setRetirementYears] = useState(25);
  const yearsToRetire = retirementAge - currentAge;
  const inflatedExpense = monthlyExpense * Math.pow(1 + inflation / 100, yearsToRetire);
  const annualInflated = inflatedExpense * 12;
  const kittyAmount = Math.round(
    annualInflated * 
    ((1 - Math.pow(1 + inflation / 100, -retirementYears)) / 
    ((returns / 100 - inflation / 100) / (1 + inflation / 100)))
  );
  const retireMonthlyInvest = Math.round(
    (kittyAmount * (returns / 100 / 12)) /
      (Math.pow(1 + returns / 100 / 12, yearsToRetire * 12) - 1)
  );
  const retireYearlyInvest = retireMonthlyInvest * 12;
  const retireOneTime = Math.round(
    kittyAmount / Math.pow(1 + returns / 100, yearsToRetire)
  );

  // Insurance Need Calculator states
  const [dependentsYears, setDependentsYears] = useState(35);
  const [annualSalary, setAnnualSalary] = useState(2000000);
  const [yearlyExpenses, setYearlyExpenses] = useState(1000000);
  const [otherIncome, setOtherIncome] = useState(0);
  const [currentLoans, setCurrentLoans] = useState(3000000);
  const [currentInvestments, setCurrentInvestments] = useState(1000000);
  const [currentInsurance, setCurrentInsurance] = useState(5000000);

  // Calculate insurance need
  const incomeReplacement = (annualSalary - yearlyExpenses - otherIncome) * dependentsYears;
  const inflationAdjustedNeed = Math.round(incomeReplacement * Math.pow(1 + inflation / 100, dependentsYears));
  const insuranceNeed = Math.max(0, inflationAdjustedNeed + currentLoans - currentInvestments - currentInsurance);

  return (
    <section className="bg-black text-white py-16 px-4 md:px-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Financial Calculators</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center mb-8">
        <div onClick={() => setActiveTab('growth')} className={`border border-yellow-400 py-4 px-2 rounded cursor-pointer transition ${activeTab === 'growth' ? 'bg-yellow-600' : 'hover:bg-yellow-600'} text-center`}>
          <p>SIP Growth</p>
        </div>
        <div onClick={() => setActiveTab('need')} className={`border border-yellow-400 py-4 px-2 rounded cursor-pointer transition ${activeTab === 'need' ? 'bg-yellow-600' : 'hover:bg-yellow-600'} text-center`}>
          <p>SIP Need</p>
        </div>
        <div onClick={() => setActiveTab('retirement')} className={`border border-yellow-400 py-4 px-2 rounded cursor-pointer transition ${activeTab === 'retirement' ? 'bg-yellow-600' : 'hover:bg-yellow-600'} text-center`}>
          <p>Retirement</p>
        </div>
        <div onClick={() => setActiveTab('insurance')} className={`border border-yellow-400 py-4 px-2 rounded cursor-pointer transition ${activeTab === 'insurance' ? 'bg-yellow-600' : 'hover:bg-yellow-600'} text-center`}>
          <p>Insurance Need</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Input Section */}
        <div className="bg-white/90 text-black rounded p-6 flex-1 shadow-lg">
          {activeTab === 'growth' && (
            <>
              <h3 className="text-xl font-semibold mb-6">SIP Growth Calculator</h3>
              <div className="space-y-4">
                <div>
                  <label className="font-medium">Monthly Investment Amount (₹)</label>
                  <input type="number" value={monthlyInvestment} onChange={(e) => setMonthlyInvestment(Number(e.target.value))} className="w-full border px-4 py-2 rounded mt-1" />
                </div>
                <div>
                  <label className="font-medium">Investment Period (Years)</label>
                  <input type="range" min="1" max="50" value={period} onChange={(e) => setPeriod(Number(e.target.value))} className="w-full" />
                  <p>{period} Years</p>
                </div>
                <div>
                  <label className="font-medium">Expected Returns %</label>
                  <input type="range" min="1" max="20" step="0.1" value={returns} onChange={(e) => setReturns(Number(e.target.value))} className="w-full" />
                  <p>{returns}%</p>
                </div>
              </div>
            </>
          )}

          {activeTab === 'need' && (
            <>
              <h3 className="text-xl font-semibold mb-6">SIP Need Calculator</h3>
              <div className="space-y-4">
                <div>
                  <label className="font-medium">Target Amount Needed (₹)</label>
                  <input type="number" value={targetAmount} onChange={(e) => setTargetAmount(Number(e.target.value))} className="w-full border px-4 py-2 rounded mt-1" />
                </div>
                <div>
                  <label className="font-medium">Investment Period (Years)</label>
                  <input type="range" min="1" max="50" value={needPeriod} onChange={(e) => setNeedPeriod(Number(e.target.value))} className="w-full" />
                  <p>{needPeriod} Years</p>
                </div>
                <div>
                  <label className="font-medium">Expected Returns %</label>
                  <input type="range" min="1" max="20" step="0.1" value={returns} onChange={(e) => setReturns(Number(e.target.value))} className="w-full" />
                  <p>{returns}%</p>
                </div>
                <div>
                  <label className="font-medium">Expected Inflation %</label>
                  <input type="range" min="0" max="15" step="0.1" value={inflation} onChange={(e) => setInflation(Number(e.target.value))} className="w-full" />
                  <p>{inflation}%</p>
                </div>
              </div>
            </>
          )}

          {activeTab === 'retirement' && (
            <>
              <h3 className="text-xl font-semibold mb-6">Retirement Planner</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="font-medium">Current Age</label>
                  <input type="number" value={currentAge} onChange={(e) => setCurrentAge(Number(e.target.value))} className="w-full border px-4 py-2 rounded mt-1" />
                </div>
                <div>
                  <label className="font-medium">Retirement Age</label>
                  <input type="number" value={retirementAge} onChange={(e) => setRetirementAge(Number(e.target.value))} className="w-full border px-4 py-2 rounded mt-1" />
                </div>
                <div>
                  <label className="font-medium">Current Monthly Expenses (₹)</label>
                  <input type="number" value={monthlyExpense} onChange={(e) => setMonthlyExpense(Number(e.target.value))} className="w-full border px-4 py-2 rounded mt-1" />
                </div>
                <div>
                  <label className="font-medium">Retirement Duration (Years)</label>
                  <input type="number" value={retirementYears} onChange={(e) => setRetirementYears(Number(e.target.value))} className="w-full border px-4 py-2 rounded mt-1" />
                </div>
                <div>
                  <label className="font-medium">Expected Returns %</label>
                  <input type="range" min="4" max="20" step="0.1" value={returns} onChange={(e) => setReturns(Number(e.target.value))} className="w-full" />
                  <p>{returns}%</p>
                </div>
                <div>
                  <label className="font-medium">Expected Inflation %</label>
                  <input type="range" min="0" max="15" step="0.1" value={inflation} onChange={(e) => setInflation(Number(e.target.value))} className="w-full" />
                  <p>{inflation}%</p>
                </div>
              </div>
            </>
          )}

          {activeTab === 'insurance' && (
            <>
              <h3 className="text-xl font-semibold mb-6">Insurance Need Calculator</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="font-medium">No. of years to provide income</label>
                  <input type="number" value={dependentsYears} onChange={(e) => setDependentsYears(Number(e.target.value))} className="w-full border px-4 py-2 rounded mt-1" />
                </div>
                <div>
                  <label className="font-medium">Annual Salary (₹)</label>
                  <input type="number" value={annualSalary} onChange={(e) => setAnnualSalary(Number(e.target.value))} className="w-full border px-4 py-2 rounded mt-1" />
                </div>
                <div>
                  <label className="font-medium">Yearly Expenses (₹)</label>
                  <input type="number" value={yearlyExpenses} onChange={(e) => setYearlyExpenses(Number(e.target.value))} className="w-full border px-4 py-2 rounded mt-1" />
                </div>
                <div>
                  <label className="font-medium">Other Income (₹)</label>
                  <input type="number" value={otherIncome} onChange={(e) => setOtherIncome(Number(e.target.value))} className="w-full border px-4 py-2 rounded mt-1" />
                </div>
                <div>
                  <label className="font-medium">Current Loans (₹)</label>
                  <input type="number" value={currentLoans} onChange={(e) => setCurrentLoans(Number(e.target.value))} className="w-full border px-4 py-2 rounded mt-1" />
                </div>
                <div>
                  <label className="font-medium">Current Investments (₹)</label>
                  <input type="number" value={currentInvestments} onChange={(e) => setCurrentInvestments(Number(e.target.value))} className="w-full border px-4 py-2 rounded mt-1" />
                </div>
                <div>
                  <label className="font-medium">Current Insurance (₹)</label>
                  <input type="number" value={currentInsurance} onChange={(e) => setCurrentInsurance(Number(e.target.value))} className="w-full border px-4 py-2 rounded mt-1" />
                </div>
                <div>
                  <label className="font-medium">Expected Inflation %</label>
                  <input type="range" min="0" max="15" step="0.1" value={inflation} onChange={(e) => setInflation(Number(e.target.value))} className="w-full" />
                  <p>{inflation}%</p>
                </div>
                <div>
                  <label className="font-medium">Expected Returns %</label>
                  <input type="range" min="1" max="20" step="0.1" value={returns} onChange={(e) => setReturns(Number(e.target.value))} className="w-full" />
                  <p>{returns}%</p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Results Section */}
        <div className="bg-white/90 text-black rounded p-6 flex-1 shadow-lg">
          {activeTab === 'growth' && (
            <div>
              <h3 className="text-xl font-semibold mb-6">SIP Growth Projection</h3>
              <div className="p-4 bg-gray-100 rounded">
                <h4 className="text-lg font-semibold mb-2">Estimated Future Value</h4>
                <p className="text-3xl font-bold text-green-700">₹{estimatedValue.toLocaleString("en-IN")}</p>
                <div className="mt-4 space-y-2">
                  <p><b>Total Investment:</b> ₹{totalInvestment.toLocaleString("en-IN")}</p>
                  <p><b>Wealth Gain:</b> ₹{(estimatedValue - totalInvestment).toLocaleString("en-IN")}</p>
                  <p><b>Growth Multiple:</b> {(estimatedValue / totalInvestment).toFixed(2)} times</p>
                  <p><b>Annualized Return:</b> {((Math.pow(estimatedValue / totalInvestment, 1/period) - 1) * 100).toFixed(2)}%</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'need' && (
            <div>
              <h3 className="text-xl font-semibold mb-6">SIP Need Results</h3>
              <div className="p-4 bg-gray-100 rounded">
                <h4 className="text-lg font-semibold mb-2">Required SIP Amount</h4>
                <p className="text-3xl font-bold text-blue-700">₹{sipAmount.toLocaleString("en-IN")}</p>
                <div className="mt-4 space-y-2">
                  <p><b>Future Value Needed:</b> ₹{adjustedTarget.toLocaleString("en-IN")}</p>
                  <p><b>Total Investment:</b> ₹{projectedInvestment.toLocaleString("en-IN")}</p>
                  <p><b>Growth Multiple:</b> {(adjustedTarget / projectedInvestment).toFixed(2)} times</p>
                  <p><b>Annualized Return:</b> {returns}%</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'retirement' && (
            <div>
              <h3 className="text-xl font-semibold mb-6">Retirement Plan</h3>
              <div className="p-4 bg-gray-100 rounded">
                <h4 className="text-lg font-semibold mb-2">Retirement Corpus Needed</h4>
                <p className="text-3xl font-bold text-blue-700">₹{kittyAmount.toLocaleString("en-IN")}</p>
                <div className="mt-4 space-y-2">
                  <p><b>Monthly Expense at Retirement:</b> ₹{Math.round(inflatedExpense).toLocaleString("en-IN")}</p>
                  <p><b>Annual Expense at Retirement:</b> ₹{Math.round(annualInflated).toLocaleString("en-IN")}</p>
                  <p><b>Monthly SIP Needed:</b> ₹{retireMonthlyInvest.toLocaleString("en-IN")}</p>
                  <p><b>Yearly Investment Needed:</b> ₹{retireYearlyInvest.toLocaleString("en-IN")}</p>
                  <p><b>One-Time Investment Today:</b> ₹{retireOneTime.toLocaleString("en-IN")}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'insurance' && (
            <div>
              <h3 className="text-xl font-semibold mb-6">Insurance Need Analysis</h3>
              <div className="p-4 bg-gray-100 rounded">
                <h4 className="text-lg font-semibold mb-2">Recommended Life Insurance Cover</h4>
                <p className="text-3xl font-bold text-purple-700">₹{insuranceNeed.toLocaleString("en-IN")}</p>
                <div className="mt-4 space-y-2">
                  <p><b>Income Replacement Need:</b> ₹{incomeReplacement.toLocaleString("en-IN")}</p>
                  <p><b>Inflation Adjusted Need:</b> ₹{inflationAdjustedNeed.toLocaleString("en-IN")}</p>
                  <p><b>Current Loans:</b> ₹{currentLoans.toLocaleString("en-IN")}</p>
                  <p><b>Current Investments:</b> ₹{currentInvestments.toLocaleString("en-IN")}</p>
                  <p><b>Existing Insurance:</b> ₹{currentInsurance.toLocaleString("en-IN")}</p>
                  <p><b>Additional Coverage Needed:</b> ₹{Math.max(0, insuranceNeed - currentInsurance).toLocaleString("en-IN")}</p>
                </div>
                <button className="mt-6 bg-purple-600 text-white py-2 px-6 rounded hover:bg-purple-700 transition">
                  REQUEST A CALLBACK
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <p className="mt-6 font-semibold text-center">Follow the links</p>
    </section>
  )
}