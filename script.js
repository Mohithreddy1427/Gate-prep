/* =========================================================
   GATE CSE + DA TRACKER — script.js
   Modular vanilla JS | No frameworks | GitHub Pages safe
   ========================================================= */

/* ─── 1. ROADMAP DATA ─── */
const ROADMAP = [
  {
    id: "phase1",
    title: "Phase 1: Foundations (Core Math + Programming)",
    subtitle: "Build the base that unlocks everything else",
    color: "#5b4fcf",
    topics: [
      {
        id: "t1", number: "1",
        title: "Programming & Problem Solving",
        meta: "Common (CSE + DA) | High | Easy–Medium",
        subtopics: [
          {
            id: "st1_1", title: "Basics of Programming",
            chapters: ["Basics of Programming"]
          },
          {
            id: "st1_2", title: "Variables & Data Types",
            chapters: ["Variables, Data Types"]
          },
          {
            id: "st1_3", title: "Control Flow",
            chapters: ["Control Flow (if, loops)"]
          },
          {
            id: "st1_4", title: "Functions & Recursion",
            chapters: ["Functions & Recursion"]
          },
          {
            id: "st1_5", title: "Complexity Thinking",
            chapters: ["Basic Complexity Thinking", "Time Complexity", "Space Complexity"]
          }
        ]
      },
      {
        id: "t2", number: "2",
        title: "Discrete Mathematics (Core Math)",
        meta: "Common | Very High | Medium | ~10–15%",
        subtopics: [
          {
            id: "st2_1", title: "Logic",
            chapters: ["Propositional Logic", "Predicate Logic"]
          },
          {
            id: "st2_2", title: "Set Theory & Relations",
            chapters: ["Set Theory & Relations"]
          },
          {
            id: "st2_3", title: "Functions & Combinatorics",
            chapters: ["Functions", "Combinatorics"]
          },
          {
            id: "st2_4", title: "Graph Theory Basics & Recurrence",
            chapters: ["Graph Theory (BASICS)", "Recurrence Relations"]
          }
        ]
      },
      {
        id: "t3", number: "3",
        title: "Core Probability (Core Math)",
        meta: "Common | High | Medium | ~5–8%",
        subtopics: [
          {
            id: "st3_1", title: "Probability Foundations",
            chapters: ["Probability Basics", "Conditional Probability"]
          },
          {
            id: "st3_2", title: "Random Variables & Distributions",
            chapters: ["Random Variables", "Distributions (Basic)"]
          }
        ]
      }
    ]
  },
  {
    id: "phase2",
    title: "Phase 2: Core CSE (System + Logic Building)",
    subtitle: "",
    color: "#c84b31",
    topics: [
      {
        id: "t4", number: "4",
        title: "Data Structures",
        meta: "Common | Very High | Medium | ~10–12%",
        subtopics: [
          {
            id: "st4_1", title: "Linear Structures",
            chapters: ["Arrays", "Linked Lists", "Stacks & Queues"]
          },
          {
            id: "st4_2", title: "Tree Structures",
            chapters: ["Trees", "Binary Trees", "BST", "Heaps"]
          },
          {
            id: "st4_3", title: "Hashing & Graphs",
            chapters: ["Hashing", "Graphs (Implementation)"]
          }
        ]
      },
      {
        id: "t5", number: "5",
        title: "Algorithms",
        meta: "Common | Very High | Hard | ~10–15%",
        subtopics: [
          {
            id: "st5_1", title: "Analysis & Paradigms",
            chapters: ["Complexity Analysis", "Divide & Conquer", "Greedy Algorithms", "Dynamic Programming"]
          },
          {
            id: "st5_2", title: "Graph Algorithms",
            chapters: ["Graph Algorithms", "BFS, DFS", "Shortest Paths", "Backtracking"]
          }
        ]
      },
      {
        id: "t6", number: "6",
        title: "Computer Organization & Architecture (COA)",
        meta: "CSE Only | High | Medium | ~8–10%",
        subtopics: [
          {
            id: "st6_1", title: "Digital Fundamentals",
            chapters: ["Number Systems", "Boolean Algebra"]
          },
          {
            id: "st6_2", title: "CPU & Memory",
            chapters: ["Machine Instructions", "CPU Organization", "Memory Hierarchy"]
          }
        ]
      },
      {
        id: "t7", number: "7",
        title: "Operating Systems",
        meta: "CSE Only | Very High | Medium | ~10–12%",
        subtopics: [
          {
            id: "st7_1", title: "Processes & Scheduling",
            chapters: ["Processes & Threads", "Scheduling", "Deadlocks"]
          },
          {
            id: "st7_2", title: "Memory & Storage",
            chapters: ["Memory Management", "Virtual Memory", "File Systems"]
          }
        ]
      },
      {
        id: "t8", number: "8",
        title: "Database Management Systems (DBMS)",
        meta: "Common | High | Easy–Medium | ~8–10%",
        subtopics: [
          {
            id: "st8_1", title: "Modeling & Querying",
            chapters: ["ER Model", "Relational Model", "SQL"]
          },
          {
            id: "st8_2", title: "Normalization & Transactions",
            chapters: ["Normalization", "Transactions", "Concurrency Control"]
          }
        ]
      },
      {
        id: "t9", number: "9",
        title: "Computer Networks (CN)",
        meta: "CSE Only | Medium | Medium | ~6–8%",
        subtopics: [
          {
            id: "st9_1", title: "Network Models",
            chapters: ["OSI Model", "TCP/IP"]
          },
          {
            id: "st9_2", title: "Routing & Application",
            chapters: ["Routing", "Congestion Control", "Application Layer"]
          }
        ]
      },
      {
        id: "t10", number: "10",
        title: "Theory of Computation (TOC)",
        meta: "CSE Only | Medium–High | Hard | ~6–8%",
        subtopics: [
          {
            id: "st10_1", title: "Automata",
            chapters: ["Regular Languages", "Finite Automata", "Context-Free Grammars", "Pushdown Automata"]
          },
          {
            id: "st10_2", title: "Computability",
            chapters: ["Turing Machines"]
          }
        ]
      }
    ]
  },
  {
    id: "phase3",
    title: "Phase 3: DA / AI Core (Dependency Math + Application)",
    subtitle: "",
    color: "#2d7a4f",
    topics: [
      {
        id: "t11", number: "11",
        title: "Linear Algebra (Dependency Math)",
        meta: "DA Only | Very High | Medium–Hard | ~10–12%",
        subtopics: [
          {
            id: "st11_1", title: "Vectors & Matrices",
            chapters: ["Vectors", "Matrices"]
          },
          {
            id: "st11_2", title: "Eigenvalues & Transformations",
            chapters: ["Eigenvalues & Eigenvectors", "Linear Transformations"]
          }
        ]
      },
      {
        id: "t12", number: "12",
        title: "Statistics (Dependency Math)",
        meta: "DA Only | High | Medium | ~8–10%",
        subtopics: [
          {
            id: "st12_1", title: "Descriptive Stats",
            chapters: ["Descriptive Statistics", "Mean, Variance"]
          },
          {
            id: "st12_2", title: "Inferential Stats",
            chapters: ["Sampling", "Estimation", "Hypothesis Testing"]
          }
        ]
      },
      {
        id: "t13", number: "13",
        title: "Machine Learning",
        meta: "DA Only | Very High | Medium–Hard | ~15–20%",
        subtopics: [
          {
            id: "st13_1", title: "Supervised Learning",
            chapters: ["Supervised Learning", "Regression", "Classification"]
          },
          {
            id: "st13_2", title: "Unsupervised & Evaluation",
            chapters: ["Unsupervised Learning", "Clustering", "Model Evaluation", "Overfitting & Regularization"]
          }
        ]
      },
      {
        id: "t14", number: "14",
        title: "Artificial Intelligence",
        meta: "DA Only | Medium | Medium | ~5–8%",
        subtopics: [
          {
            id: "st14_1", title: "Search & Knowledge",
            chapters: ["Search Algorithms", "Knowledge Representation", "Reasoning", "Basics of NLP"]
          }
        ]
      }
    ]
  },
  {
    id: "phase4",
    title: "Phase 4: Advanced + Remaining Math",
    subtitle: "",
    color: "#b87e0a",
    topics: [
      {
        id: "t15", number: "15",
        title: "Advanced Probability & Statistics (Advanced Math)",
        meta: "DA Only | Medium | Hard | Low–Medium",
        subtopics: [
          {
            id: "st15_1", title: "Advanced Distributions & Inference",
            chapters: ["Advanced Distributions", "Bayesian Methods", "Advanced Inference"]
          }
        ]
      },
      {
        id: "t16", number: "16",
        title: "Optimization Techniques",
        meta: "DA Only | Medium | Hard | ~5–8%",
        subtopics: [
          {
            id: "st16_1", title: "Optimization Methods",
            chapters: ["Gradient Descent", "Convex Optimization", "Lagrange Multipliers"]
          }
        ]
      },
      {
        id: "t17", number: "17",
        title: "Full Revision + Weak Areas",
        meta: "Common | Critical | High | Entire exam",
        subtopics: [
          {
            id: "st17_1", title: "Revision",
            chapters: ["Full Revision + Weak Areas"]
          }
        ]
      }
    ]
  },
  {
    id: "phaseP",
    title: "General Aptitude (Parallel — Start Day 1)",
    subtitle: "15 marks fixed — run this in parallel throughout",
    color: "#0e7490",
    topics: [
      {
        id: "tP1", number: "GA1",
        title: "Verbal Ability",
        meta: "Common | Very High | Easy–Medium | 15 marks",
        subtopics: [
          {
            id: "stP1_1", title: "Reading & Comprehension",
            chapters: ["Reading Comprehension", "Sentence Completion", "Vocabulary", "Grammar"]
          }
        ]
      },
      {
        id: "tP2", number: "GA2",
        title: "Quantitative Aptitude",
        meta: "Common | Very High | Easy–Medium | 15 marks",
        subtopics: [
          {
            id: "stP2_1", title: "Arithmetic",
            chapters: ["Percentages", "Ratios", "Averages", "Time & Work", "Profit & Loss", "Speed, Time & Distance"]
          }
        ]
      },
      {
        id: "tP3", number: "GA3",
        title: "Analytical Ability",
        meta: "Common | Very High | Easy–Medium | 15 marks",
        subtopics: [
          {
            id: "stP3_1", title: "Reasoning & Puzzles",
            chapters: ["Logical Reasoning", "Series", "Puzzles"]
          }
        ]
      }
    ]
  }
];

