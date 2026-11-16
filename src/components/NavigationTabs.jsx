import React from 'react';
import { Users, Award, GitCompare, BookOpen, BarChart2 } from 'lucide-react';

export default function NavigationTabs({
  playerType,
  setPlayerType,
  activeTab,
  setActiveTab
}) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 py-4 border-b border-slate-800/80">
      {/* Batters vs Bowlers Toggle (High-Impact Hero Toggle) */}
      <div className="flex items-center gap-2 bg-[#0d1424] p-1.5 rounded-2xl border border-slate-800 shadow-inner">
        <button
          onClick={() => setPlayerType('batters')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 ${
            playerType === 'batters'
              ? 'bg-gradient-to-r from-[#E11D48] to-[#be123c] text-white shadow-lg shadow-rose-900/50 scale-[1.02]'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
          }`}
        >
          <span className="text-base">🏏</span>
          <span>Top 10 Batters</span>
          <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
            playerType === 'batters' ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
          }`}>
            N=10
          </span>
        </button>

        <button
          onClick={() => setPlayerType('bowlers')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 ${
            playerType === 'bowlers'
              ? 'bg-gradient-to-r from-[#1E3A8A] to-[#2563eb] text-white shadow-lg shadow-blue-900/50 scale-[1.02]'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
          }`}
        >
          <span className="text-base">⚡</span>
          <span>Top 10 Bowlers</span>
          <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
            playerType === 'bowlers' ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
          }`}>
            N=10
          </span>
        </button>
      </div>

      {/* Main Section Navigation Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
        <button
          onClick={() => setActiveTab('roster')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
            activeTab === 'roster'
              ? 'bg-[#1E293B] text-white border border-slate-700 shadow'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
          }`}
        >
          <Award className="w-4 h-4 text-[#FB7185]" />
          <span>Leaderboard & Profiles</span>
        </button>

        <button
          onClick={() => setActiveTab('compare')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
            activeTab === 'compare'
              ? 'bg-[#1E293B] text-white border border-slate-700 shadow'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
          }`}
        >
          <GitCompare className="w-4 h-4 text-blue-400" />
          <span>Compare Any Two</span>
        </button>

        <button
          onClick={() => setActiveTab('matrix')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
            activeTab === 'matrix'
              ? 'bg-[#1E293B] text-white border border-slate-700 shadow'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
          }`}
        >
          <BarChart2 className="w-4 h-4 text-amber-400" />
          <span>Metric Scatter</span>
        </button>

        <button
          onClick={() => setActiveTab('methodology')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap relative ${
            activeTab === 'methodology'
              ? 'bg-gradient-to-r from-[#1e293b] to-[#1e1b4b] text-white border border-rose-500/40 shadow-lg shadow-rose-950/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
          }`}
        >
          <BookOpen className="w-4 h-4 text-[#E11D48]" />
          <span>Methodology & Audit Proof</span>
          <span className="w-2 h-2 rounded-full bg-[#E11D48] animate-ping" />
        </button>
      </div>
    </div>
  );
}
