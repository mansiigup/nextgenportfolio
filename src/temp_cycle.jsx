import { useState, useRef, useEffect } from "react";

const PHASES = [
  {
    id: "discover",
    label: "Discover",
    devLabel: "Scope",
    number: "01",
    color: "#e85d3a",
    glow: "rgba(232,93,58,0.3)",
    dim: "#3d1a10",
    stratIcon: "◎",
    devIcon: "⬡",
    stratDesc: "Understand the landscape — stakeholders, context, root problems.",
    devDesc: "Define project scope, technical constraints, and user needs.",
    merged: "Map the full problem space: business goals, user needs, and technical boundaries — before a single line is written.",
    questions: [
      "What is the core problem this product/strategy needs to solve?",
      "Who are the key stakeholders and what are their success criteria?",
      "What technical constraints or dependencies exist?",
      "What does the competitive or market landscape look like?",
    ],
    outputs: ["Problem Statement", "Stakeholder Map", "Technical Scope Doc", "Constraint Register"],
    aiPrompt: (answers) => `You are a senior strategist and product architect. Analyze these discovery inputs and provide: 1) A sharp problem statement, 2) Key strategic risks, 3) Three recommended approaches ranked by feasibility, 4) The single most important question that still needs answering.\n\nInputs:\n${answers}`,
  },
  {
    id: "define",
    label: "Define",
    devLabel: "Plan",
    number: "02",
    color: "#c9a227",
    glow: "rgba(201,162,39,0.3)",
    dim: "#362b08",
    stratIcon: "◈",
    devIcon: "⬡",
    stratDesc: "Set measurable goals, KPIs, and strategic direction.",
    devDesc: "Architecture decisions, tech stack, sprint plan, milestones.",
    merged: "Align business goals with technical architecture — so what gets built actually matches what success requires.",
    questions: [
      "What does success look like in 30, 60, and 90 days?",
      "What tech stack and architecture best serves these goals?",
      "What are the must-haves vs. nice-to-haves for v1?",
      "What are the biggest risks to delivery on time and on scope?",
    ],
    outputs: ["OKR / KPI Framework", "Architecture Decision Record", "Sprint Roadmap", "Risk Register"],
    aiPrompt: (answers) => `You are a lead product strategist and solutions architect. Based on these inputs, produce: 1) A prioritized OKR set (2-3 objectives, 2 KRs each), 2) A recommended architecture approach with rationale, 3) A 3-sprint milestone plan, 4) Top 3 risks with mitigation strategies.\n\nInputs:\n${answers}`,
  },
  {
    id: "design",
    label: "Design",
    devLabel: "Build",
    number: "03",
    color: "#3ea66b",
    glow: "rgba(62,166,107,0.3)",
    dim: "#0e2e1a",
    stratIcon: "◉",
    devIcon: "⬡",
    stratDesc: "Translate goals into a structured strategic roadmap.",
    devDesc: "Active development — features, components, integrations.",
    merged: "Build the right thing: strategic design decisions that shape every technical choice from interface to infrastructure.",
    questions: [
      "What is the core user journey and how does it map to business value?",
      "Which features create the most strategic leverage — what ships first?",
      "What technical debt are we consciously accepting, and why?",
      "How does this design hold up against the success criteria defined earlier?",
    ],
    outputs: ["Feature Roadmap", "System Design Doc", "UX Flow", "Technical Spec"],
    aiPrompt: (answers) => `You are a product design strategist and senior engineer. Review these inputs and deliver: 1) A prioritized feature list with strategic rationale for sequencing, 2) Key system design considerations, 3) Identified areas of technical debt and trade-off analysis, 4) A checklist to validate design decisions against strategic goals.\n\nInputs:\n${answers}`,
  },
  {
    id: "execute",
    label: "Execute",
    devLabel: "Test",
    number: "04",
    color: "#3b82f6",
    glow: "rgba(59,130,246,0.3)",
    dim: "#0d1f40",
    stratIcon: "◆",
    devIcon: "⬡",
    stratDesc: "Deliver with discipline — coordinated, tracked, accountable.",
    devDesc: "QA, integration testing, performance, security validation.",
    merged: "Validate both the build and the strategy: does what we shipped actually solve what we set out to solve?",
    questions: [
      "Does the built product match the original requirements and acceptance criteria?",
      "What bugs, performance issues, or edge cases were found in testing?",
      "Are we tracking toward the KPIs defined in the Define phase?",
      "What feedback from early users or testers challenges our assumptions?",
    ],
    outputs: ["Test Results Report", "Bug & Issue Log", "Performance Benchmark", "Stakeholder Update"],
    aiPrompt: (answers) => `You are a QA strategist and delivery lead. Analyze these execution/testing inputs and provide: 1) A prioritized list of issues by strategic impact, 2) An honest assessment of whether the build is meeting strategic goals, 3) Go/no-go recommendation for launch with clear conditions, 4) Key open questions for stakeholders.\n\nInputs:\n${answers}`,
  },
  {
    id: "measure",
    label: "Measure",
    devLabel: "Deploy",
    number: "05",
    color: "#8b5cf6",
    glow: "rgba(139,92,246,0.3)",
    dim: "#1e1040",
    stratIcon: "◇",
    devIcon: "⬡",
    stratDesc: "Evaluate results honestly against defined goals.",
    devDesc: "Staged rollout, monitoring, incident response, observability.",
    merged: "Ship and watch: deployment strategy is a strategic decision — how you launch shapes what you can learn from it.",
    questions: [
      "What deployment strategy (canary, blue-green, full rollout) best manages risk?",
      "What metrics and alerts are in place to detect issues immediately post-launch?",
      "How are we measuring user behaviour against the success criteria we defined?",
      "What is the rollback plan if something goes critically wrong?",
    ],
    outputs: ["Deployment Plan", "Monitoring Dashboard", "Launch Metrics Report", "Incident Runbook"],
    aiPrompt: (answers) => `You are a DevOps strategist and product analyst. Based on these deployment and measurement inputs, provide: 1) Recommended deployment strategy with risk assessment, 2) Critical metrics to monitor in the first 48 hours, 3) Early signal analysis — what the initial data suggests, 4) Recommended response protocols for key failure scenarios.\n\nInputs:\n${answers}`,
  },
  {
    id: "iterate",
    label: "Iterate",
    devLabel: "Improve",
    number: "06",
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.3)",
    dim: "#041e28",
    stratIcon: "↺",
    devIcon: "⬡",
    stratDesc: "Refine the strategy based on real-world data.",
    devDesc: "Hotfixes, performance improvements, backlog reprioritisation.",
    merged: "Close the loop: real data reshapes the next cycle's strategy — this is where compounding improvement begins.",
    questions: [
      "What did the data tell us that our assumptions got wrong?",
      "Which features drove the most strategic value — and which fell flat?",
      "What should be added, changed, or removed in the next cycle?",
      "How does the strategy need to evolve based on what we now know?",
    ],
    outputs: ["Retrospective Report", "Updated Backlog", "Revised Strategy Brief", "Next Cycle Plan"],
    aiPrompt: (answers) => `You are a strategic product advisor running a retrospective. Based on these inputs, provide: 1) Key lessons learned categorized by strategic vs. technical, 2) Recommended backlog reprioritization with reasoning, 3) How the overarching strategy should evolve for the next cycle, 4) The single highest-leverage action for the next sprint.\n\nInputs:\n${answers}`,
  },
];