const COLS = ["Video", "Notes", "Problems", "PYQs", "Rev1", "Rev2"];
const COL_LABELS = { Video: "Video", Notes: "Notes", Problems: "Problems", PYQs: "PYQs", Rev1: "Rev 1", Rev2: "Rev 2" };

/* ─── 2. STATE ─── */
let state = {
  checks: {},           // cbId → true/false
  streak: { lastActiveDate: null, currentStreak: 0, longestStreak: 0 },
  targetDate: null,
  phaseTargets: {},
  collapsePhase: {},    // phaseId → bool (collapsed)
  collapseTopic: {},    // topicId → bool
  collapseSubtopic: {}  // subtopicId → bool
};

// Anti-cheat
let recentActions = [];       // timestamps of checkbox interactions in current session
let validatedToday = false;   // at least one valid action today
let pendingChecks = {};       // cbId → {timestamp, validated}
const MIN_HOLD_MS = 5000;     // must remain checked for ≥5 s
const BURST_LIMIT = 5;        // >5 checks within 5 s = suspicious
const BURST_WINDOW_MS = 5000;

/* ─── 3. PERSISTENCE ─── */
function saveState() {
  localStorage.setItem("gate_tracker_v3", JSON.stringify(state));
}
function loadState() {
  const raw = localStorage.getItem("gate_tracker_v3");
  if (raw) {
    try {
      const saved = JSON.parse(raw);
      state = Object.assign(state, saved);
    } catch(e) {}
  }
}

