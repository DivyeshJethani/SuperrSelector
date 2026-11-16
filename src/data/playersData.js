export const KPI_DATA = {
  deliveriesAudited: "200,999",
  deliveriesAuditedSub: "Granular Ball-by-Ball Tracking",
  highPedigreeMatches: "635",
  highPedigreeMatchesSub: "371 IPL + 264 Top-8 T20Is",
  macroStakesFixtures: "151",
  macroStakesFixturesSub: "Playoffs, Finals & WC Knockouts",
  rankStability: "0.9857",
  rankStabilitySub: "Spearman Rank Invariance (ρ)"
};

export const BATTERS_DATA = [
  {
    rank: 1,
    name: "Suryakumar Yadav",
    team: "Mumbai Indians / India",
    role: "Middle Overs 360° Enforcer",
    roleCategory: "Middle Order",
    score: 85.39,
    pressSR: 160.42,
    strictCollAvg: 55.24,
    runShare: 26.04,
    beatPar: 66.7,
    ciLower: 68.64,
    ciUpper: 88.14,
    ciWidth: 19.50,
    sampleSize: "1,420 Balls",
    dimensions: {
      srLeverage: 96,
      collapseResistance: 88,
      beatParDominance: 92,
      runShareImpact: 84,
      macroStakesMultiplier: 90,
      boundaryEfficiency: 95
    },
    tacticalScout: "Universal phase dominance. Exploits unconventional field angles in overs 7-16 even under 12+ required run rates, nullifying defensive spin choke.",
    signatureMatch: "IPL Eliminator & T20 World Cup Super 8s vs Top-8 oppositions"
  },
  {
    rank: 2,
    name: "Heinrich Klaasen",
    team: "Sunrisers Hyderabad / South Africa",
    role: "Spin Destroyer & Middle Enforcer",
    roleCategory: "Middle Order",
    score: 85.02,
    pressSR: 154.49,
    strictCollAvg: 70.85,
    runShare: 23.95,
    beatPar: 64.1,
    ciLower: 60.68,
    ciUpper: 80.30,
    ciWidth: 19.62,
    sampleSize: "1,180 Balls",
    dimensions: {
      srLeverage: 91,
      collapseResistance: 96,
      beatParDominance: 89,
      runShareImpact: 81,
      macroStakesMultiplier: 87,
      boundaryEfficiency: 94
    },
    tacticalScout: "Highest strict collapse resistance (70.85 avg) against elite spinners. Operates as an immovable scoring fulcrum when top 3 collapse within 30 runs.",
    signatureMatch: "IPL 2024 Qualifier 2 & T20 WC Final clutch rescue innings"
  },
  {
    rank: 3,
    name: "Shreyas Iyer",
    team: "Kolkata Knight Riders / India",
    role: "Crisis Stabilizer & Spin Counter",
    roleCategory: "Middle Order",
    score: 83.12,
    pressSR: 151.63,
    strictCollAvg: 75.00,
    runShare: 26.64,
    beatPar: 59.5,
    ciLower: 59.85,
    ciUpper: 84.14,
    ciWidth: 24.29,
    sampleSize: "1,040 Balls",
    dimensions: {
      srLeverage: 87,
      collapseResistance: 98,
      beatParDominance: 84,
      runShareImpact: 86,
      macroStakesMultiplier: 94,
      boundaryEfficiency: 82
    },
    tacticalScout: "Peak Strict Collapse Avg of 75.00 across the entire 200,999 delivery sample. Outstanding tactical pacing under high collapse states.",
    signatureMatch: "IPL 2024 Qualifier 1 vs SRH & World Cup high-pressure chases"
  },
  {
    rank: 4,
    name: "Andre Russell",
    team: "Kolkata Knight Riders / West Indies",
    role: "Death Overs Power Finisher",
    roleCategory: "Finisher",
    score: 79.26,
    pressSR: 174.16,
    strictCollAvg: 50.08,
    runShare: 21.18,
    beatPar: 69.7,
    ciLower: 47.82,
    ciUpper: 79.25,
    ciWidth: 31.43,
    sampleSize: "910 Balls",
    dimensions: {
      srLeverage: 99,
      collapseResistance: 78,
      beatParDominance: 94,
      runShareImpact: 74,
      macroStakesMultiplier: 85,
      boundaryEfficiency: 98
    },
    tacticalScout: "Highest Pressure Strike Rate (174.16) in the tournament cohort. 69.7% beat-par frequency shifts win probability by >22% in 2-over burst windows.",
    signatureMatch: "IPL Finals & death-over blitz matches with 13+ required rates"
  },
  {
    rank: 5,
    name: "Shashank Singh",
    team: "Punjab Kings",
    role: "Late Clutch Crisis Enforcer",
    roleCategory: "Finisher",
    score: 77.18,
    pressSR: 167.50,
    strictCollAvg: 59.33,
    runShare: 18.29,
    beatPar: 56.5,
    ciLower: 47.10,
    ciUpper: 80.12,
    ciWidth: 33.02,
    sampleSize: "520 Balls",
    dimensions: {
      srLeverage: 94,
      collapseResistance: 89,
      beatParDominance: 80,
      runShareImpact: 71,
      macroStakesMultiplier: 76,
      boundaryEfficiency: 91
    },
    tacticalScout: "Breakout high-leverage anomaly. Repeatedly rescued innings from 40/4 situations with 167.50 SR and exceptional composure against 145kph+ heat.",
    signatureMatch: "PBKS record 262 chase vs KKR & clutch chases vs GT"
  },
  {
    rank: 6,
    name: "Venkatesh Iyer",
    team: "Kolkata Knight Riders / India",
    role: "Knockout Big-Match Specialist",
    roleCategory: "Top Order",
    score: 76.90,
    pressSR: 148.76,
    strictCollAvg: 62.80,
    runShare: 24.38,
    beatPar: 45.8,
    ciLower: 43.62,
    ciUpper: 77.53,
    ciWidth: 33.91,
    sampleSize: "780 Balls",
    dimensions: {
      srLeverage: 84,
      collapseResistance: 91,
      beatParDominance: 73,
      runShareImpact: 82,
      macroStakesMultiplier: 96,
      boundaryEfficiency: 83
    },
    tacticalScout: "Supreme Macro-Stakes Multiplier rating. Unrivaled consistency in IPL playoffs with consecutive match-winning 50s in Qualifiers and Final.",
    signatureMatch: "IPL 2024 Final & Qualifier 1 masterclasses"
  },
  {
    rank: 7,
    name: "Tim David",
    team: "Mumbai Indians / Australia",
    role: "Death Overs Boundary Enforcer",
    roleCategory: "Finisher",
    score: 76.24,
    pressSR: 168.95,
    strictCollAvg: 48.59,
    runShare: 18.16,
    beatPar: 68.0,
    ciLower: 52.28,
    ciUpper: 80.53,
    ciWidth: 28.25,
    sampleSize: "640 Balls",
    dimensions: {
      srLeverage: 95,
      collapseResistance: 76,
      beatParDominance: 92,
      runShareImpact: 70,
      macroStakesMultiplier: 81,
      boundaryEfficiency: 93
    },
    tacticalScout: "Specialized in 18th-20th over hyper-leverage entry points. 68.0% beat par index confirms extreme boundary potency despite limited entry overs.",
    signatureMatch: "High-stakes chases vs RR and DC at Wankhede"
  },
  {
    rank: 8,
    name: "Ishan Kishan",
    team: "Mumbai Indians / India",
    role: "Explosive Wicketkeeper Opener",
    roleCategory: "Top Order",
    score: 73.82,
    pressSR: 153.81,
    strictCollAvg: 42.71,
    runShare: 29.03,
    beatPar: 50.0,
    ciLower: 52.89,
    ciUpper: 83.24,
    ciWidth: 30.35,
    sampleSize: "890 Balls",
    dimensions: {
      srLeverage: 88,
      collapseResistance: 73,
      beatParDominance: 76,
      runShareImpact: 92,
      macroStakesMultiplier: 80,
      boundaryEfficiency: 87
    },
    tacticalScout: "Highest Run Share (29.03%) among all 10 batters. Dominates powerplays during 200+ target pursuits with fearless intent against raw pace.",
    signatureMatch: "High-pressure Powerplay assaults vs RCB and CSK"
  },
  {
    rank: 9,
    name: "Rajat Patidar",
    team: "Royal Challengers Bengaluru / India",
    role: "Spin Aggressor & Momentum Shifter",
    roleCategory: "Middle Order",
    score: 73.15,
    pressSR: 162.10,
    strictCollAvg: 43.43,
    runShare: 20.26,
    beatPar: 73.9,
    ciLower: 40.66,
    ciUpper: 76.81,
    ciWidth: 36.15,
    sampleSize: "710 Balls",
    dimensions: {
      srLeverage: 93,
      collapseResistance: 74,
      beatParDominance: 97,
      runShareImpact: 73,
      macroStakesMultiplier: 84,
      boundaryEfficiency: 92
    },
    tacticalScout: "Highest Beat Par % among batters (73.9%). Routinely breaks middle-over spin squeeze with towering maximums over long-on and mid-wicket.",
    signatureMatch: "IPL 2024 must-win streak & Eliminator vs RR"
  },
  {
    rank: 10,
    name: "Glenn Maxwell",
    team: "Royal Challengers Bengaluru / Australia",
    role: "Dynamic Utility Clutch All-Rounder",
    roleCategory: "Middle Order",
    score: 69.05,
    pressSR: 155.75,
    strictCollAvg: 42.92,
    runShare: 22.08,
    beatPar: 63.3,
    ciLower: 42.36,
    ciUpper: 78.48,
    ciWidth: 36.12,
    sampleSize: "840 Balls",
    dimensions: {
      srLeverage: 89,
      collapseResistance: 72,
      beatParDominance: 87,
      runShareImpact: 77,
      macroStakesMultiplier: 82,
      boundaryEfficiency: 88
    },
    tacticalScout: "Clinches the #10 spot by maintaining 155.75 Pressure SR and 63.3% Beat Par, edging out Virat Kohli (#11, 67.99) due to superior tempo under pressure.",
    signatureMatch: "T20 World Cup Super 8s & IPL high-pressure counter-attacks"
  }
];

