import { ReferencePageProps } from '@/components/ReferencePage';

const data: ReferencePageProps = {
  title: 'Operating Hazards & Safe Procedures',
  subtitle: 'MA 2A/1C Hoisting License · Module 3, Session 2',
  sections: [
    {
      id: 'swing-radius',
      title: 'Swing Radius & Exclusion Zones',
      icon: '🚧',
      color: 'border-red-400',
      headerBg: 'bg-red-50',
      critical: true,
      content: [
        {
          heading: '230 CMR 6.00 — Personnel Exclusion Rule',
          body: `**No person other than the operating crew and a licensed apprentice may stand within the full working radius during operation.**

The full working radius on a 2A/1C machine includes:
• The front reach of the excavator boom and bucket
• The rear sweep of the counterweight during swing
• The loader bucket travel arc during forward/reverse operation

**Practical zone size:** On a typical mid-size excavator, the swing radius extends 20–30+ feet from the center pin. The counterweight sweeps a separate arc behind the machine. Workers standing "safely" behind the tracks may still be within the counterweight zone.

**Establish exclusion zones with physical barriers** — cones, rope, or fencing — before starting work. Brief all crew each shift.`,
        },
        {
          heading: 'Loader-Specific Hazards',
          body: `Wheel loaders and loader-backhoes create distinct hazards from excavators:

**Blind spots:**
• The raised loader bucket blocks the forward view completely when elevated
• The engine hood blocks much of the rear view — backup alarm is critical
• Right-side blind zone during reverse turns

**Articulation hazard:** Loader-backhoes have an articulated frame — during a turn, the front and rear frame sections move together and can crush a person standing in the hinge zone. Never allow anyone near the articulation joint during operation.

**Dump zone:** When the loader bucket dumps, material flies forward. Keep all personnel clear of the dump zone in front of the bucket.

**Stabilizer zone:** When deploying the backhoe stabilizers, the pads extend outward and can trap or crush feet. Clear the area before lowering.`,
        },
      ],
    },
    {
      id: 'excavation-safety',
      title: 'Excavation Safety — OSHA Subpart P',
      icon: '🕳️',
      color: 'border-yellow-500',
      headerBg: 'bg-yellow-50',
      content: [
        {
          heading: 'Critical Thresholds — Know These Cold',
          body: `**4 feet** → Egress (ladder, stairway, ramp) required within 25 feet of lateral travel
**5 feet** → Protective system ALWAYS required — no exceptions

**Soil classification (unconfined compressive strength):**
• **Type A:** ≥ 1.5 tsf — clay, hardpan, caliche (not fissured, not previously disturbed)
• **Type B:** 0.5–1.5 tsf — silt, angular gravel, disturbed Type A
• **Type C:** < 0.5 tsf — granular soils, submerged soils, any soil with water

**Water rule:** Any standing water in the trench = automatic Type C, regardless of strength tests.

**Spoil pile:** Must be at least **2 feet** from any trench edge.

**Dig Safe (811):** Call at least 72 hours before any excavation in Massachusetts.`,
        },
        {
          heading: 'Machine Positioning Near Excavations',
          body: `**230 CMR 6.00:** Excavating machinery shall NOT straddle open trenches.

**Track/tire setback rule:** Position tracks or tires no closer than twice the trench depth from the edge.
• Example: 6-foot trench → tracks must be at least 12 feet from the edge

**Why it matters:** Machine weight adds surcharge load to the trench wall. Vibration from the machine reduces soil cohesion. A cave-in under one side of the machine causes it to tip into the trench.

**After a rain:** Stop all work in the excavation until the competent person re-inspects. Rain changes soil classification — Type A can become Type B or C after saturation.`,
        },
      ],
    },
    {
      id: 'hand-signals',
      title: 'Hand Signals & Communication',
      icon: '✋',
      color: 'border-blue-400',
      headerBg: 'bg-blue-50',
      content: [
        {
          heading: 'SAE J1307 — Required by 230 CMR 6.00',
          body: `All 2A/1C equipment operations must use SAE J1307-2023 hand signals. Only the designated signaler directs the operator — any person may give Emergency Stop.

**Emergency STOP:** Both arms crossed in front of chest — respond immediately, no delay
**Stop:** One arm extended, palm down, wave back and forth
**Raise Boom/Lift:** Arm out, thumb pointing up
**Lower Boom:** Arm out, thumb pointing down
**Swing:** Arm extended, index finger pointing in direction of swing
**Travel:** Both fists closed, rotate in direction of travel
**Dog Everything:** Hands clasped together in front of body

**Signaler must be:**
• Visible to operator at all times
• Outside the full working radius
• Only authorized signaler may give direction signals

**If signaler is not visible:** Stop all movement immediately.`,
        },
        {
          heading: 'Overhead Power Line Clearance',
          body: `**OSHA requires minimum 10-foot clearance from energized overhead lines** (up to 50 kV).

Both excavator booms and raised loader buckets can reach unexpected heights — always know the height of your boom or raised attachment relative to any overhead lines.

**If you cannot maintain clearance:**
• Contact the utility to have the line de-energized, insulated, or relocated
• Do NOT rely on a spotter to prevent contact — a spotter cannot reliably prevent contact at machine speeds

**If the machine contacts a live line:**
• Operator: STAY IN THE CAB — exiting creates a lethal ground-contact hazard
• Call 911, warn bystanders to stay 50+ feet away`,
        },
      ],
    },
    {
      id: 'loader-operations',
      title: 'Loader & Backhoe Operating Procedures',
      icon: '🚜',
      color: 'border-slate-400',
      headerBg: 'bg-slate-100',
      content: [
        {
          heading: 'Safe Loader Operating Practices',
          body: `**Bucket position during travel:**
• Keep the bucket 6–12 inches off the ground during travel — raises center of gravity when bucket is elevated
• Tilt bucket back to carry position to retain material and improve stability

**Load limits:**
• Never exceed the posted rated operating capacity (ROC)
• Attachment weight + load weight must both fit within ROC
• Operating over ROC dramatically increases rollover risk

**Ramp and slope operation:**
• On slopes, keep the load uphill — travel with the loaded bucket facing uphill for maximum stability
• Never turn perpendicular to a slope
• Do not load or dump on a slope without specific risk assessment

**Truck loading:**
• Never swing bucket over occupied cab of a truck
• Ensure truck driver is out of the cab or in a safe position during loading`,
        },
        {
          heading: 'Safe Backhoe Operating Practices',
          body: `**Stabilizer deployment:**
• Always deploy stabilizer pads before beginning any backhoe operation
• Position machine on firm, level ground when possible
• Clear all personnel from the stabilizer pad area before lowering

**Swing radius:**
• The backhoe can swing approximately 180° from center
• Know where the swing limit stops — do not force the machine against the swing stop
• Ensure all personnel are clear of the full backhoe swing arc

**Digging near the machine:**
• Position the backhoe so you are digging with the boom extended — not directly beneath the machine
• Digging directly under the rear axle can destabilize the machine

**Transitioning between loader and backhoe:**
• Raise and lock the loader bucket before swiveling to the backhoe position
• Lower and lock stabilizers before beginning backhoe work
• Never operate loader controls while seated in the backhoe position (or vice versa on machines with separate seats)`,
        },
      ],
    },
  ],
  quickFacts: [
    { label: 'Trench protective system trigger', value: '5 feet — no exceptions' },
    { label: 'Egress depth trigger', value: '4 feet (within 25 ft lateral)' },
    { label: 'Spoil pile setback', value: '2 feet minimum from trench edge' },
    { label: 'Water in trench', value: 'Automatic Type C — most conservative system required' },
    { label: 'Machine setback from trench edge', value: 'At least 2x the trench depth' },
    { label: 'Trench straddling', value: 'Prohibited — 230 CMR 6.00' },
    { label: 'Overhead line clearance', value: '10 feet minimum (≤50 kV)' },
    { label: 'Emergency Stop signal', value: 'Both arms crossed — respond immediately' },
    { label: 'Dig Safe (811)', value: 'Call 72+ hours before excavating in MA' },
    { label: 'Loader bucket during travel', value: '6–12 inches above ground — never elevated' },
    { label: 'Slope operation (loaded)', value: 'Load faces uphill for stability' },
    { label: 'Articulation hazard zone', value: 'Never allow personnel near hinge during turns' },
  ],
  defaultOpenSections: ['swing-radius', 'excavation-safety'],
};

export default data;
