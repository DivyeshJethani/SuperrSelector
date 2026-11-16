import React, { useState, useEffect } from 'react';

export default function CompareCard({ players = [], category = 'batters' }) {
  const safeList = Array.isArray(players) ? players : [];
  const [p1Name, setP1Name] = useState(safeList[0]?.name || '');
  const [p2Name, setP2Name] = useState(safeList[1]?.name || safeList[0]?.name || '');

  useEffect(() => {
    if (safeList.length > 0 && !safeList.some((p) => p?.name === p1Name)) {
      setP1Name(safeList[0]?.name || '');
    }
    if (safeList.length > 1 && !safeList.some((p) => p?.name === p2Name)) {
      setP2Name(safeList[1]?.name || '');
    }
  }, [category, safeList]);

  if (safeList.length < 2) {
    return (
      <div className="p-6 bg-slate-900/80 border border-slate-800 rounded-2xl text-slate-300">
        Select at least two players in the current category to compare.
      </div>
    );
  }

  const p1 = safeList.find((p) => p?.name === p1Name) || safeList[0];
  const p2 = safeList.find((p) => p?.name === p2Name) || safeList[1];

  const isBat = category === 'batters' || p1?.pressSr !== undefined || p1?.strictCollAvg !== undefined;

  const metrics = isBat
    ? [
        { label: 'Composite Pressure Index', k: 'score', fmt: (v) => Number(v ?? 0).toFixed(2), higherBetter: true },
        { label: 'Pressure Strike Rate', k: 'pressSr', fmt: (v) => (v != null ? Number(v).toFixed(2) : '—'), higherBetter: true },
        { label: 'Strict Collapse Avg', k: 'strictCollAvg', fmt: (v) => (v != null ? Number(v).toFixed(2) : '—'), higherBetter: true },
        { label: 'Collapse Team Run Share', k: 'runShare', fmt: (v) => (v != null ? `${v}%` : '—'), higherBetter: true },
        { label: 'Innings Beating Par', k: 'beatPar', fmt: (v) => (v != null ? `${v}%` : '—'), higherBetter: true },
        { label: '95% Match-Bootstrap CI', k: 'ci', fmt: (v) => v || '—', higherBetter: null },
      ]
    : [
        { label: 'Composite Pressure Index', k: 'score', fmt: (v) => Number(v ?? 0).toFixed(2), higherBetter: true },
        { label: 'Innings-Phase Econ Delta', k: 'ipDelta', fmt: (v) => (v != null ? `${Number(v) > 0 ? '+' : ''}${Number(v).toFixed(2)} RPO` : '—'), higherBetter: false },
        { label: 'Raw Economy Rate', k: 'rawEcon', fmt: (v) => (v != null ? Number(v).toFixed(2) : '—'), higherBetter: false },
        { label: 'Death-Over Economy', k: 'deathEcon', fmt: (v) => (v != null ? Number(v).toFixed(2) : '—'), higherBetter: false },
        { label: 'Spells Beating Par', k: 'beatPar', fmt: (v) => (v != null ? `${v}%` : '—'), higherBetter: true },
        { label: '95% Match-Bootstrap CI', k: 'ci', fmt: (v) => v || '—', higherBetter: null },
      ];

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-lg font-bold text-white">Head-to-Head Pressure Profile Comparison</h3>
          <p className="text-xs text-slate-400">Audited 6-Dimension Composite & Sub-Metric Breakdown (635 High-Pedigree Matches)</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <select
            value={p1?.name || ''}
            onChange={(e) => setP1Name(e.target.value)}
            className="bg-slate-800 border border-slate-700 text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-pink-500"
          >
            {safeList.map((p) => (
              <option key={p.name} value={p.name}>
                #{p.rank ?? '-'} {p.name}
              </option>
            ))}
          </select>
          <span className="text-xs font-bold uppercase tracking-wider text-pink-500">VS</span>
          <select
            value={p2?.name || ''}
            onChange={(e) => setP2Name(e.target.value)}
            className="bg-slate-800 border border-slate-700 text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-pink-500"
          >
            {safeList.map((p) => (
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
              <th className="py-3 px-4 text-right text-blue-300">{p1?.name} (#{p1?.rank ?? '-'})</th>
              <th className="py-3 px-4 text-right text-pink-300">{p2?.name} (#{p2?.rank ?? '-'})</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/70">
            {metrics.map((m) => {
              const v1 = p1?.[m.k];
              const v2 = p2?.[m.k];
              const n1 = parseFloat(v1);
              const n2 = parseFloat(v2);
              const validNums = m.higherBetter !== null && !Number.isNaN(n1) && !Number.isNaN(n2) && n1 !== n2;
              const p1Wins = validNums && (m.higherBetter ? n1 > n2 : n1 < n2);
              const p2Wins = validNums && (m.higherBetter ? n2 > n1 : n2 < n1);

              return (
                <tr key={m.label} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-300">{m.label}</td>
                  <td className={`py-3 px-4 text-right font-semibold ${p1Wins ? 'text-emerald-400' : 'text-white'}`}>
                    {m.fmt(v1)}
                  </td>
                  <td className={`py-3 px-4 text-right font-semibold ${p2Wins ? 'text-emerald-400' : 'text-white'}`}>
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
