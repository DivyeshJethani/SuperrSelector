import React from 'react';
import { TrendingUp, Award, ExternalLink, GitCompare, Activity, Zap, CheckCircle2 } from 'lucide-react';

export default function PlayerCard({
  player,
  type,
  onSelectForCompare,
  onOpenDetails,
  isSelectedForCompare
}) {
  const isBatter = type === 'batters';

  // Rank badge styling
  const getRankBadge = (rank) => {
    if (rank === 1) {
      return 'bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-black shadow-lg shadow-amber-500/30';
    }
    if (rank === 2) {
      return 'bg-gradient-to-r from-slate-200 to-slate-400 text-slate-950 font-black shadow';
    }
    if (rank === 3) {
      return 'bg-gradient-to-r from-amber-700 to-amber-800 text-amber-100 font-bold';
    }
    return 'bg-slate-800 text-slate-300 border border-slate-700';
  };

  return (
    <div className="relative group bg-[#0d1424] hover:bg-[#121c33] rounded-2xl p-5 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-950/80 flex flex-col justify-between overflow-hidden">
      {/* Top Accent line */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 transition-all duration-300 ${
          isBatter
            ? 'bg-gradient-to-r from-[#E11D48] via-[#FB7185] to-transparent group-hover:h-1.5'
            : 'bg-gradient-to-r from-[#1E3A8A] via-[#38BDF8] to-transparent group-hover:h-1.5'
        }`}
      />

      <div>
        {/* Header row: Rank, Name, Score */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span
              className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-mono tracking-tight shrink-0 ${getRankBadge(
                player.rank
              )}`}
            >
              #{player.rank}
            </span>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-rose-200 transition-colors">
                {player.name}
              </h3>
              <p className="text-xs text-slate-400 flex items-center gap-1.5">
                <span>{player.team}</span>
              </p>
            </div>
          </div>

          {/* Overall Pressure Score Tile */}
          <div className="text-right shrink-0">
            <div className="inline-flex flex-col items-end">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                Leverage Score
              </span>
              <span
                className={`text-2xl font-black font-mono tracking-tight ${
                  isBatter ? 'text-[#FB7185]' : 'text-cyan-400'
                }`}
              >
                {player.score.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Role badge */}
        <div className="mt-2.5 flex items-center gap-2 flex-wrap">
          <span
            className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
              isBatter
                ? 'bg-[#E11D48]/15 text-[#FB7185] border border-[#E11D48]/30'
                : 'bg-[#1E3A8A]/30 text-sky-300 border border-[#1E3A8A]/50'
            }`}
          >
            {player.role}
          </span>
          <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/50">
            {player.sampleSize}
          </span>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 gap-2 mt-4">
          {isBatter ? (
            <>
              <div className="bg-[#11192e] p-2.5 rounded-xl border border-slate-800">
                <span className="text-[10px] uppercase font-semibold text-slate-400 block">
                  Press Strike Rate
                </span>
                <span className="text-base font-extrabold font-mono text-white mt-0.5 block">
                  {player.pressSR.toFixed(2)}
                </span>
                <span className="text-[10px] text-emerald-400 font-mono">
                  {player.pressSR > 160 ? '🔥 Elite Tier' : '⚡ Strong'}
                </span>
              </div>

              <div className="bg-[#11192e] p-2.5 rounded-xl border border-slate-800">
                <span className="text-[10px] uppercase font-semibold text-slate-400 block">
                  Strict Coll Avg
                </span>
                <span className="text-base font-extrabold font-mono text-white mt-0.5 block">
                  {player.strictCollAvg.toFixed(2)}
                </span>
                <span className="text-[10px] text-blue-400 font-mono">
                  {player.strictCollAvg > 60 ? '🛡️ Fortress' : '⚖️ Stable'}
                </span>
              </div>

              <div className="bg-[#11192e] p-2.5 rounded-xl border border-slate-800">
                <span className="text-[10px] uppercase font-semibold text-slate-400 block">
                  Run Share %
                </span>
                <span className="text-base font-extrabold font-mono text-white mt-0.5 block">
                  {player.runShare.toFixed(2)}%
                </span>
                <span className="text-[10px] text-amber-400 font-mono">
                  {player.runShare > 25 ? '👑 Anchor Lead' : '🎯 Role Share'}
                </span>
              </div>

              <div className="bg-[#11192e] p-2.5 rounded-xl border border-slate-800">
                <span className="text-[10px] uppercase font-semibold text-slate-400 block">
                  Beat Par %
                </span>
                <span className="text-base font-extrabold font-mono text-white mt-0.5 block">
                  {player.beatPar.toFixed(1)}%
                </span>
                <span className="text-[10px] text-emerald-400 font-mono">
                  {player.beatPar > 65 ? '🚀 High Alpha' : '✓ Above Par'}
                </span>
              </div>
            </>
          ) : (
            <>
              <div className="bg-[#11192e] p-2.5 rounded-xl border border-slate-800">
                <span className="text-[10px] uppercase font-semibold text-slate-400 block">
                  Raw Econ
                </span>
                <span className="text-base font-extrabold font-mono text-white mt-0.5 block">
                  {player.rawEcon.toFixed(2)}
                </span>
                <span className="text-[10px] text-emerald-400 font-mono">
                  {player.rawEcon < 7.5 ? '🔒 Lockdown' : '⚡ Disciplined'}
                </span>
              </div>

              <div className="bg-[#11192e] p-2.5 rounded-xl border border-slate-800">
                <span className="text-[10px] uppercase font-semibold text-slate-400 block">
                  IP Delta
                </span>
                <span className="text-base font-extrabold font-mono text-emerald-400 mt-0.5 block">
                  {player.ipDelta.toFixed(2)}
                </span>
                <span className="text-[10px] text-emerald-400 font-mono">
                  {player.ipDelta < -1.5 ? '💎 Extreme Suppress' : '📉 Below Par'}
                </span>
              </div>

              <div className="bg-[#11192e] p-2.5 rounded-xl border border-slate-800">
                <span className="text-[10px] uppercase font-semibold text-slate-400 block">
                  Beat Par %
                </span>
                <span className="text-base font-extrabold font-mono text-white mt-0.5 block">
                  {player.beatPar.toFixed(1)}%
                </span>
                <span className="text-[10px] text-blue-400 font-mono">
                  {player.beatPar > 70 ? '👑 Unplayable' : '🎯 Consistent'}
                </span>
              </div>

              <div className="bg-[#11192e] p-2.5 rounded-xl border border-slate-800">
                <span className="text-[10px] uppercase font-semibold text-slate-400 block">
                  Death Econ
                </span>
                <span className="text-base font-extrabold font-mono text-white mt-0.5 block">
                  {player.deathEcon.toFixed(2)}
                </span>
                <span className="text-[10px] text-amber-400 font-mono">
                  {player.deathEcon <= 8.0 ? '❄️ Ice Cold' : '⚔️ Death Battle'}
                </span>
              </div>
            </>
          )}
        </div>

        {/* 95% Confidence Interval Bar */}
        <div className="mt-4 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
          <div className="flex items-center justify-between text-[11px] mb-1">
            <span className="text-slate-400 font-medium">95% Confidence Interval:</span>
            <span className="font-mono text-slate-200 font-semibold">
              [{player.ciLower.toFixed(2)}, {player.ciUpper.toFixed(2)}]
            </span>
          </div>

          {/* Visual Range Bar */}
          <div className="relative w-full h-3 bg-slate-800 rounded-full overflow-hidden mt-1.5">
            {/* Range highlight (scaled to 40 - 95 range) */}
            <div
              className={`absolute top-0 bottom-0 rounded-full opacity-60 ${
                isBatter ? 'bg-[#E11D48]' : 'bg-[#1E3A8A]'
              }`}
              style={{
                left: `${Math.max(0, ((player.ciLower - 40) / 55) * 100)}%`,
                width: `${Math.min(100, ((player.ciUpper - player.ciLower) / 55) * 100)}%`
              }}
            />
            {/* Score tick */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-md z-10"
              style={{
                left: `${Math.max(0, Math.min(100, ((player.score - 40) / 55) * 100))}%`
              }}
            />
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono mt-1">
            <span>40.00</span>
            <span className="text-slate-400 font-sans">
              CI Width: <strong className="text-slate-300">{player.ciWidth.toFixed(2)}</strong> (
              {player.ciWidth < 20 ? 'High Precision' : 'Standard Spread'})
            </span>
            <span>95.00</span>
          </div>
        </div>

        {/* Tactical Scout Snippet */}
        <p className="mt-3 text-xs text-slate-400 line-clamp-2 leading-relaxed italic border-l-2 border-slate-700 pl-2">
          "{player.tacticalScout}"
        </p>
      </div>

      {/* Action Footer */}
      <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
        <button
          onClick={() => onSelectForCompare(player)}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold transition-all ${
            isSelectedForCompare
              ? 'bg-rose-500/20 text-rose-300 border border-rose-500/50'
              : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/50'
          }`}
        >
          <GitCompare className="w-3.5 h-3.5" />
          <span>{isSelectedForCompare ? 'In Comparison' : 'Compare'}</span>
        </button>

        <button
          onClick={() => onOpenDetails(player)}
          className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold bg-[#11192e] hover:bg-[#1a2542] text-slate-200 hover:text-white border border-slate-700/60 transition-all"
        >
          <span>Deep Profile</span>
          <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
        </button>
      </div>
    </div>
  );
}
