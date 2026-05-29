const metrics = [
  ['Pipeline Creation', '87', '+12%', 'Qualified opportunities / week'],
  ['Conversion', '41%', '-4%', 'Booked-call show rate'],
  ['Revenue Quality', '$142k', '+8%', 'Weighted ACV target'],
  ['Activation & LTV', '68%', '+3%', 'First-value milestone completion'],
  ['Expansion & Retention', '92%', '+1%', 'Account health composite'],
];

const agents = ['Researcher Strategist', 'CRO Optimizer', 'Sales Closer', 'Onboarding Agent', 'Retention Agent', 'Auditor Self-Improver'];
const workflows = ['Revenue Diagnostic', 'ICP & Offer', 'Landing Page CRO', 'Outbound Recovery', 'Activation Sprint', 'Retention Review'];

export default function Page() {
  return (
    <main className="shell">
      <aside className="nav"><div className="brand"><b>W</b><div><small>Aether Capital</small><strong>Warchest Command</strong></div></div>{['Dashboard','Revenue Diagnostic','Agent Dispatch','Approvals','Client Memory','Workflows','Settings'].map((n,i)=><a key={n} href={`#s${i}`}>{n}<span>{String(i+1).padStart(2,'0')}</span></a>)}<p className="guard">Approval discipline active. High-risk external actions stay blocked until human signoff.</p></aside>
      <section className="main">
        <header className="hero" id="s0"><div><p className="kicker">Live local-first command layer</p><h1>Revenue Command Center</h1><p>Aether-grade operating room for revenue diagnostics, specialist agent dispatch, approval governance, and local-first GTM memory.</p></div><div className="actions"><button>Review Memory</button><button className="primary">Run Revenue Diagnostic</button></div></header>
        <div className="strip"><Card label="Command posture" value="Operator-Gated" note="External actions require documented approval."/><Card label="Primary constraint" value="Show Rate" note="Discovery attendance is the largest drag."/><Card label="Memory integrity" value="91%" note="Facts and assumptions remain separated."/><Card label="System mode" value="Local-First" note="Contracts only; no live integrations claimed."/></div>
        <Section id="s1" kicker="Dashboard" title="Revenue Operator Scorecard" meta="Five operators · metric-first posture"><div className="metrics">{metrics.map(m=><Metric key={m[0]} data={m}/>)}</div></Section>
        <Section id="s2" kicker="Revenue Diagnostic" title="Highest-Leverage Bottleneck" meta="Ranked by leverage, evidence, and reversibility"><div className="split"><article className="bottleneck"><span>Rank 01</span><h3>Discovery-call attendance is suppressing pipeline velocity.</h3><p>Booked calls are healthy, but only 41% are attended. A 15-point show-rate lift creates more qualified conversations without increasing top-of-funnel volume.</p><div><b>Confidence: 82% / High</b><button className="primary">Dispatch Recovery</button></div></article><article className="panel"><p className="kicker">Next safest action</p><h3>Dispatch CRO Optimizer and Sales Closer jointly.</h3><p>Audit confirmation logic, reminders, agenda framing, and pre-call commitment before increasing outbound volume.</p></article></div></Section>
        <Section id="s3" kicker="Agent Dispatch" title="Specialist Agent Control Plane" meta="Evidence-aware dispatch, strict output contracts"><div className="agents">{agents.map((a,i)=><article className="agent" key={a}><div><h3>{a}</h3><span>Ready</span></div><p>{['Market research and ICP proof.','Funnel hierarchy and experiment design.','Discovery, objections, proposal discipline.','Activation and first-value delivery.','Renewal, churn risk, expansion signals.','Quality gates and release integrity.'][i]}</p><div className="bar"><i style={{width:`${92+i}%`}}/></div></article>)}</div></Section>
        <Section id="s4" kicker="Approvals" title="External Action Gate" meta="No risky action proceeds without approval"><div className="table">{['Outbound sequence','Landing page publish','QBR narrative','Pricing exception'].map((x,i)=><div key={x} className="row"><b>{x}</b><span>{['Blocked','Pending','Allowed','Blocked'][i]}</span><p>{['Needs final review.','Needs rollback plan.','Approved for review.','Needs margin review.'][i]}</p></div>)}</div></Section>
        <Section id="s5" kicker="Client Memory" title="Local File-Based State Health" meta="Facts, decisions, approvals, risks"><div className="memory"><Card label="Client Profile" value="12" note="Healthy"/><Card label="Session Logs" value="47" note="Current"/><Card label="Risk Register" value="8" note="Watch"/><Card label="Approval Log" value="21" note="Strict"/></div></Section>
        <Section id="s6" kicker="Workflows & Playbooks" title="Execution Library" meta="Runbooks mapped to revenue operators"><div className="flows">{workflows.map(w=><article key={w}><span>Runbook</span><h3>{w}</h3><p>Owner, metric, artifact, evidence level, and approval gate are defined before execution.</p></article>)}</div></Section>
        <Section id="s7" kicker="Settings" title="Operating Controls" meta="Local-first, approval-gated, evidence-aware"><div className="settings"><Card label="External Action Lock" value="On" note="Human approval required."/><Card label="Evidence Discipline" value="Strict" note="Facts and inferences separated."/><Card label="Local-First Mode" value="Active" note="No live integrations claimed."/></div></Section>
      </section>
    </main>
  );
}

function Section({id,kicker,title,meta,children}){return <section id={id} className="section"><div className="sectionHead"><div><p className="kicker">{kicker}</p><h2>{title}</h2></div><span>{meta}</span></div>{children}</section>}
function Card({label,value,note}){return <article className="card"><span>{label}</span><strong>{value}</strong><p>{note}</p></article>}
function Metric({data}){return <article className="metric"><div><span>{data[0]}</span><em className={String(data[2]).startsWith('-')?'down':''}>{data[2]}</em></div><strong>{data[1]}</strong><p>{data[3]}</p><i/></article>}
