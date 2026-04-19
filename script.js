/* =========================================================
GATE CSE + DA TRACKER  v5
========================================================= */

const ROADMAP = [
{id:“phase1”,color:”#5b4fcf”,title:“Phase 1: Foundations (Core Math + Programming)”,topics:[
{id:“t1”,number:“1”,title:“Programming & Problem Solving”,meta:“Common (CSE + DA) | High | Easy-Medium”,subtopics:[
{id:“st1_1”,title:“Basics of Programming”,chapters:[“Basics of Programming”]},
{id:“st1_2”,title:“Variables & Data Types”,chapters:[“Variables, Data Types”]},
{id:“st1_3”,title:“Control Flow”,chapters:[“Control Flow (if, loops)”]},
{id:“st1_4”,title:“Functions & Recursion”,chapters:[“Functions & Recursion”]},
{id:“st1_5”,title:“Complexity Thinking”,chapters:[“Basic Complexity Thinking”,“Time Complexity”,“Space Complexity”]}
]},
{id:“t2”,number:“2”,title:“Discrete Mathematics (Core Math)”,meta:“Common | Very High | Medium | ~10-15%”,subtopics:[
{id:“st2_1”,title:“Logic”,chapters:[“Propositional Logic”,“Predicate Logic”]},
{id:“st2_2”,title:“Set Theory & Relations”,chapters:[“Set Theory & Relations”]},
{id:“st2_3”,title:“Functions & Combinatorics”,chapters:[“Functions”,“Combinatorics”]},
{id:“st2_4”,title:“Graph Theory & Recurrence”,chapters:[“Graph Theory (BASICS)”,“Recurrence Relations”]}
]},
{id:“t3”,number:“3”,title:“Core Probability (Core Math)”,meta:“Common | High | Medium | ~5-8%”,subtopics:[
{id:“st3_1”,title:“Probability Foundations”,chapters:[“Probability Basics”,“Conditional Probability”]},
{id:“st3_2”,title:“Random Variables & Distributions”,chapters:[“Random Variables”,“Distributions (Basic)”]}
]}
]},
{id:“phase2”,color:”#c84b31”,title:“Phase 2: Core CSE (System + Logic Building)”,topics:[
{id:“t4”,number:“4”,title:“Data Structures”,meta:“Common | Very High | Medium | ~10-12%”,subtopics:[
{id:“st4_1”,title:“Linear Structures”,chapters:[“Arrays”,“Linked Lists”,“Stacks & Queues”]},
{id:“st4_2”,title:“Tree Structures”,chapters:[“Trees”,“Binary Trees”,“BST”,“Heaps”]},
{id:“st4_3”,title:“Hashing & Graphs”,chapters:[“Hashing”,“Graphs (Implementation)”]}
]},
{id:“t5”,number:“5”,title:“Algorithms”,meta:“Common | Very High | Hard | ~10-15%”,subtopics:[
{id:“st5_1”,title:“Analysis & Paradigms”,chapters:[“Complexity Analysis”,“Divide & Conquer”,“Greedy Algorithms”,“Dynamic Programming”]},
{id:“st5_2”,title:“Graph Algorithms”,chapters:[“Graph Algorithms”,“BFS, DFS”,“Shortest Paths”,“Backtracking”]}
]},
{id:“t6”,number:“6”,title:“Computer Organization & Architecture (COA)”,meta:“CSE Only | High | Medium | ~8-10%”,subtopics:[
{id:“st6_1”,title:“Digital Fundamentals”,chapters:[“Number Systems”,“Boolean Algebra”]},
{id:“st6_2”,title:“CPU & Memory”,chapters:[“Machine Instructions”,“CPU Organization”,“Memory Hierarchy”]}
]},
{id:“t7”,number:“7”,title:“Operating Systems”,meta:“CSE Only | Very High | Medium | ~10-12%”,subtopics:[
{id:“st7_1”,title:“Processes & Scheduling”,chapters:[“Processes & Threads”,“Scheduling”,“Deadlocks”]},
{id:“st7_2”,title:“Memory & Storage”,chapters:[“Memory Management”,“Virtual Memory”,“File Systems”]}
]},
{id:“t8”,number:“8”,title:“Database Management Systems (DBMS)”,meta:“Common | High | Easy-Medium | ~8-10%”,subtopics:[
{id:“st8_1”,title:“Modeling & Querying”,chapters:[“ER Model”,“Relational Model”,“SQL”]},
{id:“st8_2”,title:“Normalization & Transactions”,chapters:[“Normalization”,“Transactions”,“Concurrency Control”]}
]},
{id:“t9”,number:“9”,title:“Computer Networks (CN)”,meta:“CSE Only | Medium | Medium | ~6-8%”,subtopics:[
{id:“st9_1”,title:“Network Models”,chapters:[“OSI Model”,“TCP/IP”]},
{id:“st9_2”,title:“Routing & Application”,chapters:[“Routing”,“Congestion Control”,“Application Layer”]}
]},
{id:“t10”,number:“10”,title:“Theory of Computation (TOC)”,meta:“CSE Only | Medium-High | Hard | ~6-8%”,subtopics:[
{id:“st10_1”,title:“Automata”,chapters:[“Regular Languages”,“Finite Automata”,“Context-Free Grammars”,“Pushdown Automata”]},
{id:“st10_2”,title:“Computability”,chapters:[“Turing Machines”]}
]}
]},
{id:“phase3”,color:”#2d7a4f”,title:“Phase 3: DA / AI Core (Dependency Math + Application)”,topics:[
{id:“t11”,number:“11”,title:“Linear Algebra (Dependency Math)”,meta:“DA Only | Very High | Medium-Hard | ~10-12%”,subtopics:[
{id:“st11_1”,title:“Vectors & Matrices”,chapters:[“Vectors”,“Matrices”]},
{id:“st11_2”,title:“Eigenvalues & Transformations”,chapters:[“Eigenvalues & Eigenvectors”,“Linear Transformations”]}
]},
{id:“t12”,number:“12”,title:“Statistics (Dependency Math)”,meta:“DA Only | High | Medium | ~8-10%”,subtopics:[
{id:“st12_1”,title:“Descriptive Stats”,chapters:[“Descriptive Statistics”,“Mean, Variance”]},
{id:“st12_2”,title:“Inferential Stats”,chapters:[“Sampling”,“Estimation”,“Hypothesis Testing”]}
]},
{id:“t13”,number:“13”,title:“Machine Learning”,meta:“DA Only | Very High | Medium-Hard | ~15-20%”,subtopics:[
{id:“st13_1”,title:“Supervised Learning”,chapters:[“Supervised Learning”,“Regression”,“Classification”]},
{id:“st13_2”,title:“Unsupervised & Evaluation”,chapters:[“Unsupervised Learning”,“Clustering”,“Model Evaluation”,“Overfitting & Regularization”]}
]},
{id:“t14”,number:“14”,title:“Artificial Intelligence”,meta:“DA Only | Medium | Medium | ~5-8%”,subtopics:[
{id:“st14_1”,title:“Search & Knowledge”,chapters:[“Search Algorithms”,“Knowledge Representation”,“Reasoning”,“Basics of NLP”]}
]}
]},
{id:“phase4”,color:”#b87e0a”,title:“Phase 4: Advanced + Remaining Math”,topics:[
{id:“t15”,number:“15”,title:“Advanced Probability & Statistics”,meta:“DA Only | Medium | Hard | Low-Medium”,subtopics:[
{id:“st15_1”,title:“Advanced Distributions & Inference”,chapters:[“Advanced Distributions”,“Bayesian Methods”,“Advanced Inference”]}
]},
{id:“t16”,number:“16”,title:“Optimization Techniques”,meta:“DA Only | Medium | Hard | ~5-8%”,subtopics:[
{id:“st16_1”,title:“Optimization Methods”,chapters:[“Gradient Descent”,“Convex Optimization”,“Lagrange Multipliers”]}
]},
{id:“t17”,number:“17”,title:“Full Revision + Weak Areas”,meta:“Common | Critical | High | Entire exam”,subtopics:[
{id:“st17_1”,title:“Revision”,chapters:[“Full Revision + Weak Areas”]}
]}
]},
{id:“phaseP”,color:”#0e7490”,title:“General Aptitude (Parallel - Start Day 1)”,topics:[
{id:“tP1”,number:“GA1”,title:“Verbal Ability”,meta:“Common | Very High | Easy-Medium | 15 marks”,subtopics:[
{id:“stP1_1”,title:“Reading & Comprehension”,chapters:[“Reading Comprehension”,“Sentence Completion”,“Vocabulary”,“Grammar”]}
]},
{id:“tP2”,number:“GA2”,title:“Quantitative Aptitude”,meta:“Common | Very High | Easy-Medium | 15 marks”,subtopics:[
{id:“stP2_1”,title:“Arithmetic”,chapters:[“Percentages”,“Ratios”,“Averages”,“Time & Work”,“Profit & Loss”,“Speed, Time & Distance”]}
]},
{id:“tP3”,number:“GA3”,title:“Analytical Ability”,meta:“Common | Very High | Easy-Medium | 15 marks”,subtopics:[
{id:“stP3_1”,title:“Reasoning & Puzzles”,chapters:[“Logical Reasoning”,“Series”,“Puzzles”]}
]}
]}
];

