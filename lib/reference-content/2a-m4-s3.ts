import { ReferencePageProps } from '@/components/ReferencePage';

const data: ReferencePageProps = {
  title: 'Practice Exam 2 & Exam Day Prep',
  subtitle: 'MA 2A Hoisting License · Module 4, Session 3',
  sections: [
    {
      id: 'operations-review',
      title: 'Operations Quick Review',
      icon: '🦾',
      color: 'border-slate-400',
      headerBg: 'bg-slate-100',
      content: [
        {
          heading: 'Removal-from-Service — Master List',
          body: `These conditions require IMMEDIATE removal from service with NO exceptions:

**Safety systems:**
• Non-functional seat belt (latch broken, webbing cut/frayed)
• Damaged or modified ROPS/FOPS (any crack, bend, or unauthorized change)
• Discharged or missing fire extinguisher
• Non-functional backup alarm (when rear view is obstructed)
• Non-functional horn

**Hydraulic system:**
• Active hydraulic leak from any hose or fitting (dripping = active)
• Bulging hydraulic hose (inner reinforcement failed)
• Hose with abrasion through outer cover to wire braid

**Structural:**
• Any crack in boom, stick, or bucket mounting ears
• Any crack in the machine frame or slew ring
• Bucket teeth missing with exposed bucket shell metal
• Track partially derailed

**Brakes / drive:**
• Brakes unable to hold machine at rated load
• Steering system failure

**Fluids:**
• Engine oil leak (active drip, not just residue)
• Milky hydraulic fluid (water contamination — must be serviced)`,
        },
        {
          heading: 'Scenario Decision Tree — "What Should You Do?"',
          body: `Use this thought process for scenario-based exam questions:

**Step 1: Is anyone in immediate danger?**
• Yes → Emergency stop / evacuate / 911

**Step 2: Does the scenario describe a defect or violation?**
• Defect (broken seat belt, active leak, ROPS damage) → Remove from service and notify supervisor
• Violation (unlicensed operator, no protective system in 5+ ft trench) → Stop work and correct the condition

**Step 3: Is there a specific regulation that addresses this?**
• If yes → apply the regulation's required action
• If no → apply the most protective reasonable action

**Step 4: Do NOT choose options that:**
• Allow continued operation with a known safety defect
• Let the operator make the final call on a regulation compliance question
• Reduce protective measures without authority to do so

**Common correct answers in "what should you do" questions:**
• "Remove the machine from service and notify your supervisor"
• "Stop all machine movement immediately"
• "Remove workers from the trench until conditions are reassessed by the competent person"
• "Call 811 before any excavation begins"`,
        },
        {
          heading: 'Hand Signal Quick Reference',
          body: `For exam questions about hand signals, focus on these:

**Emergency Stop** → Crossed arms across chest — every person can give this at any time
**Stop** → One arm extended, palm down, wave back and forth
**Raise Boom** → Arm out, thumb up
**Lower Boom** → Arm out, thumb down
**Swing** → Arm extended, index finger pointing in direction of swing
**Travel** → Rotate fists in circles, in direction of travel
**Dog Everything** → Hands clasped together

**Rules:**
• Only designated signaler gives direction signals
• Any person may give Emergency Stop
• Operator must stop if signaler is not visible
• Conflicting direction signals → stop

**Standard:** SAE J1307-2023, required by 230 CMR 6.00`,
        },
        {
          heading: 'Soil Classification Speed Drill',
          body: `Practice applying classification criteria quickly:

**Scenario A:** Thumb penetrates easily more than 2 inches. No cohesion.
→ **Type C** (low strength, granular behavior)

**Scenario B:** Soil tests at 1.8 tsf. No fissures visible. No prior disturbance. No vibration sources nearby.
→ **Type A** (≥1.5 tsf, no disqualifiers)

**Scenario C:** Soil tests at 1.8 tsf. BUT there are visible fissure cracks in the wall.
→ **Type B at best** (fissuring disqualifies Type A — 1.8 tsf puts it in Type A strength range, but the fissure downgrades it)

**Scenario D:** Clay soil, 1.2 tsf strength, previously disturbed (utility backfill).
→ **Type B** (0.5–1.5 tsf range, and previously disturbed soil cannot be Type A regardless of strength)

**Scenario E:** Good soil, but there is 4 inches of standing water at the bottom of the trench.
→ **Type C** (water automatically = Type C)

**Scenario F:** Well-bonded granite — can be excavated with vertical walls and remains intact.
→ **Stable Rock** (the category above Type A)`,
        },
      ],
    },
    {
      id: 'exam-day',
      title: 'Exam Day — What to Expect',
      icon: '📝',
      color: 'border-blue-500',
      headerBg: 'bg-blue-50',
      content: [
        {
          heading: 'Logistics & Requirements',
          body: `**What to bring:**
• Government-issued photo ID (driver's license, passport, state ID)
• Confirmation of exam appointment
• Any documentation required by the testing center

**What you cannot bring:**
• Cell phones into the testing room (typically stored in a locker)
• Notes or reference materials
• Hats with brims (some testing centers require removal for camera verification)

**Arrive:** At least 15 minutes early. Late arrival may result in forfeiture of your exam slot without refund.

**Exam format:** Multiple choice, 30–40 questions, paper or computer-based depending on the testing center. You may review and change answers before submitting.

**Time limit:** Typically 60–90 minutes. Most candidates finish in 30–45 minutes.

**After completing:** Results are typically provided immediately (computer) or within a few days (paper).`,
        },
        {
          heading: 'If You Pass',
          body: `• OPSI issues your 2A hoisting engineer license
• License is valid for 2 years from date of issuance
• Keep your license card on your person when operating equipment — OPSI inspectors may request it on site (MGL §54)
• License is specific to the restriction class(es) you tested for — a 2A license does not authorize operating a 1A crane`,
        },
        {
          heading: 'If You Fail (Score Below 70%)',
          body: `• You must wait **60 days** before retesting. No appeals, no exceptions.
• OPSI or the testing center should provide feedback on which subject areas you scored poorly in
• Use the 60-day period strategically:
  - Identify the specific topics where you lost the most points
  - Focus study on those areas — not general review
  - Retake module quizzes in the areas where you struggled
  - Review the critical numbers and regulatory structure sections of this reference
• Schedule your retake before the 60-day window expires so you have a confirmed date`,
        },
      ],
    },
    {
      id: 'night-before',
      title: 'Night Before — Final Review',
      icon: '🌙',
      color: 'border-indigo-400',
      headerBg: 'bg-indigo-50',
      content: [
        {
          heading: 'Last-Night Priority Review',
          body: `Do NOT try to learn new material the night before. Focus only on what you already know — this is reinforcement, not cramming.

**Priority 1 — Numbers (10 minutes):**
Run through the critical numbers list until each answer comes automatically:
• 5 feet → protective system required
• 4 feet → egress required
• 2 feet → spoil pile setback
• 25 feet → maximum egress distance
• 1.5 tsf → Type A minimum strength
• 0.5 tsf → Type C maximum strength
• 70% → passing score
• 60 days → retest wait
• 10 feet → overhead line clearance

**Priority 2 — Hand signals (5 minutes):**
Review the hand signal reference page. Know Emergency Stop, Stop, Raise, Lower, Swing, and Travel — these are the most commonly tested.

**Priority 3 — Removal-from-service triggers (5 minutes):**
Review the list above. The exam frequently presents a scenario with a defect and asks what to do.

**Priority 4 — Sleep:**
A well-rested mind performs significantly better on multiple-choice exams than an exhausted mind with more knowledge. Go to bed at a reasonable time.`,
        },
        {
          heading: 'Morning of Exam',
          body: `• Eat a full breakfast — low blood sugar impairs concentration and decision-making
• Review your critical numbers one more time during breakfast (5 minutes maximum — do not study extensively on exam morning)
• Arrive at the testing location early
• During the exam, if you feel anxious: take three slow breaths before reading each question
• If you encounter a question you are unsure of: mark it, move on, come back with fresh eyes
• Do not change answers without a clear reason — your first instinct is correct more often than not on fact-based exams`,
        },
      ],
    },
  ],
  quickFacts: [
    { label: 'Exam format', value: '30–40 multiple choice, 60–90 minutes' },
    { label: 'Passing score', value: '70%' },
    { label: 'Retake wait (if failed)', value: '60 days' },
    { label: 'Bring to exam', value: 'Government-issued photo ID' },
    { label: 'License once issued', value: 'Carry on person at all times during operation' },
    { label: 'Water + trench', value: 'Automatic Type C — even if soil tests well' },
    { label: 'Any safety defect found', value: 'Remove from service and notify supervisor' },
    { label: 'ROPS/FOPS damage', value: 'Remove from service immediately' },
    { label: '5 feet + trench', value: 'Protective system ALWAYS required — no exceptions' },
    { label: 'Signaler not visible', value: 'Stop all machine movement immediately' },
  ],
  defaultOpenSections: ['operations-review', 'exam-day'],
};

export default data;
