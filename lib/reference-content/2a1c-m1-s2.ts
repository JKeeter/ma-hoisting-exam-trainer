import { ReferencePageProps } from '@/components/ReferencePage';

const data: ReferencePageProps = {
  title: 'MGL §§ 64–67 + 230 CMR 6.00 Overview',
  subtitle: 'MA 2A/1C Hoisting License · Module 1, Session 2',
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

• **Group 1:** Cranes — friction drum (1A), hydraulic (1B), telescoping boom and wheel loaders (1C), industrial lift trucks (1D)
• **Group 2:** Excavating machinery — all excavators, backhoes, skid steers (2A); specialty excavating (2B); aerial lifts (2C)
• **Group 3:** Specialty equipment — pile drivers, derricks, cableways (3A)
• **Group 4:** Compact equipment — mini-excavators and compact loaders (4G)

**For 2A/1C operators:** You must know the rules for both Group 1C and Group 2A equipment. The 2A rules govern excavators during digging operations; the 1C rules govern wheel loaders, telescoping equipment, and loader-backhoes during lifting operations.`,
        },
      ],
    },
    {
      id: 'mgl-sections',
      title: 'MGL §§ 64–67 — What Each Section Covers',
      icon: '📜',
      color: 'border-blue-500',
      headerBg: 'bg-blue-50',
      content: [
        {
          heading: 'MGL §64 — General Safety Duties',
          body: `§64 establishes the general safety framework for hoisting engineers. It sets the foundation that operators must be "competent and trustworthy" before receiving a license, and that fitness — physical and mental — is a requirement.

**Key obligations:**
• Operators must be physically and mentally capable of safe operation at all times
• An operator who is impaired (by illness, injury, fatigue, drugs, or alcohol) must not operate hoisting machinery
• 230 CMR 6.00 expands on this: operators must maintain "full attentiveness" and cannot engage in practices that divert attention during operation

**For 2A/1C operators:** This duty applies equally when you are on the excavator and when you transition to a wheel loader or loader-backhoe.`,
        },
        {
          heading: 'MGL §65 — Examination & Qualification',
          body: `§65 governs how licenses are issued. It requires that applicants pass an examination before receiving a license.

**What the exam tests (per §65):**
• **Practical knowledge** of all working parts of the machinery
• Safe operating practices specific to the machinery category
• Hand signals required by regulation
• Massachusetts laws and regulations governing hoisting operations

**Exam types:** The examination may be written, practical (hands-on), or both, at the commissioner's discretion.

**Revoked licenses:** If your license has been revoked for a safety violation, you must pass BOTH a written AND a practical examination before reinstatement — not just one.

**Passing score:** 70% minimum on written examination.`,
        },
        {
          heading: 'MGL §66 — Employer Responsibility',
          body: `§66 places responsibility on employers who use hoisting equipment.

**What employers are required to do:**
• Verify that any operator assigned to hoisting equipment holds a valid license in the correct restriction class before they begin work
• Designate a licensed operator as the "responsible person in charge" for public utility exemptions
• Not direct or permit an unlicensed person to operate hoisting machinery
• Ensure operators are not operating while impaired

**Employer liability:** An employer who knowingly directs an unlicensed person to operate hoisting equipment faces separate penalties — the fine for "allowing unlicensed operation" is **$1,000–$3,000 per violation**, higher than the fine for the unlicensed operator themselves.

**2A/1C scenario:** An employer who assigns a 2A-only licensed operator to run a wheel loader (which requires 1C) faces §66 liability.`,
        },
        {
          heading: 'MGL §67 — Accident Reporting',
          body: `§67 (implemented through 520 CMR 6.11) establishes mandatory accident reporting for hoisting machinery incidents.

**What must be reported:**
• Any serious injury involving hoisting machinery
• Property damage from a hoisting machinery incident
• Any condition involving hoisting machinery that creates a hazard to public health or safety

**Who reports:** The licensed operator, the equipment owner, or the owner's authorized representative.

**Reporting timeline — two-step requirement:**
• **Step 1:** Telephone report within **ONE HOUR** of the incident or its discovery
  - Hotline: **(508) 820-1444** (OPSI 24-hour incident reporting line)
• **Step 2:** Written report within **48 hours**

**Equipment restriction after incident:** Equipment involved in a serious incident **cannot be moved, dismantled, or altered** until OPSI inspects it and grants approval — except to prevent further injury to persons or to allow emergency vehicle access.

**Exam note:** The 1-hour phone/48-hour written timeline is testable. Do not confuse with OSHA's fatality reporting timeline (8 hours for fatality, 24 hours for in-patient hospitalization under 29 CFR 1904.39).`,
        },
      ],
    },
    {
      id: 'operating-rules',
      title: '230 CMR 6.00 — Operating Rules for Both 2A and 1C Equipment',
      icon: '📏',
      color: 'border-yellow-500',
      headerBg: 'bg-yellow-50',
      content: [
        {
          heading: 'Signaler Rule — Most Tested Topic',
          body: `**Only the designated, approved signaler may direct the operator's movements.**

This is the most commonly tested 230 CMR 6.00 rule on the MA hoisting exam. The rule is absolute — no exceptions, and it applies equally to excavator and loader operations.

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
          body: `**No persons may be within the full working radius of an excavator or loader during any boom or bucket operation.**

**"Full working radius"** means the complete arc through which the machine can swing or extend, at the maximum reach of the boom and stick. This is larger than most people assume:
• On a mid-size excavator: the radius extends 20–30+ feet from the center of rotation
• On a wheel loader: the bucket can extend 10–15+ feet in front, and the entire machine body is the hazard zone
• On a loader-backhoe: the backhoe boom sweep creates a separate and often larger hazard zone behind the machine

**Practical application:**
• Establish physical barriers (cones, fencing, barricades) at the swing radius boundary on populated job sites
• Brief all workers on the exclusion zone before work begins each shift
• Do not allow any person to cross the boundary during operation

**Loader-backhoe note:** The backhoe rear digging area and the front loader area create TWO separate exclusion zones on the same machine.`,
        },
        {
          heading: 'Trench Straddling — Prohibited',
          body: `**Excavating machinery shall not straddle open trenches.**

This prohibition is a 230 CMR 6.00 rule with no exceptions for excavators. "Straddling" means positioning the machine with one track on each side of an open trench.

**Why it is prohibited:**
• Machine weight creates surcharge load directly at the trench walls from both sides
• Vibration from the machine significantly increases cave-in probability
• A partial cave-in under either track causes the machine to tip into the trench
• Workers in the trench have no warning and no escape

**Correct procedure:** Position the machine with both tracks on the same side of the trench, at a safe distance from the edge (generally at least twice the trench depth).`,
        },
        {
          heading: 'Manufacturer Specifications',
          body: `230 CMR 6.00 requires operators to follow **all manufacturer specifications and safety protocols** for the specific equipment being operated.

This has practical implications for exam questions:
• A load capacity shown on a plate or load chart is a manufacturer specification — violating it violates 230 CMR 6.00
• Modification of the machine without manufacturer approval violates 230 CMR 6.00 (and OSHA 1926.602)
• Attachments not approved by the manufacturer must not be used

**Exam scenario:** An operator installs a larger bucket than the machine's rated payload allows — this violates both 230 CMR 6.00 (manufacturer specs) and potentially OSHA 1926.602 (modification without approval).`,
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
    { label: 'Trench straddling', value: 'Prohibited — no exceptions (excavators)' },
    { label: 'Hand signal standard', value: 'SAE J1307-2023' },
    { label: 'What to do if signaler not visible', value: 'Stop all movement immediately' },
    { label: 'Conflicting signals rule', value: 'Stop — except Emergency Stop always overrides' },
    { label: 'Accident report — phone', value: 'Within 1 hour — call (508) 820-1444' },
    { label: 'Accident report — written', value: 'Within 48 hours' },
    { label: 'Equipment after incident', value: 'Cannot be moved until OPSI inspects' },
    { label: 'Manufacturer spec compliance', value: 'Required by 230 CMR 6.00' },
    { label: 'Employer for unlicensed operation', value: '$1,000–$3,000 per violation' },
  ],
  defaultOpenSections: ['operating-rules'],
};

export default data;
