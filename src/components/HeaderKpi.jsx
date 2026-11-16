import React from 'react';
import { KPI_DATA } from '../data/playersData';
import { Shield, Activity, Flame, Trophy, CheckCircle, BarChart3, Database } from 'lucide-react';

export default function HeaderKpi() {
  const kpis = [
    {
      id: 'deliveries',
      value: KPI_DATA.deliveriesAudited,
      label: 'Deliveries Audited',
      subtext: KPI_DATA.deliveriesAuditedSub,
      icon: Database,
      accent: 'border-l-4 border-[#E11D48]',
      highlight: 'text-rose-400'
    },
    {
      id: 'matches',
      value: KPI_DATA.highPedigreeMatches,
      label: 'High-Pedigree Matches',
      subtext: KPI_DATA.highPedigreeMatchesSub,
      icon: Trophy,
      accent: 'border-l-4 border-blue-500',
      highlight: 'text-blue-400'
    },
    {
      id: 'fixtures',
      value: KPI_DATA.macroStakesFixtures,
      label: 'Macro-Stakes Fixtures',
      subtext: KPI_DATA.macroStakesFixturesSub,
      icon: Flame,
      accent: 'border-l-4 border-amber-500',
      highlight: 'text-amber-400'
    },
    {
      id: 'stability',
      value: `Ï = ${KPI_DATA.rankStability}`,
      label: 'Rank Stability',
      subtext: KPI_DATA.rankStabilitySub,
      icon: CheckCircle,
      accent: 'border-l-4 border-emerald-500',
      highlight: 'text-emerald-400'
    }
  ];

  return (
    <header className="relative bg-gradient-to-b from-[#0e1628] via-[#0b101e] to-[#090d16] border-b border-slate-800/80 pt-6 pb-7 px-4 sm:px-6 lg:px-8">
      {/* Background glow effects themed in RR Navy & Pink */}
      <div className="absolute top-0 left-1/4 w-96 h-32 bg-[#1E3A8A]/25 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-0 right-1/4 w-96 h-32 bg-[#E11D48]/20 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Brand Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800/60">
          <div className="flex items-center gap-4">
            {/* Rajasthan Royals Emblem Inspired Icon */}
            <div className="relative group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1E3A8A] via-[#1E293B] to-[#E11D48] p-0.5 shadow-lg shadow-rose-950/40">
                <div className="w-full h-full bg-[#0B1120] rounded-[14px] flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <span className="text-[#E11D48] font-black text-xl tracking-tighter">RR</span>
                    <span className="absolute -top-2.5 -right-2 text-amber-400 text-xs">ðŸ‘‘</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="px-2.5 py-0.5 text-[11px] font-bold tracking-wider uppercase rounded-full bg-[#E11D48]/15 text-[#FB7185] border border-[#E11D48]/30">
                  Rajasthan Royals
                </span>
                <span className="px-2.5 py-0.5 text-[11px] font-semibold tracking-wide rounded-full bg-[#1E3A8A]/30 text-blue-300 border border-[#1E3A8A]/50">
                  Analytics & Scouting Lab
                </span>
                <span className="px-2 py-0.5 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 rounded flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Audited Live
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mt-1">
                SupeRR Selector <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FB7185] via-[#E11D48] to-amber-300">Season 2</span>
              </h1>
              <p className="text-slate-400 text-sm font-medium mt-0.5">
                Pressure Performance Explorer â€” Empirical Bayesian Leverage Index & Clutch Metric Suite
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto bg-slate-900/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-800 text-xs text-slate-300 font-mono">
            <span className="text-slate-400">Target Protocol:</span>
            <span className="text-[#FB7185] font-semibold">Pressure Performance Audit (2022–2026)</span>
          </div>
        </div>

        {/* Top KPI Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {kpis.map((kpi) => {
            const Icon = kpi.icon;
            return (
              <div
                key={kpi.id}
                className={`relative bg-[#0d1424]/90 backdrop-blur-md rounded-xl p-4 transition-all duration-300 hover:bg-[#121c33] hover:shadow-xl hover:shadow-slate-950/50 border border-slate-800/80 ${kpi.accent}`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {kpi.label}
                    </p>
                    <p className={`text-2xl sm:text-3xl font-extrabold font-mono tracking-tight mt-1 ${kpi.highlight}`}>
                      {kpi.value}
                    </p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-800/60 text-slate-300 border border-slate-700/50">
                    <Icon className="w-5 h-5 text-slate-300" />
                  </div>
                </div>
                <div className="mt-3 pt-2.5 border-t border-slate-800/50 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="truncate">{kpi.subtext}</span>
                  <span className="text-emerald-400 font-mono font-medium">âœ“ Verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
}

