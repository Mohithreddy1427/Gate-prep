/* =========================================================
GATE CSE + DA TRACKER — script.js  (v2 — fixed)
Modular vanilla JS | No frameworks | GitHub Pages safe
========================================================= */

/* ─── 1. ROADMAP DATA ─── */
const ROADMAP = [
{
id: “phase1”,
title: “Phase 1: Foundations (Core Math + Programming)”,
subtitle: “Build the base that unlocks everything else”,
color: “#5b4fcf”,
topics: [
{
id: “t1”, number: “1”,
title: “Programming & Problem Solving”,
meta: “Common (CSE + DA) | High | Easy–Medium”,
subtopics: [
{ id: “st1_1”, title: “Basics of Programming”,       chapters: [“Basics of Programming”] },
{ id: “st1_2”, title: “Variables & Data Types”,      chapters: [“Variables, Data Types”] },
{ id: “st1_3”, title: “Control Flow”,                chapters: [“Control Flow (if, loops)”] },
{ id: “st1_4”, title: “Functions & Recursion”,       chapters: [“Functions & Recursion”] },
{ id: “st1_5”, title: “Complexity Thinking”,         chapters: [“Basic Complexity Thinking”, “Time Complexity”, “Space Complexity”] }
]
},
{
id: “t2”, number: “2”,
title: “Discrete Mathematics (Core Math)”,
meta: “Common | Very High | Medium | ~10–15%”,
subtopics: [
{ id: “st2_1”, title: “Logic”,                              chapters: [“Propositional Logic”, “Predicate Logic”] },
{ id: “st2_2”, title: “Set Theory & Relations”,             chapters: [“Set Theory & Relations”] },
{ id: “st2_3”, title: “Functions & Combinatorics”,          chapters: [“Functions”, “Combinatorics”] },
{ id: “st2_4”, title: “Graph Theory Basics & Recurrence”,   chapters: [“Graph Theory (BASICS)”, “Recurrence Relations”] }
]
},
{
id: “t3”, number: “3”,
title: “Core Probability (Core Math)”,
meta: “Common | High | Medium | ~5–8%”,
subtopics: [
{ id: “st3_1”, title: “Probability Foundations”,            chapters: [“Probability Basics”, “Conditional Probability”] },
{ id: “st3_2”, title: “Random Variables & Distributions”,   chapters: [“Random Variables”, “Distributions (Basic)”] }
]
}
]
},
{
id: “phase2”,
title: “Phase 2: Core CSE (System + Logic Building)”,
subtitle: “”,
color: “#c84b31”,
topics: [
{
id: “t4”, number: “4”,
title: “Data Structures”,
meta: “Common | Very High | Medium | ~10–12%”,
subtopics: [
{ id: “st4_1”, title: “Linear Structures”,   chapters: [“Arrays”, “Linked Lists”, “Stacks & Queues”] },
{ id: “st4_2”, title: “Tree Structures”,     chapters: [“Trees”, “Binary Trees”, “BST”, “Heaps”] },
{ id: “st4_3”, title: “Hashing & Graphs”,    chapters: [“Hashing”, “Graphs (Implementation)”] }
]
},
{
id: “t5”, number: “5”,
title: “Algorithms”,
meta: “Common | Very High | Hard | ~10–15%”,
subtopics: [
{ id: “st5_1”, title: “Analysis & Paradigms”, chapters: [“Complexity Analysis”, “Divide & Conquer”, “Greedy Algorithms”, “Dynamic Programming”] },
{ id: “st5_2”, title: “Graph Algorithms”,     chapters: [“Graph Algorithms”, “BFS, DFS”, “Shortest Paths”, “Backtracking”] }
]
},
{
id: “t6”, number: “6”,
title: “Computer Organization & Architecture (COA)”,
meta: “CSE Only | High | Medium | ~8–10%”,
subtopics: [
{ id: “st6_1”, title: “Digital Fundamentals”, chapters: [“Number Systems”, “Boolean Algebra”] },
{ id: “st6_2”, title: “CPU & Memory”,          chapters: [“Machine Instructions”, “CPU Organization”, “Memory Hierarchy”] }
]
},
{
id: “t7”, number: “7”,
title: “Operating Systems”,
meta: “CSE Only | Very High | Medium | ~10–12%”,
subtopics: [
{ id: “st7_1”, title: “Processes & Scheduling”, chapters: [“Processes & Threads”, “Scheduling”, “Deadlocks”] },
{ id: “st7_2”, title: “Memory & Storage”,       chapters: [“Memory Management”, “Virtual Memory”, “File Systems”] }
]
},
{
id: “t8”, number: “8”,
title: “Database Management Systems (DBMS)”,
meta: “Common | High | Easy–Medium | ~8–10%”,
subtopics: [
{ id: “st8_1”, title: “Modeling & Querying”,        chapters: [“ER Model”, “Relational Model”, “SQL”] },
{ id: “st8_2”, title: “Normalization & Transactions”, chapters: [“Normalization”, “Transactions”, “Concurrency Control”] }
]
},
{
id: “t9”, number: “9”,
title: “Computer Networks (CN)”,
meta: “CSE Only | Medium | Medium | ~6–8%”,
subtopics: [
{ id: “st9_1”, title: “Network Models”,       chapters: [“OSI Model”, “TCP/IP”] },
{ id: “st9_2”, title: “Routing & Application”, chapters: [“Routing”, “Congestion Control”, “Application Layer”] }
]
},
{
id: “t10”, number: “10”,
title: “Theory of Computation (TOC)”,
meta: “CSE Only | Medium–High | Hard | ~6–8%”,
subtopics: [
{ id: “st10_1”, title: “Automata”,      chapters: [“Regular Languages”, “Finite Automata”, “Context-Free Grammars”, “Pushdown Automata”] },
{ id: “st10_2”, title: “Computability”, chapters: [“Turing Machines”] }
]
}
]
},
{
id: “phase3”,
title: “Phase 3: DA / AI Core (Dependency Math + Application)”,
subtitle: “”,
color: “#2d7a4f”,
topics: [
{
id: “t11”, number: “11”,
title: “Linear Algebra (Dependency Math)”,
meta: “DA Only | Very High | Medium–Hard | ~10–12%”,
subtopics: [
{ id: “st11_1”, title: “Vectors & Matrices”,            chapters: [“Vectors”, “Matrices”] },
{ id: “st11_2”, title: “Eigenvalues & Transformations”, chapters: [“Eigenvalues & Eigenvectors”, “Linear Transformations”] }
]
},
{
id: “t12”, number: “12”,
title: “Statistics (Dependency Math)”,
meta: “DA Only | High | Medium | ~8–10%”,
subtopics: [
{ id: “st12_1”, title: “Descriptive Stats”, chapters: [“Descriptive Statistics”, “Mean, Variance”] },
{ id: “st12_2”, title: “Inferential Stats”,  chapters: [“Sampling”, “Estimation”, “Hypothesis Testing”] }
]
},
{
id: “t13”, number: “13”,
title: “Machine Learning”,
meta: “DA Only | Very High | Medium–Hard | ~15–20%”,
subtopics: [
{ id: “st13_1”, title: “Supervised Learning”,       chapters: [“Supervised Learning”, “Regression”, “Classification”] },
{ id: “st13_2”, title: “Unsupervised & Evaluation”, chapters: [“Unsupervised Learning”, “Clustering”, “Model Evaluation”, “Overfitting & Regularization”] }
]
},
{
id: “t14”, number: “14”,
title: “Artificial Intelligence”,
meta: “DA Only | Medium | Medium | ~5–8%”,
subtopics: [
{ id: “st14_1”, title: “Search & Knowledge”, chapters: [“Search Algorithms”, “Knowledge Representation”, “Reasoning”, “Basics of NLP”] }
]
}
]
},
{
id: “phase4”,
title: “Phase 4: Advanced + Remaining Math”,
subtitle: “”,
color: “#b87e0a”,
topics: [
{
id: “t15”, number: “15”,
title: “Advanced Probability & Statistics (Advanced Math)”,
meta: “DA Only | Medium | Hard | Low–Medium”,
subtopics: [
{ id: “st15_1”, title: “Advanced Distributions & Inference”, chapters: [“Advanced Distributions”, “Bayesian Methods”, “Advanced Inference”] }
]
},
{
id: “t16”, number: “16”,
title: “Optimization Techniques”,
meta: “DA Only | Medium | Hard | ~5–8%”,
subtopics: [
{ id: “st16_1”, title: “Optimization Methods”, chapters: [“Gradient Descent”, “Convex Optimization”, “Lagrange Multipliers”] }
]
},
{
id: “t17”, number: “17”,
title: “Full Revision + Weak Areas”,
meta: “Common | Critical | High | Entire exam”,
subtopics: [
{ id: “st17_1”, title: “Revision”, chapters: [“Full Revision + Weak Areas”] }
]
}
]
},
{
id: “phaseP”,
title: “General Aptitude (Parallel — Start Day 1)”,
subtitle: “15 marks fixed — run in parallel throughout”,
color: “#0e7490”,
topics: [
{
id: “tP1”, number: “GA1”,
title: “Verbal Ability”,
meta: “Common | Very High | Easy–Medium | 15 marks”,
subtopics: [
{ id: “stP1_1”, title: “Reading & Comprehension”, chapters: [“Reading Comprehension”, “Sentence Completion”, “Vocabulary”, “Grammar”] }
]
},
{
id: “tP2”, number: “GA2”,
title: “Quantitative Aptitude”,
meta: “Common | Very High | Easy–Medium | 15 marks”,
subtopics: [
{ id: “stP2_1”, title: “Arithmetic”, chapters: [“Percentages”, “Ratios”, “Averages”, “Time & Work”, “Profit & Loss”, “Speed, Time & Distance”] }
]
},
{
id: “tP3”, number: “GA3”,
title: “Analytical Ability”,
meta: “Common | Very High | Easy–Medium | 15 marks”,
subtopics: [
{ id: “stP3_1”, title: “Reasoning & Puzzles”, chapters: [“Logical Reasoning”, “Series”, “Puzzles”] }
]
}
]
}
];

