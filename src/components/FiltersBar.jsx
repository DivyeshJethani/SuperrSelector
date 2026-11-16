import React from 'react';
import { Search, Filter, ArrowUpDown, X } from 'lucide-react';

export default function FiltersBar({
  playerType,
  searchQuery,
  setSearchQuery,
  selectedRole,
  setSelectedRole,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
  filteredCount,
  totalCount
}) {
  const batterRoles = ['All', 'Middle Order', 'Finisher', 'Top Order'];
  const bowlerRoles = ['All', 'Spin', 'Pace'];
  const currentRoles = playerType === 'batters' ? batterRoles : bowlerRoles;

  const batterSortOptions = [
    { value: 'score', label: 'Overall Score (Default)' },
    { value: 'pressSR', label: 'Pressure Strike Rate' },
    { value: 'strictCollAvg', label: 'Strict Collapse Average' },
    { value: 'runShare', label: 'Run Share %' },
    { value: 'beatPar', label: 'Beat Par %' },
    { value: 'ciWidth', label: 'Confidence Precision (Narrow CI)' }
  ];

  const bowlerSortOptions = [
    { value: 'score', label: 'Overall Score (Default)' },
    { value: 'rawEcon', label: 'Raw Economy (Lowest)' },
    { value: 'ipDelta', label: 'In-Pressure Delta (Most Negative)' },
    { value: 'beatPar', label: 'Beat Par % (Highest)' },
    { value: 'deathEcon', label: 'Death Economy (Lowest)' },
    { value: 'ciWidth', label: 'Confidence Precision (Narrow CI)' }
  ];

  const currentSortOptions = playerType === 'batters' ? batterSortOptions : bowlerSortOptions;

  return (
    <div className="bg-[#0c1222]/80 backdrop-blur-md rounded-2xl p-4 border border-slate-800/90 my-4 shadow-lg shadow-black/20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-1 min-w-[240px]">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search ${playerType === 'batters' ? 'batters' : 'bowlers'} by name, franchise...`}
            className="w-full bg-[#11192d] text-slate-100 pl-10 pr-9 py-2.5 rounded-xl border border-slate-700/60 focus:border-[#E11D48] focus:outline-none focus:ring-1 focus:ring-[#E11D48] text-sm placeholder:text-slate-500 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Role Filters */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs text-slate-400 flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5 text-slate-400" /> Role:
          </span>
          {currentRoles.map((role) => (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedRole === role
                  ? playerType === 'batters'
                    ? 'bg-[#E11D48] text-white shadow-sm'
                    : 'bg-[#1E3A8A] text-white shadow-sm'
                  : 'bg-slate-800/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {role}
            </button>
          ))}
        </div>

        {/* Sorting Dropdown & Order Toggle */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" /> Sort:
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-[#11192d] text-slate-200 text-xs rounded-xl px-3 py-2 border border-slate-700/60 focus:outline-none focus:border-[#E11D48] cursor-pointer"
          >
            {currentSortOptions.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-slate-900 text-slate-200">
                {opt.label}
              </option>
            ))}
          </select>

          <button
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
            title={`Toggle Sort: currently ${sortOrder === 'desc' ? 'Descending' : 'Ascending'}`}
            className="p-2 rounded-xl bg-[#11192d] border border-slate-700/60 hover:bg-slate-800 text-slate-300 hover:text-white transition-all text-xs font-mono font-bold"
          >
            {sortOrder === 'desc' ? '↓ DESC' : '↑ ASC'}
          </button>
        </div>
      </div>

      {/* Result Count and Active Filters Tag */}
      <div className="flex items-center justify-between text-xs text-slate-400 mt-3 pt-2.5 border-t border-slate-800/60">
        <div>
          Showing <span className="text-white font-bold">{filteredCount}</span> of{' '}
          <span className="text-slate-300 font-semibold">{totalCount}</span> audited {playerType}
          {selectedRole !== 'All' && (
            <span className="ml-2 text-[#FB7185] bg-rose-950/40 px-2 py-0.5 rounded border border-rose-900/50">
              Role: {selectedRole}
            </span>
          )}
          {searchQuery && (
            <span className="ml-2 text-blue-400 bg-blue-950/40 px-2 py-0.5 rounded border border-blue-900/50">
              Query: "{searchQuery}"
            </span>
          )}
        </div>

        {(searchQuery || selectedRole !== 'All') && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedRole('All');
            }}
            className="text-xs text-slate-400 hover:text-rose-400 transition-colors underline underline-offset-2"
          >
            Reset filters
          </button>
        )}
      </div>
    </div>
  );
}