export const BOWLERS_DATA = [
  {
    rank: 1,
    name: "Sunil Narine",
    team: "Kolkata Knight Riders / West Indies",
    role: "Mystery Spin / Defensive Choke",
    roleCategory: "Spin",
    score: 82.49,
    rawEcon: 6.82,
    ipDelta: -2.27,
    beatPar: 76.5,
    deathEcon: 8.00,
    ciLower: 66.74,
    ciUpper: 81.09,
    ciWidth: 14.35,
    sampleSize: "1,560 Balls",
    dimensions: {
      ipSuppressionDelta: 97,
      beatParFrequency: 96,
      deathOversControl: 89,
      rawEconomyBaseline: 98,
      macroStakesMultiplier: 92,
      dotBallPressure: 95
    },
    tacticalScout: "Unquestioned #1 bowler. Unbelievable -2.27 IP Delta in a 9.50 rpo average era. 76.5% beat-par frequency chokes opposition momentum completely.",
    signatureMatch: "IPL 2024 MVP season & tight championship final defense"
  },
  {
    rank: 2,
    name: "Jasprit Bumrah",
    team: "Mumbai Indians / India",
    role: "All-Phase Generational Pacer",
    roleCategory: "Pace",
    score: 80.51,
    rawEcon: 7.29,
    ipDelta: -2.84,
    beatPar: 78.2,
    deathEcon: 7.63,
    ciLower: 65.25,
    ciUpper: 87.15,
    ciWidth: 21.90,
    sampleSize: "1,680 Balls",
    dimensions: {
      ipSuppressionDelta: 99,
      beatParFrequency: 98,
      deathOversControl: 97,
      rawEconomyBaseline: 94,
      macroStakesMultiplier: 98,
      dotBallPressure: 97
    },
    tacticalScout: "Deepest in-pressure suppression (-2.84 IP Delta) and highest Beat Par (78.2%). Concedes only 7.63 at the death in high-pedigree fixtures.",
    signatureMatch: "T20 World Cup Final 16th & 18th overs masterclass vs SA"
  },
  {
    rank: 3,
    name: "Matheesha Pathirana",
    team: "Chennai Super Kings / Sri Lanka",
    role: "Sling Death Overs Enforcer",
    roleCategory: "Pace",
    score: 80.02,
    rawEcon: 8.53,
    ipDelta: -0.77,
    beatPar: 58.3,
    deathEcon: 8.94,
    ciLower: 62.55,
    ciUpper: 82.42,
    ciWidth: 19.87,
    sampleSize: "740 Balls",
    dimensions: {
      ipSuppressionDelta: 85,
      beatParFrequency: 82,
      deathOversControl: 93,
      rawEconomyBaseline: 80,
      macroStakesMultiplier: 88,
      dotBallPressure: 90
    },
    tacticalScout: "Unorthodox low-sling release creates extreme deviation at the death. Wicket-taking threat lowers expected boundary rates drastically.",
    signatureMatch: "CSK vs MI high-pressure defense at Wankhede"
  },
  {
    rank: 4,
    name: "Maheesh Theekshana",
    team: "Chennai Super Kings / Sri Lanka",
    role: "Powerplay / Middle Mystery Finger Spin",
    roleCategory: "Spin",
    score: 76.40,
    rawEcon: 7.80,
    ipDelta: -0.72,
    beatPar: 56.6,
    deathEcon: 7.33,
    ciLower: 59.73,
    ciUpper: 79.20,
    ciWidth: 19.47,
    sampleSize: "920 Balls",
    dimensions: {
      ipSuppressionDelta: 84,
      beatParFrequency: 81,
      deathOversControl: 95,
      rawEconomyBaseline: 88,
      macroStakesMultiplier: 84,
      dotBallPressure: 89
    },
    tacticalScout: "Stunning 7.33 Death Econ in limited samples alongside lockdown Powerplay containment. Carrom ball holds line against pinch-hitters.",
    signatureMatch: "Powerplay strangulation against aggressive openers"
  },
  {
    rank: 5,
    name: "Nathan Ellis",
    team: "Punjab Kings / Australia",
    role: "Death Variations & Yorker Specialist",
    roleCategory: "Pace",
    score: 72.70,
    rawEcon: 8.42,
    ipDelta: -1.02,
    beatPar: 61.2,
    deathEcon: 10.00,
    ciLower: 56.78,
    ciUpper: 76.39,
    ciWidth: 19.61,
    sampleSize: "680 Balls",
    dimensions: {
      ipSuppressionDelta: 88,
      beatParFrequency: 84,
      deathOversControl: 82,
      rawEconomyBaseline: 81,
      macroStakesMultiplier: 83,
      dotBallPressure: 85
    },
    tacticalScout: "Mastery of dipping slower balls and wide yorker execution under 12+ RRR conditions. Beat Par frequency exceeds 61% consistently.",
    signatureMatch: "Defending tight totals in high-scoring venues"
  },
  {
    rank: 6,
    name: "Mitchell Santner",
    team: "Chennai Super Kings / New Zealand",
    role: "Tactical Left-Arm Orthodox",
    roleCategory: "Spin",
    score: 71.54,
    rawEcon: 7.65,
    ipDelta: -1.23,
    beatPar: 67.2,
    deathEcon: 11.09,
    ciLower: 53.14,
    ciUpper: 76.96,
    ciWidth: 23.82,
    sampleSize: "810 Balls",
    dimensions: {
      ipSuppressionDelta: 90,
      beatParFrequency: 90,
      deathOversControl: 74,
      rawEconomyBaseline: 90,
      macroStakesMultiplier: 85,
      dotBallPressure: 88
    },
    tacticalScout: "67.2% Beat Par frequency ranks #3 among all spinners. Pace variation and subtle trajectory changes baffle middle-order enforcers.",
    signatureMatch: "ICC T20 World Cup knockout containment spells"
  },
  {
    rank: 7,
    name: "Noor Ahmad",
    team: "Gujarat Titans / Afghanistan",
    role: "Left-Arm Unorthodox Wrist Spin",
    roleCategory: "Spin",
    score: 71.47,
    rawEcon: 8.11,
    ipDelta: -1.14,
    beatPar: 59.6,
    deathEcon: 8.02,
    ciLower: 55.10,
    ciUpper: 76.96,
    ciWidth: 21.86,
    sampleSize: "840 Balls",
    dimensions: {
      ipSuppressionDelta: 89,
      beatParFrequency: 83,
      deathOversControl: 89,
      rawEconomyBaseline: 85,
      macroStakesMultiplier: 82,
      dotBallPressure: 86
    },
    tacticalScout: "Quick arm action delivers googlies at 95kph+, restricting batters' room to manufacture angles. Impressive 8.02 death economy.",
    signatureMatch: "GT middle-overs defensive squeeze against top batting lineups"
  },
  {
    rank: 8,
    name: "Adil Rashid",
    team: "England",
    role: "Attacking Middle-Overs Leg Spinner",
    roleCategory: "Spin",
    score: 69.71,
    rawEcon: 7.84,
    ipDelta: -0.57,
    beatPar: 60.0,
    deathEcon: 10.20,
    ciLower: 43.74,
    ciUpper: 75.63,
    ciWidth: 31.89,
    sampleSize: "960 Balls",
    dimensions: {
      ipSuppressionDelta: 82,
      beatParFrequency: 83,
      deathOversControl: 79,
      rawEconomyBaseline: 87,
      macroStakesMultiplier: 86,
      dotBallPressure: 84
    },
    tacticalScout: "Relied upon to break partnerships in Top-8 T20Is. 60.0% Beat Par validates his skill in dragging opposing scoring rates down.",
    signatureMatch: "T20 World Cup high-stakes middle-overs control"
  },
  {
    rank: 9,
    name: "Bhuvneshwar Kumar",
    team: "Sunrisers Hyderabad / India",
    role: "Swing & Precision Yorker Veteran",
    roleCategory: "Pace",
    score: 69.52,
    rawEcon: 8.46,
    ipDelta: -1.41,
    beatPar: 62.3,
    deathEcon: 10.14,
    ciLower: 54.79,
    ciUpper: 76.13,
    ciWidth: 21.34,
    sampleSize: "1,220 Balls",
    dimensions: {
      ipSuppressionDelta: 91,
      beatParFrequency: 85,
      deathOversControl: 81,
      rawEconomyBaseline: 81,
      macroStakesMultiplier: 84,
      dotBallPressure: 87
    },
    tacticalScout: "-1.41 In-Pressure Delta in high-pressure games. Defended 2 runs off the final ball vs RR in IPL 2024 to prove ice-in-the-veins execution.",
    signatureMatch: "1-run victory defense vs Rajasthan Royals (May 2024)"
  },
  {
    rank: 10,
    name: "Rahul Chahar",
    team: "Punjab Kings / India",
    role: "Skidding Leg Break & Middle Enforcer",
    roleCategory: "Spin",
    score: 69.46,
    rawEcon: 8.11,
    ipDelta: -1.52,
    beatPar: 60.5,
    deathEcon: 10.94,
    ciLower: 52.23,
    ciUpper: 69.37,
    ciWidth: 17.14,
    sampleSize: "790 Balls",
    dimensions: {
      ipSuppressionDelta: 92,
      beatParFrequency: 84,
      deathOversControl: 77,
      rawEconomyBaseline: 85,
      macroStakesMultiplier: 80,
      dotBallPressure: 86
    },
    tacticalScout: "-1.52 In-Pressure Delta with tightest confidence bounds (17.14 width). Flatter trajectory prevents batters from clearing long boundaries.",
    signatureMatch: "Clutch middle-over spells defending below-par targets"
  }
];

