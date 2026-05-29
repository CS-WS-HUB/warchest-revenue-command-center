import { CommandHeader } from '@/components/CommandHeader';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { Navigation } from '@/components/Navigation';
import { Section } from '@/components/dashboard/Section';
import { BottleneckCard } from '@/components/dashboard/BottleneckCard';
import { AgentCard } from '@/components/dashboard/AgentCard';
import { ApprovalRow } from '@/components/dashboard/ApprovalRow';
import { MemoryCard } from '@/components/dashboard/MemoryCard';
import { WorkflowCard } from '@/components/dashboard/WorkflowCard';

import { operatorScorecard, agents, approvals, memorySignals, workflowMap } from '@/lib/warchestData';

export default function WarchestDashboard() {
  return (
    <main className="app-shell">
      <Navigation />
      <div className="main-column">
        <CommandHeader 
          title="Revenue Command Center" 
          subtitle="Good morning, David. Current revenue posture and active constraints." 
        />

        <Section id="operators" kicker="Executive View" title="Revenue Operator Scorecard">
          <div className="metric-grid">
            {operatorScorecard.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>
        </Section>

        <Section id="diagnostic" kicker="Constraint Logic" title="Highest Leverage Bottleneck">
          <BottleneckCard 
            rank={1}
            title="Low show-up rate on discovery calls"
            operator="Conversion"
            evidence="Only 41% of booked discovery calls are attended. This is currently the #1 constraint on pipeline velocity."
            confidence="High (82%)"
          />
        </Section>

        <Section id="agents" kicker="Dispatch Layer" title="Specialist Agents">
          <div className="agent-grid">
            {agents.map((agent, index) => (
              <AgentCard key={index} {...agent} />
            ))}
          </div>
        </Section>

        <Section id="approvals" kicker="Control Plane" title="Pending Approvals">
          <div className="panel overflow-hidden">
            <div className="grid grid-cols-12 px-6 py-3 text-xs font-medium text-[var(--muted)] border-b border-[var(--line)]">
              <div className="col-span-5">Item</div>
              <div className="col-span-2">Class</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-3">Reason</div>
            </div>
            {approvals.map((item, index) => (
              <ApprovalRow key={index} {...item} />
            ))}
          </div>
        </Section>

        <Section id="memory" kicker="File-Based State" title="Client Memory Health">
          <div className="memory-grid">
            {memorySignals.map((signal, index) => (
              <MemoryCard key={index} {...signal} />
            ))}
          </div>
        </Section>

        <Section id="workflows" kicker="Execution System" title="Workflows & Playbooks">
          <div className="workflow-grid">
            {workflowMap.map((flow, index) => (
              <WorkflowCard key={index} {...flow} />
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}