/* ─── 4. GENERATE UNIQUE CB ID ─── */
function cbId(phaseId, topicId, subtopicId, chapterSlug, col) {
  return `cb__${phaseId}__${topicId}__${subtopicId}__${chapterSlug}__${col}`;
}
function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
}

/* ─── 5. COLLECT ALL CB IDS ─── */
function getAllCbIds() {
  const ids = [];
  ROADMAP.forEach(phase => {
    phase.topics.forEach(topic => {
      topic.subtopics.forEach(sub => {
        sub.chapters.forEach(ch => {
          COLS.forEach(col => {
            ids.push(cbId(phase.id, topic.id, sub.id, slugify(ch), col));
          });
        });
      });
    });
  });
  return ids;
}

/* ─── 6. PROGRESS CALCULATIONS ─── */
function getCheckedCount(ids) {
  return ids.filter(id => state.checks[id]).length;
}

function chapterStatus(phaseId, topicId, subId, ch) {
  const slug = slugify(ch);
  const ids = COLS.map(col => cbId(phaseId, topicId, subId, slug, col));
  const checked = getCheckedCount(ids);
  if (checked === 0) return "notstarted";
  if (checked === ids.length) return "completed";
  return "inprogress";
}

function topicProgress(phase, topic) {
  let total = 0, checked = 0;
  topic.subtopics.forEach(sub => {
    sub.chapters.forEach(ch => {
      const slug = slugify(ch);
      COLS.forEach(col => {
        total++;
        if (state.checks[cbId(phase.id, topic.id, sub.id, slug, col)]) checked++;
      });
    });
  });
  return { total, checked, pct: total ? Math.round(checked / total * 100) : 0 };
}

