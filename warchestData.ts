export const operatorScorecard = [
  { label: "Pipeline Creation", value: "87", change: "+12%", trend: "up" as const, operator: "Qualified Opportunities" },
  { label: "Conversion", value: "41%", change: "-4%", trend: "down" as const, operator: "Lead → Close Rate" },
  { label: "Revenue Quality", value: "$142k", change: "+8%", trend: "up" as const, operator: "Avg Contract Value" },
  { label: "Activation & LTV", value: "68%", change: "+3%", trend: "up" as const, operator: "Time to First Value" },
  { label: "Expansion & Retention", value: "92%", change: "+1%", trend: "up" as const, operator: "Net Revenue Retention" },
];

export const agents = [
  { name: "Researcher Strategist", focus: "ICP research, competitive intelligence, and market positioning", quality: 94, state: "Ready" },
  { name: "CRO Optimizer", focus: "Funnel analysis, conversion rate optimization, and experiment design", quality: 91, state: "Ready" },
  { name: "Sales Closer", focus: "Objection handling, proposal strategy, and high-ticket closing", quality: 88, state: "Ready" },
  { name: "Onboarding Agent", focus: "Activation planning, time-to-value reduction, and early risk detection", quality: 93, state: "Ready" },
  { name: "Retention Agent", focus: "Churn prediction, expansion opportunities, and relationship health", quality: 89, state: "Ready" },
  { name: "Auditor Self-Improver", focus: "Quality scoring, system improvement, and red-team review", quality: 96, state: "Ready" },
];

export const approvals = [
  { item: "Outbound sequence to 50 ICP accounts", className: "Prospect-facing", status: "Blocked" as const, reason: "Missing human approval" },
  { item: "Landing page variant B publish", className: "Public", status: "Pending" as const, reason: "Awaiting CRO review" },
  { item: "Client QBR deck - Draft v2", className: "Client-facing", status: "Allowed" as const, reason: "Approved by operator" },
];

export const memorySignals = [
  { type: "Client Profile", count: 12, note: "Active client workspaces", health: "Healthy" },
  { type: "Session Logs", count: 47, note: "Last 30 days", health: "Good" },
  { type: "Risk Register", count: 8, note: "Open items", health: "Attention" },
  { type: "Decision Log", count: 134, note: "Total recorded", health: "Healthy" },
];

export const workflowMap = [
  { title: "Revenue Diagnostic", artifact: "Bottleneck identification + evidence scoring", agent: "Team Lead", metric: "Highest leverage constraint", gate: "Human approval" },
  { title: "ICP Offer Workflow", artifact: "Wedge scorecard + positioning", agent: "Researcher", metric: "ICP match rate", gate: "Internal only" },
  { title: "Landing Page CRO", artifact: "Experiment plan + variants", agent: "CRO Optimizer", metric: "Lead-to-call conversion", gate: "Human approval" },
];