const COLS = [“Video”,“Notes”,“Problems”,“PYQs”,“Rev1”,“Rev2”];
const COL_LABELS = {Video:“Video”,Notes:“Notes”,Problems:“Problems”,PYQs:“PYQs”,Rev1:“Rev 1”,Rev2:“Rev 2”};
const LS_KEY = “gate_tracker_v5”;

var state = {
checks:{}, streak:{lastActiveDate:null,currentStreak:0,longestStreak:0},
targetDate:null, collapsePhase:{}, collapseTopic:{}, collapseSubtopic:{}
};
var recentActions = [];
var pendingChecks = {};
var MIN_HOLD_MS = 5000, BURST_LIMIT = 5, BURST_WINDOW = 5000;

function saveState(){ try{localStorage.setItem(LS_KEY,JSON.stringify(state));}catch(e){} }
function loadState(){
try{
var raw=localStorage.getItem(LS_KEY); if(!raw)return;
var s=JSON.parse(raw);
if(s.checks) state.checks=s.checks;
if(s.streak) state.streak=s.streak;
if(s.targetDate) state.targetDate=s.targetDate;
if(s.collapsePhase) state.collapsePhase=s.collapsePhase;
if(s.collapseTopic) state.collapseTopic=s.collapseTopic;
if(s.collapseSubtopic) state.collapseSubtopic=s.collapseSubtopic;
}catch(e){}
}

function slug(str){ return str.toLowerCase().replace(/[^a-z0-9]+/g,”-”).replace(/^-+|-+$/g,””); }
function cbId(pid,tid,sid,chSlug,col){ return “cb-”+pid+”-”+tid+”-”+sid+”-”+chSlug+”-”+col; }
function rowId(pid,tid,sid,chSlug){ return “row-”+pid+”-”+tid+”-”+sid+”-”+chSlug; }

function chIDs(pid,tid,sid,ch){ return COLS.map(function(col){return cbId(pid,tid,sid,slug(ch),col);}); }
function chStatus(pid,tid,sid,ch){
var ids=chIDs(pid,tid,sid,ch);
var n=ids.filter(function(id){return state.checks[id];}).length;
return n===0?“notstarted”:n===ids.length?“completed”:“inprogress”;
}
function topicProg(phase,topic){
var total=0,checked=0;
topic.subtopics.forEach(function(sub){
sub.chapters.forEach(function(ch){
chIDs(phase.id,topic.id,sub.id,ch).forEach(function(id){total++;if(state.checks[id])checked++;});
});
});
return {total:total,checked:checked,pct:total?Math.round(checked/total*100):0};
}
function phaseProg(phase){
var total=0,checked=0;
phase.topics.forEach(function(t){var p=topicProg(phase,t);total+=p.total;checked+=p.checked;});
return {total:total,checked:checked,pct:total?Math.round(checked/total*100):0};
}
function overallProg(){
var total=0,checked=0;
ROADMAP.forEach(function(ph){var p=phaseProg(ph);total+=p.total;checked+=p.checked;});
return {total:total,checked:checked,pct:total?Math.round(checked/total*100):0};
}

function updateRing(pct){
var circ=2*Math.PI*34;
var ring=document.getElementById(“overallRing”);
if(ring){ring.setAttribute(“stroke-dasharray”,String(circ));ring.setAttribute(“stroke-dashoffset”,String(circ-(pct/100)*circ));}
var el=document.getElementById(“overallPct”);
if(el) el.textContent=pct+”%”;
}

function todayStr(){return new Date().toISOString().slice(0,10);}
function yestStr(){var d=new Date();d.setDate(d.getDate()-1);return d.toISOString().slice(0,10);}
function recordActivity(){
var today=todayStr(),last=state.streak.lastActiveDate;
if(last===today)return;
state.streak.currentStreak=(last===yestStr())?state.streak.currentStreak+1:1;
state.streak.lastActiveDate=today;
state.streak.longestStreak=Math.max(state.streak.longestStreak,state.streak.currentStreak);
saveState(); renderStreakUI();
}
function checkStreakBroken(){
var last=state.streak.lastActiveDate;
if(last&&last!==todayStr()&&last!==yestStr()){state.streak.currentStreak=0;saveState();}
}
function renderStreakUI(){
var cs=document.getElementById(“currentStreak”);
var ls=document.getElementById(“longestStreak”);
var w=document.getElementById(“streakWarn”);
if(cs) cs.textContent=state.streak.currentStreak;
if(ls) ls.textContent=state.streak.longestStreak;
if(!w)return;
var last=state.streak.lastActiveDate;
w.textContent=state.streak.currentStreak>0?(last===todayStr()?“Studied today!”:“Don’t break the streak!”):””;
}

function showAlert(msg,danger){
var bar=document.getElementById(“alertBar”);if(!bar)return;
bar.textContent=msg;bar.className=“alert-bar visible”+(danger?” danger”:””);
clearTimeout(bar._t);bar._t=setTimeout(function(){bar.className=“alert-bar”;},5000);
}
function isBurst(){
var now=Date.now();
recentActions=recentActions.filter(function(t){return now-t<BURST_WINDOW;});
return recentActions.length>=BURST_LIMIT;
}

document.addEventListener(“change”,function(e){
var cb=e.target;
if(cb.type!==“checkbox”||!cb.dataset.cbid)return;
var id=cb.dataset.cbid;
if(cb.checked){
recentActions.push(Date.now());
if(isBurst()){
showAlert(“Suspicious activity detected - progress not counted”,true);
cb.checked=false; state.checks[id]=false; saveState(); updateAllProgress(); return;
}
state.checks[id]=true; saveState(); updateAllProgress();
var snap=Date.now();
pendingChecks[id]=snap;
setTimeout(function(){
if(pendingChecks[id]===snap&&state.checks[id]){
delete pendingChecks[id];
if(id.indexOf(”-Problems-”)>-1||id.indexOf(”-PYQs-”)>-1||id.indexOf(”-Notes-”)>-1) recordActivity();
}
},MIN_HOLD_MS);
} else {
delete pendingChecks[id]; state.checks[id]=false; saveState(); updateAllProgress();
}
});

function mkEl(tag,cls,id){var e=document.createElement(tag);if(cls)e.className=cls;if(id)e.id=id;return e;}

function render(){
try{
var root=document.getElementById(“roadmapRoot”);
if(!root){console.error(“roadmapRoot not found”);return;}
root.innerHTML=””;
ROADMAP.forEach(function(phase){root.appendChild(buildPhase(phase));});
updateAllProgress(); buildNavPhases();
}catch(err){
console.error(“render() failed:”,err);
var r=document.getElementById(“roadmapRoot”);
if(r) r.innerHTML=’<div style="padding:20px;color:red">Render error: ‘+err.message+’</div>’;
}
}

