# SupeRR Selector Season 2 — Pressure Performance Explorer

**Rajasthan Royals Analytics Wing — High-Stakes Pressure Performance Explorer**  
Themed in **Rajasthan Royals Navy (`#1E3A8A`)** and **Pink (`#E11D48`)**.

---

## ⚡ Key Highlights & Specifications

### 1. Top KPI Audited Strip
* **200,999 Deliveries Audited**: Granular ball-by-ball leverage coverage.
* **635 High-Pedigree Matches**: 371 IPL matches + 264 Top-8 T20Is.
* **151 Macro-Stakes Fixtures**: IPL Playoffs, Finals & T20 World Cup Knockouts (1.25x scaling).
* **ρ = 0.9857 Rank Stability**: Spearman rank correlation across 10,000 bootstrap iterations.

### 2. Interactive Features
* **Batters vs. Bowlers Toggle**: Switch between Top 10 Batters and Top 10 Bowlers.
* **Dynamic Search & Role Filtering**: Filter by role (Middle Order, Finisher, Top Order, Spin, Pace).
* **Sort Engine**: Sort by Overall Score, Pressure Strike Rate, Economy, Collapse Average, Beat Par %, or CI Width.
* **Compare Any Two Players**: Side-by-side head-to-head breakdown card featuring metric comparative bars, confidence interval overlap sliders, and matchup presets (e.g. *#1 Surya vs #2 Klaasen*, *#1 Narine vs #2 Bumrah*, *#10 Maxwell vs #11 Kohli*).
* **Interactive 2D Metric Scatter**: Visual trade-off matrix plotting any two audited metrics with quadrant analysis.
* **Deep Profile Inspection Modal**: Drill-down modal with 6-dimension ratings, confidence intervals, and tactical dossiers.

### 3. Audited Cohort (Top 10 Batters & Bowlers)
* **Batters**:
  1. Suryakumar Yadav (85.39 | Press SR 160.42 | Strict Coll Avg 55.24 | Run Share 26.04% | Beat Par 66.7% | 95% CI [68.64, 88.14])
  2. Heinrich Klaasen (85.02 | 154.49 | 70.85 | 23.95% | 64.1% | [60.68, 80.30])
  3. Shreyas Iyer (83.12 | 151.63 | 75.00 | 26.64% | 59.5% | [59.85, 84.14])
  4. Andre Russell (79.26 | 174.16 | 50.08 | 21.18% | 69.7% | [47.82, 79.25])
  5. Shashank Singh (77.18 | 167.50 | 59.33 | 18.29% | 56.5% | [47.10, 80.12])
  6. Venkatesh Iyer (76.90 | 148.76 | 62.80 | 24.38% | 45.8% | [43.62, 77.53])
  7. Tim David (76.24 | 168.95 | 48.59 | 18.16% | 68.0% | [52.28, 80.53])
  8. Ishan Kishan (73.82 | 153.81 | 42.71 | 29.03% | 50.0% | [52.89, 83.24])
  9. Rajat Patidar (73.15 | 162.10 | 43.43 | 20.26% | 73.9% | [40.66, 76.81])
  10. Glenn Maxwell (69.05 | 155.75 | 42.92 | 22.08% | 63.3% | [42.36, 78.48])

* **Bowlers**:
  1. Sunil Narine (82.49 | Raw Econ 6.82 | IP Delta -2.27 | Beat Par 76.5% | Death Econ 8.00 | 95% CI [66.74, 81.09])
  2. Jasprit Bumrah (80.51 | 7.29 | -2.84 | 78.2% | 7.63 | [65.25, 87.15])
  3. Matheesha Pathirana (80.02 | 8.53 | -0.77 | 58.3% | 8.94 | [62.55, 82.42])
  4. Maheesh Theekshana (76.40 | 7.80 | -0.72 | 56.6% | 7.33 | [59.73, 79.20])
  5. Nathan Ellis (72.70 | 8.42 | -1.02 | 61.2% | 10.00 | [56.78, 76.39])
  6. Mitchell Santner (71.54 | 7.65 | -1.23 | 67.2% | 11.09 | [53.14, 76.96])
  7. Noor Ahmad (71.47 | 8.11 | -1.14 | 59.6% | 8.02 | [55.10, 76.96])
  8. Adil Rashid (69.71 | 7.84 | -0.57 | 60.0% | 10.20 | [43.74, 75.63])
  9. Bhuvneshwar Kumar (69.52 | 8.46 | -1.41 | 62.3% | 10.14 | [54.79, 76.13])
  10. Rahul Chahar (69.46 | 8.11 | -1.52 | 60.5% | 10.94 | [52.23, 69.37])

### 4. Methodology & Audit Proof
* **6-Dimension Weights Breakdown**:
  * Batters: Pressure Strike Rate (25%), Strict Collapse Resistance (20%), Beat Par Dominance (20%), Team Run Share (15%), Macro-Stakes Multiplier (10%), Boundary Efficiency (10%).
  * Bowlers: In-Pressure Economy Delta (25%), Beat Par Suppression (20%), Death Phase Economy (20%), Raw Economy Baseline (15%), Macro-Stakes Multiplier (10%), Pressure Dot Frequency (10%).
* **Non-Double-Counting Union Proof (68,311 vs 102,888)**:
  * Strict Collapse Set $|A| = 68,311$
  * Death/Macro-Stakes Set $|B| = 74,482$
  * Intersection $|A \cap B| = 39,905$
  * Union $|A \cup B| = |A| + |B| - |A \cap B| = 68,311 + 74,482 - 39,905 = 102,888$
  * Neutral Prior Baselines $|U \setminus (A \cup B)| = 200,999 - 102,888 = 98,111$
* **#11 Virat Kohli (67.99) Cutoff Forensic Breakdown**:
  * Why Kohli missed the cut: Anchor latency penalty (139.82 Press SR vs 158.08 cohort median) and sub-50% Beat Par (48.2%) in 11+ RRR collapse phases, despite 27.85% run share.

---

## 🚀 Quickstart

```bash
# In the project directory:
npm run dev

# Or build for production:
npm run build
```
