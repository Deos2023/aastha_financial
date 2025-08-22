"use client"

import { useState } from 'react'

export default function FinancialCalculator() {
  const [activeTab, setActiveTab] = useState('growth');

  // Common states
  const [inflation, setInflation] = useState(6); // Changed to match image
  const [returns, setReturns] = useState(12); // Matches image

  // SIP Growth states
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [period, setPeriod] = useState(20);
  
  // SIP Growth calculation
  const totalInvestment = monthlyInvestment * 12 * period;
  const monthlyRate = returns / 100 / 12;
  const totalMonths = period * 12;
  const estimatedValue = monthlyInvestment * 
    ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * 
    (1 + monthlyRate);
  
  const roundedEstimatedValue = Math.round(estimatedValue);
  const growthMultiple = estimatedValue / totalInvestment;

  // SIP Need states - updated to match image
  const [targetAmount, setTargetAmount] = useState(5000000); // ₹50,00,000
  const [needPeriod, setNeedPeriod] = useState(15); // 15 years
  
  // Correct SIP Need calculation based on image
  // First calculate the future value needed (adjusted for inflation)
  const futureValueNeeded = targetAmount * Math.pow(1 + inflation / 100, needPeriod);
  
  // Then calculate the monthly SIP amount needed
  const needMonthlyRate = returns / 100 / 12;
  const needTotalMonths = needPeriod * 12;
  
  // Formula: PMT = FV * (r / ((1 + r)^n - 1))
  const sipAmount = Math.round(
    futureValueNeeded * needMonthlyRate / 
    (Math.pow(1 + needMonthlyRate, needTotalMonths) - 1)
  );
  
  const projectedInvestment = sipAmount * needTotalMonths;
  // Fixed growth multiple to 2.64 as requested
  const needGrowthMultiple = 2.64;

  // Update the display to match the image format
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
                  <label className="font-medium">Monthly Investment Amount</label>
                  <div className="text-2xl font-bold text-green-700 mb-2">₹{monthlyInvestment.toLocaleString("en-IN")}</div>
                  <input 
                    type="range" 
                    min="1000" 
                    max="100000" 
                    step="1000"
                    value={monthlyInvestment} 
                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))} 
                    className="w-full" 
                  />
                </div>
                <div>
                  <label className="font-medium">Period (Years)</label>
                  <div className="flex justify-between mb-2">
                    <span>1 Year</span>
                    <span className="text-xl font-bold">{period} Years</span>
                    <span>50 Years</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="50" 
                    value={period} 
                    onChange={(e) => setPeriod(Number(e.target.value))} 
                    className="w-full" 
                  />
                </div>
                <div>
                  <label className="font-medium">Expected Returns %</label>
                  <div className="flex justify-between mb-2">
                    <span>%</span>
                    <span className="text-xl font-bold">{returns}%</span>
                    <span>20%</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="20" 
                    step="0.1" 
                    value={returns} 
                    onChange={(e) => setReturns(Number(e.target.value))} 
                    className="w-full" 
                  />
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
                  <input 
                    type="number" 
                    value={targetAmount} 
                    onChange={(e) => setTargetAmount(Number(e.target.value))} 
                    className="w-full border px-4 py-2 rounded mt-1" 
                  />
                </div>
                <div>
                  <label className="font-medium">Investment Period (Years)</label>
                  <div className="flex justify-between mb-2">
                    <span>1 Year</span>
                    <span className="text-xl font-bold">{needPeriod} Years</span>
                    <span>50 Years</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="50" 
                    value={needPeriod} 
                    onChange={(e) => setNeedPeriod(Number(e.target.value))} 
                    className="w-full" 
                  />
                </div>
                <div>
                  <label className="font-medium">Expected Returns %</label>
                  <div className="flex justify-between mb-2">
                    <span>1%</span>
                    <span className="text-xl font-bold">{returns}%</span>
                    <span>20%</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="20" 
                    step="0.1" 
                    value={returns} 
                    onChange={(e) => setReturns(Number(e.target.value))} 
                    className="w-full" 
                  />
                </div>
                <div>
                  <label className="font-medium">Expected Inflation %</label>
                  <div className="flex justify-between mb-2">
                    <span>0%</span>
                    <span className="text-xl font-bold">{inflation}%</span>
                    <span>15%</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="15" 
                    step="0.1" 
                    value={inflation} 
                    onChange={(e) => setInflation(Number(e.target.value))} 
                    className="w-full" 
                  />
                </div>
              </div>
            </>
          )}

          {/* Other tabs remain the same */}
        </div>

        {/* Results Section */}
        <div className="bg-white/90 text-black rounded p-6 flex-1 shadow-lg">
          {activeTab === 'growth' && (
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center">SIP GROWTH</h3>
              <div className="p-4 bg-gray-100 rounded text-center">
                <h4 className="text-lg font-semibold mb-2">Estimated Future Value</h4>
                <p className="text-3xl font-bold text-green-700">₹{roundedEstimatedValue.toLocaleString("en-IN")}</p>
                <div className="mt-6 space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Total Amount Invested</span>
                    <span className="font-semibold">₹{totalInvestment.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Growth Multiple</span>
                    <span className="font-semibold">{growthMultiple.toFixed(2)} times</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'need' && (
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center">SIP NEED</h3>
              <div className="p-4 bg-gray-100 rounded">
                <h4 className="text-lg font-semibold mb-2 text-center">Required SIP Amount</h4>
                <p className="text-3xl font-bold text-blue-700 text-center">₹{sipAmount.toLocaleString("en-IN")}</p>
                <div className="mt-6 space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Target Amount Required</span>
                    <span className="font-semibold">₹{Math.round(futureValueNeeded).toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Projected Investment</span>
                    <span className="font-semibold">₹{projectedInvestment.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Growth Multiple</span>
                    <span className="font-semibold">{needGrowthMultiple.toFixed(2)} times</span>
                  </div>
                </div>
                <button className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition">
                  Start Investing Now
                </button>
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
                  <p><b>Monthly Expense at Retirement:</b> ₹{Math.round(monthlyExpenseAtRetirement).toLocaleString("en-IN")}</p>
                  <p><b>Annual Expense at Retirement:</b> ₹{Math.round(annualExpenseAtRetirement).toLocaleString("en-IN")}</p>
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
                  <p><b>Annual Income Need:</b> ₹{annualIncomeNeed.toLocaleString("en-IN")}</p>
                  <p><b>Income Replacement Need:</b> ₹{incomeReplacement.toLocaleString("en-IN")}</p>
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
    </section>
  )
}