export const KOHLI_CUTOFF_ANALYSIS = {
  rank: 11,
  name: "Virat Kohli",
  team: "Royal Challengers Bengaluru / India",
  role: "Top-Order Anchor & Chase Finisher",
  score: 67.99,
  maxwellScore: 69.05,
  deltaToCutoff: -1.06,
  pressSR: 139.82,
  strictCollAvg: 44.10,
  runShare: 27.85,
  beatPar: 48.2,
  ciLower: 58.20,
  ciUpper: 77.80,
  ciWidth: 19.60,
  dimensions: {
    srLeverage: 74,
    collapseResistance: 79,
    beatParDominance: 68,
    runShareImpact: 94,
    macroStakesMultiplier: 88,
    boundaryEfficiency: 76
  },
  auditFindings: [
    {
      factor: "Anchor Latency Tax (Dimension 1)",
      detail: "Kohli's Pressure Strike Rate was 139.82, lagging the Top 10 median of 158.08 and Patidar's 162.10. While anchor stability was solid, the modern 200+ run environment heavily penalizes sub-145 pacing when chasing 11.5+ RRR.",
      impact: "-3.42 pts penalty"
    },
    {
      factor: "Sub-50% Beat-Par Frequency (Dimension 3)",
      detail: "At 48.2% Beat Par, Kohli was below the 50.0% parity threshold in high-leverage deliveries. In overs 7-12 after early wickets, balls were absorbed at ~6.8 RPO against spin before late acceleration.",
      impact: "-2.18 pts penalty"
    },
    {
      factor: "Elite Volume Run Share Offset (Dimension 4)",
      detail: "His 27.85% team run share in high-pressure games was the 2nd highest in the entire database (only behind Ishan Kishan's 29.03%), which kept him within 1.06 points of qualification.",
      impact: "+4.54 pts boost"
    },
    {
      factor: "Maxwell Head-to-Head Cutoff Delta",
      detail: "Glenn Maxwell secured the #10 berth at 69.05 (+1.06 over Kohli) due to 155.75 Pressure SR and 63.3% Beat Par, providing instant leverage lift despite having a slightly lower average.",
      impact: "Decisive differential"
    }
  ]
};

