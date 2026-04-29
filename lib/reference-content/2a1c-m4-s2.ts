import { ReferencePageProps } from '@/components/ReferencePage';

const data: ReferencePageProps = {
  title: 'Practice Exam 1 — Mixed Content',
  subtitle: 'MA 2A/1C Hoisting License · Module 4, Session 2',
  sections: [
    {
      id: 'critical-numbers',
      title: 'Critical Numbers — Know These Cold',
      icon: '🔢',
      color: 'border-yellow-500',
      headerBg: 'bg-yellow-50',
      content: [
        {
          heading: 'Licensing & Regulatory Numbers',
          body: `• **70%** — Minimum passing score
• **60 days** — Wait after failed attempt before retesting
• **$75** — Initial application fee per restriction class (non-refundable)
• **$60** — Renewal fee (non-refundable)
• **$500–$3,000** — Operator fine range for MGL §53 violations
• **$1,000–$3,000** — Employer fine for allowing unlicensed operation
• **18 years old** — Minimum age for hoisting license
• **2 years** — License validity period
• **1 hour** — Phone accident report deadline (call 508-820-1444)
• **48 hours** — Written accident report deadline
• **72 hours** — Dig Safe (811) advance notice before excavating`,
        },
        {
          heading: 'OSHA Excavation Numbers',
          body: `• **4 feet** — Egress required (ladder, stairway, ramp within 25 ft)
• **5 feet** — Protective system always required (no exceptions)
• **25 feet** — Max lateral travel to egress
• **2 feet** — Minimum spoil pile setback from trench edge
• **1.5 tsf** — Type A soil minimum strength (≥1.5 tsf)
• **0.5 tsf** — Type C soil maximum strength (<0.5 tsf)
• **¾:1** — Type A slope (53°)
• **1:1** — Type B slope (45°)
• **1½:1** — Type C slope (34°)
• **20 feet** — Depth above which PE-designed system required
• **19.5%** — Oxygen threshold for hazardous atmosphere`,
        },
        {
          heading: 'Equipment & Hydraulic Numbers',
          body: `• **280–350 bar (4,060–5,075 psi)** — Typical excavator hydraulic pressure
• **4:1** — Minimum hose burst-to-working-pressure safety factor
• **10 feet** — Minimum clearance from energized overhead lines (≤50 kV)
• **20–30 mm** — Track sag for mid-size excavators
• **July 15, 2019** — ROPS standard cutoff (pre: SAE; post: ISO 3471:2008)
• **SAE J386-1969** — Seat belt standard (required with ROPS)
• **SAE J237** — Loader/dozer braking standard
• **SAE J1307** — Hand signal standard (required by 230 CMR 6.00)
• **ROC** — Rated Operating Capacity; never exceed on loaders`,
        },
      ],
    },
    {
      id: 'exam-traps',
      title: 'Common 2A/1C Exam Traps',
      icon: '⚠️',
      color: 'border-red-400',
      headerBg: 'bg-red-50',
      content: [
        {
          heading: 'Top Trap Questions for 2A/1C Combo',
          body: `**Trap 1: Which license covers which machine?**
• 2A covers: excavators, track hoes, backhoes, skid steers
• 1C covers: boom trucks, loader-backhoes, wheel loaders (telescoping boom equipment)
• A 2A license does NOT authorize operating a wheel loader for material handling
• The 2A/1C combo is needed to operate both excavating and loading equipment

**Trap 2: Loader operating capacity vs. lifting capacity**
• ROC (Rated Operating Capacity) = the load the loader can safely carry
• Tipping load = the load that would tip the machine
• ROC is typically 50% or 35% of tipping load
• Exceeding ROC dramatically increases tip-over risk

**Trap 3: Stabilizers before backhoe work**
• Stabilizers (outriggers) must ALWAYS be deployed before backhoe operation
• "Stabilizers optional on firm level ground" is WRONG — they are always required for backhoe work

**Trap 4: Private property exemption**
• Operating on private property does NOT exempt the operator from the MGL §53 license requirement
• The only relevant exemptions are agricultural use, industrial equipment on company property, and approved apprenticeship programs

**Trap 5: Water and soil classification**
• Any standing water in the trench = Type C — regardless of soil strength tests
• Even Type A soil becomes Type C if water is present`,
        },
      ],
    },
    {
      id: 'strategy',
      title: 'Exam Strategy',
      icon: '🧠',
      color: 'border-blue-500',
      headerBg: 'bg-blue-50',
      content: [
        {
          heading: 'Question-Reading Framework',
          body: `**Step 1:** Read the full question before looking at any option.
**Step 2:** Identify the question type: number lookup, scenario, classification, or regulatory attribution.
**Step 3:** Watch for qualifiers: "ALWAYS," "NEVER," "UNLESS," "OR," "AND."
**Step 4:** Eliminate wrong answers first:
• Eliminate "continue operating" when a defect is described
• Eliminate "no action required" when a regulatory threshold is crossed
• Eliminate options that give authority to an unauthorized person

**Step 5:** Between two plausible answers, choose the more protective option.

**Time management:** The exam is 30–40 questions in 60–90 minutes. Flag uncertain questions and return — don't spend more than 2 minutes on any one question the first pass.`,
        },
      ],
    },
  ],
  quickFacts: [
    { label: 'Exam format', value: '30–40 multiple choice, 70% to pass' },
    { label: 'Failed exam wait', value: '60 days before retesting' },
    { label: 'Bring to exam', value: 'Government-issued photo ID' },
    { label: '2A covers', value: 'Excavators, track hoes, backhoes, skid steers' },
    { label: '1C covers', value: 'Boom trucks, loader-backhoes, wheel loaders' },
    { label: 'Stabilizers before backhoe', value: 'Always required — no exceptions' },
    { label: 'Water in trench = Type', value: 'C (always)' },
    { label: 'Loader ROC', value: 'Never exceed — tip-over risk' },
    { label: 'Private property exemption', value: 'Does NOT exist for construction work' },
  ],
  defaultOpenSections: ['critical-numbers'],
};

export default data;
