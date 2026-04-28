import { ReferencePageProps } from '@/components/ReferencePage';

const data: ReferencePageProps = {
  title: '29 CFR 1926.602 — Equipment Operation Requirements',
  subtitle: 'MA 2A Hoisting License · Module 4, Session 1',
  sections: [
    {
      id: 'overview',
      title: 'Scope of 1926.602',
      icon: '📋',
      color: 'border-slate-400',
      headerBg: 'bg-slate-100',
      content: [
        {
          heading: 'What Equipment Is Covered',
          body: `29 CFR 1926.602 applies to **earthmoving and material handling equipment** used in construction:

• Scrapers, loaders, bulldozers, off-highway trucks
• Graders
• Excavators (all types)
• Rollers, compactors
• Industrial trucks (when used in construction settings)
• All powered equipment used to move materials or earth

**Relationship to other standards:**
• 1926.600 covers general equipment requirements (inspections, lighting, parking)
• 1926.550 covers cranes and derricks
• 1926.602 fills in the gap for earthmoving equipment

**Key principle:** Equipment must be operated only by trained and authorized operators; must be maintained in safe condition; must have required safety systems functional before each use.`,
        },
      ],
    },
    {
      id: 'seat-belt',
      title: 'Seat Belts & Braking Systems',
      icon: '🔒',
      color: 'border-blue-500',
      headerBg: 'bg-blue-50',
      content: [
        {
          heading: 'Seat Belt — SAE J386-1969',
          body: `**Requirement:** All equipment that has a ROPS (rollover protective structure) must also have a seat belt meeting **SAE J386-1969**.

**Why both are required together:** ROPS protects the operator by maintaining a survival space during a rollover. But ROPS only works if the operator stays inside that space. Without the seat belt:
• The operator may be thrown clear of the cab during the initial tip
• The operator may be positioned outside the ROPS zone when the machine contacts the ground
• The operator may be crushed between the ROPS and the ground

**Inspection:** The seat belt must be checked at every pre-shift inspection. A non-functional seat belt is a removal-from-service condition.

**Exceptions:** Equipment designed for standup operation (no seat) and equipment without ROPS are exempt from the seat belt requirement — but this is rare for 2A equipment.`,
        },
        {
          heading: 'Braking Standards by Equipment Type',
          body: `29 CFR 1926.602(a)(2) requires that earthmoving equipment have service brakes capable of stopping and holding the machine at maximum rated load. The specific SAE standard varies by equipment type:

**Loaders and dozers: SAE J237** (1971)
• The standard most relevant to 2A equipment (skid steers, wheel loaders)
• Brakes must stop and hold the machine with full bucket load on a defined test grade
• Service brakes and parking/emergency brakes both required

**Graders: SAE J236** (1971)

**Scrapers: SAE J319b** (1971)

**High-speed equipment (>15 mph): SAE J321a** (1970)
• Adds fender requirements for equipment traveling at highway speeds
• Protects against debris thrown by wheels/tracks

**Exam tip:** Know that J237 is for loaders/dozers, J236 for graders, and J319b for scrapers. These specific standards appear on the exam.

**Practical meaning:** A skid steer's brakes must stop and hold the machine with a full bucket on a slope. If the brakes can't hold a loaded machine, they fail the J237 standard — remove from service.`,
        },
      ],
    },
    {
      id: 'reverse-alarm',
      title: 'Reverse Alarm & Visibility Requirements',
      icon: '🔔',
      color: 'border-yellow-500',
      headerBg: 'bg-yellow-50',
      content: [
        {
          heading: 'Reverse Signal Alarm — 1926.602(a)(9)',
          body: `**When required:** Equipment with an **obstructed rear view** when in reverse must have an alarm or an observer.

**OSHA allows two alternatives — the machine must have EITHER:**

**Option A: Reverse signal alarm**
• Audible above ambient noise at the job site
• Activates automatically when reverse is engaged
• Single-tone or multi-tone (discriminating) alarms are both acceptable

**Option B: Designated observer (manual spotter)**
• A specific employee assigned to observe the backup path
• Must signal that it is safe to back up before every reverse movement
• Must be in constant visual contact with the operator
• The observer must not be in the path of the reversing machine

**What does NOT satisfy the requirement:**
• An informal "just look behind you" practice
• Relying on other workers to get out of the way
• A back-up camera alone (cameras are not listed as an acceptable substitute — though OSHA allows alternative means that provide equivalent protection)

**Skid steers:** Most skid steer cabs obstruct the rear view significantly — backup alarms are effectively mandatory.`,
        },
        {
          heading: 'Load Capacity & Visibility Requirements',
          body: `**Load capacity plate (1926.602(a)(14)):**
• Rated operating capacity must be clearly posted on the machine
• Must be visible to the operator from the operating position
• Cannot be exceeded during operation
• Missing or unreadable plate = remove from service

**Cab visibility:**
• Safety glass required in cab windows (1926.600)
• Windows must be free of cracks that impair vision
• Mirrors must be properly adjusted and clean
• Camera systems (rearview, surround view) are supplemental — they do not replace exclusion zone management`,
        },
      ],
    },
    {
      id: 'modifications-roads',
      title: 'Modifications, Access Roads & Training',
      icon: '🚧',
      color: 'border-orange-400',
      headerBg: 'bg-orange-50',
      content: [
        {
          heading: 'Modification Prohibition — Written Approval Required',
          body: `**The rule:** No modification to any earthmoving equipment that affects its safe operation may be made without the **original equipment manufacturer's written approval**.

**What counts as a modification:**
• Adding weight (non-OEM counterweights, ballast)
• Removing or altering ROPS/FOPS structures
• Adding unapproved attachments
• Changing hydraulic pressure settings beyond published limits
• Altering the electrical or braking systems
• Adding lighting, guards, or cab accessories that affect structural integrity

**What written approval means:**
• A letter or documentation from the OEM stating the modification is approved for that specific machine model
• Generic statements like "our dealer said it was fine" do not satisfy this requirement
• A professional engineer's approval for the modification is not sufficient — only the OEM can approve changes to their product

**Why this matters:** Modifications can:
• Void ROPS certification — the crush behavior of the structure was analyzed for a specific configuration
• Shift the center of gravity — increasing rollover risk in ways the original stability testing did not account for
• Exceed rated load capacities
• Create interference with moving parts

**Violation consequence:** Using modified equipment without OEM approval is an OSHA 1926.602 violation — and if an incident occurs, the modification complicates insurance, workers' comp, and liability claims significantly.`,
        },
        {
          heading: 'Access Roads — Employer Obligation',
          body: `**1926.602(a)(3):** Operators must not use access roads unless the roads are "constructed and maintained to accommodate safely the movement of the equipment."

**The employer's obligation:**
• Construct access roads adequate for the equipment that will use them (width, grade, surface strength)
• Maintain access roads throughout the project — a road that was adequate at the start may become unsafe after rain or heavy use
• Install traffic control measures where pedestrians and equipment share access routes

**Practical considerations:**
• Verify bridge or culvert load ratings before routing heavy equipment over them
• Check ground bearing capacity on soft access routes — equipment can sink, get stuck, or cause the ground to collapse
• Provide adequate width for two machines to pass safely (or establish one-way traffic rules)

**Who is responsible:** The employer — not the operator. An operator who refuses to use an unsafe access road is protected. An operator who follows a supervisor's instruction to use an unsafe road may share liability if an incident occurs.`,
        },
        {
          heading: 'Scissor Point Guarding & Operator Training',
          body: `**Scissor point guarding (1926.602(a)(10)):**
• Front-end loaders (including skid steers used as loaders) must have guards at all scissor points that create a hazard to the operator
• Scissor points are where the lift arm system creates a closing gap that can catch and crush limbs
• Guards must be in place during operation — cannot be removed for "better visibility" or "easier access"

**Operator training (1926.602(b)(4)):**
• Operators of industrial trucks (powered industrial trucks used in construction) must be trained per **29 CFR 1910.178(l)** — the powered industrial truck training standard
• Training must include: formal instruction, practical training, evaluation, and periodic refresher training
• The employer must certify that each operator has been trained and evaluated

**For 2A equipment (excavators):** The Massachusetts hoisting license is itself the training and evaluation certification for state purposes. OSHA's competency requirement is satisfied by holding the appropriate license restriction.`,
        },
      ],
    },
    {
      id: 'common-violations',
      title: 'Common OSHA 1926.602 Violations',
      icon: '⚠️',
      color: 'border-red-400',
      headerBg: 'bg-red-50',
      content: [
        {
          heading: 'Most Frequently Cited Violations',
          body: `OSHA inspection data shows these 1926.602 violations appearing most often on construction sites:

**1. Missing or non-functional seat belts**
Belts that don't latch, have frayed webbing, or are missing entirely. This is one of the most commonly issued citations for excavating equipment.

**2. Absent or non-functional backup alarm**
Machine with obstructed rear view and no audible alarm AND no designated observer. Often discovered during walkaround inspections.

**3. Unguarded scissor points**
Missing or damaged guards on skid steer and front-end loader lift arm systems.

**4. Unauthorized ROPS/FOPS modifications**
Welded additions, removed sections, or aftermarket modifications without OEM documentation.

**5. Equipment with damaged or missing load capacity plates**
Particularly on older machines where the plate has worn or been painted over.

**6. Operators exceeding rated capacity**
Attempting to lift or carry loads greater than the manufacturer's posted capacity — often observed during truck loading operations.

**7. Inadequate access roads**
Equipment routed over bridges, culverts, or roads not rated for the load — typically discovered after a structural failure.

**Exam note:** If an exam question describes a scenario and asks whether it violates 1926.602, look for these specific conditions — they are the most commonly tested.`,
        },
      ],
    },
  ],
  quickFacts: [
    { label: 'Seat belt standard', value: 'SAE J386-1969 (required with ROPS)' },
    { label: 'Loader/dozer braking standard', value: 'SAE J237' },
    { label: 'Grader braking standard', value: 'SAE J236' },
    { label: 'Scraper braking standard', value: 'SAE J319b' },
    { label: 'High-speed equipment (>15 mph)', value: 'SAE J321a (fender requirements)' },
    { label: 'Reverse alarm alternative', value: 'Designated observer signaling safety' },
    { label: 'Modification approval required', value: 'Written — from original equipment manufacturer only' },
    { label: 'Access road responsibility', value: 'Employer — must construct and maintain' },
    { label: 'Missing capacity plate', value: 'Remove from service' },
    { label: 'Non-functional seat belt', value: 'Remove from service — no exceptions' },
  ],
  defaultOpenSections: ['seat-belt'],
};

export default data;
