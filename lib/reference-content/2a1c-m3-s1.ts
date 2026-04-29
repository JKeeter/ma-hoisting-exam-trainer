import { ReferencePageProps } from '@/components/ReferencePage';

const data: ReferencePageProps = {
  title: 'Pre-Shift Inspection — Excavators, Loaders & Backhoes',
  subtitle: 'MA 2A/1C Hoisting License · Module 3, Session 1',
  sections: [
    {
      id: 'osha-basis',
      title: 'OSHA Basis & Timing',
      icon: '📋',
      color: 'border-slate-400',
      headerBg: 'bg-slate-100',
      content: [
        {
          heading: 'Regulatory Requirement',
          body: `**Two OSHA standards together form the basis for pre-shift inspections:**

• **29 CFR 1926.20(b)(2):** Employers must provide "frequent and regular" inspections of job sites, materials, and equipment by a competent person.

• **29 CFR 1926.600(b)(1):** Equipment left unattended at night must be visually inspected before use. Equipment in use must be inspected by a competent person.

**230 CMR 6.00** (Massachusetts regulation) requires written pre-shift inspection records for hoisting machinery, kept with the machine and available for OPSI review.

**"Competent person" for inspections:** A person knowledgeable about the equipment's safe operation who can identify hazards and has the authority to take corrective action.`,
        },
        {
          heading: 'When to Inspect',
          body: `**Inspect before:**
• The first use each shift
• Each time the machine is relocated to a different area on the same day
• After any maintenance or repair

**Inspect after:**
• Rain, flooding, or significant weather change
• Any incident or near-miss involving the machine
• Operating in unusually harsh conditions (deep mud, rocky terrain, demo work)

**Time required:** A thorough pre-shift inspection takes 10–15 minutes. Shortcuts lead to missed defects. Research consistently shows each minute of inspection time prevents approximately 60–90 minutes of unplanned downtime — plus the human cost of an injury from an undetected defect.

**Best conditions:** Inspect on level ground, engine cold, all implements lowered, stabilizers retracted.`,
        },
        {
          heading: 'Removal-from-Service vs. Documented Defect',
          body: `Not all defects require immediate shutdown. Use this decision framework:

**Remove from service immediately (no exceptions):**
• Active hydraulic leak from any hose or fitting
• Non-functional seat belt
• Damaged or modified ROPS/FOPS structure
• Structural crack in boom, stick, bucket mounting ears, or frame
• Non-functional brakes or steering
• Non-functional backup alarm (when rear view obstructed)
• Missing or discharged fire extinguisher
• Engine oil leak (active drip — not just residue)
• Track partially derailed or missing shoe(s)
• Stabilizer cylinder with active leak or damaged pad pin

**Document and notify supervisor (restricted operation may be permitted):**
• Non-critical light burned out (not backup light)
• Wiper not functioning (clear weather only)
• Minor cosmetic damage with no structural concern
• Low but not empty fluid level (check rate of consumption)

**Record and monitor (continue operation):**
• Normal wear within specification (tooth wear, cutting edge wear)
• Fluid levels within acceptable range`,
        },
      ],
    },
    {
      id: 'walkaround',
      title: 'Step 1 — 360° Walk-Around',
      icon: '🔄',
      color: 'border-blue-400',
      headerBg: 'bg-blue-50',
      content: [
        {
          heading: 'The Walk-Around Method',
          body: `**Start at a fixed reference point** (e.g., front-left corner of the machine) and move consistently in one direction around the entire machine without backtracking.

**Why this method:** Random spot-checks miss items. The consistent walk-around ensures every surface, component, and zone gets checked in every inspection.

**During the walk-around, check:**
☐ Fluid puddles under the machine — location tells you the source (hydraulic, oil, coolant, fuel, DEF)
☐ Ground conditions — stable and level; no undermining near edges or drop-offs
☐ Structural integrity — visible cracks in frame welds, boom base, bucket mounting
☐ Guards and covers — all in place, secured, undamaged
☐ Fasteners — missing or visibly loose bolts, pins, retaining clips
☐ Hoses — visible routing; no hoses contacting moving parts, no obvious damage
☐ Access steps and handholds — secure and undamaged
☐ Lights and beacons — present and unbroken (test function later in cab)
☐ Tires (wheel loaders/backhoes) — no visible cuts, bulges, or extreme wear
☐ Stabilizer pads (loader-backhoes) — pads present, pins intact, no hydraulic weeping`,
        },
      ],
    },
    {
      id: 'fluids',
      title: 'Step 2 — Fluid Levels (Engine Off)',
      icon: '💧',
      color: 'border-cyan-400',
      headerBg: 'bg-cyan-50',
      content: [
        {
          heading: 'Fluid Inspection Checklist',
          body: `Check all fluids with the engine OFF and the machine on level ground. Checking on a slope gives inaccurate dipstick and sight gauge readings.

☐ **Engine oil:** Pull dipstick, wipe clean, reinsert fully, pull again. Level between MIN and MAX marks. Color: should be amber to brown — not milky (coolant contamination) and not black with heavy deposits.

☐ **Coolant:** Check overflow reservoir level. Coolant should be visible in the reservoir, within the MIN-MAX marks. If the reservoir is empty, do not open the radiator cap on a warm engine — risk of steam burns.

☐ **Hydraulic oil:** Sight gauge or dipstick depending on machine. Level within operating range. Check color: amber = good; milky = water contamination; dark = oxidation; metallic sheen = internal wear.

☐ **Fuel:** Check level. Plan refueling before work begins to avoid a mid-shift stoppage.

☐ **DEF/AdBlue (Tier 4 Final engines):** Low DEF triggers engine derate (reduced power), then shutdown. Check level daily.

☐ **Air filter restriction indicator:** Most machines have a yellow/red service indicator visible without removing the filter. Service when in red zone.`,
        },
      ],
    },
    {
      id: 'undercarriage-check',
      title: 'Step 3 — Undercarriage (Tracked Machines)',
      icon: '⚙️',
      color: 'border-slate-400',
      headerBg: 'bg-slate-100',
      content: [
        {
          heading: 'Undercarriage Inspection Checklist',
          body: `☐ **Track sag:** Measure at midpoint between front idler and nearest carrier roller. Compare to manufacturer spec (typically 20–30 mm for mid-size machines). Adjust with track tensioner grease fitting if outside spec.

☐ **Sprocket teeth:** Run eye or gloved hand along tooth profile (engine off). Sharp-pointed, asymmetric, or broken teeth require replacement.

☐ **Idler wheels:** Should rotate freely. Check for flat spots, bearing play (rock side-to-side — detectable looseness = bearing wear), and seal weeping (oil at the seal face).

☐ **Track rollers (bottom):** Roll the machine slightly to expose all roller surfaces. Check for flat spots, cracking, and seal leaks.

☐ **Carrier rollers (top):** Should rotate freely. Check for flat spots and seal integrity.

☐ **Track shoes:** No broken or missing grouser plates. Bolts must be tight. When bolt heads are flush with the grouser face, the shoe is worn to its service limit.

☐ **Track chain:** No broken links, pins seated flush (no migration out of bore), proper alignment on idler and sprocket.

☐ **Mud packing:** Clear any compacted mud or debris from track voids — packed mud overloads the undercarriage and affects track tension.`,
        },
      ],
    },
    {
      id: 'boom-stick-bucket-check',
      title: 'Step 4 — Boom, Stick, Bucket & Loader Arms',
      icon: '🦾',
      color: 'border-yellow-500',
      headerBg: 'bg-yellow-50',
      content: [
        {
          heading: 'Excavator / Backhoe Structural Checklist',
          body: `☐ **Boom base welds:** Inspect the weld at the boom foot (where it attaches to the upperstructure or machine frame). This is the highest-stress point. Any crack visible to the naked eye = remove from service.

☐ **Stick welds:** Check boom-tip-to-stick joint and cylinder mounting welds. Cracks at these points are removal from service.

☐ **Pin and bushing play:** Rock each joint by hand with the machine stationary. Detectable lateral movement indicates worn bushings. Audible clunking during operation confirms worn bushings.

☐ **Bucket mounting ears:** Visually inspect the pin holes and surrounding steel for cracks. Cracks at mounting ears = remove from service.

☐ **Bucket teeth:** All teeth present and locked in adapters. No cracked or broken shanks. Teeth worn beyond the indicator line need replacement before the next hard digging shift.

☐ **Hydraulic cylinder rods (boom, stick, bucket, stabilizer):** Smooth surface — no chrome pitting, scoring, or flaking. Seals not weeping (an oily film is normal lubrication; steady drip = seal failure).

☐ **Quick coupler (if equipped):** Verify secondary locking. See Quick Coupler Safety reference.`,
        },
        {
          heading: 'Wheel Loader / Loader-Backhoe Front Arms Checklist',
          body: `☐ **Lift arm pivot pins:** Inspect the main pivot pins connecting the lift arms to the machine frame. Rock the arms side-to-side with the engine off and arms lowered — no detectable lateral play.

☐ **Attachment frame (quick-attach):** Latch mechanism moves freely. Locking bar or hydraulic latch engages fully. No cracks in the frame structure.

☐ **Tilt cylinder and linkage:** Cylinder rod smooth and unscored. Linkage pivot pins not worn (rock the bucket — no rattle or excessive movement).

☐ **Scissor point guards (if applicable):** Check guards at pinch points where lift arms meet the machine frame. Guards present, undamaged, and properly secured.

☐ **Bucket or attachment:** No visible cracks. Cutting edge wear within acceptable limits. If using forks, fork tines straight and not bent.

☐ **Tires (wheel loader/loader-backhoe):** Check pressure with a gauge — inflation must match the manufacturer's chart for the expected load. Inspect for cuts, bulges, embedded debris, or chunking tread.`,
        },
      ],
    },
    {
      id: 'cab-check',
      title: 'Steps 5–6 — Cab, Safety Devices & Startup Test',
      icon: '🛡️',
      color: 'border-green-400',
      headerBg: 'bg-green-50',
      content: [
        {
          heading: 'Cab & Safety Device Checklist',
          body: `☐ **ROPS/FOPS:** Inspect the structural members and welds. No cracks, bends, or deformation from prior impact. All mounting fasteners present and tight.

☐ **Seat belt:** Latch engages positively (firm click, does not release under tension). Webbing not frayed, cut, or worn through.

☐ **Cab windows:** No cracks that impair visibility. Front window guard in place if demolition or debris hazard exists.

☐ **Mirrors:** Clean, properly angled, not cracked. Replace cracked mirrors — distorted reflection creates blind spots.

☐ **Wipers and washers:** Operational. (May allow reduced service for dry-weather operations with supervisor approval.)

☐ **Horn:** Test — must be audible at a distance.

☐ **Backup alarm:** Test in reverse — must be audible above ambient noise. Non-functional alarm on a machine with obstructed rear view = remove from service.

☐ **Fire extinguisher:** Present in its mount, pin intact, gauge needle in green zone, accessible without removing obstacles.

☐ **First aid kit:** Present.

☐ **Load capacity plate (loaders/telehandlers):** Clearly visible from operator position. Not obscured, faded, or missing.`,
        },
        {
          heading: 'Engine Startup Test',
          body: `After completing all pre-shift checks and addressing or documenting all findings:

☐ Start engine — listen during warmup. No unusual knocking, rattling, or misfiring. Smoke color: light gray/white is normal on a cold start; persistent blue smoke (oil burn) or black smoke (rich fueling) needs investigation.

☐ Gauge check — all must show normal within 30 seconds of startup:
• Oil pressure: rises within 5 seconds (very slow rise = low oil or failing pump — shut down immediately)
• Coolant temperature: begins rising toward normal operating range
• Hydraulic temperature: begins rising from ambient
• Fuel level: confirms what you measured in Step 2

☐ Warning lights: all should clear after engine stabilizes. Any persistent warning light = investigate before operating.

☐ Function test — slowly cycle all functions:
• Boom up/down, stick extend/retract, bucket curl/dump (excavator/backhoe)
• Lift arms up/down, bucket curl/dump, tilt (loader)
• Swing left/right (excavators), stabilizer deploy/retract (loader-backhoe)
• Travel forward/reverse

Listen for abnormal noises, feel for hesitation or binding, observe for unexpected drift when joystick is released.

☐ Quick coupler test lift (if equipped): Raise the attached tool 2–3 feet and apply sideways force. No movement at the coupler.`,
        },
        {
          heading: 'Documentation',
          body: `230 CMR 6.00 requires written inspection records maintained with the machine and available for OPSI inspection.

**Minimum documentation:**
• Date and time of inspection
• Machine ID or serial number
• Operator name
• Items inspected (or reference to inspection form)
• Defects found and action taken (repaired, supervisor notified, machine removed from service)
• Operator signature

**Record retention:** Maintain at least 12 months of inspection records. Records are required during OSHA and OPSI inspections.

**Tip:** Use a standardized inspection form (paper or digital) — it ensures consistency and provides a defensible record. A blank form with "all ok" written in is not an inspection.`,
        },
      ],
    },
  ],
  quickFacts: [
    { label: 'OSHA inspection basis', value: '29 CFR 1926.20 and 1926.600' },
    { label: 'Inspect after relocation', value: 'Yes — before resuming work at new location' },
    { label: 'Active hydraulic leak', value: 'Remove from service — no exceptions' },
    { label: 'Seat belt non-functional', value: 'Remove from service — no exceptions' },
    { label: 'ROPS damage', value: 'Remove from service — no exceptions' },
    { label: 'Discharged fire extinguisher', value: 'Remove from service' },
    { label: 'Track sag (mid-size excavator)', value: '20–30 mm (0.8–1.2 in) — measure at midpoint' },
    { label: 'Inspection time', value: '10–15 minutes for thorough check' },
    { label: 'Record requirement', value: 'Written records, kept with machine, per 230 CMR 6.00' },
    { label: 'Oil pressure after startup', value: 'Must rise within 5 seconds — slow rise = shut down' },
    { label: 'Stabilizer cylinder leak', value: 'Remove from service — active hydraulic leak' },
    { label: 'Missing load capacity plate (loader)', value: 'Remove from service' },
  ],
  defaultOpenSections: ['walkaround'],
};

export default data;
