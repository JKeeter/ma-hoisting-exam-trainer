import { LicenseRestriction } from '../types';

export const restriction_1b: LicenseRestriction = {
  code: '1B',
  name: 'Hydraulic cranes',
  description: 'Hydraulic mobile cranes (non-telescoping).',
  equipmentCovered: ['Hydraulic mobile cranes'],
  totalHours: 24,
  modules: [
    {
      id: '1b-m1',
      title: 'Legal & Regulatory Foundation',
      orderInCourse: 1,
      estimatedHours: 6,
      sessions: [
        {
          id: '1b-m1-s1',
          title: 'MGL Chapter 146 & 230 CMR 6.00',
          durationHours: 2,
          learningObjectives: [
            'State the minimum age, passing score, and waiting period that apply to the 1B hoisting license exam',
            'Identify what equipment the Class 1B restriction covers under 230 CMR 6.00',
            'List the key exemptions to the hoisting-license requirement under MGL §53',
            'Explain the relationship between MGL Chapter 146 (statute) and 230 CMR 6.00 (regulation)',
          ],
          topics: [
            'MGL Chapter 146 §53 — who must hold a hoisting license in Massachusetts',
            'Class 1B: telescoping-boom cranes with or without wire ropes (truck-mount, rough-terrain, all-terrain)',
            'How 1B relates to 1A (full hoisting) and 1C (hydraulic telescoping without wire rope) in the MA class hierarchy',
            'Minimum age requirement: 18 years old',
            'License duration and renewal: 2-year cycle',
            'Exam passing score: 70% minimum',
            '60-day waiting period before retaking a failed exam',
            '$75 non-refundable application fee per restriction class',
            'Exemptions: agricultural operators, public utility supervised programs, industrial equipment on company property, vocational schools, approved apprenticeship programs',
            'Application through the MA Division of Occupational Licensure (DOL)',
          ],
          resources: [
            {
              label: 'MGL Chapter 146 §53 — Licensing requirement (malegislature.gov)',
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
              label: '230 CMR 6.00 — Hoisting Machinery regulation page (mass.gov)',
              url: 'https://www.mass.gov/regulations/230-CMR-600-hoisting-machinery',
              type: 'regulation',
              required: true,
            },
            {
              label: 'Apply for a Hoisting Engineer License (mass.gov)',
              url: 'https://www.mass.gov/how-to/apply-for-a-hoisting-engineer-license',
              type: 'reference',
              required: false,
            },
          ],
          selfCheck: [
            {
              question: 'What is the minimum passing score on the Massachusetts 1B hoisting engineer exam?',
              options: ['60%', '65%', '70%', '75%'],
              correctIndex: 2,
              explanation:
                'The passing score is 70% on all Massachusetts hoisting engineer exams. Score below 70% and you must wait 60 days before retesting — use that time to focus on the areas where you scored poorly.',
            },
            {
              question: 'Under the Massachusetts class hierarchy, which license class is ABOVE the 1B restriction?',
              options: ['1C', '1D', '2A', '1A'],
              correctIndex: 3,
              explanation:
                '1A is the top-level hoisting class. A holder of a 1A license may operate all equipment in classes 1B, 1C, 1D, and several Class 4 specialty categories. 1B is not the highest class — it specifically covers telescoping-boom cranes with or without wire ropes.',
            },
            {
              question: 'Which type of equipment is covered by the Massachusetts Class 1B restriction?',
              options: [
                'Hydraulic telescoping-boom cranes without wire rope (forklifts included)',
                'Telescoping-boom cranes with or without wire ropes',
                'General industrial warehouse forklifts used primarily indoors',
                'Crawler and rubber-tired excavators',
              ],
              correctIndex: 1,
              explanation:
                'Class 1B covers telescoping-boom cranes with or without wire ropes — this includes truck-mounted, rough-terrain, and all-terrain cranes. Class 1C covers hydraulic telescoping booms without wire rope, and Class 1D is for general industrial warehouse forklifts.',
            },
            {
              question: 'How long must you wait before retaking the 1B hoisting exam after a failed attempt?',
              options: ['7 days', '30 days', '60 days', '90 days'],
              correctIndex: 2,
              explanation:
                'A 60-day waiting period applies after any failed Massachusetts hoisting exam. This is consistent across all restriction classes and is designed to ensure candidates study thoroughly before re-attempting.',
            },
            {
              question: 'Which of the following is EXEMPT from the Massachusetts hoisting license requirement under MGL §53?',
              options: [
                'A construction contractor operating a telescoping-boom crane on a public road project',
                'A crane operator at a private industrial facility who only lifts within the company property with licensed supervision',
                'A rigger who operates a crane at a marine port to unload cargo ships',
                'A union apprentice operating a crane on a commercial job site without a licensed operator present',
              ],
              correctIndex: 1,
              explanation:
                'MGL §53 exempts operators of industrial equipment (including cranes) who work exclusively on company property under a licensed supervisor. The other scenarios involve construction or cargo work that falls squarely within the licensing requirement.',
            },
            {
              question: 'What is the relationship between MGL Chapter 146 and 230 CMR 6.00?',
              options: [
                'MGL Chapter 146 is federal law; 230 CMR 6.00 is state law implementing it',
                'MGL Chapter 146 is the statute passed by the legislature; 230 CMR 6.00 is the implementing administrative regulation',
                'They are two names for the same document',
                '230 CMR 6.00 supersedes MGL Chapter 146 whenever they conflict',
              ],
              correctIndex: 1,
              explanation:
                'MGL (Massachusetts General Law) is statute enacted by the legislature. 230 CMR 6.00 is a regulation promulgated by the Division of Professional Licensure to implement and detail the requirements of MGL Chapter 146. The exam tests both layers.',
            },
            {
              question: 'What is the non-refundable application fee per restriction class for a Massachusetts hoisting engineer license?',
              options: ['$25', '$50', '$75', '$100'],
              correctIndex: 2,
              explanation:
                'The application fee is $75 per restriction class. This fee is non-refundable even if you fail the exam or your application is denied. Always verify current fees at mass.gov — fees can change by regulation.',
            },
          ],
        },
        {
          id: '1b-m1-s2',
          title: 'Load Charts & Hydraulic Cranes',
          durationHours: 2,
          learningObjectives: [
            'Explain the four variables in every crane load chart: boom length, load radius, configuration (on outriggers vs. on tires), and direction of lift',
            'Identify how outrigger position affects rated capacity on a telescoping-boom crane',
            'Describe the difference between a rated capacity and gross capacity, and why you must never exceed the chart',
            'Apply a sample load chart to determine whether a given lift is within capacity',
          ],
          topics: [
            'Load chart basics: the legal document that defines maximum allowable loads for every crane configuration',
            'Four key variables: boom length, load radius (horizontal distance from center pin to load), load angle, and configuration',
            'Configuration column: on outriggers fully extended vs. outriggers mid-extended vs. on tires (rubber)',
            'Why on-rubber capacity is drastically lower than on-outrigger capacity',
            'How to calculate working radius: measure from center of rotation to center of hook (not boom tip)',
            'Deductions from gross capacity: block weight, hook weight, slings, rigging hardware — all reduce net capacity',
            'Percentage-of-capacity warnings: OSHA 1926.1417 requires brake test when lifting at 90% or more of line pull',
            "Manufacturer's load chart must be present in the cab at all times (OSHA 1926.1417)",
            'Electronic vs. paper load charts: if electronic system fails, cease operations until restored',
            'Interpolating between chart entries: always use the more conservative (lower) value',
            'Why exceeding the load chart by even 1% can trigger a tip-over — crane stability margins are not generous',
          ],
          resources: [
            {
              label: '1926.1417 — Operation: load chart availability requirement (OSHA)',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1417',
              type: 'osha',
              required: true,
            },
            {
              label: 'NCCCO Mobile Crane Load Charts Study Guide (NCCCO)',
              url: 'https://www.nccco.org/docs/default-source/reference-materials-2014/lift-director-mobile-crane-load-charts-011514-web.pdf',
              type: 'manual',
              required: true,
            },
            {
              label: '230 CMR 6.00 — Hoisting Machinery regulation page (mass.gov)',
              url: 'https://www.mass.gov/regulations/230-CMR-600-hoisting-machinery',
              type: 'regulation',
              required: false,
            },
          ],
          selfCheck: [
            {
              question: 'A load chart shows a capacity of 18,000 lbs at 30-foot radius on outriggers fully extended. Your rigging hardware (hook block, wire rope, slings) weighs 800 lbs. What is your maximum net load?',
              options: ['18,000 lbs', '17,200 lbs', '18,800 lbs', '16,200 lbs'],
              correctIndex: 1,
              explanation:
                'The load chart gross capacity of 18,000 lbs includes everything on the hook — rigging and the load itself. Subtract the 800 lb rigging weight to get a net load capacity of 17,200 lbs. Never confuse gross chart capacity with net lifting capacity.',
            },
            {
              question: 'Your boom is at 50-foot length. The load chart shows 12,000 lbs capacity at 20-foot radius and 9,000 lbs at 25-foot radius. Your estimated working radius is 22 feet. What rated capacity should you use?',
              options: [
                '12,000 lbs — use the nearest chart entry',
                '10,500 lbs — interpolate midway between the two values',
                '9,000 lbs — always use the more conservative (lower) value when interpolating',
                '11,000 lbs — interpolate at the appropriate proportion',
              ],
              correctIndex: 2,
              explanation:
                'When your working radius falls between two load chart entries, always use the lower (more conservative) capacity value. Interpolating may feel precise, but crane stability does not follow a perfectly linear curve — the conservative value protects you.',
            },
            {
              question: 'Under OSHA 1926.1417, what must the operator do before picking up a load that is 90% or more of the maximum line pull rating?',
              options: [
                'Notify the site superintendent',
                'Test the brakes by lifting the load slightly and applying the brakes before proceeding',
                'Extend the outriggers an additional six inches for safety margin',
                'No special procedure is required below 100% of rated capacity',
              ],
              correctIndex: 1,
              explanation:
                'OSHA 1926.1417 requires a brake test — lift the load just off the ground, hold it, apply the brakes, and verify they hold before continuing the lift. This check ensures the brake system can control the load before you are committed to a full lift.',
            },
            {
              question: 'Why does the on-rubber (on-tires) capacity column show significantly lower rated capacities than the on-outriggers column?',
              options: [
                'Tires are more expensive to replace, so manufacturers reduce ratings to limit tire stress',
                'On rubber, the crane\'s stability footprint is limited to the tire contact area; outriggers create a much wider, more stable base',
                'OSHA requires a 50% reduction for all on-rubber lifts regardless of stability',
                'The hydraulic pump output is reduced when traveling on tires',
              ],
              correctIndex: 1,
              explanation:
                'Crane stability is determined by the relationship between the load moment and the overturning moment. Outriggers extend the machine\'s footprint dramatically, increasing resistance to tip-over. On rubber, only the tire stance width resists tipping — a much narrower footprint, hence much lower rated capacities.',
            },
            {
              question: 'The crane\'s electronic load management system fails in the middle of a lift sequence. What must the operator do according to OSHA 1926.1417?',
              options: [
                'Continue operating carefully using memory of prior lifts and visual estimates',
                'Continue if a competent person visually monitors the lift',
                'Cease operations requiring the failed load information until the system is restored',
                'Switch to a hand-held calculator and the paper backup chart',
              ],
              correctIndex: 2,
              explanation:
                'OSHA 1926.1417 states that if electronic load information systems fail, the operator must cease the operations requiring that information until the system is restored. A paper chart is acceptable as an alternative only if it is in the cab and covers the specific configuration — not all cranes carry complete paper backups.',
            },
            {
              question: 'When measuring working radius for load chart lookup, where does the measurement begin?',
              options: [
                'From the front face of the boom at ground level',
                'From the center of the boom tip sheave',
                'From the center of the crane\'s rotation (center pin) to the center of the hook',
                'From the front outrigger pad to the center of the hook',
              ],
              correctIndex: 2,
              explanation:
                'Working radius is always measured horizontally from the center of the crane\'s rotation (the king pin or slew center) to the point directly below the hook — not from the boom tip, not from the front of the machine. An error of even two feet in radius can place you in a lower capacity column.',
            },
          ],
        },
        {
          id: '1b-m1-s3',
          title: 'Renewal & Penalties',
          durationHours: 2,
          learningObjectives: [
            'Summarize the civil and criminal penalties for operating a crane without a valid 1B license',
            'Explain the renewal deadline and what happens if a license lapses',
            'Describe employer responsibilities under MGL §66 for ensuring operators hold valid licenses',
            'State the accident reporting obligations imposed by MGL §67',
          ],
          topics: [
            'MGL §53 — operating without a valid license: up to $500/day civil penalty per day of violation',
            'MGL §54A — criminal penalties for repeat or willful violations',
            'Employer liability under MGL §66: employers who direct unlicensed operators also face penalties',
            'License renewal: must be renewed before expiration; no official grace period for continued operation',
            'Lapsed license: requires re-application and potentially re-examination; do not operate with an expired license',
            'MGL §67 — accident reporting: operators must report accidents involving hoisting machinery as required by law',
            'OSHA incident reporting: employer must report fatalities within 8 hours; in-patient hospitalizations within 24 hours (29 CFR 1904)',
            'DOL license lookup: employers can verify active license status on mass.gov before assigning crane work',
            'License suspension and revocation: final violations of occupational safety regulations can trigger suspension',
            'Record-keeping best practice: carry your wallet license card; have a copy in the crane cab',
          ],
          resources: [
            {
              label: 'MGL Chapter 146 — Full text (malegislature.gov)',
              url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXX/Chapter146',
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
              label: 'Education requirements for hoisting engineer license (mass.gov)',
              url: 'https://www.mass.gov/info-details/education-requirements-for-hoisting-engineer-license',
              type: 'reference',
              required: false,
            },
          ],
          selfCheck: [
            {
              question: 'What is the maximum civil penalty per day for operating a crane without a valid Massachusetts hoisting license?',
              options: ['$100/day', '$250/day', '$500/day', '$1,000/day'],
              correctIndex: 2,
              explanation:
                'MGL §53 allows civil penalties of up to $500 per day for each day of unlicensed operation. Each day is a separate violation — a week of unlicensed crane operation could generate $3,500 in fines before any criminal charges.',
            },
            {
              question: 'Your 1B license expired last week. You have a crane job today and plan to renew online tonight. Can you legally operate the crane today?',
              options: [
                'Yes, there is a 30-day grace period after expiration',
                'Yes, as long as you carry proof that your renewal is in progress',
                'No, operating with an expired license is unlicensed operation under MGL §53',
                'Yes, as long as a holder of a 1A license is on site',
              ],
              correctIndex: 2,
              explanation:
                'An expired license is an invalid license. MGL §53 requires a current, valid license to operate — there is no grace period that permits continued operation after expiration. Renew before expiration, not after.',
            },
            {
              question: 'Under MGL §66, who bears legal responsibility for ensuring the crane operator holds a valid 1B license?',
              options: [
                'The operator alone — it is a personal professional obligation',
                'Both the operator and the employer who directs the work',
                'The general contractor\'s safety officer, who must verify all trade licenses on site',
                'OSHA, which inspects licenses during routine site visits',
              ],
              correctIndex: 1,
              explanation:
                'MGL §66 places responsibility on both the licensed operator (to maintain a valid license) and the employer who directs their work. An employer who knowingly uses an unlicensed crane operator faces independent civil penalties.',
            },
            {
              question: 'MGL §67 governs which obligation related to hoisting machinery incidents?',
              options: [
                'Daily inspection documentation requirements',
                'Accident reporting by operators and employers',
                'Equipment maintenance schedules',
                'Crane operator certification standards',
              ],
              correctIndex: 1,
              explanation:
                'MGL §67 requires accident reporting when hoisting machinery is involved in an incident. Beyond the state obligation, OSHA 29 CFR 1904 also requires employers to report fatalities to OSHA within 8 hours and in-patient hospitalizations within 24 hours.',
            },
            {
              question: 'A general contractor tells an unlicensed worker to "just move the crane to the other side of the lot — takes five minutes." What is the legal consequence?',
              options: [
                'No consequence if no accident occurs and the move is brief',
                'The worker receives a verbal warning from OSHA',
                'Both the worker and the contractor can face civil penalties under MGL §53',
                'Only the contractor faces penalties; workers are individually protected',
              ],
              correctIndex: 2,
              explanation:
                'Duration does not matter — "five minutes" of unlicensed crane operation is still a violation of MGL §53. Both the unlicensed operator and the employer who directed the operation face civil penalties of up to $500 per day.',
            },
            {
              question: 'A crane operator\'s 1B license is suspended after a safety violation. They continue to operate crane equipment at a new job site. What statute governs this situation?',
              options: [
                'MGL §53 (operating without a valid license) and potentially MGL §54A (criminal penalties)',
                'Only OSHA 29 CFR 1926 Subpart CC applies; MGL Chapter 146 does not cover suspended licenses',
                'Only the employer is liable — the operator cannot be charged individually',
                'A suspended license is a civil matter only; no criminal exposure exists',
              ],
              correctIndex: 0,
              explanation:
                'A suspended license is not a valid license. Operating with a suspended license violates MGL §53 the same as operating with no license at all. Willful or repeat violations can elevate to criminal charges under MGL §54A.',
            },
          ],
        },
      ],
    },
    {
      id: '1b-m2',
      title: 'Equipment Systems & Components',
      orderInCourse: 2,
      estimatedHours: 6,
      sessions: [
        {
          id: '1b-m2-s1',
          title: 'Hydraulic Boom Systems',
          durationHours: 2,
          learningObjectives: [
            'Identify and name the major structural components of a telescoping-boom mobile crane',
            'Explain how hydraulic cylinders extend and retract the boom sections',
            'Describe the function of the hoist drum, wire rope, and load block in the lifting system',
            'Explain how counterweight interacts with boom angle and load radius to affect stability',
          ],
          topics: [
            'Carrier (lower works): the truck chassis — engine, drive axles, outriggers, steering',
            'Upperworks (superstructure): cab, boom, hoist drum, swing bearing — rotates on the carrier',
            'Swing (slew) bearing and swing motor: allow 360° rotation of the upperworks',
            'Telescoping boom: base section plus one or more fly sections extended by hydraulic cylinders',
            'Single-cylinder vs. sequential extension systems: how boom sections telescope in sequence',
            'Boom angle: measured in degrees from horizontal; increasing angle reduces radius and increases capacity',
            'Luffing cylinder: the large hydraulic cylinder that raises and lowers the entire boom',
            'Hoist drum and wire rope: drum winds/unwinds rope to raise/lower the hook block',
            'Sheave blocks: redirect wire rope and provide mechanical advantage (parts of line)',
            'Hook block (lower block) and overhaul ball: the load attachment point at the end of the wire rope',
            'Counterweight: cast-iron blocks at the rear of the upperworks that offset the boom and load moment',
            'Why the load chart changes when counterweight is added or removed: capacity is configuration-specific',
            'Boom tip attachments: jib inserts, fixed jibs — extend reach but reduce rated capacity significantly',
          ],
          resources: [
            {
              label: '1926.1401 — Definitions (competent person, qualified person, rated capacity, etc.)',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1401',
              type: 'osha',
              required: true,
            },
            {
              label: '1926.1416 — Operational aids: anti-two-block, LMI, boom angle indicator',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1416',
              type: 'osha',
              required: true,
            },
            {
              label: '230 CMR 6.00 — Hoisting Machinery (mass.gov)',
              url: 'https://www.mass.gov/regulations/230-CMR-600-hoisting-machinery',
              type: 'regulation',
              required: false,
            },
          ],
          selfCheck: [
            {
              question: 'Which component raises and lowers the entire telescoping boom assembly (changes boom angle)?',
              options: [
                'The hoist drum',
                'The luffing (boom hoist) cylinder',
                'The telescoping cylinder inside the boom',
                'The swing motor',
              ],
              correctIndex: 1,
              explanation:
                'The luffing cylinder (also called the boom hoist cylinder) is the large hydraulic ram that controls boom angle — raising the boom up toward vertical or lowering it toward horizontal. The telescoping cylinder inside the boom changes boom length, not angle.',
            },
            {
              question: 'You add an optional fly jib to extend the boom tip reach. How does this typically affect the rated capacity?',
              options: [
                'Rated capacity increases because the fly jib distributes the load over more structure',
                'Rated capacity stays the same — the load chart covers all configurations',
                'Rated capacity decreases significantly; a separate jib section of the load chart must be used',
                'Rated capacity decreases by exactly 10% per foot of jib length',
              ],
              correctIndex: 2,
              explanation:
                'Adding a fly jib extends the working radius and places additional bending moment on the boom tip. Jib configurations have their own section of the load chart with substantially lower rated capacities. Always use the jib-specific page — do not read the main boom chart with a jib rigged.',
            },
            {
              question: 'What is the purpose of the counterweight on a telescoping-boom mobile crane?',
              options: [
                'To lower the center of gravity so the crane can travel safely on roads',
                'To counteract the overturning moment created by the boom and load, increasing stability',
                'To add weight for traction on the rear drive axles',
                'To protect the rear of the machine from collision damage on job sites',
              ],
              correctIndex: 1,
              explanation:
                'The counterweight is positioned at the rear of the upperworks to offset the moment (turning force) created by the boom and load on the opposite side. The load chart assumes the counterweight is installed as specified — operating without the full counterweight reduces capacity and may void the chart entirely.',
            },
            {
              question: 'As you increase boom angle (raise the boom more toward vertical), what happens to the working radius?',
              options: [
                'Working radius increases because the boom tip moves farther from the machine',
                'Working radius decreases because the boom tip moves closer to being directly above the center of rotation',
                'Working radius stays the same — only boom length changes the radius',
                'Working radius doubles when the angle exceeds 60 degrees',
              ],
              correctIndex: 1,
              explanation:
                'Raising the boom (increasing angle) brings the boom tip closer to directly above the center pin, reducing the horizontal distance (working radius). A shorter radius means a higher rated capacity — this is why crane operators often raise the boom to pick up heavy loads close in.',
            },
            {
              question: 'How many "parts of line" passing through a sheave block affects the lifting capacity of the hoist system?',
              options: [
                'More parts of line increase the speed of lifting but do not affect capacity',
                'More parts of line increase the mechanical advantage, allowing the drum to lift heavier loads more slowly',
                'Fewer parts of line increase capacity because less rope weight is involved',
                'Parts of line do not affect crane capacity — only boom angle and radius matter',
              ],
              correctIndex: 1,
              explanation:
                'Each additional part of line through the sheave block multiplies the mechanical advantage of the hoist. With four parts of line, the drum pull required to lift a given load is divided by four — allowing much heavier lifts. However, more parts of line also reduce hook speed and require careful capacity matching.',
            },
            {
              question: 'What component allows the entire crane upperworks (cab, boom, hoist) to rotate relative to the carrier?',
              options: [
                'The outrigger beam',
                'The carrier differential lock',
                'The swing (slew) bearing driven by the swing motor',
                'The luffing cylinder',
              ],
              correctIndex: 2,
              explanation:
                'The swing bearing (slew ring) is the large circular bearing that connects the upperworks to the carrier. The hydraulic swing motor drives the upperworks around this bearing, allowing 360° rotation. The swing bearing must be inspected for cracks, wear, and proper lubrication during pre-shift checks.',
            },
          ],
        },
        {
          id: '1b-m2-s2',
          title: 'Outrigger & Stability Systems',
          durationHours: 2,
          learningObjectives: [
            'Explain why outrigger deployment is the single most critical setup step for a mobile crane lift',
            'Describe the four outrigger deployment configurations and how each affects rated capacity',
            'State the ground-bearing-pressure principle and why outrigger pads are required',
            'Identify the signs of inadequate ground support and what to do when conditions are suspect',
          ],
          topics: [
            'Outrigger anatomy: horizontal beam, vertical jack, outrigger pad (float)',
            'Four outrigger positions: fully extended, mid-extended (50%), partially extended, and retracted (on rubber)',
            'The load chart reflects outrigger position: always use the correct column for your actual setup',
            'Fully extending all four outriggers: the only way to achieve maximum rated capacity',
            'Why asymmetric outrigger extension is dangerous: the rated capacity may not apply in all swing directions',
            'Leveling the crane: upper works must be within manufacturer\'s specified level tolerance (typically 1%)',
            'Ground-bearing pressure: the force concentrated under each outrigger pad — can exceed 50 tons',
            'Outrigger pads (floats/cribbing mats): distribute load over a larger area to stay within soil bearing capacity',
            'OSHA 1926.1402: ground must be firm, drained, and graded; controlling entity is responsible for site prep',
            'Subsurface hazards: buried utilities, voids, septic tanks, old foundations — always get subsurface info',
            'Signs of failing ground: outrigger sinking, leaning, cracking ground, outrigger float tilting',
            'What to do if ground gives way: stop the lift, lower the load to the ground, evacuate area, reassess',
            'Tipping axis: the line between two adjacent outrigger contact points — never let the load moment cross it',
          ],
          resources: [
            {
              label: '1926.1402 — Ground conditions (OSHA)',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1402',
              type: 'osha',
              required: true,
            },
            {
              label: '1926.1416 — Operational aids (outrigger/stabilizer position sensors)',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1416',
              type: 'osha',
              required: true,
            },
            {
              label: 'Crane & Outrigger Pad Safety: Use & Handling Guidelines (DICA)',
              url: 'https://dicausa.com/usage-and-inspection-guidelines/',
              type: 'reference',
              required: false,
            },
          ],
          selfCheck: [
            {
              question: 'You set up the crane with three outriggers fully extended but one outrigger only 50% extended due to a nearby trench. You select the "fully extended" column in the load chart for your lift. Is this correct?',
              options: [
                'Yes — three fully extended outriggers provide enough stability for a full-capacity lift',
                'No — you must use the column matching your most restricted outrigger position, or the appropriate asymmetric chart if one exists',
                'Yes — as long as the 50% outrigger is on the opposite side from the lift',
                'No — asymmetric outrigger extension voids the load chart entirely and you cannot lift',
              ],
              correctIndex: 1,
              explanation:
                'The rated capacity depends on outrigger position. If outriggers are not uniformly extended, you must use the more conservative capacity that matches your actual configuration or consult the manufacturer\'s asymmetric lift chart. Using the "fully extended" column with a partially extended outrigger can put you well over the actual safe capacity.',
            },
            {
              question: 'Under OSHA 1926.1402, who is responsible for ensuring the ground conditions at a construction site meet crane operational requirements?',
              options: [
                'The crane operator, since they are the competent person for the lift',
                'OSHA, which must inspect the site before any crane set-up',
                'The controlling entity (the entity with overall authority over the project site)',
                'The crane rental company, since they own the equipment',
              ],
              correctIndex: 2,
              explanation:
                'OSHA 1926.1402 places primary responsibility for ground conditions on the controlling entity — the employer with authority over the site. The operator must notify the controlling entity if conditions appear inadequate, but the controlling entity is responsible for arranging necessary ground preparation.',
            },
            {
              question: 'Why must outrigger pads (floats or mats) be used even when the ground appears solid?',
              options: [
                'OSHA requires pads on all lifts regardless of ground conditions',
                'Pads distribute the concentrated outrigger jack load over a larger area, reducing ground-bearing pressure to within the soil\'s capacity',
                'Pads protect the outrigger jack faces from corrosion and impact damage',
                'Pads are required only on asphalt or concrete surfaces',
              ],
              correctIndex: 1,
              explanation:
                'An outrigger jack concentrates enormous force — often 50+ tons — onto a small metal plate. Ground-bearing pressure under the jack tip can far exceed the soil\'s capacity. A properly sized pad spreads that load over a much larger area, reducing pressure to a safe level. Even seemingly solid ground can punch through without adequate padding.',
            },
            {
              question: 'During a lift, you notice the ground under the rear-left outrigger has cracked and the pad is slowly sinking. What is the correct immediate action?',
              options: [
                'Complete the lift quickly before conditions worsen',
                'Lower the boom angle to reduce outrigger loading, then reassess',
                'Stop the lift, lower the load to the ground, evacuate the area near the outrigger, and do not resume until conditions are corrected',
                'Call the crane manufacturer\'s hotline for guidance before taking any action',
              ],
              correctIndex: 2,
              explanation:
                'Ground failure under an outrigger is an emergency. The immediate priority is to lower the load safely and get personnel away from the area — a crane tip-over happens in seconds once the tipping axis is crossed. Do not attempt to complete or continue any lift until ground conditions are corrected.',
            },
            {
              question: 'What does it mean to "level the crane" and why is it required?',
              options: [
                'Lowering the boom to horizontal before driving to a new position on site',
                'Adjusting the outrigger jacks until the crane upperworks is within the manufacturer\'s specified out-of-level tolerance (typically ≤1%)',
                'Balancing the counterweight against the boom weight before a lift',
                'Checking that all four outrigger beams extend to equal length',
              ],
              correctIndex: 1,
              explanation:
                'Load charts are calculated for a level crane. Even a small out-of-level condition shifts the load\'s effective radius and changes the balance point, potentially putting the crane into a lower capacity column or worse. Manufacturers specify maximum allowable tilt (often 1%) — if you exceed it, the load chart no longer applies.',
            },
            {
              question: 'What is the "tipping axis" on a mobile crane set up on outriggers?',
              options: [
                'The centerline of the boom along which loads are balanced',
                'The imaginary line connecting two adjacent outrigger contact points, about which the crane would rotate if it tips',
                'The hydraulic axis of the luffing cylinder when the boom is at 45 degrees',
                'The vertical axis of the swing bearing',
              ],
              correctIndex: 1,
              explanation:
                'The tipping axis is the line between two adjacent outrigger pad contact points. If the overturning moment from a load pushes the center of gravity beyond this line, the machine will rotate about it — tipping over. All rated capacity calculations ensure the load moment does not push the CG beyond the tipping axis with adequate margin.',
            },
          ],
        },
        {
          id: '1b-m2-s3',
          title: 'Hydraulics Deep Dive',
          durationHours: 2,
          learningObjectives: [
            'Explain how a hydraulic system generates and transmits force through a crane\'s boom, hoist, and outrigger circuits',
            'Identify the major hydraulic components: pump, reservoir, control valves, cylinders, hoses, and relief valves',
            'Describe the failure modes of hydraulic systems that can cause crane accidents',
            'List the pre-shift hydraulic inspection items required by OSHA 1926.1412',
          ],
          topics: [
            'Pascal\'s Law: pressure applied to a confined fluid transmits equally in all directions',
            'Hydraulic pump: converts mechanical engine power into pressurized fluid flow (psi and gpm)',
            'Open-center vs. closed-center systems: how flow is managed when controls are in neutral',
            'Control valves: direct fluid to boom, hoist, swing, or outrigger circuits',
            'Double-acting cylinders: hydraulic fluid on both sides allows push and pull (extend and retract)',
            'Relief valves: set at maximum system pressure to prevent overload and hose bursts',
            'Hydraulic reservoir and fluid level: low fluid leads to cavitation and pump failure',
            'Hydraulic hoses and fittings: high-pressure hose failure modes (burst, pinhole, swage failure)',
            'Oil temperature: overheated hydraulic fluid loses viscosity and causes erratic crane movement',
            'Hydraulic drift: slow downward movement of a suspended load when controls are in neutral — a removal-from-service condition',
            'Hose burst: sudden loss of pressure can cause uncontrolled boom or load drop',
            'Pre-shift hydraulic checks: fluid level, hose condition, fitting integrity, visible leaks, cylinder seal condition',
            'Contaminated hydraulic fluid: water or debris in the system causes accelerated wear and erratic valve behavior',
            'Lockout/tagout during hydraulic maintenance: always depressurize before opening lines',
          ],
          resources: [
            {
              label: '1926.1412 — Inspections (pre-shift, monthly, annual requirements)',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1412',
              type: 'osha',
              required: true,
            },
            {
              label: '1926.1417 — Operation (hydraulic system operational requirements)',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1417',
              type: 'osha',
              required: true,
            },
          ],
          selfCheck: [
            {
              question: 'During a pre-shift inspection, you find a small but steady hydraulic fluid drip from a hose fitting at the boom cylinder. What should you do?',
              options: [
                'Mark the location, monitor it throughout the shift, and report it at the end of the day',
                'Tighten the fitting with a wrench and proceed if the drip stops',
                'Tag the machine out of service; a leaking hydraulic fitting is a deficiency requiring repair before operation',
                'Continue operating if the leak rate is less than one drop per minute',
              ],
              correctIndex: 2,
              explanation:
                'Any active hydraulic leak at a boom cylinder fitting is a removal-from-service condition. Under OSHA 1926.1412, any deficiency that constitutes a safety hazard requires the machine to be removed from service. A pressurized hose or fitting failure can cause a sudden, uncontrolled load drop.',
            },
            {
              question: 'What is "hydraulic drift" and why is it a serious safety concern on a crane?',
              options: [
                'The gradual sideways movement of the crane on a sloped surface',
                'Slow downward movement of a suspended load while controls are in the neutral position',
                'Drift in the crane\'s hydraulic pump output pressure during extended operation',
                'The tendency of hydraulic fluid to move toward lower ground in cold temperatures',
              ],
              correctIndex: 1,
              explanation:
                'Hydraulic drift is the unintended, slow downward creep of the boom or load when the operator\'s controls are in neutral. It indicates internal leakage past worn cylinder seals or control valve spools. A load that drifts can strike workers below and indicates the crane needs service before continued operation.',
            },
            {
              question: 'What causes cavitation in a hydraulic pump and why is it damaging?',
              options: [
                'Excessive fluid pressure that forces air bubbles into the pump inlet',
                'Insufficient fluid supply to the pump inlet, causing vapor cavities that implode and erode pump components',
                'Running the pump at too low a speed for too long during cold weather',
                'Using the wrong viscosity hydraulic fluid in summer conditions',
              ],
              correctIndex: 1,
              explanation:
                'Cavitation occurs when the pump cannot draw enough fluid — usually due to low reservoir level, a clogged strainer, or a kinked suction line. The resulting vapor cavities implode violently inside the pump, eroding metal surfaces. A cavitating pump makes a distinctive grinding or whining noise and loses output.',
            },
            {
              question: 'What is the purpose of a hydraulic relief valve in a crane system?',
              options: [
                'To prevent the crane from exceeding its rated capacity by stopping hoist drum rotation',
                'To limit maximum system pressure, protecting hoses, cylinders, and valves from overload',
                'To relieve air trapped in the hydraulic lines after maintenance',
                'To reduce pump speed when the boom angle exceeds 80 degrees',
              ],
              correctIndex: 1,
              explanation:
                'A relief valve is set to open when system pressure reaches a preset maximum, diverting fluid back to the reservoir instead of allowing pressure to build until a hose or fitting bursts. It protects the entire hydraulic circuit. An improperly set or stuck-closed relief valve can cause catastrophic hose or cylinder failure.',
            },
            {
              question: 'You notice the crane\'s hydraulic fluid is milky white or tan rather than its normal clear amber color. What does this indicate?',
              options: [
                'The fluid has reached the end of its normal service life and needs a routine change',
                'The fluid contains water contamination, which causes accelerated corrosion and valve sticking',
                'The fluid is operating at optimal temperature range',
                'An additive package has been recently added to the reservoir',
              ],
              correctIndex: 1,
              explanation:
                'Milky or tan hydraulic fluid indicates water contamination — most commonly from a leaking cylinder rod seal, cooler failure, or condensation. Water in hydraulic fluid promotes corrosion, causes erratic control valve behavior, and can freeze in cold weather. The fluid must be replaced and the contamination source identified before operation.',
            },
            {
              question: 'Under OSHA 1926.1412, what is the minimum retention period for monthly crane inspection records?',
              options: [
                '30 days',
                '3 months',
                '6 months',
                '12 months',
              ],
              correctIndex: 1,
              explanation:
                'OSHA 1926.1412 requires that monthly inspection records — including items checked, results, inspector name, signature, and date — be retained for a minimum of three months. Annual inspection records must be kept for 12 months. Keep records available on site or accessible to inspectors.',
            },
          ],
        },
      ],
    },
    {
      id: '1b-m3',
      title: 'Safe Operation & Inspections',
      orderInCourse: 3,
      estimatedHours: 6,
      sessions: [
        {
          id: '1b-m3-s1',
          title: 'Daily Inspection Procedures',
          durationHours: 2,
          learningObjectives: [
            'Conduct a pre-shift crane inspection following the OSHA 1926.1412 competent-person checklist',
            'Identify wire rope removal-from-service conditions under OSHA 1926.1413',
            'Explain the three-tier inspection system: pre-shift, monthly (qualified person), and annual',
            'Distinguish between conditions requiring immediate removal from service and those requiring monitoring',
          ],
          topics: [
            'OSHA 1926.1412(d): pre-shift inspection — 15-item competent-person checklist',
            'Control mechanisms: do all controls respond correctly and return to neutral?',
            'Drive systems: hydraulic leaks, unusual sounds, smooth boom extension and retraction',
            'Pressurized lines: no bulges, abrasions, or leaks in hoses and fittings',
            'Hydraulic fluid level: check sight glass or dipstick before start',
            'Hooks and latches: latch closes fully; hook not cracked, twisted, or opened beyond 15% of throat',
            'Wire rope: inspect per OSHA 1926.1413 — broken wires, corrosion, kinking, diameter reduction',
            'Electrical apparatus: warning lights, anti-two-block alarm, LMI display, backup alarm functional',
            'Tires (if on rubber): pressure, sidewall condition, lug nut torque',
            'Ground conditions and equipment level: re-check every shift if conditions change',
            'Operator cab: clean windows, all controls labeled and readable, fire extinguisher present',
            'Operational aids: anti-two-block device tested, LMI configured for today\'s boom length and configuration',
            'Monthly inspection: qualified person (more detailed, documented, 3-month retention)',
            'Annual inspection: disassembly as needed, functional testing, 12-month retention',
            'Removal-from-service tags: use a DO NOT OPERATE tag visible to all potential operators',
          ],
          resources: [
            {
              label: '1926.1412 — Inspections: pre-shift, monthly, annual requirements (OSHA)',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1412',
              type: 'osha',
              required: true,
            },
            {
              label: '1926.1413 — Wire rope inspection and removal-from-service conditions (OSHA)',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1413',
              type: 'osha',
              required: true,
            },
            {
              label: '1926.1416 — Operational aids: anti-two block, LMI, boom angle indicator (OSHA)',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1416',
              type: 'osha',
              required: true,
            },
          ],
          selfCheck: [
            {
              question: 'During a pre-shift wire rope inspection, you find six randomly distributed broken wires in one rope lay. What action is required under OSHA 1926.1413?',
              options: [
                'Document the finding and monitor for additional breaks over the next three shifts',
                'Remove the wire rope from service immediately — six random breaks in one lay is a removal-from-service condition',
                'Reduce the lift capacity by 50% and continue operating until end of shift',
                'Apply wire rope lubricant and re-inspect after 100 cycles',
              ],
              correctIndex: 1,
              explanation:
                'Under OSHA 1926.1413, six randomly distributed broken wires in one rope lay (or three in one strand per lay) on a running rope is a Category II removal-from-service condition. Stop operations and replace the rope — broken wires indicate fatigue that will accelerate rapidly under continued loading.',
            },
            {
              question: 'You find a hook whose throat opening has spread from the manufacturer\'s specified dimension by 20%. What does this mean?',
              options: [
                'The hook has stretched within acceptable limits — continue operating with extra caution',
                'The hook has been permanently deformed and must be removed from service; hooks must be replaced when throat opening exceeds 15%',
                'Apply a correction factor to the load chart and reduce lifts by 20%',
                'The hook needs lubrication at the swivel — this is a normal wear condition',
              ],
              correctIndex: 1,
              explanation:
                'A hook whose throat has opened more than 15% beyond its original dimension has been overloaded and permanently deformed. It must be removed from service immediately. A distorted hook can allow rigging to slip out under load — a catastrophic failure mode.',
            },
            {
              question: 'Who must perform the pre-shift inspection required by OSHA 1926.1412(d)?',
              options: [
                'A qualified person (engineer or manufacturer\'s representative)',
                'The operator or a competent person designated by the employer',
                'Any crew member present at the start of the shift',
                'A certified crane inspector holding an ASME B30.5 qualification',
              ],
              correctIndex: 1,
              explanation:
                'OSHA 1926.1412(d) requires the pre-shift inspection to be performed by a competent person — someone who can identify hazards and has authority to correct them. This is typically the crane operator or a designated competent person on the crew. The monthly inspection requires a qualified person.',
            },
            {
              question: 'You discover a kink in the hoist wire rope during pre-shift inspection. What is the correct action?',
              options: [
                'Straighten the kink with pliers and lubricate the affected section before operating',
                'Tag the machine out of service — kinking is a Category I removal-from-service condition',
                'Reduce the load by 25% and monitor the kink throughout the shift',
                'Cut out the kinked section and re-splice the rope',
              ],
              correctIndex: 1,
              explanation:
                'Kinking is a Category I removal-from-service condition under OSHA 1926.1413. A kink permanently distorts the wire rope\'s internal structure, causing stress concentrations that can cause sudden failure under load. The rope must be replaced — never attempt to straighten a kinked wire rope and return it to service.',
            },
            {
              question: 'The anti-two-block alarm sounds during a pre-shift function test but the automatic stop device does not cut power to the hoist. What must you do?',
              options: [
                'The alarm working is sufficient — the automatic stop device is a Category II aid with a 30-day repair window',
                'Reduce hoist speed and use the cable-marking alternative measure; repair within 7 days',
                'Continue operating — the audio alarm alone provides adequate warning to the operator',
                'Tag the crane out of service if the automatic stop device cannot be repaired today',
              ],
              correctIndex: 1,
              explanation:
                'For telescopic-boom cranes built after February 28, 1992, the anti-two-block device is a Category I operational aid. If the automatic stop function fails, OSHA 1926.1416 requires implementing the temporary alternative measures (marking the cable, using a spotter) and the device must be repaired within 7 calendar days — not 30.',
            },
            {
              question: 'Which of the following is NOT typically included in a pre-shift crane inspection under OSHA 1926.1412?',
              options: [
                'Hydraulic fluid level check',
                'Wire rope condition inspection',
                'Load cell calibration against a certified test weight',
                'Hook latch condition and throat opening measurement',
              ],
              correctIndex: 2,
              explanation:
                'Load cell calibration against certified test weights is part of an annual/comprehensive inspection by a qualified person — not a pre-shift check. Pre-shift inspections cover visual and functional items a competent person can assess without test equipment: fluid levels, hose condition, hook condition, wire rope, and operational aid function tests.',
            },
          ],
        },
        {
          id: '1b-m3-s2',
          title: 'Operating Hazards',
          durationHours: 2,
          learningObjectives: [
            'Identify the two-blocking hazard and explain how anti-two-block devices prevent it',
            'Apply the OSHA 1926.1408 power-line clearance rules to a job site scenario',
            'Explain the conditions that make a crane tip-over most likely and how to prevent them',
            'Describe the prohibited operations listed in OSHA 1926.1417',
          ],
          topics: [
            'Two-blocking: the hook block contacts the boom tip — causes wire rope failure or structural damage',
            'Anti-two-block (A2B) devices: automatic cutout prevents further hoist-up when block nears boom tip',
            'Boom hoist limiting device: prevents boom from being raised beyond safe angle',
            'Power-line hazards: the leading cause of crane fatalities is electrocution from contact with energized lines',
            'OSHA 1926.1408 Table A: clearance distances by voltage (10 ft for up to 50 kV; 15 ft for 50–200 kV; 20 ft for 200–350 kV)',
            'Default 20-foot rule: if voltage is unknown, maintain at least 20 feet from all power lines',
            'All power lines are presumed energized unless confirmed otherwise by the utility in writing',
            'Electrocution warning signs required in operator cab and on machine exterior (1926.1408)',
            'Tip-over causes: exceeding rated capacity, incorrect load chart column, failing ground, sudden load swing',
            'Swing and pendulum loads: never allow a load to pendulum — control load with tag lines',
            'Tag lines: required to control load rotation and pendulum swing; use non-conductive tag lines near power lines',
            'Prohibited operations (OSHA 1926.1417): no side-loading the boom, no dragging loads, no lifting over the front on wheel-mounted cranes without manufacturer approval',
            'Personnel hoisting: requires specific compliance with 1926.1431; not permitted in a standard hook-hung personnel platform without written plan',
            'Operator must not leave controls while a load is suspended (1926.1417)',
          ],
          resources: [
            {
              label: '1926.1408 — Power line safety (up to 350 kV) — equipment operations (OSHA)',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1408',
              type: 'osha',
              required: true,
            },
            {
              label: '1926.1416 — Operational aids: anti-two-block requirements (OSHA)',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1416',
              type: 'osha',
              required: true,
            },
            {
              label: '1926.1417 — Operation: prohibited actions and pre-lift requirements (OSHA)',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1417',
              type: 'osha',
              required: true,
            },
          ],
          selfCheck: [
            {
              question: 'What happens during a two-blocking event and why is it dangerous?',
              options: [
                'The two main boom sections lock together, preventing retraction',
                'The hook block contacts the boom tip sheave, causing wire rope failure, structural damage, or load drop',
                'Two separate cranes become entangled when operating in the same swing radius',
                'The hydraulic system pressure exceeds the relief valve setting on two circuits simultaneously',
              ],
              correctIndex: 1,
              explanation:
                'Two-blocking occurs when the hook block (lower block) is hoisted up until it contacts the boom tip. The result is sudden, catastrophic stress on the wire rope that can cause it to snap, dropping the load. Anti-two-block devices automatically cut hoist-up power before contact occurs. Always verify the A2B device is functioning before operating.',
            },
            {
              question: 'You are rigging a lift near a 138 kV overhead power line. Under OSHA 1926.1408 Table A, what is the minimum required clearance?',
              options: [
                '10 feet',
                '15 feet',
                '20 feet',
                '25 feet',
              ],
              correctIndex: 1,
              explanation:
                '138 kV falls in the "over 50 kV up to 200 kV" range in OSHA Table A, which requires a minimum clearance of 15 feet. When in doubt about the voltage, treat the line as unknown and maintain at least 20 feet — all power lines must be presumed energized unless the utility has confirmed otherwise in writing.',
            },
            {
              question: 'The voltage of a nearby overhead power line is unknown and the utility has not responded to your inquiry. What minimum clearance must you maintain under OSHA 1926.1408?',
              options: [
                '10 feet — the default for low-voltage distribution lines',
                '15 feet — the standard construction industry clearance',
                '20 feet — the required clearance when voltage is unknown',
                '50 feet — the maximum safety buffer',
              ],
              correctIndex: 2,
              explanation:
                'OSHA 1926.1408 requires a minimum 20-foot clearance when voltage is not known or cannot be confirmed. All power lines must be presumed energized. Do not assume a line is deenergized because it appears abandoned — only written confirmation from the utility establishes deenergization.',
            },
            {
              question: 'Under OSHA 1926.1417, which of the following operations is PROHIBITED on a wheel-mounted crane?',
              options: [
                'Lifting a load at 85% of the rated capacity while on outriggers',
                'Lifting a load over the front of the machine without manufacturer approval for that configuration',
                'Rotating the load 180 degrees after picking it from the ground',
                'Extending the boom to maximum length at low angles',
              ],
              correctIndex: 1,
              explanation:
                'OSHA 1926.1417 specifically prohibits lifting over the front on wheel-mounted cranes unless the manufacturer explicitly approves it in the load chart for that configuration. The rear counterweight provides stability for loads over the rear; front lifts can overcome the counterweight effect on wheel-mounted machines.',
            },
            {
              question: 'A load begins to swing like a pendulum after being lifted. What should the operator do?',
              options: [
                'Swing the crane in the direction of load swing to cancel the pendulum motion',
                'Lower the load immediately to the ground and establish proper tag line control before re-lifting',
                'Increase hoist speed to raise the load higher, which shortens the pendulum and damps the swing',
                'Hold position — pendulum swings naturally dampen after 2–3 cycles',
              ],
              correctIndex: 1,
              explanation:
                'A swinging load is dangerous because it can strike structures, workers, or pull the crane off balance. The correct action is to lower the load to the ground and re-rig with proper tag line control. Never attempt to out-swing a pendulum load — sudden counter-swings can exceed the load chart radius.',
            },
            {
              question: 'May a crane operator leave the controls while a load is suspended in the air?',
              options: [
                'Yes, if the load is secured against movement and the brake is set',
                'Yes, for up to 10 minutes if a signal person watches the load',
                'No, the operator must not leave the controls while a load is suspended, per OSHA 1926.1417',
                'Yes, during shift changes if the incoming operator is briefed on the load status',
              ],
              correctIndex: 2,
              explanation:
                'OSHA 1926.1417 prohibits operators from leaving the controls while a load is suspended. This rule exists because any mechanical failure — hydraulic drift, brake slip, power loss — can cause a suspended load to drop without warning the moment the operator\'s attention leaves the controls.',
            },
          ],
        },
        {
          id: '1b-m3-s3',
          title: 'Hand Signals & Communication',
          durationHours: 2,
          learningObjectives: [
            'Demonstrate the standard hand signals required by 230 CMR 6.00 for crane operations',
            'State when a signal person must be used under OSHA 1926.1419',
            'Explain the hierarchy of stop signals and why emergency stop overrides everything',
            'Describe the requirements for radio communication as an alternative to hand signals under OSHA 1926.1420',
          ],
          topics: [
            '230 CMR 6.00: only an approved signaler may direct crane operator movements in Massachusetts',
            'SAE J1307: the hand signal standard referenced by 230 CMR 6.00 for cranes covered by the 1B restriction',
            'OSHA 1926 Subpart CC Appendix A: standard hand signals for cranes (parallel requirement)',
            'OSHA 1926.1419: when a signal person is required — blocked view of point of operation, obstructed travel, site safety concerns',
            'One person gives signals at a time: only one designated signal person may direct the operator',
            'Emergency stop signal: any person on site may give it; operator must obey immediately',
            'Standard hand signals for crane operations: hoist up, lower, swing left/right, extend/retract boom, stop, emergency stop, travel, dog everything',
            'Lost visual contact: if operator cannot see the signaler, all movement must stop immediately',
            'Radio communication (OSHA 1926.1420): dedicated channel, hands-free receiver for operator, tested on site before operations begin',
            'Conflicting signals: if signals conflict, operator must stop and resolve before continuing; emergency stop from either party always prevails',
            'Non-standard signals: allowed when pre-agreed upon and operator understands meaning; but standard signals are always safer',
          ],
          resources: [
            {
              label: '230 CMR 6.00 — Hoisting Machinery regulation page (mass.gov)',
              url: 'https://www.mass.gov/regulations/230-CMR-600-hoisting-machinery',
              type: 'regulation',
              required: true,
            },
            {
              label: 'SAE J1307 Hand Signals — Quick Reference Guide',
              url: '/hand-signals',
              type: 'reference',
              required: true,
            },
            {
              label: '1926.1419 — Signals: general requirements (OSHA)',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1419',
              type: 'osha',
              required: true,
            },
            {
              label: '1926.1420 — Signals: radio, telephone, or other electronic transmission (OSHA)',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1420',
              type: 'osha',
              required: false,
            },
          ],
          selfCheck: [
            {
              question: 'Under 230 CMR 6.00, who is authorized to direct a crane operator\'s movements on a Massachusetts job site?',
              options: [
                'The general contractor\'s project manager',
                'Any employee present in the work area',
                'Only the approved signaler assigned to the crane',
                'The operator may take direction from any licensed engineer on the project',
              ],
              correctIndex: 2,
              explanation:
                '230 CMR 6.00 requires that only an approved signaler direct crane operator movements. Taking direction from anyone else — even a project manager or engineer — violates the regulation and creates conditions where conflicting or unauthorized signals can cause accidents.',
            },
            {
              question: 'Under OSHA 1926.1419, when MUST a signal person be used?',
              options: [
                'Only when the load exceeds 50% of rated capacity',
                'Only when the crane is traveling on tires with a load',
                'When the point of operation is not in full view of the operator, when travel view is obstructed, or when site safety concerns require it',
                'Whenever the boom is extended beyond 60 feet',
              ],
              correctIndex: 2,
              explanation:
                'OSHA 1926.1419 requires a signal person when: (1) the operator cannot see the point of operation or load travel, (2) travel direction is obstructed, or (3) the operator or person handling the load determines a signal person is needed for site safety. These are minimum triggers — prudent operators use signalers whenever visibility is imperfect.',
            },
            {
              question: 'During a crane pick, a worker on the ground (not the designated signaler) crosses their arms overhead in an emergency stop signal. What must the operator do?',
              options: [
                'Ignore the signal — only the designated signaler can give a valid stop signal',
                'Check with the signaler to confirm the stop before halting operations',
                'Stop all crane movement immediately — any person may give an emergency stop signal',
                'Slow down gradually to avoid shock loading the rigging',
              ],
              correctIndex: 2,
              explanation:
                'OSHA 1926.1419 states that while only one person gives directional signals at a time, any person on site who becomes aware of a safety problem may give a stop or emergency stop signal — and the operator must obey it immediately. An emergency stop is not optional regardless of its source.',
            },
            {
              question: 'You are using radio communication instead of hand signals. Under OSHA 1926.1420, what does the operator\'s radio receiver system require?',
              options: [
                'A loudspeaker inside the cab so the crew outside can confirm transmissions',
                'A dedicated channel and a hands-free receiver so the operator\'s hands are never occupied by the radio',
                'A second radio operator in the cab to relay signals from ground to boom',
                'Voice confirmation from the signal person repeated twice before any movement begins',
              ],
              correctIndex: 1,
              explanation:
                'OSHA 1926.1420 requires that when radio is used, the transmission is on a dedicated channel and the operator\'s reception is by a hands-free system. The operator\'s hands must remain available for crane controls — holding a radio handset during a pick is a prohibited distraction.',
            },
            {
              question: 'The designated signaler steps behind a concrete barrier and you can no longer see them. What must you do?',
              options: [
                'Use the last signal received and complete the movement slowly',
                'Stop all crane movement until visual contact with the signaler is restored or an alternate signal method is established',
                'Switch to radio communication immediately and continue the lift',
                'Ask a nearby worker to relay signals from the signaler',
              ],
              correctIndex: 1,
              explanation:
                '230 CMR 6.00 and OSHA 1926.1419 both require the operator to stop if visual contact with the signaler is lost. A relay system using bystanders is not an approved signal method. Stop, verify why contact was lost, and re-establish a proper signal arrangement before resuming any crane movement.',
            },
            {
              question: 'Which SAE standard is referenced by 230 CMR 6.00 for hand signals on crane operations covered by the 1B restriction?',
              options: ['SAE J386', 'SAE J765', 'SAE J1307', 'SAE J320a'],
              correctIndex: 2,
              explanation:
                'SAE J1307 is the hand signal standard referenced by 230 CMR 6.00 for crane operations. SAE J386 covers seat belts, J765 is the crane stability test code, and J320a covers ROPS for off-road machines. Knowing which standard applies to which equipment type is a common exam topic.',
            },
          ],
        },
      ],
    },
    {
      id: '1b-m4',
      title: 'OSHA & Exam Review',
      orderInCourse: 4,
      estimatedHours: 6,
      sessions: [
        {
          id: '1b-m4-s1',
          title: '29 CFR 1926.550',
          durationHours: 2,
          learningObjectives: [
            'Explain the historical role of 29 CFR 1926.550 and its replacement by 29 CFR 1926 Subpart CC',
            'Identify the key sections of 29 CFR 1926 Subpart CC that govern 1B crane operations',
            'Apply OSHA 1926.1408 power-line rules and 1926.1412 inspection rules to realistic scenarios',
            'Describe the operator certification and qualification requirements under 1926.1427',
          ],
          topics: [
            '29 CFR 1926.550: the original OSHA crane standard (pre-2010); replaced by Subpart CC but still referenced on older state exams',
            'Subpart CC (29 CFR 1926.1400–1926.1442): the current comprehensive cranes & derricks in construction standard',
            '1926.1400 — Scope: applies to cranes, derricks, and similar equipment used in construction',
            '1926.1401 — Definitions: competent person, qualified person, qualified rigger, rated capacity, working radius',
            '1926.1402 — Ground conditions: firm, drained, graded; controlling entity responsibility',
            '1926.1407/1408 — Power line safety: minimum clearances, presumed energized, Table A distances',
            '1926.1412 — Inspections: pre-shift, monthly, annual; documentation requirements',
            '1926.1413 — Wire rope inspection: removal-from-service criteria (broken wires, kinks, corrosion)',
            '1926.1416 — Operational aids: anti-two-block (Category I, 7-day repair), LMI/load weighing (Category II, 30-day repair)',
            '1926.1417 — Operation: load chart in cab, brake test at 90% line pull, prohibited operations',
            '1926.1419–1921 — Signals: one signaler, emergency stop, radio requirements',
            '1926.1427 — Operator certification: employers must ensure operators are qualified',
            '1926.1431 — Hoisting personnel: strict requirements for personnel platforms (written plan, trial lift, fall protection)',
          ],
          resources: [
            {
              label: '29 CFR 1926 Subpart CC — Cranes and Derricks in Construction (OSHA)',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926SubpartCC',
              type: 'osha',
              required: true,
            },
            {
              label: 'eCFR — 29 CFR Part 1926 Subpart CC full text',
              url: 'https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1926/subpart-CC',
              type: 'osha',
              required: true,
            },
            {
              label: 'MGL Chapter 146 §53 (malegislature.gov)',
              url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXX/Chapter146/Section53',
              type: 'regulation',
              required: false,
            },
          ],
          selfCheck: [
            {
              question: 'OSHA 29 CFR 1926.550 was the original crane standard. Which regulation replaced it for construction crane operations?',
              options: [
                '29 CFR 1926.1400–1926.1442 (Subpart CC — Cranes and Derricks in Construction)',
                '29 CFR 1910.179 (Overhead and Gantry Cranes)',
                '29 CFR 1926.600 (Equipment)',
                'ASME B30.5 (Mobile and Locomotive Cranes)',
              ],
              correctIndex: 0,
              explanation:
                '29 CFR 1926 Subpart CC (sections 1926.1400–1926.1442), which took effect in 2010, replaced the original crane provisions in 1926.550. Subpart CC is significantly more comprehensive. The exam may reference both, so know that 1926.550 is old law and Subpart CC is current.',
            },
            {
              question: 'Under OSHA 1926.1427, what is an employer\'s obligation regarding crane operator qualification?',
              options: [
                'Employers must verify operators hold a state hoisting license — no additional obligation exists',
                'Employers must ensure crane operators are qualified to operate the specific equipment being used',
                'Employers need only verify operators have completed any OSHA 10-hour construction course',
                'No operator qualification is required for cranes under 25-ton capacity',
              ],
              correctIndex: 1,
              explanation:
                'OSHA 1926.1427 requires employers to ensure each crane operator is qualified to operate the specific equipment. Qualification can be demonstrated through third-party certification (e.g., NCCCO), an audited employer program, or a state/local license meeting federal criteria. The employer — not OSHA — bears the verification burden.',
            },
            {
              question: 'Under OSHA 1926.1431, what is required before using a crane to hoist personnel on a personnel platform?',
              options: [
                'Only verbal approval from the site superintendent is required',
                'A written plan, a trial lift, and full compliance with all 1926.1431 requirements including fall protection',
                'A 50% reduction in rated capacity and a spotter on the ground',
                'Personnel hoisting is prohibited in all construction applications',
              ],
              correctIndex: 1,
              explanation:
                'OSHA 1926.1431 imposes strict requirements for hoisting personnel on a crane-suspended platform: a written plan, a trial lift to the maximum height and extent of lift, a pre-lift meeting, fall protection for all occupants, and limiting the use to situations where other safer means are infeasible. This is not casual work.',
            },
            {
              question: 'Which OSHA definition distinguishes a "competent person" from a "qualified person"?',
              options: [
                'A competent person holds a college degree in engineering; a qualified person does not',
                'A competent person can identify hazards and has authority to correct them; a qualified person has specialized knowledge, training, or credentials sufficient for the specific task',
                'They are synonymous terms used interchangeably in Subpart CC',
                'A competent person must be NCCCO-certified; a qualified person must hold a state license',
              ],
              correctIndex: 1,
              explanation:
                'OSHA 1926.1401 defines these differently: a competent person can identify existing and predictable hazards and has authority to take corrective measures. A qualified person has specific knowledge, training, or certification for the task — such as engineering judgment or equipment-specific expertise. Pre-shift inspections need a competent person; annual inspections need a qualified person.',
            },
            {
              question: 'The Category I operational aids (anti-two-block, boom hoist limiter) are found to be non-functional during a pre-shift inspection. How long does the employer have to repair them before the crane cannot be operated?',
              options: [
                '24 hours',
                '7 calendar days (with temporary alternative measures in place)',
                '30 calendar days',
                'Immediately — the crane must not be operated until repaired',
              ],
              correctIndex: 1,
              explanation:
                'OSHA 1926.1416 categorizes anti-two-block devices and boom hoist limiters as Category I aids: they must be repaired within 7 calendar days. During that window, the employer must implement the specified temporary alternative measures (cable marking, spotter) or halt operations requiring those aids. Category II aids (LMI, boom angle indicator) have a 30-day window.',
            },
            {
              question: 'Which OSHA section specifically addresses the requirement that the load chart must be in the crane cab at all times during operation?',
              options: [
                '1926.1412 (Inspections)',
                '1926.1416 (Operational aids)',
                '1926.1417 (Operation)',
                '1926.1402 (Ground conditions)',
              ],
              correctIndex: 2,
              explanation:
                'OSHA 1926.1417 (Operation) requires that rated capacities (load charts), recommended operating speeds, special hazard warnings, instructions, and operator\'s manual be readily available in the cab at all times. If the load chart is missing, operations must cease until it is provided.',
            },
          ],
        },
        {
          id: '1b-m4-s2',
          title: 'Practice Exam 1',
          durationHours: 2,
          learningObjectives: [
            'Apply MA licensing rules, load chart math, and OSHA Subpart CC requirements to a timed practice exam',
            'Identify knowledge gaps across modules 1–3 for targeted review',
            'Practice the process of eliminating wrong answers when uncertain',
            'Achieve a simulated score of 70% or higher on all major topic areas',
          ],
          topics: [
            'Review: MGL Chapter 146 §53 — who needs a license, exemptions, penalties',
            'Review: 230 CMR 6.00 — approved signaler rule, SAE J1307 hand signals, operating radius prohibition',
            'Review: load chart reading — four variables, outrigger configuration, rigging deductions, interpolation',
            'Review: outrigger deployment — full vs. partial extension, leveling, ground bearing pressure',
            'Review: hydraulic system — pre-shift checks, drift, contamination, relief valves',
            'Review: wire rope — OSHA 1926.1413 removal-from-service conditions (broken wires per lay, kinking, diameter reduction)',
            'Review: anti-two-block devices — what two-blocking is, Category I aid, 7-day repair rule',
            'Review: power-line safety — Table A clearances (10/15/20 ft), 20-ft default for unknown voltage',
            'Review: prohibited operations — no side-load, no drag, no lift over front on rubber without approval',
            'Review: operator obligations — brake test at 90% line pull, never leave suspended load unattended',
            'Timed practice: 50 multiple-choice questions at exam pace (approximately 1 minute per question)',
            'Scoring technique: always eliminate obviously wrong answers first; there is no penalty for guessing',
          ],
          resources: [
            {
              label: 'MA Hoisting Licensing & Exams (mass.gov)',
              url: 'https://www.mass.gov/hoisting-licensing-and-exams',
              type: 'reference',
              required: true,
            },
            {
              label: '29 CFR 1926 Subpart CC — Cranes and Derricks in Construction (OSHA)',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926SubpartCC',
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
              question: 'A load chart shows 14,000 lbs capacity at 25 ft radius (outriggers fully extended). Your rigging — hook block, slings, and shackles — weighs 1,200 lbs. What is the maximum net load you can lift?',
              options: ['14,000 lbs', '12,800 lbs', '15,200 lbs', '13,300 lbs'],
              correctIndex: 1,
              explanation:
                'Rated capacity of 14,000 lbs includes the rigging. Net load = 14,000 − 1,200 = 12,800 lbs. This is the weight of the actual load (material or object) you can pick. Getting this calculation wrong on a real lift can tip the crane.',
            },
            {
              question: 'Which of the following best describes the 230 CMR 6.00 rule about persons within the working radius during crane operations?',
              options: [
                'Personnel may stand within the radius if they wear a hard hat and high-visibility vest',
                'Only the signal person may be within the working radius',
                'No persons may be within the working radius during crane operation except under specific conditions approved by the site competent person',
                'A maximum of three workers may be within the radius if the operator can see them',
              ],
              correctIndex: 2,
              explanation:
                '230 CMR 6.00 prohibits persons within the working radius during crane operation. Exceptions for hooking/unhooking personnel exist only under specific OSHA 1926.1425 conditions. The general rule is: keep people out of the load path and swing radius.',
            },
            {
              question: 'You are preparing for a lift and the boom angle indicator is not working. This is a Category II operational aid. How long do you have to repair it before you must stop operations?',
              options: [
                '7 calendar days',
                '24 hours',
                '30 calendar days (if parts are ordered within 7 days)',
                'Immediately — the crane must be tagged out',
              ],
              correctIndex: 2,
              explanation:
                'Boom angle indicators are Category II operational aids under OSHA 1926.1416. The employer has 30 calendar days to repair them, provided parts are ordered within 7 days of identifying the deficiency. During that period, the temporary alternative measure (manually measuring boom angle) must be used.',
            },
            {
              question: 'Under OSHA 1926.1413, what is the broken-wire removal-from-service threshold for a running wire rope (standard rotation-resistant hoist rope)?',
              options: [
                'Any single broken wire requires rope removal',
                'Three broken wires in one lay or two in one strand per lay',
                'Six randomly distributed breaks in one rope lay, or three in one strand per lay',
                'Ten total broken wires across the entire rope length',
              ],
              correctIndex: 2,
              explanation:
                'For running ropes, OSHA 1926.1413 requires removal when there are six randomly distributed broken wires in one rope lay or three broken wires in one strand within one lay. These thresholds apply to standard hoist ropes — rotation-resistant ropes have lower thresholds (two breaks in six rope diameters).',
            },
            {
              question: 'What is the maximum civil penalty per day under MGL §53 for unlicensed crane operation in Massachusetts?',
              options: ['$100', '$250', '$500', '$1,000'],
              correctIndex: 2,
              explanation:
                'MGL §53 allows civil penalties up to $500 per day for each day of unlicensed hoisting equipment operation. Both the unlicensed operator and the employer who directed the work can be penalized. Every day of operation is a separate violation.',
            },
            {
              question: 'You are lifting a load that is 92% of the maximum line pull. What must you do before completing the lift per OSHA 1926.1417?',
              options: [
                'Nothing special — 92% is within rated capacity and no additional steps are required',
                'Extend the outriggers an extra foot for additional safety margin',
                'Test the brakes by hoisting the load slightly off the ground and applying the brakes before proceeding with the lift',
                'Reduce the load to 85% of rated capacity before proceeding',
              ],
              correctIndex: 2,
              explanation:
                'OSHA 1926.1417 requires a brake test any time you are at 90% or more of maximum line pull: lift the load just off the ground, apply the brakes, and verify they hold before continuing. This ensures the braking system can control the near-maximum load before you are committed to the full pick.',
            },
            {
              question: 'Under 230 CMR 6.00, if the operator cannot see the designated signal person, what must happen?',
              options: [
                'The operator may proceed using the last signal received',
                'A second worker may relay signals from the signaler to the operator',
                'All crane movement must stop until visual contact is restored',
                'The operator switches to radio communication automatically',
              ],
              correctIndex: 2,
              explanation:
                '230 CMR 6.00 requires all crane movement to stop when the operator loses visual contact with the designated signaler. A relay system is not an approved alternative — only direct visual contact or an OSHA-compliant electronic signal system qualifies.',
            },
          ],
        },
        {
          id: '1b-m4-s3',
          title: 'Practice Exam 2',
          durationHours: 2,
          learningObjectives: [
            'Demonstrate mastery of all 1B content areas through a second full-length practice exam',
            'Apply scenario-based reasoning to multi-step crane operation and safety questions',
            'Confirm readiness for the actual Massachusetts 1B hoisting engineer exam',
            'Review any remaining weak areas before sitting for the exam',
          ],
          topics: [
            'Scenario review: setting up on a construction site — ground check, outrigger deployment, leveling, LMI configuration',
            'Scenario review: receiving a pick list — load weight, rigging weight, radius, boom length, which load chart column',
            'Scenario review: power lines on the site — identify voltage, apply Table A, determine if lift is feasible or requires deenergization',
            'Scenario review: pre-shift inspection deficiency found — tag out or proceed? which OSHA section applies?',
            'Scenario review: the signaler gives a signal the operator doesn\'t recognize — what to do?',
            'Scenario review: the LMI alarm sounds at 90% capacity during a pick — what does OSHA require?',
            'Scenario review: wire rope with seven broken wires distributed over one lay — what action?',
            'Deep review: load chart reading with jib attachment — which chart page, capacity differences',
            'Deep review: renewal and penalty questions — license lapse, employer liability, accident reporting',
            'Deep review: the 1B class scope — what it covers, what requires 1A or 1C instead',
            'Exam strategy: time management, flagging uncertain questions, systematic elimination of distractors',
            'Final review of all key regulatory citations: MGL §53, 230 CMR 6.00, 1926.1402, 1926.1408, 1926.1412, 1926.1413, 1926.1416, 1926.1417, 1926.1419',
          ],
          resources: [
            {
              label: 'MA Hoisting Licensing & Exams (mass.gov)',
              url: 'https://www.mass.gov/hoisting-licensing-and-exams',
              type: 'reference',
              required: true,
            },
            {
              label: 'MGL Chapter 146 §53 — Licensing requirement (malegislature.gov)',
              url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXX/Chapter146/Section53',
              type: 'regulation',
              required: true,
            },
            {
              label: '29 CFR 1926 Subpart CC — Cranes and Derricks in Construction (OSHA)',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926SubpartCC',
              type: 'osha',
              required: true,
            },
          ],
          selfCheck: [
            {
              question: 'You arrive at a job site with a telescoping-boom crane. The site has an overhead power line at unknown voltage crossing part of the work area. What minimum clearance applies to all parts of the crane, load line, and load?',
              options: ['10 feet', '15 feet', '20 feet', '25 feet'],
              correctIndex: 2,
              explanation:
                'When voltage is unknown, OSHA 1926.1408 requires maintaining a minimum of 20 feet from all parts of the crane, load line, and load. All power lines must be treated as energized until the utility confirms otherwise in writing. If the work cannot be done within that clearance, you must request deenergization or re-plan the lift.',
            },
            {
              question: 'You find a wire rope with two broken wires within a six rope-diameter length on a rotation-resistant hoist rope. What action is required?',
              options: [
                'Continue operation — two broken wires is within the threshold for standard ropes',
                'Remove the rope from service — two breaks in six rope diameters meets the removal threshold for rotation-resistant ropes',
                'Reduce lifts to 75% of rated capacity until end of shift, then replace the rope',
                'Document the finding and re-inspect after 24 hours',
              ],
              correctIndex: 1,
              explanation:
                'OSHA 1926.1413 sets lower thresholds for rotation-resistant ropes than for standard ropes: two broken wires in six rope diameters (or four in 30 diameters) requires removal from service. Rotation-resistant ropes have a different construction that is more sensitive to broken wires — the lower threshold reflects this.',
            },
            {
              question: 'A load chart shows 10,000 lbs at 30-foot radius and 8,000 lbs at 35-foot radius, both on outriggers fully extended. Your estimated radius is 31 feet. What rated capacity should you use?',
              options: [
                '10,000 lbs — you are within the 30-foot radius column',
                '9,400 lbs — interpolate 20% of the way from 10,000 toward 8,000',
                '8,000 lbs — always use the lower (more conservative) value when between chart entries',
                '9,000 lbs — split the difference between the two entries',
              ],
              correctIndex: 2,
              explanation:
                'When your working radius falls between two load chart entries, use the lower (more conservative) rated capacity — in this case, the 8,000-lb value from the 35-foot column. Crane tip-over risk does not decrease linearly with radius, so interpolating toward a higher capacity at an intermediate radius is not conservative enough.',
            },
            {
              question: 'An operator discovers that the ground under one outrigger has shifted, causing the crane to be off-level by 2% (beyond the manufacturer\'s 1% tolerance). What must the operator do?',
              options: [
                'Reduce rated capacity by 2% for each degree off level and continue operations',
                'Stop operations, lower any suspended load, and correct the leveling issue before resuming',
                'Switch to the "on rubber" column in the load chart as a conservative alternative',
                'Notify the site superintendent but continue if the lift is under 50% of rated capacity',
              ],
              correctIndex: 1,
              explanation:
                'Load charts assume the crane is level within the manufacturer\'s specified tolerance (typically 1%). Out-of-level conditions shift the effective working radius, potentially pushing loads beyond the chart\'s rated conditions. The operator must stop, lower any load, and re-level the crane before resuming. There is no approved percentage-reduction shortcut.',
            },
            {
              question: 'The 1B restriction covers telescoping-boom cranes with or without wire ropes. Which restriction would an operator need to also operate a fixed lattice-boom crane?',
              options: ['1B covers both telescoping and lattice booms', '1C', '1A', '2A'],
              correctIndex: 2,
              explanation:
                'The Massachusetts Class 1A license covers all hoisting equipment including lattice-boom cranes, guy derricks, and all equipment in the lower classes (1B, 1C, 1D, and Class 4 specialty). The 1B restriction is limited to telescoping-boom cranes. To operate a fixed lattice boom crane, a 1A license is required.',
            },
            {
              question: 'Which of the following OSHA Subpart CC sections requires documentation of monthly crane inspections to be retained for a minimum of three months?',
              options: [
                '1926.1417 (Operation)',
                '1926.1412 (Inspections)',
                '1926.1413 (Wire rope inspection)',
                '1926.1416 (Operational aids)',
              ],
              correctIndex: 1,
              explanation:
                'OSHA 1926.1412 establishes all inspection requirements and documentation retention periods. Monthly inspection records (items checked, results, inspector name, signature, date) must be retained for at least three months. Annual inspection records must be retained for 12 months.',
            },
            {
              question: 'Which of the following is the correct action when the LMI (load moment indicator) display goes blank during a lift?',
              options: [
                'Continue the lift slowly and have the signal person monitor for signs of overload',
                'Stop operations requiring LMI data until the system is restored or a compliant alternative is in place',
                'Switch to estimating load weight visually and continue at 75% of estimated capacity',
                'The LMI is a Category I aid — cease all operations and do not restart until repaired today',
              ],
              correctIndex: 1,
              explanation:
                'The LMI (load moment indicator or load weighing device) is a Category II operational aid under OSHA 1926.1416. If it fails, operations requiring that information must stop until either the device is restored or the temporary alternative measure (calculating load from known sources and monitoring during the initial hoist) is implemented. It is not an immediate crane shutdown — but you cannot proceed without load information.',
            },
          ],
        },
      ],
    },
  ],
};
