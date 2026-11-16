import React, { useState } from 'react';
import { BATTERS_DATA, BOWLERS_DATA, KOHLI_CUTOFF_ANALYSIS } from '../data/playersData';
import { GitCompare, Trophy, TrendingUp, AlertTriangle, ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';

export default function CompareCard({
  playerType,
  selectedPlayer1,
  setSelectedPlayer1,
  selectedPlayer2,
  setSelectedPlayer2
}) {
  const allBatters = [...BATTERS_DATA, KOHLI_CUTOFF_ANALYSIS];
  const allBowlers = BOWLERS_DATA;
  const currentPool = playerType === 'batters' ? allBatters : allBowlers;

  // Resolve players from IDs/objects
  const p1 = currentPool.find((p) => p.name === (selectedPlayer1?.name || currentPool[0].name)) || currentPool[0];
  const p2 = currentPool.find((p) => p.name === (selectedPlayer2?.name || currentPool[1].name)) || currentPool[1];

  const isBatter = playerType === 'batters';

  // Metrics to compare based on player type
  const metrics = isBatter
    ? [
        { key: 'score', label: 'Overall Leverage Score', format: (v) => v.toFixed(2), higherIsBetter: true },
        { key: 'pressSR', label: 'Pressure Strike Rate', format: (v) => v.toFixed(2), higherIsBetter: true },
        { key: 'strictCollAvg', label: 'Strict Collapse Average', format: (v) => v.toFixed(2), higherIsBetter: true },
        { key: 'runShare', label: 'Pressure Team Run Share %', format: (v) => `${v.toFixed(2)}%`, higherIsBetter: true },
        { key: 'beatPar', label: 'Beat Par Frequency %', format: (v) => `${v.toFixed(1)}%`, higherIsBetter: true },
        { key: 'ciWidth', label: 'CI Uncertainty Width (Narrower = Better)', format: (v) => `±${(v/2).toFixed(2)} (${v.toFixed(2)})`, higherIsBetter: false }
      ]
    : [
        { key: 'score', label: 'Overall Leverage Score', format: (v) => v.toFixed(2), higherIsBetter: true },
        { key: 'rawEcon', label: 'Raw In-Pressure Economy', format: (v) => v.toFixed(2), higherIsBetter: false },
        { key: 'ipDelta', label: 'In-Pressure Delta (IP Delta)', format: (v) => v.toFixed(2), higherIsBetter: false },
        { key: 'beatPar', label: 'Beat Par Frequency %', format: (v) => `${v.toFixed(1)}%`, higherIsBetter: true },
        { key: 'deathEcon', label: 'Death Overs Economy (17-20)', format: (v) => v.toFixed(2), higherIsBetter: false },
        { key: 'ciWidth', label: 'CI Uncertainty Width (Narrower = Better)', format: (v) => `±${(v/2).toFixed(2)} (${v.toFixed(2)})`, higherIsBetter: false }
      ];

  const scoreDiff = p1.score - p2.score;

  // Preset match-ups
  const setPreset = (name1, name2) => {
    const found1 = currentPool.find((p) => p.name === name1);
    const found2 = currentPool.find((p) => p.name === name2);
    if (found1 && found2) {
      setSelectedPlayer1(found1);
      setSelectedPlayer2(found2);
    }
  };

  return (
    <div className="bg-[#0c1222] rounded-3xl p-6 border border-slate-800 shadow-2xl my-6">
      {/* Title & Presets Strip */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-[#E11D48]/20 text-[#FB7185] border border-[#E11D48]/30">
              <GitCompare className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                Head-to-Head Pressure Performance Breakdown
              </h2>
              <p className="text-xs text-slate-400">
                Audited side-by-side comparison across all situational metrics and Bayesian parameters
              </p>
            </div>
          </div>
        </div>

        {/* Quick Comparison Presets */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-slate-400 font-mono">Curated Matchups:</span>
          {isBatter ? (
            <>
              <button
                onClick={() => setPreset('Suryakumar Yadav', 'Heinrich Klaasen')}
                className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg border border-slate-700 font-medium transition-colors"
              >
                #1 Surya vs #2 Klaasen
              </button>
              <button
                onClick={() => setPreset('Andre Russell', 'Tim David')}
                className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg border border-slate-700 font-medium transition-colors"
              >
                Death Finishers
              </button>
              <button
                onClick={() => setPreset('Glenn Maxwell', 'Virat Kohli')}
                className="text-xs bg-rose-950/60 hover:bg-rose-900/80 text-rose-300 px-3 py-1.5 rounded-lg border border-rose-800/60 font-medium transition-colors flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3 text-rose-400" />
                #10 Maxwell vs #11 Kohli
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setPreset('Sunil Narine', 'Jasprit Bumrah')}
                className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg border border-slate-700 font-medium transition-colors"
              >
                #1 Narine vs #2 Bumrah
              </button>
              <button
                onClick={() => setPreset('Matheesha Pathirana', 'Nathan Ellis')}
                className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg border border-slate-700 font-medium transition-colors"
              >
                Death Specialists
              </button>
              <button
                onClick={() => setPreset('Sunil Narine', 'Mitchell Santner')}
                className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg border border-slate-700 font-medium transition-colors"
              >
                Spin Choke Duel
              </button>
            </>
          )}
        </div>
      </div>

      {/* Selectors and Player Cards Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Player 1 Selector & Badge */}
        <div className="bg-[#10182b] p-5 rounded-2xl border-2 border-[#E11D48]/40 shadow-lg shadow-rose-950/20 relative">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs uppercase font-mono font-bold text-[#FB7185] tracking-wider">
              Selected Contender A
            </span>
            <span className="text-xs font-mono bg-rose-950 text-rose-300 px-2.5 py-0.5 rounded-full border border-rose-800/60">
              Rank #{p1.rank}
            </span>
          </div>

          <label className="block text-xs text-slate-400 mb-1.5 font-medium">Choose Player A:</label>
          <select
            value={p1.name}
            onChange={(e) => {
              const found = currentPool.find((p) => p.name === e.target.value);
              if (found) setSelectedPlayer1(found);
            }}
            className="w-full bg-[#18233e] text-white font-semibold text-base px-3.5 py-2.5 rounded-xl border border-slate-600 focus:border-[#E11D48] focus:outline-none mb-4 cursor-pointer"
          >
            {currentPool.map((p) => (
              <option key={p.name} value={p.name} className="bg-slate-900 text-slate-200">
                #{p.rank} — {p.name} ({p.score.toFixed(2)})
              </option>
            ))}
          </select>

          <div className="flex items-center justify-between pt-3 border-t border-slate-800">
            <div>
              <p className="text-xl font-extrabold text-white">{p1.name}</p>
              <p className="text-xs text-slate-400">{p1.team} • {p1.role}</p>
            </div>
            <div className="text-right">
              <span className="text-[10px] uppercase text-slate-400 font-bold block">Score</span>
              <span className="text-3xl font-black font-mono text-[#FB7185]">{p1.score.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Player 2 Selector & Badge */}
        <div className="bg-[#10182b] p-5 rounded-2xl border-2 border-blue-500/40 shadow-lg shadow-blue-950/20 relative">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs uppercase font-mono font-bold text-blue-400 tracking-wider">
              Selected Contender B
            </span>
            <span className="text-xs font-mono bg-blue-950 text-blue-300 px-2.5 py-0.5 rounded-full border border-blue-800/60">
              Rank #{p2.rank}
            </span>
          </div>

          <label className="block text-xs text-slate-400 mb-1.5 font-medium">Choose Player B:</label>
          <select
            value={p2.name}
            onChange={(e) => {
              const found = currentPool.find((p) => p.name === e.target.value);
              if (found) setSelectedPlayer2(found);
            }}
            className="w-full bg-[#18233e] text-white font-semibold text-base px-3.5 py-2.5 rounded-xl border border-slate-600 focus:border-blue-500 focus:outline-none mb-4 cursor-pointer"
          >
            {currentPool.map((p) => (
              <option key={p.name} value={p.name} className="bg-slate-900 text-slate-200">
                #{p.rank} — {p.name} ({p.score.toFixed(2)})
              </option>
            ))}
          </select>

          <div className="flex items-center justify-between pt-3 border-t border-slate-800">
            <div>
              <p className="text-xl font-extrabold text-white">{p2.name}</p>
              <p className="text-xs text-slate-400">{p2.team} • {p2.role}</p>
            </div>
            <div className="text-right">
              <span className="text-[10px] uppercase text-slate-400 font-bold block">Score</span>
              <span className="text-3xl font-black font-mono text-cyan-400">{p2.score.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Delta Banner */}
      <div className="my-5 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-amber-400" />
          <span className="text-xs text-slate-300 font-medium">
            Overall Advantage:
          </span>
          <span className="text-sm font-bold text-white">
            {scoreDiff === 0
              ? 'Tied Score'
              : scoreDiff > 0
              ? `${p1.name} leads by +${scoreDiff.toFixed(2)} pts`
              : `${p2.name} leads by +${Math.abs(scoreDiff).toFixed(2)} pts`}
          </span>
        </div>

        <div className="text-xs text-slate-400 font-mono">
          Sample: {p1.sampleSize || 'N/A'} vs {p2.sampleSize || 'N/A'}
        </div>
      </div>

      {/* Side-by-Side Metric Comparison Rows */}
      <div className="space-y-3 mt-4">
        {metrics.map((m) => {
          const val1 = p1[m.key];
          const val2 = p2[m.key];
          const p1Wins = m.higherIsBetter ? val1 > val2 : val1 < val2;
          const p2Wins = m.higherIsBetter ? val2 > val1 : val2 < val1;
          const isTie = val1 === val2;

          return (
            <div
              key={m.key}
              className="bg-[#10182b]/70 hover:bg-[#131e36] p-4 rounded-xl border border-slate-800 transition-colors"
            >
              <div className="flex items-center justify-between text-xs mb-2">
                <div className="flex items-center gap-2">
                  <span className={`font-mono text-sm font-bold ${p1Wins ? 'text-[#FB7185]' : 'text-slate-300'}`}>
                    {m.format(val1)}
                  </span>
                  {p1Wins && (
                    <span className="text-[10px] bg-rose-950/70 text-rose-300 px-1.5 py-0.5 rounded font-mono font-bold">
                      BEST
                    </span>
                  )}
                </div>

                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wide text-center">
                  {m.label}
                </span>

                <div className="flex items-center gap-2">
                  {p2Wins && (
                    <span className="text-[10px] bg-blue-950/70 text-blue-300 px-1.5 py-0.5 rounded font-mono font-bold">
                      BEST
                    </span>
                  )}
                  <span className={`font-mono text-sm font-bold ${p2Wins ? 'text-cyan-400' : 'text-slate-300'}`}>
                    {m.format(val2)}
                  </span>
                </div>
              </div>

              {/* Comparative Progress Bar */}
              <div className="flex items-center gap-2 w-full">
                {/* Player 1 Bar (aligns to right edge of left half) */}
                <div className="flex-1 bg-slate-800/80 h-2.5 rounded-full overflow-hidden flex justify-end">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      p1Wins ? 'bg-gradient-to-l from-[#E11D48] to-rose-400' : 'bg-slate-600'
                    }`}
                    style={{
                      width: `${Math.min(100, Math.max(10, (Math.abs(val1) / (Math.abs(val1) + Math.abs(val2) || 1)) * 100))}%`
                    }}
                  />
                </div>

                <div className="w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0" />

                {/* Player 2 Bar (aligns to left edge of right half) */}
                <div className="flex-1 bg-slate-800/80 h-2.5 rounded-full overflow-hidden flex justify-start">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      p2Wins ? 'bg-gradient-to-r from-blue-500 to-cyan-400' : 'bg-slate-600'
                    }`}
                    style={{
                      width: `${Math.min(100, Math.max(10, (Math.abs(val2) / (Math.abs(val1) + Math.abs(val2) || 1)) * 100))}%`
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 95% Confidence Interval Overlap Comparison */}
      <div className="mt-6 p-5 rounded-2xl bg-[#0f172a] border border-slate-800">
        <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-3">
          <Activity className="w-4 h-4 text-emerald-400" />
          <span>95% Confidence Interval Overlap Analysis</span>
        </h4>
        <p className="text-xs text-slate-400 mb-4">
          Visual test of statistical separation. If intervals overlap significantly, situational difference is moderated by sample variance; disjoint intervals confirm clear superiority.
        </p>

        {/* Range bar for P1 */}
        <div className="mb-3">
          <div className="flex justify-between text-xs text-slate-300 mb-1">
            <span className="font-semibold text-[#FB7185]">{p1.name}</span>
            <span className="font-mono text-xs">[{p1.ciLower.toFixed(2)}, {p1.ciUpper.toFixed(2)}] (Score: {p1.score.toFixed(2)})</span>
          </div>
          <div className="relative w-full h-3.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="absolute top-0 bottom-0 bg-[#E11D48] opacity-75 rounded-full"
              style={{
                left: `${Math.max(0, ((p1.ciLower - 40) / 55) * 100)}%`,
                width: `${Math.min(100, ((p1.ciUpper - p1.ciLower) / 55) * 100)}%`
              }}
            />
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-md z-10"
              style={{ left: `${Math.max(0, Math.min(100, ((p1.score - 40) / 55) * 100))}%` }}
            />
          </div>
        </div>

        {/* Range bar for P2 */}
        <div>
          <div className="flex justify-between text-xs text-slate-300 mb-1">
            <span className="font-semibold text-cyan-400">{p2.name}</span>
            <span className="font-mono text-xs">[{p2.ciLower.toFixed(2)}, {p2.ciUpper.toFixed(2)}] (Score: {p2.score.toFixed(2)})</span>
          </div>
          <div className="relative w-full h-3.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="absolute top-0 bottom-0 bg-blue-500 opacity-75 rounded-full"
              style={{
                left: `${Math.max(0, ((p2.ciLower - 40) / 55) * 100)}%`,
                width: `${Math.min(100, ((p2.ciUpper - p2.ciLower) / 55) * 100)}%`
              }}
            />
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-md z-10"
              style={{ left: `${Math.max(0, Math.min(100, ((p2.score - 40) / 55) * 100))}%` }}
            />
          </div>
        </div>

        {/* Overlap Summary */}
        <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
          <span>
            {Math.max(p1.ciLower, p2.ciLower) <= Math.min(p1.ciUpper, p2.ciUpper) ? (
              <span className="text-amber-400">
                ⚠️ Intervals Overlap between {Math.max(p1.ciLower, p2.ciLower).toFixed(2)} and {Math.min(p1.ciUpper, p2.ciUpper).toFixed(2)} — match context determines outcome.
              </span>
            ) : (
              <span className="text-emerald-400 font-semibold">
                ✓ Non-Overlapping Intervals — Statistically significant pressure separation at α = 0.05.
              </span>
            )}
          </span>
          <span className="font-mono text-slate-500 text-[11px]">Empirical Bayes Posterior</span>
        </div>
      </div>
    </div>
  );
}
