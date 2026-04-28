import { ReferencePageProps } from '@/components/ReferencePage';

const data: ReferencePageProps = {
  title: 'Operating Hazards, Hand Signals & Site Safety',
  subtitle: 'MA 2A Hoisting License · Module 3, Session 3',
  sections: [
    {
      id: 'hand-signals',
      title: 'SAE J1307 Hand Signals',
      icon: '✋',
      color: 'border-yellow-500',
      headerBg: 'bg-yellow-50',
      content: [
        {
          heading: 'Signal Reference — 230 CMR 6.00 Required Signals',
          body: `All signals below are from SAE J1307, required by 230 CMR 6.00. Signals are given by the **designated signaler only** (except Emergency Stop, which any person may give).

**EMERGENCY STOP** — Both arms crossed in front of chest, palms inward. Respond IMMEDIATELY. No completion of current movement.

**STOP** — One arm extended horizontally to the side, palm down, wave back and forth horizontally. Complete safe position and halt.

**DOG EVERYTHING / HOLD** — Hands clasped together in front of body. Pause all operations; hold current position.

**RAISE BOOM / LIFT** — Arm extended to the side, thumb pointing straight up, fist closed.

**LOWER BOOM / LOWER LOAD** — Arm extended to the side, thumb pointing straight down, fist closed.

**SWING / SLEW** — Arm extended horizontally, index finger pointing in the exact direction of intended swing.

**TRAVEL (Crawler)** — Both fists closed in front of body, rotate in vertical circles in direction of travel. Left fist for left track, right fist for right track. Rotate both for straight travel.

**EXTEND STICK (Crowd In)** — Forearm held vertically in front of face, open hand, slowly move toward body.

**RETRACT STICK (Dump Out)** — Forearm held vertically in front of face, open hand, slowly push away from body.

**OPEN BUCKET** — Both hands in front of body, palms facing each other, move apart.

**CLOSE BUCKET** — Both hands in front of body, palms facing outward, move together.

**MOVE SLOWLY (modifier)** — Place one hand on the forearm of the arm giving any other signal. Means: perform that movement at reduced speed.

See the **Hand Signals Quick Reference** page for the full illustrated reference.`,
        },
        {
          heading: 'Signaler Rules — Who, Where, What',
          body: `**Who:** Only the designated, approved signaler directs the operator's movements (230 CMR 6.00). Exception: any person may give Emergency Stop at any time.

**Where:** The signaler must always be:
• Visible to the operator at all times during signaling
• Outside the full swing radius of the machine
• On stable footing — not on a slope, pile of material, or unstable surface
• Not obscured by dust, spoil, or other equipment

**What to do when the signaler is not visible:** The operator STOPS all movement immediately. Do not continue based on the last signal. Wait until visual contact is restored.

**Conflicting signals:** If the signaler and another person give different direction signals simultaneously — the operator STOPS. Emergency Stop from either person overrides everything.

**Radio communication:** Radio may supplement hand signals but does NOT replace the designated signaler for directional control. Machine movements must still be coordinated through the approved signaler.`,
        },
      ],
    },
    {
      id: 'swing-radius',
      title: 'Swing Radius & Exclusion Zones',
      icon: '🚧',
      color: 'border-red-400',
      headerBg: 'bg-red-50',
      critical: true,
      content: [
        {
          heading: 'What Is the Swing Radius?',
          body: `The **full working radius** is the complete arc through which any part of the machine — including the counterweight — can swing at maximum reach.

On a typical mid-size excavator:
• Boom reach: 20–30+ feet from center of rotation
• Counterweight: extends 5–8 feet behind the center of rotation
• The swing radius is therefore a full circle of 20–30+ feet from the center pin

**Key hazard:** The rear counterweight sweeps behind the machine during every swing. Workers standing "safely" behind the tracks are often within the counterweight's swing path — which is invisible to the operator.

**230 CMR 6.00 rule:** No person other than the operating crew and licensed apprentice may stand within the full working radius while the machine is in operation.`,
        },
        {
          heading: 'Establishing & Maintaining Exclusion Zones',
          body: `**Physical barriers:**
• Use cones, rope, or fencing to mark the swing radius boundary on active job sites
• Position barriers outside the maximum swing radius — not at the current working reach
• Exclusion zone must account for the counterweight's rear sweep, not just the front boom reach

**Worker briefing:**
• Brief all crew members on the exclusion zone before work begins each shift
• Identify who is the designated signaler and confirm the emergency stop signal

**Equipment access:**
• Other machines and vehicles must not approach within the exclusion zone during operation
• Coordinate with other equipment operators through a site supervisor or foreman

**Why this is critical:** Most struck-by fatalities involving excavators occur because a worker crossed into the swing radius without the operator seeing them. "I didn't see them" is not a defense to a violation — the exclusion zone is what prevents this.`,
        },
      ],
    },
    {
      id: 'dig-safe',
      title: 'Utility Location — Dig Safe (811)',
      icon: '📞',
      color: 'border-blue-500',
      headerBg: 'bg-blue-50',
      content: [
        {
          heading: 'Massachusetts Dig Safe Requirements',
          body: `**Massachusetts law requires calling 811 before any excavation** — this is not optional and is not satisfied by checking site plans.

**Call before you dig:** Call 811 (Dig Safe) **at least 72 hours** before starting any excavation in Massachusetts. The 72-hour window allows utility companies to locate and mark their lines.

**What Dig Safe does:** Notifies all member utility companies of your dig site. Each company sends a locator to mark the approximate path of their buried infrastructure with color-coded paint or flags.

**Color code system:**
• Red: Electric power lines, cables, conduit
• Yellow: Gas, oil, petroleum, steam lines
• Orange: Communication lines (telephone, cable, fiber)
• Blue: Potable water
• Green: Sewer and drain lines
• Purple: Reclaimed water, irrigation
• White: Proposed excavation area (marked by excavator)
• Pink: Temporary survey markings

**Tolerance zone:** The marks show the approximate centerline — the actual utility may be within 18–24 inches of the mark. Hand-dig (or hydro-vacuum excavate) within 18 inches of any mark. Do not mechanically excavate in contact with marked utilities.`,
        },
        {
          heading: 'What to Do If You Hit an Unmarked Utility',
          body: `**Immediate actions:**
1. Stop all excavation in the affected area immediately
2. Evacuate personnel if it is a gas line (smell of gas) or if sparks occur (electric line)
3. Call 911 if there is an injury, fire, or immediate public safety hazard
4. Contact the utility company directly
5. Do not attempt to cover, cap, or repair the utility — that is the utility company's responsibility
6. Do not resume excavation in the area until the utility company clears the site

**Gas line strike:**
• Shut down all ignition sources
• Evacuate the area upwind — minimum 300 feet
• Call 911 AND the gas company
• Do not use any electrical switches or radio near a gas leak

**Electric line strike:**
• Assume the line is energized — it probably is
• Operator stays in the cab unless the cab itself is on fire (jumping out on a live electrical strike can be fatal if you contact the current path)
• Call 911 immediately`,
        },
      ],
    },
    {
      id: 'overhead-lines',
      title: 'Overhead Power Line Clearance',
      icon: '⚡',
      color: 'border-orange-400',
      headerBg: 'bg-orange-50',
      critical: true,
      content: [
        {
          heading: 'Minimum Required Clearance',
          body: `**OSHA 1926.600 (and 1926.1408 for crane operations) requires minimum clearances from energized overhead lines:**

**Lines at or below 50 kV:** **10 feet minimum clearance** at all times during operation.

**Lines above 50 kV:** Additional clearance required — 10 feet + 4 inches per 10 kV above 50 kV.

**The clearance applies to:**
• The highest point of the boom at maximum reach
• The attachment
• Any load being handled
• The counterweight at its maximum sweep
• Any rigging, hoses, or extensions attached to the machine

**What 10 feet means in practice:** If the nearest overhead wire is 25 feet above the ground, and the machine's maximum boom reach reaches 20 feet high, you have 5 feet of clearance — which is BELOW the minimum. Work must stop until the utility is de-energized or the machine is repositioned.`,
        },
        {
          heading: 'If You Cannot Maintain Clearance',
          body: `**Stop all work in that area.** Before resuming:

• Contact the utility company to have the line **de-energized** (shut off) during the work
• If de-energizing is not possible, have the utility company install **protective insulating covers** on the line
• As a last resort, the utility company can temporarily **relocate the line**

**None of these alternatives is acceptable:**
• Assigning a spotter to watch the boom near power lines (spotters cannot reliably prevent contact)
• Operating "carefully" at reduced speed within the clearance zone
• Assuming the operator can judge 10 feet accurately by eye during operation

**Grounding:** Some utility companies will ground equipment during work near de-energized lines. Follow the utility company's instructions on grounding procedures exactly.`,
        },
        {
          heading: 'If the Machine Contacts a Live Line',
          body: `**If the machine boom or bucket contacts an energized overhead line:**

**Operator: STAY IN THE CAB**
• The machine body may be electrically energized — stepping from the cab to the ground can create a lethal current path through your body
• Do not exit the cab unless the cab itself is on fire and you have no choice
• If you must exit, jump clear — do not step down with one foot on the machine and one on the ground simultaneously

**From the cab:** Call 911, warn bystanders to stay back, wait for the utility to de-energize the line.

**Bystanders:** Stay at least 50 feet away. Do not approach the machine. Do not touch the machine or anything in contact with it. Ground current can energize the soil around the machine — step-potential voltage can be lethal several feet from the machine.`,
        },
      ],
    },
    {
      id: 'trench-proximity',
      title: 'Excavator & Trench Proximity Rules',
      icon: '🕳️',
      color: 'border-slate-400',
      headerBg: 'bg-slate-100',
      content: [
        {
          heading: 'Machine Positioning Near Trenches',
          body: `**Two rules govern excavator positioning relative to open trenches:**

**230 CMR 6.00 rule:** Excavating machinery shall NOT straddle open trenches. Both tracks must be on the same side of any open trench.

**Track setback rule:** Position tracks no closer to the trench edge than **twice the depth of the trench**.
• Example: A 6-foot deep trench → tracks must be at least 12 feet from the edge
• This prevents machine weight from surcharging the trench walls and triggering a cave-in

**Why the twice-depth rule:** The failure plane of a cave-in extends outward and upward from the trench bottom at an angle. For most soils, this failure plane reaches the surface at approximately one trench depth of horizontal distance. Using twice the depth provides a safety margin.

**On soft or Type C soils:** Increase setback further — the failure zone extends wider in weak soils. Consult the competent person.`,
        },
        {
          heading: 'Excavation Edge Stability',
          body: `When operating near a trench the excavator is digging, the machine's weight and vibration directly affect trench wall stability:

• Every swing of the loaded boom shifts the machine's weight distribution
• Track travel near the trench edge compresses soil that may be supporting the trench wall
• Hydraulic system vibration (at high flow) transmits to the ground

**Best practice:**
• Complete trench protective system installation before sending workers into the trench
• Do not operate the excavator near the trench edge while workers are below
• Stop machine movement when workers need to descend into the trench

**Slope operations:** When operating on a slope, position the boom pointed downhill when possible. This keeps the heaviest part of the load closer to the lower track, reducing lateral instability.`,
        },
      ],
    },
  ],
  quickFacts: [
    { label: 'Emergency Stop signal', value: 'Both arms crossed in front of chest — IMMEDIATE stop' },
    { label: 'Conflicting direction signals', value: 'Stop — do not follow either signal' },
    { label: 'Signaler not visible', value: 'Stop all movement immediately' },
    { label: 'Dig Safe number', value: '811 — call at least 72 hours before excavating' },
    { label: 'Overhead line clearance', value: '10 feet minimum (up to 50 kV)' },
    { label: 'Trench straddling', value: 'Prohibited — 230 CMR 6.00' },
    { label: 'Track setback from trench edge', value: 'At least 2x the trench depth' },
    { label: 'Machine contacts live power line', value: 'Stay in cab — call 911, warn bystanders to stay 50+ feet' },
    { label: 'Gas line strike', value: 'Evacuate 300+ feet upwind — call 911 and gas company' },
    { label: 'Full working radius exclusion', value: 'No unauthorized personnel during operation (230 CMR 6.00)' },
  ],
  defaultOpenSections: ['hand-signals'],
};

export default data;
