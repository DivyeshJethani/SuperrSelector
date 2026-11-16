import React, { useState } from 'react';
import { BATTERS_DATA, BOWLERS_DATA } from '../data/playersData';
import { BarChart2, Info } from 'lucide-react';

export default function MetricScatter({ playerType, onSelectPlayer }) {
  const isBatter = playerType === 'batters';
  const players = isBatter ? BATTERS_DATA : BOWLERS_DATA;

  // Options for X and Y axes
  const batterAxes = [
    { key: 'pressSR', label: 'Pressure Strike Rate', min: 140, max: 180 },
    { key: 'strictCollAvg', label: 'Strict Collapse Average', min: 35, max: 80 },
    { key: 'runShare', label: 'Pressure Run Share %', min: 15, max: 32 },
    { key: 'beatPar', label: 'Beat Par Frequency %', min: 40, max: 80 },
    { key: 'score', label: 'Overall Leverage Score', min: 65, max: 90 }
  ];

  const bowlerAxes = [
    { key: 'rawEcon', label: 'Raw Economy', min: 6.5, max: 9.0, invert: true },
    { key: 'ipDelta', label: 'IP Delta', min: -3.0, max: -0.4, invert: true },
    { key: 'beatPar', label: 'Beat Par Frequency %', min: 50, max: 85 },
    { key: 'deathEcon', label: 'Death Economy', min: 7.0, max: 12.0, invert: true },
    { key: 'score', label: 'Overall Leverage Score', min: 65, max: 88 }
  ];

  const axes = isBatter ? batterAxes : bowlerAxes;
  const [xAxisKey, setXAxisKey] = useState(isBatter ? 'pressSR' : 'rawEcon');
  const [yAxisKey, setYAxisKey] = useState(isBatter ? 'strictCollAvg' : 'ipDelta');
  const [hoveredPlayer, setHoveredPlayer] = useState(null);

  const xAxis = axes.find((a) => a.key === xAxisKey) || axes[0];
  const yAxis = axes.find((a) => a.key === yAxisKey) || axes[1];

  // Helper to map values to SVG 0-100 coordinates
  const getX = (val) => {
    const range = xAxis.max - xAxis.min;
    return Math.max(5, Math.min(95, ((val - xAxis.min) / range) * 90 + 5));
  };

  const getY = (val) => {
    const range = yAxis.max - yAxis.min;
    // in SVG, y=0 is top, y=100 is bottom
    const normalized = (val - yAxis.min) / range;
    return Math.max(5, Math.min(95, 95 - normalized * 90));
  };

  return (
    <div className="bg-[#0c1222] rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl my-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <BarChart2 className="w-5 h-5 text-amber-400" />
            <h3 className="text-xl font-bold text-white tracking-tight">
              Interactive 2D Leverage Scatter & Trade-off Matrix
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Plot any two audited variables to isolate archetypes, outliers, and tactical efficiency frontiers
          </p>
        </div>

        {/* Axis Selectors */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-slate-400 font-mono">X-Axis:</span>
            <select
              value={xAxisKey}
              onChange={(e) => setXAxisKey(e.target.value)}
              className="bg-[#11192e] text-white text-xs px-2.5 py-1.5 rounded-lg border border-slate-700 focus:outline-none"
            >
              {axes.map((a) => (
                <option key={a.key} value={a.key}>
                  {a.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-slate-400 font-mono">Y-Axis:</span>
            <select
              value={yAxisKey}
              onChange={(e) => setYAxisKey(e.target.value)}
              className="bg-[#11192e] text-white text-xs px-2.5 py-1.5 rounded-lg border border-slate-700 focus:outline-none"
            >
              {axes.map((a) => (
                <option key={a.key} value={a.key}>
                  {a.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Scatter Chart Canvas */}
      <div className="relative mt-6 aspect-[16/9] max-h-[500px] w-full bg-[#080d19] rounded-2xl border border-slate-800 p-6 overflow-hidden">
        {/* Quadrant grid lines */}
        <div className="absolute inset-x-8 top-1/2 h-[1px] bg-slate-800/80 border-t border-dashed border-slate-700" />
        <div className="absolute inset-y-8 left-1/2 w-[1px] bg-slate-800/80 border-l border-dashed border-slate-700" />

        {/* Quadrant labels */}
        <span className="absolute top-4 right-6 text-[10px] font-mono uppercase tracking-wider text-emerald-400/60 bg-emerald-950/20 px-2 py-0.5 rounded border border-emerald-900/40">
          Optimal Zone (High Alpha)
        </span>
        <span className="absolute bottom-4 left-8 text-[10px] font-mono uppercase tracking-wider text-slate-500/60 bg-slate-900/40 px-2 py-0.5 rounded border border-slate-800/60">
          Lower Volume / Containment
        </span>

        {/* Points Plot */}
        <svg className="w-full h-full overflow-visible">
          {players.map((p) => {
            const cx = `${getX(p[xAxisKey])}%`;
            const cy = `${getY(p[yAxisKey])}%`;
            const isHovered = hoveredPlayer?.name === p.name;

            return (
              <g
                key={p.name}
                className="cursor-pointer transition-all duration-300"
                onClick={() => onSelectPlayer(p)}
                onMouseEnter={() => setHoveredPlayer(p)}
                onMouseLeave={() => setHoveredPlayer(null)}
              >
                {/* Glow ring on hover */}
                {isHovered && (
                  <circle
                    cx={cx}
                    cy={cy}
                    r="18"
                    fill={isBatter ? '#E11D48' : '#1E3A8A'}
                    opacity="0.3"
                    className="animate-ping"
                  />
                )}

                {/* Point dot */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={isHovered ? 9 : 7}
                  fill={isBatter ? '#E11D48' : '#38BDF8'}
                  stroke="#FFFFFF"
                  strokeWidth={isHovered ? 2.5 : 1.5}
                  className="shadow-lg"
                />

                {/* Rank Number Inside or Beside */}
                <text
                  x={cx}
                  y={cy}
                  dy="-12"
                  textAnchor="middle"
                  fill="#F1F5F9"
                  fontSize="11"
                  fontWeight="bold"
                  fontFamily="monospace"
                  className="pointer-events-none drop-shadow-md"
                >
                  #{p.rank} {p.name.split(' ')[p.name.split(' ').length - 1]}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Floating Tooltip Card */}
        {hoveredPlayer && (
          <div className="absolute bottom-6 right-6 bg-[#0f172a]/95 backdrop-blur-md p-4 rounded-xl border border-slate-700 shadow-2xl max-w-xs pointer-events-none z-20">
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-xs font-bold text-white">
                #{hoveredPlayer.rank} {hoveredPlayer.name}
              </span>
              <span className="text-xs font-mono font-bold text-[#FB7185]">
                {hoveredPlayer.score.toFixed(2)}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mb-2">{hoveredPlayer.team}</p>
            <div className="grid grid-cols-2 gap-2 text-[10px] font-mono border-t border-slate-800 pt-2">
              <div>
                <span className="text-slate-400">{xAxis.label}:</span>
                <span className="text-white font-bold ml-1">
                  {typeof hoveredPlayer[xAxisKey] === 'number'
                    ? hoveredPlayer[xAxisKey].toFixed(2)
                    : hoveredPlayer[xAxisKey]}
                </span>
              </div>
              <div>
                <span className="text-slate-400">{yAxis.label}:</span>
                <span className="text-white font-bold ml-1">
                  {typeof hoveredPlayer[yAxisKey] === 'number'
                    ? hoveredPlayer[yAxisKey].toFixed(2)
                    : hoveredPlayer[yAxisKey]}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 mt-4 px-2">
        <span className="flex items-center gap-1">
          <Info className="w-3.5 h-3.5 text-slate-500" />
          Click any player node to open their full audited profile
        </span>
        <span className="font-mono text-slate-500">
          X: {xAxis.label} vs Y: {yAxis.label}
        </span>
      </div>
    </div>
  );
}
