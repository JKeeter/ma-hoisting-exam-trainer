import { ReferencePageProps } from '@/components/ReferencePage';

const data: ReferencePageProps = {
  title: 'OSHA Subpart P — Excavation Safety',
  subtitle: 'MA 2A Hoisting License · Module 3, Session 2 · 29 CFR 1926.650–652',
  sections: [
    {
      id: 'depth-rules',
      title: 'The 5-Foot Rule & Depth Triggers',
      icon: '📏',
      color: 'border-red-400',
      headerBg: 'bg-red-50',
      critical: true,
      content: [
        {
          heading: 'The Two Critical Depth Thresholds',
          body: `OSHA Subpart P has TWO separate depth-triggered requirements. Know both:

**4 feet → Egress required (1926.651(c))**
• Any trench 4 feet or deeper that workers enter must have a stairway, ladder, or ramp within 25 feet of lateral travel
• This is separate from — and in addition to — the protective system requirement

**5 feet → Protective system required (1926.652)**
• At 5 feet or deeper, a cave-in protective system (sloping, shoring, or shielding) is ALWAYS required
• **The only exception:** Below 5 feet, a competent person may determine that no protective system is needed based on soil conditions — but this requires an actual inspection and professional judgment, not a blanket assumption
• **At 5 feet and above: no exceptions, no conditions — system is required**

**Common exam trap:** Questions may imply the protective system is only for trenches where workers will enter. The requirement applies to any excavation 5 feet or deeper, period.`,
        },
        {
          heading: 'Below 5 Feet — Is Anything Required?',
          body: `For excavations LESS THAN 5 feet deep:

• No protective system is required IF:
  - A competent person examines the ground conditions AND
  - Determines there is no indication of potential cave-in hazard

• This is NOT a blanket exemption. The competent person must make an actual assessment.

• Factors that would require a protective system even below 5 feet:
  - Fissured or cracked soil walls
  - Evidence of prior disturbance
  - Water seepage
  - Adjacent vibration sources (traffic, pile driving)
  - Soft or loose soil at the walls

**Exam note:** The exam may present a scenario with a 4-foot trench and ask if a protective system is needed. The answer depends on the competent person's assessment — not a blanket "no" just because it's under 5 feet.`,
        },
      ],
    },
    {
      id: 'competent-person',
      title: 'Competent Person — Role & Inspections',
      icon: '👷',
      color: 'border-blue-500',
      headerBg: 'bg-blue-50',
      content: [
        {
          heading: 'Who Qualifies as a Competent Person?',
          body: `OSHA defines a competent person (for excavation purposes) as someone who:

• Can **identify existing and predictable hazards** in the surroundings or working conditions
• Is **knowledgeable in applicable standards** — soil analysis, protective systems, OSHA Subpart P
• Has the **authority to take prompt corrective measures** to eliminate hazards — including stopping work

**Key points:**
• The competent person is not necessarily a licensed engineer or registered geologist
• It is a job function requiring specific training and knowledge
• The employer designates the competent person
• The competent person must be actually present on site during excavation work — not available by phone

**What competent persons are NOT required to do:** Design engineer-level sloping or shoring systems. A registered professional engineer is required for excavations over 20 feet deep or for non-standard protective systems.`,
        },
        {
          heading: 'Competent Person Inspection Requirements',
          body: `**Mandatory inspection timing:**
• Prior to start of work each day
• As needed throughout the shift when conditions change
• After every rainstorm or other hazard-increasing event

**Re-inspection triggers (require stopping work until re-inspected):**
• Rain — even light rain can change soil classification
• Freeze-thaw cycle — dramatically weakens soil cohesion
• Nearby vibration (blasting, pile driving, heavy traffic)
• Any sign of cracking, sloughing, or bulging in the trench walls
• Water seeping from the walls or bottom
• Equipment operating near the trench edge

**If hazard found during inspection:** Remove ALL workers from the excavation before corrective action. Workers should not remain in the trench while the competent person evaluates and corrects the hazard.`,
        },
      ],
    },
    {
      id: 'soil-classification',
      title: 'Soil Classification — Types A, B, C',
      icon: '🌍',
      color: 'border-yellow-500',
      headerBg: 'bg-yellow-50',
      content: [
        {
          heading: 'Stable Rock',
          body: `**Definition:** Natural solid mineral material that can be excavated with vertical sides and will remain intact while exposed.

**Examples:** Sound granite, sound limestone, intact bedrock.

**Key requirement:** The rock must be in sound (unweathered, unfractured) condition. Weathered, fractured, or layered rock does not qualify as stable rock.

**Practical implication:** Stable rock allows vertical walls at any depth without a protective system. However, the competent person must verify the rock is truly stable — a visual inspection is required.`,
        },
        {
          heading: 'Type A Soil — Most Stable',
          body: `**Unconfined compressive strength: 1.5 tsf or greater** (144 kPa or more)

**Examples:** Clay, silty clay, sandy clay, clay loam, silty clay loam, hardpan, caliche, cemented soils.

**CRITICAL DISQUALIFIERS — Cannot be Type A if any of the following are true:**
• **Fissured:** Any visible cracks, cleavage planes, or separation in the soil mass
• **Subject to vibration:** Traffic, machinery, blasting, or pile driving nearby
• **Previously disturbed:** Any fill material, previously excavated area, or utility backfill
• **Part of a sloped/layered system:** Soil layers that dip into the excavation (creates sliding plane)
• **Subject to water seepage:** Any moisture entering the trench face

**Maximum slope at Type A:** ¾:1 (0.75 horizontal to 1 vertical) = 53° from horizontal.

**Short-term exception for Type A:** May slope at ½:1 (63°) for excavations 12 feet or less in depth that will be open for short periods. "Short-term" is not precisely defined — use conservatively.`,
        },
        {
          heading: 'Type B Soil — Moderate Stability',
          body: `**Unconfined compressive strength: greater than 0.5 tsf but less than 1.5 tsf** (48–144 kPa)

**Examples:**
• Cohesive soils not meeting Type A criteria (previously disturbed clay, fissured silt)
• Angular gravel, crushed rock
• Silt, silt loam, sandy loam
• Previously disturbed Type A soil (if not fissured)
• Soil adjacent to open water or subject to seepage (in some conditions)

**Common scenario:** Clay soil that tests at 0.8 tsf but shows slight fissuring — starts as potential Type A, but fissuring downgrades it to Type B.

**Maximum slope at Type B:** 1:1 (1 horizontal to 1 vertical) = 45° from horizontal.`,
        },
        {
          heading: 'Type C Soil — Least Stable',
          body: `**Unconfined compressive strength: 0.5 tsf or less** (48 kPa or less)

**Examples:**
• Granular soils: sand, gravel (non-cohesive — no bonding between particles)
• Submerged soils or soils with free-flowing water
• Saturated or water-bearing soils
• Soils subject to vibration from nearby sources
• Layered systems with layers dipping into the excavation

**Water rule (exam critical):** Any soil with standing water in the trench or free water seeping through the walls **automatically classifies as Type C**, regardless of strength test results.

**Maximum slope at Type C:** 1½:1 (1.5 horizontal to 1 vertical) = 34° from horizontal.`,
        },
        {
          heading: 'Soil Testing — Six Methods',
          body: `The competent person must use **at least one visual AND at least one manual test** to classify soil. Six recognized methods:

**1. Thumb penetration test (most common field test)**
• Press thumb firmly into soil face
• Easy penetration several inches → Type C
• Penetrates with effort, < 1 inch → Type B
• Requires very great effort or no penetration → Type A candidate (also check for fissures)

**2. Pocket penetrometer**
• Handheld device pushed into soil; reads unconfined compressive strength directly in tsf or kg/cm²
• Most precise quick field method; gives a number you can compare to thresholds

**3. Hand-operated shear vane**
• Mechanical tool that measures shear strength (related to compressive strength)
• More precise than thumb penetration; used when quantitative measurement is needed

**4. Plasticity test**
• Roll moist soil into a 1/8-inch diameter thread
• If it holds 2+ inches without breaking → cohesive (Type A or B candidate)
• Granular soils crumble immediately → likely Type C

**5. Dry strength test**
• Allow a soil sample to dry completely
• If it breaks into clumps requiring significant force → cohesive
• If it crumbles to powder with light pressure → granular (Type C)

**6. Visual analysis**
• Observe grain structure, layering, moisture content, color, and signs of disturbance
• Look for fissures, seepage, cracks, and prior disturbance evidence`,
        },
      ],
    },
    {
      id: 'protective-systems',
      title: 'Protective Systems — Four Design Options',
      icon: '🏗️',
      color: 'border-green-500',
      headerBg: 'bg-green-50',
      content: [
        {
          heading: 'Option 1 — Sloping',
          body: `Excavation walls are cut back at a safe angle so that if any material falls or slides, it will not bury workers.

**Slope ratios by soil type:**
• **Stable Rock:** Vertical (90°) — no slope required
• **Type A:** ¾:1 (53° from horizontal) — every foot of depth requires ¾ foot of setback
• **Type B:** 1:1 (45°) — every foot of depth requires 1 foot of setback
• **Type C:** 1½:1 (34°) — every foot of depth requires 1.5 feet of setback

**Example:** A 10-foot deep trench in Type C soil requires the walls to be cut back 15 feet on each side from the bottom of the trench. Total trench width at the top = original trench width + 30 feet.

**Limitation:** Sloping requires significant additional excavation and surface disturbance. Impractical in tight urban sites or where surface features must be preserved.`,
        },
        {
          heading: 'Option 2 — Shoring',
          body: `Physical structures (timber, aluminum, hydraulic) brace the trench walls and prevent movement.

**Types of shoring systems:**
• **Timber shoring:** Traditional wood planks, posts, and braces; labor-intensive; used when hydraulic systems are unavailable
• **Aluminum hydraulic shoring:** Quick installation; hydraulic cylinders extend to brace walls; lightweight and reusable
• **Pneumatic shoring:** Uses air cylinders instead of hydraulic

**Design options for shoring:**
• OSHA Appendix C tabulated data (no PE required for standard configurations)
• Manufacturer-tabulated data (documentation required, copy on site)
• PE-designed custom system (required for non-standard conditions)

**Installation:** Shoring is installed from the top down as the trench is excavated. Removed from the bottom up as backfill is placed.`,
        },
        {
          heading: 'Option 3 — Shielding (Trench Box)',
          body: `A prefabricated steel or aluminum box is placed in the trench. Workers work inside the box — the box doesn't prevent the cave-in, it protects workers if one occurs.

**How it works:** The trench box is a structure capable of withstanding the force of a cave-in. Soil collapses against the outside of the box rather than burying workers inside.

**Key distinction from shoring:** Shoring prevents the walls from moving. Shielding allows the walls to move, but protects workers inside.

**Requirements:**
• Must be appropriate for the soil type and trench depth
• Must not be overloaded (soil pressure must be within the box's rated capacity)
• Must be installed and moved per manufacturer's instructions

**Trench box removal sequence:**
1. Begin removal from the BOTTOM of the box, working upward
2. Simultaneously backfill as the box is extracted to maintain protection
3. Do not remove the entire box and then backfill — this leaves the trench unprotected

**Workers during removal:** No workers in the trench during box removal.`,
        },
        {
          heading: 'Option 4 — PE-Designed System',
          body: `For excavations or conditions not covered by the OSHA appendices or standard tabulated data, a registered professional engineer designs a custom protective system.

**When required:**
• Excavations deeper than 20 feet
• Unusual soil conditions not fitting Type A/B/C
• Non-standard shoring or shielding configurations
• Adjacent structures that change load conditions

**Documentation requirements:**
• The design must be in writing
• Must include sizes, types, and configurations of materials
• Must include diagrams showing the system layout
• Must identify the registered professional engineer who approved the design
• At least one copy must be maintained at the jobsite during construction`,
        },
      ],
    },
    {
      id: 'other-requirements',
      title: 'Additional Subpart P Requirements',
      icon: '📐',
      color: 'border-slate-400',
      headerBg: 'bg-slate-100',
      content: [
        {
          heading: 'Access, Egress & Spoil Pile',
          body: `**Egress (1926.651(c)):**
• Required for any trench 4 feet or deeper that workers enter
• Type: stairway, ladder, or ramp
• Location: within 25 feet of lateral travel from any worker in the trench
• Ramps used by employees must be designed by the competent person

**Spoil pile setback (1926.651(d)):**
• All excavated material (spoil), equipment, and materials must be at least **2 feet from the trench edge**
• Spoil pile adds surcharge load to the trench wall, increasing cave-in pressure
• Even 2 feet may be insufficient if the spoil pile is very large — use judgment

**Surface encumbrances (1926.651(a)):**
• Trees, structures, boulders, and other surface features that could fall or slide into the excavation must be removed or adequately supported before excavation begins`,
        },
        {
          heading: 'Underground Utilities (1926.651(b))',
          body: `**Before any excavation begins:**

• Locate all underground utilities (water, gas, electric, fiber, sewer, steam)
• Contact the appropriate utility company — in Massachusetts, call **811 (Dig Safe)** at least 72 hours before excavating
• Utility companies have until 24 hours (or the local legal requirement) to respond and mark their lines

**If you hit an unmarked utility:**
• Stop excavation in that area
• Contact the utility company immediately
• Do not attempt to excavate further until the utility is confirmed and located

**Safe digging practice near marked utilities:**
• Hand-dig (or hydro-vacuum excavate) within the tolerance zone around marked lines
• Do not assume marks are exact — underground utilities can shift, and location accuracy varies`,
        },
        {
          heading: 'Air Monitoring & Water Accumulation',
          body: `**Air monitoring (1926.651(g)):**
• Required for any excavation 4 feet or deeper before workers enter
• Test for: oxygen deficiency (<19.5% O₂), combustible gases, toxic atmospheres (CO, H₂S)
• Excavations near landfills, sewers, or chemical storage are high-risk for hazardous atmospheres
• If hazardous atmosphere exists: PPE, ventilation, or rescue equipment required — and only trained personnel may enter

**Water accumulation (1926.651(h)):**
• Workers must NOT enter excavations with accumulated water unless:
  - Water is being removed with appropriate equipment monitored by the competent person, AND
  - The competent person determines soil stability is adequate
• Any soil with standing water = Type C — the most aggressive protective system must be used`,
        },
      ],
    },
  ],
  quickFacts: [
    { label: 'Egress depth trigger', value: '4 feet (stairway, ladder, or ramp)' },
    { label: 'Max lateral travel to egress', value: '25 feet' },
    { label: 'Protective system depth trigger', value: '5 feet (no exceptions)' },
    { label: 'Spoil pile setback', value: '2 feet minimum from trench edge' },
    { label: 'Type A soil strength', value: '≥1.5 tsf (144 kPa)' },
    { label: 'Type B soil strength', value: '0.5–1.5 tsf (48–144 kPa)' },
    { label: 'Type C soil strength', value: '≤0.5 tsf (<48 kPa)' },
    { label: 'Type A max slope', value: '¾:1 (53°)' },
    { label: 'Type B max slope', value: '1:1 (45°)' },
    { label: 'Type C max slope', value: '1½:1 (34°)' },
    { label: 'Water in trench', value: 'Automatic Type C — most conservative system' },
    { label: 'PE design required', value: 'Excavations over 20 feet deep' },
    { label: 'Trench box removal sequence', value: 'Bottom up, backfilling simultaneously' },
    { label: 'Fissured soil', value: 'Cannot be Type A — downgrades to B at minimum' },
    { label: 'Dig Safe (Dig before you dig)', value: 'Call 811 — at least 72 hours before excavating' },
    { label: 'Oxygen deficiency threshold', value: '<19.5% O₂ — hazardous atmosphere' },
  ],
  defaultOpenSections: ['depth-rules', 'soil-classification'],
};

export default data;