function buildPhase(phase){
var collapsed=state.collapsePhase[phase.id]===true;
var block=mkEl(“div”,“phase-block”,“phase_”+phase.id);
var bw=mkEl(“div”,“phase-progress-bar-wrap”);
var b=mkEl(“div”,“phase-progress-bar”,“phasebar_”+phase.id);
b.style.background=phase.color; b.style.width=“0%”; bw.appendChild(b); block.appendChild(bw);
var hdr=mkEl(“div”,“phase-header”);
var dot=mkEl(“div”,“phase-color-dot”); dot.style.background=phase.color;
var ttl=mkEl(“div”,“phase-title”,“phasetitle_”+phase.id); ttl.textContent=phase.title;
var bdg=mkEl(“span”,“phase-badge”,“phasebadge_”+phase.id); bdg.textContent=“0%”;
var tog=mkEl(“span”,“phase-toggle”+(collapsed?””:” open”),“phasetoggle_”+phase.id); tog.textContent=“v”;
hdr.appendChild(dot); hdr.appendChild(ttl); hdr.appendChild(bdg); hdr.appendChild(tog);
hdr.addEventListener(“click”,function(){togglePhase(phase.id);}); block.appendChild(hdr);
var body=mkEl(“div”,“phase-body”+(collapsed?” collapsed”:””),“phasebody_”+phase.id);
phase.topics.forEach(function(topic){body.appendChild(buildTopic(phase,topic));});
block.appendChild(body); return block;
}

function buildTopic(phase,topic){
var collapsed=state.collapseTopic[topic.id]===true;
var block=mkEl(“div”,“topic-block”,“topic_”+topic.id);
var hdr=mkEl(“div”,“topic-header”);
var num=mkEl(“span”,“topic-number”); num.textContent=topic.number+”.”;
var ttl=mkEl(“span”,“topic-title”); ttl.textContent=topic.title;
var meta=mkEl(“span”,“topic-meta”); meta.textContent=topic.meta;
var pct=mkEl(“span”,“topic-pct”,“topicpct_”+topic.id); pct.textContent=“0%”;
var tog=mkEl(“span”,“topic-toggle”+(collapsed?””:” open”),“topictoggle_”+topic.id); tog.textContent=“v”;
hdr.appendChild(num); hdr.appendChild(ttl); hdr.appendChild(meta); hdr.appendChild(pct); hdr.appendChild(tog);
hdr.addEventListener(“click”,function(){toggleTopic(topic.id);}); block.appendChild(hdr);
var body=mkEl(“div”,“topic-body”+(collapsed?” collapsed”:””),“topicbody_”+topic.id);
topic.subtopics.forEach(function(sub){body.appendChild(buildSub(phase,topic,sub));});
block.appendChild(body); return block;
}

function buildSub(phase,topic,sub){
var collapsed=state.collapseSubtopic[sub.id]===true;
var block=mkEl(“div”,“subtopic-block”,“subtopic_”+sub.id);
var hdr=mkEl(“div”,“subtopic-header”);
var ttl=mkEl(“span”,“subtopic-title”); ttl.textContent=”[+] “+sub.title;
var tog=mkEl(“span”,“subtopic-toggle”+(collapsed?””:” open”),“subtopictoggle_”+sub.id); tog.textContent=“v”;
hdr.appendChild(ttl); hdr.appendChild(tog);
hdr.addEventListener(“click”,function(){toggleSub(sub.id);}); block.appendChild(hdr);
var body=mkEl(“div”,“subtopic-body”+(collapsed?” collapsed”:””),“subtopicbody_”+sub.id);
body.appendChild(buildTable(phase,topic,sub)); block.appendChild(body); return block;
}

function buildTable(phase,topic,sub){
var wrap=mkEl(“div”,“chapter-table-wrap”);
var table=mkEl(“table”,“chapter-table”);
var thead=document.createElement(“thead”);
var hrow=document.createElement(“tr”);
var thCh=document.createElement(“th”); thCh.textContent=“Chapter”; hrow.appendChild(thCh);
COLS.forEach(function(col){var th=document.createElement(“th”);th.textContent=COL_LABELS[col];hrow.appendChild(th);});
thead.appendChild(hrow); table.appendChild(thead);
var tbody=document.createElement(“tbody”);
sub.chapters.forEach(function(ch){
var sl=slug(ch);
var rid=rowId(phase.id,topic.id,sub.id,sl);
var tr=mkEl(“tr”,“chapter-row notstarted”,rid);
tr.dataset.chapter=ch.toLowerCase(); tr.dataset.phase=phase.id;
tr.dataset.topic=topic.id; tr.dataset.sub=sub.id; tr.dataset.slug=sl;
var nameTd=document.createElement(“td”);
var dot=mkEl(“span”,“status-dot”,“status_”+rid); dot.textContent=”[x]”;
nameTd.appendChild(dot); nameTd.appendChild(document.createTextNode(ch)); tr.appendChild(nameTd);
COLS.forEach(function(col){
var td=document.createElement(“td”);
var w2=document.createElement(“div”); w2.className=“cb-wrap”;
var cbEl=document.createElement(“input”);
var cbid=cbId(phase.id,topic.id,sub.id,sl,col);
cbEl.type=“checkbox”; cbEl.id=cbid; cbEl.dataset.cbid=cbid;
cbEl.checked=!!state.checks[cbid];
w2.appendChild(cbEl); td.appendChild(w2); tr.appendChild(td);
});
tbody.appendChild(tr);
});
table.appendChild(tbody); wrap.appendChild(table); return wrap;
}

function togglePhase(pid){
var body=document.getElementById(“phasebody_”+pid);
var tog=document.getElementById(“phasetoggle_”+pid);
if(!body||!tog)return;
var c=body.classList.toggle(“collapsed”);
tog.classList.toggle(“open”,!c); state.collapsePhase[pid]=c; saveState();
}
function toggleTopic(tid){
var body=document.getElementById(“topicbody_”+tid);
var tog=document.getElementById(“topictoggle_”+tid);
if(!body||!tog)return;
var c=body.classList.toggle(“collapsed”);
tog.classList.toggle(“open”,!c); state.collapseTopic[tid]=c; saveState();
}
function toggleSub(sid){
var body=document.getElementById(“subtopicbody_”+sid);
var tog=document.getElementById(“subtopictoggle_”+sid);
if(!body||!tog)return;
var c=body.classList.toggle(“collapsed”);
tog.classList.toggle(“open”,!c); state.collapseSubtopic[sid]=c; saveState();
}

function updateAllProgress(){
var op=overallProg(); updateRing(op.pct);
ROADMAP.forEach(function(phase){
var pp=phaseProg(phase);
var bar=document.getElementById(“phasebar_”+phase.id);
var bdg=document.getElementById(“phasebadge_”+phase.id);
var ttl=document.getElementById(“phasetitle_”+phase.id);
if(bar) bar.style.width=pp.pct+”%”;
if(bdg) bdg.textContent=pp.pct+”%”;
if(ttl) ttl.textContent=phase.title.replace(” [done]”,””)+(pp.pct===100?” [done]”:””);
phase.topics.forEach(function(topic){
var tp=topicProg(phase,topic);
var pel=document.getElementById(“topicpct_”+topic.id);
if(pel) pel.textContent=tp.pct+”%”;
topic.subtopics.forEach(function(sub){
sub.chapters.forEach(function(ch){
var sl=slug(ch);
var rid=rowId(phase.id,topic.id,sub.id,sl);
var row=document.getElementById(rid);
var dot=document.getElementById(“status_”+rid);
if(!row)return;
var st=chStatus(phase.id,topic.id,sub.id,ch);
var hidden=row.classList.contains(“hidden-row”)?” hidden-row”:””;
row.className=“chapter-row “+st+hidden;
if(dot) dot.textContent=st===“completed”?”[ok]”:st===“inprogress”?”[~]”:”[x]”;
});
});
});
});
buildNavPhases(); updateOnTrack(); applyFilters();
}