/* ─── 2. CONSTANTS ─── */
const COLS       = [“Video”, “Notes”, “Problems”, “PYQs”, “Rev1”, “Rev2”];
const COL_LABELS = { Video: “Video”, Notes: “Notes”, Problems: “Problems”, PYQs: “PYQs”, Rev1: “Rev 1”, Rev2: “Rev 2” };

/* ─── 3. STATE ─── */
let state = {
checks:           {},
streak:           { lastActiveDate: null, currentStreak: 0, longestStreak: 0 },
targetDate:       null,
collapsePhase:    {},
collapseTopic:    {},
collapseSubtopic: {}
};

/* Anti-cheat */
let recentActions = [];
let pendingChecks = {};
const MIN_HOLD_MS  = 5000;
const BURST_LIMIT  = 5;
const BURST_WINDOW = 5000;

/* ─── 4. PERSISTENCE ─── */
function saveState() {
try { localStorage.setItem(“gate_tracker_v4”, JSON.stringify(state)); } catch (e) {}
}
function loadState() {
try {
const raw = localStorage.getItem(“gate_tracker_v4”);
if (raw) {
const saved = JSON.parse(raw);
// Merge carefully so new keys survive
state.checks           = saved.checks           || {};
state.streak           = saved.streak           || state.streak;
state.targetDate       = saved.targetDate       || null;
state.collapsePhase    = saved.collapsePhase    || {};
state.collapseTopic    = saved.collapseTopic    || {};
state.collapseSubtopic = saved.collapseSubtopic || {};
}
} catch (e) {}
}