export const METHODOLOGY_WEIGHTS = {
  batters: [
    { name: "Pressure Strike Rate (Leverage SR)", weight: 25, code: "W_PSR", description: "Situational strike rate differential when Leverage Index > 1.25" },
    { name: "Strict Collapse Resistance", weight: 20, code: "W_SCR", description: "Batting average when team is ≤35/3 or Required Run Rate > 11.5" },
    { name: "Beat Par Dominance %", weight: 20, code: "W_BPD", description: "Frequency of balls exceeding expected situational par outcome" },
    { name: "Pressure Team Run Share %", weight: 15, code: "W_TRS", description: "Proportion of team's high-pressure runs scored by player" },
    { name: "Macro-Stakes Multiplier", weight: 10, code: "W_MSM", description: "1.25x scaling for IPL Playoffs, Finals & World Cup Knockouts" },
    { name: "Boundary-to-Dot Efficiency", weight: 10, code: "W_BDE", description: "High-pressure boundary percentage normalized against dot frequency" }
  ],
  bowlers: [
    { name: "In-Pressure Economy Delta (IP Delta)", weight: 25, code: "W_IPD", description: "Difference between bowler's pressure economy and venue par expectation" },
    { name: "Beat Par Suppression %", weight: 20, code: "W_BPS", description: "Frequency of deliveries preventing batters from achieving par scoring" },
    { name: "Death Phase Lockdown Econ (17-20)", weight: 20, code: "W_DPE", description: "Normalized economy rate in the final 4 overs under chasing stress" },
    { name: "Raw In-Pressure Economy Baseline", weight: 15, code: "W_RPE", description: "Absolute economy rate maintained across audited high-stakes fixtures" },
    { name: "Macro-Stakes Multiplier", weight: 10, code: "W_MSM", description: "1.25x scaling for IPL Playoffs, Finals & World Cup Knockouts" },
    { name: "Pressure Dot Ball Frequency", weight: 10, code: "W_PDB", description: "Percentage of dot balls delivered under match-deciding leverage" }
  ]
};

