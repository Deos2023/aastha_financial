"use client"

import { useState } from 'react'

export default function SipCalculator() {
  const [activeTab, setActiveTab] = useState('growth')

  // SIP Growth states
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [period, setPeriod] = useState(10);
  const [returns, setReturns] = useState(8.8);
  const totalInvestment = monthlyInvestment * 12 * period;
  const estimatedValue = Math.round(
    monthlyInvestment * ((Math.pow(1 + returns / 100 / 12, 12 * period) - 1) / (returns / 100 / 12)) * (1 + returns / 100 / 12)
  );

  // SIP Need states
  const [targetAmount, setTargetAmount] = useState(10000000);
  const [needPeriod, setNeedPeriod] = useState(10);
  const [needReturns, setNeedReturns] = useState(12);
  const [inflation, setInflation] = useState(8);
  const adjustedTarget = targetAmount * Math.pow(1 + inflation / 100, needPeriod);
  const monthlyRate = needReturns / 100 / 12;
  const totalMonths = needPeriod * 12;
  const sipAmount = Math.round(adjustedTarget * monthlyRate / (Math.pow(1 + monthlyRate, totalMonths) - 1));
  const projectedInvestment = sipAmount * totalMonths;

  // Retirement Calculator states
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [monthlyExpense, setMonthlyExpense] = useState(50000);
  const [retireReturns, setRetireReturns] = useState(12);

  const retirementYears = 25;
  const inflationRate = 0.06;
  const yearsToRetire = retirementAge - currentAge;
  const inflatedExpense = monthlyExpense * Math.pow(1 + inflationRate, yearsToRetire);
  const annualInflated = inflatedExpense * 12;
  const kittyAmount = Math.round(annualInflated * ((1 - Math.pow(1 + 0.06, -retirementYears)) / 0.06));

  const retireMonthlyInvest = Math.round(
    (kittyAmount * (retireReturns / 100 / 12)) /
      (Math.pow(1 + retireReturns / 100 / 12, yearsToRetire * 12) - 1)
  );
  const retireYearlyInvest = retireMonthlyInvest * 12;
  const retireOneTime = Math.round(
    kittyAmount / Math.pow(1 + retireReturns / 100, yearsToRetire)
  );

  return (
    <section className="bg-black text-white py-16 px-4 md:px-10 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Financial Calculators</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center mb-8">
        <div onClick={() => setActiveTab('growth')} className={`border border-yellow-400 py-4 px-2 rounded cursor-pointer transition ${activeTab === 'growth' ? 'bg-yellow-600' : 'hover:bg-yellow-600'}`}><p>SIP Growth</p></div>
        <div onClick={() => setActiveTab('need')} className={`border border-yellow-400 py-4 px-2 rounded cursor-pointer transition ${activeTab === 'need' ? 'bg-yellow-600' : 'hover:bg-yellow-600'}`}><p>SIP Need</p></div>
        <div onClick={() => setActiveTab('retirement')} className={`border border-yellow-400 py-4 px-2 rounded cursor-pointer transition ${activeTab === 'retirement' ? 'bg-yellow-600' : 'hover:bg-yellow-600'}`}><p>Plan Your Retirement</p></div>
        <a href="https://www.sc.com/in/insurance/insurance-need-calculator/" target="_blank" rel="noopener noreferrer" className="border border-yellow-400 py-4 px-2 rounded hover:bg-yellow-600 cursor-pointer transition"><p>Insurance Need</p></a>
      </div>

      {activeTab === 'growth' && (
        <div className="bg-white/90 text-black rounded p-6 max-w-2xl mx-auto shadow-lg">
          <h3 className="text-xl font-semibold mb-6">SIP Growth</h3>
          <div className="space-y-4">
            <div><label className="font-medium">Monthly Investment Amount (₹)</label><input type="number" value={monthlyInvestment} onChange={(e) => setMonthlyInvestment(Number(e.target.value))} className="w-full border px-4 py-2 rounded mt-1" /></div>
            <div><label className="font-medium">Period (Years)</label><input type="range" min="1" max="50" value={period} onChange={(e) => setPeriod(Number(e.target.value))} className="w-full" /><p>{period} Years</p></div>
            <div><label className="font-medium">Expected Returns %</label><input type="range" min="1" max="20" step="0.1" value={returns} onChange={(e) => setReturns(Number(e.target.value))} className="w-full" /><p>{returns}%</p></div>
          </div>
          <div className="mt-8 p-4 bg-gray-100 rounded text-black">
            <h4 className="text-lg font-semibold mb-2">Estimated Future Value</h4>
            <p className="text-3xl font-bold text-green-700">₹{estimatedValue.toLocaleString("en-IN")}</p>
            <p>Total Amount Invested: ₹{totalInvestment.toLocaleString("en-IN")}</p>
            <p>Growth Multiple: {(estimatedValue / totalInvestment).toFixed(2)} times</p>
          </div>
        </div>
      )}

      {activeTab === 'need' && (
        <div className="bg-white/90 text-black rounded p-6 max-w-2xl mx-auto shadow-lg">
          <h3 className="text-xl font-semibold mb-6">SIP Need</h3>
          <div className="space-y-4">
            <div><label className="font-medium">Target Amount Needed (₹)</label><input type="number" value={targetAmount} onChange={(e) => setTargetAmount(Number(e.target.value))} className="w-full border px-4 py-2 rounded mt-1" /></div>
            <div><label className="font-medium">Period (Years)</label><input type="range" min="1" max="50" value={needPeriod} onChange={(e) => setNeedPeriod(Number(e.target.value))} className="w-full" /><p>{needPeriod} Years</p></div>
            <div><label className="font-medium">Expected Returns %</label><input type="range" min="1" max="20" step="0.1" value={needReturns} onChange={(e) => setNeedReturns(Number(e.target.value))} className="w-full" /><p>{needReturns}%</p></div>
            <div><label className="font-medium">Expected Inflation %</label><input type="range" min="0" max="15" step="0.1" value={inflation} onChange={(e) => setInflation(Number(e.target.value))} className="w-full" /><p>{inflation}%</p></div>
          </div>
          <div className="mt-8 p-4 bg-gray-100 rounded text-black">
            <h4 className="text-lg font-semibold mb-2">Required SIP Amount</h4>
            <p className="text-3xl font-bold text-blue-700">₹{sipAmount.toLocaleString("en-IN")}</p>
            <p>Target Amount Required: ₹{adjustedTarget.toLocaleString("en-IN")}</p>
            <p>Projected Investment: ₹{projectedInvestment.toLocaleString("en-IN")}</p>
            <p>Growth Multiple: {(adjustedTarget / projectedInvestment).toFixed(2)} times</p>
          </div>
        </div>
      )}

      {activeTab === 'retirement' && (
        <div className="bg-white/90 text-black rounded p-6 max-w-3xl mx-auto shadow-lg">
          <h3 className="text-xl font-semibold mb-6">Plan Your Retirement</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div><label className="font-medium">Present Age</label><input type="number" value={currentAge} onChange={(e) => setCurrentAge(Number(e.target.value))} className="w-full border px-4 py-2 rounded mt-1" /></div>
            <div><label className="font-medium">Retirement Age</label><input type="number" value={retirementAge} onChange={(e) => setRetirementAge(Number(e.target.value))} className="w-full border px-4 py-2 rounded mt-1" /></div>
            <div><label className="font-medium">Monthly Expenses (₹)</label><input type="number" value={monthlyExpense} onChange={(e) => setMonthlyExpense(Number(e.target.value))} className="w-full border px-4 py-2 rounded mt-1" /></div>
            <div><label className="font-medium">Expected Returns %</label><input type="range" min="4" max="20" step="0.1" value={retireReturns} onChange={(e) => setRetireReturns(Number(e.target.value))} className="w-full" /><p>{retireReturns}%</p></div>
          </div>
          <div className="mt-8 p-4 bg-gray-100 rounded text-black">
            <h4 className="text-lg font-semibold mb-2">Recommended Retirement Kitty Amount</h4>
            <p className="text-3xl font-bold text-blue-700">₹{kittyAmount.toLocaleString("en-IN")}</p>
            <div className="mt-4">
              <p><b>Monthly:</b> ₹{retireMonthlyInvest.toLocaleString("en-IN")}</p>
              <p><b>Yearly:</b> ₹{retireYearlyInvest.toLocaleString("en-IN")}</p>
              <p><b>One Time:</b> ₹{retireOneTime.toLocaleString("en-IN")}</p>
              <p className="text-red-600 mt-2 font-semibold">Shortfall / Surplus to Target Amount: ₹{-kittyAmount.toLocaleString("en-IN")}</p>
              <p>Monthly expenses in Retirement Year: ₹{Math.round(inflatedExpense).toLocaleString("en-IN")}</p>
            </div>
          </div>
        </div>
      )}

      {/* <div className="space-y-4 mt-10">
        <a href="https://www.njwealth.in/" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline hover:text-purple-300">Open NJ E-Wealth Account: Invest with one of India's Largest Mutual Fund Distributor</a>
        <br />
        <a href="https://www.sc.com/in/insurance/insurance-need-calculator/" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline hover:text-purple-300">https://www.sc.com/in/insurance/insurance-need-calculator/</a>
      </div> */}

      <p className="mt-6 font-semibold">Follow the links</p>
    </section>
  )
}