import { ReferencePageProps } from '@/components/ReferencePage';

const data: ReferencePageProps = {
  title: 'Hand Signals & Communication Procedures',
  subtitle: 'MA 2A/1C Hoisting License · Module 3, Session 3',
  sections: [
    {
      id: 'signals',
      title: 'SAE J1307 — Required Hand Signals',
      icon: '✋',
      color: 'border-yellow-500',
      headerBg: 'bg-yellow-50',
      content: [
        {
          heading: 'Complete Signal Reference',
          body: `All signals required by **230 CMR 6.00** via **SAE J1307-2023**:

**EMERGENCY STOP** — Both arms crossed in front of chest, palms inward. Respond IMMEDIATELY. No completion of current movement. Any person may give this signal.

**STOP** — One arm extended horizontally to the side, palm down, wave back and forth. Complete safe position and halt.

**DOG EVERYTHING / HOLD** — Hands clasped together in front of body. Pause all operations; hold position.

**RAISE BOOM / LIFT** — Arm extended to the side, thumb pointing straight up, fist closed.

**LOWER BOOM / LOWER LOAD** — Arm extended to the side, thumb pointing straight down, fist closed.

**SWING / SLEW** — Arm extended horizontally, index finger pointing in the exact direction of intended swing.

**TRAVEL (Crawler excavator)** — Both fists closed in front of body, rotate in vertical circles in direction of travel. Left fist for left track, right fist for right track.

**EXTEND STICK (Crowd In)** — Forearm held vertically in front of face, open hand, move toward body.

**RETRACT STICK (Dump Out)** — Forearm held vertically in front of face, open hand, push away from body.

**OPEN BUCKET** — Both hands in front of body, palms facing each other, move apart.

**CLOSE BUCKET** — Both hands in front of body, palms outward, move together.

**MOVE SLOWLY** — Place one hand on the forearm of the arm giving any other signal. Means: perform that movement at reduced speed.

See the **Hand Signals Quick Reference** page for the full illustrated guide.`,
        },
        {
          heading: 'Who Gives Signals — The Rules',
          body: `**Designated signaler only:** Only the approved, designated signaler may give directional signals (230 CMR 6.00). This includes the site superintendent — if they are not the designated signaler, the operator does not follow their direction signals.

**Any person may give Emergency Stop:** The crossed-arms signal overrides everything and must receive an immediate full stop response from all operators.

**Conflicting signals:** If two people give different directional signals simultaneously — STOP. Wait until the conflict is resolved.

**Signaler not visible:** STOP immediately. Do not continue based on the last signal received.

**Radio communication:** Radio supplements the signaler system — it does not replace it. Direction signals must still come from the designated signaler.`,
        },
      ],
    },
    {
      id: 'radio',
      title: 'Radio & Two-Way Communication',
      icon: '📻',
      color: 'border-blue-400',
      headerBg: 'bg-blue-50',
      content: [
        {
          heading: 'Radio Protocol on Job Sites',
          body: `**Channel discipline:** Assign specific channels for specific functions (e.g., channel 1 for equipment coordination, channel 2 for safety). All operators on a job site must monitor the same channel during active excavation.

**Transmission protocol:**
• Identify yourself and the intended recipient: "Excavator 1 to spotter — copy?"
• Keep transmissions brief — radios are for coordination, not conversation
• Confirm important instructions: "Copy that, holding until workers clear"
• Emergency calls: Simply say "STOP STOP STOP" — all operators on channel must halt immediately

**Radio does NOT replace hand signals:** If the operator cannot hear the signaler (radio failure, noise) and cannot see them (they stepped away), the operator must stop.`,
        },
      ],
    },
    {
      id: 'site-safety',
      title: 'Job Site Safety Rules',
      icon: '🚧',
      color: 'border-red-400',
      headerBg: 'bg-red-50',
      content: [
        {
          heading: 'Dig Safe & Utility Location',
          body: `**Massachusetts law requires calling 811 (Dig Safe) at least 72 hours before any excavation.**

Color codes for marked utilities:
• **Red:** Electric power lines
• **Yellow:** Gas, oil, petroleum, steam
• **Orange:** Communications (telephone, cable, fiber)
• **Blue:** Potable water
• **Green:** Sewer and drain lines
• **White:** Proposed excavation area (marked by excavator)

**Tolerance zone:** Utility marks show approximate centerline — the actual pipe or wire may be 18–24 inches away. Hand-dig within 18 inches of any mark; do not use machine excavation directly adjacent to marked lines.

**If you hit an unmarked utility:** Stop, evacuate if gas, call 911 if emergency, contact the utility company.`,
        },
        {
          heading: 'Blind Spot Management for 2A/1C Equipment',
          body: `Both excavators and loaders have significant blind spots that cause struck-by fatalities.

**Excavator blind spots:**
• Rear counterweight arc — workers standing "safely behind" the tracks may be in this zone
• Right side during swing — most dangerous zone for ground workers
• Under the boom — directly below the extended boom

**Loader blind spots:**
• Raised bucket blocks entire forward view at full elevation
• Engine compartment blocks most of the rear view — backup alarm critical
• Right-side and corner zones during reverse

**Best practices:**
• Walk around the machine before moving — check all blind zones
• Use spotters for any blind movement
• Camera systems supplement, not replace, exclusion zones
• Sound horn before every movement in congested areas`,
        },
      ],
    },
  ],
  quickFacts: [
    { label: 'Emergency Stop', value: 'Both arms crossed — any person, respond immediately' },
    { label: 'Who gives direction signals', value: 'Designated signaler only' },
    { label: 'Signaler not visible', value: 'Stop all movement immediately' },
    { label: 'Conflicting signals', value: 'Stop — wait for resolution' },
    { label: 'Hand signal standard', value: 'SAE J1307-2023, required by 230 CMR 6.00' },
    { label: 'Dig Safe notice period', value: '72 hours before excavating (call 811)' },
    { label: 'Most dangerous blind zone', value: 'Right side during swing (excavator)' },
    { label: 'Loader blind zone (front)', value: 'Raised bucket blocks all forward view' },
  ],
  defaultOpenSections: ['signals'],
};

export default data;