/* ─── 5. ID HELPERS ─── */
function slugify(str) {
return str.toLowerCase().replace(/[^a-z0-9]+/g, “*”).replace(/^*|_$/g, “”);
}
function cbId(phaseId, topicId, subId, chSlug, col) {
return `cb__${phaseId}__${topicId}__${subId}__${chSlug}__${col}`;
}
function rowId(phaseId, topicId, subId, chSlug) {
return `row__${phaseId}__${topicId}__${subId}__${chSlug}`;
}

/* ─── 6. PROGRESS HELPERS ─── */
function chapterIds(phaseId, topicId, subId, ch) {
const slug = slugify(ch);
return COLS.map(col => cbId(phaseId, topicId, subId, slug, col));
}

function chapterStatus(phaseId, topicId, subId, ch) {
const ids     = chapterIds(phaseId, topicId, subId, ch);
const checked = ids.filter(id => !!state.checks[id]).length;
if (checked === 0)          return “notstarted”;
if (checked === ids.length) return “completed”;
return “inprogress”;
}

function topicProgress(phase, topic) {
let total = 0, checked = 0;
topic.subtopics.forEach(sub =>
sub.chapters.forEach(ch =>
chapterIds(phase.id, topic.id, sub.id, ch).forEach(id => {
total++;
if (state.checks[id]) checked++;
})
)
);
return { total, checked, pct: total ? Math.round(checked / total * 100) : 0 };
}

function phaseProgress(phase) {
let total = 0, checked = 0;
phase.topics.forEach(topic => {
const tp = topicProgress(phase, topic);
total   += tp.total;
checked += tp.checked;
});
return { total, checked, pct: total ? Math.round(checked / total * 100) : 0 };
}

function overallProgress() {
let total = 0, checked = 0;
ROADMAP.forEach(phase => {
const pp = phaseProgress(phase);
total   += pp.total;
checked += pp.checked;
});
return { total, checked, pct: total ? Math.round(checked / total * 100) : 0 };
}

/* ─── 7. STREAK ─── */
function todayStr() { return new Date().toISOString().slice(0, 10); }
function yesterdayStr() {
const d = new Date();
d.setDate(d.getDate() - 1);
return d.toISOString().slice(0, 10);
}

