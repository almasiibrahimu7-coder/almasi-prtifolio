import React, { useState } from 'react';
import { Calculator, TrendingUp, Package, Sparkles, RefreshCw } from 'lucide-react';

export const InventorySimulator: React.FC = () => {
  const [monthlyUnits, setMonthlyUnits] = useState<number>(850);
  const [unitCostUSD, setUnitCostUSD] = useState<number>(18);
  const [sellingPriceUSD, setSellingPriceUSD] = useState<number>(28);
  const [holdingCostPercent, setHoldingCostPercent] = useState<number>(15);
  const [useAIDemandForecast, setUseAIDemandForecast] = useState<boolean>(true);

  // Business & Inventory Calculations
  const annualDemand = monthlyUnits * 12;
  const grossMarginPerUnit = Math.max(0, sellingPriceUSD - unitCostUSD);
  const grossMarginPercent = sellingPriceUSD > 0 ? ((grossMarginPerUnit / sellingPriceUSD) * 100).toFixed(1) : '0';

  // Ordering cost assumption ($45 per order batch)
  const orderSetupCost = 45;
  const annualHoldingCostPerUnit = unitCostUSD * (holdingCostPercent / 100);

  // Economic Order Quantity (EOQ) formula: sqrt((2 * D * S) / H)
  const rawEOQ = Math.sqrt(
    (2 * annualDemand * orderSetupCost) / Math.max(0.5, annualHoldingCostPerUnit)
  );

  // If AI-assisted demand forecasting is toggled on, safety stock buffer is leaner and turnover improves
  const optimalOrderQty = Math.round(useAIDemandForecast ? rawEOQ * 0.88 : rawEOQ);
  const safetyStockUnits = Math.round(
    useAIDemandForecast ? monthlyUnits * 0.12 : monthlyUnits * 0.25
  );

  const estimatedAnnualGrossProfit = annualDemand * grossMarginPerUnit;
  const estimatedInventorySavings = useAIDemandForecast
    ? Math.round(annualDemand * unitCostUSD * 0.042)
    : 0;

  return (
    <section id="simulator" className="py-24 px-6 bg-[#071A33] text-white relative overflow-hidden">
      {/* Subtle technical grid */}
      <div className="absolute inset-0 bg-tech-grid-dark pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123B67] border border-[#F4B400]/30 text-[#F4B400] text-xs font-mono uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            Interactive Case Model • Finance × Inventory × Data
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Data-Driven Inventory & Margin Simulator
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Explore how combining <span className="text-[#F4B400] font-medium">Inventory Management</span>,{' '}
            <span className="text-[#F4B400] font-medium">Financial Unit Economics</span>, and{' '}
            <span className="text-[#F4B400] font-medium">AI Demand Forecasting</span> optimizes stock levels and protects working capital.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Panel */}
          <div className="lg:col-span-7 bg-[#102B4C]/90 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Package className="w-5 h-5 text-[#F4B400]" />
                Operational Input Parameters
              </h3>
              <button
                onClick={() => {
                  setMonthlyUnits(850);
                  setUnitCostUSD(18);
                  setSellingPriceUSD(28);
                  setHoldingCostPercent(15);
                  setUseAIDemandForecast(true);
                }}
                className="text-xs font-mono text-slate-300 hover:text-[#F4B400] flex items-center gap-1.5 transition"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Reset Preset
              </button>
            </div>

            <div className="space-y-6">
              {/* Monthly Demand */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <label className="text-slate-200 font-medium">Monthly Sales Demand (Units)</label>
                  <span className="font-mono text-[#F4B400] font-semibold">
                    {monthlyUnits.toLocaleString()} units/mo
                  </span>
                </div>
                <input
                  type="range"
                  min={100}
                  max={3000}
                  step={50}
                  value={monthlyUnits}
                  onChange={(e) => setMonthlyUnits(Number(e.target.value))}
                  className="w-full accent-[#F4B400] h-2 bg-[#071A33] rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-xs text-slate-400 font-mono mt-1">
                  <span>100 units</span>
                  <span>1,500 units</span>
                  <span>3,000 units</span>
                </div>
              </div>

              {/* Unit Cost vs Selling Price */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <label className="text-slate-200 font-medium">Unit Cost ($)</label>
                    <span className="font-mono text-white font-semibold">${unitCostUSD}</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={80}
                    step={1}
                    value={unitCostUSD}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setUnitCostUSD(val);
                      if (val >= sellingPriceUSD) setSellingPriceUSD(val + 5);
                    }}
                    className="w-full accent-[#F4B400] h-2 bg-[#071A33] rounded-lg cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <label className="text-slate-200 font-medium">Selling Price ($)</label>
                    <span className="font-mono text-[#10B981] font-semibold">${sellingPriceUSD}</span>
                  </div>
                  <input
                    type="range"
                    min={unitCostUSD + 2}
                    max={120}
                    step={1}
                    value={sellingPriceUSD}
                    onChange={(e) => setSellingPriceUSD(Number(e.target.value))}
                    className="w-full accent-[#F4B400] h-2 bg-[#071A33] rounded-lg cursor-pointer"
                  />
                </div>
              </div>

              {/* Annual Holding Cost % */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <label className="text-slate-200 font-medium">Annual Holding Cost Rate (%)</label>
                  <span className="font-mono text-slate-300">{holdingCostPercent}% of unit cost</span>
                </div>
                <input
                  type="range"
                  min={8}
                  max={30}
                  step={1}
                  value={holdingCostPercent}
                  onChange={(e) => setHoldingCostPercent(Number(e.target.value))}
                  className="w-full accent-[#F4B400] h-2 bg-[#071A33] rounded-lg cursor-pointer"
                />
              </div>

              {/* AI Data Forecasting Toggle */}
              <div className="pt-2">
                <div
                  onClick={() => setUseAIDemandForecast(!useAIDemandForecast)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    useAIDemandForecast
                      ? 'bg-[#071A33]/90 border-[#F4B400] shadow-md'
                      : 'bg-[#071A33]/40 border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        useAIDemandForecast
                          ? 'bg-[#F4B400] text-[#071A33]'
                          : 'bg-white/10 text-slate-400'
                      }`}
                    >
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-white flex items-center gap-2">
                        AI & Data Analysis Stock Optimization
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#F4B400]/20 text-[#F4B400]">
                          {useAIDemandForecast ? 'ACTIVE' : 'OFF'}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Reduces safety stock buffer over-ordering & frees up working capital
                      </p>
                    </div>
                  </div>
                  <div
                    className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
                      useAIDemandForecast ? 'bg-[#F4B400]' : 'bg-slate-600'
                    }`}
                  >
                    <div
                      className={`bg-[#071A33] w-4 h-4 rounded-full shadow-md transform transition-transform ${
                        useAIDemandForecast ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Live Executive Analytics Output */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-gradient-to-br from-[#123B67] to-[#0A2240] border border-[#F4B400]/30 rounded-2xl p-6 shadow-xl">
              <div className="text-xs font-mono uppercase tracking-wider text-[#F4B400] mb-1">
                Projected Annual Gross Profit
              </div>
              <div className="text-3xl sm:text-4xl font-bold font-mono text-white flex items-baseline gap-2">
                ${estimatedAnnualGrossProfit.toLocaleString()}
                <span className="text-xs font-mono text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded">
                  {grossMarginPercent}% Gross Margin
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-2">
                Based on {annualDemand.toLocaleString()} annual units sold at ${grossMarginPerUnit} margin/unit.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#102B4C] border border-white/10 rounded-xl p-5">
                <div className="text-xs font-mono text-slate-300 uppercase">Optimal Order (EOQ)</div>
                <div className="text-2xl font-bold font-mono text-white mt-1">
                  {optimalOrderQty} <span className="text-xs font-normal text-slate-400">units</span>
                </div>
                <div className="text-[11px] text-[#F4B400] mt-1 font-mono">
                  Ideal batch per restock
                </div>
              </div>

              <div className="bg-[#102B4C] border border-white/10 rounded-xl p-5">
                <div className="text-xs font-mono text-slate-300 uppercase">Safety Stock Buffer</div>
                <div className="text-2xl font-bold font-mono text-white mt-1">
                  {safetyStockUnits} <span className="text-xs font-normal text-slate-400">units</span>
                </div>
                <div className="text-[11px] text-[#10B981] mt-1 font-mono">
                  {useAIDemandForecast ? 'Lean AI Buffer (-52%)' : 'Standard Buffer'}
                </div>
              </div>
            </div>

            <div className="bg-[#102B4C] border border-white/10 rounded-xl p-5 flex items-center justify-between">
              <div>
                <div className="text-xs font-mono text-slate-300 uppercase">
                  Working Capital Freed via Data Analysis
                </div>
                <div className="text-xl font-bold font-mono text-[#F4B400] mt-1">
                  {useAIDemandForecast
                    ? `+$${estimatedInventorySavings.toLocaleString()} / yr`
                    : '$0 (Enable AI Toggle)'}
                </div>
              </div>
              <div className="w-11 h-11 rounded-xl bg-[#F4B400]/15 border border-[#F4B400]/30 flex items-center justify-center text-[#F4B400]">
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#041122] border border-white/10 text-xs text-slate-300 leading-relaxed">
              <span className="text-[#F4B400] font-semibold">Almasi's Analytical Approach:</span> By pairing practical stock room discipline with Excel & data models, businesses eliminate dead stock while maintaining 99%+ availability on core revenue items.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
