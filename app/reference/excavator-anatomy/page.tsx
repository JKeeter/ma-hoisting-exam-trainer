'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp, AlertTriangle, Search, Info, Wrench, Shield, Eye, Zap } from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────

const sections = [
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

**Inspection:** Run your hand along the tooth profile (engine off). Flat-topped, sharp, or visibly asymmetric teeth require replacement.`,
      },
      {
        heading: 'Idlers & Rollers',
        body: `**Front idler:** Guides the track and acts as a tensioner. Does NOT transmit drive power. Functions as a shock absorber on the non-drive end of the track.

**Track rollers (bottom):** Support the machine's weight against the track. Multiple rollers distribute load across the full track length.

**Carrier rollers (top):** Support the track on its return path. Prevent the top run of track from dragging.

**Inspection points:**
• Flat spots or cracking on roller surfaces → replace
• Bearing play detectable by rocking the roller by hand → replace
• Seal failure visible as oil weeping from roller ends → replace
• Seized rollers that don't turn freely during track movement → replace

**Service interval:** Lubricate bearings every 250 machine hours; clean weekly in muddy conditions.`,
      },
      {
        heading: 'Track Shoes (Grouser Plates)',
        body: `**Steel tracks:** Maximum durability on rocky or muddy terrain. Heavy, noisy, and damage paved surfaces. Standard for most construction excavators.

**Rubber pads (roadliners):** Bolt onto steel shoes to protect paved surfaces. Wear out faster on abrasive ground. Required on most road work sites.

**Grouser types:**
• *Triple ridge:* Best balance of traction and smooth travel — most common
• *Single ridge:* Basic traction for softer ground
• *Heavy duty:* Extreme conditions, quarry work

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
• *Four-point contact ball bearing:* Most common; handles moderate combined loads; found on small/medium excavators
• *Double-row ball bearing:* Greater axial load and overturning moment capacity; used on large excavators

**Inspection:**
• Measure play with a dial gauge after a loading/unloading cycle — excessive play indicates worn rolling elements
• Listen for grinding, clicking, or rumbling during swing — indicates damaged elements or contamination
• Inspect seals for grease weeping — a failed seal allows water and dirt contamination
• Check for discoloration or overheating signs on the bearing race

**Lubrication:** Grease via multiple dedicated lubrication points. Use the machine's automatic lubrication system if equipped. Inadequate lubrication is the leading cause of slew ring failure.

**Removal from service:** Cracks or visible deformation of the bearing race, or play exceeding manufacturer tolerance, require immediate removal from service.`,
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

**Removal from service:** Any visible crack in the structural tube, base plate, or cylinder mounting areas requires immediate removal.`,
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
• Audible clunking or clicking during stick curl/dump cycles — increased clearance between pin and bushing
• Visible pin migration out of the bore — pin retaining hardware failure

**Lubrication:** All pins and bushings lubricated every 8–10 hours (daily use) or per manufacturer schedule. In dirty conditions, grease more frequently.`,
      },
      {
        heading: 'Bucket — Types & Applications',
        body: `**General purpose (GP) / dig bucket:**
Standard digging, loading, and trenching on most soil types. Medium tooth spacing, balanced capacity and reach.

**Rock bucket:**
Thicker wear plates, fewer but stronger teeth, reinforced side cutters. For quarry, demolition, or highly abrasive materials. Do NOT use a rock bucket for precision grading — the added weight reduces control.

**Ditching / grading bucket:**
Smooth or bolt-on reversible cutting edge, no teeth. Wide profile for leveling and finishing work. Poor for breaking ground — designed only for material that is already loose.

**Tilt bucket:**
Hydraulically tilts left and right up to 45°. Reduces machine repositioning during finish grading and ditch work. Requires hydraulic auxiliary circuit.

**V-ditch bucket:**
Triangular cross-section for forming precise V-shaped drainage trenches. Not interchangeable with general digging work.

**Bucket capacity:** Measured in cubic yards (US) or cubic meters (metric). Must not exceed the machine's rated payload — check load chart.`,
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

**Cutting edge bolt pattern:** Center-to-center hole spacing must match OEM spec exactly. Incorrect replacement edges will not bolt up safely.

**Pre-shift check:** Verify all teeth are present and locked in the adapter. A missing tooth in operation can damage the bucket shell and throw debris unpredictably.`,
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
        heading: 'OSHA Fatality Record (SHIB 072205a)',
        body: `OSHA's Safety and Health Information Bulletin 072205a documents **15 incidents of unintended bucket release from quick couplers**, resulting in **8 worker fatalities** and multiple serious injuries.

**How the fatal incidents happened:**
1. Operator changes attachment using a hydraulic or mechanical quick coupler
2. The secondary locking pin is not installed (mechanical) or the hydraulic lock is not verified
3. During a subsequent swing or digging cycle, the coupler partially releases
4. The bucket or attachment falls or swings free, striking a nearby worker

**The triggering incident (OSHA case study):**
A contractor was installing water mains. An employee entered the trench to prepare pipe installation. The excavator operator changed buckets using the quick coupler. During the next swing, the bucket detached and struck the employee — killing him. Investigation found the mechanical backup locking pin had not been installed after the attachment change.

**NIOSH 2024-102 confirms the hazard remains active.** Incidents continue because:
• Workers are not trained on secondary locking requirements
• The coupler "feels locked" without the backup pin — operators don't know it's incomplete
• Time pressure on job sites leads to skipped steps`,
      },
      {
        heading: 'Mechanical vs. Hydraulic Couplers',
        body: `**Mechanical quick coupler:**
• Primary lock: Manual wedge or latch — operator or ground worker engages using a wrench or lever
• Secondary lock: Manual pin inserted through the coupler body — **REQUIRED before every use**
• Attachment change time: 1–3 minutes (requires leaving cab)
• Key risk: Secondary pin is easily forgotten under time pressure

**Hydraulic quick coupler:**
• Primary lock: Hydraulic cylinder drives a locking wedge from the cab — operator pushes a button
• Secondary lock: Separate mechanical backup (spring-loaded pin or wedge) that activates independently
• Attachment change time: Under 30 seconds without leaving the cab
• Key risk: Hydraulic failure or accidental button activation can release the lock — secondary lock is critical

**Wedge-locking principle:** In quality couplers, continuously applied working hydraulic pressure readjusts the wedge against both attachment pins, maintaining a tight lock even under load cycles. The secondary lock backs this up.`,
      },
      {
        heading: 'Pre-Use Quick Coupler Inspection (Step by Step)',
        body: `Perform before every attachment change and at the start of each shift:

**Step 1:** Visually inspect the coupler body for cracks, deformation, or broken components. Any structural damage = remove from service.

**Step 2:** Inspect both attachment pins (the pins on the bucket/tool that the coupler grabs). Check for wear, bending, or reduced diameter.

**Step 3 (Mechanical coupler):** Verify the primary locking mechanism engages fully — look for the locking wedge or bar seated across both pins. Verify the secondary backup pin is inserted and retaining clip or locking wire is in place.

**Step 4 (Hydraulic coupler):** Activate the coupler from the cab. Listen for the hydraulic engagement sound and feel for pressure feedback. Verify the secondary lock indicator (if equipped) shows locked.

**Step 5:** Apply a test load — raise the boom with the attachment 2–3 feet, then shake it side to side. The attachment must not shift, wobble, or produce audible clunking at the coupler.

**Step 6:** Inspect hydraulic hose connections (if hydraulic coupler or hydraulic attachment). No weeping fittings, no kinked hoses.

**Step 7:** Document the inspection in the pre-shift log.`,
      },
      {
        heading: 'Ground Worker Exclusion Zone — Attachment Changes',
        body: `During any attachment change, **all ground personnel must exit the machine's full working radius** before the operator begins.

230 CMR 6.00 requires no persons within the full working radius during boom/bucket operation. This requirement is absolute during attachment changes because:

• The unsecured attachment can fall during connection if the coupler is mis-positioned
• Hydraulic lines may need to be connected while the boom is partially raised
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
• Swing circuit: Often at lower pressure than main digging circuit

**Main pump type — axial piston pump:**
• Industry standard for main hydraulic circuits
• Multiple pistons arranged parallel to the drive shaft
• Swashplate angle controls piston stroke and therefore flow output
• Variable displacement: pump automatically adjusts flow based on load demand
• Common sizes: 18, 45, 71, 100 cc/revolution

**Load-sensing systems (modern standard):**
• Variable displacement pump responds to actual load pressure
• Maintains a constant pressure drop (~10–30 bar) across the control valve
• Advantages: Better fuel efficiency, reduced heat, smoother multi-function operation
• The pump "follows" what the operator demands instead of pumping maximum flow constantly`,
      },
      {
        heading: 'Hydraulic Injection Hazard',
        body: `**This is a life-safety hazard — not a maintenance concern.**

Excavator hydraulic systems routinely operate above 3,000 psi. At this pressure, a pinhole leak produces a fluid jet that can penetrate skin, flesh, and bone without leaving a visible surface wound.

**What happens:**
• Fluid injected under the skin rapidly spreads through tissue
• Causes necrosis (tissue death) and severe inflammation
• The wound looks like a small puncture — victims often delay treatment thinking it is minor
• Result: **Amputation of the affected limb in the majority of cases; fatality without immediate surgical treatment**

**Safe leak detection — required procedure:**
1. Shut down the machine and depressurize the circuit
2. Use a piece of cardboard or a wooden stick — pass it near the suspected area
3. Observe the cardboard for wet spots or spray marks
4. NEVER use your hand or bare skin

**Hose depressurization:** Hydraulic circuits remain pressurized for minutes to hours after engine shutdown due to trapped pressure in cylinders and accumulators. Follow the manufacturer's depressurization procedure before disconnecting any fitting.`,
      },
      {
        heading: 'Hose Inspection & Safety Factor',
        body: `**Minimum safety factor:** Hydraulic hoses must be rated at 4:1 burst-to-working-pressure. A hose rated for 3,000 psi working pressure must not burst below 12,000 psi.

**Removal from service — any of the following:**
• Visible bulge (inner reinforcement has failed — outer cover is about to blow)
• Abrasion that exposes the wire braid layer
• Cracking or weather-checking of the outer cover
• Kinked hose (kinks create stress concentration and rapidly fatigue the reinforcement)
• Leaking or weeping at any fitting
• Hose routing that contacts moving parts (will abrade rapidly)

**Fluid condition guide:**
• Amber/light red: Normal, healthy fluid
• Milky or white: Water contamination — usually a failed cylinder seal or cracked cooler; requires immediate service
• Dark brown/black: Overheating oxidation; fluid life is spent; flush and replace
• Gray/metallic sheen: Metal particle contamination from internal component wear; indicates internal pump or motor damage`,
      },
      {
        heading: 'Swing Circuit — Heat Management',
        body: `The swing circuit generates disproportionate heat because every braking event converts kinetic energy of the rotating upperstructure into heat in the hydraulic fluid.

**Why this matters:**
• A standard excavator swings and brakes 400–600 times per hour during production digging
• Each braking event dumps heat into the hydraulic system
• Overheated swing motors lose efficiency, then fail prematurely

**Signs of swing circuit overheating:**
• Swing speed slows progressively during the shift
• Temperature gauge rises beyond normal range
• Hydraulic fluid smells burnt
• Visible steam near the swing motor area

**Best practices:**
• Monitor the temperature gauge — stop work and allow cooldown if it approaches the red zone
• Avoid sustained high-speed swinging under load
• Ensure the hydraulic oil cooler is clean and airflow is unobstructed
• Change hydraulic fluid on the manufacturer's schedule — degraded fluid holds less heat`,
      },
      {
        heading: 'Cylinder Seal Inspection',
        body: `**External (visible) leaks:**
• Oil drips or streaks on the outside of the cylinder barrel or rod
• Oily dirt accumulation on hoses, fittings, or cylinder ends
• Fluid puddle under the machine

**Internal (non-visible) leaks — performance symptoms:**
• Boom, stick, or bucket drifts downward slowly when joystick is in neutral
• Reduced lifting force or slower cycle times
• Erratic or jerky movement at the start of a stroke

**Drift test:** Raise the boom to a measured height, shut down the engine, and observe over 5–10 minutes. Drift beyond the manufacturer's published tolerance = internal seal leak; remove for cylinder rebuild.

**Rod inspection:**
• Chrome pitting, scoring, or flaking on the rod surface → seal cannot function → replace rod and seals
• Hairline scratches create leak paths that no seal material can overcome
• Bent rods must never be straightened and re-used — bend stress compromises rod integrity`,
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
Designed to maintain a survival space around the operator if the machine rolls over. The ROPS crushes in a controlled manner to absorb energy while protecting the operator zone.

*Required when:* Terrain has rollover potential — slopes, soft ground, embankments, uneven fill.

*Standard (post July 15, 2019):* ISO 3471:2008. Older equipment may comply with SAE J320a, J1001, etc. depending on manufacture date.

**FOPS (Falling Object Protective Structure):**
Protects against overhead falling objects — rocks, tree branches, demolished building materials, loose spoil from above.

*Required when:* Working in demolition, tree clearing, under unstable banks, or any environment where materials may fall from above.

*Standard:* ISO 3449 Level I or II depending on the size and energy of potential falling objects.

**Combined ROPS/FOPS:** Modern excavator cabs integrate both into a single certified structure. Do not modify either element.

**Critical rule:** Any structural damage or unauthorized modification to the ROPS/FOPS structure requires immediate removal from service. The certification is voided and the structure may not protect the operator.`,
      },
      {
        heading: 'Visibility Zones & Blind Spots',
        body: `Understanding machine blind spots is safety-critical — most struck-by fatalities involving excavators occur in areas the operator literally cannot see.

**Major blind spot zones:**
• **Rear:** The counterweight blocks a large arc directly behind the machine. Even with a rearview camera, camera angle coverage is limited.
• **Right side:** The most dangerous zone for ground workers — particularly during swing operations. The cab structure creates a dead zone on the operator's right during swing.
• **Under the boom:** Directly beneath an extended boom. Workers on the ground under the boom path cannot be seen.
• **Swing perimeter:** Bystanders on the swing radius perimeter may not be visible as they enter from outside the operator's scan.

**Technologies that help (but never replace exclusion zones):**
• Rearview cameras (now standard on most machines)
• Right-side cameras (optional on newer models)
• 360° surround-view camera systems
• Radar / LiDAR proximity detection systems

**Rule:** Cameras and sensors supplement exclusion zones — they do not replace them. No one should enter the swing radius during operation regardless of what camera or sensor systems are installed.`,
      },
      {
        heading: 'Front Window Guards',
        body: `During demolition work, concrete breaking, or any operation with flying debris risk, a front window guard (wire mesh or steel grid) must be fitted over the front cab window.

**Purpose:** Prevents glass breakage from flying rocks, concrete chips, and structural debris while maintaining operator visibility.

**Types:**
• Removable wire mesh — attaches to the window frame with quick-release pins
• Permanent hinged grid — part of the FOPS package on demolition-spec machines

**Limitation:** Guards reduce visibility slightly. Clean the mesh regularly during dusty operations. Remove when working in clean conditions to maximize visibility.

**Requirement:** If there is ANY risk of material falling against the front window, the guard must be in place before work begins. Do not rely on tempered glass alone in demolition environments.`,
      },
    ],
  },
  {
    id: 'preshift',
    title: 'Pre-Shift Inspection — Full Checklist',
    icon: '✅',
    color: 'border-indigo-400',
    headerBg: 'bg-indigo-50',
    content: [
      {
        heading: 'When & Why',
        body: `**OSHA requirement:** 29 CFR 1926.20 and 1926.600 require "frequent and regular" inspections by a competent person before every shift and after any machine relocation.

**Time required:** 10–15 minutes for a thorough check. Research across Volvo, CAT, and Komatsu field data consistently shows that every minute of inspection time prevents approximately 60–90 minutes of unplanned downtime.

**Best conditions:** Engine cold, machine on level ground.`,
      },
      {
        heading: '1 — Walk-Around (360°)',
        body: `Start at a fixed reference point (e.g., front-left corner) and move consistently around the entire machine without backtracking.

☐ Fluid puddles under the machine (hydraulic oil, engine oil, coolant, fuel, DEF)
☐ Ground conditions — stable, level surface; no undermining near edges
☐ Missing, loose, or damaged bolts, pins, or retaining hardware
☐ All guards and covers in place and secured
☐ Visible cracks in frame, welds, or structural members
☐ Access steps and handholds secure and undamaged
☐ Work lights, beacons, and mirrors present and intact`,
      },
      {
        heading: '2 — Fluid Levels (Engine Off)',
        body: `☐ Engine oil — dipstick or sight gauge; note color and level
☐ Coolant — overflow reservoir level; inspect for milky contamination (indicates combustion gas or oil leak into coolant)
☐ Hydraulic oil — sight gauge; note color (amber=good / milky=water / dark=oxidized)
☐ Fuel — check tank level; plan refueling before deficiency becomes a stoppage
☐ DEF/AdBlue (if Tier 4 Final engine) — check level; low DEF causes engine derate
☐ Air filter restriction indicator — replace if in red zone`,
      },
      {
        heading: '3 — Undercarriage',
        body: `☐ Track sag — measure and compare to manufacturer specification
☐ Sprocket teeth — sharp, broken, or asymmetrically worn teeth require replacement
☐ Idler wheels — no flat spots, free rotation, no bearing play
☐ Track rollers — no flat spots, seals not weeping, rotate freely
☐ Carrier rollers — intact, no seized bearing
☐ Track shoes — no broken or missing grouser plates; bolts tight
☐ Track chain — no broken links, pins seated, no mud/rock impaction in track voids
☐ Track alignment — track runs centered on idler and sprocket`,
      },
      {
        heading: '4 — Boom, Stick & Bucket',
        body: `☐ Boom base welds — no cracks at upperstructure mounting point or cylinder brackets
☐ Stick welds — no cracks at boom-to-stick pin or cylinder mounting
☐ All pin and bushing connections — rock each joint; no detectable lateral play
☐ Bucket mounting ears — no cracks at pin holes; this is an immediate removal-from-service finding
☐ Bucket teeth — all present, locked in adapters, no cracked shanks
☐ Cutting edge — even wear, no cracks
☐ Hydraulic cylinders — rod surface smooth (no scoring, pitting, chrome flaking); seals not weeping
☐ Hydraulic hoses — no bulges, no abrasion through outer cover, no kinked routing
☐ Quick coupler (if equipped) — see Quick Coupler inspection section`,
      },
      {
        heading: '5 — Cab & Safety Devices',
        body: `☐ ROPS/FOPS structure — no cracks, bends, or deformation
☐ Seat belt — latch functions positively; webbing not cut or frayed
☐ Cab windows — no cracks that impair visibility
☐ Mirrors — clean, properly angled; replace cracked mirrors
☐ Wipers and washers — functional
☐ Horn — test audibility
☐ Backup alarm — test (if backup alarm is non-functional and rear view is obstructed = remove from service)
☐ Fire extinguisher — present, gauge in green zone, pin intact, accessible without obstruction
☐ First aid kit — present`,
      },
      {
        heading: '6 — Engine Startup Test',
        body: `After completing the walk-around and resolving or documenting all findings:

☐ Start engine and listen during warm-up — no unusual knocking, rattling, or misfiring
☐ Observe all gauges — oil pressure rises within 5 seconds; coolant and hydraulic temp begin rising normally
☐ Warning lights — all should clear after engine stabilizes; any persistent warning = investigate before operating
☐ Cycle all functions slowly — boom up/down, stick in/out, bucket curl/dump, swing left/right, travel forward/back
☐ Check for abnormal noises, hesitation, or drift during function test
☐ For quick coupler: perform test lift as described in Quick Coupler section`,
      },
      {
        heading: 'Documentation & Deficiency Response',
        body: `**Always document:**
• Date, time, machine ID / serial number
• Operator name
• All findings — including items in good condition
• Any item removed from service: reason and action taken
• Supervisor notification for any out-of-service finding

**Go / Hold / Tag Out:**
• ✅ **Go:** All systems within spec; safe to operate
• 🟡 **Hold:** Minor issue; supervisor notified; restricted operation pending repair (e.g., non-critical lamp out)
• 🔴 **Tag Out:** Removal-from-service condition. Tag the key or controls; do not operate until repaired and cleared

**Retention:** Keep inspection records for at least 12 months. Records are required during OSHA inspections.`,
      },
    ],
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

function renderBody(text: string) {
  return text.split('\n').map((line, i) => {
    if (line.startsWith('**') && line.endsWith('**')) {
      return <p key={i} className="font-bold text-slate-900 mt-3 mb-1">{line.replace(/\*\*/g, '')}</p>;
    }
    if (line.startsWith('• ') || line.startsWith('☐ ')) {
      const content = line.replace(/\*\*(.*?)\*\*/g, '$1');
      const isCheckbox = line.startsWith('☐');
      return (
        <li key={i} className="flex gap-2 text-slate-700 text-sm leading-relaxed">
          <span className={isCheckbox ? 'text-indigo-500 font-bold flex-shrink-0' : 'text-safety font-bold flex-shrink-0'}>
            {isCheckbox ? '☐' : '•'}
          </span>
          <span dangerouslySetInnerHTML={{ __html: content.replace(/^[•☐] /, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>') }} />
        </li>
      );
    }
    if (line.startsWith('*') && line.endsWith('*') && !line.startsWith('**')) {
      return null;
    }
    if (line === '') return <div key={i} className="h-1" />;
    const processed = line
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>');
    return <p key={i} className="text-slate-700 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: processed }} />;
  });
}

export default function ExcavatorAnatomyPage() {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(['undercarriage']));
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query.trim()) return sections;
    const q = query.toLowerCase();
    return sections
      .map(s => ({
        ...s,
        content: s.content.filter(
          c => c.heading.toLowerCase().includes(q) || c.body.toLowerCase().includes(q)
        ),
      }))
      .filter(s => s.content.length > 0 || s.title.toLowerCase().includes(q));
  }, [query]);

  const toggleSection = (id: string) => {
    setOpenSections(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleItem = (key: string) => {
    setOpenItems(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const expandAll = () => {
    setOpenSections(new Set(sections.map(s => s.id)));
    setOpenItems(new Set(sections.flatMap(s => s.content.map((_, i) => `${s.id}-${i}`))));
  };

  return (
    <main className="px-4 py-8 md:py-12 max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <Link href="javascript:history.back()" className="text-safety hover:text-yellow-500 font-semibold text-sm">
          ← Back
        </Link>
      </div>

      <div className="space-y-1">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Excavator & Track Hoe — Component Reference</h1>
        <p className="text-slate-500 text-sm">MA 2A Hoisting License · Module 2 Study Reference</p>
      </div>

      {/* Critical alert */}
      <div className="flex gap-3 p-4 bg-red-50 border-2 border-red-400 rounded-lg">
        <AlertTriangle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
        <div>
          <p className="font-bold text-red-900 text-sm">Quick Coupler Fatalities — Read Before Operating</p>
          <p className="text-red-800 text-sm mt-1">OSHA documents 8 worker deaths from unintended attachment release. Secondary locking is mandatory every time. <button onClick={() => { setOpenSections(p => new Set([...p, 'quick-coupler'])); document.getElementById('quick-coupler')?.scrollIntoView({ behavior: 'smooth' }); }} className="underline font-semibold">Jump to Quick Coupler section →</button></p>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input
          type="search"
          value={query}
          onChange={e => { setQuery(e.target.value); if (e.target.value) expandAll(); }}
          placeholder="Search components, specs, procedures…"
          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safety text-sm"
        />
      </div>

      {/* Quick-nav pills */}
      {!query && (
        <div className="flex flex-wrap gap-2">
          {sections.map(s => (
            <button
              key={s.id}
              id={s.id}
              onClick={() => { setOpenSections(p => new Set([...p, s.id])); document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' }); }}
              className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-colors ${s.critical ? 'border-red-400 text-red-700 bg-red-50 hover:bg-red-100' : 'border-slate-300 text-slate-600 bg-white hover:bg-slate-50'}`}
            >
              {s.icon} {s.title.split(' — ')[0].split(' ').slice(0, 3).join(' ')}
            </button>
          ))}
        </div>
      )}

      {/* Sections */}
      <div className="space-y-4">
        {filtered.map(section => {
          const isOpen = openSections.has(section.id);
          return (
            <div key={section.id} id={section.id} className={`rounded-xl border-2 overflow-hidden ${section.color}`}>
              {/* Section header */}
              <button
                onClick={() => toggleSection(section.id)}
                className={`w-full flex justify-between items-center px-5 py-4 ${section.headerBg} hover:brightness-95 transition-all`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl" aria-hidden>{section.icon}</span>
                  <h2 className={`font-bold text-left ${section.critical ? 'text-red-900' : 'text-slate-900'}`}>
                    {section.title}
                    {section.critical && <span className="ml-2 text-xs bg-red-600 text-white px-2 py-0.5 rounded-full">SAFETY CRITICAL</span>}
                  </h2>
                </div>
                {isOpen ? <ChevronUp size={20} className="text-slate-600 flex-shrink-0" /> : <ChevronDown size={20} className="text-slate-600 flex-shrink-0" />}
              </button>

              {/* Section body */}
              {isOpen && (
                <div className="divide-y divide-slate-100">
                  {section.content.map((item, idx) => {
                    const itemKey = `${section.id}-${idx}`;
                    const itemOpen = openItems.has(itemKey);
                    return (
                      <div key={idx}>
                        <button
                          onClick={() => toggleItem(itemKey)}
                          className="w-full flex justify-between items-center px-5 py-3 bg-white hover:bg-slate-50 transition-colors text-left"
                        >
                          <h3 className="font-semibold text-slate-800 text-sm">{item.heading}</h3>
                          {itemOpen
                            ? <ChevronUp size={16} className="text-slate-400 flex-shrink-0" />
                            : <ChevronDown size={16} className="text-slate-400 flex-shrink-0" />}
                        </button>
                        {itemOpen && (
                          <div className="px-5 pb-4 bg-white">
                            <div className="space-y-1 border-l-4 border-slate-200 pl-4">
                              {renderBody(item.body)}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-slate-500">
          No results for "<span className="font-semibold">{query}</span>" — try a component name or keyword.
        </div>
      )}

      {/* Spec quick-reference card */}
      {!query && (
        <div className="rounded-xl border-2 border-safety bg-yellow-50 p-5 space-y-4">
          <h2 className="font-bold text-slate-900 flex items-center gap-2">
            <Zap size={18} className="text-yellow-600" /> Exam Quick-Reference Numbers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {[
              ['Track sag (mid-size excavator)', '20–30 mm (0.8–1.2 in)'],
              ['Hydraulic hose safety factor', '4:1 burst to working pressure'],
              ['Typical operating pressure', '280–350 bar (4,060–5,075 psi)'],
              ['Peak relief pressure', 'Up to 420 bar (6,090 psi)'],
              ['Pin lubrication interval', 'Every 8–10 hours (daily)'],
              ['Roller / idler lube interval', 'Every 250 machine hours'],
              ['Sprocket lube interval', 'Every 250 machine hours'],
              ['Track pin lube interval', 'Every 50 hours (daily in mud)'],
              ['ROPS standard (post-2019)', 'ISO 3471:2008'],
              ['Quick coupler fatalities (OSHA)', '8 deaths, 15 incidents'],
              ['Swing circuit temp risk', 'Rises with each braking cycle'],
              ['Hydraulic injection wound', 'Medical emergency — do not delay'],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-2">
                <span className="text-safety font-bold flex-shrink-0">▶</span>
                <div>
                  <span className="text-slate-600">{label}: </span>
                  <span className="font-semibold text-slate-900">{value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="text-center pt-4">
        <Link href="javascript:history.back()" className="button-secondary inline-block">
          ← Return to session
        </Link>
      </div>
    </main>
  );
}