export const UNION_AUDIT_PROOF = {
  totalAudited: 200999,
  subsetA: {
    label: "Strict Collapse Leverage (Subset A)",
    count: 68311,
    description: "Deliveries bowled or faced when team lost ≥3 wickets for ≤35 runs OR Required Run Rate exceeded 12.0 RPO in overs 1-16."
  },
  subsetB: {
    label: "Macro-Stakes & Death Pressure (Subset B)",
    count: 74482,
    description: "Deliveries occurring in overs 16-20 of all high-pedigree fixtures plus all balls in the 151 Macro-Stakes knockout matches."
  },
  intersection: {
    label: "Double-Counted Overlap (A ∩ B)",
    count: 39905,
    description: "Deliveries that simultaneously satisfied both Collapse and Death/Macro-Stakes conditions (e.g. late overs of a collapsed chase in playoffs)."
  },
  union: {
    label: "Non-Double-Counting Leverage Union (A ∪ B)",
    count: 102888,
    formula: "|A ∪ B| = |A| + |B| - |A ∩ B| = 68,311 + 74,482 - 39,905 = 102,888",
    description: "The audited high-leverage subset. Zero double counting. The remaining 98,111 balls serve as empirical neutral baselines."
  },
  baselineControls: {
    label: "Neutral Control / Empirical Prior Set",
    count: 98111,
    description: "Deliveries audited to establish expected par curves, venue coefficients, and bowler/batter Bayesian priors."
  }
};
