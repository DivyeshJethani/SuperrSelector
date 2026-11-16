import React from 'react';
import { X, Trophy, Shield, Activity, GitCompare, CheckCircle2, Zap } from 'lucide-react';

export default function PlayerDetailModal({
  player,
  type,
  onClose,
  onSelectForCompare
}) {
  if (!player) return null;
  const isBatter = type === 'batters';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0d1424] border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4 pb-6 border-b border-slate-800">
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-mono font-black shrink-0 ${
              player.rank === 1
                ? 'bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/30'
                : 'bg-slate-800 text-white border border-slate-700'
            }`}
          >
            #{player.rank}
          </div>

          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                  isBatter
                    ? 'bg-[#E11D48]/20 text-[#FB7185] border border-[#E11D48]/40'
                    : 'bg-[#1E3A8A]/30 text-sky-300 border border-[#1E3A8A]/50'
                }`}
              >
                {player.role}
              </span>
              <span className="text-xs font-mono text-slate-400 bg-slate-800/80 px-2.5 py-0.5 rounded border border-slate-700">
                {player.team}
              </span>
            </div>
            <h3 className="text-2xl font-extrabold text-white mt-1.5">{player.name}</h3>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              Audited Leverage Sample: {player.sampleSize || '1,000+ Balls'}
            </p>
          </div>
        </div>

        {/* Score & Confidence Interval Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <div className="bg-[#11192e] p-4 rounded-2xl border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-400 uppercase font-semibold block">
                Overall Leverage Score
              </span>
              <span
                className={`text-3xl font-black font-mono mt-0.5 block ${
                  isBatter ? 'text-[#FB7185]' : 'text-cyan-400'
                }`}
              >
                {player.score.toFixed(2)}
              </span>
            </div>
            <Trophy className="w-8 h-8 text-amber-400/80" />
          </div>

          <div className="bg-[#11192e] p-4 rounded-2xl border border-slate-800">
            <span className="text-xs text-slate-400 uppercase font-semibold block">
              95% Confidence Interval
            </span>
            <div className="text-xl font-bold font-mono text-white mt-0.5">
              [{player.ciLower.toFixed(2)}, {player.ciUpper.toFixed(2)}]
            </div>
            <span className="text-[11px] text-slate-400 font-mono">
              Spread Width: {player.ciWidth?.toFixed(2)} pts
            </span>
          </div>
        </div>

        {/* Audited Key Metrics Breakdown */}
        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
          Audited Core Metrics
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {isBatter ? (
            <>
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Press SR</span>
                <span className="text-lg font-black font-mono text-white">{player.pressSR.toFixed(2)}</span>
              </div>
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Strict Coll Avg</span>
                <span className="text-lg font-black font-mono text-white">{player.strictCollAvg.toFixed(2)}</span>
              </div>
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Run Share</span>
                <span className="text-lg font-black font-mono text-white">{player.runShare.toFixed(2)}%</span>
              </div>
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Beat Par</span>
                <span className="text-lg font-black font-mono text-white">{player.beatPar.toFixed(1)}%</span>
              </div>
            </>
          ) : (
            <>
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Raw Econ</span>
                <span className="text-lg font-black font-mono text-white">{player.rawEcon.toFixed(2)}</span>
              </div>
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">IP Delta</span>
                <span className="text-lg font-black font-mono text-emerald-400">{player.ipDelta.toFixed(2)}</span>
              </div>
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Beat Par</span>
                <span className="text-lg font-black font-mono text-white">{player.beatPar.toFixed(1)}%</span>
              </div>
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Death Econ</span>
                <span className="text-lg font-black font-mono text-white">{player.deathEcon.toFixed(2)}</span>
              </div>
            </>
          )}
        </div>

        {/* 6-Dimension Index Breakdown */}
        {player.dimensions && (
          <div className="mb-6 p-4 rounded-2xl bg-[#11192e] border border-slate-800">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
              Normalized 6-Dimension Index Ratings (0-100)
            </h4>
            <div className="space-y-2.5">
              {Object.entries(player.dimensions).map(([dimName, val]) => (
                <div key={dimName}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400 capitalize font-medium">
                      {dimName.replace(/([A-Z])/g, ' $1')}
                    </span>
                    <span className="font-mono text-slate-200 font-bold">{val}/100</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${isBatter ? 'bg-[#E11D48]' : 'bg-[#1E3A8A]'}`}
                      style={{ width: `${val}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tactical Scout Assessment */}
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 mb-6">
          <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-amber-400" />
            Tactical Scout Dossier
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed italic">
            "{player.tacticalScout}"
          </p>
          {player.signatureMatch && (
            <p className="text-[11px] text-slate-400 mt-2 font-mono border-t border-slate-800 pt-2">
              <strong className="text-slate-300">Audited Fixture Anchor:</strong> {player.signatureMatch}
            </p>
          )}
        </div>

        {/* Actions Footer */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
          <button
            onClick={() => {
              onSelectForCompare(player);
              onClose();
            }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs bg-[#E11D48] hover:bg-[#be123c] text-white transition-colors shadow-lg shadow-rose-950/40"
          >
            <GitCompare className="w-4 h-4" />
            <span>Select for Comparison</span>
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl font-semibold text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