async function callClaude(prompt) {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      messages: [{ role: "user", content: prompt }],
    }),
  });
  const data = await res.json();
  return data.content?.map(b => b.text || "").join("") || "No response received.";
}

export default function StrategyDevCycle() {
  const [activePhase, setActivePhase] = useState(0);
  const [answers, setAnswers] = useState({});
  const [aiOutput, setAiOutput] = useState({});
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState({});
  const [view, setView] = useState("guide"); // guide | output | progress
  const outputRef = useRef(null);

  const phase = PHASES[activePhase];
  const phaseAnswers = answers[phase.id] || {};
  const phaseOutput = aiOutput[phase.id];
  const completedPhases = Object.keys(progress).filter(k => progress[k]).length;

  function setAnswer(qi, val) {
    setAnswers(prev => ({
      ...prev,
      [phase.id]: { ...prev[phase.id], [qi]: val }
    }));
  }

  async function generateAI() {
    const filled = Object.values(phaseAnswers).filter(Boolean);
    if (filled.length < 2) return;
    setLoading(true);
    setView("output");
    const compiled = phase.questions.map((q, i) => `Q: ${q}\nA: ${phaseAnswers[i] || "(not answered)"}`).join("\n\n");
    try {
      const result = await callClaude(phase.aiPrompt(compiled));
      setAiOutput(prev => ({ ...prev, [phase.id]: result }));
      setProgress(prev => ({ ...prev, [phase.id]: true }));
    } catch (e) {
      setAiOutput(prev => ({ ...prev, [phase.id]: "Error connecting to AI. Please try again." }));
    }
    setLoading(false);
    setTimeout(() => outputRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
  }

  const filledCount = Object.values(phaseAnswers).filter(Boolean).length;

  return (
    <div style={{
      fontFamily: "'DM Mono', 'Courier New', monospace",
      background: "#080c10",
      minHeight: "100vh",
      color: "#e8e0d4",
      padding: 0,
      overflow: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Fraunces:ital,wght@0,300;0,600;1,300&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0f1318; }
        ::-webkit-scrollbar-thumb { background: #2a3040; border-radius: 2px; }
        textarea:focus, button:focus { outline: none; }
        .phase-node { transition: all 0.3s cubic-bezier(.4,0,.2,1); cursor: pointer; }
        .phase-node:hover { transform: scale(1.08); }
        .tab-btn { transition: all 0.2s; cursor: pointer; border: none; font-family: inherit; }
        .tab-btn:hover { opacity: 0.85; }
        .gen-btn { transition: all 0.25s; cursor: pointer; border: none; font-family: inherit; }
        .gen-btn:hover:not(:disabled) { filter: brightness(1.15); transform: translateY(-1px); }
        .gen-btn:disabled { opacity: 0.4; cursor: not-allowed; }
        .q-area { transition: border-color 0.2s; resize: vertical; font-family: inherit; }
        .q-area:focus { border-color: var(--phase-color) !important; }
        @keyframes pulse-ring { 0%,100%{opacity:0.4;transform:scale(1)} 50%{opacity:0.8;transform:scale(1.05)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes spin { to{transform:rotate(360deg)} }
        .ai-output { animation: fadeUp 0.4s ease; }
        .phase-enter { animation: fadeUp 0.3s ease; }
        .progress-bar { transition: width 0.6s cubic-bezier(.4,0,.2,1); }
      `}</style>

      {/* Header */}
      <div style={{
        borderBottom: "1px solid #1a2030",
        padding: "16px 28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#090d12",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}>
        <div>
          <div style={{ fontSize: 10, letterSpacing: "0.25em", color: "#4a5568", marginBottom: 3 }}>AI-POWERED FRAMEWORK</div>
          <div style={{ fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 600, color: "#e8e0d4", letterSpacing: "-0.01em" }}>
            Strategy <span style={{ color: "#4a5568" }}>×</span> Development Cycle
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ fontSize: 11, color: "#4a5568" }}>
            <span style={{ color: completedPhases > 0 ? "#3ea66b" : "#4a5568" }}>{completedPhases}</span>
            <span> / 6 phases complete</span>
          </div>
          <div style={{ width: 80, height: 4, background: "#1a2030", borderRadius: 2, overflow: "hidden" }}>
            <div className="progress-bar" style={{ height: "100%", width: `${(completedPhases/6)*100}%`, background: "#3ea66b", borderRadius: 2 }} />
          </div>
        </div>
      </div>

      <div style={{ display: "flex", height: "calc(100vh - 57px)" }}>

        {/* Left: Phase Selector */}
        <div style={{
          width: 220,
          borderRight: "1px solid #1a2030",
          background: "#090d12",
          padding: "20px 0",
          overflowY: "auto",
          flexShrink: 0,
        }}>
          <div style={{ padding: "0 16px 12px", fontSize: 9, letterSpacing: "0.2em", color: "#2a3548" }}>PHASES</div>
          {PHASES.map((ph, i) => {
            const isActive = i === activePhase;
            const isDone = progress[ph.id];
            return (
              <div
                key={ph.id}
                className="phase-node"
                onClick={() => { setActivePhase(i); setView("guide"); }}
                style={{
                  padding: "12px 16px",
                  borderLeft: isActive ? `3px solid ${ph.color}` : "3px solid transparent",
                  background: isActive ? `${ph.dim}99` : "transparent",
                  marginBottom: 2,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 9, color: isActive ? ph.color : "#2a3548", letterSpacing: "0.15em" }}>{ph.number}</span>
                    <span style={{ fontSize: 13, color: isActive ? "#e8e0d4" : "#4a5568", fontWeight: isActive ? 500 : 400 }}>{ph.label}</span>
                  </div>
                  {isDone && <span style={{ fontSize: 9, color: "#3ea66b" }}>✓</span>}
                </div>
                <div style={{ fontSize: 10, color: isActive ? ph.color : "#2a3548", letterSpacing: "0.1em" }}>
                  ↳ {ph.devLabel}
                </div>
              </div>
            );
          })}

          {/* Cycle visual */}
          <div style={{ padding: "20px 16px 0", marginTop: 8, borderTop: "1px solid #1a2030" }}>
            <div style={{ fontSize: 9, letterSpacing: "0.2em", color: "#2a3548", marginBottom: 12 }}>THE LOOP</div>
            <svg width={188} height={188} viewBox="0 0 188 188">
              <circle cx={94} cy={94} r={76} fill="none" stroke="#1a2030" strokeWidth={1} />
              {PHASES.map((ph, i) => {
                const angle = (i / 6) * 2 * Math.PI - Math.PI / 2;
                const r = 76;
                const x = 94 + r * Math.cos(angle);
                const y = 94 + r * Math.sin(angle);
                const isActive = i === activePhase;
                const isDone = progress[ph.id];
                // draw arc segment
                const a1 = (i / 6) * 2 * Math.PI - Math.PI / 2;
                const a2 = ((i + 0.85) / 6) * 2 * Math.PI - Math.PI / 2;
                const lx1 = 94 + r * Math.cos(a1), ly1 = 94 + r * Math.sin(a1);
                const lx2 = 94 + r * Math.cos(a2), ly2 = 94 + r * Math.sin(a2);
                return (
                  <g key={ph.id} onClick={() => { setActivePhase(i); setView("guide"); }} style={{ cursor: "pointer" }}>
                    <path d={`M ${lx1} ${ly1} A ${r} ${r} 0 0 1 ${lx2} ${ly2}`}
                      fill="none" stroke={isActive || isDone ? ph.color : "#1a2030"}
                      strokeWidth={isActive ? 4 : 2} strokeLinecap="round"
                      opacity={isDone && !isActive ? 0.6 : 1}
                    />
                    <circle cx={x} cy={y} r={isActive ? 9 : 6}
                      fill={isActive ? ph.color : isDone ? ph.color : "#0f1318"}
                      stroke={ph.color} strokeWidth={isActive ? 0 : 1}
                      style={{ filter: isActive ? `drop-shadow(0 0 6px ${ph.glow})` : "none" }}
                    />
                    <text x={x} y={y + 1} textAnchor="middle" dominantBaseline="middle"
                      fontSize={isActive ? 7 : 6} fill={isActive ? "white" : ph.color} fontFamily="DM Mono">
                      {ph.number}
                    </text>
                  </g>
                );
              })}
              <text x={94} y={88} textAnchor="middle" fontSize={8} fill="#2a3548" fontFamily="DM Mono">STRATEGY</text>
              <text x={94} y={100} textAnchor="middle" fontSize={8} fill="#2a3548" fontFamily="DM Mono">× DEV</text>
            </svg>
          </div>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "28px 32px" }}>

          {/* Phase header */}
          <div className="phase-enter" key={phase.id} style={{
            background: `linear-gradient(135deg, ${phase.dim} 0%, #0d1118 100%)`,
            border: `1px solid ${phase.color}30`,
            borderRadius: 12,
            padding: "24px 28px",
            marginBottom: 24,
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: -20, right: -20,
              width: 160, height: 160,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${phase.glow} 0%, transparent 70%)`,
              pointerEvents: "none",
            }} />
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: 10, letterSpacing: "0.2em", color: phase.color }}>PHASE {phase.number}</span>
                  <span style={{ fontSize: 10, color: "#2a3548" }}>·</span>
                  <span style={{ fontSize: 10, letterSpacing: "0.15em", color: "#4a5568" }}>STRATEGY: {phase.label.toUpperCase()} + DEV: {phase.devLabel.toUpperCase()}</span>
                </div>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: 28, fontWeight: 600, color: "#e8e0d4", marginBottom: 8 }}>
                  {phase.label} <span style={{ color: phase.color }}>×</span> {phase.devLabel}
                </div>
                <div style={{ fontSize: 13, color: "#8892a4", lineHeight: 1.6, maxWidth: 520 }}>{phase.merged}</div>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {["guide", "output"].map(v => (
                  <button key={v} className="tab-btn" onClick={() => setView(v)} style={{
                    padding: "7px 16px", borderRadius: 6, fontSize: 11,
                    background: view === v ? phase.color : "#1a2030",
                    color: view === v ? "white" : "#4a5568",
                    letterSpacing: "0.1em",
                  }}>{v.toUpperCase()}</button>
                ))}
              </div>
            </div>

            {/* dual-lane context */}
            <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
              {[
                { label: "Strategy Layer", desc: phase.stratDesc, icon: phase.stratIcon },
                { label: "Dev Layer", desc: phase.devDesc, icon: phase.devIcon },
              ].map(lane => (
                <div key={lane.label} style={{
                  flex: 1, background: "#0d111880", border: "1px solid #1a2030",
                  borderRadius: 8, padding: "10px 14px",
                }}>
                  <div style={{ fontSize: 9, letterSpacing: "0.18em", color: "#4a5568", marginBottom: 5 }}>
                    {lane.icon} {lane.label.toUpperCase()}
                  </div>
                  <div style={{ fontSize: 12, color: "#8892a4", lineHeight: 1.5 }}>{lane.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* GUIDE VIEW */}
          {view === "guide" && (
            <div>
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 10, letterSpacing: "0.2em", color: "#4a5568", marginBottom: 14 }}>
                  GUIDING QUESTIONS — Answer at least 2 to unlock AI analysis
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {phase.questions.map((q, qi) => (
                    <div key={qi}>
                      <div style={{ fontSize: 12, color: "#8892a4", marginBottom: 6, lineHeight: 1.5 }}>
                        <span style={{ color: phase.color, marginRight: 6 }}>{`0${qi+1}`}</span>{q}
                      </div>
                      <textarea
                        className="q-area"
                        value={phaseAnswers[qi] || ""}
                        onChange={e => setAnswer(qi, e.target.value)}
                        placeholder="Your answer..."
                        rows={2}
                        style={{
                          width: "100%",
                          background: "#0d1118",
                          border: `1px solid ${phaseAnswers[qi] ? phase.color + "60" : "#1a2030"}`,
                          borderRadius: 8,
                          padding: "10px 14px",
                          fontSize: 13,
                          color: "#c8c0b4",
                          lineHeight: 1.6,
                          "--phase-color": phase.color,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Expected outputs */}
              <div style={{
                background: "#0d1118",
                border: "1px solid #1a2030",
                borderRadius: 10,
                padding: "16px 20px",
                marginBottom: 20,
              }}>
                <div style={{ fontSize: 10, letterSpacing: "0.2em", color: "#4a5568", marginBottom: 10 }}>EXPECTED DELIVERABLES</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {phase.outputs.map(o => (
                    <span key={o} style={{
                      fontSize: 11, padding: "4px 12px", borderRadius: 20,
                      background: `${phase.dim}cc`, border: `1px solid ${phase.color}40`,
                      color: phase.color,
                    }}>{o}</span>
                  ))}
                </div>
              </div>

              {/* Generate button */}
              <button
                className="gen-btn"
                onClick={generateAI}
                disabled={filledCount < 2 || loading}
                style={{
                  width: "100%",
                  padding: "14px 24px",
                  background: filledCount >= 2 ? `linear-gradient(135deg, ${phase.color}, ${phase.color}bb)` : "#1a2030",
                  color: filledCount >= 2 ? "white" : "#2a3548",
                  borderRadius: 10,
                  fontSize: 13,
                  fontFamily: "inherit",
                  letterSpacing: "0.15em",
                  fontWeight: 500,
                }}
              >
                {loading ? "⟳ GENERATING AI ANALYSIS..." : filledCount < 2 ? `ANSWER ${2 - filledCount} MORE QUESTION${2 - filledCount === 1 ? "" : "S"} TO UNLOCK` : "⚡ GENERATE AI STRATEGIC ANALYSIS"}
              </button>

              {/* next phase nudge */}
              {progress[phase.id] && activePhase < 5 && (
                <div
                  onClick={() => { setActivePhase(activePhase + 1); setView("guide"); }}
                  style={{
                    marginTop: 12, padding: "10px 20px",
                    background: "#0d1118", border: `1px solid ${PHASES[activePhase+1].color}40`,
                    borderRadius: 8, cursor: "pointer", textAlign: "center",
                    fontSize: 12, color: "#4a5568",
                    transition: "all 0.2s",
                  }}
                >
                  Phase {phase.number} complete — proceed to <span style={{ color: PHASES[activePhase+1].color }}>{PHASES[activePhase+1].label} × {PHASES[activePhase+1].devLabel}</span> →
                </div>
              )}
            </div>
          )}

          {/* OUTPUT VIEW */}
          {view === "output" && (
            <div ref={outputRef}>
              {loading && (
                <div style={{ textAlign: "center", padding: "60px 0" }}>
                  <div style={{
                    width: 40, height: 40, border: `2px solid ${phase.color}30`,
                    borderTop: `2px solid ${phase.color}`,
                    borderRadius: "50%", margin: "0 auto 20px",
                    animation: "spin 0.8s linear infinite",
                  }} />
                  <div style={{ fontSize: 12, color: "#4a5568", letterSpacing: "0.15em" }}>AI ANALYZING PHASE {phase.number}...</div>
                </div>
              )}
              {!loading && !phaseOutput && (
                <div style={{ textAlign: "center", padding: "60px 0" }}>
                  <div style={{ fontSize: 14, color: "#2a3548", marginBottom: 12 }}>No output yet for this phase.</div>
                  <button className="tab-btn" onClick={() => setView("guide")} style={{
                    padding: "8px 20px", borderRadius: 6, fontSize: 12,
                    background: phase.color, color: "white",
                  }}>Go to Guide →</button>
                </div>
              )}
              {!loading && phaseOutput && (
                <div className="ai-output">
                  <div style={{
                    display: "flex", alignItems: "center", gap: 10, marginBottom: 16,
                    padding: "10px 16px",
                    background: `${phase.dim}80`,
                    border: `1px solid ${phase.color}30`,
                    borderRadius: 8,
                  }}>
                    <span style={{ fontSize: 9, letterSpacing: "0.2em", color: phase.color }}>⚡ AI OUTPUT — PHASE {phase.number}: {phase.label.toUpperCase()} × {phase.devLabel.toUpperCase()}</span>
                    <span style={{ marginLeft: "auto", fontSize: 9, color: "#2a3548" }}>Generated by Claude</span>
                  </div>
                  <div style={{
                    background: "#0d1118",
                    border: "1px solid #1a2030",
                    borderRadius: 10,
                    padding: "24px 28px",
                    fontSize: 13,
                    color: "#c8c0b4",
                    lineHeight: 1.8,
                    whiteSpace: "pre-wrap",
                  }}>
                    {phaseOutput.split('\n').map((line, i) => {
                      if (/^\d+\)/.test(line.trim())) {
                        return <div key={i} style={{ color: phase.color, fontWeight: 500, marginTop: 16, marginBottom: 4 }}>{line}</div>;
                      }
                      if (line.startsWith('**') && line.endsWith('**')) {
                        return <div key={i} style={{ color: "#e8e0d4", fontWeight: 500 }}>{line.replace(/\*\*/g,'')}</div>;
                      }
                      if (line.trim().startsWith('-') || line.trim().startsWith('•')) {
                        return <div key={i} style={{ paddingLeft: 16, color: "#8892a4" }}>{line}</div>;
                      }
                      return <div key={i}>{line}</div>;
                    })}
                  </div>

                  <button className="gen-btn" onClick={() => setView("guide")} style={{
                    marginTop: 16, padding: "10px 20px",
                    background: "#1a2030", border: `1px solid ${phase.color}30`,
                    borderRadius: 8, fontSize: 12,
                    color: "#4a5568", letterSpacing: "0.1em",
                  }}>← Back to Questions</button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right: Progress sidebar */}
        <div style={{
          width: 200,
          borderLeft: "1px solid #1a2030",
          background: "#090d12",
          padding: "20px 16px",
          overflowY: "auto",
          flexShrink: 0,
        }}>
          <div style={{ fontSize: 9, letterSpacing: "0.2em", color: "#2a3548", marginBottom: 16 }}>PROGRESS</div>
          {PHASES.map((ph, i) => {
            const done = progress[ph.id];
            const active = i === activePhase;
            const ansCount = Object.values(answers[ph.id] || {}).filter(Boolean).length;
            return (
              <div key={ph.id} onClick={() => { setActivePhase(i); setView("guide"); }}
                style={{ marginBottom: 14, cursor: "pointer", opacity: active ? 1 : 0.7 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }}>
                  <span style={{ fontSize: 11, color: active ? ph.color : done ? ph.color : "#4a5568" }}>{ph.label}</span>
                  <span style={{ fontSize: 10, color: done ? "#3ea66b" : "#2a3548" }}>{done ? "✓" : `${ansCount}/4`}</span>
                </div>
                <div style={{ height: 3, background: "#1a2030", borderRadius: 2, overflow: "hidden" }}>
                  <div style={{
                    height: "100%",
                    width: done ? "100%" : `${(ansCount / 4) * 100}%`,
                    background: done ? "#3ea66b" : ph.color,
                    borderRadius: 2,
                    transition: "width 0.4s ease",
                  }} />
                </div>
                <div style={{ fontSize: 9, color: "#2a3548", marginTop: 3 }}>↳ {ph.devLabel}</div>
              </div>
            );
          })}

          {completedPhases === 6 && (
            <div style={{
              marginTop: 20,
              padding: "14px",
              background: "#0e2e1a",
              border: "1px solid #3ea66b40",
              borderRadius: 8,
              textAlign: "center",
            }}>
              <div style={{ fontSize: 20, marginBottom: 6 }}>✦</div>
              <div style={{ fontSize: 11, color: "#3ea66b", lineHeight: 1.5 }}>
                Full cycle complete. Begin next iteration with new insights.
              </div>
            </div>
          )}

          <div style={{ marginTop: 20, borderTop: "1px solid #1a2030", paddingTop: 16 }}>
            <div style={{ fontSize: 9, letterSpacing: "0.2em", color: "#2a3548", marginBottom: 10 }}>HOW IT WORKS</div>
            {[
              ["01", "Answer guiding questions per phase"],
              ["02", "AI analyzes your inputs"],
              ["03", "Get strategic + technical outputs"],
              ["04", "Move to next phase with context"],
              ["05", "Iterate the full cycle"],
            ].map(([n, t]) => (
              <div key={n} style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "flex-start" }}>
                <span style={{ fontSize: 9, color: ACCENT, flexShrink: 0, marginTop: 1 }}>{n}</span>
                <span style={{ fontSize: 10, color: "#4a5568", lineHeight: 1.5 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const ACCENT = "#6366f1";