function recordValidActivity() {
const today = todayStr();
const last  = state.streak.lastActiveDate;
if (last === today) return;

state.streak.currentStreak = (last === yesterdayStr())
? state.streak.currentStreak + 1
: 1;
state.streak.lastActiveDate = today;
state.streak.longestStreak  = Math.max(state.streak.longestStreak, state.streak.currentStreak);
saveState();
renderStreakUI();
}

function checkStreakBroken() {
const last = state.streak.lastActiveDate;
if (last && last !== todayStr() && last !== yesterdayStr()) {
state.streak.currentStreak = 0;
saveState();
}
}

function renderStreakUI() {
const cs = document.getElementById(“currentStreak”);
const ls = document.getElementById(“longestStreak”);
const w  = document.getElementById(“streakWarn”);
if (cs) cs.textContent = state.streak.currentStreak;
if (ls) ls.textContent = state.streak.longestStreak;
if (!w) return;
const last = state.streak.lastActiveDate;
if (state.streak.currentStreak > 0 && last === todayStr()) {
w.textContent = “✅ Studied today!”;
} else if (state.streak.currentStreak > 0) {
w.textContent = “⚠️ Don’t break the streak!”;
} else {
w.textContent = “”;
}
}

/* ─── 8. ANTI-CHEAT ─── */
function showAlert(msg, danger = true) {
const bar = document.getElementById(“alertBar”);
if (!bar) return;
bar.textContent = msg;
bar.className   = “alert-bar visible” + (danger ? “ danger” : “”);
clearTimeout(bar._t);
bar._t = setTimeout(() => { bar.className = “alert-bar”; }, 5000);
}

function isBurst() {
const now = Date.now();
recentActions = recentActions.filter(t => now - t < BURST_WINDOW);
return recentActions.length >= BURST_LIMIT;
}

/* ─── 9. CHECKBOX CHANGE HANDLER ─── */
function handleCheckboxChange(cb) {
const id = cb.dataset.cbid;
if (!id) return;

if (cb.checked) {
recentActions.push(Date.now());

```
if (isBurst()) {
  showAlert("🚨 Suspicious activity detected — progress not counted", true);
  cb.checked       = false;
  state.checks[id] = false;
  saveState();
  updateAllProgress();
  return;
}

state.checks[id] = true;
saveState();
updateAllProgress();

// Hold-time validation for streak
const snap = Date.now();
pendingChecks[id] = snap;
setTimeout(() => {
  if (pendingChecks[id] === snap && state.checks[id]) {
    delete pendingChecks[id];
    // Only meaningful columns increment streak
    if (id.includes("__Problems__") || id.includes("__PYQs__") || id.includes("__Notes__")) {
      recordValidActivity();
    }
  }
}, MIN_HOLD_MS);
```

} else {
delete pendingChecks[id];
state.checks[id] = false;
saveState();
updateAllProgress();
}
}

/* Single delegated listener — works for ALL checkboxes regardless of when they’re added */
document.addEventListener(“change”, (e) => {
if (e.target.type === “checkbox” && e.target.dataset.cbid) {
handleCheckboxChange(e.target);
}
});

/* ─── 10. BUILD DOM ─── */
function render() {
const root = document.getElementById(“roadmapRoot”);
if (!root) return;
root.innerHTML = “”;
ROADMAP.forEach(phase => root.appendChild(buildPhaseBlock(phase)));
updateAllProgress();
buildNavPhases();
}

/* ––––– Phase ––––– */
function buildPhaseBlock(phase) {
// Default: open (false = not collapsed)
const collapsed = state.collapsePhase[phase.id] === true;

const block = document.createElement(“div”);
block.className = “phase-block”;
block.id = “phase_” + phase.id;

// Progress bar strip
const barWrap = document.createElement(“div”);
barWrap.className = “phase-progress-bar-wrap”;
const bar = document.createElement(“div”);
bar.className = “phase-progress-bar”;
bar.id = “phasebar_” + phase.id;
bar.style.background = phase.color;
bar.style.width = “0%”;
barWrap.appendChild(bar);

// Header
const hdr = document.createElement(“div”);
hdr.className = “phase-header”;

const dot = document.createElement(“div”);
dot.className = “phase-color-dot”;
dot.style.background = phase.color;

const titleEl = document.createElement(“div”);
titleEl.className = “phase-title”;
titleEl.id = “phasetitle_” + phase.id;
titleEl.textContent = phase.title;

const badge = document.createElement(“span”);
badge.className = “phase-badge”;
badge.id = “phasebadge_” + phase.id;
badge.textContent = “0%”;

const tog = document.createElement(“span”);
tog.className = “phase-toggle” + (collapsed ? “” : “ open”);
tog.id = “phasetoggle_” + phase.id;
tog.textContent = “▼”;

hdr.appendChild(dot);
hdr.appendChild(titleEl);
hdr.appendChild(badge);
hdr.appendChild(tog);
hdr.addEventListener(“click”, () => togglePhase(phase.id));

// Body
const body = document.createElement(“div”);
body.className = “phase-body” + (collapsed ? “ collapsed” : “”);
body.id = “phasebody_” + phase.id;

phase.topics.forEach(topic => body.appendChild(buildTopicBlock(phase, topic)));

block.appendChild(barWrap);
block.appendChild(hdr);
block.appendChild(body);
return block;
}