function buildNavPhases(){
var nav=document.getElementById(“navPhases”); if(!nav)return; nav.innerHTML=””;
ROADMAP.forEach(function(phase,i){
var pp=phaseProg(phase);
var btn=mkEl(“button”,“nav-phase-btn”);
var short=phase.title.replace(/^Phase \d+:\s*/,“Ph”+(i+1)+” “).replace(“General Aptitude”,“GA”).split(”(”)[0].trim();
if(short.length>28) short=short.slice(0,28)+”…”;
var lbl=document.createElement(“span”); lbl.textContent=short;
var psp=mkEl(“span”,“nav-phase-pct”); psp.textContent=pp.pct+”%”;
btn.appendChild(lbl); btn.appendChild(psp);
(function(pid){btn.addEventListener(“click”,function(){
var t=document.getElementById(“phase_”+pid); if(t)t.scrollIntoView({behavior:“smooth”,block:“start”});
});})(phase.id);
nav.appendChild(btn);
});
}

function initSearch(){
var inp=document.getElementById(“searchInput”);
var clr=document.getElementById(“searchClear”);
if(!inp)return;
inp.addEventListener(“input”,function(){
if(clr) clr.classList.toggle(“visible”,inp.value.length>0); applyFilters();
});
}
function clearSearch(){
var inp=document.getElementById(“searchInput”); var clr=document.getElementById(“searchClear”);
if(inp) inp.value=””; if(clr) clr.classList.remove(“visible”); applyFilters();
}

var activeFilters={incomplete:false,revision:false};
function toggleFilter(type){
activeFilters[type]=!activeFilters[type];
var key=type.charAt(0).toUpperCase()+type.slice(1);
var chip=document.getElementById(“chip”+key);
if(chip) chip.classList.toggle(“active”,activeFilters[type]); applyFilters();
}
function applyFilters(){
var inp=document.getElementById(“searchInput”);
var q=inp?inp.value.toLowerCase().trim():””;
document.querySelectorAll(”.chapter-row”).forEach(function(row){
var ch=row.dataset.chapter||””;
var pid=row.dataset.phase,tid=row.dataset.topic,sid=row.dataset.sub,sl=row.dataset.slug;
var vis=true;
if(q&&ch.indexOf(q)<0) vis=false;
if(vis&&activeFilters.incomplete&&row.classList.contains(“completed”)) vis=false;
if(vis&&activeFilters.revision){
var any=COLS.some(function(c){return state.checks[cbId(pid,tid,sid,sl,c)];});
var r1=state.checks[cbId(pid,tid,sid,sl,“Rev1”)];
var r2=state.checks[cbId(pid,tid,sid,sl,“Rev2”)];
if(!any||(r1&&r2)) vis=false;
}
row.classList.toggle(“hidden-row”,!vis);
});
}

function toggleSidebar(){
var sb=document.getElementById(“sidebar”);
var main=document.getElementById(“mainContent”);
if(window.innerWidth<=768){sb.classList.toggle(“mobile-open”);}
else{var hidden=sb.classList.toggle(“hidden”);if(main)main.classList.toggle(“full”,hidden);}
}

function updateOnTrack(){
var el2=document.getElementById(“onTrackStatus”);
var inp=document.getElementById(“globalTargetDate”);
if(!el2||!inp||!inp.value){if(el2)el2.textContent=””;return;}
var days=Math.ceil((new Date(inp.value)-new Date())/86400000);
var op=overallProg();
if(days<=0){el2.textContent=“Target passed!”;el2.className=“on-track behind”;}
else{var need=(100-op.pct)/days;el2.textContent=need<=1.5?“On track (”+days+“d left)”:“Behind (”+days+“d left)”;el2.className=“on-track “+(need<=1.5?“ok”:“behind”);}
}

function openAnalytics(){document.getElementById(“analyticsModal”).classList.add(“open”);renderAnalytics();}
function closeAnalytics(e){if(!e||e.target.id===“analyticsModal”)document.getElementById(“analyticsModal”).classList.remove(“open”);}

function renderAnalytics(){
var op=overallProg(),revTotal=0,revDone=0;
ROADMAP.forEach(function(ph){ph.topics.forEach(function(t){t.subtopics.forEach(function(s){s.chapters.forEach(function(ch){
revTotal++; if(state.checks[cbId(ph.id,t.id,s.id,slug(ch),“Rev1”)]) revDone++;
});});});});
var revPct=revTotal?Math.round(revDone/revTotal*100):0;
var weak=[];
ROADMAP.forEach(function(ph){ph.topics.forEach(function(t){var tp=topicProg(ph,t);if(tp.pct<30&&tp.checked>0)weak.push(t.title+” (”+tp.pct+”%)”);}); });
var c=document.getElementById(“analyticsContent”); c.innerHTML=””;
var g=mkEl(“div”,“analytics-grid”);
g.innerHTML=’<div class="ana-card"><div class="ana-card-label">Overall</div><div class="ana-card-val">’+op.pct+’%</div><div class="ana-card-sub">’+op.checked+”/”+op.total+” boxes</div></div>”+
‘<div class="ana-card"><div class="ana-card-label">Revision Coverage</div><div class="ana-card-val">’+revPct+’%</div><div class="ana-card-sub">’+revDone+”/”+revTotal+” Rev1</div></div>”+
‘<div class="ana-card"><div class="ana-card-label">Streak</div><div class="ana-card-val">’+state.streak.currentStreak+’</div><div class="ana-card-sub">Best: ‘+state.streak.longestStreak+”</div></div>”+
‘<div class="ana-card"><div class="ana-card-label">Last Active</div><div class="ana-card-val" style="font-size:16px">’+(state.streak.lastActiveDate||”-”)+”</div></div>”;
c.appendChild(g);
addTitle(c,“Phase-wise Progress”);
ROADMAP.forEach(function(ph){var pp=phaseProg(ph);addBar(c,ph.title.split(”:”).pop().trim().split(”(”)[0].trim(),pp.pct,ph.color);});
addTitle(c,“Topic-wise Progress”);
ROADMAP.forEach(function(ph){ph.topics.forEach(function(t){var tp=topicProg(ph,t);addBar(c,t.title.split(”(”)[0].trim(),tp.pct,ph.color);});});
addTitle(c,“Weak Areas (less than 30% started)”);
var wl=mkEl(“div”,“weak-list”);
if(!weak.length){wl.innerHTML=’<span style="color:var(--text3);font-size:13px">None yet!</span>’;}
else{weak.forEach(function(w){var tag=mkEl(“span”,“weak-tag”);tag.textContent=w;wl.appendChild(tag);});}
c.appendChild(wl);
}
function addTitle(p,txt){var d=mkEl(“div”,“ana-section-title”);d.textContent=txt;p.appendChild(d);}
function addBar(p,label,pct,color){
var r=mkEl(“div”,“ana-bar-row”);
r.innerHTML=’<div class="ana-bar-label" title="'+label+'">’+label+’</div><div class="ana-bar-track"><div class="ana-bar-fill" style="width:'+pct+'%;background:'+color+'"></div></div><div class="ana-bar-pct">’+pct+’%</div>’;
p.appendChild(r);
}

document.addEventListener(“DOMContentLoaded”,function(){
loadState(); checkStreakBroken(); render(); renderStreakUI(); initSearch();
var di=document.getElementById(“globalTargetDate”);
if(di){
if(state.targetDate) di.value=state.targetDate;
di.addEventListener(“change”,function(){state.targetDate=di.value;saveState();updateOnTrack();});
}
document.addEventListener(“click”,function(e){
var sb=document.getElementById(“sidebar”);
var hbg=document.getElementById(“hamburger”);
if(window.innerWidth<=768&&sb&&sb.classList.contains(“mobile-open”)&&!sb.contains(e.target)&&e.target!==hbg)
sb.classList.remove(“mobile-open”);
});
});/* =========================================================
GATE CSE + DA TRACKER  v5
========================================================= */

const ROADMAP = [
{id:“phase1”,color:”#5b4fcf”,title:“Phase 1: Foundations (Core Math + Programming)”,topics:[
{id:“t1”,number:“1”,title:“Programming & Problem Solving”,meta:“Common (CSE + DA) | High | Easy-Medium”,subtopics:[
{id:“st1_1”,title:“Basics of Programming”,chapters:[“Basics of Programming”]},
{id:“st1_2”,title:“Variables & Data Types”,chapters:[“Variables, Data Types”]},
{id:“st1_3”,title:“Control Flow”,chapters:[“Control Flow (if, loops)”]},
{id:“st1_4”,title:“Functions & Recursion”,chapters:[“Functions & Recursion”]},
{id:“st1_5”,title:“Complexity Thinking”,chapters:[“Basic Complexity Thinking”,“Time Complexity”,“Space Complexity”]}
]},
{id:“t2”,number:“2”,title:“Discrete Mathematics (Core Math)”,meta:“Common | Very High | Medium | ~10-15%”,subtopics:[
{id:“st2_1”,title:“Logic”,chapters:[“Propositional Logic”,“Predicate Logic”]},
{id:“st2_2”,title:“Set Theory & Relations”,chapters:[“Set Theory & Relations”]},
{id:“st2_3”,title:“Functions & Combinatorics”,chapters:[“Functions”,“Combinatorics”]},
{id:“st2_4”,title:“Graph Theory & Recurrence”,chapters:[“Graph Theory (BASICS)”,“Recurrence Relations”]}
]},
{id:“t3”,number:“3”,title:“Core Probability (Core Math)”,meta:“Common | High | Medium | ~5-8%”,subtopics:[
{id:“st3_1”,title:“Probability Foundations”,chapters:[“Probability Basics”,“Conditional Probability”]},
{id:“st3_2”,title:“Random Variables & Distributions”,chapters:[“Random Variables”,“Distributions (Basic)”]}
]}
]},
{id:“phase2”,color:”#c84b31”,title:“Phase 2: Core CSE (System + Logic Building)”,topics:[
{id:“t4”,number:“4”,title:“Data Structures”,meta:“Common | Very High | Medium | ~10-12%”,subtopics:[
{id:“st4_1”,title:“Linear Structures”,chapters:[“Arrays”,“Linked Lists”,“Stacks & Queues”]},
{id:“st4_2”,title:“Tree Structures”,chapters:[“Trees”,“Binary Trees”,“BST”,“Heaps”]},
{id:“st4_3”,title:“Hashing & Graphs”,chapters:[“Hashing”,“Graphs (Implementation)”]}
]},
{id:“t5”,number:“5”,title:“Algorithms”,meta:“Common | Very High | Hard | ~10-15%”,subtopics:[
{id:“st5_1”,title:“Analysis & Paradigms”,chapters:[“Complexity Analysis”,“Divide & Conquer”,“Greedy Algorithms”,“Dynamic Programming”]},
{id:“st5_2”,title:“Graph Algorithms”,chapters:[“Graph Algorithms”,“BFS, DFS”,“Shortest Paths”,“Backtracking”]}
]},
{id:“t6”,number:“6”,title:“Computer Organization & Architecture (COA)”,meta:“CSE Only | High | Medium | ~8-10%”,subtopics:[
{id:“st6_1”,title:“Digital Fundamentals”,chapters:[“Number Systems”,“Boolean Algebra”]},
{id:“st6_2”,title:“CPU & Memory”,chapters:[“Machine Instructions”,“CPU Organization”,“Memory Hierarchy”]}
]},
{id:“t7”,number:“7”,title:“Operating Systems”,meta:“CSE Only | Very High | Medium | ~10-12%”,subtopics:[
{id:“st7_1”,title:“Processes & Scheduling”,chapters:[“Processes & Threads”,“Scheduling”,“Deadlocks”]},
{id:“st7_2”,title:“Memory & Storage”,chapters:[“Memory Management”,“Virtual Memory”,“File Systems”]}
]},
{id:“t8”,number:“8”,title:“Database Management Systems (DBMS)”,meta:“Common | High | Easy-Medium | ~8-10%”,subtopics:[
{id:“st8_1”,title:“Modeling & Querying”,chapters:[“ER Model”,“Relational Model”,“SQL”]},
{id:“st8_2”,title:“Normalization & Transactions”,chapters:[“Normalization”,“Transactions”,“Concurrency Control”]}
]},
{id:“t9”,number:“9”,title:“Computer Networks (CN)”,meta:“CSE Only | Medium | Medium | ~6-8%”,subtopics:[
{id:“st9_1”,title:“Network Models”,chapters:[“OSI Model”,“TCP/IP”]},
{id:“st9_2”,title:“Routing & Application”,chapters:[“Routing”,“Congestion Control”,“Application Layer”]}
]},
{id:“t10”,number:“10”,title:“Theory of Computation (TOC)”,meta:“CSE Only | Medium-High | Hard | ~6-8%”,subtopics:[
{id:“st10_1”,title:“Automata”,chapters:[“Regular Languages”,“Finite Automata”,“Context-Free Grammars”,“Pushdown Automata”]},
{id:“st10_2”,title:“Computability”,chapters:[“Turing Machines”]}
]}
]},
{id:“phase3”,color:”#2d7a4f”,title:“Phase 3: DA / AI Core (Dependency Math + Application)”,topics:[
{id:“t11”,number:“11”,title:“Linear Algebra (Dependency Math)”,meta:“DA Only | Very High | Medium-Hard | ~10-12%”,subtopics:[
{id:“st11_1”,title:“Vectors & Matrices”,chapters:[“Vectors”,“Matrices”]},
{id:“st11_2”,title:“Eigenvalues & Transformations”,chapters:[“Eigenvalues & Eigenvectors”,“Linear Transformations”]}
]},
{id:“t12”,number:“12”,title:“Statistics (Dependency Math)”,meta:“DA Only | High | Medium | ~8-10%”,subtopics:[
{id:“st12_1”,title:“Descriptive Stats”,chapters:[“Descriptive Statistics”,“Mean, Variance”]},
{id:“st12_2”,title:“Inferential Stats”,chapters:[“Sampling”,“Estimation”,“Hypothesis Testing”]}
]},
{id:“t13”,number:“13”,title:“Machine Learning”,meta:“DA Only | Very High | Medium-Hard | ~15-20%”,subtopics:[
{id:“st13_1”,title:“Supervised Learning”,chapters:[“Supervised Learning”,“Regression”,“Classification”]},
{id:“st13_2”,title:“Unsupervised & Evaluation”,chapters:[“Unsupervised Learning”,“Clustering”,“Model Evaluation”,“Overfitting & Regularization”]}
]},
{id:“t14”,number:“14”,title:“Artificial Intelligence”,meta:“DA Only | Medium | Medium | ~5-8%”,subtopics:[
{id:“st14_1”,title:“Search & Knowledge”,chapters:[“Search Algorithms”,“Knowledge Representation”,“Reasoning”,“Basics of NLP”]}
]}
]},
{id:“phase4”,color:”#b87e0a”,title:“Phase 4: Advanced + Remaining Math”,topics:[
{id:“t15”,number:“15”,title:“Advanced Probability & Statistics”,meta:“DA Only | Medium | Hard | Low-Medium”,subtopics:[
{id:“st15_1”,title:“Advanced Distributions & Inference”,chapters:[“Advanced Distributions”,“Bayesian Methods”,“Advanced Inference”]}
]},
{id:“t16”,number:“16”,title:“Optimization Techniques”,meta:“DA Only | Medium | Hard | ~5-8%”,subtopics:[
{id:“st16_1”,title:“Optimization Methods”,chapters:[“Gradient Descent”,“Convex Optimization”,“Lagrange Multipliers”]}
]},
{id:“t17”,number:“17”,title:“Full Revision + Weak Areas”,meta:“Common | Critical | High | Entire exam”,subtopics:[
{id:“st17_1”,title:“Revision”,chapters:[“Full Revision + Weak Areas”]}
]}
]},
{id:“phaseP”,color:”#0e7490”,title:“General Aptitude (Parallel - Start Day 1)”,topics:[
{id:“tP1”,number:“GA1”,title:“Verbal Ability”,meta:“Common | Very High | Easy-Medium | 15 marks”,subtopics:[
{id:“stP1_1”,title:“Reading & Comprehension”,chapters:[“Reading Comprehension”,“Sentence Completion”,“Vocabulary”,“Grammar”]}
]},
{id:“tP2”,number:“GA2”,title:“Quantitative Aptitude”,meta:“Common | Very High | Easy-Medium | 15 marks”,subtopics:[
{id:“stP2_1”,title:“Arithmetic”,chapters:[“Percentages”,“Ratios”,“Averages”,“Time & Work”,“Profit & Loss”,“Speed, Time & Distance”]}
]},
{id:“tP3”,number:“GA3”,title:“Analytical Ability”,meta:“Common | Very High | Easy-Medium | 15 marks”,subtopics:[
{id:“stP3_1”,title:“Reasoning & Puzzles”,chapters:[“Logical Reasoning”,“Series”,“Puzzles”]}
]}
]}
];

