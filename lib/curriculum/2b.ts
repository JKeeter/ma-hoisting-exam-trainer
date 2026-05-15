import { LicenseRestriction } from '../types';

export const restriction_2b: LicenseRestriction = {
  code: '2B',
  name: 'Specialty excavating',
  description: 'Specialty excavating equipment per OPSI scope.',
  equipmentCovered: ['Specialty excavating'],
  totalHours: 18,
  modules: [
    {
      id: '2b-m1',
      title: 'Foundation',
      orderInCourse: 1,
      estimatedHours: 4,
      sessions: [
        {
          id: '2b-m1-s1',
          title: 'Regulations',
          durationHours: 2,
          learningObjectives: [
            'State the minimum age, exam passing score, and license duration for a 2B license',
            'Identify the threshold conditions that trigger a hoisting license requirement under MGL Chapter 146',
            'Explain the relationship between MGL Chapter 146 and 230 CMR 6.00',
            'List the key exemptions and the penalties for unlicensed operation',
          ],
          topics: [
            'MGL Chapter 146 § 53 — who must hold a hoisting license to operate hoisting machinery',
            'Minimum age requirement: 18 years old',
            'License duration and renewal: 2-year cycle through the MA Office of Public Safety and Inspections (OPSI)',
            'Exam passing score: 70% minimum; 60-day waiting period after a failed attempt',
            '$75 non-refundable application fee per restriction class',
            '230 CMR 6.00 — the regulation that implements MGL Chapter 146 with technical and safety standards',
            'Exemptions under MGL §53: agricultural operators on their own land, public utility supervised programs, industrial lift trucks on company property, vocational schools, approved apprenticeship programs',
            'Civil penalty up to $500 per day for unlicensed operation; employer shares liability under MGL §66',
            'License classification: Group 2 (Excavating) — the 2B restriction within that group',
          ],
          resources: [
            {
              label: 'MGL Chapter 146 § 53 — Licensing requirement',
              url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXX/Chapter146/Section53',
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
              label: 'MA Hoisting Licensing & Exams (mass.gov)',
              url: 'https://www.mass.gov/hoisting-licensing-and-exams',
              type: 'reference',
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
              question: 'What is the minimum passing score on the Massachusetts 2B hoisting engineer exam?',
              options: ['60%', '65%', '70%', '75%'],
              correctIndex: 2,
              explanation:
                'The passing score is 70%. Score below 70% and you must wait 60 days before retesting — use that time to study the areas where you scored poorly.',
            },
            {
              question: 'How long is a Massachusetts hoisting engineer license valid before renewal is required?',
              options: ['1 year', '2 years', '3 years', '5 years'],
              correctIndex: 1,
              explanation:
                'The hoisting license is valid for 2 years. Always verify the current renewal cycle and any continuing-education requirement at mass.gov, since the rules can change.',
            },
            {
              question: 'Which of the following operators is EXEMPT from holding a Massachusetts hoisting license?',
              options: [
                'A utility contractor operating a backhoe loader on a city street',
                'A farmhand operating a backhoe loader exclusively on agricultural land',
                'A landscaper operating a front-end loader on a residential job site',
                'A municipal worker operating a backhoe loader to repair a water main',
              ],
              correctIndex: 1,
              explanation:
                'Agricultural operators working on their own land are explicitly exempt under MGL §53. The other operators are doing construction or utility work that requires a hoisting license regardless of who owns the property.',
            },
            {
              question: 'What is the relationship between MGL Chapter 146 and 230 CMR 6.00?',
              options: [
                'MGL Chapter 146 is federal law; 230 CMR 6.00 is state law',
                'MGL Chapter 146 is the statute passed by the legislature; 230 CMR 6.00 is the implementing regulation with technical and safety standards',
                'They are two names for the same document',
                '230 CMR 6.00 supersedes MGL Chapter 146 in all cases',
              ],
              correctIndex: 1,
              explanation:
                'MGL (Massachusetts General Law) is statute — passed by the legislature. 230 CMR 6.00 is a regulation that implements and expands Chapter 146 with the specific technical and operating requirements you must follow.',
            },
            {
              question: 'What is the non-refundable application fee for each restriction class when applying for a Massachusetts hoisting engineer license?',
              options: ['$25', '$50', '$75', '$100'],
              correctIndex: 2,
              explanation:
                'The application fee is $75 per restriction class and is non-refundable — you do not get it back if you fail the exam or your application is denied. Confirm the current fee at mass.gov before applying.',
            },
            {
              question: 'What is the minimum age to obtain a Massachusetts hoisting engineer license?',
              options: ['16', '17', '18', '21'],
              correctIndex: 2,
              explanation:
                'MGL Chapter 146 sets the minimum age at 18. Applicants under 18 cannot obtain a hoisting license regardless of experience or training.',
            },
            {
              question: 'A contractor directs an unlicensed worker to operate a backhoe loader "just for the morning." Who can face penalties?',
              options: [
                'No one, if no accident occurs',
                'Only the worker',
                'Only the contractor',
                'Both the worker and the contractor — each day of unlicensed operation is a separate violation',
              ],
              correctIndex: 3,
              explanation:
                'MGL §53 and §66 create liability for both the person operating without a license and the employer who directs or permits it. Civil penalties run up to $500 per day, and "just for the morning" does not reduce the violation.',
            },
          ],
        },
        {
          id: '2b-m1-s2',
          title: 'Scope',
          durationHours: 2,
          learningObjectives: [
            'State exactly which equipment the 2B restriction authorizes you to operate',
            'Explain how the Class 2 restriction hierarchy works (2A through 2D)',
            'List the four 230 CMR 6.00 operating rules that apply to all Class 2 equipment',
            'Identify the SAE hand signal standard required and who may direct the operator',
          ],
          topics: [
            '2B scope: combination loader/backhoe machines (backhoe loaders / TLBs) with manufacturer-approved attachments',
            '2B also includes 2C equipment (front-end loaders) and 2D equipment (compact hoisting machinery up to 10,000 lb GVW)',
            'Class 2 hierarchy: 2A is the broadest (all excavators, backhoes, loaders); each later letter covers progressively less equipment',
            '2B does NOT authorize full-size crawler or rubber-tired excavators — that requires a 2A license',
            'Operating equipment outside your restriction is unlicensed operation under MGL §53',
            '230 CMR 6.00 operating rules: only an approved signaler may direct the operator',
            'No unauthorized personnel on the machine during operation; one apprentice permitted under direct supervision',
            'No persons within the working radius during loader or backhoe movement; operators must follow manufacturer specifications',
            'SAE J1307 hand signals required by 230 CMR 6.00 for excavating machinery',
          ],
          resources: [
            {
              label: 'Guide to Engineering Restrictions (mass.gov)',
              url: 'https://www.mass.gov/info-details/guide-to-engineering-restrictions',
              type: 'reference',
              required: true,
            },
            {
              label: '230 CMR 6.00 — Hoisting Machinery (mass.gov)',
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
          ],
          selfCheck: [
            {
              question: 'Which machine does a 2B license authorize you to operate?',
              options: [
                'A full-size crawler excavator',
                'A combination loader/backhoe machine (backhoe loader)',
                'A tower crane',
                'A truck-mounted hydraulic crane',
              ],
              correctIndex: 1,
              explanation:
                'The 2B restriction covers combination loader/backhoe machines with manufacturer-approved attachments. Crawler excavators require a 2A license, and cranes fall under Class 1 — not Class 2.',
            },
            {
              question: 'You hold only a 2B license. A job calls for a full-size rubber-tired excavator. May you operate it?',
              options: [
                'Yes, a backhoe loader and an excavator are close enough',
                'Yes, if a 2A holder supervises you',
                'No — a full-size excavator requires a 2A license; operating it on a 2B is unlicensed operation',
                'Yes, for up to 8 hours per project',
              ],
              correctIndex: 2,
              explanation:
                'A 2B does not authorize full-size excavators. Operating equipment outside your restriction is unlicensed operation under MGL §53, exposing you and your employer to penalties of up to $500 per day.',
            },
            {
              question: 'How does the Class 2 restriction hierarchy work?',
              options: [
                'Each letter covers entirely separate, unrelated equipment',
                '2A is the broadest; 2B, 2C, and 2D each cover progressively less equipment, and 2A includes them all',
                '2D is the broadest and 2A the narrowest',
                'The letters indicate exam difficulty, not equipment scope',
              ],
              correctIndex: 1,
              explanation:
                'In Class 2, the "A" license covers everything in the group; each subsequent letter covers less. A 2B holder can operate 2B, 2C, and 2D equipment, but a 2C holder cannot operate a backhoe loader.',
            },
            {
              question: 'Besides combination loader/backhoe machines, what other equipment does a 2B license cover?',
              options: [
                'Tower cranes and gantry cranes',
                'Front-end loaders (2C) and compact hoisting machinery (2D)',
                'Only attachments, not whole machines',
                'Nothing — 2B is limited strictly to backhoe loaders',
              ],
              correctIndex: 1,
              explanation:
                'Because the Class 2 hierarchy flows downward, a 2B license also authorizes 2C equipment (front-end loaders) and 2D equipment (compact hoisting machinery up to 10,000 lb GVW).',
            },
            {
              question: 'Under 230 CMR 6.00, who is the ONLY person authorized to direct a backhoe loader operator\'s movements?',
              options: [
                'The general contractor\'s superintendent',
                'Any crew member on site',
                'The approved signaler assigned to the machine',
                'The operator and the site safety officer jointly',
              ],
              correctIndex: 2,
              explanation:
                '230 CMR 6.00 requires that only an approved signaler direct the operator. Taking direction from anyone else — even a supervisor — violates the regulation and creates unsafe conditions.',
            },
            {
              question: 'Which SAE standard specifies the hand signals required by 230 CMR 6.00 for excavating machinery?',
              options: ['SAE J386', 'SAE J1307', 'SAE J320a', 'SAE J237'],
              correctIndex: 1,
              explanation:
                'SAE J1307 is the standard hand signal set for excavating machinery required by 230 CMR 6.00. SAE J386 covers seat belts, J320a covers ROPS, and J237 covers braking.',
            },
            {
              question: 'Beyond the licensed operator, how many additional people may be on a backhoe loader during operation under 230 CMR 6.00?',
              options: [
                'No additional personnel — operator only',
                'One apprentice under the direct supervision of the operator',
                'Two helpers if the superintendent approves',
                'As many as can fit in the cab',
              ],
              correctIndex: 1,
              explanation:
                '230 CMR 6.00 allows one apprentice in addition to the licensed operator, but only under direct supervision. Unauthorized passengers on the machine at any time violate the regulation.',
            },
          ],
        },
      ],
    },
    {
      id: '2b-m2',
      title: 'Equipment',
      orderInCourse: 2,
      estimatedHours: 5,
      sessions: [
        {
          id: '2b-m2-s1',
          title: 'Systems',
          durationHours: 2,
          learningObjectives: [
            'Identify and name the major systems of a combination loader/backhoe machine',
            'Explain the difference between the loader (front) end and the backhoe (rear) end',
            'Describe the stabilizer/outrigger system and why it is essential before backhoe digging',
            'Explain ROPS/FOPS protection and seat belt requirements for backhoe loaders',
          ],
          topics: [
            'Two work ends on one machine: front loader arms and bucket; rear backhoe boom, dipper, and bucket',
            'Loader end: lift arms, loader bucket, cutting edge, bucket cylinders, quick-attach plate',
            'Backhoe end: boom, dipper (stick), bucket, swing frame; controlled from a rear-facing seat or swivel seat',
            'Stabilizers (outriggers): hydraulic legs that must be lowered to level and steady the machine before backhoe operation',
            'Stabilizer pads: street pads vs. ground (grouser) pads; correct pad for the surface',
            'Loader-end float and down-pressure functions',
            'ROPS (Rollover Protective Structure) and FOPS (Falling Object Protective Structure) — required and must never be modified or operated if damaged',
            'Seat belt requirement: SAE J386 standard; mandatory whenever a ROPS is present',
            'Reverse signal alarm required by 29 CFR 1926.602 when the operator\'s rear view is obstructed',
            'Travel configuration: backhoe locked in transport position, loader bucket low, stabilizers raised',
          ],
          resources: [
            {
              label: '29 CFR 1926.602 — Material handling & earthmoving equipment',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.602',
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
              question: 'What must you do with the stabilizers before operating the backhoe end of a combination loader/backhoe machine?',
              options: [
                'Raise them fully to allow the machine to flex',
                'Lower them to level and steady the machine',
                'Leave them in the travel position',
                'Remove the stabilizer pads first',
              ],
              correctIndex: 1,
              explanation:
                'The stabilizers (outriggers) must be lowered to level and stabilize the machine before backhoe digging. Digging on tires alone makes the machine unstable and can cause it to rock, hop, or tip.',
            },
            {
              question: 'A combination loader/backhoe machine has how many separate work ends?',
              options: [
                'One — the backhoe only',
                'One — the loader only',
                'Two — a front loader and a rear backhoe',
                'Three — loader, backhoe, and a center auger',
              ],
              correctIndex: 2,
              explanation:
                'A backhoe loader (TLB) combines two work ends on one chassis: a front-end loader and a rear-mounted backhoe. The operator must understand the controls, balance, and hazards of both.',
            },
            {
              question: 'An operator drops a backhoe loader into a ditch and the ROPS shows a visible bend. What is the required action?',
              options: [
                'Straighten the bend and keep working',
                'Note the damage and report it at end of shift',
                'Remove the machine from service immediately — a damaged ROPS cannot protect the operator',
                'Have the site safety officer judge whether it is still functional',
              ],
              correctIndex: 2,
              explanation:
                'Any structural damage or modification to a ROPS requires immediate removal from service. A bent ROPS has unknown residual strength and cannot reliably protect the operator in a rollover. Only a manufacturer-approved rebuild restores certification.',
            },
            {
              question: 'Under 29 CFR 1926.602, when is a reverse signal alarm required on a backhoe loader?',
              options: [
                'Only at night',
                'Only when traveling faster than 5 mph',
                'When the operator\'s view to the rear is obstructed (or a signaler must direct the backing)',
                'Never — backhoe loaders are exempt',
              ],
              correctIndex: 2,
              explanation:
                '1926.602 requires an audible reverse alarm distinguishable from surrounding noise when the operator\'s rear view is obstructed; otherwise a designated employee must signal that it is safe to back up.',
            },
            {
              question: 'Which configuration is correct for traveling (driving) a backhoe loader between locations?',
              options: [
                'Backhoe extended for counterweight, loader bucket raised high',
                'Backhoe locked in transport position, loader bucket carried low, stabilizers raised',
                'Stabilizers down for stability while driving',
                'Backhoe bucket curled under the rear axle for ground clearance',
              ],
              correctIndex: 1,
              explanation:
                'For travel, the backhoe is locked in its transport position, the loader bucket is carried low for visibility and stability, and the stabilizers are fully raised so they cannot snag the ground.',
            },
            {
              question: 'When is a seat belt required on a backhoe loader equipped with a ROPS?',
              options: [
                'Only when operating on a slope',
                'Only when traveling on a public road',
                'Whenever the ROPS is present — the belt keeps the operator within the protective zone',
                'Only if the machine lacks a cab door',
              ],
              correctIndex: 2,
              explanation:
                'A ROPS only protects the operator if they stay inside its protective zone during a rollover. The SAE J386 seat belt is mandatory whenever a ROPS is fitted — being thrown from the cab is a leading cause of rollover fatalities.',
            },
            {
              question: 'What is the purpose of the loader-end "float" function?',
              options: [
                'It lets the loader bucket follow ground contour without applying down-pressure',
                'It raises the loader arms automatically when the engine idles',
                'It locks the loader bucket for transport',
                'It pressurizes the bucket cylinders for extra breakout force',
              ],
              correctIndex: 0,
              explanation:
                'Float allows the loader bucket to ride along the ground surface following its contour, which is used for back-dragging and grading. It prevents the arms from forcing the bucket into the ground.',
            },
          ],
        },
        {
          id: '2b-m2-s2',
          title: 'Hydraulics',
          durationHours: 1.5,
          learningObjectives: [
            'Explain the hydraulic pressure hazards specific to backhoe loaders',
            'Identify the correct, safe method to check for hydraulic leaks',
            'Describe the minimum hydraulic hose safety factor and removal-from-service criteria',
            'Recognize signs of hydraulic fluid contamination and overheating',
          ],
          topics: [
            'Backhoe loader hydraulics power both the loader and backhoe circuits and routinely exceed 2,000 psi',
            'Hydraulic injection injury: high-pressure fluid can penetrate skin without an obvious wound and cause amputation or death',
            'Correct leak detection: use cardboard or a mirror from a safe distance — NEVER a bare hand',
            'Minimum hose safety factor: 4:1 burst pressure to maximum working pressure',
            'Always relieve trapped pressure before disconnecting any hose or fitting — circuits stay pressurized after shutdown',
            'Fluid condition: amber/red = normal; milky = water contamination; dark/burnt = overheating',
            'Hose removal-from-service criteria: bulges, cracks, abrasion through the outer cover, leaking or corroded fittings',
            'Auxiliary hydraulic circuit for powered attachments (hammers, augers, plate compactors)',
            'Hot oil spray and burn hazard from a burst hose under pressure',
          ],
          resources: [
            {
              label: '29 CFR 1926.602 — Material handling & earthmoving equipment',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.602',
              type: 'osha',
              required: true,
            },
            {
              label: 'OSHA Construction — Excavations safety topic',
              url: 'https://www.osha.gov/excavation-trenching',
              type: 'osha',
              required: false,
            },
          ],
          selfCheck: [
            {
              question: 'You suspect a hydraulic hose on the backhoe is leaking but cannot see fluid. How should you locate the leak?',
              options: [
                'Run your hand slowly along the hose to feel for moisture',
                'Hold a rag against the hose while the machine runs',
                'Use a piece of cardboard to catch the spray from a safe distance',
                'Pressurize the system fully and watch from the cab',
              ],
              correctIndex: 2,
              explanation:
                'NEVER use your hand. High-pressure fluid can inject into skin without an obvious wound, leading to amputation or death. Cardboard or a mirror detects the spray safely from a distance.',
            },
            {
              question: 'What is the minimum burst-pressure safety factor required for hydraulic hoses on construction equipment?',
              options: ['2:1', '3:1', '4:1', '6:1'],
              correctIndex: 2,
              explanation:
                'Hydraulic hoses must have a minimum 4:1 safety factor — a hose rated for 3,000 psi working pressure must not burst below 12,000 psi. Hoses that fail this standard must be replaced.',
            },
            {
              question: 'Before disconnecting a hydraulic hose to swap a backhoe attachment, what must you do first?',
              options: [
                'Wear rubber gloves for insulation',
                'Relieve the trapped pressure in the circuit per the manufacturer\'s procedure',
                'Idle the engine for five minutes to cool the system',
                'Nothing — quick-connect couplers release safely on their own',
              ],
              correctIndex: 1,
              explanation:
                'Hydraulic circuits stay pressurized even after shutdown. Always relieve pressure per the manufacturer\'s procedure before disconnecting any hose or coupler — a pressurized fitting can blow off with lethal force.',
            },
            {
              question: 'The hydraulic fluid in a backhoe loader looks milky white instead of its normal amber color. What does this indicate?',
              options: [
                'Normal appearance after adding fresh fluid',
                'Water contamination in the hydraulic system',
                'The fluid has reached optimal operating temperature',
                'The fluid is overdue for a viscosity upgrade',
              ],
              correctIndex: 1,
              explanation:
                'Milky fluid indicates water contamination — from a failed seal, a cracked cooler, or condensation. Water causes cavitation, rust, and seal failure. The system must be serviced before operation.',
            },
            {
              question: 'What immediate danger does a hydraulic injection injury pose?',
              options: [
                'Minor surface burns that heal in a few days',
                'Mild skin irritation from hydraulic additives',
                'High-pressure fluid driven into tissue, causing internal damage that requires emergency surgery and often results in amputation',
                'Temporary numbness with no lasting effect',
              ],
              correctIndex: 2,
              explanation:
                'An injection injury looks minor — a small entry wound — but is life-threatening. Injected fluid spreads through tissue causing necrosis. It is a medical emergency requiring immediate surgery and often results in amputation.',
            },
            {
              question: 'A hydraulic hose on the loader circuit has a visible bulge but is not yet leaking. What should you do?',
              options: [
                'Wrap the bulge with tape to reinforce it',
                'Monitor it through the shift and replace it at end of day',
                'Remove the machine from service — a bulging hose signals imminent failure',
                'Reduce loader lift pressure and keep working',
              ],
              correctIndex: 2,
              explanation:
                'A bulge means the hose reinforcement has failed internally and the cover is the only thing containing the pressure. It can burst at any moment. Tag the machine out of service and replace the hose before operating.',
            },
            {
              question: 'A backhoe loader\'s hydraulics feel sluggish and the fluid smells burnt and looks dark. What is the most likely problem?',
              options: [
                'The fluid is fresh and simply needs to circulate',
                'The system has been overheating and the fluid has degraded',
                'There is too much air in the auxiliary circuit only',
                'The hoses are over-rated for the system',
              ],
              correctIndex: 1,
              explanation:
                'Dark, burnt-smelling fluid indicates the hydraulic system has been overheating, which breaks down the oil and damages seals and pumps. The cause (low fluid, plugged cooler, restricted filter) must be found and the fluid replaced before further operation.',
            },
          ],
        },
        {
          id: '2b-m2-s3',
          title: 'Components',
          durationHours: 1.5,
          learningObjectives: [
            'Identify the wear and structural components of the loader and backhoe ends',
            'Explain quick coupler systems and how to verify an attachment is locked',
            'Describe pin, bushing, and cylinder inspection points',
            'State the removal-from-service criteria for cracked or worn structural components',
          ],
          topics: [
            'Loader components: bucket cutting edge, bolt-on edges, bucket teeth, lift arm pins and bushings, bucket pivot pins',
            'Backhoe components: boom, dipper (stick), bucket, bucket teeth, side cutters, swing posts and swing cylinders',
            'Pins and bushings: wear creates "slop" that reduces precision and accelerates structural fatigue',
            'Hydraulic cylinders: rod scoring, bent rods, seal leakage, and drift (a loaded cylinder slowly creeping down)',
            'Quick couplers: manual and hydraulic types; the attachment must be positively locked and visually verified before use',
            'Approved vs. unapproved attachments — only manufacturer-approved attachments are within the 2B restriction',
            'Counterweight and machine balance: the loaded loader bucket counterbalances the backhoe and vice versa',
            'Structural removal-from-service criteria: cracks at welds, pin bosses, or mounting ears; bent booms or dippers',
            'Tire condition on rubber-tired backhoe loaders: cuts, low pressure, and uneven wear affect stability',
          ],
          resources: [
            {
              label: '29 CFR 1926.602 — Material handling & earthmoving equipment',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.602',
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
              question: 'During a pre-shift inspection you find a crack at the mounting ear where the backhoe bucket pins to the dipper. What should you do?',
              options: [
                'Monitor the crack through the shift',
                'Field-weld the crack and continue working',
                'Remove the machine from service immediately',
                'Reduce dig depth to lower stress on the bucket',
              ],
              correctIndex: 2,
              explanation:
                'Cracks at pin bosses or mounting ears indicate imminent catastrophic failure — they expand rapidly under load. The machine must be removed from service and repaired by qualified personnel before operation resumes.',
            },
            {
              question: 'Why does using only manufacturer-approved attachments matter for a 2B operator?',
              options: [
                'Unapproved attachments void the operator\'s license entirely',
                'The 2B restriction covers combination loader/backhoe machines with manufacturer-approved attachments; an unapproved attachment can exceed the machine\'s rated design and falls outside the restriction',
                'Unapproved attachments are always heavier',
                'It only matters for warranty purposes, not safety',
              ],
              correctIndex: 1,
              explanation:
                'The 2B restriction is defined around manufacturer-approved attachments. An unapproved attachment can exceed the machine\'s designed capacity, alter its balance, and is outside the scope of what your license authorizes.',
            },
            {
              question: 'After swapping the backhoe bucket using a quick coupler, what must you do before digging?',
              options: [
                'Begin digging gently to test the connection',
                'Visually verify the coupler is positively locked and crowd the bucket against the ground to confirm engagement',
                'Trust the coupler — it cannot release once seated',
                'Only check the hydraulic hoses',
              ],
              correctIndex: 1,
              explanation:
                'Quick couplers must be positively locked and the lock visually confirmed. Operators are trained to also crowd the attachment against the ground to test engagement. Dropped buckets from unverified couplers are a known fatality cause.',
            },
            {
              question: 'A backhoe boom cylinder slowly creeps down on its own when the boom is raised and the controls are neutral. What does this "drift" indicate?',
              options: [
                'Normal behavior for a warm hydraulic system',
                'Internal cylinder seal wear or a leaking control valve',
                'The hose safety factor is too high',
                'The counterweight is too heavy',
              ],
              correctIndex: 1,
              explanation:
                'Cylinder drift means hydraulic fluid is bypassing internally — worn cylinder seals or a leaking control valve. A drifting cylinder can lower a load or boom unexpectedly and must be repaired.',
            },
            {
              question: 'What problem do worn pins and bushings on the loader arms create?',
              options: [
                'They improve precision by allowing more movement',
                'They create "slop" that reduces control accuracy and accelerates structural fatigue',
                'They have no effect as long as the bucket still moves',
                'They only matter on the backhoe end',
              ],
              correctIndex: 1,
              explanation:
                'Worn pins and bushings create excessive play ("slop"). Beyond making the machine harder to control precisely, the resulting shock loading accelerates fatigue cracking in the surrounding structure.',
            },
            {
              question: 'How do the two ends of a backhoe loader contribute to machine balance?',
              options: [
                'They are independent and do not affect each other',
                'The loaded loader bucket counterbalances the backhoe during digging, and the backhoe counterbalances the loader during loading',
                'Only the stabilizers affect balance',
                'Balance only matters when the machine is parked',
              ],
              correctIndex: 1,
              explanation:
                'The front and rear ends counterbalance each other. This is why operators are taught to keep the loader bucket loaded or grounded as a counterweight during backhoe work and to manage the backhoe position during loader work.',
            },
            {
              question: 'On a rubber-tired backhoe loader, why does tire condition matter for safe operation?',
              options: [
                'It only affects fuel economy',
                'Cuts, low pressure, and uneven wear reduce stability and can contribute to a tip-over, especially during loader and travel operations',
                'Tires have no effect because stabilizers carry all the load',
                'It only matters on public roads',
              ],
              correctIndex: 1,
              explanation:
                'The tires carry the machine during travel and loader work and partially during backhoe work. Low or uneven tire pressure changes the machine\'s level and stability and can contribute to a rollover. Tires are a pre-shift inspection item.',
            },
          ],
        },
      ],
    },
    {
      id: '2b-m3',
      title: 'Operation',
      orderInCourse: 3,
      estimatedHours: 5,
      sessions: [
        {
          id: '2b-m3-s1',
          title: 'Safety',
          durationHours: 2,
          learningObjectives: [
            'Identify the primary hazards of combination loader/backhoe operation',
            'Explain underground utility location duties and the Massachusetts Dig Safe requirement',
            'Describe the requirements of Massachusetts Jackie\'s Law (520 CMR 14.00) for trench work',
            'State the safe practices for working near overhead power lines and on slopes',
          ],
          topics: [
            'Primary hazards: tip-over, struck-by from the swinging backhoe, cave-in of the trench being dug, contact with utilities, and rollover during loader/travel work',
            'Underground utility location: contact Dig Safe (call 811) before digging — required by Massachusetts law and 29 CFR 1926.651',
            'Hand-dig "test pits" to expose marked utilities before machine excavation near them',
            'Massachusetts Jackie\'s Law (520 CMR 14.00): a permit is required before creating a trench on public or private property',
            'Jackie\'s Law: unattended trenches must be made safe — barriers, covers, or backfill — to protect the general public',
            'Jackie\'s Law: serious injuries or fatalities at a trench must be reported to the State Police within one hour',
            'Overhead power lines: maintain the required clearance; treat all lines as energized; a spotter watches clearance',
            'Slope and stability: operate up and down slopes rather than across; keep the loaded bucket low; know the machine\'s rated slope',
            'Keep all personnel out of the backhoe swing radius and away from the loader path; only an approved signaler directs the operator',
            'Never use the loader or backhoe bucket to lift or carry workers',
          ],
          resources: [
            {
              label: '520 CMR 14.00 — Excavation and Trench Safety (Jackie\'s Law)',
              url: 'https://www.mass.gov/regulations/520-CMR-1400-excavation-and-trench-safety',
              type: 'regulation',
              required: true,
            },
            {
              label: '29 CFR 1926.651 — Specific excavation requirements',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.651',
              type: 'osha',
              required: true,
            },
            {
              label: 'Trenches FAQs (mass.gov)',
              url: 'https://www.mass.gov/info-details/trenches-faqs',
              type: 'reference',
              required: false,
            },
          ],
          selfCheck: [
            {
              question: 'Before digging with a backhoe loader anywhere in Massachusetts, what must be done about underground utilities?',
              options: [
                'Nothing, if the area looks undeveloped',
                'Contact Dig Safe (call 811) and have utilities located before excavation begins',
                'Dig slowly and stop if you hit something',
                'Only check for utilities if the job is on a public way',
              ],
              correctIndex: 1,
              explanation:
                'Massachusetts law and 29 CFR 1926.651 require contacting Dig Safe (811) before excavation so utilities can be located and marked. Hitting an unmarked gas or electric line can be fatal — the call is mandatory, not optional.',
            },
            {
              question: 'Under Massachusetts Jackie\'s Law (520 CMR 14.00), when is a permit required to create a trench?',
              options: [
                'Only for trenches on public ways',
                'Only for trenches deeper than 10 feet',
                'For any trench, on public or private property',
                'Only when a municipality specifically requests one',
              ],
              correctIndex: 2,
              explanation:
                'Jackie\'s Law requires a trench permit before creating a trench on public or private property. The law was enacted after a child died in an unprotected backyard trench, so it applies broadly — not just to public ways.',
            },
            {
              question: 'Under Jackie\'s Law, how must an unattended trench be handled to protect the general public?',
              options: [
                'It may be left open if it is on private property',
                'It must be made safe — for example by covers, barriers, or backfill — to prevent unauthorized access',
                'Caution tape around it is always sufficient',
                'Only trenches near schools require protection',
              ],
              correctIndex: 1,
              explanation:
                'Jackie\'s Law requires unattended trenches to be made safe against unauthorized access using covers, barriers, or backfill. An open, unguarded trench is exactly the hazard the law was written to prevent.',
            },
            {
              question: 'Under Jackie\'s Law, how quickly must a serious injury or fatality at a trench be reported to the State Police?',
              options: [
                'Within one hour of the incident',
                'Within 24 hours',
                'Within 8 hours',
                'By the end of the work week',
              ],
              correctIndex: 0,
              explanation:
                'Jackie\'s Law (520 CMR 14.00) requires that a serious injury or fatality at a trench be reported to the State Police within one hour. This is in addition to OSHA reporting obligations.',
            },
            {
              question: 'Utilities have been marked near where you will dig. What is the correct next step before bringing the backhoe in close?',
              options: [
                'Dig at full speed since the marks show where utilities are',
                'Hand-dig test pits to physically expose the marked utilities before machine excavation near them',
                'Ignore the marks if they look old',
                'Only expose utilities deeper than 5 feet',
              ],
              correctIndex: 1,
              explanation:
                'Locate marks are approximate. The standard safe practice is to hand-dig (carefully expose) the utility in test pits so you can see exactly where it is before excavating near it with the machine.',
            },
            {
              question: 'How should a backhoe loader be operated on a slope?',
              options: [
                'Across the slope to spread the load over the tires',
                'Up and down the slope, with the loaded bucket carried low, within the machine\'s rated slope angle',
                'Always with the backhoe extended downhill for counterweight',
                'Slopes are never a concern for rubber-tired machines',
              ],
              correctIndex: 1,
              explanation:
                'Operate up and down slopes rather than across them, keep the loaded bucket low to lower the center of gravity, and stay within the manufacturer\'s rated slope angle. Traversing across a slope greatly increases tip-over risk.',
            },
            {
              question: 'A worker asks you to lift them in the loader bucket to reach an overhead point. What should you do?',
              options: [
                'Lift them slowly and carefully',
                'Lift them only if they hold onto the bucket',
                'Refuse — the loader or backhoe bucket must never be used to lift or carry personnel',
                'Lift them if a signaler directs the move',
              ],
              correctIndex: 2,
              explanation:
                'A loader or backhoe bucket is never an approved personnel platform. There is no fall protection, no controlled descent, and an unexpected hydraulic movement can crush or eject the rider. Refuse and use proper equipment such as an aerial lift.',
            },
          ],
        },
        {
          id: '2b-m3-s2',
          title: 'Inspections',
          durationHours: 1.5,
          learningObjectives: [
            'Perform a complete pre-operation walkaround inspection of a backhoe loader',
            'Distinguish defects that require removal from service from minor items',
            'Explain the operator\'s duty to tag out and report unsafe equipment',
            'Describe the daily excavation inspection duty of the competent person',
          ],
          topics: [
            'Pre-operation walkaround: tires/pressure, stabilizer pads and cylinders, loader arms and pins, backhoe boom/dipper/bucket, hoses and fittings',
            'Fluid checks: engine oil, coolant, hydraulic fluid level and condition, fuel; check for leaks under the machine',
            'Structure check: cracks at welds and pin bosses, bent booms or dippers, ROPS/FOPS condition, bucket teeth and cutting edges',
            'Safety devices: seat belt, reverse alarm, horn, lights, mirrors, backup camera if equipped, control lockouts',
            'Functional check: start-up, gauges, brakes, steering, loader and backhoe controls through full range, stabilizer operation',
            'Removal-from-service conditions: damaged ROPS/FOPS, structural cracks, bulging or leaking hoses, inoperative brakes or steering, missing capacity plate',
            'Tag-out and reporting: an operator who finds a defect must remove the machine from service and report it — operating a known-defective machine is the operator\'s responsibility',
            'Daily excavation inspection by a competent person: before each shift, and after rain or any event that increases hazards (29 CFR 1926.651)',
            'Document inspections per the employer\'s program; never sign off on an inspection you did not perform',
          ],
          resources: [
            {
              label: '29 CFR 1926.651 — Specific excavation requirements',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.651',
              type: 'osha',
              required: true,
            },
            {
              label: '29 CFR 1926.602 — Material handling & earthmoving equipment',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.602',
              type: 'osha',
              required: true,
            },
          ],
          selfCheck: [
            {
              question: 'When should a pre-operation walkaround inspection of a backhoe loader be performed?',
              options: [
                'Once a week is sufficient',
                'Before each shift, before the machine is put to work',
                'Only after a repair',
                'Only when the operator notices a problem',
              ],
              correctIndex: 1,
              explanation:
                'A walkaround inspection is performed before each shift. Catching a defect before work begins is the entire point — many failures give warning signs that a thorough pre-shift check will reveal.',
            },
            {
              question: 'During your walkaround you find the parking brake does not hold the machine. What must you do?',
              options: [
                'Use the bucket curled into the ground as a brake instead',
                'Remove the machine from service and report the defect — inoperative brakes are a removal-from-service condition',
                'Work only on flat ground for the day',
                'Note it and have it fixed next week',
              ],
              correctIndex: 1,
              explanation:
                'Inoperative brakes are a removal-from-service condition. A machine that cannot be reliably stopped or held is unsafe on any grade. Tag it out and report it — do not improvise a workaround.',
            },
            {
              question: 'Whose responsibility is it if an operator runs a machine they know has a serious defect?',
              options: [
                'Only the mechanic who missed it',
                'Only the employer',
                'The operator — operating a known-defective machine is the operator\'s responsibility, and they must tag it out and report it',
                'No one, as long as nothing breaks that day',
              ],
              correctIndex: 2,
              explanation:
                'The operator who identifies a defect has a duty to remove the machine from service and report it. Choosing to operate a machine you know is defective makes the operator responsible for the consequences.',
            },
            {
              question: 'Under 29 CFR 1926.651, who must inspect an excavation, and how often?',
              options: [
                'Any worker, once a week',
                'A competent person, before each shift and after rain or any event that increases hazards',
                'The machine operator, only when entering the trench',
                'An OSHA inspector, monthly',
              ],
              correctIndex: 1,
              explanation:
                '1926.651 requires a competent person to inspect the excavation before each shift and as needed throughout the shift — including after rainstorms or other hazard-increasing events. Conditions in soil change quickly.',
            },
            {
              question: 'The load capacity plate on a backhoe loader is missing. What must you do?',
              options: [
                'Estimate the capacity from the machine size',
                'Use the previous operator\'s memory of the rating',
                'Do not operate the machine until the capacity information is restored',
                'Reduce all loads by half and continue',
              ],
              correctIndex: 2,
              explanation:
                'A missing or unreadable capacity plate leaves the operator with no way to verify safe limits. OSHA requires capacity to be displayed. Without it, the machine must be taken out of service until the information is restored.',
            },
            {
              question: 'Which of these is a removal-from-service condition you should look for during a walkaround?',
              options: [
                'A small cosmetic paint scratch on the cab',
                'A hydraulic hose with a bulge in the cover',
                'Mud on the tires from the previous shift',
                'A slightly dirty windshield',
              ],
              correctIndex: 1,
              explanation:
                'A bulging hose signals internal reinforcement failure and imminent burst — a removal-from-service condition. Cosmetic scratches and mud are housekeeping items; a dirty windshield should be cleaned for visibility but is not a structural defect.',
            },
            {
              question: 'Your supervisor asks you to sign the daily inspection sheet for a machine you never actually inspected. What is the correct response?',
              options: [
                'Sign it to keep the paperwork moving',
                'Sign it but note your concern verbally',
                'Refuse — never sign off on an inspection you did not perform; then perform the inspection',
                'Sign it only if the machine looks okay from across the yard',
              ],
              correctIndex: 2,
              explanation:
                'Inspection records must reflect reality. Signing an inspection you did not perform is falsification and removes the safety value of the record. Refuse, and actually carry out the inspection before the machine is used.',
            },
          ],
        },
        {
          id: '2b-m3-s3',
          title: 'OSHA',
          durationHours: 1.5,
          learningObjectives: [
            'Summarize the scope of OSHA 29 CFR 1926 Subpart P (Excavations)',
            'Explain the soil classification system and the sloping/benching requirements',
            'State when a protective system (sloping, shoring, or shielding) is required',
            'Describe access/egress, spoil pile, and water accumulation requirements',
          ],
          topics: [
            '29 CFR 1926 Subpart P: the federal standard for excavations and trenching, applied alongside Massachusetts Jackie\'s Law',
            'Definitions (1926.650): an excavation is any man-made cut; a trench is a narrow excavation, generally deeper than wide, bottom width 15 feet or less',
            'Cave-in protection required for excavations 5 feet or deeper — and shallower if a competent person identifies a hazard',
            'Soil types: Type A (most stable), Type B (medium), Type C (least stable); classified by a competent person',
            'Maximum allowable slopes for simple sloping: Type A 3/4:1, Type B 1:1, Type C 1 1/2:1 (horizontal:vertical)',
            'Protective systems: sloping/benching, shoring, or shielding (trench box); excavations deeper than 20 feet require a registered professional engineer\'s design',
            'Access/egress: a ladder, ramp, or stairway within 25 feet of lateral travel for any worker in a trench 4 feet or deeper',
            'Spoil pile and equipment kept at least 2 feet back from the edge of the excavation',
            'No worker in an excavation with accumulated or accumulating water unless protective measures are in place',
            'Keep the backhoe loader a safe distance from the excavation edge; machine weight is a surcharge load that can trigger a cave-in',
          ],
          resources: [
            {
              label: '29 CFR 1926.650 — Excavations: scope & definitions',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.650',
              type: 'osha',
              required: true,
            },
            {
              label: '29 CFR 1926.651 — Specific excavation requirements',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.651',
              type: 'osha',
              required: true,
            },
            {
              label: '29 CFR 1926.652 — Requirements for protective systems',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.652',
              type: 'osha',
              required: true,
            },
          ],
          selfCheck: [
            {
              question: 'Under OSHA Subpart P, at what depth is cave-in protection generally required in an excavation?',
              options: [
                '2 feet or deeper',
                '4 feet or deeper',
                '5 feet or deeper (and shallower if a competent person identifies a hazard)',
                '10 feet or deeper',
              ],
              correctIndex: 2,
              explanation:
                'OSHA requires cave-in protection at 5 feet or deeper, and at any depth where a competent person sees a potential cave-in hazard. A cubic yard of soil weighs over 2,000 pounds — a collapse at any depth can be fatal.',
            },
            {
              question: 'Who classifies the soil type in an excavation, and why does it matter?',
              options: [
                'The machine operator, because they dig it',
                'A competent person, because soil type determines the maximum safe slope and the protective system required',
                'The permitting town clerk',
                'It does not need to be classified',
              ],
              correctIndex: 1,
              explanation:
                'A competent person classifies the soil (Type A, B, or C). The classification drives the maximum allowable slope and the protective system — Type C soil is the least stable and must be sloped back the most or shielded.',
            },
            {
              question: 'What is the maximum allowable slope for simple sloping in Type C soil?',
              options: [
                '3/4:1 (horizontal:vertical)',
                '1:1 (horizontal:vertical)',
                '1 1/2:1 (horizontal:vertical)',
                'Type C soil cannot be sloped at all',
              ],
              correctIndex: 2,
              explanation:
                'Type C soil — the least stable — requires the flattest slope: 1 1/2:1 (one and a half feet of horizontal run for every foot of depth). Type B is 1:1 and Type A is 3/4:1.',
            },
            {
              question: 'A worker must enter a trench that is 6 feet deep. What does OSHA require for getting in and out?',
              options: [
                'Nothing specific — they can climb the trench wall',
                'A ladder, ramp, or stairway within 25 feet of lateral travel',
                'A ladder within 100 feet',
                'They must be lifted in and out by the backhoe bucket',
              ],
              correctIndex: 1,
              explanation:
                'For any worker in a trench 4 feet or deeper, OSHA requires a ladder, ramp, or stairway within 25 feet of lateral travel. The backhoe bucket is never an approved means of access or egress.',
            },
            {
              question: 'How far back from the edge of an excavation must the spoil pile and equipment be kept?',
              options: [
                'At least 2 feet from the edge',
                'It can be placed right at the edge',
                'At least 10 feet, always',
                'Only the spoil pile matters, not equipment',
              ],
              correctIndex: 0,
              explanation:
                'OSHA requires spoil, materials, and equipment to be kept at least 2 feet from the excavation edge. Their weight is a surcharge load that pushes down on the trench wall and is a common trigger for cave-ins.',
            },
            {
              question: 'At what excavation depth does OSHA require the protective system to be designed by a registered professional engineer?',
              options: [
                'Deeper than 10 feet',
                'Deeper than 15 feet',
                'Deeper than 20 feet',
                'Any depth requiring a trench box',
              ],
              correctIndex: 2,
              explanation:
                'For excavations deeper than 20 feet, the protective system must be designed by a registered professional engineer. At or below that depth, the competent person may use the OSHA appendices and tabulated data.',
            },
            {
              question: 'Why must a backhoe loader be kept a safe distance back from the edge of the trench it is digging?',
              options: [
                'To keep the cab clean',
                'The weight of the machine adds surcharge load on the trench wall and can trigger a cave-in onto workers below',
                'It only matters for fuel efficiency',
                'It does not matter as long as the stabilizers are down',
              ],
              correctIndex: 1,
              explanation:
                'The machine\'s weight near the edge is a surcharge load that increases pressure on the trench wall — a leading cause of cave-ins. Stabilizers steady the machine but do not eliminate the surcharge; keep the machine back from the edge.',
            },
          ],
        },
      ],
    },
    {
      id: '2b-m4',
      title: 'Review',
      orderInCourse: 4,
      estimatedHours: 4,
      sessions: [
        {
          id: '2b-m4-s1',
          title: 'Practice 1',
          durationHours: 2,
          learningObjectives: [
            'Recall the licensing, scope, and regulatory facts for the 2B restriction',
            'Apply 230 CMR 6.00 operating rules and SAE J1307 signaling to job-site scenarios',
            'Demonstrate equipment-systems knowledge for combination loader/backhoe machines',
            'Identify weak areas to focus on before the exam',
          ],
          topics: [
            'Review: 2B scope — combination loader/backhoe machines plus 2C and 2D equipment; what it does NOT cover',
            'Review: licensing facts — age 18, 70% pass, 2-year license, $75 per restriction, 60-day retest wait',
            'Review: MGL Chapter 146 vs. 230 CMR 6.00; exemptions; penalties for unlicensed operation',
            'Review: 230 CMR 6.00 operating rules — approved signaler, no unauthorized riders, working-radius clearance',
            'Review: SAE J1307 hand signals; stop signal and emergency stop priority',
            'Review: backhoe loader systems — loader end, backhoe end, stabilizers, ROPS/FOPS, seat belt, reverse alarm',
            'Review: hydraulic safety — injection injury, cardboard leak check, 4:1 hose safety factor, fluid condition',
            'Scenario practice with full explanations of the reasoning behind each correct answer',
          ],
          resources: [
            {
              label: 'MA Hoisting Licensing & Exams (mass.gov)',
              url: 'https://www.mass.gov/hoisting-licensing-and-exams',
              type: 'reference',
              required: true,
            },
            {
              label: '230 CMR 6.00 — Hoisting Machinery (mass.gov)',
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
          ],
          selfCheck: [
            {
              question: 'A 2B license holder is asked to operate a 12-ton crawler excavator on a site-work job. What is true?',
              options: [
                'It is allowed because both are Class 2 machines',
                'It is allowed if the machine has a backhoe-style bucket',
                'It is not allowed — a full-size crawler excavator requires a 2A license',
                'It is allowed for compact excavation tasks only',
              ],
              correctIndex: 2,
              explanation:
                'The 2B restriction covers combination loader/backhoe machines, not full-size excavators. Operating a crawler excavator on a 2B is unlicensed operation under MGL §53.',
            },
            {
              question: 'You fail the 2B exam with a score of 64%. When can you retake it?',
              options: [
                'Immediately, at the next available session',
                'After 7 days',
                'After 30 days',
                'After 60 days',
              ],
              correctIndex: 3,
              explanation:
                'The passing score is 70%, and a failed attempt triggers a 60-day waiting period before you can retest. Use the wait to study the topics you scored poorly on.',
            },
            {
              question: 'While digging with the backhoe, you lose sight of your signaler. What must you do?',
              options: [
                'Slow down and continue carefully',
                'Stop all machine movement immediately',
                'Switch to radio and keep working',
                'Have a nearby worker relay signals',
              ],
              correctIndex: 1,
              explanation:
                'If visual contact with the signaler is lost, 230 CMR 6.00 requires the operator to stop immediately. A signaler out of sight cannot safely direct the machine, and no substitute relay is permitted.',
            },
            {
              question: 'Why must the stabilizers be lowered before backhoe digging?',
              options: [
                'To raise the loader bucket out of the way',
                'To level and steady the machine so it does not rock, hop, or tip while digging',
                'To engage the auxiliary hydraulic circuit',
                'To meet the seat belt requirement',
              ],
              correctIndex: 1,
              explanation:
                'Stabilizers (outriggers) level the machine and take load off the tires so the backhoe can dig without the machine rocking or tipping. Digging on tires alone is unstable and unsafe.',
            },
            {
              question: 'What is the safe way to check a backhoe loader for a hydraulic leak?',
              options: [
                'Feel along the hose with a bare hand',
                'Use a piece of cardboard to catch the spray from a safe distance',
                'Hold a wet rag against the suspected fitting',
                'Look for the leak through the cab window at full pressure',
              ],
              correctIndex: 1,
              explanation:
                'Use cardboard or a mirror from a distance. High-pressure hydraulic fluid can inject into skin and cause amputation or death — never use a bare hand to find a leak.',
            },
            {
              question: 'An operator receives the emergency stop signal (crossed arms) from someone other than the designated signaler. What should the operator do?',
              options: [
                'Ignore it because it did not come from the designated signaler',
                'Honor it immediately — an emergency stop from anyone always takes precedence',
                'Ask the signaler whether to stop',
                'Finish the current motion first',
              ],
              correctIndex: 1,
              explanation:
                'The emergency stop signal always takes immediate precedence, regardless of who gives it. Anyone who sees a hazard can stop the machine; the operator sorts out the situation only after movement has stopped.',
            },
            {
              question: 'A backhoe loader has a bent ROPS from a previous incident. Is it safe to operate?',
              options: [
                'Yes, if the operator wears a seat belt',
                'Yes, if it is only used on level ground',
                'No — a damaged ROPS must be removed from service; it cannot reliably protect the operator',
                'Yes, until a replacement arrives',
              ],
              correctIndex: 2,
              explanation:
                'Any structural damage to a ROPS requires removal from service. A bent ROPS has unknown residual strength and may fail in a rollover. Only a manufacturer-approved rebuild restores its certification.',
            },
          ],
        },
        {
          id: '2b-m4-s2',
          title: 'Practice 2',
          durationHours: 2,
          learningObjectives: [
            'Apply OSHA Subpart P excavation rules to backhoe loader trench work',
            'Recall Massachusetts Jackie\'s Law trench permit and notification requirements',
            'Integrate inspection, hazard recognition, and safe operation into job-site decisions',
            'Confirm exam readiness across all four modules',
          ],
          topics: [
            'Review: OSHA Subpart P — 5-foot cave-in protection threshold, soil types A/B/C, sloping ratios',
            'Review: access/egress within 25 feet, spoil and equipment 2 feet from the edge, water accumulation rule',
            'Review: 20-foot depth threshold for a registered professional engineer\'s protective system design',
            'Review: Massachusetts Jackie\'s Law (520 CMR 14.00) — trench permit on public or private property, unattended-trench protection, one-hour State Police reporting',
            'Review: Dig Safe (811) utility location and hand-dug test pits before machine excavation near utilities',
            'Review: pre-shift walkaround and removal-from-service conditions; competent-person daily excavation inspection',
            'Review: tip-over, struck-by, cave-in, and overhead power line hazards; slope operation; never lift personnel in a bucket',
            'Final scenario practice integrating regulations, equipment, and operation with full reasoning',
          ],
          resources: [
            {
              label: '29 CFR 1926.651 — Specific excavation requirements',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.651',
              type: 'osha',
              required: true,
            },
            {
              label: '29 CFR 1926.652 — Requirements for protective systems',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.652',
              type: 'osha',
              required: true,
            },
            {
              label: '520 CMR 14.00 — Excavation and Trench Safety (Jackie\'s Law)',
              url: 'https://www.mass.gov/regulations/520-CMR-1400-excavation-and-trench-safety',
              type: 'regulation',
              required: true,
            },
          ],
          selfCheck: [
            {
              question: 'You are about to dig a 6-foot-deep trench in Type C soil with a backhoe loader and workers will enter it. Which is required?',
              options: [
                'Nothing — 6 feet is shallow enough to skip protection',
                'A protective system: slope the walls back to 1 1/2:1, or use shoring or a trench box',
                'Only a warning sign at the edge',
                'A registered engineer\'s design, because all trench work requires one',
              ],
              correctIndex: 1,
              explanation:
                'At 5 feet or deeper, cave-in protection is required. In Type C soil, simple sloping must be 1 1/2:1, or you must use shoring or a shield (trench box). An engineer\'s design is only required beyond 20 feet.',
            },
            {
              question: 'A homeowner hires a crew to dig a trench across a backyard on private property. Does Jackie\'s Law require a permit?',
              options: [
                'No — Jackie\'s Law only applies to public ways',
                'No — private residential work is exempt',
                'Yes — Jackie\'s Law requires a trench permit on public or private property',
                'Only if the trench is deeper than 10 feet',
              ],
              correctIndex: 2,
              explanation:
                'Jackie\'s Law was enacted after a child died in an unprotected backyard trench, so it deliberately covers private property. A trench permit is required before creating a trench on public or private property.',
            },
            {
              question: 'A trench will be left open overnight, unattended, on a job site. Under Jackie\'s Law, what is required?',
              options: [
                'Nothing, as long as work resumes the next morning',
                'It must be made safe against unauthorized access — for example with covers, barriers, or backfill',
                'A single strand of caution tape',
                'It only needs protection if it is near a school',
              ],
              correctIndex: 1,
              explanation:
                'Jackie\'s Law requires unattended trenches to be made safe against unauthorized access using covers, barriers, or backfill. An open, unguarded trench overnight is exactly the hazard the law targets.',
            },
            {
              question: 'You are digging near a marked gas line with the backhoe. What is the correct practice?',
              options: [
                'Dig at normal speed since the line is marked',
                'Hand-dig a test pit to expose the line, then excavate near it carefully by machine',
                'Skip the call to Dig Safe since the line is already visible on a map',
                'Use the loader bucket to scrape the line clean',
              ],
              correctIndex: 1,
              explanation:
                'Locate marks are approximate. Hand-dig test pits to physically expose the line so you can see exactly where it is, then work carefully with the machine. Striking a gas line can be catastrophic.',
            },
            {
              question: 'During your pre-shift walkaround you find the reverse alarm is not working and the operator\'s rear view is obstructed. What must you do?',
              options: [
                'Operate normally and back up slowly',
                'Remove the machine from service, or do not back up unless a designated employee signals it is safe — the alarm is required under 1926.602',
                'Have a coworker shout when backing',
                'It is only an issue when working at night',
              ],
              correctIndex: 1,
              explanation:
                '1926.602 requires a working reverse alarm when the rear view is obstructed, or a designated signaler to direct the backing. An inoperative alarm with an obstructed view means the machine cannot legally or safely be backed until corrected.',
            },
            {
              question: 'Spoil from a trench is piled right at the edge of the excavation. Why is this a problem?',
              options: [
                'It looks unprofessional',
                'The spoil weight is a surcharge load on the trench wall and a common trigger for cave-ins; OSHA requires it kept at least 2 feet back',
                'It blocks the backhoe bucket',
                'It is only a problem in wet weather',
              ],
              correctIndex: 1,
              explanation:
                'Spoil at the edge adds downward surcharge load on the trench wall, a leading cause of cave-ins. OSHA requires spoil, materials, and equipment to be kept at least 2 feet from the edge.',
            },
            {
              question: 'A competent person inspected the trench this morning, but a heavy rainstorm just passed through. Can work resume immediately?',
              options: [
                'Yes — the morning inspection covers the whole day',
                'No — under 1926.651, the competent person must re-inspect after rain or any event that increases hazards before work resumes',
                'Yes, as long as the trench box is still in place',
                'Only the operator needs to glance at it',
              ],
              correctIndex: 1,
              explanation:
                '1926.651 requires the competent person to re-inspect after rainstorms or any other hazard-increasing event. Rain dramatically changes soil stability, so a fresh inspection is mandatory before workers re-enter.',
            },
          ],
        },
      ],
    },
  ],
};