/* ––––– Topic ––––– */
function buildTopicBlock(phase, topic) {
const collapsed = state.collapseTopic[topic.id] === true;

const block = document.createElement(“div”);
block.className = “topic-block”;
block.id = “topic_” + topic.id;

const hdr = document.createElement(“div”);
hdr.className = “topic-header”;

const numEl = document.createElement(“span”);
numEl.className = “topic-number”;
numEl.textContent = topic.number + “.”;

const ttl = document.createElement(“span”);
ttl.className = “topic-title”;
ttl.textContent = topic.title;

const meta = document.createElement(“span”);
meta.className = “topic-meta”;
meta.textContent = topic.meta;

const pctEl = document.createElement(“span”);
pctEl.className = “topic-pct”;
pctEl.id = “topicpct_” + topic.id;
pctEl.textContent = “0%”;

const tog = document.createElement(“span”);
tog.className = “topic-toggle” + (collapsed ? “” : “ open”);
tog.id = “topictoggle_” + topic.id;
tog.textContent = “▼”;

hdr.appendChild(numEl);
hdr.appendChild(ttl);
hdr.appendChild(meta);
hdr.appendChild(pctEl);
hdr.appendChild(tog);
hdr.addEventListener(“click”, () => toggleTopic(topic.id));

const body = document.createElement(“div”);
body.className = “topic-body” + (collapsed ? “ collapsed” : “”);
body.id = “topicbody_” + topic.id;

topic.subtopics.forEach(sub => body.appendChild(buildSubtopicBlock(phase, topic, sub)));

block.appendChild(hdr);
block.appendChild(body);
return block;
}

/* ––––– Subtopic ––––– */
function buildSubtopicBlock(phase, topic, sub) {
const collapsed = state.collapseSubtopic[sub.id] === true;

const block = document.createElement(“div”);
block.className = “subtopic-block”;
block.id = “subtopic_” + sub.id;

const hdr = document.createElement(“div”);
hdr.className = “subtopic-header”;

const ttl = document.createElement(“span”);
ttl.className = “subtopic-title”;
ttl.textContent = “📂 “ + sub.title;

const tog = document.createElement(“span”);
tog.className = “subtopic-toggle” + (collapsed ? “” : “ open”);
tog.id = “subtopictoggle_” + sub.id;
tog.textContent = “▼”;

hdr.appendChild(ttl);
hdr.appendChild(tog);
hdr.addEventListener(“click”, () => toggleSubtopic(sub.id));

const body = document.createElement(“div”);
body.className = “subtopic-body” + (collapsed ? “ collapsed” : “”);
body.id = “subtopicbody_” + sub.id;

// Build and append table immediately (synchronous — no setTimeout)
body.appendChild(buildChapterTable(phase, topic, sub));

block.appendChild(hdr);
block.appendChild(body);
return block;
}