function phaseProgress(phase) {
  let total = 0, checked = 0;
  phase.topics.forEach(topic => {
    const tp = topicProgress(phase, topic);
    total += tp.total;
    checked += tp.checked;
  });
  return { total, checked, pct: total ? Math.round(checked / total * 100) : 0 };
}

function overallProgress() {
  const allIds = getAllCbIds();
  const total = allIds.length;
  const checked = getCheckedCount(allIds);
  return { total, checked, pct: total ? Math.round(checked / total * 100) : 0 };
}

/* ─── 7. STREAK LOGIC ─── */
function todayStr() {
  return new Date().toISOString().slice(0, 10);
}
function yesterdayStr() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

function recordValidActivity() {
  const today = todayStr();
  const last = state.streak.lastActiveDate;

  if (last === today) {
    // already counted today
    return;
  }

  if (last === yesterdayStr()) {
    state.streak.currentStreak += 1;
  } else if (last !== today) {
    // missed a day or first time
    state.streak.currentStreak = 1;
  }

  state.streak.lastActiveDate = today;
  state.streak.longestStreak = Math.max(state.streak.longestStreak, state.streak.currentStreak);
  validatedToday = true;
  saveState();
  renderStreakUI();
}

function checkStreakBroken() {
  const today = todayStr();
  const last = state.streak.lastActiveDate;
  if (!last) return false;
  if (last !== today && last !== yesterdayStr()) {
    state.streak.currentStreak = 0;
    saveState();
    return true;
  }
  return false;
}

function renderStreakUI() {
  document.getElementById("currentStreak").textContent = state.streak.currentStreak;
  document.getElementById("longestStreak").textContent = state.streak.longestStreak;
  const warn = document.getElementById("streakWarn");
  const today = todayStr();
  const last = state.streak.lastActiveDate;
  if (state.streak.currentStreak > 0 && last !== today) {
    warn.textContent = "⚠️ Don't break the streak!";
  } else if (state.streak.currentStreak > 0 && last === today) {
    warn.textContent = "✅ Studied today!";
  } else {
    warn.textContent = "";
  }
}

/* ─── 8. ANTI-CHEAT ─── */
function showAlert(msg, danger = true) {
  const bar = document.getElementById("alertBar");
  bar.textContent = msg;
  bar.className = "alert-bar visible" + (danger ? " danger" : "");
  clearTimeout(bar._timer);
  bar._timer = setTimeout(() => { bar.className = "alert-bar"; }, 5000);
}

function isBurst() {
  const now = Date.now();
  recentActions = recentActions.filter(t => now - t < BURST_WINDOW_MS);
  return recentActions.length >= BURST_LIMIT;
}

function handleCheckboxChange(cb, id) {
  const now = Date.now();

  if (cb.checked) {
    // Burst check
    recentActions.push(now);
    if (isBurst()) {
      showAlert("🚨 Suspicious activity detected — progress not counted", true);
      cb.checked = false;
      return;
    }

    // Record pending
    pendingChecks[id] = { timestamp: now, validated: false };

    // Validate after MIN_HOLD_MS
    setTimeout(() => {
      if (state.checks[id] && pendingChecks[id]) {
        pendingChecks[id].validated = true;
        // Count streak only if Problems or PYQs checked (meaningful work)
        const isMeaningful = id.includes("__Problems__") || id.includes("__PYQs__") || id.includes("__Notes__");
        if (isMeaningful) {
          recordValidActivity();
        }
        delete pendingChecks[id];
      }
    }, MIN_HOLD_MS);

    state.checks[id] = true;
  } else {
    // Unchecking — just update
    delete pendingChecks[id];
    state.checks[id] = false;
  }

  saveState();
  updateAllProgress();
}

/* ─── 9. RENDER ─── */
function render() {
  const root = document.getElementById("roadmapRoot");
  root.innerHTML = "";

  ROADMAP.forEach(phase => {
    root.appendChild(buildPhaseBlock(phase));
  });

  updateAllProgress();
  buildNavPhases();
}

