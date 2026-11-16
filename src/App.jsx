import React, { useState, useMemo } from 'react';
import HeaderKpi from './components/HeaderKpi';
import NavigationTabs from './components/NavigationTabs';
import FiltersBar from './components/FiltersBar';
import PlayerCard from './components/PlayerCard';
import CompareCard from './components/CompareCard';
import MethodologyProof from './components/MethodologyProof';
import MetricScatter from './components/MetricScatter';
import PlayerDetailModal from './components/PlayerDetailModal';
import { BATTERS_DATA, BOWLERS_DATA, KPI_DATA } from './data/playersData';
import { Trophy, ShieldCheck, Flame, GitCompare, Sparkles, ChevronRight, Layers } from 'lucide-react';

export default function App() {
  const [playerType, setPlayerType] = useState('batters'); // 'batters' | 'bowlers'
  const [activeTab, setActiveTab] = useState('roster'); // 'roster' | 'compare' | 'matrix' | 'methodology'

  // Filtering & Sorting State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');
  const [sortBy, setSortBy] = useState('score');
  const [sortOrder, setSortOrder] = useState('desc');

  // Comparison State
  const [selectedPlayer1, setSelectedPlayer1] = useState(BATTERS_DATA[0]);
  const [selectedPlayer2, setSelectedPlayer2] = useState(BATTERS_DATA[1]);

  // Modal Inspection State
  const [inspectedPlayer, setInspectedPlayer] = useState(null);

  // Switch comparison targets when playerType toggles if needed
  const handlePlayerTypeChange = (newType) => {
    setPlayerType(newType);
    setSelectedRole('All');
    setSortBy('score');
    setSortOrder('desc');
    if (newType === 'batters') {
      setSelectedPlayer1(BATTERS_DATA[0]);
      setSelectedPlayer2(BATTERS_DATA[1]);
    } else {
      setSelectedPlayer1(BOWLERS_DATA[0]);
      setSelectedPlayer2(BOWLERS_DATA[1]);
    }
  };

  // Filter & Sort Logic
  const rawList = playerType === 'batters' ? BATTERS_DATA : BOWLERS_DATA;

  const filteredAndSortedPlayers = useMemo(() => {
    return rawList
      .filter((player) => {
        // Search query
        const matchesSearch =
          player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          player.team.toLowerCase().includes(searchQuery.toLowerCase()) ||
          player.role.toLowerCase().includes(searchQuery.toLowerCase());

        // Role filter
        const matchesRole =
          selectedRole === 'All' ||
          player.roleCategory === selectedRole ||
          player.role.toLowerCase().includes(selectedRole.toLowerCase());

        return matchesSearch && matchesRole;
      })
      .sort((a, b) => {
        let valA = a[sortBy];
        let valB = b[sortBy];

        // Specific metrics where lower is better in cricket economy
        const naturallyInverted = ['rawEcon', 'deathEcon', 'ciWidth'];
        let factor = sortOrder === 'desc' ? -1 : 1;

        if (naturallyInverted.includes(sortBy) && sortBy !== 'score') {
          factor = sortOrder === 'desc' ? 1 : -1;
        }

        if (valA < valB) return -1 * factor;
        if (valA > valB) return 1 * factor;
        return 0;
      });
  }, [rawList, searchQuery, selectedRole, sortBy, sortOrder]);

  const handleSelectForCompare = (player) => {
    // Put into slot 2 if slot 1 is already different, else slot 1
    if (selectedPlayer1 && selectedPlayer1.name !== player.name) {
      setSelectedPlayer2(player);
    } else {
      setSelectedPlayer1(player);
    }
    setActiveTab('compare');
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans selection:bg-[#E11D48] selection:text-white flex flex-col">
      {/* 1. Top KPI Strip & Header Branding */}
      <HeaderKpi />

      {/* Main Content Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* 2. Interactive Navigation & Batters/Bowlers Hero Toggle */}
        <NavigationTabs
          playerType={playerType}
          setPlayerType={handlePlayerTypeChange}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Tab 1: Leaderboard & Roster Profiles */}
        {activeTab === 'roster' && (
          <div className="animate-fadeIn">
            {/* Search, Role, and Sorting Controls Bar */}
            <FiltersBar
              playerType={playerType}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedRole={selectedRole}
              setSelectedRole={setSelectedRole}
              sortBy={sortBy}
              setSortBy={setSortBy}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
              filteredCount={filteredAndSortedPlayers.length}
              totalCount={rawList.length}
            />

            {/* Quick Hero Banner for Active Category */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-gradient-to-r from-[#0e162b] to-[#161226] border border-slate-800 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{playerType === 'batters' ? '🏏' : '⚡'}</span>
                <div>
                  <h2 className="text-base font-bold text-white">
                    Audited {playerType === 'batters' ? 'Top 10 Batters' : 'Top 10 Bowlers'} Pressure Rankings
                  </h2>
                  <p className="text-xs text-slate-400">
                    Calculated over 102,888 leverage deliveries with empirical Bayesian shrinkage
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('compare')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                >
                  <GitCompare className="w-3.5 h-3.5 text-blue-400" />
                  <span>Compare Head-to-Head</span>
                </button>
                <button
                  onClick={() => setActiveTab('methodology')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#E11D48]/20 hover:bg-[#E11D48]/30 text-[#FB7185] border border-[#E11D48]/40 transition-colors"
                >
                  <span>Audit Proof</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Players Grid */}
            {filteredAndSortedPlayers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                {filteredAndSortedPlayers.map((player) => (
                  <PlayerCard
                    key={player.name}
                    player={player}
                    type={playerType}
                    onSelectForCompare={handleSelectForCompare}
                    onOpenDetails={(p) => setInspectedPlayer(p)}
                    isSelectedForCompare={
                      selectedPlayer1?.name === player.name || selectedPlayer2?.name === player.name
                    }
                  />
                ))}
              </div>
            ) : (
              <div className="p-12 text-center bg-[#0c1222] rounded-3xl border border-slate-800 my-8">
                <p className="text-slate-400 text-sm">
                  No {playerType} match your current filters.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedRole('All');
                  }}
                  className="mt-3 px-4 py-2 rounded-xl text-xs font-bold bg-[#E11D48] text-white"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Compare Any Two Players Side-by-Side */}
        {activeTab === 'compare' && (
          <div className="animate-fadeIn">
            <CompareCard
              playerType={playerType}
              selectedPlayer1={selectedPlayer1}
              setSelectedPlayer1={setSelectedPlayer1}
              selectedPlayer2={selectedPlayer2}
              setSelectedPlayer2={setSelectedPlayer2}
            />
          </div>
        )}

        {/* Tab 3: Interactive Metric Scatter Matrix */}
        {activeTab === 'matrix' && (
          <div className="animate-fadeIn">
            <MetricScatter
              playerType={playerType}
              onSelectPlayer={(p) => setInspectedPlayer(p)}
            />
          </div>
        )}

        {/* Tab 4: Methodology & Audit Proof (Requirement 4) */}
        {activeTab === 'methodology' && (
          <div className="animate-fadeIn">
            <MethodologyProof />
          </div>
        )}
      </main>

      {/* Deep Profile Drilldown Modal */}
      {inspectedPlayer && (
        <PlayerDetailModal
          player={inspectedPlayer}
          type={playerType}
          onClose={() => setInspectedPlayer(null)}
          onSelectForCompare={handleSelectForCompare}
        />
      )}

      {/* Footer Strip */}
      <footer className="mt-16 bg-[#070b14] border-t border-slate-800/80 py-8 px-4 sm:px-6 lg:px-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#1E3A8A] to-[#E11D48] flex items-center justify-center font-black text-white text-[10px]">
              RR
            </div>
            <span>
              SupeRR Selector Season 2 — High-Stakes Pressure Performance Explorer
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400 font-mono text-[11px]">
            <span>200,999 Deliveries Audited</span>
            <span>•</span>
            <span>ρ = 0.9857 Invariant</span>
            <span>•</span>
            <span className="text-[#FB7185]">Rajasthan Royals Analytics</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