/* ––––– Chapter Table ––––– */
function buildChapterTable(phase, topic, sub) {
const wrap = document.createElement(“div”);
wrap.className = “chapter-table-wrap”;

const table = document.createElement(“table”);
table.className = “chapter-table”;

// thead
const thead = document.createElement(“thead”);
const hRow  = document.createElement(“tr”);

// First th: Chapter
const thCh = document.createElement(“th”);
thCh.textContent = “Chapter”;
hRow.appendChild(thCh);

COLS.forEach(col => {
const th = document.createElement(“th”);
th.textContent = COL_LABELS[col];
hRow.appendChild(th);
});
thead.appendChild(hRow);
table.appendChild(thead);

// tbody
const tbody = document.createElement(“tbody”);

sub.chapters.forEach(ch => {
const slug = slugify(ch);
const rId  = rowId(phase.id, topic.id, sub.id, slug);

```
const tr = document.createElement("tr");
tr.className       = "chapter-row notstarted";
tr.id              = rId;
tr.dataset.chapter = ch.toLowerCase();
tr.dataset.phase   = phase.id;
tr.dataset.topic   = topic.id;
tr.dataset.sub     = sub.id;
tr.dataset.slug    = slug;

// Chapter name td
const nameTd = document.createElement("td");

const statusDot = document.createElement("span");
statusDot.className  = "status-dot";
statusDot.id         = "status_" + rId;
statusDot.textContent = "🔴";

nameTd.appendChild(statusDot);
nameTd.appendChild(document.createTextNode(ch));
tr.appendChild(nameTd);

// One td per column with a checkbox
COLS.forEach(col => {
  const td    = document.createElement("td");
  const cbWrap = document.createElement("div");
  cbWrap.className = "cb-wrap";

  const id = cbId(phase.id, topic.id, sub.id, slug, col);

  const cb = document.createElement("input");
  cb.type            = "checkbox";
  cb.id              = id;
  cb.dataset.cbid    = id;
  cb.checked         = !!state.checks[id];
  cb.setAttribute("aria-label", ch + " — " + COL_LABELS[col]);

  cbWrap.appendChild(cb);
  td.appendChild(cbWrap);
  tr.appendChild(td);
});

tbody.appendChild(tr);
```

});

table.appendChild(tbody);
wrap.appendChild(table);
return wrap;
}

/* ─── 11. COLLAPSE TOGGLES ─── */
function togglePhase(phaseId) {
const body = document.getElementById(“phasebody_”   + phaseId);
const tog  = document.getElementById(“phasetoggle_” + phaseId);
if (!body || !tog) return;
const now = body.classList.toggle(“collapsed”);
tog.classList.toggle(“open”, !now);
state.collapsePhase[phaseId] = now;
saveState();
}

function toggleTopic(topicId) {
const body = document.getElementById(“topicbody_”   + topicId);
const tog  = document.getElementById(“topictoggle_” + topicId);
if (!body || !tog) return;
const now = body.classList.toggle(“collapsed”);
tog.classList.toggle(“open”, !now);
state.collapseTopic[topicId] = now;
saveState();
}

function toggleSubtopic(subId) {
const body = document.getElementById(“subtopicbody_”   + subId);
const tog  = document.getElementById(“subtopictoggle_” + subId);
if (!body || !tog) return;
const now = body.classList.toggle(“collapsed”);
tog.classList.toggle(“open”, !now);
state.collapseSubtopic[subId] = now;
saveState();
}

/* ─── 12. UPDATE PROGRESS (called after every checkbox change) ─── */
function updateAllProgress() {
// Overall ring
const op   = overallProgress();
const circ = 2 * Math.PI * 34;
const ring = document.getElementById(“overallRing”);
if (ring) {
ring.setAttribute(“stroke-dasharray”,  String(circ));
ring.setAttribute(“stroke-dashoffset”, String(circ - (op.pct / 100) * circ));
}
const pctEl = document.getElementById(“overallPct”);
if (pctEl) pctEl.textContent = op.pct + “%”;

// Phase / topic / chapter
ROADMAP.forEach(phase => {
const pp = phaseProgress(phase);

```
const bar   = document.getElementById("phasebar_"   + phase.id);
const badge = document.getElementById("phasebadge_" + phase.id);
const title = document.getElementById("phasetitle_" + phase.id);
if (bar)   bar.style.width   = pp.pct + "%";
if (badge) badge.textContent = pp.pct + "%";
if (title) {
  const base = phase.title.replace(" ✅", "");
  title.textContent = (pp.pct === 100) ? base + " ✅" : base;
}

phase.topics.forEach(topic => {
  const tp    = topicProgress(phase, topic);
  const tpEl  = document.getElementById("topicpct_" + topic.id);
  if (tpEl) tpEl.textContent = tp.pct + "%";

  topic.subtopics.forEach(sub => {
    sub.chapters.forEach(ch => {
      const slug = slugify(ch);
      const rId  = rowId(phase.id, topic.id, sub.id, slug);
      const row  = document.getElementById(rId);
      const dot  = document.getElementById("status_" + rId);
      if (!row) return;

      const st = chapterStatus(phase.id, topic.id, sub.id, ch);
      // Preserve hidden-row if present
      const hidden = row.classList.contains("hidden-row") ? " hidden-row" : "";
      row.className = "chapter-row " + st + hidden;
      if (dot) dot.textContent = st === "completed" ? "🟢" : st === "inprogress" ? "🟡" : "🔴";
    });
  });
});
```

});

buildNavPhases();
updateOnTrack();
applyFilters();
}