function buildPhaseBlock(phase) {
  const isCollapsed = state.collapsePhase[phase.id] !== false; // default collapsed

  const block = document.createElement("div");
  block.className = "phase-block";
  block.id = "phase_" + phase.id;

  // Progress bar
  const barWrap = document.createElement("div");
  barWrap.className = "phase-progress-bar-wrap";
  const bar = document.createElement("div");
  bar.className = "phase-progress-bar";
  bar.id = "phasebar_" + phase.id;
  bar.style.background = phase.color;
  bar.style.width = "0%";
  barWrap.appendChild(bar);

  // Header
  const header = document.createElement("div");
  header.className = "phase-header";
  header.innerHTML = `
    <div class="phase-color-dot" style="background:${phase.color}"></div>
    <div class="phase-title" id="phasetitle_${phase.id}">${phase.title}</div>
    <span class="phase-badge" id="phasebadge_${phase.id}">0%</span>
    <span class="phase-toggle ${isCollapsed ? "" : "open"}" id="phasetoggle_${phase.id}">▼</span>
  `;
  header.addEventListener("click", () => togglePhase(phase.id));

  // Body
  const body = document.createElement("div");
  body.className = "phase-body" + (isCollapsed ? " collapsed" : "");
  body.id = "phasebody_" + phase.id;

  phase.topics.forEach(topic => {
    body.appendChild(buildTopicBlock(phase, topic));
  });

  block.appendChild(barWrap);
  block.appendChild(header);
  block.appendChild(body);
  return block;
}

function buildTopicBlock(phase, topic) {
  const isCollapsed = state.collapseTopic[topic.id] !== false;

  const block = document.createElement("div");
  block.className = "topic-block";
  block.id = "topic_" + topic.id;

  const header = document.createElement("div");
  header.className = "topic-header";
  header.innerHTML = `
    <span class="topic-number">${topic.number}.</span>
    <span class="topic-title">${topic.title}</span>
    <span class="topic-meta">${topic.meta}</span>
    <span class="topic-pct" id="topicpct_${topic.id}">0%</span>
    <span class="topic-toggle ${isCollapsed ? "" : "open"}" id="topictoggle_${topic.id}">▼</span>
  `;
  header.addEventListener("click", () => toggleTopic(topic.id));

  const body = document.createElement("div");
  body.className = "topic-body" + (isCollapsed ? " collapsed" : "");
  body.id = "topicbody_" + topic.id;

  topic.subtopics.forEach(sub => {
    body.appendChild(buildSubtopicBlock(phase, topic, sub));
  });

  block.appendChild(header);
  block.appendChild(body);
  return block;
}

function buildSubtopicBlock(phase, topic, sub) {
  const isCollapsed = state.collapseSubtopic[sub.id] !== false;

  const block = document.createElement("div");
  block.className = "subtopic-block";
  block.id = "subtopic_" + sub.id;

  const header = document.createElement("div");
  header.className = "subtopic-header";
  header.innerHTML = `
    <span class="subtopic-title">📂 ${sub.title}</span>
    <span class="subtopic-toggle ${isCollapsed ? "" : "open"}" id="subtopictoggle_${sub.id}">▼</span>
  `;
  header.addEventListener("click", () => toggleSubtopic(sub.id));

  const body = document.createElement("div");
  body.className = "subtopic-body" + (isCollapsed ? " collapsed" : "");
  body.id = "subtopicbody_" + sub.id;

  body.appendChild(buildChapterTable(phase, topic, sub));

  block.appendChild(header);
  block.appendChild(body);
  return block;
}