const COLS = [“Video”,“Notes”,“Problems”,“PYQs”,“Rev1”,“Rev2”];
const COL_LABELS = {Video:“Video”,Notes:“Notes”,Problems:“Problems”,PYQs:“PYQs”,Rev1:“Rev 1”,Rev2:“Rev 2”};
const LS_KEY = “gate_tracker_v5”;

var state = {
checks:{}, streak:{lastActiveDate:null,currentStreak:0,longestStreak:0},
targetDate:null, collapsePhase:{}, collapseTopic:{}, collapseSubtopic:{}
};
var recentActions = [];
var pendingChecks = {};
var MIN_HOLD_MS = 5000, BURST_LIMIT = 5, BURST_WINDOW = 5000;

function saveState(){ try{localStorage.setItem(LS_KEY,JSON.stringify(state));}catch(e){} }
function loadState(){
try{
var raw=localStorage.getItem(LS_KEY); if(!raw)return;
var s=JSON.parse(raw);
if(s.checks) state.checks=s.checks;
if(s.streak) state.streak=s.streak;
if(s.targetDate) state.targetDate=s.targetDate;
if(s.collapsePhase) state.collapsePhase=s.collapsePhase;
if(s.collapseTopic) state.collapseTopic=s.collapseTopic;
if(s.collapseSubtopic) state.collapseSubtopic=s.collapseSubtopic;
}catch(e){}
}