/* ─── 13. NAV PHASES ─── */
function buildNavPhases() {
const nav = document.getElementById(“navPhases”);
if (!nav) return;
nav.innerHTML = “”;

ROADMAP.forEach((phase, i) => {
const pp  = phaseProgress(phase);
const btn = document.createElement(“button”);
btn.className = “nav-phase-btn”;

```
let short = phase.title
  .replace(/^Phase (\d+):\s*/, "Ph$1 ")
  .replace("General Aptitude", "GA")
  .split("(")[0].trim();
if (short.length > 28) short = short.slice(0, 28) + "…";

const lbl = document.createElement("span");
lbl.textContent = short;

const pctSpan = document.createElement("span");
pctSpan.className = "nav-phase-pct";
pctSpan.textContent = pp.pct + "%";

btn.appendChild(lbl);
btn.appendChild(pctSpan);
btn.addEventListener("click", () => {
  document.getElementById("phase_" + phase.id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
});
nav.appendChild(btn);
```

});
}

/* ─── 14. SEARCH ─── */
function initSearch() {
const input = document.getElementById(“searchInput”);
const clear = document.getElementById(“searchClear”);
if (!input) return;
input.addEventListener(“input”, () => {
if (clear) clear.classList.toggle(“visible”, input.value.length > 0);
applyFilters();
});
}

function clearSearch() {
const input = document.getElementById(“searchInput”);
const clear = document.getElementById(“searchClear”);
if (input) input.value = “”;
if (clear) clear.classList.remove(“visible”);
applyFilters();
}

/* ─── 15. FILTERS ─── */
const activeFilters = { incomplete: false, revision: false };

function toggleFilter(type) {
activeFilters[type] = !activeFilters[type];
const key = type.charAt(0).toUpperCase() + type.slice(1);
document.getElementById(“chip” + key)?.classList.toggle(“active”, activeFilters[type]);
applyFilters();
}

function applyFilters() {
const q            = (document.getElementById(“searchInput”)?.value || “”).toLowerCase().trim();
const onlyIncomp   = activeFilters.incomplete;
const onlyRevPend  = activeFilters.revision;

document.querySelectorAll(”.chapter-row”).forEach(row => {
const chName  = row.dataset.chapter || “”;
const phaseId = row.dataset.phase;
const topicId = row.dataset.topic;
const subId   = row.dataset.sub;
const slug    = row.dataset.slug;

```
let visible = true;

if (q && !chName.includes(q)) visible = false;

if (visible && onlyIncomp && row.classList.contains("completed")) visible = false;

if (visible && onlyRevPend) {
  const anyCheck = COLS.some(c => state.checks[cbId(phaseId, topicId, subId, slug, c)]);
  const rev1Done = state.checks[cbId(phaseId, topicId, subId, slug, "Rev1")];
  const rev2Done = state.checks[cbId(phaseId, topicId, subId, slug, "Rev2")];
  if (!anyCheck || (rev1Done && rev2Done)) visible = false;
}

row.classList.toggle("hidden-row", !visible);
```

});
}

/* ─── 16. SIDEBAR ─── */
function toggleSidebar() {
const sidebar = document.getElementById(“sidebar”);
const main    = document.getElementById(“mainContent”);
if (window.innerWidth <= 768) {
sidebar.classList.toggle(“mobile-open”);
} else {
const hidden = sidebar.classList.toggle(“hidden”);
main.classList.toggle(“full”, hidden);
}
}

/* ─── 17. ON-TRACK ─── */
function updateOnTrack() {
const el      = document.getElementById(“onTrackStatus”);
const dateVal = document.getElementById(“globalTargetDate”)?.value;
if (!el) return;
if (!dateVal) { el.textContent = “”; return; }

const daysLeft = Math.ceil((new Date(dateVal) - new Date()) / 86400000);
const op       = overallProgress();

if (daysLeft <= 0) {
el.textContent = “⏰ Target date passed!”;
el.className   = “on-track behind”;
} else {
const needed = (100 - op.pct) / daysLeft;
el.textContent = needed <= 1.5
? `✅ On track (${daysLeft}d left)`
: `⚠️ Behind schedule (${daysLeft}d left)`;
el.className = “on-track “ + (needed <= 1.5 ? “ok” : “behind”);
}
}

/* ─── 18. ANALYTICS ─── */
function openAnalytics() {
document.getElementById(“analyticsModal”).classList.add(“open”);
renderAnalytics();
}

function closeAnalytics(e) {
if (!e || e.target.id === “analyticsModal”) {
document.getElementById(“analyticsModal”).classList.remove(“open”);
}
}

