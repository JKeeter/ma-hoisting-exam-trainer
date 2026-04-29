import { ReferencePageProps } from '@/components/ReferencePage';

const data: ReferencePageProps = {
  title: '29 CFR 1926 Highlights for Operators',
  subtitle: 'MA 2A/1C Hoisting License · Module 4, Session 1',
  sections: [
    {
      id: '1926-602',
      title: '29 CFR 1926.602 — Equipment Operation',
      icon: '📋',
      color: 'border-slate-400',
      headerBg: 'bg-slate-100',
      content: [
        {
          heading: 'Seat Belts, Braking & Backup Alarms',
          body: `**Seat belt — SAE J386-1969:** Required on all ROPS-equipped equipment. A non-functional seat belt is a removal-from-service condition.

**Braking standards by equipment type:**
• **Loaders and dozers: SAE J237** — must stop and hold at full rated load
• **Graders: SAE J236**
• **Scrapers: SAE J319b**
• **High-speed equipment (>15 mph): SAE J321a** (fender requirements)

**Reverse alarm — two alternatives (1926.602(a)(9)):**
• Option A: Audible backup alarm, distinguishable above ambient noise
• Option B: Designated observer who signals safety before each backup movement

Both excavators and loaders typically have obstructed rear views — backup alarms are effectively required on 2A/1C equipment.

**Scissor point guards (1926.602(a)(10)):** Required at all loader lift-arm scissor points. Missing guards = immediate OSHA citation.

**Modification prohibition:** No changes without written manufacturer approval. Unauthorized ROPS modifications are especially dangerous — they void the certification.`,
        },
      ],
    },
    {
      id: 'fall-protection',
      title: '29 CFR 1926.500 — Fall Protection',
      icon: '⛑️',
      color: 'border-orange-400',
      headerBg: 'bg-orange-50',
      content: [
        {
          heading: 'When Fall Protection Applies to Equipment Operators',
          body: `Fall protection (1926.500 Subpart M) applies when operators work at heights — not just when operating from within the cab.

**Triggers for fall protection:**
• Working at 6 feet or more above a lower level
• Mounting or dismounting equipment on elevated platforms
• Working on the machine itself for maintenance at height

**Types of fall protection:**
• Guardrails at the edge of elevated work platforms
• Personal fall arrest system (harness with lanyard)
• Safety net systems

**Common scenario:** An excavator operator works on a slope at 8 feet above the adjacent grade. If they exit the cab and are on the machine at that height, fall protection may be required.`,
        },
      ],
    },
    {
      id: 'subpart-p',
      title: '29 CFR 1926.650–652 — Excavation (Subpart P)',
      icon: '🕳️',
      color: 'border-yellow-500',
      headerBg: 'bg-yellow-50',
      content: [
        {
          heading: 'Subpart P Quick Reference for Operators',
          body: `The operator's role in excavation safety under Subpart P:

**As the equipment operator:**
• Position machine per setback rules (2× depth from trench edge)
• Do NOT straddle open trenches (230 CMR 6.00)
• Stop machine work when the competent person needs to re-inspect after rain or changed conditions
• Do not allow workers in the trench while actively digging

**Soil classification — what the operator needs to know:**
• Type A (≥1.5 tsf): Clay, hardpan — not fissured, not previously disturbed
• Type B (0.5–1.5 tsf): Silt, gravel, disturbed soil
• Type C (<0.5 tsf): Sand, water-bearing soils, any submerged soil
• Water in trench = automatic Type C

**Protective system slopes:**
• Type A: ¾:1 (53°)
• Type B: 1:1 (45°)
• Type C: 1½:1 (34°)`,
        },
      ],
    },
    {
      id: 'loto',
      title: 'Lock-Out / Tag-Out (LOTO) & PPE',
      icon: '🔒',
      color: 'border-green-500',
      headerBg: 'bg-green-50',
      content: [
        {
          heading: 'LOTO Procedures for Equipment Operators',
          body: `**When LOTO applies:** Any time maintenance, service, or repair is performed on excavating equipment — the machine must be locked out to prevent accidental energization.

**Operator LOTO procedure:**
1. Stop all machine movement
2. Lower all implements to the ground (boom, bucket, loader arms)
3. Shut down the engine
4. Remove the key and retain it (or lock the ignition)
5. Relieve hydraulic pressure per manufacturer procedure
6. Place a "Do Not Operate" tag on the controls

**Why this matters:** A machine started during hydraulic service can cause a high-pressure injection injury or crush a worker under an implement.

**PPE requirements for 2A/1C operators:**
• Hard hat (required on all construction sites)
• Safety glasses or face shield when near hydraulic work
• High-visibility vest when working in traffic zones
• Steel-toed boots
• Hearing protection in high-noise environments (>85 dB sustained)`,
        },
        {
          heading: 'Common OSHA Violations — 2A/1C Equipment',
          body: `Based on OSHA inspection data, the most frequently cited violations for excavating equipment:

• Missing or non-functional seat belts (1926.602(c)(1))
• No backup alarm on equipment with obstructed rear view (1926.602(a)(9))
• Unguarded scissor points on loader lift arms (1926.602(a)(10))
• Operating without a valid 2A or 1C hoisting license (MGL §53)
• Equipment with unauthorized ROPS modifications (1926.602)
• No protective system in excavations ≥5 feet (1926.652)
• Spoil pile within 2 feet of trench edge (1926.651)
• Failure to call 811 before excavating (MA law)`,
        },
      ],
    },
  ],
  quickFacts: [
    { label: 'Seat belt standard', value: 'SAE J386-1969 — required with ROPS' },
    { label: 'Loader/dozer braking standard', value: 'SAE J237' },
    { label: 'Grader braking standard', value: 'SAE J236' },
    { label: 'Backup alarm alternative', value: 'Designated observer (OSHA 1926.602)' },
    { label: 'Scissor point guards', value: 'Required on all loader lift arms' },
    { label: 'Fall protection trigger', value: '6 feet above lower level (Subpart M)' },
    { label: 'Protective system trigger', value: '5 feet — no exceptions (Subpart P)' },
    { label: 'PPE on all construction sites', value: 'Hard hat required minimum' },
    { label: 'LOTO — lower implements', value: 'All implements to ground before service' },
    { label: 'Modification without OEM approval', value: 'Violation — voids ROPS/FOPS certification' },
  ],
  defaultOpenSections: ['1926-602'],
};

export default data;