function slug(str){ return str.toLowerCase().replace(/[^a-z0-9]+/g,”-”).replace(/^-+|-+$/g,””); }
function cbId(pid,tid,sid,chSlug,col){ return “cb-”+pid+”-”+tid+”-”+sid+”-”+chSlug+”-”+col; }
function rowId(pid,tid,sid,chSlug){ return “row-”+pid+”-”+tid+”-”+sid+”-”+chSlug; }

function chIDs(pid,tid,sid,ch){ return COLS.map(function(col){return cbId(pid,tid,sid,slug(ch),col);}); }
function chStatus(pid,tid,sid,ch){
var ids=chIDs(pid,tid,sid,ch);
var n=ids.filter(function(id){return state.checks[id];}).length;
return n===0?“notstarted”:n===ids.length?“completed”:“inprogress”;
}
function topicProg(phase,topic){
var total=0,checked=0;
topic.subtopics.forEach(function(sub){
sub.chapters.forEach(function(ch){
chIDs(phase.id,topic.id,sub.id,ch).forEach(function(id){total++;if(state.checks[id])checked++;});
});
});
return {total:total,checked:checked,pct:total?Math.round(checked/total*100):0};
}
function phaseProg(phase){
var total=0,checked=0;
phase.topics.forEach(function(t){var p=topicProg(phase,t);total+=p.total;checked+=p.checked;});
return {total:total,checked:checked,pct:total?Math.round(checked/total*100):0};
}
function overallProg(){
var total=0,checked=0;
ROADMAP.forEach(function(ph){var p=phaseProg(ph);total+=p.total;checked+=p.checked;});
return {total:total,checked:checked,pct:total?Math.round(checked/total*100):0};
}

function updateRing(pct){
var circ=2*Math.PI*34;
var ring=document.getElementById(“overallRing”);
if(ring){ring.setAttribute(“stroke-dasharray”,String(circ));ring.setAttribute(“stroke-dashoffset”,String(circ-(pct/100)*circ));}
var el=document.getElementById(“overallPct”);
if(el) el.textContent=pct+”%”;
}

function todayStr(){return new Date().toISOString().slice(0,10);}
function yestStr(){var d=new Date();d.setDate(d.getDate()-1);return d.toISOString().slice(0,10);}
function recordActivity(){
var today=todayStr(),last=state.streak.lastActiveDate;
if(last===today)return;
state.streak.currentStreak=(last===yestStr())?state.streak.currentStreak+1:1;
state.streak.lastActiveDate=today;
state.streak.longestStreak=Math.max(state.streak.longestStreak,state.streak.currentStreak);
saveState(); renderStreakUI();
}
function checkStreakBroken(){
var last=state.streak.lastActiveDate;
if(last&&last!==todayStr()&&last!==yestStr()){state.streak.currentStreak=0;saveState();}
}
function renderStreakUI(){
var cs=document.getElementById(“currentStreak”);
var ls=document.getElementById(“longestStreak”);
var w=document.getElementById(“streakWarn”);
if(cs) cs.textContent=state.streak.currentStreak;
if(ls) ls.textContent=state.streak.longestStreak;
if(!w)return;
var last=state.streak.lastActiveDate;
w.textContent=state.streak.currentStreak>0?(last===todayStr()?“Studied today!”:“Don’t break the streak!”):””;
}

function showAlert(msg,danger){
var bar=document.getElementById(“alertBar”);if(!bar)return;
bar.textContent=msg;bar.className=“alert-bar visible”+(danger?” danger”:””);
clearTimeout(bar._t);bar._t=setTimeout(function(){bar.className=“alert-bar”;},5000);
}
function isBurst(){
var now=Date.now();
recentActions=recentActions.filter(function(t){return now-t<BURST_WINDOW;});
return recentActions.length>=BURST_LIMIT;
}

document.addEventListener(“change”,function(e){
var cb=e.target;
if(cb.type!==“checkbox”||!cb.dataset.cbid)return;
var id=cb.dataset.cbid;
if(cb.checked){
recentActions.push(Date.now());
if(isBurst()){
showAlert(“Suspicious activity detected - progress not counted”,true);
cb.checked=false; state.checks[id]=false; saveState(); updateAllProgress(); return;
}
state.checks[id]=true; saveState(); updateAllProgress();
var snap=Date.now();
pendingChecks[id]=snap;
setTimeout(function(){
if(pendingChecks[id]===snap&&state.checks[id]){
delete pendingChecks[id];
if(id.indexOf(”-Problems-”)>-1||id.indexOf(”-PYQs-”)>-1||id.indexOf(”-Notes-”)>-1) recordActivity();
}
},MIN_HOLD_MS);
} else {
delete pendingChecks[id]; state.checks[id]=false; saveState(); updateAllProgress();
}
});

function mkEl(tag,cls,id){var e=document.createElement(tag);if(cls)e.className=cls;if(id)e.id=id;return e;}

function render(){
try{
var root=document.getElementById(“roadmapRoot”);
if(!root){console.error(“roadmapRoot not found”);return;}
root.innerHTML=””;
ROADMAP.forEach(function(phase){root.appendChild(buildPhase(phase));});
updateAllProgress(); buildNavPhases();
}catch(err){
console.error(“render() failed:”,err);
var r=document.getElementById(“roadmapRoot”);
if(r) r.innerHTML=’<div style="padding:20px;color:red">Render error: ‘+err.message+’</div>’;
}
}