function buildChapterTable(phase, topic, sub) {
  const wrap = document.createElement("div");
  wrap.className = "chapter-table-wrap";

  const table = document.createElement("table");
  table.className = "chapter-table";

  // Header
  const thead = document.createElement("thead");
  thead.innerHTML = `<tr>
    <th>Chapter</th>
    ${COLS.map(c => `<th>${COL_LABELS[c]}</th>`).join("")}
  </tr>`;
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  sub.chapters.forEach(ch => {
    const slug = slugify(ch);
    const rowId = `row__${phase.id}__${topic.id}__${sub.id}__${slug}`;
    const tr = document.createElement("tr");
    tr.className = "chapter-row";
    tr.id = rowId;
    tr.dataset.chapter = ch.toLowerCase();
    tr.dataset.phase = phase.id;
    tr.dataset.topic = topic.id;
    tr.dataset.sub = sub.id;
    tr.dataset.slug = slug;

    // Status dot
    const statusDot = `<span class="status-dot" id="status_${rowId}">🔴</span>`;
    let rowHtml = `<td><div class="ch-name">${statusDot}${ch}</div></td>`;

    COLS.forEach(col => {
      const id = cbId(phase.id, topic.id, sub.id, slug, col);
      const checked = state.checks[id] ? "checked" : "";
      rowHtml += `<td><div class="cb-wrap"><input type="checkbox" id="${id}" ${checked} data-cbid="${id}" /></div></td>`;
    });

    tr.innerHTML = rowHtml;
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  wrap.appendChild(table);

  // Attach events after DOM insertion (delegation)
  setTimeout(() => {
    sub.chapters.forEach(ch => {
      const slug = slugify(ch);
      COLS.forEach(col => {
        const id = cbId(phase.id, topic.id, sub.id, slug, col);
        const cb = document.getElementById(id);
        if (cb) {
          cb.addEventListener("change", () => handleCheckboxChange(cb, id));
        }
      });
    });
  }, 0);

  return wrap;
}

/* ─── 10. COLLAPSE / EXPAND ─── */
function togglePhase(phaseId) {
  const body = document.getElementById("phasebody_" + phaseId);
  const toggle = document.getElementById("phasetoggle_" + phaseId);
  const collapsed = body.classList.toggle("collapsed");
  toggle.classList.toggle("open", !collapsed);
  state.collapsePhase[phaseId] = collapsed;
  saveState();
}
function toggleTopic(topicId) {
  const body = document.getElementById("topicbody_" + topicId);
  const toggle = document.getElementById("topictoggle_" + topicId);
  const collapsed = body.classList.toggle("collapsed");
  toggle.classList.toggle("open", !collapsed);
  state.collapseTopic[topicId] = collapsed;
  saveState();
}
function toggleSubtopic(subId) {
  const body = document.getElementById("subtopicbody_" + subId);
  const toggle = document.getElementById("subtopictoggle_" + subId);
  const collapsed = body.classList.toggle("collapsed");
  toggle.classList.toggle("open", !collapsed);
  state.collapseSubtopic[subId] = collapsed;
  saveState();
}

/* ─── 11. PROGRESS UPDATE ─── */
function updateAllProgress() {
  // Overall
  const op = overallProgress();
  document.getElementById("overallPct").textContent = op.pct + "%";
  const circ = 2 * Math.PI * 34;
  const offset = circ - (op.pct / 100) * circ;
  document.getElementById("overallRing").style.strokeDashoffset = offset;

  // Per phase
  ROADMAP.forEach(phase => {
    const pp = phaseProgress(phase);
    const bar = document.getElementById("phasebar_" + phase.id);
    const badge = document.getElementById("phasebadge_" + phase.id);
    const title = document.getElementById("phasetitle_" + phase.id);
    if (bar) bar.style.width = pp.pct + "%";
    if (badge) badge.textContent = pp.pct + "%";
    if (title) {
      const base = phase.title.replace(" ✅", "");
      title.textContent = pp.pct === 100 ? base + " ✅" : base;
    }

    // Per topic
    phase.topics.forEach(topic => {
      const tp = topicProgress(phase, topic);
      const pctEl = document.getElementById("topicpct_" + topic.id);
      if (pctEl) pctEl.textContent = tp.pct + "%";

      // Per chapter row
      topic.subtopics.forEach(sub => {
        sub.chapters.forEach(ch => {
          const slug = slugify(ch);
          const rowId = `row__${phase.id}__${topic.id}__${sub.id}__${slug}`;
          const row = document.getElementById(rowId);
          const statusEl = document.getElementById("status_" + rowId);
          if (!row) return;
          const st = chapterStatus(phase.id, topic.id, sub.id, ch);
          row.className = "chapter-row " + st;
          if (statusEl) {
            statusEl.textContent = st === "completed" ? "🟢" : st === "inprogress" ? "🟡" : "🔴";
          }
        });
      });
    });
  });

  // Nav phases
  buildNavPhases();

  // On track
  updateOnTrack();

  // Apply active filters
  applyFilters();
}

/* ─── 12. NAV PHASES ─── */
function buildNavPhases() {
  const nav = document.getElementById("navPhases");
  if (!nav) return;
  nav.innerHTML = "";
  ROADMAP.forEach(phase => {
    const pp = phaseProgress(phase);
    const btn = document.createElement("button");
    btn.className = "nav-phase-btn";
    const shortTitle = phase.title.split(":")[0].replace("Phase ", "Ph").replace("General ", "GA ");
    btn.innerHTML = `<span>${shortTitle}</span><span class="nav-phase-pct">${pp.pct}%</span>`;
    btn.addEventListener("click", () => {
      document.getElementById("phase_" + phase.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    nav.appendChild(btn);
  });
}

/* ─── 13. SEARCH ─── */
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const clearBtn = document.getElementById("searchClear");

  searchInput.addEventListener("input", () => {
    const q = searchInput.value.trim();
    clearBtn.classList.toggle("visible", q.length > 0);
    applyFilters();
  });
});

function clearSearch() {
  document.getElementById("searchInput").value = "";
  document.getElementById("searchClear").classList.remove("visible");
  applyFilters();
}

/* ─── 14. FILTERS ─── */
let activeFilters = { incomplete: false, revision: false };

function toggleFilter(type) {
  activeFilters[type] = !activeFilters[type];
  document.getElementById("chip" + type.charAt(0).toUpperCase() + type.slice(1))
    .classList.toggle("active", activeFilters[type]);
  applyFilters();
}

function applyFilters() {
  const q = (document.getElementById("searchInput")?.value || "").toLowerCase().trim();
  const showIncomplete = activeFilters.incomplete;
  const showRevision = activeFilters.revision;

  document.querySelectorAll(".chapter-row").forEach(row => {
    const chName = row.dataset.chapter || "";
    const phaseId = row.dataset.phase;
    const topicId = row.dataset.topic;
    const subId = row.dataset.sub;
    const slug = row.dataset.slug;

    let visible = true;

    // Search filter
    if (q && !chName.includes(q)) visible = false;

    // Incomplete filter
    if (visible && showIncomplete) {
      const st = row.classList.contains("completed");
      if (st) visible = false;
    }

    // Revision pending filter
    if (visible && showRevision) {
      const rev1 = cbId(phaseId, topicId, subId, slug, "Rev1");
      const rev2 = cbId(phaseId, topicId, subId, slug, "Rev2");
      const hasAnyCheck = COLS.some(c => state.checks[cbId(phaseId, topicId, subId, slug, c)]);
      const revDone = state.checks[rev1] && state.checks[rev2];
      if (!hasAnyCheck || revDone) visible = false;
    }

    row.classList.toggle("hidden-row", !visible);
  });
}

/* ─── 15. SIDEBAR TOGGLE ─── */
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const main = document.getElementById("mainContent");
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    sidebar.classList.toggle("mobile-open");
  } else {
    sidebar.classList.toggle("hidden");
    main.classList.toggle("full");
  }
}

/* ─── 16. ON-TRACK ─── */
function updateOnTrack() {
  const el = document.getElementById("onTrackStatus");
  const dateVal = document.getElementById("globalTargetDate").value;
  if (!dateVal) { el.textContent = ""; return; }

  const target = new Date(dateVal);
  const today = new Date();
  const daysLeft = Math.ceil((target - today) / (1000 * 60 * 60 * 24));
  const op = overallProgress();
  const remaining = 100 - op.pct;

  if (daysLeft <= 0) {
    el.textContent = "⏰ Target date passed!";
    el.className = "on-track behind";
  } else {
    const neededPerDay = remaining / daysLeft;
    if (neededPerDay <= 1.5) {
      el.textContent = `✅ On track (${daysLeft}d left)`;
      el.className = "on-track ok";
    } else {
      el.textContent = `⚠️ Behind schedule (${daysLeft}d left)`;
      el.className = "on-track behind";
    }
  }
}

/* ─── 17. ANALYTICS ─── */
function openAnalytics() {
  const modal = document.getElementById("analyticsModal");
  modal.classList.add("open");
  renderAnalytics();
}
function closeAnalytics(e) {
  if (!e || e.target === document.getElementById("analyticsModal")) {
    document.getElementById("analyticsModal").classList.remove("open");
  }
}

function renderAnalytics() {
  const op = overallProgress();

  // Revision coverage: how many chapters have Rev1 checked
  let revTotal = 0, revDone = 0;
  ROADMAP.forEach(phase => {
    phase.topics.forEach(topic => {
      topic.subtopics.forEach(sub => {
        sub.chapters.forEach(ch => {
          const slug = slugify(ch);
          revTotal++;
          if (state.checks[cbId(phase.id, topic.id, sub.id, slug, "Rev1")]) revDone++;
        });
      });
    });
  });
  const revPct = revTotal ? Math.round(revDone / revTotal * 100) : 0;

  // Weak areas: topics < 30%
  const weakTopics = [];
  ROADMAP.forEach(phase => {
    phase.topics.forEach(topic => {
      const tp = topicProgress(phase, topic);
      if (tp.pct < 30 && tp.checked > 0) weakTopics.push(topic.title);
    });
  });

  const container = document.getElementById("analyticsContent");
  container.innerHTML = "";

  // Summary cards
  const grid = document.createElement("div");
  grid.className = "analytics-grid";
  grid.innerHTML = `
    <div class="ana-card">
      <div class="ana-card-label">Overall Completion</div>
      <div class="ana-card-val">${op.pct}%</div>
      <div class="ana-card-sub">${op.checked} / ${op.total} checkboxes</div>
    </div>
    <div class="ana-card">
      <div class="ana-card-label">Revision Coverage</div>
      <div class="ana-card-val">${revPct}%</div>
      <div class="ana-card-sub">${revDone} / ${revTotal} chapters Rev1 done</div>
    </div>
    <div class="ana-card">
      <div class="ana-card-label">Current Streak</div>
      <div class="ana-card-val">🔥 ${state.streak.currentStreak}</div>
      <div class="ana-card-sub">Longest: ${state.streak.longestStreak} days</div>
    </div>
    <div class="ana-card">
      <div class="ana-card-label">Last Active</div>
      <div class="ana-card-val" style="font-size:18px">${state.streak.lastActiveDate || "—"}</div>
      <div class="ana-card-sub">Study day recorded</div>
    </div>
  `;
  container.appendChild(grid);

  // Phase bars
  const phaseTitle = document.createElement("div");
  phaseTitle.className = "ana-section-title";
  phaseTitle.textContent = "Phase-wise Progress";
  container.appendChild(phaseTitle);

  ROADMAP.forEach(phase => {
    const pp = phaseProgress(phase);
    const row = document.createElement("div");
    row.className = "ana-bar-row";
    const shortTitle = phase.title.replace("Phase 1: ", "").replace("Phase 2: ", "").replace("Phase 3: ", "").replace("Phase 4: ", "");
    row.innerHTML = `
      <div class="ana-bar-label" title="${phase.title}">${shortTitle.split("(")[0].trim()}</div>
      <div class="ana-bar-track">
        <div class="ana-bar-fill" style="width:${pp.pct}%;background:${phase.color}"></div>
      </div>
      <div class="ana-bar-pct">${pp.pct}%</div>
    `;
    container.appendChild(row);
  });

  // Topic bars
  const topicTitle = document.createElement("div");
  topicTitle.className = "ana-section-title";
  topicTitle.textContent = "Topic-wise Progress";
  container.appendChild(topicTitle);

  ROADMAP.forEach(phase => {
    phase.topics.forEach(topic => {
      const tp = topicProgress(phase, topic);
      const row = document.createElement("div");
      row.className = "ana-bar-row";
      row.innerHTML = `
        <div class="ana-bar-label" title="${topic.title}">${topic.title.split("(")[0].trim()}</div>
        <div class="ana-bar-track">
          <div class="ana-bar-fill" style="width:${tp.pct}%;background:${phase.color}"></div>
        </div>
        <div class="ana-bar-pct">${tp.pct}%</div>
      `;
      container.appendChild(row);
    });
  });

  // Weak areas
  const weakTitle = document.createElement("div");
  weakTitle.className = "ana-section-title";
  weakTitle.textContent = "⚠️ Weak Areas (< 30% but started)";
  container.appendChild(weakTitle);

  const weakList = document.createElement("div");
  weakList.className = "weak-list";
  if (weakTopics.length === 0) {
    weakList.innerHTML = `<span style="color:var(--text3);font-size:13px">No weak areas detected yet!</span>`;
  } else {
    weakTopics.forEach(t => {
      const tag = document.createElement("span");
      tag.className = "weak-tag";
      tag.textContent = t.split("(")[0].trim();
      weakList.appendChild(tag);
    });
  }
  container.appendChild(weakList);
}

/* ─── 18. INIT ─── */
document.addEventListener("DOMContentLoaded", () => {
  loadState();

  // Check if streak was broken
  checkStreakBroken();

  // Render
  render();

  // Streak UI
  renderStreakUI();

  // Target date
  const dateInput = document.getElementById("globalTargetDate");
  if (state.targetDate) dateInput.value = state.targetDate;
  dateInput.addEventListener("change", () => {
    state.targetDate = dateInput.value;
    saveState();
    updateOnTrack();
  });

  // Close sidebar on outside click (mobile)
  document.addEventListener("click", (e) => {
    const sidebar = document.getElementById("sidebar");
    const hamburger = document.getElementById("hamburger");
    if (window.innerWidth <= 768 &&
        sidebar.classList.contains("mobile-open") &&
        !sidebar.contains(e.target) &&
        e.target !== hamburger) {
      sidebar.classList.remove("mobile-open");
    }
  });
});
