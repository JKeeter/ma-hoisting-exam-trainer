import { LicenseRestriction } from '../types';

export const restriction_1a: LicenseRestriction = {
  code: '1A',
  name: 'Hoisting apparatus w/ friction winch drum',
  description: 'Conventional and lattice-boom crawler and truck cranes with friction winch drums.',
  equipmentCovered: ['Conventional cranes', 'Lattice-boom crawler cranes', 'Truck cranes'],
  totalHours: 24,
  modules: [
    {
      id: '1a-m1',
      title: 'Legal & Regulatory Foundation',
      orderInCourse: 1,
      estimatedHours: 6,
      sessions: [
        {
          id: '1a-m1-s1',
          title: 'Crane-Specific Regulations (MGL & CMR)',
          durationHours: 2,
          learningObjectives: [
            'State the minimum age, exam passing score, and application fee for a 1A license',
            'Identify the scope of equipment covered under the 1A restriction',
            'Explain the relationship between MGL Chapter 146 and 230 CMR 6.00 for crane operations',
            'List the key exemptions under MGL §53 that do not require a hoisting license',
          ],
          topics: [
            'MGL Chapter 146 §53 — who must hold a hoisting license in Massachusetts',
            'Minimum age requirement: 18 years old for any hoisting license',
            'Exam passing score: 70% minimum; 60-day wait after a failed attempt',
            '$75 non-refundable application fee per restriction class',
            'License valid for 2 years; renewal requires 2 hours of continuing education per 230 CMR 6.04',
            '1A scope: all friction-clutch machines, all derricks, and automatically covers 1B/1C/1D/4B–4G equipment',
            '230 CMR 6.00: the implementing regulation that adds technical operating requirements to MGL Chapter 146',
            'Exemptions: agricultural operators, public utilities with approved training programs, industrial forklifts on company property, public schools and approved apprenticeship programs',
            'Application and licensing through the MA Division of Occupational Licensure (DOL) / Office of Public Safety and Inspections (OPSI)',
            'Employer responsibility: MGL §66 places liability on both the operator and the employer who directs the work',
          ],
          resources: [
            {
              label: 'MGL Chapter 146 §53 — Hoisting license requirement',
              url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXX/Chapter146/Section53',
              type: 'regulation',
              required: true,
            },
            {
              label: 'MA Hoisting Licensing & Exams (mass.gov)',
              url: 'https://www.mass.gov/hoisting-licensing-and-exams',
              type: 'reference',
              required: true,
            },
            {
              label: 'Guide to Hoisting Engineering Restrictions (mass.gov)',
              url: 'https://www.mass.gov/info-details/guide-to-engineering-restrictions',
              type: 'reference',
              required: true,
            },
          ],
          selfCheck: [
            {
              question: 'What is the minimum passing score on the Massachusetts 1A hoisting engineer exam?',
              options: ['60%', '65%', '70%', '75%'],
              correctIndex: 2,
              explanation:
                'The passing score is 70% for all Massachusetts hoisting engineer exams. Score below 70% and you must wait 60 days before retesting — use that time to focus on the topics where you scored poorly.',
            },
            {
              question: 'A holder of a Massachusetts 1A hoisting license is automatically authorized to operate which of the following?',
              options: [
                'Only friction-clutch cranes and lattice-boom crawler cranes',
                'Friction-clutch machines and all equipment in classes 1B, 1C, 1D, 4B, 4C, 4D, 4E, 4F, and 4G',
                'Any hoisting equipment in the Commonwealth without restriction',
                'All cranes rated over 5 tons regardless of drive type',
              ],
              correctIndex: 1,
              explanation:
                'The 1A is the broadest crane restriction. Under 230 CMR 6.00, a 1A holder may operate all friction-clutch machines, all derricks, and every equipment class listed in 1B through 1D and 4B through 4G. It does not, however, automatically authorize unrelated restriction classes like 2A or 3A.',
            },
            {
              question: 'What is the non-refundable application fee for each restriction class when applying for a Massachusetts hoisting engineer license?',
              options: ['$25', '$50', '$75', '$100'],
              correctIndex: 2,
              explanation:
                'The application fee is $75 per restriction class and is non-refundable even if you fail the exam or your application is denied. Because the 1A, 1B, 1C, and 1D are separate restriction classes, applying for multiple restrictions requires separate fees.',
            },
            {
              question: 'How long must you wait before retaking the 1A hoisting exam after a failed attempt?',
              options: ['7 days', '30 days', '60 days', '90 days'],
              correctIndex: 2,
              explanation:
                'A 60-day waiting period applies after any failed hoisting engineer exam attempt. This applies to all restriction classes including 1A. Plan your study schedule so that you are prepared before your first attempt.',
            },
            {
              question: 'Under MGL §53, which of the following operators does NOT need a Massachusetts hoisting license?',
              options: [
                'A crane operator lifting steel at a commercial construction site',
                'A farmhand using a friction-drum crane exclusively on agricultural land',
                'A utility contractor hoisting equipment from a bucket truck on a public road',
                'A demolition worker operating a crane to place explosive charges',
              ],
              correctIndex: 1,
              explanation:
                'Agricultural operators using hoisting equipment exclusively for farming purposes are explicitly exempt under MGL §53. All other options involve construction or utility work on public or commercial sites, which require a valid license.',
            },
            {
              question: 'Under 230 CMR 6.04, what continuing education is required at each 1A license renewal?',
              options: [
                'No CE is required for crane operators',
                '1 hour covering crane-specific OSHA regulations',
                '2 hours covering MGL Chapter 146, 230 CMR 6.00, and OSHA/ANSI standards',
                '4 hours of practical crane operation refresher training',
              ],
              correctIndex: 2,
              explanation:
                '230 CMR 6.04 requires all hoisting license holders to complete 2 hours of continuing education per renewal cycle. The CE must cover M.G.L. c. 146, 230 CMR 6.00, and relevant OSHA and ANSI B30 standards. Only certificates from approved CE providers are accepted.',
            },
          ],
        },
        {
          id: '1a-m1-s2',
          title: 'Load Charts & Rigging Certification',
          durationHours: 2,
          learningObjectives: [
            'Read a crane load chart to determine rated capacity for a given boom length, radius, and configuration',
            'Explain why load charts are configuration-specific and identify the variables that change capacity',
            'State the OSHA requirement for load chart availability in the operator cab',
            'Apply load-chart principles to determine if a proposed lift is within rated capacity',
          ],
          topics: [
            'Load chart fundamentals: rated capacity is always a function of load radius, boom length, and crane configuration',
            'Load radius: the horizontal distance from the center of rotation to the center of the suspended load',
            'Boom angle and its inverse relationship with load radius — shorter radius = higher capacity',
            'Configuration variables: on rubber vs. on outriggers (fully extended vs. partially extended) vs. on crawlers',
            'Over-front, over-rear, and 360° capacity: structural differences create different capacities by direction',
            'Lattice vs. jib ratings: main boom alone vs. main boom plus jib (fly) sections',
            'OSHA 1926.1417: rated capacity charts must be readily available in the cab at all times',
            'OSHA requirement: if load appears to exceed 75% of rated capacity, operator must confirm actual load weight before proceeding',
            'ASME B30.5: load rating charts must include capacities for all operating radii, boom angles, and work areas',
            'Rigging requirements: all slings, shackles, hooks, and rigging hardware must have documented Working Load Limits (WLL)',
            'Derating factors: dynamic loading from wind, accelerating, or swinging increases effective load beyond static weight',
            'Minimum two full wraps of rope on the drum at maximum hook lowering (OSHA 1926.1417)',
          ],
          resources: [
            {
              label: 'OSHA 1926.1417 — Operation (load chart access and rated capacity)',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1417',
              type: 'osha',
              required: true,
            },
            {
              label: '230 CMR 6.00 — Hoisting Machinery (mass.gov)',
              url: 'https://www.mass.gov/regulations/230-CMR-600-hoisting-machinery',
              type: 'regulation',
              required: true,
            },
          ],
          selfCheck: [
            {
              question: 'A crane\'s load chart shows a rated capacity of 12 tons at a 30-ft load radius with the boom at 60° on outriggers fully extended. The same chart shows 8 tons at a 40-ft radius. You need to lift a 10-ton load. What must you verify first?',
              options: [
                'That the load weighs no more than 10 tons by estimation',
                'The exact horizontal distance from the center of rotation to the load, and that outriggers are fully extended',
                'That the boom angle is at least 60°',
                'That you have a qualified rigger on site',
              ],
              correctIndex: 1,
              explanation:
                'Rated capacity varies directly with load radius. You must measure the actual load radius and confirm the crane is set up in the configuration shown on the chart — in this case, outriggers fully extended. An error in either variable can take the lift beyond rated capacity.',
            },
            {
              question: 'Under OSHA 1926.1417, if a crane operator estimates that a load may exceed 75% of the rated capacity, what must the operator do before proceeding?',
              options: [
                'Sound the horn and proceed at half speed',
                'Confirm the actual load weight through recognized measurement methods',
                'Get verbal approval from the lift supervisor',
                'Reduce boom angle to increase rated capacity',
              ],
              correctIndex: 1,
              explanation:
                'OSHA 1926.1417 requires the operator to verify the actual load weight through industry-recognized methods before lifting any load that appears to exceed 75% of rated capacity. Estimation alone is not acceptable — the load must be positively identified.',
            },
            {
              question: 'What is the minimum number of wire rope wraps that must remain on the hoist drum when the hook is at its lowest point, per OSHA 1926.1417?',
              options: ['One wrap', 'Two wraps', 'Three wraps', 'Five wraps'],
              correctIndex: 1,
              explanation:
                'OSHA 1926.1417 requires that neither the load line nor the boom hoist line be lowered to fewer than two full wraps remaining on the drum. This ensures the rope end anchor is never subjected to full load, preventing rope pull-out from the drum.',
            },
            {
              question: 'A lattice-boom crane load chart shows separate capacity columns for "on outriggers — fully extended" and "on crawlers." You need to lift 15 tons. The chart shows 15 tons is within capacity on outriggers fully extended, but only 10 tons on crawlers. What must you do?',
              options: [
                'Proceed on crawlers since the load is close to capacity',
                'Deploy and fully extend the outriggers before making the lift',
                'Reduce boom length to improve the on-crawler rating',
                'Lift on crawlers but use a tag line to prevent swinging',
              ],
              correctIndex: 1,
              explanation:
                'Load chart ratings are configuration-specific. You must set up the crane in the configuration for which the capacity applies — in this case, outriggers fully extended. Operating at 15 tons on crawlers when the crawler rating is only 10 tons is an overload regardless of the outrigger column.',
            },
            {
              question: 'Why does a crane\'s rated capacity decrease as the load radius increases?',
              options: [
                'The wire rope becomes longer and heavier, reducing net capacity',
                'The greater radius creates a larger overturning moment, reducing stability',
                'The boom is weaker at lower angles due to compression loading',
                'Hydraulic pressure drops at longer extensions',
              ],
              correctIndex: 1,
              explanation:
                'Rated capacity is governed by the overturning moment, which equals the load multiplied by the horizontal distance (radius) from the tipping fulcrum. As radius increases, the moment increases, requiring a lower rated load to keep the crane stable. Both structural strength and tipping stability are accounted for in the chart.',
            },
          ],
        },
        {
          id: '1a-m1-s3',
          title: 'Renewal, Penalties & Operating Rules (230 CMR 6.00)',
          durationHours: 2,
          learningObjectives: [
            'State the civil and criminal penalties for unlicensed crane operation under MGL Chapter 146',
            'Explain the 230 CMR 6.00 operating rules that apply to all 1A crane operations',
            'Describe the signaler requirements under 230 CMR 6.00 and the SAE J1307 hand-signal standard',
            'Summarize the renewal process and CE requirement for the 1A license',
          ],
          topics: [
            'Civil penalty: up to $500 per day for each day of unlicensed hoisting equipment operation (MGL §53)',
            'Criminal liability for repeat or willful violations; employer liability when knowingly using unlicensed operators',
            'License renewal: every 2 years; 2-hour CE per 230 CMR 6.04 required before renewal',
            'No grace period: an expired license is an invalid license — operation with an expired license incurs penalties',
            'Reinstatement after lapse: requires re-application and potentially re-examination',
            '230 CMR 6.00: only the approved signaler may direct crane operator movements',
            'SAE J1307-2023: the required hand signal standard referenced in 230 CMR 6.00',
            'No persons within the full swing radius of the crane while the boom, load, or counterweight is rotating',
            'Operators must follow all manufacturer specifications and load chart limitations',
            'No unauthorized personnel on or in the crane cab during operation',
            'MGL §67: accident reporting obligations for crane incidents',
            'MGL §66: employer must ensure operators hold valid licenses for equipment being operated',
          ],
          resources: [
            {
              label: 'MGL Chapter 146 §§ 53, 64–67',
              url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXX/Chapter146',
              type: 'regulation',
              required: true,
            },
            {
              label: '230 CMR 6.00 — Hoisting Machinery (mass.gov)',
              url: 'https://www.mass.gov/regulations/230-CMR-600-hoisting-machinery',
              type: 'regulation',
              required: true,
            },
            {
              label: 'SAE J1307 Hand Signals — Quick Reference',
              url: '/hand-signals',
              type: 'reference',
              required: true,
            },
            {
              label: 'Education requirements for hoisting engineer license (mass.gov)',
              url: 'https://www.mass.gov/info-details/education-requirements-for-hoisting-engineer-license',
              type: 'reference',
              required: false,
            },
          ],
          selfCheck: [
            {
              question: 'What is the maximum civil penalty per day for operating a crane without a valid Massachusetts hoisting license?',
              options: ['$100 per day', '$250 per day', '$500 per day', '$1,000 per day'],
              correctIndex: 2,
              explanation:
                'MGL §53 allows civil penalties of up to $500 per day for each day of unlicensed operation. Both the operator who runs the equipment without a license and the employer who knowingly allows it face separate liability.',
            },
            {
              question: 'Your 1A license expired three weeks ago. You have a crane job tomorrow. Can you legally operate the crane?',
              options: [
                'Yes, there is a 30-day grace period after expiration',
                'Yes, if your renewal application is submitted',
                'No, an expired license is an invalid license under MGL Chapter 146',
                'Yes, if your employer signs a liability waiver',
              ],
              correctIndex: 2,
              explanation:
                'There is no grace period under MGL Chapter 146. An expired license is invalid, and operating hoisting equipment with an expired license exposes both the operator and the employer to civil penalties of up to $500 per day.',
            },
            {
              question: 'Under 230 CMR 6.00, who is the ONLY person authorized to direct a crane operator\'s movements on a job site?',
              options: [
                'The general contractor\'s site superintendent',
                'Any crew member who understands the hand signals',
                'The approved signaler assigned to the crane',
                'Either the operator or the project engineer',
              ],
              correctIndex: 2,
              explanation:
                '230 CMR 6.00 requires that only an approved signaler direct the crane operator. Taking direction from anyone else — even a supervisor or project engineer — violates the regulation and creates dangerous conditions.',
            },
            {
              question: 'A worker is standing within the counterweight swing arc while you are rotating the crane. What must you do?',
              options: [
                'Slow your swing speed and sound the horn',
                'Stop all rotation until the worker clears the swing arc',
                'Ask the signaler to warn the worker, then proceed slowly',
                'Complete the rotation quickly so the hazard period is short',
              ],
              correctIndex: 1,
              explanation:
                '230 CMR 6.00 prohibits any person within the full working/swing radius during crane rotation. The only correct response is to stop immediately and wait until the arc is clear. A swinging counterweight can strike a worker with lethal force.',
            },
            {
              question: 'Which hand-signal standard is required by 230 CMR 6.00 for crane operations in Massachusetts?',
              options: ['ANSI Z535', 'SAE J1307-2023', 'ASME B30.5 Appendix A', 'OSHA 1926 Appendix A'],
              correctIndex: 1,
              explanation:
                'SAE J1307 (most recently revised 2023) is the required hand signal standard under 230 CMR 6.00 for crane operations. All signalers and operators must know these signals. OSHA 1926 Subpart CC Appendix A separately establishes standard hand signals for federal purposes but Massachusetts specifically references SAE J1307.',
            },
            {
              question: 'Under MGL §67, what must a crane operator do following an accident involving the crane?',
              options: [
                'File a report only if someone was injured or killed',
                'Report the accident as required by law and cooperate with any investigation',
                'Notify the manufacturer within 24 hours',
                'No reporting is required if property damage is under $10,000',
              ],
              correctIndex: 1,
              explanation:
                'MGL §67 requires accident reporting for hoisting machinery incidents. Operators must comply with all applicable reporting requirements and cooperate with inspections. Failure to report is a separate violation that compounds any penalties from the underlying incident.',
            },
          ],
        },
      ],
    },
    {
      id: '1a-m2',
      title: 'Equipment Systems & Components',
      orderInCourse: 2,
      estimatedHours: 6,
      sessions: [
        {
          id: '1a-m2-s1',
          title: 'Crawler Crane Anatomy',
          durationHours: 2,
          learningObjectives: [
            'Identify and name the major structural and mechanical components of a lattice-boom crawler crane',
            'Explain the function of the friction clutch and band brake winch system and how it differs from a hydraulic hoist',
            'Describe the purpose of the boom butt, intermediate sections, and boom top in a lattice-boom system',
            'Explain the role of the counterweight, carbody, and crawlers in crane stability',
          ],
          topics: [
            'Carbody (lower works): crawler frames, track chains, drive sprockets, idlers, track shoes — distributes machine weight over a large footprint',
            'Upperstructure (upper works): revolving frame, cab, engine, drums, counterweight — rotates on the center pin above the carbody',
            'Center pin (king pin): the structural pin connecting upper and lower works and transmitting loads between them',
            'Boom butt (heel section): the base boom section pinned directly to the boom foot pivot on the revolving frame',
            'Intermediate boom sections (inserts): standard and half-length sections pinned together to build desired boom length',
            'Boom top (head section): the uppermost section with sheaves for load line and boom hoist line',
            'Boom hoist line: the wire rope system that raises and lowers the boom; typically reeved through a mast or A-frame',
            'A-frame (gantry/mast): the structural A-shaped frame on the upperstructure from which the boom hoist pendants hang',
            'Pendants (boom hoist cables): the static structural wire ropes connecting the boom top to the A-frame',
            'Friction winch drum: mechanical drum with a friction clutch to engage the drum and a band brake to control load lowering',
            'Friction clutch: engages or disengages the drum from the engine drive; controlled by the operator via clutch lever',
            'Band brake: wraps around the drum to slow or stop rotation; controlled independently of the clutch',
            'Main hoist and auxiliary hoist (whip line): two separate winch drums allowing independent load handling',
            'Counterweight: heavy steel blocks at the rear of the upperstructure that counterbalance the boom and load',
            'Load block and hook: the multi-sheave bottom block and hook assembly suspended from the load line',
            'Boom angle indicator: shows the boom angle relative to horizontal; used to determine load radius',
          ],
          resources: [
            {
              label: 'OSHA 1926.1401 — Definitions (crane component terminology)',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1401',
              type: 'osha',
              required: true,
            },
            {
              label: 'OSHA 1926 Subpart CC — Cranes and Derricks in Construction',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926SubpartCC',
              type: 'osha',
              required: false,
            },
          ],
          selfCheck: [
            {
              question: 'What is the difference between the friction clutch and the band brake on a crawler crane winch drum?',
              options: [
                'The clutch slows the drum; the brake engages it to the engine',
                'The clutch engages the drum to the engine drive; the brake slows or stops drum rotation',
                'They are two names for the same device',
                'The clutch controls the boom hoist; the brake controls the load line',
              ],
              correctIndex: 1,
              explanation:
                'On a friction winch system, the clutch engages the drum to the engine power train (power to lift), while the band brake wraps around the drum to slow or stop it during lowering. Both must be in working order before any lift — worn linings on either cause loss of load control.',
            },
            {
              question: 'What is the purpose of the A-frame (gantry) on a lattice-boom crawler crane?',
              options: [
                'It is the structural frame on which the operator cab is mounted',
                'It is the base section of the lattice boom that connects to the revolving frame',
                'It is the structure from which boom hoist pendants hang to support the boom',
                'It houses the main hoist drums and engine',
              ],
              correctIndex: 2,
              explanation:
                'The A-frame (also called the gantry or mast) is the steel structure mounted to the revolving frame. The boom hoist pendants run from the boom top, through sheaves at the A-frame top, and down to the boom hoist drum. This system controls boom angle.',
            },
            {
              question: 'What is the function of the boom pendants (pendant cables) on a lattice-boom crane?',
              options: [
                'They are spare wire rope sections stored on the A-frame',
                'They are static structural wire ropes connecting the boom top to the A-frame that carry the boom\'s static load',
                'They are the running ropes that raise and lower the boom',
                'They connect the counterweight to the upperstructure',
              ],
              correctIndex: 1,
              explanation:
                'Pendant cables are NOT running ropes — they are fixed structural members that support the boom top. The boom hoist running rope is separate and reeves through sheaves on the A-frame to change boom angle. Inspect pendants for broken wires, kinking, and corrosion at every shift.',
            },
            {
              question: 'What is the center pin (king pin) on a crawler crane?',
              options: [
                'The large pin that connects the boom butt to the revolving frame',
                'The structural pin connecting the upperstructure to the carbody, allowing rotation',
                'The pin at the top of each lattice boom section',
                'A spare pin stored on the machine for field boom assembly',
              ],
              correctIndex: 1,
              explanation:
                'The center pin connects the revolving upperstructure to the fixed carbody. All vertical loads, horizontal loads, and overturning moments from lifting pass through the center pin. It must be inspected for wear, cracks, and proper locking during periodic inspections.',
            },
            {
              question: 'Why does a crawler crane provide better stability than a truck crane of the same rated capacity?',
              options: [
                'Crawler cranes always have more counterweight',
                'The crawler track footprint is much wider and longer than truck outriggers, distributing load over a larger area',
                'Crawler cranes use hydraulic cylinders that prevent overturning',
                'Truck cranes are not permitted to lift as high as crawler cranes under OSHA rules',
              ],
              correctIndex: 1,
              explanation:
                'The crawler tracks distribute the machine\'s weight over a large area, providing excellent stability and allowing full-rated lifts over a wide arc without outriggers. This is why crawler cranes can often lift higher rated loads than similarly sized truck cranes and can work on soft ground with appropriate ground preparation.',
            },
            {
              question: 'During a pre-shift inspection, you find that the band brake lining on the main hoist drum is worn through in one section. What is the correct action?',
              options: [
                'Reduce the load to 75% of capacity and complete the shift',
                'Use the auxiliary hoist for all lifts and defer repair to end of day',
                'Remove the crane from service until the brake lining is replaced',
                'Test the brake under load and proceed if it holds',
              ],
              correctIndex: 2,
              explanation:
                'A worn band brake is a removal-from-service condition. The band brake is the primary means of controlling load descent on a friction winch crane — a failed brake means an uncontrolled free fall. The machine must be taken out of service before any lifting begins.',
            },
          ],
        },
        {
          id: '1a-m2-s2',
          title: 'Truck Crane Systems & Outriggers',
          durationHours: 2,
          learningObjectives: [
            'Identify the major components of a truck crane with friction winch drum',
            'Explain the function and operation of outriggers and why full extension is the default requirement',
            'Describe the stability advantages and limitations of outriggers compared to on-rubber operation',
            'Identify the safety devices required on truck cranes under OSHA 1926.1415 and 1926.1416',
          ],
          topics: [
            'Carrier (lower works): the truck chassis with power train, axles, and steering — designed for highway travel',
            'Upperstructure (superstructure): the revolving crane body with boom, drums, engine, and cab mounted on the carrier via slew ring',
            'Slew ring: large ring bearing allowing the superstructure to rotate on the carrier for 360° operation',
            'Friction hoist drums: main hoist and auxiliary (whip line) drums; mechanical friction clutch and band brake engagement',
            'Lattice boom sections: boom butt, standard inserts, and boom top — same assembly concept as crawler crane',
            'Jib (fly): an extension section pinned to the boom top to increase reach; rated separately on the load chart',
            'Outrigger beams: extendable horizontal beams that deploy from the carrier sides perpendicular to the crane centerline',
            'Outrigger jacks: vertical hydraulic cylinders at the end of each beam that lift the carrier off the tires',
            'Fully extended vs. partially extended outrigger configurations: load chart shows different capacities for each',
            'OSHA 1926.1415: required safety devices — crane level indicator, boom stops, jib stops, foot pedal brake locks, horn',
            'OSHA 1926.1416: required operational aids — boom angle/radius indicator, load moment indicator (LMI) for cranes >6,000 lb rated capacity manufactured post-March 2003, anti-two-block device for lattice boom cranes manufactured after November 8, 2011',
            'Load moment indicator (LMI): monitors the relationship between the suspended load and the crane\'s rated capacity; warns operator as capacity is approached',
            'Swing lock: locks the superstructure from rotating — must be engaged when traveling; must be released before lifting',
            'Outrigger float pads and cribbing: blocking placed under outrigger feet to distribute point loads across soil',
          ],
          resources: [
            {
              label: 'OSHA 1926.1415 — Safety devices',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1415',
              type: 'osha',
              required: true,
            },
            {
              label: 'OSHA 1926.1416 — Operational aids',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1416',
              type: 'osha',
              required: true,
            },
          ],
          selfCheck: [
            {
              question: 'Before operating a truck crane, the operator discovers the boom stops are inoperable. What must happen?',
              options: [
                'The operator may proceed if a spotter watches the boom angle',
                'The LMI can substitute for boom stops',
                'Operations must stop and the crane must be taken out of service until boom stops are repaired',
                'The operator may use the boom angle indicator as an alternative',
              ],
              correctIndex: 2,
              explanation:
                'OSHA 1926.1415 requires all listed safety devices to be in proper working order before operations begin. Boom stops prevent the boom from over-topping, which can cause a catastrophic boom collapse. No alternative measure is permitted — the crane must be repaired first.',
            },
            {
              question: 'A truck crane\'s load chart shows 18 tons on outriggers fully extended and 9 tons on outriggers at mid-extension. You set the outriggers at mid-extension. What is your maximum rated lift?',
              options: [
                '18 tons, because the boom length determines the rating',
                '13.5 tons, the average of the two ratings',
                '9 tons — you must use the rating for your actual configuration',
                '18 tons if you use a tag line to keep the load centered',
              ],
              correctIndex: 2,
              explanation:
                'You must use the load chart column that matches your actual configuration. Mid-extension outriggers provide less overturning resistance than fully extended outriggers. Lifting 18 tons on mid-extended outriggers would be an overload of the configuration actually in use.',
            },
            {
              question: 'What is the primary purpose of the load moment indicator (LMI) on a crane?',
              options: [
                'It automatically stops the crane if the load exceeds rated capacity',
                'It monitors the relationship between the lifted load and rated capacity and alerts the operator as limits are approached',
                'It measures the exact weight of the load in pounds',
                'It controls the speed of load lowering to prevent two-blocking',
              ],
              correctIndex: 1,
              explanation:
                'The LMI (or load moment limiter in its limiting version) monitors load moment — the product of the load and radius — and compares it to the rated capacity curve. It warns the operator as capacity is approached. Some limiters also shut off hoist and boom functions at rated capacity, but the fundamental purpose is monitoring and warning.',
            },
            {
              question: 'When must the swing lock on a truck crane be engaged?',
              options: [
                'Only when the crane is parked overnight',
                'Whenever the crane is traveling on a road or job site',
                'Only when the boom is fully retracted',
                'Whenever wind speed exceeds 20 mph',
              ],
              correctIndex: 1,
              explanation:
                'The swing lock locks the superstructure from rotating relative to the carrier. It must be engaged whenever the crane travels — on public roads or on a job site — to prevent the boom from swinging and destabilizing the machine. Always verify it is released before any lifting operation begins.',
            },
            {
              question: 'Under OSHA 1926.1416, lattice-boom cranes manufactured after November 8, 2011 must be equipped with what device?',
              options: [
                'A load weighing device that displays the load in pounds',
                'An automatic anti-two-block device at all points where two-blocking could occur',
                'A digital boom angle display readable at 50 feet',
                'A wind speed monitor that shuts down operation above 25 mph',
              ],
              correctIndex: 1,
              explanation:
                'OSHA 1926.1416 requires lattice-boom cranes manufactured after November 8, 2011 to have an automatic device that prevents damage from two-blocking at all potential two-block points. For older equipment, alternative measures such as marking the hoist line and using a spotter are permitted.',
            },
            {
              question: 'Outrigger pads and cribbing are used under outrigger floats for which primary purpose?',
              options: [
                'To protect the outrigger jacks from hydraulic oil leaks',
                'To distribute the concentrated outrigger point load over a larger soil area, reducing ground bearing pressure',
                'To prevent the outriggers from sinking during travel',
                'To level the crane when the ground is slightly sloped',
              ],
              correctIndex: 1,
              explanation:
                'Each outrigger concentrates the entire supported crane corner load through a relatively small float contact area. Pads and cribbing increase the contact area under that float, spreading the force over more soil and reducing the pounds-per-square-foot ground bearing pressure to a level the soil can safely support.',
            },
          ],
        },
        {
          id: '1a-m2-s3',
          title: 'Wire Rope & Rigging Components',
          durationHours: 2,
          learningObjectives: [
            'Explain the construction of wire rope and why different constructions are used for running vs. standing ropes',
            'Apply OSHA 1926.1413 removal-from-service criteria to determine if a wire rope must be replaced',
            'Correctly reeve a wire rope through a sheave block and identify fleet angle requirements',
            'Select appropriate rigging hardware and hitch configurations for common crane lifts',
          ],
          topics: [
            'Wire rope construction: core (fiber core vs. independent wire rope core IWRC), strands, and individual wires',
            'Running rope: the moving hoist and boom hoist line — typically 6×19 or 6×37 construction for flexibility',
            'Standing (pendant) rope: used in static applications; typically 6×7 construction — stiffer, more abrasion-resistant',
            'Rotation-resistant rope: used on single-part hoist lines; special construction prevents load rotation',
            'OSHA 1926.1413 removal criteria — running rope: 6 randomly distributed broken wires in one lay, or 3 in one strand in one lay',
            'OSHA 1926.1413 removal criteria — rotation-resistant rope: 2 broken wires in 6 rope diameters, or 4 in 30 diameters',
            'OSHA 1926.1413 removal criteria — diameter reduction: remove if rope has worn more than 5% from nominal diameter',
            'Mandatory removal regardless of wire count: kinking, birdcaging, core protrusion, prior power line contact, heat damage, broken strand',
            'Reeving: the arrangement of wire rope through a system of sheaves to create mechanical advantage (multiple parts of line)',
            'Parts of line: the number of rope segments between the hook block and the boom top — more parts = more capacity but slower speed',
            'Fleet angle: the angle between the rope and the plane of the sheave groove — smooth drum maximum 1.5°; grooved drum maximum 2°',
            'Minimum drum wraps: at least 2 full wraps must remain on the drum at maximum hook lowering (OSHA 1926.1417)',
            'Sheave inspection: check groove diameter, groove wear, flange cracks; use sheave gauge to verify proper groove profile',
            'Rigging hardware: shackles, hooks, rings — all must be rated with Working Load Limits (WLL); never use unmarked hardware',
            'Wire rope slings: single-leg, 2-leg bridle, 3-leg bridle; WLL varies by hitch type and sling angle — sling angle below 30° drastically reduces effective WLL',
          ],
          resources: [
            {
              label: 'OSHA 1926.1413 — Wire rope — inspection',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1413',
              type: 'osha',
              required: true,
            },
            {
              label: 'OSHA 1926.1414 — Wire rope — selection and installation criteria',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1414',
              type: 'osha',
              required: true,
            },
          ],
          selfCheck: [
            {
              question: 'During your wire rope inspection you find 5 randomly distributed broken wires in one lay of a running rope. What must you do?',
              options: [
                'Continue operation — OSHA allows up to 6 broken wires per lay in running rope',
                'Remove the crane from service — 5 broken wires in one lay meets the removal threshold',
                'Reduce maximum load by 25% and complete the shift',
                'Reeve an additional part of line to reduce tension per wire',
              ],
              correctIndex: 0,
              explanation:
                'OSHA 1926.1413 requires removal when running rope has 6 or more randomly distributed broken wires in one rope lay, or 3 or more broken wires in one strand in one rope lay. Five broken wires spread across the lay does not yet meet the 6-wire threshold — however, the inspector must confirm the wires are randomly distributed and not concentrated in one strand. Any concentration of 3 in one strand IS a removal condition. Track the count and recheck daily.',
            },
            {
              question: 'A wire rope shows a "birdcage" deformation — the strands have expanded outward forming a cage shape. What is the correct action?',
              options: [
                'Apply wire rope lubricant and use at reduced capacity',
                'Straighten the rope with a wooden block and proceed',
                'Remove the rope from service immediately — birdcaging is a mandatory removal condition',
                'Use the rope for pendant applications only since it is a standing rope condition',
              ],
              correctIndex: 2,
              explanation:
                'Birdcaging means the inner rope core has expanded relative to the outer strands, permanently damaging the rope structure. It is a mandatory removal condition under OSHA 1926.1413 regardless of visible broken wires. The rope\'s load distribution is destroyed and it cannot be safely used in any application.',
            },
            {
              question: 'What is the maximum fleet angle for wire rope on a smooth winch drum?',
              options: ['0.5°', '1.5°', '2.0°', '3.0°'],
              correctIndex: 1,
              explanation:
                'The maximum allowable fleet angle for a smooth (un-grooved) drum is 1.5°. Excessive fleet angle causes the rope to scrub against the sheave flange as it wraps, stripping lubrication and accelerating outer wire wear. Grooved drums allow up to 2° fleet angle.',
            },
            {
              question: 'A wire rope that previously made contact with an energized power line must be:',
              options: [
                'Inspected by a competent person and returned to service if no wires are broken',
                'Downgraded to pendant use only since pendants are not load-bearing running ropes',
                'Replaced — prior power line contact is a mandatory removal condition',
                'Used at 50% of rated working load with heightened monitoring',
              ],
              correctIndex: 2,
              explanation:
                'OSHA 1926.1413 lists prior contact with an energized power line as a mandatory removal condition. Electrical current can cause internal heat damage and annealing (softening) of wire steel that is invisible on the surface but destroys tensile strength. The rope cannot be returned to service regardless of how it looks.',
            },
            {
              question: 'Increasing the number of parts of line in the reeving system on a crane hoist does which of the following?',
              options: [
                'Increases the speed at which the hook travels',
                'Increases the maximum rated load capacity but decreases hook speed',
                'Decreases both the load capacity and the speed',
                'Has no effect on capacity — load capacity is determined by the drum only',
              ],
              correctIndex: 1,
              explanation:
                'Adding more parts of line (rope segments between the hook block and the boom top) multiplies the lifting force by distributing the load across more rope segments. This increases rated capacity. However, the hook travels slower per drum revolution because more rope must be wound per inch of hook travel.',
            },
            {
              question: 'During a rigging inspection, you find a shackle with no Working Load Limit (WLL) marking. What should you do?',
              options: [
                'Estimate the WLL based on the shackle pin diameter',
                'Use the shackle for lifts under 1 ton since unmarked hardware is usually light duty',
                'Remove the shackle from service — rigging hardware without a WLL marking must not be used',
                'Check with the crew to see if anyone knows the rating',
              ],
              correctIndex: 2,
              explanation:
                'All rigging hardware must have a documented Working Load Limit. Unmarked hardware has no verified rating and cannot be used in a lift. Using hardware of unknown capacity is a serious violation — rigging failures are a leading cause of crane fatalities.',
            },
          ],
        },
      ],
    },
    {
      id: '1a-m3',
      title: 'Safe Operation & Inspections',
      orderInCourse: 3,
      estimatedHours: 6,
      sessions: [
        {
          id: '1a-m3-s1',
          title: 'Pre-Lift Planning & Inspections',
          durationHours: 2,
          learningObjectives: [
            'Conduct a thorough pre-shift inspection of a lattice-boom or truck crane per OSHA 1926.1412',
            'Develop a lift plan that identifies load weight, load radius, boom configuration, and ground conditions',
            'Explain the OSHA ground condition requirements of 1926.1402 and identify when additional ground support is needed',
            'Define when a critical lift plan is required and who must develop it',
          ],
          topics: [
            'OSHA 1926.1412 pre-shift inspection: required before each shift by a competent person',
            'Pre-shift checklist: control mechanisms, drive mechanisms, pressurized lines, hydraulic fluid, hooks and latches, wire ropes, electrical apparatus, ground conditions, equipment levelness, cab windows, safety devices',
            'Monthly inspection: same as pre-shift plus documented records retained for three months (inspector name, signature, date)',
            'Annual/periodic inspection: by a qualified person; includes structural members, bolts, fasteners, welds, sheaves, brake and clutch components',
            'Lift planning sequence: (1) determine load weight, (2) determine load radius, (3) select boom configuration, (4) consult load chart, (5) verify ground conditions, (6) determine rigging',
            'OSHA 1926.1402 ground conditions: firm, drained, and graded; supplemented by blocking, mats, cribbing, or similar materials as needed',
            'Ground bearing pressure: the controlling entity must inform the operator of subsurface hazards — voids, tanks, utilities',
            'Outrigger pad sizing: pad area = maximum outrigger load ÷ allowable soil bearing pressure',
            'Crane levelness: follow manufacturer tolerance (typically ±1% of level); a crane out of level has reduced rated capacity and increased tipping risk',
            'Critical lift definition under OSHA 1926.1432: any lift using multiple cranes, or when the operator or lift director determines the lift requires special procedures',
            'Critical lift plan: developed by a qualified person; reviewed by a competent person; pre-lift meeting required with all involved workers',
            'Exclusion zone: establish and maintain clear area around the crane equal to the maximum radius plus the load swing potential',
            'Checking weather: wind affects load stability and boom structural limits — manufacturer charts include wind speed restrictions',
          ],
          resources: [
            {
              label: 'OSHA 1926.1412 — Inspections',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1412',
              type: 'osha',
              required: true,
            },
            {
              label: 'OSHA 1926.1402 — Ground conditions',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1402',
              type: 'osha',
              required: true,
            },
            {
              label: 'OSHA 1926.1432 — Multiple-crane/derrick lifts',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1432',
              type: 'osha',
              required: false,
            },
          ],
          selfCheck: [
            {
              question: 'Who is required to conduct the pre-shift inspection of a crane under OSHA 1926.1412?',
              options: [
                'The crane operator, who may self-certify the inspection',
                'A competent person',
                'A qualified person with an engineering degree',
                'A third-party inspection company',
              ],
              correctIndex: 1,
              explanation:
                'OSHA 1926.1412 requires pre-shift inspections to be conducted by a competent person — someone with the training and authority to identify unsafe conditions and take corrective action. The operator may be the competent person, but the key is that someone with that designation performs the check.',
            },
            {
              question: 'Under OSHA 1926.1402, what must ground conditions be before assembling or using a crane?',
              options: [
                'The ground must be level to within 1 degree',
                'Firm, drained, and graded sufficiently to support the equipment per manufacturer specifications',
                'The soil bearing capacity must exceed 3,000 psf as tested by an engineer',
                'A concrete pad must be poured if the soil is not bedrock',
              ],
              correctIndex: 1,
              explanation:
                'OSHA 1926.1402 requires that ground conditions be firm, drained, and graded to meet the manufacturer\'s specifications. If natural ground does not meet the requirement, supporting materials such as blocking, mats, cribbing, or marsh buggies may be used to provide adequate support.',
            },
            {
              question: 'Monthly crane inspections must be documented. How long must monthly inspection records be retained under OSHA 1926.1412?',
              options: ['30 days', '3 months', '6 months', '1 year'],
              correctIndex: 1,
              explanation:
                'OSHA 1926.1412 requires monthly inspection records to be retained for three months. Records must include the items inspected, the results, the date of the inspection, and the inspector\'s name and signature.',
            },
            {
              question: 'You are planning a lift and calculate that the maximum outrigger load on the critical corner will be 80,000 lbs. The soil has an allowable bearing pressure of 2,000 psf. What is the minimum outrigger pad area needed?',
              options: ['20 sq ft', '40 sq ft', '80 sq ft', '160 sq ft'],
              correctIndex: 1,
              explanation:
                'Required pad area = load ÷ allowable bearing pressure. 80,000 lbs ÷ 2,000 lbs/sq ft = 40 sq ft minimum contact area. This is the load-spreading purpose of cribbing and outrigger pads — if the soil\'s bearing capacity is exceeded, it will fail and the crane will tip.',
            },
            {
              question: 'Under OSHA 1926.1432, a critical lift plan involving multiple cranes must be developed by whom?',
              options: [
                'The general contractor\'s project manager',
                'A qualified person',
                'Any crane operator with 5 years of experience',
                'OSHA must pre-approve the plan',
              ],
              correctIndex: 1,
              explanation:
                'OSHA 1926.1432 requires the critical lift plan for multiple-crane/derrick lifts to be developed by a qualified person — someone with the knowledge, training, and experience necessary to solve problems related to the task. The plan must also be reviewed with all involved workers before the lift begins.',
            },
            {
              question: 'During a lift plan review, you realize you do not know the exact weight of the load. What must you do before proceeding?',
              options: [
                'Estimate the load at 90% of the crane\'s rated capacity and proceed conservatively',
                'Determine the actual load weight through recognized industry methods before lifting',
                'Lift slowly and watch the LMI — if it reads under 75% of capacity you may proceed',
                'Get a verbal estimate from the rigger and add a 10% safety margin',
              ],
              correctIndex: 1,
              explanation:
                'OSHA 1926.1417 requires that the operator determine the load weight through recognized industry methods before lifting any load that appears to exceed 75% of rated capacity. You cannot safely select the correct crane configuration or verify you are within rated capacity without knowing the actual load weight.',
            },
          ],
        },
        {
          id: '1a-m3-s2',
          title: 'Operating Hazards & Safe Procedures',
          durationHours: 2,
          learningObjectives: [
            'Identify two-blocking and explain why it is catastrophic on friction winch cranes',
            'Apply the swing radius exclusion requirements of OSHA 1926.1424',
            'Explain the hazards of operating a crane near power lines and the clearance distances under OSHA 1926.1408',
            'Describe the free-fall prohibition under OSHA 1926.1426 and conditions for controlled load lowering',
          ],
          topics: [
            'Two-blocking: the load block (bottom block) contacts the boom top (upper block) — the hoist line goes slack and the load free-falls',
            'Two-blocking on friction drums: particularly dangerous because the clutch can re-engage before the block is seen to contact',
            'Prevention: anti-two-block device (required on lattice boom cranes post-November 8, 2011); visual spotters; marking hoist line',
            'OSHA 1926.1424 swing radius hazard: the rotating superstructure, boom, and counterweight can strike workers',
            'Control measures: control lines, warning lines, railings, or barriers marking the swing/crush zone boundary',
            'Counterweight swing zone: the counterweight extends beyond the carrier and rotates — workers must be kept clear',
            'OSHA 1926.1408 power line safety (up to 350 kV): minimum clearance 20 feet unless the utility has confirmed a lower safe distance',
            'Encroachment prevention plan: required before operating within the Table A distance from power lines',
            'OSHA 1926.1418 — authority to stop operation: the operator has the right AND obligation to stop if a safety concern arises',
            'OSHA 1926.1426 free fall prohibition: equipment must not be used to free-fall loads except in specific conditions',
            'Controlled load lowering: the load must be lowered using the friction drum brake under positive operator control at all times',
            'No side-loading: the boom must not be used to drag or pull loads sideways — this is an operational prohibition under OSHA 1926.1417',
            'Load swing hazards: tag lines used by a ground person to control load rotation and prevent swinging into structures',
            'Boom angle limits: operating outside the manufacturer\'s minimum and maximum boom angle range voids load chart ratings and risks boom failure',
            'Operating on slopes: manufacturer specifications govern maximum allowable side slope and fore-aft slope during operation',
          ],
          resources: [
            {
              label: 'OSHA 1926.1408 — Power line safety (equipment operations)',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1408',
              type: 'osha',
              required: true,
            },
            {
              label: 'OSHA 1926.1424 — Work area control (swing radius)',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1424',
              type: 'osha',
              required: true,
            },
            {
              label: 'OSHA 1926.1426 — Free fall and controlled load lowering',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1426',
              type: 'osha',
              required: false,
            },
          ],
          selfCheck: [
            {
              question: 'What is two-blocking and why is it especially dangerous on friction winch cranes?',
              options: [
                'When the boom contacts a power line — dangerous because the drum cannot be stopped quickly',
                'When the load block contacts the boom top sheave — on friction drums, the rope can go slack and the load falls',
                'When two cranes lift the same load simultaneously without a critical lift plan',
                'When the hoist drum is blocked by a mechanical brake failure',
              ],
              correctIndex: 1,
              explanation:
                'Two-blocking occurs when the load block is hoisted until it contacts the upper block or boom tip. On a friction winch crane, the hoist line goes slack above the contact point, allowing the load to fall freely. The operator\'s clutch and brake have no effect on the falling load once rope tension is lost.',
            },
            {
              question: 'Under OSHA 1926.1408, what is the default minimum safe distance from a power line (up to 350 kV) when operating crane equipment?',
              options: [
                '5 feet',
                '10 feet',
                '20 feet',
                '50 feet',
              ],
              correctIndex: 2,
              explanation:
                'OSHA 1926.1408 Table A establishes a default minimum approach distance of 20 feet from power lines up to 350 kV. A reduced distance may be permitted only after the utility owner confirms the specific safe distance in writing. The 20-foot default applies to all parts of the crane — boom, load, rope, and load.',
            },
            {
              question: 'You are operating a crane and see a worker enter the counterweight swing zone while you are rotating. What must you do?',
              options: [
                'Sound the horn continuously and complete the swing',
                'Slow the rotation and warn the worker verbally',
                'Stop rotation immediately — do not resume until the area is confirmed clear',
                'Ask the signaler to wave the worker out; continue rotating slowly',
              ],
              correctIndex: 2,
              explanation:
                'OSHA 1926.1424 requires stopping all rotation when workers are in the swing/crush zone. A crane counterweight can weigh tens of thousands of pounds and cannot stop instantaneously. The only safe action is to stop immediately and wait for the area to be confirmed clear.',
            },
            {
              question: 'Under OSHA 1926.1418, who has the authority to stop crane operations when a safety concern is identified?',
              options: [
                'Only the site safety officer',
                'Only the project manager or general contractor',
                'The crane operator, who has the right and obligation to stop operations',
                'OSHA inspectors only, who must be called to the site',
              ],
              correctIndex: 2,
              explanation:
                'OSHA 1926.1418 specifically grants the operator authority to stop operations when they believe a safety concern warrants it. This is not optional — the operator has both the right and the obligation to stop. No employer directive may override this safety authority.',
            },
            {
              question: 'A flagman is directing the crane operator to swing the boom. The flagman\'s view of the load is blocked by a building. What must the operator do?',
              options: [
                'Proceed slowly based on the flagman\'s last known position',
                'Stop and do not resume until the signaler has a clear view of both the operator and the load',
                'Switch to radio communication for this portion of the lift',
                'Ask another worker to relay the flagman\'s signals',
              ],
              correctIndex: 1,
              explanation:
                'The signaler must be able to see both the operator\'s control zone and the load at all times. If the signaler\'s view of the load is obstructed, signals cannot be given safely. The operator must stop until the signaler is repositioned with a clear view, or a secondary signaler is designated for the obstructed zone.',
            },
            {
              question: 'OSHA 1926.1426 prohibits the free-fall of loads on cranes. What does "free fall" mean in this context?',
              options: [
                'The load falling faster than the boom can be lowered',
                'The uncontrolled descent of the load — hoist drum spinning freely without brake or clutch engagement',
                'The load swinging freely on the hook without a tag line',
                'Lowering the load faster than 50 feet per minute',
              ],
              correctIndex: 1,
              explanation:
                'Free fall means the hoist drum spins without positive brake or clutch engagement — the load descends under gravity alone, uncontrolled. OSHA 1926.1426 prohibits this mode of operation. On friction drum cranes, the operator must maintain positive brake control throughout any load lowering.',
            },
          ],
        },
        {
          id: '1a-m3-s3',
          title: 'Hand Signals & Communication',
          durationHours: 2,
          learningObjectives: [
            'Demonstrate the SAE J1307 hand signals required for crane operations in Massachusetts',
            'Explain when each of the four OSHA-permitted signal methods may be used',
            'State the signal person qualification requirements under OSHA 1926.1428',
            'Describe how to handle conflicting or lost signals during crane operations',
          ],
          topics: [
            'Massachusetts requirement: SAE J1307-2023 hand signals required by 230 CMR 6.00 for crane operations',
            'OSHA 1926.1422: Standard Method hand signals per Appendix A of Subpart CC — required unless the Standard Method is infeasible',
            'Core crane hand signals: Hoist (raise load), Lower (lower load), Stop, Emergency Stop, Swing (rotate superstructure), Travel, Dog Everything (suspend operations), Raise Boom, Lower Boom, Use Main Hoist, Use Whipline',
            'Emergency Stop signal: both arms raised, palms outward — overrides all other signals; anyone on site may give it',
            'Dog Everything: the signal to stop all crane functions and hold position',
            'Signal person qualifications under OSHA 1926.1428: must demonstrate knowledge of applicable signals and crane operation awareness; no formal certification required but knowledge must be demonstrated',
            'Only one signal person may give signals at a time — except for Emergency Stop',
            'When visual signals are not feasible (obstructed view, long distance): radio communication permitted per OSHA 1926.1420; voice signals per 1926.1421',
            'Lost signal protocol: operator must stop immediately when visual contact with signaler is lost',
            'Directions given from operator\'s perspective: all signals given based on which direction the operator is facing, not the signaler',
            '230 CMR 6.00: operator must be able to see the signaler at all times during operation; if the signaler is out of view, stop',
            'Crane travel signals: separate signals for travel forward/backward and travel left/right',
            'Pre-lift communication meeting: operator and signaler agree on any non-standard signals before the lift',
          ],
          resources: [
            {
              label: 'SAE J1307 Hand Signals — Quick Reference',
              url: '/hand-signals',
              type: 'reference',
              required: true,
            },
            {
              label: 'OSHA 1926.1419 — Signals — general requirements',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1419',
              type: 'osha',
              required: true,
            },
            {
              label: 'OSHA 1926.1428 — Signal person qualifications',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1428',
              type: 'osha',
              required: false,
            },
          ],
          selfCheck: [
            {
              question: 'Under 230 CMR 6.00, which hand signal standard is required for crane operations in Massachusetts?',
              options: [
                'ASME B30.5 Appendix B',
                'OSHA 1926 Subpart CC Appendix A only',
                'SAE J1307-2023',
                'ANSI Z535 sign-and-signal standard',
              ],
              correctIndex: 2,
              explanation:
                '230 CMR 6.00 specifically requires SAE J1307-2023 hand signals for crane operations in Massachusetts. OSHA Subpart CC Appendix A also defines standard hand signals, and in practice the signals overlap significantly, but the Massachusetts regulatory citation is SAE J1307.',
            },
            {
              question: 'During a lift, the site superintendent — who is not the designated signaler — gives you a hand signal to swing right. What should you do?',
              options: [
                'Follow the superintendent\'s signal since they have job site authority',
                'Comply if no other signal is being given at the same time',
                'Ignore the signal — only signals from the designated signaler must be followed',
                'Stop all operations until the superintendent and signaler resolve who gives signals',
              ],
              correctIndex: 2,
              explanation:
                'Under 230 CMR 6.00 and OSHA 1926.1419, only the designated signal person may direct crane operations. The operator must disregard any signal from an unauthorized person, regardless of their job title. The exception is an Emergency Stop signal, which anyone may give.',
            },
            {
              question: 'You are operating a crane and suddenly cannot see your designated signaler. What is the required action?',
              options: [
                'Sound the horn and wait for the signaler to reappear',
                'Continue the current movement and stop when complete',
                'Stop all crane movement immediately',
                'Ask a nearby worker to relay signals until the signaler reappears',
              ],
              correctIndex: 2,
              explanation:
                'Both 230 CMR 6.00 and OSHA 1926.1419 require the operator to stop all crane movement immediately when contact with the designated signaler is lost. Operating blind is the highest-risk condition in crane work. No relay system is permitted as a substitute for direct visual contact.',
            },
            {
              question: 'An emergency stop signal may be given by:',
              options: [
                'Only the designated signaler',
                'Only the operator or signaler',
                'The operator, signaler, lift director, or any worker who sees an imminent hazard',
                'Only a licensed hoisting engineer or OSHA inspector',
              ],
              correctIndex: 2,
              explanation:
                'The Emergency Stop is the one signal that anyone on the job site may give. Recognizing and giving an emergency stop when a hazard is spotted is an obligation — not just a right. The operator must stop immediately upon seeing any Emergency Stop signal regardless of who gives it.',
            },
            {
              question: 'What does the "Dog Everything" hand signal instruct the crane operator to do?',
              options: [
                'Lower the load slowly to the ground',
                'Stop all crane functions and hold the current position',
                'Perform an emergency shutdown of the engine',
                'Raise the boom to the maximum angle and wait',
              ],
              correctIndex: 1,
              explanation:
                '"Dog Everything" means stop all crane functions and hold — do not lower the load, do not rotate, do not change boom angle. It is used when a problem needs to be sorted out but does not require emergency stop. The load stays suspended in place until the all-clear is given.',
            },
            {
              question: 'When signal persons are required to use radio communication instead of hand signals, which OSHA section governs radio/electronic signals?',
              options: [
                'OSHA 1926.1419',
                'OSHA 1926.1420',
                'OSHA 1926.1422',
                'OSHA 1926.1428',
              ],
              correctIndex: 1,
              explanation:
                'OSHA 1926.1420 governs radio and electronic signal communication. Radio may be used when hand signals are not feasible due to distance, obstructions, or noise. The operator must be able to hear signals clearly and the system must be on a channel dedicated to crane communication.',
            },
          ],
        },
      ],
    },
    {
      id: '1a-m4',
      title: 'OSHA & Exam Review',
      orderInCourse: 4,
      estimatedHours: 6,
      sessions: [
        {
          id: '1a-m4-s1',
          title: '29 CFR 1926 Subpart CC — Cranes & Derricks in Construction',
          durationHours: 2,
          learningObjectives: [
            'Identify the scope of 29 CFR 1926 Subpart CC and the types of crane equipment it covers',
            'Match each Subpart CC section number to its subject matter for efficient exam and field reference',
            'Explain the distinction between competent person, qualified person, and operator as defined in 1926.1401',
            'Describe the operator certification requirements under OSHA 1926.1427',
          ],
          topics: [
            'Scope of 1926 Subpart CC (§1926.1400): applies to cranes and derricks used in construction — includes crawler cranes, truck cranes, tower cranes, derricks; does NOT cover floating cranes, pile driving equipment used exclusively for that purpose, or aerial lifts covered by other subparts',
            'Key definitions (§1926.1401): "competent person" — able to identify hazards AND has authority to correct them; "qualified person" — knowledge/training through degree, certification, or experience; "operator" — licensed by state or certified per §1926.1427',
            'Ground conditions (§1926.1402): firm, drained, graded; supporting materials when needed',
            'Assembly/Disassembly (§§1926.1403–1926.1406): directed by both competent AND qualified person or competent plus qualified assistant; no pins removed from boom sections under load',
            'Power line safety (§§1926.1407–1926.1411): 20-foot default clearance up to 350 kV; encroachment prevention plan required within Table A distances',
            'Inspections (§1926.1412): pre-shift by competent person; monthly documented; annual by qualified person',
            'Wire rope inspection (§1926.1413): shift, monthly, and annual; broken wire, wear, and structural defect thresholds',
            'Safety devices (§1926.1415): crane level indicator, boom stops, jib stops, foot pedal brake locks, horn — all must work before operations begin',
            'Operational aids (§1926.1416): boom angle indicator; anti-two-block device for lattice boom post-November 8, 2011; LMI for >6,000-lb cranes post-March 2003',
            'Operation (§1926.1417): rated capacity must not be exceeded; load chart in cab; verify weight over 75% of rated capacity; minimum two drum wraps; no side-loading; no dragging loads',
            'Authority to stop operations (§1926.1418): operator authority to stop for safety',
            'Signal requirements (§§1926.1419–1926.1422): when signal person required; hand, radio, voice, audible signals; standard method',
            'Work area control (§1926.1424): swing radius barriers and warnings; train workers on struck-by and pinch/crush zones',
            'Operator certification (§1926.1427): operator must be certified by an accredited certifier, licensed by a government entity (such as Massachusetts), or qualified by auditor; Massachusetts 1A license satisfies the "licensed by government entity" requirement',
            'Multiple crane lifts (§1926.1432): qualified person develops plan; competent + qualified person directs; pre-lift meeting required',
          ],
          resources: [
            {
              label: 'OSHA 29 CFR 1926 Subpart CC — Cranes and Derricks in Construction',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926SubpartCC',
              type: 'osha',
              required: true,
            },
            {
              label: 'OSHA 1926.1401 — Definitions',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1401',
              type: 'osha',
              required: true,
            },
            {
              label: 'OSHA 1926.1427 — Operator certification',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1427',
              type: 'osha',
              required: false,
            },
          ],
          selfCheck: [
            {
              question: 'Under OSHA 1926.1401, what is the difference between a "competent person" and a "qualified person"?',
              options: [
                'Competent person has a college degree; qualified person has field experience only',
                'Competent person can identify hazards and has authority to correct them; qualified person has knowledge through training, education, or experience to solve problems related to the task',
                'They are interchangeable terms under OSHA',
                'A qualified person is a licensed crane operator; a competent person is the site safety officer',
              ],
              correctIndex: 1,
              explanation:
                'OSHA 1926.1401 defines these terms distinctly. A competent person must both recognize hazards AND have the authority to take corrective action. A qualified person has the knowledge, training, and experience to solve specific technical problems — often without the authority/action component. Some tasks require both: assembly/disassembly must be directed by someone who meets both criteria, or a competent person assisted by qualified persons.',
            },
            {
              question: 'Does a Massachusetts 1A hoisting license satisfy OSHA\'s operator certification requirement under 29 CFR 1926.1427?',
              options: [
                'No — OSHA only accepts certifications from NCCCO or NCCER',
                'Yes — a state-issued hoisting license from a government entity satisfies the OSHA requirement',
                'Only if the operator also holds an ASME B30.5 certification',
                'Yes, but only for cranes under 25 tons rated capacity',
              ],
              correctIndex: 1,
              explanation:
                'OSHA 1926.1427 accepts operators who are "licensed by a government entity" as meeting the certification requirement. Massachusetts issues the 1A license through the Division of Occupational Licensure — a government entity — so a valid 1A license satisfies the federal OSHA operator certification requirement for equipment within its scope.',
            },
            {
              question: 'Which OSHA Subpart CC section specifically grants the crane operator the authority to stop operations when a safety concern warrants it?',
              options: [
                '1926.1412 — Inspections',
                '1926.1417 — Operation',
                '1926.1418 — Authority to stop operation',
                '1926.1424 — Work area control',
              ],
              correctIndex: 2,
              explanation:
                '1926.1418 is the specific section that grants operators the right and obligation to stop when they believe safety warrants it. Knowing this section number matters on the exam — the authority to stop is not part of the general operation section (1417) but has its own dedicated section.',
            },
            {
              question: 'What does OSHA 1926 Subpart CC require regarding who must direct assembly and disassembly of lattice boom cranes?',
              options: [
                'Any qualified crane operator may direct the procedure',
                'The job site superintendent must be present',
                'A person meeting both competent person and qualified person criteria, or a competent person assisted by a qualified person',
                'OSHA must approve the assembly procedure in advance',
              ],
              correctIndex: 2,
              explanation:
                'OSHA 1926.1404 requires A/D (assembly/disassembly) to be directed by a person who meets criteria for both competent person and qualified person, OR a competent person assisted by one or more qualified persons. This high standard reflects the serious hazards of lattice boom assembly — improper pinning or sequencing has caused catastrophic collapses.',
            },
            {
              question: 'Under OSHA 1926 Subpart CC, what is the primary purpose of the "work area control" section (1926.1424)?',
              options: [
                'To require barriers keeping the public away from all crane operations',
                'To train workers and establish physical barriers against struck-by and pinch/crush hazards from the rotating superstructure',
                'To define who may direct crane travel on the job site',
                'To require written crane operation plans for all projects',
              ],
              correctIndex: 1,
              explanation:
                '1926.1424 focuses specifically on the hazards created by the rotating superstructure — the counterweight and boom sweeping through the work area. It requires both training workers to recognize swing/crush zones and establishing physical barriers (control lines, warning lines, railings) to prevent workers from entering those zones.',
            },
          ],
        },
        {
          id: '1a-m4-s2',
          title: 'Practice Exam 1',
          durationHours: 2,
          learningObjectives: [
            'Demonstrate understanding of Massachusetts hoisting regulations (MGL Chapter 146 and 230 CMR 6.00) through exam-format questions',
            'Apply load chart principles, wire rope inspection criteria, and crane component knowledge to scenario-based questions',
            'Identify personal areas of weakness for targeted review before the exam',
          ],
          topics: [
            'MGL Chapter 146 and 230 CMR 6.00 — licensing, fees, renewal, penalties, signaler rules',
            'Equipment scope: what a 1A license covers and does not cover',
            'Load chart reading: rated capacity by configuration, load radius, and boom angle',
            'Wire rope inspection: OSHA 1926.1413 thresholds, mandatory removal conditions',
            'Crane component identification: friction drum system, A-frame, pendants, boom sections',
            'Pre-shift and periodic inspection requirements (OSHA 1926.1412)',
            'Outrigger use, ground conditions, and pad sizing',
            'Two-blocking prevention and the anti-two-block device requirements by manufacture date',
            'Power line safety clearance distances (OSHA 1926.1408)',
            'Signal person rules and hand signal standard (SAE J1307)',
            'Operator duties: authority to stop, no side-loading, drum wraps, load verification',
            'Assembly/disassembly personnel requirements',
          ],
          resources: [
            {
              label: 'OSHA 29 CFR 1926 Subpart CC — Full text',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926SubpartCC',
              type: 'osha',
              required: true,
            },
            {
              label: 'MGL Chapter 146 — Full text',
              url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXX/Chapter146',
              type: 'regulation',
              required: true,
            },
          ],
          selfCheck: [
            {
              question: 'A worker who is NOT the designated signaler gives an Emergency Stop signal. Should the crane operator stop?',
              options: [
                'No — only the designated signaler may give valid signals',
                'Yes — Emergency Stop may be given by anyone who sees an imminent hazard',
                'Only if the operator can visually confirm the hazard',
                'Yes, but only after confirming with the designated signaler',
              ],
              correctIndex: 1,
              explanation:
                'Emergency Stop is the one exception to the rule that only the designated signaler may direct the operator. Anyone who sees an imminent hazard may give the Emergency Stop signal. The operator must stop immediately — delay to verify the hazard could cost a life.',
            },
            {
              question: 'A lattice boom crane was manufactured in 2015. Under OSHA 1926.1416, is an automatic anti-two-block device required?',
              options: [
                'No — anti-two-block devices are not required for lattice boom cranes',
                'No — the requirement only applies to telescopic boom cranes manufactured after February 1992',
                'Yes — lattice boom cranes manufactured after November 8, 2011 must have automatic anti-two-block devices',
                'Yes, but only if the crane has a jib attached',
              ],
              correctIndex: 2,
              explanation:
                'OSHA 1926.1416 requires lattice-boom cranes manufactured after November 8, 2011 to have an automatic anti-two-block device at all two-blocking points. A 2015 manufacture date places this crane within the mandatory requirement. Always check the manufacture date against the regulatory threshold — this is a high-frequency exam topic.',
            },
            {
              question: 'You are planning a critical lift (multiple cranes). Who must develop the lift plan?',
              options: [
                'The general contractor\'s project manager',
                'A qualified person',
                'The most senior crane operator on site',
                'OSHA must be notified and approve the plan',
              ],
              correctIndex: 1,
              explanation:
                'OSHA 1926.1432 requires the multiple-crane lift plan to be developed by a qualified person. A pre-lift meeting with all involved workers is also required. The plan must address how loads are distributed between cranes and what happens if either crane exceeds its limit during the lift.',
            },
            {
              question: 'A wire rope\'s nominal diameter is 1 inch. The actual measured diameter is 0.94 inches. Must the rope be removed from service?',
              options: [
                'No — a 6% reduction is acceptable if no broken wires are found',
                'Yes — diameter reduction exceeding 5% of nominal diameter is a removal condition under OSHA 1926.1413',
                'Only if broken wires are also found in the same section',
                'No — the 5% rule only applies to rotation-resistant ropes',
              ],
              correctIndex: 1,
              explanation:
                'OSHA 1926.1413 requires removal from service when a wire rope has worn more than 5% from its nominal diameter. A 1-inch rope measured at 0.94 inches has lost 6% of its nominal diameter, which exceeds the 5% threshold. This rule applies to all wire rope types, not just rotation-resistant ropes.',
            },
            {
              question: 'Which of the following is a crane level indicator required to detect under OSHA 1926.1415?',
              options: [
                'Wind speed greater than 20 mph',
                'Equipment out-of-level condition',
                'Load weight exceeding 75% of rated capacity',
                'Wire rope tension exceeding rated line pull',
              ],
              correctIndex: 1,
              explanation:
                'OSHA 1926.1415 requires cranes to be equipped with a crane level indicator — either built into the equipment or available on it — to detect when the crane is not level. An out-of-level crane has shifted stability margins and effectively different (lower) rated capacities than those shown on the load chart.',
            },
            {
              question: 'The load chart shows 10 tons at a 40-foot radius, on outriggers fully extended, over the rear. You set up over the side of the crane at the same radius with outriggers fully extended. Are you within rated capacity?',
              options: [
                'Yes — the outriggers provide equal support in all directions',
                'Not necessarily — crane load charts typically show different capacities for over-front, over-rear, and over-side configurations',
                'Yes — as long as the load radius and outrigger position match the chart',
                'Yes — the over-rear rating is always the lowest rating on the chart',
              ],
              correctIndex: 1,
              explanation:
                'Load charts typically show different capacities depending on the direction the boom points (over-front, over-rear, over-side, or 360°). Many cranes have lower capacity over the side than over the rear. Always confirm you are using the column for the actual boom direction, not just the radius and configuration.',
            },
            {
              question: 'Which section of OSHA 29 CFR 1926 Subpart CC governs wire rope inspection?',
              options: [
                '1926.1412',
                '1926.1413',
                '1926.1415',
                '1926.1417',
              ],
              correctIndex: 1,
              explanation:
                '1926.1413 is specifically dedicated to wire rope inspection — inspection frequency, removal thresholds by rope type, and documentation. 1926.1412 covers general equipment inspections, 1926.1415 covers safety devices, and 1926.1417 covers operation. Knowing the section numbers helps you find the right rule quickly in the field and on the exam.',
            },
          ],
        },
        {
          id: '1a-m4-s3',
          title: 'Practice Exam 2 & Review',
          durationHours: 2,
          learningObjectives: [
            'Achieve a simulated score of 70% or better on a full-length 1A-style practice exam',
            'Review the most commonly missed topics from Practice Exam 1',
            'Consolidate knowledge of lattice-boom assembly/disassembly, friction drum systems, and load chart nuances',
            'Identify the most important sections of OSHA 1926 Subpart CC and 230 CMR 6.00 for the exam',
          ],
          topics: [
            'High-yield review: MGL §53 exemptions, $75 fee, 70% passing score, 60-day wait, 2-year license, 2-hour CE',
            'High-yield review: 230 CMR 6.00 — SAE J1307 hand signals, only approved signaler directs operator, no persons in swing arc',
            'High-yield review: load chart — configuration-specific; must match actual setup exactly; 75% load weight verification rule',
            'High-yield review: OSHA 1926.1412 inspection tiers — pre-shift (competent person), monthly (documented, 3-month retention), annual (qualified person)',
            'High-yield review: wire rope removal criteria — 6 broken wires in one lay (running rope); birdcage, kink, power line contact = immediate removal; >5% diameter reduction',
            'High-yield review: anti-two-block — mandatory for lattice boom post-November 8, 2011; mandatory for telescopic boom post-February 28, 1992',
            'High-yield review: power line clearance — 20 feet default up to 350 kV',
            'High-yield review: assembly/disassembly — directed by competent + qualified person',
            'High-yield review: two-block on friction winch = load free-fall hazard',
            'High-yield review: only two exceptions to the "one signaler" rule — emergency stop by anyone; pre-arranged alternative signals by agreement',
            'Exam strategy: 70% passing score = correct on 7 out of every 10 questions; identify your weakest topic and drill it first',
            'Final review: OSHA section numbers that appear most frequently on MA crane exams',
          ],
          resources: [
            {
              label: 'OSHA 29 CFR 1926 Subpart CC — Full text',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926SubpartCC',
              type: 'osha',
              required: true,
            },
            {
              label: 'MGL Chapter 146 — Full text',
              url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXX/Chapter146',
              type: 'regulation',
              required: true,
            },
            {
              label: 'SAE J1307 Hand Signals — Quick Reference',
              url: '/hand-signals',
              type: 'reference',
              required: true,
            },
          ],
          selfCheck: [
            {
              question: 'You are on outriggers fully extended, boom at 65°, and the load chart shows rated capacity of 15 tons at that angle and radius. You plan to add jib sections. What must you do before lifting with the jib?',
              options: [
                'Use the same 15-ton rating — jib sections do not change capacity',
                'Consult the jib rating column on the load chart for the jib angle and radius actually being used',
                'Derate 15 tons by 20% as a standard jib safety factor',
                'Confirm with the manufacturer that jib use is permitted on this boom angle',
              ],
              correctIndex: 1,
              explanation:
                'Jib (fly) sections have their own separate load chart ratings — typically lower than main boom ratings at the same total radius, because the jib configuration adds structural loads and changes the force geometry. Always use the jib column of the chart, not the main boom column, when a jib is attached.',
            },
            {
              question: 'What is the key difference between the 1A and 1B Massachusetts hoisting license restrictions in terms of equipment?',
              options: [
                '1A covers hydraulic cranes; 1B covers friction-drum cranes',
                '1A covers all friction-clutch machines, all derricks, and encompasses 1B scope; 1B covers a more limited category of hoisting equipment',
                '1A and 1B are identical — they are the same license with different renewal dates',
                '1B covers all tower cranes; 1A covers all mobile cranes',
              ],
              correctIndex: 1,
              explanation:
                'The 1A is the broadest restriction — it covers all friction-clutch machines, all derricks, and its scope includes everything in 1B, 1C, 1D, and 4B through 4G. The 1B covers a narrower category of hoisting equipment. A 1A holder does NOT need a separate 1B license.',
            },
            {
              question: 'An operator is lowering a load and releases the clutch on the friction drum. The load begins to free-fall. What immediate action should be taken?',
              options: [
                'Re-engage the clutch to slow the drum',
                'Apply the band brake to slow or stop drum rotation',
                'Alert the signaler via radio and allow the load to reach the ground',
                'Lower the boom to reduce load radius and slow the descent',
              ],
              correctIndex: 1,
              explanation:
                'On a friction drum crane, when the clutch is disengaged for lowering, the band brake is the primary means of controlling descent speed. Applying the band brake slows drum rotation and controls the rate of lowering. Re-engaging the clutch while the drum is spinning can damage the clutch mechanism and does not provide immediate controlled stopping.',
            },
            {
              question: 'Which of the following is NOT listed as a required safety device under OSHA 1926.1415?',
              options: [
                'Horn',
                'Boom stops',
                'Anti-two-block device',
                'Crane level indicator',
              ],
              correctIndex: 2,
              explanation:
                'The anti-two-block device is an operational aid under OSHA 1926.1416, not a safety device under 1926.1415. Safety devices under 1926.1415 include: crane level indicator, boom stops, jib stops, foot pedal brake locks, hydraulic jack holding devices, rail clamps (for rail equipment), and horn. Knowing which section governs which device is a common exam question.',
            },
            {
              question: 'A crane operator receives an OSHA inspection and the inspector finds that the operator\'s cab does not have the rated capacity load chart. What violation has occurred?',
              options: [
                'A violation of 1926.1412 — failure to perform required inspection',
                'A violation of 1926.1415 — missing required safety device',
                'A violation of 1926.1417 — load chart must be readily available in the cab at all times',
                'No violation — load charts only need to be on site, not in the cab',
              ],
              correctIndex: 2,
              explanation:
                'OSHA 1926.1417 specifically requires rated capacity charts and operational procedures to be "readily available in the cab at all times." This is a direct operational requirement, not an inspection or safety device requirement. The operator is responsible for ensuring the chart is present before beginning operations.',
            },
            {
              question: 'A crane operator is asked by the project manager to make a lift after the operator has determined conditions are unsafe due to high winds. What does OSHA say the operator must do?',
              options: [
                'Follow the project manager\'s direction since they have job site authority',
                'Make the lift at reduced speed and watch the load carefully',
                'Stop operations and refuse to lift — the operator has authority under 1926.1418 to stop for safety',
                'Contact OSHA before refusing — verbal instructions from management take priority until OSHA confirms the hazard',
              ],
              correctIndex: 2,
              explanation:
                'OSHA 1926.1418 grants operators both the right and the obligation to stop operations when safety warrants it. This authority is unconditional — no supervisor or project manager directive can override an operator\'s safety stop decision. Operating in unsafe conditions at a manager\'s direction does not transfer liability away from the operator.',
            },
            {
              question: 'You need to review the 1A exam tomorrow. What is the single most important study action to take tonight?',
              options: [
                'Memorize all OSHA section numbers from 1926.1400 to 1926.1442',
                'Review your practice exam results, identify the topics where you scored below 70%, and study those sections specifically',
                'Re-read the entire MGL Chapter 146 statute',
                'Practice hand signals in front of a mirror for one hour',
              ],
              correctIndex: 1,
              explanation:
                'The exam requires 70% overall. Targeted review of weak areas gives the highest return on study time. If you scored well on regulatory content but struggled on wire rope or load charts, spending all night on the regulation does not improve your score. Use your practice exam data to direct your final review — that\'s exam strategy, not guesswork.',
            },
          ],
        },
      ],
    },
  ],
};
