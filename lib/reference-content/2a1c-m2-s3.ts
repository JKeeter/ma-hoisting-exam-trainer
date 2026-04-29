import { ReferencePageProps } from '@/components/ReferencePage';

const data: ReferencePageProps = {
  title: 'Hydraulics Fundamentals — Safety & Inspection',
  subtitle: 'MA 2A/1C Hoisting License · Module 2, Session 3',
  criticalAlert: {
    heading: 'Hydraulic Injection — Life-Threatening Emergency',
    body: 'A pinhole leak at 3,000 psi can inject fluid through skin with no visible entry wound. If you suspect injection: go to the ER **immediately** — do not wait. Delays lead to amputation or death.',
  },
  sections: [
    {
      id: 'pressure-hazard',
      title: 'Pressure Hazards — The Invisible Danger',
      icon: '⚠️',
      color: 'border-red-500',
      headerBg: 'bg-red-50',
      critical: true,
      content: [
        {
          heading: 'Operating Pressures',
          body: `Both excavator and loader/backhoe hydraulic systems operate at pressures fundamentally incompatible with human tissue:

**Typical operating range:** 280–350 bar (4,060–5,075 psi)
**Peak relief pressure:** Up to 420 bar (~6,090 psi) in some machine series
**Household water pressure (for comparison):** 40–80 psi

At 3,000 psi, a pinhole in a hose produces a jet that:
• Is invisible from more than a foot away
• Penetrates skin before you can feel it
• Spreads through tissue in the path of least resistance
• Can reach bone, nerves, and blood vessels within seconds`,
        },
        {
          heading: 'Hydraulic Injection — What Actually Happens',
          body: `**The wound looks minor. The injury is not.**

A hydraulic injection wound is typically a small puncture — it may bleed only slightly and hurt less than expected. This causes victims to delay seeking treatment. This delay is often fatal or results in amputation.

**What happens inside:**
• Fluid injected at high pressure spreads through tissue planes
• Causes acute inflammation and necrosis (tissue death)
• Blocks circulation to the affected area
• Bacteria from the fluid cause rapid infection

**Timeline:**
• Within hours: Severe pain, swelling, discoloration
• Within 24 hours: Tissue necrosis begins
• Without emergency surgery: Amputation of the affected limb is the typical outcome

**Treatment:** Emergency surgical debridement (removal of all contaminated tissue). The sooner treatment begins, the better the outcome.

**The rule:** Any suspected hydraulic injection — even if it "doesn't seem bad" — is an immediate 911 call and ER visit. Do not drive yourself. Do not finish the shift.`,
        },
        {
          heading: 'Safe Leak Detection — Required Procedure',
          body: `**NEVER use your bare hand to locate a hydraulic leak.** This is the most common cause of hydraulic injection injuries.

**Correct method:**
1. Shut down the machine (but pressure may persist — see depressurization)
2. Use a piece of flat cardboard or a wooden stick
3. Pass the cardboard near (not touching) the suspected hose or fitting
4. Observe the cardboard surface for wet spots, spray patterns, or staining
5. Work from a distance — even a 2-foot standoff is meaningful at these pressures

**Alternative:** A mirror or flashlight can help locate weeping fittings from a safe distance without making hand contact.

**After locating the leak:** Do not attempt to operate the machine. Tag out and call for service.`,
        },
      ],
    },
    {
      id: 'hoses',
      title: 'Hydraulic Hose Inspection & Standards',
      icon: '🔧',
      color: 'border-yellow-500',
      headerBg: 'bg-yellow-50',
      content: [
        {
          heading: 'Minimum Safety Factor — 4:1',
          body: `**Every hydraulic hose must have a minimum 4:1 burst-to-working-pressure safety factor.**

**What this means in practice:**
• A hose rated for 3,000 psi working pressure must burst at no less than 12,000 psi
• A hose rated for 5,000 psi must burst at no less than 20,000 psi

**Who enforces this:** OSHA does not specify this ratio directly for construction hoses, but it is the SAE and hose-industry standard. Manufacturers rate hoses to this standard, and using a replacement hose with a lower rating is an unsafe practice.

**Practical implication:** Only use OEM-specified or equivalent-rated replacement hoses. A "bargain" replacement hose may not meet the 4:1 safety factor.`,
        },
        {
          heading: 'Removal-from-Service Conditions',
          body: `Remove the machine from service immediately if ANY hose has:

• **Visible bulge:** The inner wire reinforcement has failed. The outer cover alone is holding system pressure — this is a ticking time bomb. A bulging hose will fail catastrophically, often without further warning.
• **Abrasion exposing the wire braid:** The cover has worn through, and the reinforcement is now exposed to further damage and corrosion.
• **Cracks or weather-checking in the outer cover:** Especially at bends. Cracks allow moisture ingress that corrodes the wire reinforcement.
• **Kinking:** A kink creates a stress concentration that rapidly fatigues the reinforcement wire, even if it looks intact.
• **Leaking or weeping at any fitting:** Any fluid escaping at a connection is a defect — fittings that weep slowly become failures quickly under load cycling.
• **Contact with moving parts:** A hose rubbing against a rotating or articulating component will abrade through rapidly. Reroute and clamp.`,
        },
        {
          heading: 'Depressurization Before Disconnecting',
          body: `Hydraulic circuits remain pressurized after the engine shuts off due to:
• Trapped fluid in cylinder chambers
• Accumulator pressure (if equipped)
• Thermal expansion of fluid after shutdown

**Never disconnect a hydraulic fitting on a running machine.**

**Correct depressurization sequence (general — always follow manufacturer procedure):**
1. Shut down the engine and allow it to fully stop
2. Cycle all control levers several times to release trapped pressure from the control circuits
3. Lower all implements to the ground (boom, bucket, lift arms, stabilizers)
4. For machines with accumulators: follow the manufacturer's specific accumulator depressurization procedure
5. Verify that the implement you're working near cannot move under residual pressure
6. Only then disconnect the fitting — and use a rag to catch any residual fluid

**Post-disconnect:** Immediately cap both the fitting and the hose end to prevent contamination.`,
        },
      ],
    },
    {
      id: 'fluid',
      title: 'Hydraulic Fluid — Condition & Contamination',
      icon: '💧',
      color: 'border-cyan-500',
      headerBg: 'bg-cyan-50',
      content: [
        {
          heading: 'Fluid Color Condition Guide',
          body: `Hydraulic fluid condition can be assessed visually during the pre-shift inspection:

**Amber / light gold:** Normal, healthy fluid in good condition. Proceed with operation.

**Milky white or gray:** Water contamination. Water enters from:
• Failed cylinder rod seal (water from ground or rain enters when rod extends into wet ground)
• Cracked hydraulic oil cooler (engine coolant leaks into hydraulic circuit)
• Condensation from temperature cycling in humid environments
• Improper refilling with contaminated fluid

Water contamination causes:
• Corrosion of metal components (pumps, valves, cylinders)
• Cavitation in the pump (damage from fluid flashing to steam at low pressure points)
• Reduced lubricating film strength
• Seal deterioration

**Dark brown or black:** Oxidation from overheating. The fluid has broken down chemically. Its lubricating and anti-wear properties are compromised. Flush and replace.

**Gray with metallic sheen or sparkle:** Metal particle contamination from internal component wear. This indicates active damage inside the system — a pump, motor, or cylinder is failing. Do not continue operation without diagnosis and repair.`,
        },
        {
          heading: 'Contamination Sources & Prevention',
          body: `**External contamination sources:**
• Dirty fill containers or funnels when adding fluid
• Leaving the fill cap off (dust and debris enter)
• Adding the wrong fluid type (incorrect viscosity or additive package)
• Moisture entering through breather vents in humid conditions

**Internal contamination sources:**
• Normal wear particles from metal surfaces
• Degraded seal material from old or failed seals
• Rust particles from water contamination
• Bacteria growth in water-contaminated fluid

**Prevention:**
• Use only clean, sealed containers when adding fluid
• Clean the fill area before opening the fill cap
• Cap the fill opening immediately after servicing
• Use OEM-specified fluid type only
• Follow manufacturer's fluid change intervals — contamination accumulates even if the machine is running fine

**Filtration:** Most machines have multiple hydraulic filters (return line, case drain, reservoir breather). Replace per manufacturer schedule — a clogged filter causes pump cavitation and system overheating.`,
        },
        {
          heading: 'Hot Oil Burn Hazard',
          body: `Hydraulic fluid at operating temperature typically reaches 140–180°F (60–82°C). A burst hose releases hot oil under pressure.

**Hazards:**
• Thermal burn from hot oil contacting skin
• Fire risk if hot oil contacts an exhaust manifold or other ignition source
• Vision loss if oil reaches the eyes

**Personal protective equipment:**
• Safety glasses or face shield when working near hydraulic systems
• Gloves when disconnecting fittings that may have residual fluid

**Fire risk:** Hydraulic fluid is not as flammable as gasoline, but it is combustible when in a fine mist (which a burst hose creates). Keep the work area clear of ignition sources when doing hydraulic work.`,
        },
      ],
    },
    {
      id: 'pumps-circuits',
      title: 'Pump Types, Pascal\'s Law & Circuit Basics',
      icon: '⚙️',
      color: 'border-slate-400',
      headerBg: 'bg-slate-100',
      content: [
        {
          heading: 'Pascal\'s Law — Force Multiplication',
          body: `**Pascal's Law:** Pressure applied to a confined fluid transmits equally in all directions throughout the fluid.

**Practical application:** A hydraulic cylinder with a 6-inch bore (28.3 in² area) at 3,000 psi develops:
• Force = Pressure × Area = 3,000 psi × 28.3 in² = **84,900 lbs of force**

This is how a compact hydraulic system can lift tons of material — high pressure multiplied by cylinder area produces enormous force.

**Force multiplication vs. speed trade-off:**
• A large cylinder area produces more force but moves more slowly at the same pump flow
• A small cylinder area moves quickly but produces less force
• Equipment designers choose cylinder sizes to balance the required force and speed for each function

**Pump displacement (cc/rev):**
• Larger displacement = more fluid per revolution = higher flow = faster cylinder movement
• Excavator main pumps: typically 45–200 cc/rev depending on machine class`,
        },
        {
          heading: 'Axial Piston Pump — Industry Standard',
          body: `Modern excavators and loaders use **axial piston pumps** as main hydraulic pumps.

**How it works:**
• Multiple pistons (typically 7–9) rotate in a cylinder block around a central shaft
• A swashplate at an angle drives piston reciprocation as the block rotates
• Each piston draws fluid in on one stroke and pushes it out on the next
• The swashplate angle controls stroke length, which controls flow output

**Variable displacement:** Modern pumps are variable displacement — the swashplate angle changes automatically to match flow to demand. When the operator is doing nothing, the pump reduces flow and saves fuel. When demanding fast movement, the pump increases flow.

**Common sizes:** 18, 45, 71, 100 cc per revolution (more cc = more flow at the same RPM).`,
        },
        {
          heading: 'Load-Sensing System',
          body: `Most modern excavators and high-end loaders use a **load-sensing hydraulic system**.

**How it works:**
• The pump constantly measures the pressure at the actuator (the cylinder or motor doing work)
• The pump adjusts its output to maintain a constant pressure difference (~10–30 bar) across the control valve
• If the load gets heavier, the pump increases pressure. If it gets lighter, the pump reduces pressure.

**Benefits over fixed-displacement:**
• Much better fuel efficiency — pump only works as hard as needed
• Less heat generation — excess flow doesn't have to be relieved (wasted) through relief valves
• Smoother multi-function operation — swing, boom, and stick can work simultaneously without fighting each other

**Pressure relief valves:** Every circuit has a relief valve set at the maximum permissible pressure. When system pressure reaches the relief setting, the valve opens and diverts flow back to the tank — preventing hose and component failure from overpressure. Relief valves do NOT substitute for operating within the load chart.`,
        },
      ],
    },
  ],
  quickFacts: [
    { label: 'Typical operating pressure', value: '280–350 bar (4,060–5,075 psi)' },
    { label: 'Peak relief pressure', value: 'Up to 420 bar (6,090 psi)' },
    { label: 'Hose safety factor (min)', value: '4:1 burst-to-working-pressure' },
    { label: 'Safe leak detection method', value: 'Cardboard or wooden stick — NEVER bare hand' },
    { label: 'Milky fluid color', value: 'Water contamination — service before operating' },
    { label: 'Hydraulic injection — action', value: '911 and ER immediately — no delays' },
    { label: 'Bulging hose', value: 'Remove from service — inner reinforcement failed' },
    { label: 'Fluid after engine shutdown', value: 'Remains pressurized — depressurize before disconnecting' },
    { label: 'Hydraulic fluid operating temp', value: '140–180°F (60–82°C) — burn hazard' },
    { label: 'Main pump type (modern machines)', value: 'Variable displacement axial piston pump' },
    { label: 'Pascal\'s Law', value: 'Pressure transmits equally in all directions in a confined fluid' },
  ],
  defaultOpenSections: ['pressure-hazard'],
};

export default data;
