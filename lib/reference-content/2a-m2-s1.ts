import { ReferencePageProps } from '@/components/ReferencePage';

const data: ReferencePageProps = {
  title: 'Excavator & Track Hoe — Component Reference',
  subtitle: 'MA 2A Hoisting License · Module 2, Session 1',
  criticalAlert: {
    heading: 'Quick Coupler Fatalities — Read Before Operating',
    body: 'OSHA documents 8 worker deaths from unintended attachment release. Secondary locking is mandatory every time. Jump to the Quick Coupler section below.',
    targetSectionId: 'quick-coupler',
  },
  sections: [
    {
      id: 'undercarriage',
      title: 'Undercarriage System',
      icon: '⚙️',
      color: 'border-slate-400',
      headerBg: 'bg-slate-100',
      content: [
        {
          heading: 'Track Tension',
          body: `Track tension must be checked daily before operation and adjusted to manufacturer specification. Measure sag at the midpoint of the track between the front idler and the nearest carrier roller while the machine is on level ground with the engine off.

**Typical sag specifications:**
• Mini excavators: 10–15 mm (0.4–0.6 in)
• Mid-size (CAT 320 class): 20–30 mm (0.8–1.2 in)
• General rule: 1 to 2 inches depending on machine class

**Over-tension consequences:**
• 30–40% accelerated wear on sprockets, rollers, and track links
• Increased fuel consumption from added drag
• Accelerated bearing failure from heat

**Under-tension consequences:**
• Track derailment — the most immediate safety risk
• Chain slap that damages undercarriage components
• Loss of machine stability during turns`,
        },
        {
          heading: 'Sprockets',
          body: `Located at the rear of each track frame. The sprocket converts rotational hydraulic motor output into linear track movement.

**Key facts:**
• Does NOT act as a shock absorber — any impact is transmitted directly to the final drive
• Replace when teeth wear to sharp points, break, or show uneven wear
• Always replace sprockets in pairs with the track chain for even wear
• Lubricate every 250 machine hours

**Inspection:** Run your eye along the tooth profile. Flat-topped, sharp, or visibly asymmetric teeth require replacement.`,
        },
        {
          heading: 'Idlers & Rollers',
          body: `**Front idler:** Guides the track and acts as a tensioner. Does NOT transmit drive power. Functions as a shock absorber on the non-drive end.

**Track rollers (bottom):** Support the machine's weight against the track. Multiple rollers distribute load across the full track length.

**Carrier rollers (top):** Support the track on its return path. Prevent the top run of track from dragging.

**Inspection points:**
• Flat spots or cracking on roller surfaces → replace
• Bearing play detectable by rocking the roller by hand → replace
• Seal failure visible as oil weeping from roller ends → replace
• Seized rollers that don't turn freely → replace

**Service interval:** Lubricate bearings every 250 machine hours; clean weekly in muddy conditions.`,
        },
        {
          heading: 'Track Shoes (Grouser Plates)',
          body: `**Steel tracks:** Maximum durability on rocky or muddy terrain. Heavy, noisy, and damage paved surfaces. Standard for most construction excavators.

**Rubber pads (roadliners):** Bolt onto steel shoes to protect paved surfaces. Wear out faster on abrasive ground. Required on most road work sites.

**Grouser types:**
• Triple ridge: Best balance of traction and smooth travel — most common
• Single ridge: Basic traction for softer ground
• Heavy duty: Extreme conditions, quarry work

**Replacement trigger:** When bolt heads are flush with the top face of the grouser plate, the shoe has worn to its service limit.`,
        },
        {
          heading: 'Track Link Pins & Bushings',
          body: `Track link pins are the pivot points connecting individual track segments. They allow the track to articulate around the sprocket and idler.

**Inspection:** Look for scoring, pitting, or visible thinning of the pin surface. Pins with visible diameter reduction beyond 0.5% of original OEM spec must be replaced.

**Lubrication:** Lubricate every 50 machine hours — daily in muddy or wet conditions.

**Failure mode:** Worn pins allow track slack that quickly leads to derailment or chain slap damage.`,
        },
      ],
    },
    {
      id: 'upperstructure',
      title: 'Upperstructure — Slew Ring & Counterweight',
      icon: '🔄',
      color: 'border-blue-400',
      headerBg: 'bg-blue-50',
      content: [
        {
          heading: 'Slew Ring (Swing Bearing)',
          body: `The slew ring is the large-diameter bearing that allows the entire upperstructure — cab, boom, counterweight — to rotate 360° independently from the tracks.

**How it works:** Inner and outer rings with rolling elements (balls or cylindrical rollers) between them. The hydraulic slew motor drives a pinion gear that meshes with teeth on the slew ring to produce rotation.

**Bearing types:**
• Four-point contact ball bearing: Most common; handles moderate combined loads; found on small/medium excavators
• Double-row ball bearing: Greater axial load and overturning moment capacity; used on large excavators

**Inspection:**
• Measure play with a dial gauge — excessive play indicates worn rolling elements
• Listen for grinding, clicking, or rumbling during swing — damaged elements or contamination
• Inspect seals for grease weeping — a failed seal allows water and dirt contamination
• Check for discoloration or overheating signs on the bearing race

**Lubrication:** Grease via multiple dedicated lubrication points. Use the machine's automatic lubrication system if equipped.

**Removal from service:** Cracks or visible deformation of the bearing race, or play exceeding manufacturer tolerance.`,
        },
        {
          heading: 'Counterweight',
          body: `The counterweight is a heavy cast-iron or cast-steel block mounted at the rear of the upperstructure, directly opposite the boom.

**Weight range:** Varies by machine class — from ~2,000 lbs on compact excavators to over 33,000 lbs on large crawler cranes.

**Critical function:** Counterbalances the combined weight of the boom, stick, bucket, and maximum rated load during a full-reach operation. Without the counterweight, the machine tips forward.

**Stability impact:**
• Removed or damaged counterweight = immediate removal from service
• Never operate with a non-OEM counterweight or modified mounting
• Rear swing radius of the counterweight must be accounted for in site planning — it extends beyond the tracks and can strike workers behind the machine during swing

**Pre-shift check:** Verify counterweight mounting bolts are tight and the counterweight shows no cracks or physical damage from previous strikes.`,
        },
      ],
    },
    {
      id: 'boom-stick-bucket',
      title: 'Boom, Stick & Bucket',
      icon: '🦾',
      color: 'border-yellow-500',
      headerBg: 'bg-yellow-50',
      content: [
        {
          heading: 'Boom',
          body: `The boom is the main structural arm attached to the upperstructure. One or two large hydraulic cylinders (boom cylinders) lift and lower the boom.

**Typical range:** 0° (horizontal) to approximately 70–75° from horizontal depending on machine class.

**Inspection critical points:**
• Weld seams at the base (near upperstructure pivot) — highest stress concentration
• Weld seams at the boom cylinder mounting brackets
• Check for any cracks in the hollow box section
• Pin and bushing at the boom foot — excessive play indicates worn bushings

**Removal from service:** Any visible crack in the structural tube, base plate, or cylinder mounting areas.`,
        },
        {
          heading: 'Stick (Dipper Arm)',
          body: `The stick connects the boom tip to the bucket. The stick cylinder controls reach and digging force.

**Function:** Extending the stick increases horizontal reach; retracting it increases digging force and depth.

**Reach limits (examples):**
• Komatsu PC210LC: 33 ft 4 in max reach at ground level; 22 ft 11 in dig depth
• CAT 340 Long Reach: approximately 60 ft max reach

**Pin and bushing inspection:**
• Rock the stick by hand at each joint — detectable lateral play means worn bushings
• Audible clunking or clicking during stick curl/dump cycles
• Visible pin migration out of the bore — pin retaining hardware failure

**Lubrication:** All pins and bushings lubricated every 8–10 hours (daily use) or per manufacturer schedule.`,
        },
        {
          heading: 'Bucket — Types & Applications',
          body: `**General purpose (GP) / dig bucket:**
Standard digging, loading, and trenching on most soil types. Medium tooth spacing, balanced capacity and reach.

**Rock bucket:**
Thicker wear plates, fewer but stronger teeth, reinforced side cutters. For quarry, demolition, or highly abrasive materials.

**Ditching / grading bucket:**
Smooth or bolt-on reversible cutting edge, no teeth. Wide profile for leveling and finishing work.

**Tilt bucket:**
Hydraulically tilts left and right up to 45°. Reduces machine repositioning during finish grading and ditch work. Requires hydraulic auxiliary circuit.

**V-ditch bucket:**
Triangular cross-section for forming precise V-shaped drainage trenches.

**Bucket capacity:** Measured in cubic yards (US). Must not exceed the machine's rated payload.`,
        },
        {
          heading: 'Cutting Edges & Teeth',
          body: `**Cutting edge hardness (Rockwell C scale):**
• General excavation: 35–45 HRC
• Heavy-duty / rock work: 45–55 HRC
• Extreme abrasion: 55–63 HRC (may include carbide overlay)

**Wear inspection indicators:**
• Compare tooth height to manufacturer's worn limit marker (cast into tooth shank on most OEM teeth)
• Uneven side-to-side wear → misaligned attachment or asymmetric digging habit
• Cracking at the tooth-to-adapter interface → stress fracture risk; replace both tooth and adapter

**Replacement cycle:** Highly variable — typically 1–3 months in normal soil; weeks in abrasive rock or concrete demolition.

**Pre-shift check:** Verify all teeth are present and locked in the adapter. A missing tooth can damage the bucket shell and throw debris unpredictably.`,
        },
      ],
    },
    {
      id: 'quick-coupler',
      title: 'Quick Coupler Safety — CRITICAL',
      icon: '⚠️',
      color: 'border-red-500',
      headerBg: 'bg-red-50',
      critical: true,
      content: [
        {
          heading: 'OSHA Fatality Record (SHIB 072205a & NIOSH 2024-102)',
          body: `OSHA's Safety and Health Information Bulletin 072205a documents **15 incidents of unintended bucket release from quick couplers**, resulting in **8 worker fatalities** and multiple serious injuries.

**How the fatal incidents happened:**
1. Operator changes attachment using a hydraulic or mechanical quick coupler
2. The secondary locking pin is not installed (mechanical) or the hydraulic lock is not verified
3. During a subsequent swing or digging cycle, the coupler partially releases
4. The bucket or attachment falls or swings free, striking a nearby worker

**The triggering incident:** A contractor was installing water mains. An employee entered the trench to prepare pipe installation. The excavator operator changed buckets using the quick coupler. During the next swing, the bucket detached and struck the employee — killing him. The mechanical backup locking pin had not been installed.

**NIOSH 2024-102 (updated guidance):** Incidents continue because workers are not trained on secondary locking, and time pressure causes skipped steps.`,
        },
        {
          heading: 'Mechanical vs. Hydraulic Couplers',
          body: `**Mechanical quick coupler:**
• Primary lock: Manual wedge or latch — engaged using a wrench or lever
• Secondary lock: Manual pin inserted through the coupler body — **REQUIRED before every use**
• Attachment change time: 1–3 minutes (may require leaving cab)
• Key risk: Secondary pin is easily forgotten under time pressure

**Hydraulic quick coupler:**
• Primary lock: Hydraulic cylinder drives a locking wedge from the cab — operator pushes a button
• Secondary lock: Separate mechanical backup (spring-loaded pin or wedge) that activates independently
• Attachment change time: Under 30 seconds without leaving the cab
• Key risk: Hydraulic failure or accidental button activation — secondary lock is critical

**Wedge-locking principle:** Continuously applied working hydraulic pressure readjusts the wedge against both attachment pins, maintaining a tight lock even under load cycles. The secondary lock backs this up.`,
        },
        {
          heading: 'Pre-Use Quick Coupler Inspection',
          body: `Perform before every attachment change and at the start of each shift:

**Step 1:** Visually inspect the coupler body for cracks, deformation, or broken components.

**Step 2:** Inspect both attachment pins (the pins on the bucket/tool the coupler grabs). Check for wear, bending, or reduced diameter.

**Step 3 (Mechanical):** Verify the primary locking mechanism is fully seated. Verify the secondary backup pin is inserted and the retaining clip is in place.

**Step 4 (Hydraulic):** Activate the coupler from the cab. Listen for hydraulic engagement. Verify the secondary lock indicator shows locked.

**Step 5:** Apply a test load — raise the attachment 2–3 feet, then shake it side to side. No movement at the coupler.

**Step 6:** Inspect hydraulic hose connections on hydraulic couplers. No weeping fittings, no kinked hoses.

**Step 7:** Document the inspection in the pre-shift log.`,
        },
        {
          heading: 'Ground Worker Exclusion During Attachment Changes',
          body: `During any attachment change, **all ground personnel must exit the machine's full working radius** before the operator begins.

230 CMR 6.00 requires no persons within the full working radius during boom/bucket operation. This applies during attachment changes because:

• The unsecured attachment can fall during connection if the coupler is mis-positioned
• A mis-engaged coupler can drop the attachment during the operator's test lift

**Correct procedure:**
1. Operator announces the attachment change over radio or horn
2. All workers clear the swing radius and confirm clear
3. Operator performs the change and test lift
4. Operator confirms attachment is locked before allowing workers to re-enter the area`,
        },
      ],
    },
    {
      id: 'hydraulics',
      title: 'Hydraulic Systems',
      icon: '💧',
      color: 'border-cyan-500',
      headerBg: 'bg-cyan-50',
      content: [
        {
          heading: 'System Pressures & Pump Types',
          body: `**Typical operating pressures:**
• Normal working pressure: 280–350 bar (4,060–5,075 psi)
• Peak/relief pressure: Up to 420 bar (6,090 psi) in some excavator series

**Main pump type — axial piston pump:**
• Industry standard for main hydraulic circuits
• Multiple pistons arranged parallel to the drive shaft
• Swashplate angle controls piston stroke and flow output
• Variable displacement: pump automatically adjusts flow based on load demand

**Load-sensing systems:**
• Variable displacement pump responds to actual load pressure
• Maintains a constant pressure drop across the control valve
• Better fuel efficiency, reduced heat, smoother operation`,
        },
        {
          heading: 'Hydraulic Injection Hazard',
          body: `**This is a life-safety hazard — not a maintenance concern.**

Excavator hydraulic systems routinely operate above 3,000 psi. At this pressure, a pinhole leak produces a fluid jet that can penetrate skin, flesh, and bone without leaving a visible surface wound.

**What happens:** Fluid injected under the skin rapidly spreads through tissue, causing necrosis (tissue death) and severe inflammation. The wound looks like a small puncture — victims often delay treatment. Result: **Amputation or fatality without immediate surgical treatment.**

**Safe leak detection — required procedure:**
1. Shut down the machine and depressurize the circuit
2. Use a piece of cardboard or a wooden stick — pass it near the suspected area
3. Observe the cardboard for wet spots or spray marks
4. NEVER use your hand or bare skin

**Hose depressurization:** Hydraulic circuits remain pressurized after engine shutdown. Follow the manufacturer's depressurization procedure before disconnecting any fitting.`,
        },
        {
          heading: 'Hose Inspection & Safety Factor',
          body: `**Minimum safety factor:** Hydraulic hoses must be rated at 4:1 burst-to-working-pressure.

**Remove from service — any of the following:**
• Visible bulge (inner reinforcement has failed)
• Abrasion that exposes the wire braid layer
• Cracking or weather-checking of the outer cover
• Kinked hose (stress concentration, rapid fatigue)
• Leaking or weeping at any fitting
• Hose routing that contacts moving parts

**Fluid condition guide:**
• Amber/light red: Normal, healthy fluid
• Milky or white: Water contamination — service before operating
• Dark brown/black: Overheating oxidation — flush and replace
• Gray/metallic sheen: Metal particle contamination from internal wear`,
        },
      ],
    },
    {
      id: 'cab',
      title: 'Cab & Operator Protection',
      icon: '🛡️',
      color: 'border-green-500',
      headerBg: 'bg-green-50',
      content: [
        {
          heading: 'ROPS vs. FOPS — When Each Applies',
          body: `**ROPS (Rollover Protective Structure):**
Designed to maintain a survival space around the operator if the machine rolls over. Required when terrain has rollover potential.

*Standard (post July 15, 2019):* ISO 3471:2008. Older equipment may comply with SAE J320a, J1001, etc.

**FOPS (Falling Object Protective Structure):**
Protects against overhead falling objects — rocks, tree branches, demolished building materials.

*Required when:* Working in demolition, tree clearing, or any environment where materials may fall from above.

*Standard:* ISO 3449 Level I or II depending on potential energy of falling objects.

**Critical rule:** Any structural damage or unauthorized modification to the ROPS/FOPS requires immediate removal from service.`,
        },
        {
          heading: 'Visibility Zones & Blind Spots',
          body: `Understanding machine blind spots is safety-critical — most struck-by fatalities involving excavators occur in areas the operator literally cannot see.

**Major blind spot zones:**
• Rear: The counterweight blocks a large arc directly behind the machine
• Right side: The most dangerous zone for ground workers during swing operations
• Under the boom: Directly beneath an extended boom
• Swing perimeter: Bystanders on the swing radius perimeter may not be visible

**Technologies that help (but never replace exclusion zones):**
• Rearview cameras (now standard on most machines)
• Right-side cameras
• 360° surround-view camera systems
• Radar/LiDAR proximity detection

**Rule:** Cameras and sensors supplement exclusion zones — they do not replace them.`,
        },
      ],
    },
    {
      id: 'preshift',
      title: 'Pre-Shift Inspection — Summary',
      icon: '✅',
      color: 'border-indigo-400',
      headerBg: 'bg-indigo-50',
      content: [
        {
          heading: 'Inspection Overview',
          body: `**OSHA requirement:** 29 CFR 1926.20 and 1926.600 require "frequent and regular" inspections before every shift and after any machine relocation.

**Time required:** 10–15 minutes for a thorough check.

**Sequence:** Walk-around → Fluids → Undercarriage → Boom/Stick/Bucket → Cab/Safety Devices → Engine Startup Test

**See the full Pre-Shift Inspection Reference** for the complete 60-item checklist with decision criteria.`,
        },
        {
          heading: 'Immediate Removal-from-Service Triggers',
          body: `No exceptions for any of the following:

• Active hydraulic leak from any hose or fitting
• Non-functional seat belt
• Damaged or modified ROPS/FOPS
• Structural crack in boom, stick, or bucket mounting ears
• Non-functional brakes
• Non-functional backup alarm (obstructed rear view)
• Missing or discharged fire extinguisher
• Track partially derailed`,
        },
      ],
    },
  ],
  quickFacts: [
    { label: 'Track sag (mid-size excavator)', value: '20–30 mm (0.8–1.2 in)' },
    { label: 'Hydraulic hose safety factor', value: '4:1 burst to working pressure' },
    { label: 'Typical operating pressure', value: '280–350 bar (4,060–5,075 psi)' },
    { label: 'Pin lubrication interval', value: 'Every 8–10 hours (daily)' },
    { label: 'Roller/idler lube interval', value: 'Every 250 machine hours' },
    { label: 'ROPS standard (post-2019)', value: 'ISO 3471:2008' },
    { label: 'Quick coupler fatalities (OSHA)', value: '8 deaths, 15 incidents' },
    { label: 'Hydraulic injection wound', value: 'Medical emergency — call 911, do not delay' },
    { label: 'Hydraulic leak detection method', value: 'Cardboard or stick — NEVER bare hand' },
    { label: 'Milky hydraulic fluid', value: 'Water contamination — do not operate' },
  ],
  defaultOpenSections: ['undercarriage'],
};

export default data;