function buildPhase(phase){
var collapsed=state.collapsePhase[phase.id]===true;
var block=mkEl(“div”,“phase-block”,“phase_”+phase.id);
var bw=mkEl(“div”,“phase-progress-bar-wrap”);
var b=mkEl(“div”,“phase-progress-bar”,“phasebar_”+phase.id);
b.style.background=phase.color; b.style.width=“0%”; bw.appendChild(b); block.appendChild(bw);
var hdr=mkEl(“div”,“phase-header”);
var dot=mkEl(“div”,“phase-color-dot”); dot.style.background=phase.color;
var ttl=mkEl(“div”,“phase-title”,“phasetitle_”+phase.id); ttl.textContent=phase.title;
var bdg=mkEl(“span”,“phase-badge”,“phasebadge_”+phase.id); bdg.textContent=“0%”;
var tog=mkEl(“span”,“phase-toggle”+(collapsed?””:” open”),“phasetoggle_”+phase.id); tog.textContent=“v”;
hdr.appendChild(dot); hdr.appendChild(ttl); hdr.appendChild(bdg); hdr.appendChild(tog);
hdr.addEventListener(“click”,function(){togglePhase(phase.id);}); block.appendChild(hdr);
var body=mkEl(“div”,“phase-body”+(collapsed?” collapsed”:””),“phasebody_”+phase.id);
phase.topics.forEach(function(topic){body.appendChild(buildTopic(phase,topic));});
block.appendChild(body); return block;
}

function buildTopic(phase,topic){
var collapsed=state.collapseTopic[topic.id]===true;
var block=mkEl(“div”,“topic-block”,“topic_”+topic.id);
var hdr=mkEl(“div”,“topic-header”);
var num=mkEl(“span”,“topic-number”); num.textContent=topic.number+”.”;
var ttl=mkEl(“span”,“topic-title”); ttl.textContent=topic.title;
var meta=mkEl(“span”,“topic-meta”); meta.textContent=topic.meta;
var pct=mkEl(“span”,“topic-pct”,“topicpct_”+topic.id); pct.textContent=“0%”;
var tog=mkEl(“span”,“topic-toggle”+(collapsed?””:” open”),“topictoggle_”+topic.id); tog.textContent=“v”;
hdr.appendChild(num); hdr.appendChild(ttl); hdr.appendChild(meta); hdr.appendChild(pct); hdr.appendChild(tog);
hdr.addEventListener(“click”,function(){toggleTopic(topic.id);}); block.appendChild(hdr);
var body=mkEl(“div”,“topic-body”+(collapsed?” collapsed”:””),“topicbody_”+topic.id);
topic.subtopics.forEach(function(sub){body.appendChild(buildSub(phase,topic,sub));});
block.appendChild(body); return block;
}

function buildSub(phase,topic,sub){
var collapsed=state.collapseSubtopic[sub.id]===true;
var block=mkEl(“div”,“subtopic-block”,“subtopic_”+sub.id);
var hdr=mkEl(“div”,“subtopic-header”);
var ttl=mkEl(“span”,“subtopic-title”); ttl.textContent=”[+] “+sub.title;
var tog=mkEl(“span”,“subtopic-toggle”+(collapsed?””:” open”),“subtopictoggle_”+sub.id); tog.textContent=“v”;
hdr.appendChild(ttl); hdr.appendChild(tog);
hdr.addEventListener(“click”,function(){toggleSub(sub.id);}); block.appendChild(hdr);
var body=mkEl(“div”,“subtopic-body”+(collapsed?” collapsed”:””),“subtopicbody_”+sub.id);
body.appendChild(buildTable(phase,topic,sub)); block.appendChild(body); return block;
}

function buildTable(phase,topic,sub){
var wrap=mkEl(“div”,“chapter-table-wrap”);
var table=mkEl(“table”,“chapter-table”);
var thead=document.createElement(“thead”);
var hrow=document.createElement(“tr”);
var thCh=document.createElement(“th”); thCh.textContent=“Chapter”; hrow.appendChild(thCh);
COLS.forEach(function(col){var th=document.createElement(“th”);th.textContent=COL_LABELS[col];hrow.appendChild(th);});
thead.appendChild(hrow); table.appendChild(thead);
var tbody=document.createElement(“tbody”);
sub.chapters.forEach(function(ch){
var sl=slug(ch);
var rid=rowId(phase.id,topic.id,sub.id,sl);
var tr=mkEl(“tr”,“chapter-row notstarted”,rid);
tr.dataset.chapter=ch.toLowerCase(); tr.dataset.phase=phase.id;
tr.dataset.topic=topic.id; tr.dataset.sub=sub.id; tr.dataset.slug=sl;
var nameTd=document.createElement(“td”);
var dot=mkEl(“span”,“status-dot”,“status_”+rid); dot.textContent=”[x]”;
nameTd.appendChild(dot); nameTd.appendChild(document.createTextNode(ch)); tr.appendChild(nameTd);
COLS.forEach(function(col){
var td=document.createElement(“td”);
var w2=document.createElement(“div”); w2.className=“cb-wrap”;
var cbEl=document.createElement(“input”);
var cbid=cbId(phase.id,topic.id,sub.id,sl,col);
cbEl.type=“checkbox”; cbEl.id=cbid; cbEl.dataset.cbid=cbid;
cbEl.checked=!!state.checks[cbid];
w2.appendChild(cbEl); td.appendChild(w2); tr.appendChild(td);
});
tbody.appendChild(tr);
});
table.appendChild(tbody); wrap.appendChild(table); return wrap;
}

function togglePhase(pid){
var body=document.getElementById(“phasebody_”+pid);
var tog=document.getElementById(“phasetoggle_”+pid);
if(!body||!tog)return;
var c=body.classList.toggle(“collapsed”);
tog.classList.toggle(“open”,!c); state.collapsePhase[pid]=c; saveState();
}
function toggleTopic(tid){
var body=document.getElementById(“topicbody_”+tid);
var tog=document.getElementById(“topictoggle_”+tid);
if(!body||!tog)return;
var c=body.classList.toggle(“collapsed”);
tog.classList.toggle(“open”,!c); state.collapseTopic[tid]=c; saveState();
}
function toggleSub(sid){
var body=document.getElementById(“subtopicbody_”+sid);
var tog=document.getElementById(“subtopictoggle_”+sid);
if(!body||!tog)return;
var c=body.classList.toggle(“collapsed”);
tog.classList.toggle(“open”,!c); state.collapseSubtopic[sid]=c; saveState();
}

function updateAllProgress(){
var op=overallProg(); updateRing(op.pct);
ROADMAP.forEach(function(phase){
var pp=phaseProg(phase);
var bar=document.getElementById(“phasebar_”+phase.id);
var bdg=document.getElementById(“phasebadge_”+phase.id);
var ttl=document.getElementById(“phasetitle_”+phase.id);
if(bar) bar.style.width=pp.pct+”%”;
if(bdg) bdg.textContent=pp.pct+”%”;
if(ttl) ttl.textContent=phase.title.replace(” [done]”,””)+(pp.pct===100?” [done]”:””);
phase.topics.forEach(function(topic){
var tp=topicProg(phase,topic);
var pel=document.getElementById(“topicpct_”+topic.id);
if(pel) pel.textContent=tp.pct+”%”;
topic.subtopics.forEach(function(sub){
sub.chapters.forEach(function(ch){
var sl=slug(ch);
var rid=rowId(phase.id,topic.id,sub.id,sl);
var row=document.getElementById(rid);
var dot=document.getElementById(“status_”+rid);
if(!row)return;
var st=chStatus(phase.id,topic.id,sub.id,ch);
var hidden=row.classList.contains(“hidden-row”)?” hidden-row”:””;
row.className=“chapter-row “+st+hidden;
if(dot) dot.textContent=st===“completed”?”[ok]”:st===“inprogress”?”[~]”:”[x]”;
});
});
});
});
buildNavPhases(); updateOnTrack(); applyFilters();
}

