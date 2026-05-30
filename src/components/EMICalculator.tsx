import { useState, useMemo } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

function formatINR(num: number): string {
  if (num >= 10000000) return `₹${(num / 10000000).toFixed(2)} Cr`;
  if (num >= 100000) return `₹${(num / 100000).toFixed(2)} L`;
  return `₹${num.toLocaleString('en-IN')}`;
}

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const { emi, totalPayment, totalInterest } = useMemo(() => {
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenure * 12;
    if (r === 0) return { emi: P / n, totalPayment: P, totalInterest: 0 };
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - P;
    return { emi, totalPayment, totalInterest };
  }, [loanAmount, interestRate, tenure]);

  const pieData = [
    { name: 'Principal', value: Math.round(loanAmount) },
    { name: 'Interest', value: Math.round(totalInterest) },
  ];
  const COLORS = ['#1D4ED8', '#E5E7EB'];

  const sliderStyle = {
    width: '100%',
    accentColor: '#1D4ED8',
    cursor: 'pointer',
    height: '4px',
  };

  return (
    <section id="emi-calculator" className="py-20 lg:py-28" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-14">
          <div className="divider-line" />
          <h2 className="section-title mb-4">EMI Calculator</h2>
          <p className="section-subtitle">
            Plan your home purchase with confidence. Calculate your monthly instalments instantly based on loan amount, interest rate, and tenure.
          </p>
        </div>

        {/* Calculator Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left – Inputs */}
          <div
            className="p-8 lg:p-10"
            style={{ backgroundColor: '#F8FAFC', border: '1px solid #E5E7EB' }}
          >
            {/* Loan Amount */}
            <div className="mb-8">
              <div className="flex justify-between items-baseline mb-3">
                <label
                  className="text-sm font-semibold uppercase tracking-wide"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#6B7280' }}
                >
                  Loan Amount
                </label>
                <span
                  className="font-semibold text-base"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#1D4ED8' }}
                >
                  {formatINR(loanAmount)}
                </span>
              </div>
              <input
                type="range"
                min={500000}
                max={50000000}
                step={100000}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                style={sliderStyle}
              />
              <div className="flex justify-between mt-1">
                <span className="text-xs text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>₹5L</span>
                <span className="text-xs text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>₹5 Cr</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="mb-8">
              <div className="flex justify-between items-baseline mb-3">
                <label
                  className="text-sm font-semibold uppercase tracking-wide"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#6B7280' }}
                >
                  Interest Rate (p.a.)
                </label>
                <span
                  className="font-semibold text-base"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#1D4ED8' }}
                >
                  {interestRate.toFixed(1)}%
                </span>
              </div>
              <input
                type="range"
                min={6}
                max={18}
                step={0.1}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                style={sliderStyle}
              />
              <div className="flex justify-between mt-1">
                <span className="text-xs text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>6%</span>
                <span className="text-xs text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>18%</span>
              </div>
            </div>

            {/* Tenure */}
            <div className="mb-10">
              <div className="flex justify-between items-baseline mb-3">
                <label
                  className="text-sm font-semibold uppercase tracking-wide"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#6B7280' }}
                >
                  Loan Tenure
                </label>
                <span
                  className="font-semibold text-base"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#1D4ED8' }}
                >
                  {tenure} Years
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={30}
                step={1}
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                style={sliderStyle}
              />
              <div className="flex justify-between mt-1">
                <span className="text-xs text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>1 Yr</span>
                <span className="text-xs text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>30 Yrs</span>
              </div>
            </div>

            {/* Result */}
            <div
              className="p-6 flex items-center justify-between"
              style={{ backgroundColor: '#1D4ED8' }}
            >
              <div>
                <div
                  className="text-xs uppercase tracking-widest mb-1"
                  style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.7)' }}
                >
                  Monthly EMI
                </div>
                <div
                  className="font-bold leading-none"
                  style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: '#ffffff' }}
                >
                  {formatINR(Math.round(emi))}
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-blue-200 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>per month</div>
                <a
                  href="#contact"
                  className="text-xs text-white underline"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Talk to our advisor →
                </a>
              </div>
            </div>
          </div>

          {/* Right – Summary + Chart */}
          <div>
            {/* Pie Chart */}
            <div className="flex items-center justify-center mb-8" style={{ height: '220px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                  >
                    {pieData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(val) => formatINR(Number(val))}
                    contentStyle={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', border: '1px solid #E5E7EB' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Breakdown */}
            <div className="grid grid-cols-1 gap-4">
              {[
                { label: 'Loan Amount (Principal)', value: formatINR(loanAmount), color: '#1D4ED8', bg: '#EFF6FF' },
                { label: 'Total Interest Payable', value: formatINR(Math.round(totalInterest)), color: '#374151', bg: '#F9FAFB' },
                { label: 'Total Amount Payable', value: formatINR(Math.round(totalPayment)), color: '#111827', bg: '#F8FAFC', border: true },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between px-5 py-4"
                  style={{
                    backgroundColor: item.bg,
                    border: item.border ? '1px solid #E5E7EB' : 'none',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: item.color }} />
                    <span className="text-sm" style={{ fontFamily: 'Inter, sans-serif', color: '#374151' }}>
                      {item.label}
                    </span>
                  </div>
                  <span
                    className="font-semibold text-sm"
                    style={{ fontFamily: 'Inter, sans-serif', color: item.color }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <p
              className="mt-5 text-xs leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif', color: '#9CA3AF' }}
            >
              * This is an indicative EMI calculation. Actual EMI may vary based on your bank, credit profile, and processing fees. Contact our loan assistance team for personalized guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
