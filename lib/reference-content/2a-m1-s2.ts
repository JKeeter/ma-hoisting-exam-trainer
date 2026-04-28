import { ReferencePageProps } from '@/components/ReferencePage';

const data: ReferencePageProps = {
  title: '230 CMR 6.00 — Operating Rules for Excavating Machinery',
  subtitle: 'MA 2A Hoisting License · Module 1, Session 2',
  sections: [
    {
      id: 'overview',
      title: 'Statute vs. Regulation — How They Work Together',
      icon: '⚖️',
      color: 'border-slate-400',
      headerBg: 'bg-slate-100',
      content: [
        {
          heading: 'MGL Chapter 146 vs. 230 CMR 6.00',
          body: `**MGL Chapter 146** is a statute — enacted by the Massachusetts legislature. It establishes the fundamental requirement to hold a hoisting license and sets penalties for violations.

**230 CMR 6.00** is a regulation — administrative rules issued by OPSI under the authority granted by MGL Chapter 146. It expands on the statute with specific technical requirements for equipment operation.

**Hierarchy:** When both apply, the statute (MGL) controls. Where MGL is silent, 230 CMR fills in the details. Both must be followed.

**Exam tip:** MGL sets the "what" (who needs a license, what the penalties are). 230 CMR sets the "how" (exactly how equipment must be operated, what inspections are required, what signals must be used).`,
        },
        {
          heading: 'Equipment Categories Under 230 CMR 6.00',
          body: `230 CMR 6.00 classifies hoisting machinery into categories that map to the license restriction classes:

• **Group 1:** Cranes — friction drum (1A), hydraulic (1B), telescoping (1C), industrial lift trucks (1D)
• **Group 2:** Excavating machinery — all excavators, backhoes, skid steers (2A); specialty excavating (2B); aerial lifts (2C)
• **Group 3:** Specialty equipment — pile drivers, derricks, cableways (3A)
• **Group 4:** Compact equipment — mini-excavators and compact loaders (4G)

Each group has specific operating rules. The 2A rules govern all Group 2A equipment regardless of machine size.`,
        },
      ],
    },
    {
      id: 'operating-rules',
      title: '230 CMR 6.00 — Operating Rules for 2A Equipment',
      icon: '📏',
      color: 'border-blue-500',
      headerBg: 'bg-blue-50',
      content: [
        {
          heading: 'Signaler Rule — Most Tested Topic',
          body: `**Only the designated, approved signaler may direct the operator's movements.**

This is the most commonly tested 230 CMR 6.00 rule on the MA hoisting exam. The rule is absolute — no exceptions.

**What "approved signaler" means:**
• A person assigned and trained to give the SAE hand signals
• Positioned where the operator can see them at all times
• The only person whose directional signals the operator may follow

**Who is NOT authorized to direct the operator:**
• The site superintendent or general contractor, unless also designated as the signaler
• A coworker who waves their hands
• Anyone using radio commands as a substitute for hand signals (radio may supplement but not replace the designated signaler system)

**When signaler is not visible:** The operator must STOP ALL MOVEMENT immediately. Do not continue based on the last signal received.

**Conflicting signals:** If two people give conflicting direction signals simultaneously, the operator must STOP and wait for resolution. Exception: An Emergency STOP signal from any person overrides everything — respond immediately.`,
        },
        {
          heading: 'Swing Radius — Personnel Exclusion',
          body: `**No persons may be within the full working radius of an excavator during any boom or bucket operation.**

**"Full working radius"** means the complete arc through which the machine can swing, at the maximum reach of the boom and stick. This is larger than most people assume — on a mid-size excavator, the radius extends 20–30+ feet from the center of rotation.

**Why this matters:** An excavator swings the entire upper structure, including the counterweight. The rear counterweight sweeps an arc behind the machine that can strike workers who are not watching.

**Practical application:**
• Establish physical barriers (cones, fencing, barricades) at the swing radius boundary on populated job sites
• Brief all workers on the exclusion zone before work begins each shift
• Do not allow any person to cross the boundary during operation — not even briefly
• Pedestrians and vehicle operators on adjacent areas must be accounted for`,
        },
        {
          heading: 'Trench Straddling — Prohibited',
          body: `**Excavating machinery shall not straddle open trenches.**

This prohibition is a 230 CMR 6.00 rule with no exceptions. "Straddling" means positioning the machine with one track on each side of an open trench.

**Why it is prohibited:**
• Machine weight creates surcharge load directly at the trench walls from both sides
• Vibration from the machine significantly increases cave-in probability
• A partial cave-in under either track causes the machine to tip into the trench
• Workers in the trench have no warning and no escape

**Correct procedure:** Position the machine with both tracks on the same side of the trench, at a safe distance from the edge (generally at least twice the trench depth).`,
        },
        {
          heading: 'Personnel on the Machine',
          body: `**Authorized occupants during operation:**
• The licensed operator (required to be in the operator seat at all times during operation)
• One apprentice holding a valid apprentice hoisting license, under direct supervision

**Prohibited:**
• Unauthorized passengers in the cab, on the machine body, or on any attachment
• Personnel riding in the bucket, on the counterweight, or anywhere on the machine exterior
• Personnel on the machine during travel between work areas unless they are the licensed operator

**Machine operation while personnel are working nearby:** The licensed operator is responsible for verifying the swing radius and working area are clear before each movement. "I didn't see them" is not a defense to a 230 CMR violation.`,
        },
        {
          heading: 'Manufacturer Specifications',
          body: `230 CMR 6.00 requires operators to follow **all manufacturer specifications and safety protocols** for the specific equipment being operated.

This has practical implications for exam questions:
• A load capacity shown on a plate or load chart is a manufacturer specification — violating it violates 230 CMR 6.00
• Modification of the machine without manufacturer approval violates 230 CMR 6.00 (and OSHA 1926.602)
• Attachments not approved by the manufacturer must not be used

**Exam scenario:** An operator uses a heavier bucket than the machine's rated payload — this violates both 230 CMR 6.00 (manufacturer specs) and potentially OSHA 1926.602 (modification without approval).`,
        },
      ],
    },
    {
      id: 'hand-signals',
      title: 'SAE J1307 — Required Hand Signals',
      icon: '✋',
      color: 'border-yellow-500',
      headerBg: 'bg-yellow-50',
      content: [
        {
          heading: 'Standard Required by 230 CMR 6.00',
          body: `230 CMR 6.00 requires all excavating machinery operations to use hand signals conforming to **SAE J1307** (most recent edition: 2023).

The full signal set is available in the Hand Signals Quick Reference page. Key signals for the 2A exam:

**Stop:** Arm extended horizontally, palm down, wave back and forth
**Emergency Stop:** Both arms crossed in front of chest — respond IMMEDIATELY
**Raise Boom:** Arm extended, thumb pointing up
**Lower Boom:** Arm extended, thumb pointing down
**Swing:** Arm extended, index finger pointing in direction of swing
**Travel:** Fists closed, rotate in direction of travel
**Dog Everything / Hold:** Hands clasped together in front of body

**Critical rule:** Only the designated signaler uses these signals to direct the machine. Other personnel may only give the Emergency Stop signal.`,
        },
        {
          heading: 'Signaler Positioning Requirements',
          body: `For hand signals to be effective, the signaler must be positioned correctly:

• **Always visible to the operator** — not behind any part of the machine, not below the operator's sight line
• **Never within the swing radius** — the signaler must direct from outside the exclusion zone
• **Clear line of sight** — not obscured by dust, spoil piles, or other equipment
• **Stable footing** — must be able to give clear, deliberate signals without slipping or being distracted

**When the signaler moves:** The operator must STOP until the signaler is repositioned and visible again. Do not follow signals given from a position where the signaler cannot be clearly seen.`,
        },
      ],
    },
    {
      id: 'inspection',
      title: 'Equipment Inspections Under 230 CMR 6.00',
      icon: '🔍',
      color: 'border-green-500',
      headerBg: 'bg-green-50',
      content: [
        {
          heading: 'Annual and Periodic Inspection Requirements',
          body: `230 CMR 6.00 establishes inspection requirements for hoisting machinery that go beyond OSHA's daily inspection rule:

**Periodic inspection:** Required annually by a qualified inspector (typically every 12 months). Results must be documented and available for OPSI inspection.

**Pre-operational inspection:** Required before each shift — the OSHA-basis requirement for daily inspections (29 CFR 1926.600) is also consistent with 230 CMR 6.00 expectations.

**Certificate of inspection:** Some categories of hoisting equipment require an OPSI-issued certificate of inspection before they may be operated. Verify whether your specific equipment class requires this certificate.

**Out-of-service defects:** Equipment with defects that affect safe operation must be tagged out of service until repaired. The tag must be placed on the controls to prevent operation.`,
        },
      ],
    },
  ],
  quickFacts: [
    { label: 'Only person who can direct operator', value: 'Designated approved signaler' },
    { label: 'Personnel in swing radius', value: 'Prohibited during all operations' },
    { label: 'Trench straddling', value: 'Prohibited — no exceptions' },
    { label: 'Max additional personnel allowed', value: '1 apprentice (licensed) under direct supervision' },
    { label: 'Hand signal standard', value: 'SAE J1307-2023' },
    { label: 'What to do if signaler not visible', value: 'Stop all movement immediately' },
    { label: 'Conflicting signals rule', value: 'Stop — except Emergency Stop always overrides' },
    { label: 'Manufacturer spec compliance', value: 'Required by 230 CMR 6.00' },
  ],
  defaultOpenSections: ['operating-rules'],
};

export default data;