function buildNavPhases(){
var nav=document.getElementById(“navPhases”); if(!nav)return; nav.innerHTML=””;
ROADMAP.forEach(function(phase,i){
var pp=phaseProg(phase);
var btn=mkEl(“button”,“nav-phase-btn”);
var short=phase.title.replace(/^Phase \d+:\s*/,“Ph”+(i+1)+” “).replace(“General Aptitude”,“GA”).split(”(”)[0].trim();
if(short.length>28) short=short.slice(0,28)+”…”;
var lbl=document.createElement(“span”); lbl.textContent=short;
var psp=mkEl(“span”,“nav-phase-pct”); psp.textContent=pp.pct+”%”;
btn.appendChild(lbl); btn.appendChild(psp);
(function(pid){btn.addEventListener(“click”,function(){
var t=document.getElementById(“phase_”+pid); if(t)t.scrollIntoView({behavior:“smooth”,block:“start”});
});})(phase.id);
nav.appendChild(btn);
});
}

function initSearch(){
var inp=document.getElementById(“searchInput”);
var clr=document.getElementById(“searchClear”);
if(!inp)return;
inp.addEventListener(“input”,function(){
if(clr) clr.classList.toggle(“visible”,inp.value.length>0); applyFilters();
});
}
function clearSearch(){
var inp=document.getElementById(“searchInput”); var clr=document.getElementById(“searchClear”);
if(inp) inp.value=””; if(clr) clr.classList.remove(“visible”); applyFilters();
}

var activeFilters={incomplete:false,revision:false};
function toggleFilter(type){
activeFilters[type]=!activeFilters[type];
var key=type.charAt(0).toUpperCase()+type.slice(1);
var chip=document.getElementById(“chip”+key);
if(chip) chip.classList.toggle(“active”,activeFilters[type]); applyFilters();
}
function applyFilters(){
var inp=document.getElementById(“searchInput”);
var q=inp?inp.value.toLowerCase().trim():””;
document.querySelectorAll(”.chapter-row”).forEach(function(row){
var ch=row.dataset.chapter||””;
var pid=row.dataset.phase,tid=row.dataset.topic,sid=row.dataset.sub,sl=row.dataset.slug;
var vis=true;
if(q&&ch.indexOf(q)<0) vis=false;
if(vis&&activeFilters.incomplete&&row.classList.contains(“completed”)) vis=false;
if(vis&&activeFilters.revision){
var any=COLS.some(function(c){return state.checks[cbId(pid,tid,sid,sl,c)];});
var r1=state.checks[cbId(pid,tid,sid,sl,“Rev1”)];
var r2=state.checks[cbId(pid,tid,sid,sl,“Rev2”)];
if(!any||(r1&&r2)) vis=false;
}
row.classList.toggle(“hidden-row”,!vis);
});
}

function toggleSidebar(){
var sb=document.getElementById(“sidebar”);
var main=document.getElementById(“mainContent”);
if(window.innerWidth<=768){sb.classList.toggle(“mobile-open”);}
else{var hidden=sb.classList.toggle(“hidden”);if(main)main.classList.toggle(“full”,hidden);}
}

function updateOnTrack(){
var el2=document.getElementById(“onTrackStatus”);
var inp=document.getElementById(“globalTargetDate”);
if(!el2||!inp||!inp.value){if(el2)el2.textContent=””;return;}
var days=Math.ceil((new Date(inp.value)-new Date())/86400000);
var op=overallProg();
if(days<=0){el2.textContent=“Target passed!”;el2.className=“on-track behind”;}
else{var need=(100-op.pct)/days;el2.textContent=need<=1.5?“On track (”+days+“d left)”:“Behind (”+days+“d left)”;el2.className=“on-track “+(need<=1.5?“ok”:“behind”);}
}

function openAnalytics(){document.getElementById(“analyticsModal”).classList.add(“open”);renderAnalytics();}
function closeAnalytics(e){if(!e||e.target.id===“analyticsModal”)document.getElementById(“analyticsModal”).classList.remove(“open”);}

function renderAnalytics(){
var op=overallProg(),revTotal=0,revDone=0;
ROADMAP.forEach(function(ph){ph.topics.forEach(function(t){t.subtopics.forEach(function(s){s.chapters.forEach(function(ch){
revTotal++; if(state.checks[cbId(ph.id,t.id,s.id,slug(ch),“Rev1”)]) revDone++;
});});});});
var revPct=revTotal?Math.round(revDone/revTotal*100):0;
var weak=[];
ROADMAP.forEach(function(ph){ph.topics.forEach(function(t){var tp=topicProg(ph,t);if(tp.pct<30&&tp.checked>0)weak.push(t.title+” (”+tp.pct+”%)”);}); });
var c=document.getElementById(“analyticsContent”); c.innerHTML=””;
var g=mkEl(“div”,“analytics-grid”);
g.innerHTML=’<div class="ana-card"><div class="ana-card-label">Overall</div><div class="ana-card-val">’+op.pct+’%</div><div class="ana-card-sub">’+op.checked+”/”+op.total+” boxes</div></div>”+
‘<div class="ana-card"><div class="ana-card-label">Revision Coverage</div><div class="ana-card-val">’+revPct+’%</div><div class="ana-card-sub">’+revDone+”/”+revTotal+” Rev1</div></div>”+
‘<div class="ana-card"><div class="ana-card-label">Streak</div><div class="ana-card-val">’+state.streak.currentStreak+’</div><div class="ana-card-sub">Best: ‘+state.streak.longestStreak+”</div></div>”+
‘<div class="ana-card"><div class="ana-card-label">Last Active</div><div class="ana-card-val" style="font-size:16px">’+(state.streak.lastActiveDate||”-”)+”</div></div>”;
c.appendChild(g);
addTitle(c,“Phase-wise Progress”);
ROADMAP.forEach(function(ph){var pp=phaseProg(ph);addBar(c,ph.title.split(”:”).pop().trim().split(”(”)[0].trim(),pp.pct,ph.color);});
addTitle(c,“Topic-wise Progress”);
ROADMAP.forEach(function(ph){ph.topics.forEach(function(t){var tp=topicProg(ph,t);addBar(c,t.title.split(”(”)[0].trim(),tp.pct,ph.color);});});
addTitle(c,“Weak Areas (less than 30% started)”);
var wl=mkEl(“div”,“weak-list”);
if(!weak.length){wl.innerHTML=’<span style="color:var(--text3);font-size:13px">None yet!</span>’;}
else{weak.forEach(function(w){var tag=mkEl(“span”,“weak-tag”);tag.textContent=w;wl.appendChild(tag);});}
c.appendChild(wl);
}
function addTitle(p,txt){var d=mkEl(“div”,“ana-section-title”);d.textContent=txt;p.appendChild(d);}
function addBar(p,label,pct,color){
var r=mkEl(“div”,“ana-bar-row”);
r.innerHTML=’<div class="ana-bar-label" title="'+label+'">’+label+’</div><div class="ana-bar-track"><div class="ana-bar-fill" style="width:'+pct+'%;background:'+color+'"></div></div><div class="ana-bar-pct">’+pct+’%</div>’;
p.appendChild(r);
}

document.addEventListener(“DOMContentLoaded”,function(){
loadState(); checkStreakBroken(); render(); renderStreakUI(); initSearch();
var di=document.getElementById(“globalTargetDate”);
if(di){
if(state.targetDate) di.value=state.targetDate;
di.addEventListener(“change”,function(){state.targetDate=di.value;saveState();updateOnTrack();});
}
document.addEventListener(“click”,function(e){
var sb=document.getElementById(“sidebar”);
var hbg=document.getElementById(“hamburger”);
if(window.innerWidth<=768&&sb&&sb.classList.contains(“mobile-open”)&&!sb.contains(e.target)&&e.target!==hbg)
sb.classList.remove(“mobile-open”);
  
});
});
