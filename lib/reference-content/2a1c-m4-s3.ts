import { ReferencePageProps } from '@/components/ReferencePage';

const data: ReferencePageProps = {
  title: 'Practice Exam 2 & Final Review',
  subtitle: 'MA 2A/1C Hoisting License · Module 4, Session 3',
  sections: [
    {
      id: 'removal-list',
      title: 'Removal-from-Service Master List',
      icon: '🔴',
      color: 'border-red-400',
      headerBg: 'bg-red-50',
      critical: true,
      content: [
        {
          heading: 'Immediate Removal — No Exceptions',
          body: `**Safety systems:**
• Non-functional seat belt (latch broken, webbing cut or frayed)
• Any crack, bend, or deformation in ROPS/FOPS structure
• Missing or discharged fire extinguisher
• Non-functional backup alarm (obstructed rear view)
• Non-functional brakes or steering

**Hydraulic system:**
• Active leak from any hose or fitting
• Bulging hose (inner reinforcement failed)
• Hose abrasion through outer cover to wire braid

**Structural:**
• Any crack in boom, stick, bucket mounting ears, or machine frame
• Missing bucket teeth with exposed shell metal
• Track partially derailed (excavators)
• Bent or cracked stabilizer (loader-backhoe)

**Loader-specific:**
• Missing or unreadable load capacity plate
• Missing scissor point guards on lift arms
• Articulation joint with structural cracking

**Quick coupler:**
• Secondary locking pin missing or not seated
• Any visible crack or deformation in coupler body`,
        },
      ],
    },
    {
      id: 'scenario-drill',
      title: 'Scenario Decision Drill',
      icon: '🧠',
      color: 'border-blue-500',
      headerBg: 'bg-blue-50',
      content: [
        {
          heading: '"What Should You Do?" — Pattern Recognition',
          body: `**Scenario type 1: Defect found during inspection**
Pattern → Remove from service, notify supervisor, do not operate
Example: "Backup alarm on a loader does not sound when you engage reverse" → Tag out; repair before operating

**Scenario type 2: Worker in the hazard zone**
Pattern → Stop all movement immediately; do not proceed until zone is clear
Example: "A coworker walks behind your excavator during a swing" → Stop immediately

**Scenario type 3: Regulatory threshold crossed**
Pattern → Apply the regulation's required action without exception
Example: "You dig a 6-foot trench and there is no protective system" → Stop; install protective system before workers enter

**Scenario type 4: Ambiguous signal or conflicting direction**
Pattern → Stop; wait for resolution; Emergency Stop always overrides
Example: "The signaler waves you forward but the site superintendent says stop" → Stop; the Emergency Stop signal from anyone overrides all movement

**Scenario type 5: Classification question**
Pattern → Apply the threshold systematically; when in doubt, choose the more conservative classification
Example: "Soil tests 1.8 tsf but has fissure cracks" → Type B (fissuring disqualifies Type A regardless of strength)`,
        },
        {
          heading: 'Soil Classification Speed Drill',
          body: `**Scenario A:** Sandy soil, easily crumbles, no cohesion, no water.
→ **Type C** (granular, <0.5 tsf)

**Scenario B:** Clay soil, 1.2 tsf strength, no fissures, no prior disturbance, no water.
→ **Type B** (0.5–1.5 tsf range)

**Scenario C:** Clay soil, 2.0 tsf strength, no fissures, no disturbance.
→ **Type A** (≥1.5 tsf, no disqualifiers)

**Scenario D:** Clay soil, 2.0 tsf, but near active pile driving.
→ **Type B at best** (vibration disqualifies Type A)

**Scenario E:** Any soil, 4-inch standing water at trench bottom.
→ **Type C** (water = automatic Type C)

**Scenario F:** Hard intact granite — excavated with vertical walls, remains intact.
→ **Stable Rock** (natural solid mineral, no classification test needed)`,
        },
      ],
    },
    {
      id: 'exam-day',
      title: 'Exam Day Checklist',
      icon: '📝',
      color: 'border-green-400',
      headerBg: 'bg-green-50',
      content: [
        {
          heading: 'What to Bring & Expect',
          body: `**Required:**
• Government-issued photo ID (driver's license, passport, or state ID)
• Exam appointment confirmation

**What to expect:**
• 30–40 multiple choice questions
• 60–90 minutes allowed
• Computer-based (results immediate) or paper-based (results in a few days)
• No notes, phones, or reference materials in the testing room

**If you pass:** OPSI issues your license. Keep it on your person at all times when operating equipment — inspectors may request it on site (MGL §54).

**If you fail:** 60-day mandatory wait before retesting. Use the time to identify weak areas from your score report and study those specifically.

**Morning of:** Eat a full breakfast. Review your critical numbers one more time. Arrive 15 minutes early.`,
        },
        {
          heading: 'Night-Before Priority Review',
          body: `Do NOT try to learn new material tonight. Reinforce what you already know:

**10 minutes — Numbers:**
• 5 feet = protective system, always
• 4 feet = egress required
• 2 feet = spoil pile setback
• 1.5 tsf = Type A minimum
• 0.5 tsf = Type C maximum
• 70% = passing score
• 10 feet = overhead line clearance
• SAE J237 = loader braking

**5 minutes — Removal-from-service triggers:**
Review the list above. Exam frequently presents a defect scenario and asks what to do.

**5 minutes — Hand signals:**
Emergency Stop (crossed arms), Stop (palm down wave), Raise/Lower (thumb up/down), Swing (point).

**Then sleep.** A rested mind outperforms a cramming mind on fact-based exams every time.`,
        },
      ],
    },
  ],
  quickFacts: [
    { label: 'Exam questions', value: '30–40 multiple choice' },
    { label: 'Passing score', value: '70%' },
    { label: 'Retake wait', value: '60 days' },
    { label: 'Photo ID required', value: 'Yes — government-issued' },
    { label: 'License once issued', value: 'Carry on person when operating' },
    { label: 'Water + any soil = Type', value: 'C' },
    { label: 'Fissured soil cannot be Type', value: 'A' },
    { label: 'Any safety defect', value: 'Remove from service, notify supervisor' },
    { label: '5 feet + no protective system', value: 'Violation — stop work' },
    { label: 'Stabilizers before backhoe work', value: 'Always — no exceptions' },
  ],
  defaultOpenSections: ['removal-list', 'exam-day'],
};

export default data;
