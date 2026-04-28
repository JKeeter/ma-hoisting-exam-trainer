import { ReferencePageProps } from '@/components/ReferencePage';

const data: ReferencePageProps = {
  title: 'Skid Steer Loader — Systems, ROPS/FOPS & Hazards',
  subtitle: 'MA 2A Hoisting License · Module 2, Session 2',
  sections: [
    {
      id: 'anatomy',
      title: 'Skid Steer Anatomy & Drive System',
      icon: '🚜',
      color: 'border-slate-400',
      headerBg: 'bg-slate-100',
      content: [
        {
          heading: 'How Skid Steering Works',
          body: `A skid steer loader gets its name from its drive system. Unlike wheeled vehicles with steering axles, skid steers steer by **independently controlling the wheels (or tracks) on each side**.

**Turning mechanism:**
• **Left turn:** Left-side wheels slow down or stop; right-side wheels continue at full speed — the machine pivots left
• **Right turn:** Opposite
• **Zero-radius turn:** Left-side wheels drive forward while right-side wheels drive in reverse — machine spins in place on its own footprint

**Result:** The machine's tires (or tracks) literally skid across the ground surface during turns — this is why rubber-tired skid steers cause significant surface damage on sensitive pavement, and why operators must limit sharp turns on asphalt.`,
        },
        {
          heading: 'Lift Arm Geometry — Radial vs. Vertical',
          body: `The lift arm design determines how the bucket moves as it raises:

**Radial lift path:**
• Bucket arcs outward as it rises
• Better for digging and loading at ground level
• Load moves away from machine at mid-height — affects stability
• Common on smaller, less expensive skid steers

**Vertical lift path:**
• Bucket rises nearly vertically, keeping load close to machine
• Better for loading trucks at height (the bucket stays level during the entire lift)
• More stable with heavy loads at full height
• Preferred for pallet work, truck loading, and tall dump heights

**Exam tip:** Know which application benefits from each lift path. The exam may present a scenario and ask which machine design is appropriate.`,
        },
        {
          heading: 'Attachment Systems',
          body: `Skid steers are highly versatile because of their universal quick-attach plate — an industry-standard mounting interface that allows rapid attachment changes.

**Common attachments:**
• Buckets (general purpose, rock, grading, 4-in-1)
• Pallet forks
• Augers
• Trenchers
• Cold planers (milling heads)
• Brooms and sweepers
• Grapples
• Hydraulic hammers
• Stump grinders

**Critical rule:** Only use attachments specifically approved by the skid steer manufacturer for that machine model. Using an unapproved attachment:
• Voids ROPS/FOPS certification
• May exceed the machine's rated hydraulic capacity
• May overload the lift arm structure
• Is a violation of OSHA 1926.602 (modification without manufacturer approval)

**Attachment weight:** Every attachment weighs something. Add attachment weight plus load weight when comparing to the machine's rated operating capacity (ROC). The ROC must not be exceeded.`,
        },
      ],
    },
    {
      id: 'rops-fops',
      title: 'ROPS & FOPS — Standards & Requirements',
      icon: '🛡️',
      color: 'border-blue-500',
      headerBg: 'bg-blue-50',
      content: [
        {
          heading: 'ROPS Standard — The July 15, 2019 Date',
          body: `OSHA 29 CFR 1926.1001 specifies the ROPS standard based on machine manufacture date:

**Equipment manufactured BEFORE July 15, 2019:**
Must meet one of the following SAE standards (or ISO 3471:2008):
• SAE J320a
• SAE J394
• SAE J395
• SAE J396
• SAE J397

**Equipment manufactured ON OR AFTER July 15, 2019:**
Must meet **ISO 3471:2008 only** (the unified international ROPS standard).

**Why the cutoff matters:** If an OSHA inspector cites a machine for non-compliant ROPS, the applicable standard depends entirely on when the machine was manufactured. A machine from 2018 certified under SAE J395 is compliant. The same machine built in 2020 would need ISO 3471:2008.

**Exam tip:** The most commonly tested fact is "post-2019 = ISO 3471:2008." Know this cold.`,
        },
        {
          heading: 'FOPS — When Required',
          body: `FOPS (Falling Object Protective Structure) protects against overhead falling objects.

**Required when operating in environments with overhead hazard:**
• Demolition work (falling debris, structure collapse)
• Tree clearing (falling branches, logs)
• Trenching under overhead utility lines with potential debris
• Any environment where material may fall from above onto the operator

**FOPS standard:** ISO 3449 — categorized into Level I and Level II based on the size and energy of potential falling objects.

**Combined ROPS/FOPS cabs:** Most modern skid steers have an integrated cab structure that provides both ROPS and FOPS protection simultaneously. The manufacturer's certification covers both.

**Critical rule:** Do NOT modify the ROPS/FOPS structure — any welding, cutting, drilling, or structural repair that is not explicitly approved by the manufacturer voids the certification. Even "minor" modifications (e.g., adding a grab handle by welding) can compromise structural integrity.`,
        },
        {
          heading: 'ROPS/FOPS Damage — Removal from Service',
          body: `**Any of the following conditions require immediate removal from service:**

• Visible cracks in the ROPS frame members or welds
• Bent, buckled, or deformed structural members from impact
• Missing mounting bolts or fasteners
• Modifications not approved by the manufacturer in writing

**Why damage matters:** A ROPS is designed to crush in a controlled manner during a rollover, absorbing energy while maintaining a survival space around the operator. A damaged ROPS may:
• Collapse completely during a rollover, killing the operator
• Fail at a lower energy level than designed
• Create sharp edges that injure the operator during the event

**Repairs:** ROPS repairs must follow manufacturer specifications. A damaged ROPS cannot simply be straightened and returned to service — it must be repaired or replaced per OEM guidance, and the certification must be restored.`,
        },
      ],
    },
    {
      id: 'safety-systems',
      title: 'Required Safety Systems',
      icon: '⚠️',
      color: 'border-yellow-500',
      headerBg: 'bg-yellow-50',
      content: [
        {
          heading: 'Seat Belt — SAE J386-1969',
          body: `**Requirement:** OSHA 1926.602(a)(1) requires seat belts meeting **SAE J386-1969** on all equipment with ROPS.

**Why the seat belt is essential with ROPS:** ROPS only protects the operator if the operator stays inside the cab during a rollover. Without the seat belt:
• The operator may be thrown from the seat during the initial tip
• The operator may be ejected from the cab during the roll
• The operator may be positioned outside the ROPS survival zone when the machine contacts the ground

**Pre-shift check:** Latch the seat belt before starting the engine. Test that the latch:
• Engages positively (audible click)
• Does not release under moderate tension
• Webbing is not frayed, cut, or severely worn

**Non-functional seat belt = removal from service.** No exceptions.`,
        },
        {
          heading: 'Reverse Signal Alarm — OSHA 1926.602(a)(9)',
          body: `**When required:** When the operator's view to the rear is obstructed during reverse operation.

**For skid steers:** The cab structure typically blocks much of the rear view, making the backup alarm effectively mandatory on most machines.

**OSHA allows two alternatives — the machine must have EITHER:**

**Option A: Reverse signal alarm**
• Must be audible above ambient jobsite noise level
• Both single-tone and multi-tone alarms are acceptable
• Must activate automatically when reverse is engaged

**Option B: Designated manual spotter**
• A specific employee assigned to observe the rear path
• Must be in constant visual contact with the operator
• Must signal that it is safe to proceed before each backward movement
• The spotter must be positioned where the operator can see them and where they cannot be struck by the reversing machine

**What is NOT acceptable:** An informal arrangement where the operator "looks around" or relies on coworkers to get out of the way. The OSHA requirement is specific — either a functioning alarm or a designated spotter.`,
        },
        {
          heading: 'Scissor Point Guarding',
          body: `**Requirement:** OSHA 1926.602(a)(10) requires guarding at scissor points on front-end loaders and skid steers.

**What are scissor points?** The pinch zones where the lift arms and machine frame come together as the arms are lowered. As the lift arms descend, a gap closes between the arm and the frame — anyone with a hand or foot in that gap will be caught and crushed.

**Common locations:**
• Between the lift arm and the front frame on each side
• At pivot points where the arm articulates

**Guard requirement:** Guards must prevent contact with scissor points during normal operation — while the operator is in the seat and while bystanders are near the machine.

**Missing guards = OSHA citation.** Scissor point violations are among the most commonly cited 1926.602 violations during construction site inspections.

**Guard maintenance:** Inspect guards at each pre-shift inspection. Replace damaged, bent, or missing guards before operating.`,
        },
        {
          heading: 'Load Capacity Plate',
          body: `**Requirement:** The rated operating capacity (ROC) must be clearly displayed on the machine and visible to the operator.

**What ROC means:** The manufacturer's stated maximum load in the bucket or on the attachment at a specified tipping load percentage (typically 50% or 35% of tipping load, depending on standard).

**Why it matters:**
• Operating over ROC reduces stability margins — rollover risk increases dramatically
• Overloading stresses the lift arm structure and hydraulic system
• Attachment weight must be added to load weight when comparing to ROC

**Missing or unreadable plate:** Remove the machine from service. The operator has no way to verify safe load limits without the plate.

**Rule:** Never exceed the posted ROC. If the load seems too heavy, weigh it — don't guess.`,
        },
      ],
    },
    {
      id: 'hazards',
      title: 'Operating Hazards',
      icon: '🚨',
      color: 'border-red-400',
      headerBg: 'bg-red-50',
      critical: true,
      content: [
        {
          heading: 'Rollover — Primary Cause of Fatality',
          body: `Rollover is the leading cause of skid steer operator fatality. Skid steers have:
• A relatively high center of gravity for their footprint
• A short wheelbase
• A tendency to tip laterally when one side hits soft or sloped ground

**High-risk scenarios:**
• Operating on slopes steeper than the manufacturer's rated angle
• Lifting a load on uneven or soft ground
• Driving with a loaded, raised bucket (raises the center of gravity)
• Fast turns on soft or sloping surfaces
• Driving perpendicular to a slope (side-hill travel)

**Best practices:**
• Always check manufacturer's rated slope angles before working on grades
• Keep the bucket low (6–12 inches off ground) during travel
• Travel up and down slopes — not across them
• Slow down before turns, especially on soft ground
• Never park on a slope without chocking wheels

**If a rollover starts:** The seat belt holds you in the ROPS survival zone. Do NOT jump out — exiting during a rollover dramatically increases the chance of being crushed by the machine.`,
        },
        {
          heading: 'Caught-In/Between — Lift Arm Hazards',
          body: `The lift arm system creates multiple caught-in/between hazards:

**Scissor points (see Safety Systems section):** The closing gap between the lift arm and frame crushes hands, feet, and limbs.

**Under the raised lift arm:** Never stand or work under a raised lift arm without a mechanical support (prop/pin) preventing the arm from lowering. Hydraulic systems can fail. Never rely on hydraulic pressure alone to support a raised lift arm above a worker.

**Attachment zone:** The area directly in front of the bucket/attachment during operation is a struck-by and caught-in zone. Bystanders must stay clear.

**Hydraulic hose pinch points:** Hydraulic hoses connecting to attachments can be pinched or severed by the lift arm movement. Route hoses per the manufacturer's guide.`,
        },
        {
          heading: 'Visibility & Blind Spots',
          body: `Skid steer cabs create significant blind spots:

**Common blind zones:**
• **Rear:** The engine compartment blocks most of the rear view. Even with a rearview camera, camera angle has limits.
• **Front corners:** The lift arms block the view to the lower front corners when raised.
• **Underneath the raised bucket:** The bucket itself blocks ground visibility when elevated.

**Mitigation (not substitution for exclusion zones):**
• Use rearview camera — standard on modern machines
• Walk around the machine before moving to check for workers, equipment, and obstacles
• Use a spotter for blind movements
• Establish and enforce exclusion zones

**Rule:** Camera and sensor systems are supplemental — they do not substitute for proper exclusion zone management. Workers should not be in the working area.`,
        },
      ],
    },
  ],
  quickFacts: [
    { label: 'ROPS standard (post July 15, 2019)', value: 'ISO 3471:2008 only' },
    { label: 'ROPS standard (pre July 15, 2019)', value: 'SAE J320a, J394, J395, J396, J397, or ISO 3471:2008' },
    { label: 'Seat belt standard', value: 'SAE J386-1969' },
    { label: 'Backup alarm alternative', value: 'Designated manual spotter (OSHA 1926.602)' },
    { label: 'Scissor point guarding', value: 'Required — OSHA 1926.602(a)(10)' },
    { label: 'ROPS modification', value: 'Requires written manufacturer approval — voids certification' },
    { label: 'Load capacity plate missing', value: 'Remove from service' },
    { label: 'Rollover — do NOT', value: 'Jump out — stay belted inside ROPS zone' },
    { label: 'Non-functional seat belt', value: 'Remove from service — no exceptions' },
    { label: 'Turn on slope', value: 'Never — travel straight up/down only' },
  ],
  defaultOpenSections: ['rops-fops'],
};

export default data;
