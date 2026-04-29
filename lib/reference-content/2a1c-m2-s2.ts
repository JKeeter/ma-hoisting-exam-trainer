import { ReferencePageProps } from '@/components/ReferencePage';

const data: ReferencePageProps = {
  title: 'Loader & Backhoe Anatomy & Controls',
  subtitle: 'MA 2A/1C Hoisting License · Module 2, Session 2',
  criticalAlert: {
    heading: 'Stability Triangle — Tip-Over Is the Leading Loader Fatality',
    body: 'Wheel loaders and loader-backhoes tip over when the load center moves outside the stability triangle. Understanding this geometry is the most safety-critical concept in this session.',
    targetSectionId: 'stability',
  },
  sections: [
    {
      id: 'loader-bucket',
      title: 'Loader Bucket Geometry & Attachment Frame',
      icon: '🚜',
      color: 'border-slate-400',
      headerBg: 'bg-slate-100',
      content: [
        {
          heading: 'Loader Bucket Geometry',
          body: `A loader bucket is designed differently from an excavator bucket. Where an excavator bucket curls toward the machine during digging, a loader bucket scoops by driving the machine forward, then curls the load back into the bucket.

**Key dimensions that affect operation:**
• **Bucket width:** Determines total machine working width. Wider buckets increase stability footprint but limit maneuverability in tight areas.
• **Bucket depth (jaw depth):** The distance from the cutting edge to the rear of the bucket interior. Deeper buckets hold more material but raise the load's center of mass.
• **Cutting edge geometry:** Straight edges for grading; serrated or toothed edges for breaking ground or loading rock.
• **Spill guard height:** The rear wall height above the bucket floor. A higher spill guard prevents material loss during travel but can reduce visibility when the bucket is rolled back.

**Bucket capacity rating (SAE):** Loader buckets have two capacity ratings:
• **Struck capacity:** The volume of material level with the top of the bucket sides (no heap)
• **Heaped capacity:** Volume including a standard cone of material heaped above the sides (per SAE J742 at a 1:1 angle of repose)
Manufacturers publish rated operating capacity (ROC) based on the heaped rating — this is what appears on the load capacity plate.`,
        },
        {
          heading: 'Attachment Frame — The Universal Quick-Attach Interface',
          body: `Wheel loaders and loader-backhoes use a standardized attachment mounting system consisting of a frame that bolts to the lift arms, with two horizontal pins that mating attachments hook over.

**Components of the attachment frame:**
• **Top hooks:** Two hooks that engage the upper attachment pins
• **Lower latch:** A manually operated or hydraulically actuated latch bar or wedge that locks the lower attachment pins in place
• **Tilt cylinder linkage:** Connects the hydraulic tilt cylinder to the attachment frame, allowing bucket curl and dump motion

**Quick-attach plate (universal coupler):**
A steel plate welded to the back of any attachment. The plate has two upper pin eyes and two lower pin receivers that match the frame geometry.

**Coupling procedure:**
1. Position the machine so the frame hooks align with the upper attachment pins
2. Drive forward slowly until the upper pins are fully seated in the hooks
3. Curl the frame forward — this draws the lower attachment pins up into the latch
4. Activate the lower latch (hydraulic or manual) and verify it is fully engaged
5. Perform a test lift — raise the attachment 2 feet and apply breakout force. No movement at the connection.

**Critical rule:** NEVER carry a load with an unlatched attachment. The lower latch is the only thing preventing the attachment from swinging free when the frame curls back.`,
        },
      ],
    },
    {
      id: 'wheel-vs-track',
      title: 'Wheel Loader vs. Track Loader Differences',
      icon: '🔄',
      color: 'border-blue-400',
      headerBg: 'bg-blue-50',
      content: [
        {
          heading: 'Wheel Loaders',
          body: `Wheel loaders (also called front-end loaders) ride on large pneumatic tires and are the most common loader type in Massachusetts construction and landscaping.

**Characteristics:**
• **Travel speed:** 15–25 mph on public roads (with traffic escort if wide load) — much faster than track equipment
• **Surface compatibility:** Work best on hard-packed or firm ground; can damage soft surfaces and sensitive areas
• **Steering:** Articulated steering — the front and rear halves pivot at the center. This makes the machine very maneuverable but creates a pinch hazard at the articulation joint
• **Ground pressure:** Higher ground pressure per contact area than tracks; not suitable for very soft or waterlogged ground
• **Tire damage:** Common on demolition sites with debris; sidewall cuts are serious
• **License class:** 1C

**Tire maintenance — critical for stability:**
• Inflation pressure must match the manufacturer's chart for the load being carried — underinflated tires reduce the stability footprint
• Inspect tires pre-shift for cuts, bulges, or embedded debris
• Uneven tire pressure causes the machine to lean and reduces the effective stability triangle

**Articulation joint hazard:**
The articulation point between the front and rear of the machine creates a crushing hazard. As the machine steers, the gap between the two halves closes on the inside of the turn. Workers must NEVER stand between the front and rear halves of a wheel loader.`,
        },
        {
          heading: 'Track Loaders',
          body: `Track loaders use a crawler undercarriage (like an excavator) combined with a front loader arm — no backhoe attachment.

**Characteristics:**
• **Ground pressure:** Significantly lower than wheel loaders — suitable for soft, muddy, or unstable ground
• **Travel speed:** Much slower than wheel loaders — not practical for road travel
• **Surface protection:** Steel or rubber track options; rubber tracks required on paved surfaces
• **Traction:** Superior in mud, snow, and loose material — tracks cannot spin as easily as tires
• **Stability:** Lower center of gravity than wheel loaders for equivalent machine size; articulated steering not required (differential track drive)
• **License class:** Varies by manufacturer configuration; consult OPSI for your specific machine

**When to choose a track loader:**
• Soft or saturated ground that would bog down a wheel loader
• Slopes requiring maximum traction
• Sites where surface preservation is critical (lower ground pressure)

**Undercarriage inspection:** Same maintenance requirements as excavator tracks — tension, sprockets, rollers, shoes. See Module 2, Session 1 for the complete undercarriage inspection reference.`,
        },
      ],
    },
    {
      id: 'stability',
      title: 'Stability Triangle & Load Center Distance',
      icon: '⚖️',
      color: 'border-red-500',
      headerBg: 'bg-red-50',
      critical: true,
      content: [
        {
          heading: 'The Stability Triangle Concept',
          body: `All wheeled loaders have a **stability triangle** — the geometric shape formed by the three pivot points around which the machine can tip:

• **Left front tire contact patch** (point 1)
• **Right front tire contact patch** (point 2)
• **Rear axle centerline** (line connecting points 3 and 4, treated as one pivot for lateral tip)

The machine remains stable as long as the combined center of gravity of the machine plus load remains **inside** the stability triangle.

**When the CG moves outside the triangle:**
• The machine begins to tip around the nearest edge of the triangle
• Once tipping starts, the CG moves farther outside — the process accelerates
• The operator has less than 1 second to react before a full tip-over

**How loads shift the CG:**
• A heavy load carried high in the bucket raises the combined CG significantly — this narrows the effective stability margin even if the load stays within the footprint
• A load carried at full boom extension moves the CG forward, toward the front tip axis
• A load on a side slope shifts the CG laterally toward the downhill tire

**The load capacity plate rating** is based on the machine tipping at a specific tip angle with the load at a specific load center distance. Operating on soft ground, slopes, or with a raised boom reduces this margin.`,
        },
        {
          heading: 'Load Center Distance',
          body: `**Load center distance** is the horizontal distance from the attachment mounting face (the face of the attachment frame) to the center of gravity of the load.

**Why it matters:**
• Manufacturers calculate rated operating capacity (ROC) at a standard load center distance (typically 24–36 inches depending on machine class)
• If the actual load center is farther from the machine (odd-shaped loads, long pallets), the tipping moment INCREASES — the machine may tip at a load below the rated ROC
• A compact, dense load close to the machine allows the same ROC to be carried more safely than a wide, distributed load at the same weight

**Practical example:**
A wheel loader rated at 6,000 lb ROC based on a 24-inch load center distance. If you load a pallet of long pipes where the load center is 40 inches from the frame, the effective capacity is significantly less than 6,000 lbs — the machine's tip resistance decreases as the load moves forward.

**Exam scenario:** The exam may present a scenario where a machine "meets the weight limit" but asks about a load center consideration. The correct answer is that load center distance affects whether the machine will tip, independent of total weight.`,
        },
        {
          heading: 'Operating on Slopes',
          body: `Slope operation dramatically compresses the stability margin for loaders:

**General rules:**
• Travel up and down slopes — NEVER travel across a slope with a load (side-hill travel shifts the CG laterally toward the stability triangle edge)
• Keep the loaded bucket LOW (6–12 inches off the ground) during uphill and downhill travel
• Slow down before and during any grade change — inertia at the bottom of a slope can shift the load
• Check the manufacturer's rated slope angle before working on any grade

**Wheel loader slope rules:**
• On downhill travel with a loaded bucket, keep the load facing the slope and use engine braking — do not ride the service brake hard (causes brake fade)
• If you must park on a slope, place the bucket on the ground, apply the parking brake, and chock the tires

**If tip-over begins:**
• Do NOT jump out — the falling machine can roll onto you
• Stay in the cab, grip the steering wheel
• Apply full power in the opposite direction if there is time
• The seat belt and ROPS are your protection`,
        },
      ],
    },
    {
      id: 'backhoe',
      title: 'Backhoe Boom, Stick & Digging Depth',
      icon: '🦾',
      color: 'border-yellow-500',
      headerBg: 'bg-yellow-50',
      content: [
        {
          heading: 'Loader-Backhoe Configuration',
          body: `A loader-backhoe (colloquially called a "backhoe" or "backhoe loader") has two working ends:

**Front end:** Wheel loader-style bucket and lift arms for loading, backfilling, and material handling. Licensed as 1C equipment.

**Rear end:** A backhoe assembly consisting of boom, stick (dipper arm), and bucket, mounted on a slewing carriage at the rear of the machine. Licensed as 2A equipment.

**Operator position:** For loader work, the operator faces forward. For backhoe work, the operator must rotate the seat 180° to face rear, and the machine must be stabilized with outriggers (stabilizers) before digging.

**Critical point:** To operate the loader function, you need a 1C license. To operate the backhoe function, you need a 2A license. The 2A/1C combined license covers both.`,
        },
        {
          heading: 'Backhoe Boom, Stick & Digging Geometry',
          body: `The backhoe rear attachment works on the same geometry as an excavator boom-and-stick, but with some key differences:

**Swing angle:** Unlike an excavator that can swing 360°, a loader-backhoe's backhoe attachment swings typically 60–90° to each side from centerline (total 120–180°). The machine must be repositioned for work outside this arc.

**Boom:** The first structural arm from the machine frame to the stick connection. On loader-backhoes, the boom is typically a shallower angle than excavators, optimized for digging depth rather than high lift.

**Stick (Dipper Arm):** Connects the boom tip to the bucket. Retract the stick for maximum digging force; extend for maximum depth or reach.

**Typical digging depth specifications:**
• Small loader-backhoe (John Deere 310 class): 12–14 ft max digging depth
• Medium loader-backhoe (CAT 416 class): 14–16 ft max digging depth

**Bucket curl (breakout force):** The force the bucket generates when curling from open to fully curled. This is the primary cutting force — use it at the beginning of a dig pass to break into hard material, then retract the stick to drag material back.

**Maximum reach at ground level:** Typically 16–20 ft from the center of the rear axle for mid-size machines.`,
        },
        {
          heading: 'Stabilizer Deployment — Required Before Backhoe Work',
          body: `Loader-backhoes have two rear stabilizers (outrigger legs) that must be fully deployed and firmly contacting the ground before any backhoe digging begins.

**Why stabilizers are required:**
• Without stabilizers, digging forces can tip the machine onto its side
• The machine's rear tires provide minimal lateral resistance to backhoe digging forces
• Stabilizers transfer the digging reaction force to the ground, not the tires

**Correct stabilizer procedure:**
1. Position the machine on firm, level ground where possible
2. Lower the front bucket to the ground (additional forward stability)
3. Deploy both stabilizers until they firmly contact the ground
4. Verify both pads are resting on stable ground — not on fill material, soft spots, or near trench edges
5. The rear tires should lift slightly off the ground — this confirms the stabilizers are carrying the machine weight

**Ground bearing capacity:** Each stabilizer pad concentrates a large downward force on a small area. Check that the ground under the pads can support this load. On soft ground, use wide base plates (pad extensions) to distribute the load.

**Never dig with only one stabilizer deployed:** Asymmetric support causes the machine to rotate toward the unsupported side during digging.`,
        },
      ],
    },
    {
      id: 'axle-systems',
      title: 'Front Axle Oscillation & Rear Stabilizers',
      icon: '⚙️',
      color: 'border-cyan-500',
      headerBg: 'bg-cyan-50',
      content: [
        {
          heading: 'Front Axle Oscillation',
          body: `Most wheel loaders and loader-backhoes have a **front axle that can oscillate (rock) side to side** by several degrees. This allows the front tires to maintain contact with uneven ground even when the machine frame stays level.

**Purpose:**
• On rough terrain, a fixed axle would lift one front tire clear of the ground — reducing stability and traction
• Oscillation allows both front tires to stay in contact, maintaining the full width of the stability triangle on the front axle

**Locking the oscillating axle:**
• Some machines allow the front axle to be locked in the center position
• Always lock the axle before operating the backhoe — you need a stable, predictable base when digging
• Always lock the axle before loading at height — oscillation at maximum lift height can shift the load dangerously
• Check the operator's manual for when to lock and unlock for your specific machine

**Inspection:** A stiff or binding front axle is a defect — it means the machine cannot adapt to uneven terrain and one front tire may lift. Report and tag out if the axle does not move freely through its designed range.`,
        },
        {
          heading: 'Rear Stabilizer Pad Inspection',
          body: `The stabilizer pads (feet) at the bottom of each stabilizer leg take the full machine loading force during backhoe operation.

**Inspection checklist:**
• Pad bolts fully tightened — loose pads can slip under load
• No cracking in the pad casting or weld at the pad-to-leg junction
• Pivot pin for the swiveling pad: freely moving and showing no excessive play
• Hydraulic hose to the stabilizer cylinder: no leaks or abrasion
• Stabilizer cylinder rod: no scoring, pitting, or bend

**Ground penetration hazard:**
In soft ground, stabilizer pads can sink several inches during digging cycles. Check pad position periodically during long digging sessions. If a pad sinks into soft ground:
• Stop backhoe operation
• Deploy a plate extension (mud mat) to spread the load
• Recheck pad contact and position before resuming

**Near-trench stabilizer placement:**
• Position stabilizer pads at least 2 feet away from the trench edge (more in soft or Type C soils)
• The pad's concentrated load can cause trench wall instability if too close to the edge`,
        },
      ],
    },
    {
      id: 'telehandler',
      title: 'Telehandler & Boom Truck Considerations (1C Scope)',
      icon: '📦',
      color: 'border-indigo-400',
      headerBg: 'bg-indigo-50',
      content: [
        {
          heading: 'Telehandler Overview',
          body: `A telehandler (telescopic handler) is a 1C-class machine combining a telescoping boom with a loader-type carriage for forks, buckets, or other attachments. Common in construction, agriculture, and industrial settings.

**Key features:**
• **Telescoping boom:** Extends and retracts hydraulically — increases reach without repositioning the machine
• **Boom angle:** Can be raised from horizontal to approximately 70–75° depending on model
• **All-wheel steering:** Many telehandlers offer multiple steering modes (2-wheel, 4-wheel, crab steering) for tight sites
• **Stabilizer outriggers:** On models designed for crane-mode operation — required when lifting near the edge of the load chart

**Why 1C covers telehandlers:** The telescoping boom function (extending reach with a varying load moment arm) creates the same load chart complexity as a telescoping boom crane. The 1C license signals competency in reading and applying load charts.`,
        },
        {
          heading: 'Telehandler Load Charts — Critical for 1C',
          body: `Unlike a standard loader where ROC is a single number, a telehandler has a **load chart** that shows maximum safe capacity at combinations of boom angle and extension.

**How to read a telehandler load chart:**
• The X-axis shows boom extension in feet
• The Y-axis shows boom angle in degrees
• Each cell shows the maximum load in lbs for that combination
• Capacity DECREASES as extension increases and as boom angle decreases (more horizontal)

**Example:** A telehandler may be rated for 8,000 lbs at 0 ft extension and 60° angle, but only 3,500 lbs at 20 ft extension and 30° angle.

**Critical rule:** NEVER exceed the load chart value for the actual boom angle and extension being used. Interpolating between values is not permitted — use the lower rated value.

**Outriggers and load charts:** Most telehandler load charts have two columns — with outriggers deployed and without. With outriggers, capacity at extended reach is higher. The correct column must be used based on actual outrigger position.`,
        },
        {
          heading: '1C Equipment — Safe Operating Principles',
          body: `All 1C equipment shares these fundamental safe operating principles:

**Stability principles:**
• Always know the combined weight of the attachment plus load before lifting
• Keep loads as close to the machine as possible (minimum boom extension) when traveling
• Lower the load before traveling significant distances
• Never travel with the load raised above 12–18 inches from the ground

**Ground conditions:**
• Assess ground bearing capacity before positioning for a lift — soft or unstable ground reduces stability
• Wheel loaders: inspect the driving surface for soft spots, holes, or undermining before each pass
• Telehandlers: check for level ground before deploying outriggers; ground sloping more than 1–2° may require repositioning

**Load securement:**
• Verify loads are secured before lifting (pallets banded, loose materials in nets or bins)
• Report any unusual load configuration to a supervisor before attempting the lift

**Manufacturer's load capacity plate:**
• Must be visible to the operator from the operating position
• Missing or unreadable plate = remove from service
• The rated capacity applies only on firm, level ground with the machine in the configuration specified on the plate`,
        },
      ],
    },
  ],
  quickFacts: [
    { label: 'Stability triangle tip axis (front)', value: 'Line between left and right front tire contact patches' },
    { label: 'Load center distance', value: 'Distance from attachment face to load CG — affects tipping moment' },
    { label: 'Travel with loaded bucket', value: 'Keep bucket 6–12 inches off ground' },
    { label: 'Side-hill travel with load', value: 'Prohibited — travel straight up/down slopes only' },
    { label: 'Articulation joint hazard', value: 'Crushing hazard — no personnel between front and rear halves' },
    { label: 'Backhoe stabilizers', value: 'Both must be fully deployed before any digging begins' },
    { label: 'Stabilizer pad near trench', value: 'Minimum 2 feet from trench edge' },
    { label: 'Front axle oscillation lock', value: 'Lock before backhoe work and high-lift loading' },
    { label: 'Loader-backhoe swing angle', value: 'Typically 60–90° each side (vs. 360° excavator)' },
    { label: 'Loader-backhoe — front license', value: '1C (loader function)' },
    { label: 'Loader-backhoe — rear license', value: '2A (backhoe function)' },
    { label: 'Missing load capacity plate', value: 'Remove from service' },
  ],
  defaultOpenSections: ['stability'],
};

export default data;