function renderAnalytics() {
const op = overallProgress();
let revTotal = 0, revDone = 0;

ROADMAP.forEach(phase =>
phase.topics.forEach(topic =>
topic.subtopics.forEach(sub =>
sub.chapters.forEach(ch => {
revTotal++;
if (state.checks[cbId(phase.id, topic.id, sub.id, slugify(ch), “Rev1”)]) revDone++;
})
)
)
);

const revPct     = revTotal ? Math.round(revDone / revTotal * 100) : 0;
const weakTopics = [];
ROADMAP.forEach(phase =>
phase.topics.forEach(topic => {
const tp = topicProgress(phase, topic);
if (tp.pct < 30 && tp.checked > 0) weakTopics.push({ title: topic.title, pct: tp.pct });
})
);

const container = document.getElementById(“analyticsContent”);
container.innerHTML = “”;

// Summary cards
const grid = document.createElement(“div”);
grid.className = “analytics-grid”;
grid.innerHTML = `<div class="ana-card"> <div class="ana-card-label">Overall Completion</div> <div class="ana-card-val">${op.pct}%</div> <div class="ana-card-sub">${op.checked} / ${op.total} boxes checked</div> </div> <div class="ana-card"> <div class="ana-card-label">Revision Coverage</div> <div class="ana-card-val">${revPct}%</div> <div class="ana-card-sub">${revDone} / ${revTotal} chapters Rev 1</div> </div> <div class="ana-card"> <div class="ana-card-label">Current Streak</div> <div class="ana-card-val">🔥 ${state.streak.currentStreak}</div> <div class="ana-card-sub">Longest: ${state.streak.longestStreak} days</div> </div> <div class="ana-card"> <div class="ana-card-label">Last Active</div> <div class="ana-card-val" style="font-size:18px">${state.streak.lastActiveDate || "—"}</div> <div class="ana-card-sub">Date of last valid study</div> </div>`;
container.appendChild(grid);

// Phase bars
addSectionTitle(container, “Phase-wise Progress”);
ROADMAP.forEach(phase => {
const pp    = phaseProgress(phase);
const short = phase.title.replace(/^Phase \d+:\s*/, “”).replace(“General Aptitude”, “GA”).split(”(”)[0].trim();
addBarRow(container, short, pp.pct, phase.color, phase.title);
});

// Topic bars
addSectionTitle(container, “Topic-wise Progress”);
ROADMAP.forEach(phase =>
phase.topics.forEach(topic => {
const tp = topicProgress(phase, topic);
addBarRow(container, topic.title.split(”(”)[0].trim(), tp.pct, phase.color, topic.title);
})
);

// Weak areas
addSectionTitle(container, “⚠️ Weak Areas (started but < 30%)”);
const weakList = document.createElement(“div”);
weakList.className = “weak-list”;
if (weakTopics.length === 0) {
weakList.innerHTML = `<span style="color:var(--text3);font-size:13px">No weak areas yet — great start!</span>`;
} else {
weakTopics.forEach(({ title, pct }) => {
const tag = document.createElement(“span”);
tag.className   = “weak-tag”;
tag.textContent = title.split(”(”)[0].trim() + “ (” + pct + “%)”;
weakList.appendChild(tag);
});
}
container.appendChild(weakList);
}

function addSectionTitle(parent, text) {
const el = document.createElement(“div”);
el.className   = “ana-section-title”;
el.textContent = text;
parent.appendChild(el);
}

function addBarRow(parent, label, pct, color, fullTitle) {
const row = document.createElement(“div”);
row.className = “ana-bar-row”;
row.innerHTML = `<div class="ana-bar-label" title="${fullTitle || label}">${label}</div> <div class="ana-bar-track"> <div class="ana-bar-fill" style="width:${pct}%;background:${color}"></div> </div> <div class="ana-bar-pct">${pct}%</div>`;
parent.appendChild(row);
}

/* ─── 19. INIT ─── */
document.addEventListener(“DOMContentLoaded”, () => {
loadState();
checkStreakBroken();
render();
renderStreakUI();
initSearch();

// Target date
const dateInput = document.getElementById(“globalTargetDate”);
if (dateInput) {
if (state.targetDate) dateInput.value = state.targetDate;
dateInput.addEventListener(“change”, () => {
state.targetDate = dateInput.value;
saveState();
updateOnTrack();
});
}

// Close mobile sidebar on outside tap
document.addEventListener(“click”, (e) => {
const sidebar   = document.getElementById(“sidebar”);
const hamburger = document.getElementById(“hamburger”);
if (
sidebar &&
window.innerWidth <= 768 &&
sidebar.classList.contains(“mobile-open”) &&
!sidebar.contains(e.target) &&
e.target !== hamburger
) {
sidebar.classList.remove(“mobile-open”);
}
});
});
