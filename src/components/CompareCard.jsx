import React from 'react';
import { BATTERS_DATA, BOWLERS_DATA, KOHLI_CUTOFF_ANALYSIS } from '../data/playersData';

export default function CompareCard({
  playerType = 'batters',
  selectedPlayer1,
  setSelectedPlayer1,
  selectedPlayer2,
  setSelectedPlayer2,
}) {
  const kohliEntry = KOHLI_CUTOFF_ANALYSIS
    ? Array.isArray(KOHLI_CUTOFF_ANALYSIS)
      ? KOHLI_CUTOFF_ANALYSIS
      : [KOHLI_CUTOFF_ANALYSIS]
    : [];

  const list =
    playerType === 'batters'
      ? [...BATTERS_DATA, ...kohliEntry.filter((k) => k?.name && !BATTERS_DATA.some((b) => b.name === k.name))]
      : BOWLERS_DATA;

  const p1 = selectedPlayer1 && list.some((p) => p.name === selectedPlayer1.name) ? selectedPlayer1 : list[0];
  const p2 = selectedPlayer2 && list.some((p) => p.name === selectedPlayer2.name) ? selectedPlayer2 : list[1];
  const isBat = playerType === 'batters';

  const formatCi = (p) => {
    if (!p) return '—';
    if (p.ciLower != null && p.ciUpper != null) {
      return `[${Number(p.ciLower).toFixed(2)}, ${Number(p.ciUpper).toFixed(2)}]`;
    }
    return p.ci || '—';
  };

  const metrics = isBat
    ? [
        { label: 'Composite Pressure Index', get: (p) => p?.score, fmt: (v) => (v != null ? Number(v).toFixed(2) : '—'), higherBetter: true },
        { label: 'Pressure Strike Rate', get: (p) => p?.pressSR ?? p?.pressSr, fmt: (v) => (v != null ? Number(v).toFixed(2) : '—'), higherBetter: true },
        { label: 'Strict Collapse Avg', get: (p) => p?.strictCollAvg ?? p?.collapseAvg, fmt: (v) => (v != null ? Number(v).toFixed(2) : '—'), higherBetter: true },
        { label: 'Collapse Team Run Share', get: (p) => p?.runShare, fmt: (v) => (v != null ? `${v}%` : '—'), higherBetter: true },
        { label: 'Innings Beating Par', get: (p) => p?.beatPar, fmt: (v) => (v != null ? `${v}%` : '—'), higherBetter: true },
        { label: '95% Match-Bootstrap CI', get: (p) => formatCi(p), fmt: (v) => v, higherBetter: null },
      ]
    : [
        { label: 'Composite Pressure Index', get: (p) => p?.score, fmt: (v) => (v != null ? Number(v).toFixed(2) : '—'), higherBetter: true },
        { label: 'Innings-Phase Econ Delta', get: (p) => p?.ipDelta ?? p?.econDelta, fmt: (v) => (v != null ? `${Number(v) > 0 ? '+' : ''}${Number(v).toFixed(2)} RPO` : '—'), higherBetter: false },
        { label: 'Raw Economy Rate', get: (p) => p?.rawEcon ?? p?.economy, fmt: (v) => (v != null ? Number(v).toFixed(2) : '—'), higherBetter: false },
        { label: 'Death-Over Economy', get: (p) => p?.deathEcon, fmt: (v) => (v != null ? Number(v).toFixed(2) : '—'), higherBetter: false },
        { label: 'Spells Beating Par', get: (p) => p?.beatPar, fmt: (v) => (v != null ? `${v}%` : '—'), higherBetter: true },
        { label: '95% Match-Bootstrap CI', get: (p) => formatCi(p), fmt: (v) => v, higherBetter: null },
      ];

  return (
    <div className="bg-[#0d1424]/95 border border-slate-800 rounded-2xl p-6 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-lg font-bold text-white">Head-to-Head Pressure Profile Comparison</h3>
          <p className="text-xs text-slate-400">
            Audited 6-Dimension Composite &amp; Sub-Metric Breakdown (635 High-Pedigree Matches • Includes #11 Cutoff Benchmark)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <select
            value={p1?.name || ''}
            onChange={(e) => {
              const found = list.find((item) => item.name === e.target.value);
              if (found && setSelectedPlayer1) setSelectedPlayer1(found);
            }}
            className="bg-slate-800 border border-slate-700 text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-[#E11D48]"
          >
            {list.map((p) => (
              <option key={p.name} value={p.name}>
                #{p.rank ?? '-'} {p.name}
              </option>
            ))}
          </select>

          <span className="text-xs font-bold uppercase tracking-wider text-[#FB7185]">VS</span>

          <select
            value={p2?.name || ''}
            onChange={(e) => {
              const found = list.find((item) => item.name === e.target.value);
              if (found && setSelectedPlayer2) setSelectedPlayer2(found);
            }}
            className="bg-slate-800 border border-slate-700 text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-[#E11D48]"
          >
            {list.map((p) => (
              <option key={p.name} value={p.name}>
                #{p.rank ?? '-'} {p.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 text-xs uppercase">
              <th className="py-3 px-4">Audited Metric</th>
              <th className="py-3 px-4 text-right text-blue-300">
                #{p1?.rank ?? '-'} {p1?.name}
              </th>
              <th className="py-3 px-4 text-right text-[#FB7185]">
                #{p2?.rank ?? '-'} {p2?.name}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/70">
            {metrics.map((m) => {
              const v1 = m.get(p1);
              const v2 = m.get(p2);
              const n1 = parseFloat(v1);
              const n2 = parseFloat(v2);
              const validNums = m.higherBetter !== null && !Number.isNaN(n1) && !Number.isNaN(n2) && n1 !== n2;
              const p1Wins = validNums && (m.higherBetter ? n1 > n2 : n1 < n2);
              const p2Wins = validNums && (m.higherBetter ? n2 > n1 : n2 < n1);

              return (
                <tr key={m.label} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-300">{m.label}</td>
                  <td className={`py-3 px-4 text-right font-mono font-semibold ${p1Wins ? 'text-emerald-400' : 'text-white'}`}>
                    {m.fmt(v1)}
                  </td>
                  <td className={`py-3 px-4 text-right font-mono font-semibold ${p2Wins ? 'text-emerald-400' : 'text-white'}`}>
                    {m.fmt(v2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
