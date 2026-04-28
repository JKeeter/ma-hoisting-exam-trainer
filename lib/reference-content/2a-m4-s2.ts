import { ReferencePageProps } from '@/components/ReferencePage';

const data: ReferencePageProps = {
  title: 'Practice Exam 1 — Regulations & Equipment',
  subtitle: 'MA 2A Hoisting License · Module 4, Session 2',
  sections: [
    {
      id: 'critical-numbers',
      title: 'Critical Numbers — Know These Cold',
      icon: '🔢',
      color: 'border-yellow-500',
      headerBg: 'bg-yellow-50',
      content: [
        {
          heading: 'Licensing & Exam Numbers',
          body: `These numbers appear on almost every 2A exam:

• **70%** — Minimum passing score on the MA hoisting exam
• **60 days** — Wait time before retesting after a failed attempt
• **$75** — Non-refundable application fee per restriction class
• **$60** — Non-refundable renewal fee
• **$500–$3,000** — Fine range for general licensing violations (operator)
• **$1,000–$3,000** — Fine range for allowing unlicensed operation (employer)
• **18 years old** — Minimum age to obtain a hoisting license
• **2 years** — License validity period
• **1 hour** — Accident phone report deadline (call 508-820-1444)
• **48 hours** — Written accident report deadline
• **72 hours** — Minimum advance notice before digging (Dig Safe 811)`,
        },
        {
          heading: 'OSHA Excavation Numbers',
          body: `• **4 feet** — Trench depth requiring egress access point (stairway, ladder, or ramp)
• **5 feet** — Trench depth ALWAYS requiring a protective system (no exceptions)
• **25 feet** — Maximum lateral travel distance to egress point in a trench
• **2 feet** — Minimum spoil pile setback from trench edge
• **1.5 tsf** — Minimum strength for Type A soil classification (≥1.5 tsf)
• **0.5 tsf** — Maximum strength for Type C soil classification (<0.5 tsf)
• **¾:1** — Type A maximum slope ratio (53° from horizontal)
• **1:1** — Type B maximum slope ratio (45° from horizontal)
• **1½:1** — Type C maximum slope ratio (34° from horizontal)
• **20 feet** — Excavation depth above which a PE-designed protective system is required
• **19.5%** — Oxygen threshold for hazardous atmosphere in excavation
• **24 hours** — Utility company response window after Dig Safe notification`,
        },
        {
          heading: 'Equipment & Hydraulic Numbers',
          body: `• **280–350 bar (4,060–5,075 psi)** — Typical excavator hydraulic working pressure
• **420 bar (6,090 psi)** — Peak hydraulic relief pressure (some machines)
• **4:1** — Minimum hose burst-to-working-pressure safety factor
• **10 feet** — Minimum clearance from energized overhead power lines (up to 50 kV)
• **20–30 mm** — Track sag specification for mid-size excavators
• **July 15, 2019** — ROPS standard cutoff date (pre: SAE; post: ISO 3471:2008)
• **SAE J386-1969** — Seat belt standard required with ROPS
• **SAE J237** — Loader/dozer braking standard
• **SAE J1307** — Hand signal standard required by 230 CMR 6.00`,
        },
      ],
    },
    {
      id: 'exam-strategy',
      title: 'Exam Strategy — How to Approach Questions',
      icon: '🧠',
      color: 'border-blue-500',
      headerBg: 'bg-blue-50',
      content: [
        {
          heading: 'Reading the Question',
          body: `**Step 1: Read the entire question before looking at options.**
Many candidates read the first few words, assume they know the answer, and miss a qualifying condition in the second half of the question.

**Step 2: Identify what type of question it is:**
• A number question: "What is the maximum...?" → go directly to your memorized thresholds
• A scenario question: "An operator finds X... what should they do?" → apply the removal-from-service or safety rules
• A classification question: "What type of soil is this?" → go through the classification criteria systematically
• A regulation question: "Which standard governs...?" → match equipment type to standard (J237, J386, etc.)

**Step 3: Watch for qualifiers:**
• "ALWAYS" and "NEVER" and "NO EXCEPTIONS" — these point to absolute rules (5-foot rule, ROPS damage removal, seat belt requirement)
• "MAY" and "UNLESS" — these point to conditional rules with exceptions
• "OR" vs. "AND" — the licensing thresholds use OR; the approval process uses AND`,
        },
        {
          heading: 'Elimination Strategy',
          body: `When unsure, eliminate clearly wrong options first:

**1. Eliminate "do nothing" or "continue operating" options** when the scenario describes a safety defect. On this exam, defects = action, not tolerance.

**2. Eliminate options that involve unauthorized action.** If the question describes an operator making a modification or overriding a safety system without approval, eliminate it.

**3. Eliminate options that confuse two known standards.** If you know J237 is for loaders and J386 is for seat belts, and the question asks about grader braking — eliminate both J237 and J386 as the answer (correct answer is J236).

**4. In "what should you do" scenarios:** The most protective action is usually correct. "Tag out and notify supervisor" beats "monitor it and continue."

**5. When two options seem right:** Ask which one is more specific to the regulation. The answer that cites the actual rule usually beats a general safety principle.`,
        },
        {
          heading: 'Common Exam Traps',
          body: `**Trap 1: "Private property" is not an exemption.**
Unlicensed operation on private land is still a violation. The only relevant exemptions are agricultural use, industrial equipment on company property, and approved apprenticeship programs.

**Trap 2: The 5-foot rule has NO exceptions.**
A competent person can waive the protective system for excavations LESS THAN 5 feet. At 5 feet and above, there is no exception — no matter how stable the soil appears.

**Trap 3: A spotter does NOT replace a backup alarm in all cases.**
OSHA allows a designated observer as an ALTERNATIVE to the alarm. But the observer must be specifically designated and performing that function — a random nearby worker is not sufficient.

**Trap 4: Modification requires MANUFACTURER approval, not engineer approval.**
A PE can design a modification — but it still needs the OEM's written authorization. A PE design alone is not sufficient.

**Trap 5: "Direct supervision" for apprentices means physically present.**
An apprentice cannot operate while the supervising operator is elsewhere on the site, available by radio. "Direct supervision" means on-site, observing.

**Trap 6: Water in the trench = Type C, regardless of soil strength.**
Even clay with 2.0 tsf strength becomes Type C if there is standing water in the trench.`,
        },
      ],
    },
    {
      id: 'regulatory-structure',
      title: 'Regulatory Structure — Who Does What',
      icon: '🏛️',
      color: 'border-green-500',
      headerBg: 'bg-green-50',
      content: [
        {
          heading: 'Federal vs. State Authority',
          body: `Understanding which authority each rule comes from helps you answer "which regulation governs X" questions:

**Federal OSHA (29 CFR 1926):**
• Sets minimum safety standards for construction work nationwide
• Does NOT issue hoisting licenses — that is a state function
• Enforces through inspections; citations and fines
• Key standards for 2A: 1926.600, 1926.602, 1926.650–652

**Massachusetts OPSI (Office of Public Safety and Inspections):**
• Issues and enforces MA hoisting licenses under MGL Chapter 146
• Administers the hoisting exam
• Enforces 230 CMR 6.00 (MA hoisting equipment operating rules)
• Sets accident reporting requirements (520 CMR 6.11)

**MA Division of Occupational Licensure (DOL):**
• Processes license applications and renewals
• Where you submit paperwork and fees

**Key rule:** If a question asks "Who administers the MA hoisting exam?" → OPSI. If "Which federal OSHA standard governs backup alarms on skid steers?" → 1926.602.`,
        },
        {
          heading: 'Standards Bodies (SAE, ISO, ANSI)',
          body: `OSHA and state regulations reference industry standards from private standards organizations. These organizations write the technical specifications; OSHA and states adopt them by reference.

**SAE International** (formerly Society of Automotive Engineers):
• J237: Loader/dozer braking
• J236: Grader braking
• J319b: Scraper braking
• J321a: High-speed equipment fenders
• J386-1969: Seat belts for construction equipment
• J1307-2023: Excavator/backhoe hand signals
• J320a, J394-397: ROPS standards (pre-2019 equipment)

**ISO** (International Organization for Standardization):
• ISO 3471:2008: ROPS standard (required for equipment post-July 15, 2019)
• ISO 3449: FOPS standard

**What you need to know:** Know which SAE standard applies to which equipment type, and know the J386 seat belt standard. You do not need to memorize the content of these standards — just their numbers and what equipment they apply to.`,
        },
      ],
    },
  ],
  quickFacts: [
    { label: 'Exam questions (approx)', value: '30–40 multiple choice' },
    { label: 'Passing score', value: '70%' },
    { label: 'Retake wait time', value: '60 days' },
    { label: 'Exam day — bring', value: 'Government-issued photo ID' },
    { label: 'Most tested numbers', value: '5 ft (protective system), 4 ft (egress), 2 ft (spoil)' },
    { label: '1.5 tsf = Type', value: 'A (≥1.5 tsf)' },
    { label: '<0.5 tsf = Type', value: 'C (<0.5 tsf)' },
    { label: 'Water in trench = Type', value: 'C (always)' },
    { label: 'Fissured soil', value: 'Cannot be Type A' },
    { label: 'ROPS modification without approval', value: 'Violation — remove from service' },
  ],
  defaultOpenSections: ['critical-numbers'],
};

export default data;
