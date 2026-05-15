import { LicenseRestriction } from '../types';

export const restriction_2c: LicenseRestriction = {
  code: '2C',
  name: 'Aerial lifts / cherry pickers',
  description: 'Boom lifts, scissor lifts, MEWP equipment.',
  equipmentCovered: ['Boom lifts', 'Scissor lifts', 'Aerial work platforms'],
  totalHours: 18,
  modules: [
    {
      id: '2c-m1',
      title: 'Foundation',
      orderInCourse: 1,
      estimatedHours: 4,
      sessions: [
        {
          id: '2c-m1-s1',
          title: 'Regulations',
          durationHours: 2,
          learningObjectives: [
            'State the minimum age, exam passing score, and license duration for a Massachusetts hoisting license',
            'Explain the relationship between MGL Chapter 146 and 230 CMR 6.00',
            'Identify which aerial lift / MEWP equipment falls under the hoisting license requirement and the key exemptions',
            'Describe the application, fee, and retest waiting period rules',
          ],
          topics: [
            'MGL Chapter 146 § 53 — who must hold a hoisting license to operate hoisting machinery in Massachusetts',
            '230 CMR 6.00 — the regulation that implements MGL Chapter 146 and sets minimum safety standards',
            'Minimum age requirement: 18 years old',
            'License duration and renewal: 2-year cycle',
            'Exam passing score: 70% minimum',
            '60-day waiting period after a failed attempt',
            '$75 non-refundable application fee per restriction class',
            'Exemptions: agricultural operators on their own land, certain public-utility supervised programs, approved apprenticeship and vocational programs',
            'Application through the MA Division of Occupational Licensure (DOL), Office of Public Safety and Inspections',
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
              label: 'Apply for a Hoisting Engineer License',
              url: 'https://www.mass.gov/how-to/apply-for-a-hoisting-engineer-license',
              type: 'reference',
              required: false,
            },
          ],
          selfCheck: [
            {
              question: 'What is the minimum passing score on the Massachusetts hoisting engineer exam?',
              options: ['60%', '65%', '70%', '75%'],
              correctIndex: 2,
              explanation:
                'The passing score is 70%. Score below 70% and you must wait 60 days before retesting — plan your study time so you only take the exam once.',
            },
            {
              question: 'How long is a Massachusetts hoisting engineer license valid before renewal is required?',
              options: ['1 year', '2 years', '3 years', '5 years'],
              correctIndex: 1,
              explanation:
                'The hoisting license is valid for 2 years. Always confirm the current renewal cycle and requirements at mass.gov, since renewal rules can change.',
            },
            {
              question: 'What is the minimum age to obtain a Massachusetts hoisting engineer license?',
              options: ['16', '17', '18', '21'],
              correctIndex: 2,
              explanation:
                'MGL Chapter 146 sets the minimum age at 18 years old. Applicants under 18 cannot obtain a hoisting license regardless of experience or training.',
            },
            {
              question: 'Which best describes the relationship between MGL Chapter 146 and 230 CMR 6.00?',
              options: [
                'MGL Chapter 146 is federal law; 230 CMR 6.00 is state law',
                'MGL Chapter 146 is the statute passed by the legislature; 230 CMR 6.00 is the regulation that implements it',
                'They are two different names for the same document',
                '230 CMR 6.00 replaces MGL Chapter 146 entirely',
              ],
              correctIndex: 1,
              explanation:
                'MGL (Massachusetts General Law) is statute passed by the legislature. 230 CMR 6.00 is the implementing regulation that adds specific technical and safety requirements under the authority of the statute.',
            },
            {
              question: 'How long must you wait before retaking the hoisting exam after a failed attempt?',
              options: ['7 days', '30 days', '60 days', '90 days'],
              correctIndex: 2,
              explanation:
                'You must wait 60 days after a failed attempt before retesting. Use that time to study the topic areas where you scored poorly rather than rushing back unprepared.',
            },
            {
              question:
                'A worker operates a boom lift exclusively on agricultural land that they own. Are they required to hold a Massachusetts hoisting license?',
              options: [
                'Yes — all aerial lift operation requires a license',
                'No — agricultural operators on their own land are exempt under MGL § 53',
                'Yes — but only if the lift exceeds 40 feet of platform height',
                'No — but only if the lift is rented rather than owned',
              ],
              correctIndex: 1,
              explanation:
                'MGL § 53 exempts agricultural operators working on their own land. The same operator doing construction or utility work on a job site would need a license.',
            },
            {
              question: 'What is the non-refundable application fee for each restriction class?',
              options: ['$25', '$50', '$75', '$100'],
              correctIndex: 2,
              explanation:
                'The application fee is $75 per restriction class and is non-refundable — you do not get it back even if you fail the exam or your application is denied.',
            },
          ],
        },
        {
          id: '2c-m1-s2',
          title: 'ANSI A92 Standards',
          durationHours: 2,
          learningObjectives: [
            'Identify the three current ANSI/SAIA A92 standards and what each one governs',
            'Explain the MEWP Group A / Group B and Type 1 / 2 / 3 classification system',
            'State the SAE hand signal standard required by 230 CMR 6.00 and who may direct the operator',
            'Describe the operator, supervisor, and occupant responsibilities introduced by the A92 standards',
          ],
          topics: [
            'ANSI/SAIA A92.20 — design and build standard for MEWPs',
            'ANSI/SAIA A92.22 — safe use standard for MEWPs (owners, users, operators)',
            'ANSI/SAIA A92.24 — training standard for operators, supervisors, and occupants',
            'The term "MEWP" (Mobile Elevating Work Platform) replaced "aerial work platform" / "AWP" under the A92 standards',
            'Group A vs. Group B: whether the platform stays within the tipping lines (most scissor lifts are Group A; most boom lifts are Group B)',
            'Type 1, 2, and 3: whether the machine can travel only when stowed, travels from the chassis, or travels from the platform',
            'Required worksite risk assessment and a written safe-use plan before MEWP operation',
            'Supervisor responsibility for monitoring operators and occupant (passenger) responsibilities',
            'SAE J1307 hand signals required by 230 CMR 6.00; only an approved signaler may direct the operator',
          ],
          resources: [
            {
              label: '230 CMR 6.00 — Hoisting Machinery (mass.gov)',
              url: 'https://www.mass.gov/regulations/230-CMR-600-hoisting-machinery',
              type: 'regulation',
              required: true,
            },
            {
              label: 'OSHA — Aerial Lifts Standard 29 CFR 1926.453',
              url: 'https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1926/subpart-L/section-1926.453',
              type: 'osha',
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
              question: 'Which ANSI/SAIA A92 standard covers the training of MEWP operators, supervisors, and occupants?',
              options: ['A92.20', 'A92.22', 'A92.24', 'A92.2'],
              correctIndex: 2,
              explanation:
                'A92.24 is the training standard. A92.20 is the design/build standard and A92.22 is the safe use standard — remember the order: design, use, train.',
            },
            {
              question: 'Under the A92 classification system, what distinguishes a Group A MEWP from a Group B MEWP?',
              options: [
                'Group A machines are electric; Group B machines are diesel',
                'On a Group A machine the platform stays within the tipping lines; on a Group B machine it can extend beyond them',
                'Group A machines are indoor-only; Group B machines are outdoor-only',
                'Group A machines have guardrails; Group B machines do not',
              ],
              correctIndex: 1,
              explanation:
                'Group A platforms remain inside the tipping lines in all positions (typical scissor lift). Group B platforms can move beyond the tipping lines (typical boom lift), which is why boom lifts have stricter stability and fall-protection demands.',
            },
            {
              question: 'What does the term "MEWP" stand for?',
              options: [
                'Mechanical Elevated Work Procedure',
                'Mobile Elevating Work Platform',
                'Manual Extension Work Platform',
                'Motorized Elevated Work Personnel-carrier',
              ],
              correctIndex: 1,
              explanation:
                'MEWP stands for Mobile Elevating Work Platform. The A92 standards adopted this term to replace the older "aerial work platform" (AWP) terminology.',
            },
            {
              question: 'Which SAE standard specifies the hand signals required by 230 CMR 6.00?',
              options: ['SAE J1307', 'SAE J386', 'SAE J765', 'SAE J1040'],
              correctIndex: 0,
              explanation:
                '230 CMR 6.00 requires SAE J1307 hand signals. On a job site, only an approved signaler may use these signals to direct the operator.',
            },
            {
              question: 'Under the ANSI/SAIA A92.22 safe use standard, what must be completed before MEWP operation begins on a site?',
              options: [
                'A worksite risk assessment and a written safe-use plan',
                'A load test of the platform to 150% of rated capacity',
                'A notarized statement from the equipment owner',
                'An OSHA inspection of the machine',
              ],
              correctIndex: 0,
              explanation:
                'A92.22 requires a site risk assessment and a safe-use plan that addresses the specific hazards of the job — ground conditions, overhead obstructions, traffic, and rescue.',
            },
            {
              question: 'Under the A92 standards, who is responsible for monitoring the operator and confirming the safe-use plan is followed?',
              options: [
                'The equipment manufacturer',
                'A trained supervisor',
                'The platform occupant',
                'The crane inspector',
              ],
              correctIndex: 1,
              explanation:
                'The A92 standards create a distinct supervisor role. The supervisor must be trained, select the right MEWP for the task, and monitor that operators follow the safe-use plan.',
            },
            {
              question: 'A "Type 3" MEWP under the A92 standards is one that:',
              options: [
                'Can only be moved when the platform is fully lowered',
                'Can be traveled using controls on the chassis only',
                'Can be traveled using controls in the elevated platform',
                'Cannot travel under its own power at all',
              ],
              correctIndex: 2,
              explanation:
                'Type 3 MEWPs can be driven from the elevated platform. Most self-propelled boom and scissor lifts are Type 3 — which is exactly why travel-with-platform-raised hazards matter so much.',
            },
          ],
        },
      ],
    },
    {
      id: '2c-m2',
      title: 'Equipment',
      orderInCourse: 2,
      estimatedHours: 5,
      sessions: [
        {
          id: '2c-m2-s1',
          title: 'Boom Lifts',
          durationHours: 2,
          learningObjectives: [
            'Distinguish between articulating and telescopic boom lifts and when each is used',
            'Identify the major components of a boom lift and the function of each',
            'Explain why boom lifts require a personal fall arrest system rather than guardrails alone',
            'Describe the stability and tip-over hazards specific to boom lifts',
          ],
          topics: [
            'Articulating (knuckle) boom: multiple pivot points allow the platform to reach up and over obstacles',
            'Telescopic (stick) boom: a single extending boom for maximum horizontal and vertical reach',
            'Major components: turntable, boom sections, jib, platform/basket, chassis, counterweight',
            'Self-propelled vs. trailer-mounted vs. truck-mounted (vehicle-mounted aerial device) booms',
            'Most boom lifts are Group B MEWPs — the platform can move beyond the tipping lines',
            'Rated platform capacity and the load/occupant limits posted on the platform placard',
            'Fall protection: OSHA 29 CFR 1926.453 requires a body harness with lanyard attached to the manufacturer anchor point in the basket',
            'Tip-over hazards: extending the boom on a slope, side loads, wind, and striking obstructions',
            'Travel-with-platform-raised and drive-speed interlocks on rough-terrain booms',
          ],
          resources: [
            {
              label: 'OSHA — Aerial Lifts Standard 29 CFR 1926.453',
              url: 'https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1926/subpart-L/section-1926.453',
              type: 'osha',
              required: true,
            },
            {
              label: 'OSHA — Aerial Lifts Fact Sheet',
              url: 'https://www.osha.gov/sites/default/files/publications/aerial-lifts-factsheet.pdf',
              type: 'osha',
              required: true,
            },
            {
              label: 'OSHA — Vehicle-Mounted Elevating and Rotating Work Platforms 29 CFR 1910.67',
              url: 'https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1910/subpart-F/section-1910.67',
              type: 'osha',
              required: false,
            },
          ],
          selfCheck: [
            {
              question: 'What is the main advantage of an articulating boom lift over a telescopic boom lift?',
              options: [
                'It has a higher rated platform capacity',
                'Its multiple pivot points let it reach up and over obstacles',
                'It can travel at highway speeds',
                'It does not require fall protection',
              ],
              correctIndex: 1,
              explanation:
                'An articulating ("knuckle") boom has multiple joints, so it can position the platform up and over an obstruction. A telescopic boom trades that flexibility for greater straight-line reach.',
            },
            {
              question: 'Why does OSHA require a personal fall arrest system (harness and lanyard) when working from a boom lift basket?',
              options: [
                'Because boom lift baskets are not required to have guardrails',
                'Because the basket can move suddenly and the catapult effect can eject an unrestrained worker',
                'Because the harness doubles as the load chart',
                'Only foreign-made boom lifts require it',
              ],
              correctIndex: 1,
              explanation:
                'A boom lift basket can bounce or whip — striking an object can "catapult" an unrestrained worker over the rail. OSHA 1926.453 requires the harness lanyard be attached to the manufacturer anchor point, not to an adjacent structure.',
            },
            {
              question: 'On a boom lift, where must the operator fall-protection lanyard be attached?',
              options: [
                'To the nearest building structure or steel beam',
                'To the manufacturer designated anchor point in the basket',
                'To the boom section closest to the platform',
                'To another worker harness for mutual support',
              ],
              correctIndex: 1,
              explanation:
                'OSHA 1926.453 specifically prohibits belting off to an adjacent pole, structure, or equipment. The lanyard must connect to the anchor point the manufacturer built into the platform.',
            },
            {
              question: 'Which boom lift configuration would most increase the risk of a tip-over?',
              options: [
                'Boom fully lowered and retracted on level ground',
                'Boom extended horizontally while the chassis sits on a slope',
                'Platform at full height with the boom vertical on level ground',
                'Driving slowly with the platform stowed',
              ],
              correctIndex: 1,
              explanation:
                'Extending the boom horizontally moves the load away from the chassis, and a slope shifts the center of gravity toward a tipping line. Combine the two and the machine can exceed its stability limits — the highest-risk configuration.',
            },
            {
              question: 'A truck-mounted aerial device (bucket truck) is also referred to as a:',
              options: ['Scissor lift', 'Cherry picker', 'Telehandler', 'Gantry crane'],
              correctIndex: 1,
              explanation:
                '"Cherry picker" is a common name for a vehicle-mounted aerial device. OSHA 1910.67 covers vehicle-mounted elevating and rotating work platforms specifically.',
            },
            {
              question: 'Most boom lifts are classified as Group B MEWPs. What does that classification tell you?',
              options: [
                'The boom lift can only be used indoors',
                'The platform can travel beyond the tipping lines of the chassis',
                'The boom lift does not need a load chart',
                'The boom lift is powered by battery only',
              ],
              correctIndex: 1,
              explanation:
                'Group B means the platform can move outside the tipping lines, which is normal for booms. That is precisely why booms demand careful attention to ground slope, side loading, and the rated capacity placard.',
            },
            {
              question: 'Before extending the boom on a rough-terrain boom lift, what should the operator confirm about the chassis?',
              options: [
                'That the fuel tank is full',
                'That it is level, on firm ground, and any leveling or oscillating-axle system is set',
                'That the basket is empty of tools',
                'That the engine is cold',
              ],
              correctIndex: 1,
              explanation:
                'Stability starts at the ground. The chassis must be level on firm, supported ground before the boom goes up — extending the boom on an out-of-level or soft base is a leading cause of tip-overs.',
            },
          ],
        },
        {
          id: '2c-m2-s2',
          title: 'Scissor Lifts',
          durationHours: 1.5,
          learningObjectives: [
            'Identify the major components of a scissor lift and explain how the scissor mechanism raises the platform',
            'Explain how fall protection on a scissor lift differs from a boom lift and why',
            'Describe the stability hazards of scissor lifts, including extension decks and wind',
            'State the rules for travel with the platform raised on a scissor lift',
          ],
          topics: [
            'Scissor mechanism: crossed (pantograph) arms driven by hydraulic cylinders raise the platform straight up',
            'Major components: chassis, scissor stack, platform with guardrails, extension (slide-out) deck, control console',
            'Most scissor lifts are Group A MEWPs — the platform stays within the tipping lines',
            'OSHA treats scissor lifts as mobile scaffolds, not aerial lifts: a properly maintained guardrail system is the primary fall protection',
            'When tie-off is still required: damaged or removed guardrails, or leaning/reaching outside the platform',
            'Rated capacity, including the reduced capacity that applies when the extension deck is slid out',
            'Indoor electric (slab) scissor lifts vs. rough-terrain scissor lifts',
            'Stability hazards: overloading, side forces, potholes, drop-offs, and wind on outdoor units',
            'Travel with the platform raised: only permitted within the manufacturer limits and on firm, level ground',
          ],
          resources: [
            {
              label: 'OSHA — Scissor Lifts Hazard Alert',
              url: 'https://www.osha.gov/sites/default/files/publications/OSHA3842.pdf',
              type: 'osha',
              required: true,
            },
            {
              label: 'OSHA Scaffolding eTool — Scissor Lifts',
              url: 'https://www.osha.gov/etools/scaffolding/scissor-lifts',
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
              question: 'How does a scissor lift raise its platform?',
              options: [
                'A telescoping mast extends upward',
                'Hydraulic cylinders push on crossed pantograph arms, raising the platform vertically',
                'A winch and cable system hoists the platform',
                'Compressed air inflates lifting bags under the deck',
              ],
              correctIndex: 1,
              explanation:
                'The crossed "scissor" arms are driven open by hydraulic cylinders, which raises the platform straight up. The platform does not move horizontally the way a boom does.',
            },
            {
              question: 'On a scissor lift with a properly maintained guardrail system, what is the primary fall protection?',
              options: [
                'A personal fall arrest harness attached to an anchor point',
                'The guardrail system itself',
                'A safety net under the platform',
                'No fall protection is needed at any height',
              ],
              correctIndex: 1,
              explanation:
                'OSHA treats scissor lifts as mobile scaffolds. With intact guardrails, the guardrail system is the fall protection. A harness becomes necessary if the guardrails are damaged or the worker reaches outside the platform.',
            },
            {
              question: 'Why are most scissor lifts classified as Group A MEWPs?',
              options: [
                'They are battery powered',
                'Their platform stays within the tipping lines of the chassis in all positions',
                'They cannot exceed 20 feet of platform height',
                'They are only used indoors',
              ],
              correctIndex: 1,
              explanation:
                'A scissor lift platform rises straight up and stays inside the tipping lines, making it Group A. That is a key difference from boom lifts, which are usually Group B.',
            },
            {
              question: 'What happens to a scissor lift rated capacity when the slide-out extension deck is deployed?',
              options: [
                'It increases because the platform is larger',
                'It stays exactly the same',
                'It is reduced — the extension deck has its own lower capacity rating',
                'It no longer applies once the deck is out',
              ],
              correctIndex: 2,
              explanation:
                'The extension deck cantilevers load away from the chassis, so the manufacturer assigns it a separate, lower capacity. The operator must use the reduced rating posted for the extended configuration.',
            },
            {
              question: 'A worker on a scissor lift removes a section of the mid-rail to pass material through. What is the correct fall-protection response?',
              options: [
                'No change is needed — scissor lifts never require harnesses',
                'The worker must now use a personal fall arrest system because the guardrail system is incomplete',
                'Lower the platform halfway to reduce fall distance',
                'Have a second worker hold the worker by the belt',
              ],
              correctIndex: 1,
              explanation:
                'The guardrail system only counts as fall protection when it is complete and maintained. Once a rail is removed, the protection is compromised and a personal fall arrest system is required.',
            },
            {
              question: 'Which condition would most increase the tip-over risk of an outdoor rough-terrain scissor lift?',
              options: [
                'Operating with the platform fully lowered',
                'Raising the platform near rated height in gusting wind on uneven ground',
                'Driving slowly across a level paved lot',
                'Charging the battery overnight',
              ],
              correctIndex: 1,
              explanation:
                'Wind acts as a side force on the raised platform, and uneven ground shifts the center of gravity toward a tipping line. Manufacturers publish maximum wind speeds — exceeding them with the platform up risks a tip-over.',
            },
          ],
        },
        {
          id: '2c-m2-s3',
          title: 'Hydraulics & Controls',
          durationHours: 1.5,
          learningObjectives: [
            'Describe the major components of a MEWP hydraulic system and how they move the platform',
            'Explain the function of upper (platform) and lower (ground) controls and the override relationship between them',
            'Identify common control-system safety devices: interlocks, tilt alarms, and emergency stops',
            'Describe how to lower a platform safely using the emergency descent / auxiliary power system',
          ],
          topics: [
            'Hydraulic system components: reservoir, pump, control valves, hoses, and lift/drive cylinders',
            'How hydraulic pressure is converted into platform lift, boom motion, and drive/steer functions',
            'Upper controls: the primary controls located in the platform',
            'Lower controls: ground controls that can override the upper controls, used mainly for rescue and emergency lowering',
            'Foot switch / enable device that must be held for the platform controls to function',
            'Interlocks: drive-speed cutback when elevated, pothole-protection bars, and tilt sensors',
            'Tilt alarm and overload sensing systems that warn or cut out functions when limits are exceeded',
            'Emergency stop buttons at both the upper and lower control stations',
            'Emergency descent / auxiliary power: the manual or backup means of lowering a stuck platform',
            'Pre-use control function test: testing all functions through their full range before raising the platform',
          ],
          resources: [
            {
              label: 'OSHA — Aerial Lifts Standard 29 CFR 1926.453',
              url: 'https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1926/subpart-L/section-1926.453',
              type: 'osha',
              required: true,
            },
            {
              label: 'OSHA — Aerial Lifts Fact Sheet',
              url: 'https://www.osha.gov/sites/default/files/publications/aerial-lifts-factsheet.pdf',
              type: 'osha',
              required: true,
            },
          ],
          selfCheck: [
            {
              question: 'In a MEWP hydraulic system, what component converts hydraulic pressure into the linear force that raises the platform?',
              options: ['The reservoir', 'The control valve', 'The lift cylinder', 'The pump'],
              correctIndex: 2,
              explanation:
                'The pump generates flow and the valves direct it, but the lift cylinder is what converts that pressurized fluid into the straight-line pushing force that raises the platform.',
            },
            {
              question: 'On a MEWP, what is the relationship between the upper (platform) controls and the lower (ground) controls?',
              options: [
                'The upper controls always override the lower controls',
                'The lower controls can override the upper controls and are used mainly for rescue and emergency lowering',
                'The two control stations operate completely independently',
                'Only one control station can be powered at a time, selected with a key',
              ],
              correctIndex: 1,
              explanation:
                'Ground controls can override the platform controls. This lets someone on the ground lower an incapacitated operator or recover a stuck platform — which is why the ground station must always be kept accessible.',
            },
            {
              question: 'What is the purpose of the foot switch (enable device) found on many boom lift platforms?',
              options: [
                'It sounds the travel alarm',
                'It must be held down for the platform function controls to operate, acting as a dead-man device',
                'It charges the battery',
                'It locks the turntable rotation',
              ],
              correctIndex: 1,
              explanation:
                'The foot switch is a dead-man enable device. If the operator releases it, the function controls stop responding — a safeguard against accidental or unintended movement.',
            },
            {
              question: 'A MEWP tilt alarm activates while the platform is elevated. What should the operator do?',
              options: [
                'Continue working but move more slowly',
                'Stop, and lower the platform to bring the machine back within its level limits before doing anything else',
                'Extend the boom to counterbalance the tilt',
                'Ignore it if the platform feels stable',
              ],
              correctIndex: 1,
              explanation:
                'A tilt alarm warns that the chassis is out of level beyond the safe limit. The correct response is to stop and carefully lower the platform — never try to "drive out" of a tilt condition with the platform up.',
            },
            {
              question: 'What is the emergency descent (auxiliary power) system on a MEWP used for?',
              options: [
                'Increasing platform drive speed',
                'Lowering the platform when the primary power or hydraulic system fails',
                'Boosting the platform above its rated height',
                'Charging the battery from the engine',
              ],
              correctIndex: 1,
              explanation:
                'If the main power or hydraulics fail with the platform up, the emergency descent / auxiliary power system provides a backup means to lower it. Every operator should know where it is and how to use it before going up.',
            },
            {
              question: 'When should the operator perform a full control-function test of a MEWP?',
              options: [
                'Once a month',
                'Only after a repair',
                'Before each use, testing every function through its range while the platform is still low',
                'Only if the previous operator reported a problem',
              ],
              correctIndex: 2,
              explanation:
                'A control-function test is part of the pre-use check every shift. Run every function through its full range near the ground so a fault shows up before the operator is elevated and exposed.',
            },
          ],
        },
      ],
    },
    {
      id: '2c-m3',
      title: 'Operation',
      orderInCourse: 3,
      estimatedHours: 5,
      sessions: [
        {
          id: '2c-m3-s1',
          title: 'Safety & Fall Protection',
          durationHours: 2,
          learningObjectives: [
            'State the OSHA fall-protection requirements for boom lifts versus scissor lifts and explain why they differ',
            'Describe the components of a personal fall arrest system and how it is used in a boom lift',
            'Explain the minimum approach distance to power lines and how to work safely near them',
            'Identify the rules for travel with the platform raised and other common MEWP operating hazards',
          ],
          topics: [
            'Boom lifts: OSHA 29 CFR 1926.453 requires a body harness and lanyard attached to the platform anchor point',
            'Scissor lifts: an intact guardrail system is the primary fall protection; a harness is required only if guardrails are compromised or the worker reaches out',
            'Personal fall arrest system components: full-body harness, lanyard (often a short fixed lanyard to limit movement), and the manufacturer anchor point',
            'Prohibition on belting off to an adjacent pole, structure, or equipment from a boom lift',
            'Power-line clearance: maintain a minimum approach distance of at least 10 feet from lines up to 50 kV, more for higher voltages; treat all lines as energized',
            'Catapult / whip effect — striking an object can eject an unrestrained worker',
            'Travel with the platform raised: only within the manufacturer limits, on firm and level ground, with a clear path',
            'Maintaining clearance from overhead obstructions and keeping the platform within rated capacity and within the platform footprint',
            'Rescue planning: a means to retrieve a worker from an elevated or stuck platform must be in place before work begins',
          ],
          resources: [
            {
              label: 'OSHA — Aerial Lifts Standard 29 CFR 1926.453',
              url: 'https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1926/subpart-L/section-1926.453',
              type: 'osha',
              required: true,
            },
            {
              label: 'OSHA — Fall Protection Standard 29 CFR 1926.502',
              url: 'https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1926/subpart-M/section-1926.502',
              type: 'osha',
              required: true,
            },
            {
              label: 'OSHA — Aerial Lifts Fact Sheet',
              url: 'https://www.osha.gov/sites/default/files/publications/aerial-lifts-factsheet.pdf',
              type: 'osha',
              required: true,
            },
          ],
          selfCheck: [
            {
              question: 'A worker is in the basket of an articulating boom lift. What fall protection does OSHA require?',
              options: [
                'None, because the basket has guardrails',
                'A full-body harness with a lanyard attached to the manufacturer anchor point in the basket',
                'A safety net rigged below the platform',
                'A second worker holding the lanyard from the ground',
              ],
              correctIndex: 1,
              explanation:
                'OSHA 1926.453 requires a body harness and lanyard attached to the boom or basket anchor point on boom lifts. The basket guardrails alone are not accepted as the fall protection on a boom lift.',
            },
            {
              question: 'Why does OSHA require harness use on boom lifts but accept guardrails alone on most scissor lifts?',
              options: [
                'Boom lifts are taller than scissor lifts',
                'Boom lift platforms can move suddenly and whip, creating a catapult hazard; scissor lift platforms move only straight up',
                'Scissor lifts are not used in construction',
                'Boom lift guardrails are optional equipment',
              ],
              correctIndex: 1,
              explanation:
                'A boom lift basket can bounce and whip — the "catapult effect" can throw an unrestrained worker over the rail. A scissor lift rises vertically inside its tipping lines, so an intact guardrail system is treated as adequate.',
            },
            {
              question: 'You must operate a boom lift near an overhead power line of unknown voltage. What is the minimum approach distance you should maintain?',
              options: [
                'No clearance is needed if you wear rubber gloves',
                '3 feet',
                'At least 10 feet, treating the line as energized, and more for higher voltage',
                '1 foot for the platform but no limit for the boom',
              ],
              correctIndex: 2,
              explanation:
                'OSHA requires at least 10 feet of clearance from energized lines up to 50 kV, with greater distances for higher voltages. Always treat every line as energized unless it has been confirmed de-energized and grounded.',
            },
            {
              question: 'On a boom lift, is it acceptable to attach your lanyard to a nearby steel beam instead of the basket anchor point?',
              options: [
                'Yes, any solid structure works',
                'Yes, if the beam is stronger than the basket',
                'No — OSHA prohibits belting off to an adjacent structure from a boom lift',
                'Yes, but only above 40 feet',
              ],
              correctIndex: 2,
              explanation:
                'OSHA 1926.453 specifically prohibits belting off to an adjacent pole, structure, or equipment. If the lift moves or tips, a worker tied to an external structure can be dragged out of the basket.',
            },
            {
              question: 'When is travel with the platform raised acceptable on a MEWP?',
              options: [
                'Whenever the operator is in a hurry',
                'Only within the manufacturer stated limits, on firm and level ground, with a clear path',
                'Never under any circumstances',
                'Only with a spotter signaling, regardless of ground conditions',
              ],
              correctIndex: 1,
              explanation:
                'Some MEWPs permit limited elevated travel, but only within the manufacturer limits and on firm, level ground with a clear route. Raised travel over uneven ground or drop-offs is a leading tip-over cause.',
            },
            {
              question: 'What must be planned BEFORE elevated MEWP work begins?',
              options: [
                'The lunch schedule',
                'A rescue plan and means to retrieve a worker from a stuck or elevated platform',
                'The paint color of the platform',
                'Nothing — rescue is handled if and when a problem occurs',
              ],
              correctIndex: 1,
              explanation:
                'A rescue plan must be in place before the platform goes up. If the operator becomes incapacitated or the platform is stuck, the crew needs a pre-planned, practiced way to bring them down safely.',
            },
            {
              question: 'What is the "catapult effect" associated with boom lifts?',
              options: [
                'The lift launching tools out of the basket',
                'The platform whipping when the boom strikes an object, potentially ejecting an unrestrained worker',
                'The hydraulic system overpressurizing',
                'The counterweight shifting during rotation',
              ],
              correctIndex: 1,
              explanation:
                'If a moving boom strikes an obstruction, the basket can whip violently. An unrestrained worker can be thrown ("catapulted") over the rail — which is the core reason boom lift harness use is mandatory.',
            },
          ],
        },
        {
          id: '2c-m3-s2',
          title: 'Ground Assessment',
          durationHours: 1.5,
          learningObjectives: [
            'Explain why ground conditions are the foundation of MEWP stability',
            'Identify ground hazards that can cause a MEWP to tip over or sink',
            'Describe how to assess and support unstable or soft ground before setup',
            'Explain how slope, drop-offs, and underground voids affect MEWP placement',
          ],
          topics: [
            'Stability begins at the ground: the firmest machine tips if the ground under it fails',
            'Soft, saturated, or recently backfilled ground and the risk of a wheel or outrigger sinking',
            'Underground hazards: utility trenches, vaults, septic systems, basements, and buried voids',
            'Slope and grade limits: every MEWP has a maximum rated slope for both driving and elevating',
            'Drop-offs, curbs, floor edges, and floor-load limits when working on elevated slabs or decks',
            'Using cribbing, pads, or steel plate to spread load and support outriggers or wheels',
            'Checking for holes, depressions, and debris along the intended travel path',
            'Weather effects: rain softening soil, frost heave, and thawing ground reducing bearing capacity',
            'Coordinating with the site supervisor and reviewing the A92.22 site risk assessment before positioning',
          ],
          resources: [
            {
              label: 'OSHA — Aerial Lifts Fact Sheet',
              url: 'https://www.osha.gov/sites/default/files/publications/aerial-lifts-factsheet.pdf',
              type: 'osha',
              required: true,
            },
            {
              label: 'OSHA — Scissor Lifts Hazard Alert',
              url: 'https://www.osha.gov/sites/default/files/publications/OSHA3842.pdf',
              type: 'osha',
              required: true,
            },
          ],
          selfCheck: [
            {
              question: 'Why is ground assessment described as the foundation of MEWP stability?',
              options: [
                'Because soft ground makes the machine drive faster',
                'Because even a perfectly maintained MEWP will tip if the ground beneath it fails',
                'Because ground conditions affect only the paint, not safety',
                'Because OSHA requires the ground to be paved',
              ],
              correctIndex: 1,
              explanation:
                'A MEWP stability rating assumes a firm, supporting surface. If a wheel or outrigger sinks or the ground gives way, the machine goes out of level and can tip — regardless of how well it is maintained.',
            },
            {
              question: 'You need to set up a boom lift over an area that was recently excavated and backfilled. What is the concern?',
              options: [
                'The fresh soil looks unprofessional',
                'Backfilled or uncompacted ground may not support the machine and a wheel or outrigger could sink',
                'Backfilled ground is always safe to drive on',
                'There is no concern as long as it is not raining',
              ],
              correctIndex: 1,
              explanation:
                'Recently backfilled trenches and excavations are often uncompacted. A wheel or outrigger can punch through, dropping the machine out of level — assess and support the ground or relocate.',
            },
            {
              question: 'What is the purpose of placing cribbing or steel pads under a MEWP outriggers or wheels?',
              options: [
                'To make the machine taller',
                'To spread the load over a larger area and improve support on less-than-ideal ground',
                'To keep the tires clean',
                'To allow the machine to exceed its rated capacity',
              ],
              correctIndex: 1,
              explanation:
                'Cribbing and pads distribute the concentrated load from a wheel or outrigger over more ground area, reducing the pressure on the soil so it is less likely to fail.',
            },
            {
              question: 'Before positioning a MEWP, what underground hazards should the operator consider?',
              options: [
                'Only the color of the soil',
                'Utility trenches, underground vaults, septic systems, basements, and other buried voids',
                'Nothing below grade matters for aerial lifts',
                'Only the depth of the topsoil',
              ],
              correctIndex: 1,
              explanation:
                'A buried void — a trench, vault, septic tank, or basement — can collapse under the weight of the machine. These hazards are invisible from the surface, so they must be identified before setup.',
            },
            {
              question: 'How does operating slope affect a MEWP?',
              options: [
                'It has no effect as long as the platform is below 20 feet',
                'Every MEWP has a maximum rated slope; exceeding it for driving or elevating risks a tip-over',
                'A steeper slope increases the rated capacity',
                'Slope only matters for scissor lifts, not boom lifts',
              ],
              correctIndex: 1,
              explanation:
                'Manufacturers publish maximum slope ratings because grade shifts the center of gravity toward a tipping line. Exceeding the rated slope — especially with the platform elevated — can tip the machine.',
            },
            {
              question: 'It rained heavily overnight and the job site soil is saturated. How should this affect MEWP setup today?',
              options: [
                'No change — soil moisture does not affect bearing capacity',
                'Saturated soil has reduced bearing capacity, so the operator must re-assess support and may need additional cribbing or a firmer location',
                'Wet soil is always firmer and safer',
                'Just drive faster to avoid sinking',
              ],
              correctIndex: 1,
              explanation:
                'Saturated soil loses bearing capacity and can let a wheel or outrigger sink. Ground that was firm yesterday may not be today — re-assess, add support, or move to a firmer surface.',
            },
          ],
        },
        {
          id: '2c-m3-s3',
          title: 'Inspections',
          durationHours: 1.5,
          learningObjectives: [
            'Describe the pre-use (pre-shift) inspection required before operating a MEWP',
            'List the components checked during a walk-around and a function test',
            'Identify defects that require removing a MEWP from service',
            'Explain the operator responsibility for documentation and reporting defects',
          ],
          topics: [
            'Pre-use inspection: a documented walk-around and function test before each shift or change of operator',
            'Walk-around checks: tires/tracks, hydraulic hoses and cylinders for leaks, structural welds and pins, guardrails and gate, the platform anchor point',
            'Fluid checks: hydraulic oil, engine oil, coolant, and fuel/battery charge',
            'Decals and placards: capacity placard, control markings, and warning labels must be legible and present',
            'Function test: every control through its full range, emergency stop, tilt alarm, and emergency descent — performed near the ground',
            'Checking the upper and lower control stations and the foot switch / enable device',
            'Removal-from-service conditions: hydraulic leaks, cracked or bent structural members, damaged guardrails, missing anchor point, inoperative interlocks or emergency systems',
            'Tag-out: a defective MEWP must be tagged and removed from service until repaired by qualified personnel',
            'Documentation: recording the inspection, reporting defects, and reviewing the equipment log and manufacturer manual',
          ],
          resources: [
            {
              label: 'OSHA — Aerial Lifts Standard 29 CFR 1926.453',
              url: 'https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1926/subpart-L/section-1926.453',
              type: 'osha',
              required: true,
            },
            {
              label: 'OSHA — Aerial Lifts Fact Sheet',
              url: 'https://www.osha.gov/sites/default/files/publications/aerial-lifts-factsheet.pdf',
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
              question: 'How often must a pre-use inspection of a MEWP be performed?',
              options: [
                'Once a week',
                'Before each shift or whenever the operator changes',
                'Once a year by a third party only',
                'Only when a problem is suspected',
              ],
              correctIndex: 1,
              explanation:
                'A documented pre-use inspection is required before each shift and whenever a new operator takes over. It combines a visual walk-around with a function test of every control.',
            },
            {
              question: 'During a walk-around you find hydraulic fluid dripping from a hose fitting on a boom lift. What should you do?',
              options: [
                'Wipe it off and operate — small leaks are normal',
                'Tag the machine out of service and report it; do not operate until it is repaired',
                'Operate only at low height for the rest of the shift',
                'Add hydraulic fluid and continue working',
              ],
              correctIndex: 1,
              explanation:
                'An active hydraulic leak is a removal-from-service condition. A leaking hose can fail under pressure and drop the platform — tag it out and have qualified personnel repair it before use.',
            },
            {
              question: 'Which of these is a removal-from-service condition for a MEWP?',
              options: [
                'A clean, full hydraulic reservoir',
                'A cracked or bent structural member in the boom or scissor stack',
                'A fully charged battery',
                'Legible capacity placards',
              ],
              correctIndex: 1,
              explanation:
                'Cracked or bent structural members can fail catastrophically under load. The machine must be tagged out and inspected/repaired by qualified personnel before it returns to service.',
            },
            {
              question: 'During a pre-use check you notice the capacity placard on the platform is missing. Can the MEWP be used?',
              options: [
                'Yes — the operator can estimate the capacity',
                'No — required capacity and warning placards must be present and legible before the machine is used',
                'Yes, as long as the load is light',
                'Yes, if a supervisor approves verbally',
              ],
              correctIndex: 1,
              explanation:
                'The capacity placard and warning decals are required equipment. Without a legible capacity rating, the operator cannot verify the load is within limits — the machine must be taken out of service until the placard is restored.',
            },
            {
              question: 'What is included in the function test portion of a pre-use inspection?',
              options: [
                'Only checking the tire pressure',
                'Operating every control through its full range and testing the emergency stop, tilt alarm, and emergency descent — done near the ground',
                'Driving the machine at full speed',
                'Raising the platform to full height immediately to save time',
              ],
              correctIndex: 1,
              explanation:
                'The function test runs every control and safety device through its range while the platform is still low, so any fault is discovered before the operator is elevated and exposed.',
            },
            {
              question: 'After completing a pre-use inspection, what is the operator documentation responsibility?',
              options: [
                'No documentation is needed if nothing was wrong',
                'Record that the inspection was completed and report any defects found through the proper channel',
                'Only document inspections on Mondays',
                'Documentation is the manufacturer job, not the operator',
              ],
              correctIndex: 1,
              explanation:
                'The operator records that the pre-use inspection was done and reports any defects so they can be tracked and corrected. Documentation creates accountability and a maintenance history for the machine.',
            },
          ],
        },
      ],
    },
    {
      id: '2c-m4',
      title: 'Review',
      orderInCourse: 4,
      estimatedHours: 4,
      sessions: [
        {
          id: '2c-m4-s1',
          title: 'Practice 1',
          durationHours: 2,
          learningObjectives: [
            'Recall the Massachusetts licensing rules: age, exam score, license duration, fees, and retest waiting period',
            'Distinguish boom lifts from scissor lifts in terms of design, MEWP group, and fall-protection requirements',
            'Apply the ANSI/SAIA A92 standards and classification system to operating scenarios',
            'Demonstrate understanding of power-line clearance and basic stability principles',
          ],
          topics: [
            'Review: MGL Chapter 146 and 230 CMR 6.00 licensing and operating rules',
            'Review: the ANSI/SAIA A92.20 / A92.22 / A92.24 standards and the Group / Type classification system',
            'Review: boom lift vs. scissor lift design and fall-protection differences',
            'Review: OSHA 29 CFR 1926.453 fall protection and power-line clearance',
            'Review: hydraulics, controls, and the upper/lower control override relationship',
            'Mixed-topic practice questions in exam format',
          ],
          resources: [
            {
              label: '230 CMR 6.00 — Hoisting Machinery (mass.gov)',
              url: 'https://www.mass.gov/regulations/230-CMR-600-hoisting-machinery',
              type: 'regulation',
              required: true,
            },
            {
              label: 'OSHA — Aerial Lifts Standard 29 CFR 1926.453',
              url: 'https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1926/subpart-L/section-1926.453',
              type: 'osha',
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
              question: 'You fail the hoisting exam. How long must you wait to retake it, and what is the passing score you need?',
              options: [
                '30 days; 65%',
                '60 days; 70%',
                '90 days; 75%',
                'No wait; 70%',
              ],
              correctIndex: 1,
              explanation:
                'The retest waiting period is 60 days and the passing score is 70%. Both numbers are common exam questions — commit them to memory.',
            },
            {
              question: 'A telescopic boom lift and an electric slab scissor lift are on the same job. Which statement about fall protection is correct?',
              options: [
                'Both require only guardrails',
                'Both require a personal fall arrest harness at all times',
                'The boom lift requires a harness to the anchor point; the scissor lift relies on its intact guardrail system',
                'Neither requires any fall protection below 30 feet',
              ],
              correctIndex: 2,
              explanation:
                'OSHA treats boom lifts as aerial lifts (harness required) and scissor lifts as mobile scaffolds (intact guardrails are the primary protection). Knowing which rule applies to which machine is essential.',
            },
            {
              question: 'Which ANSI/SAIA A92 standard would a training provider follow when building a MEWP operator course?',
              options: ['A92.20', 'A92.22', 'A92.24', 'A92.6'],
              correctIndex: 2,
              explanation:
                'A92.24 is the training standard. A92.20 governs design/build and A92.22 governs safe use — design, use, train.',
            },
            {
              question: 'An operator wants to belt off to a building beam for "extra security" while in a boom lift basket. This is:',
              options: [
                'A good practice OSHA encourages',
                'Prohibited by OSHA — the lanyard must attach to the manufacturer basket anchor point',
                'Allowed only above 50 feet',
                'Allowed if the beam is painted',
              ],
              correctIndex: 1,
              explanation:
                'OSHA 1926.453 prohibits belting off to an adjacent structure. If the lift tips or moves, a worker tied to an external point can be pulled out of the basket.',
            },
            {
              question: 'On a MEWP, the ground (lower) controls are primarily there to:',
              options: [
                'Let a supervisor race the operator',
                'Allow rescue and emergency lowering by overriding the platform controls',
                'Increase the platform rated capacity',
                'Charge the battery',
              ],
              correctIndex: 1,
              explanation:
                'Ground controls can override the upper controls so someone on the ground can lower an incapacitated operator or a stuck platform. The ground station must always be kept clear and accessible.',
            },
            {
              question: 'Most scissor lifts are Group A and most boom lifts are Group B. The key difference is that a Group B platform:',
              options: [
                'Is always battery powered',
                'Can move beyond the tipping lines of the chassis',
                'Cannot be used outdoors',
                'Has no rated capacity',
              ],
              correctIndex: 1,
              explanation:
                'Group B platforms can extend beyond the tipping lines, which is normal for booms. That is why boom lift stability depends so heavily on level ground, avoiding side loads, and respecting the capacity placard.',
            },
            {
              question: 'You must work near a power line of unknown voltage. The correct approach is to:',
              options: [
                'Get as close as needed and work quickly',
                'Maintain at least 10 feet of clearance, treat the line as energized, and increase the distance for higher voltage',
                'Touch the line briefly to test if it is live',
                'Rely on rubber tires to insulate the machine',
              ],
              correctIndex: 1,
              explanation:
                'OSHA requires a minimum 10-foot approach distance for lines up to 50 kV, with more clearance for higher voltages. Always assume a line is energized unless it has been confirmed de-energized and grounded.',
            },
          ],
        },
        {
          id: '2c-m4-s2',
          title: 'Practice 2',
          durationHours: 2,
          learningObjectives: [
            'Apply ground assessment and stability principles to realistic setup scenarios',
            'Apply pre-use inspection knowledge to identify removal-from-service conditions',
            'Integrate regulations, equipment, and operation knowledge across mixed scenarios',
            'Self-assess exam readiness and identify weak topic areas for further study',
          ],
          topics: [
            'Review: ground assessment, soil bearing, slope limits, and underground voids',
            'Review: pre-use inspection, function testing, and removal-from-service conditions',
            'Review: travel with the platform raised and overhead/obstruction hazards',
            'Review: tip-over causes and how stability is maintained for boom and scissor lifts',
            'Review: documentation, defect reporting, and tag-out',
            'Comprehensive mixed-topic practice questions in exam format',
          ],
          resources: [
            {
              label: 'OSHA — Aerial Lifts Standard 29 CFR 1926.453',
              url: 'https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1926/subpart-L/section-1926.453',
              type: 'osha',
              required: true,
            },
            {
              label: 'OSHA — Scissor Lifts Hazard Alert',
              url: 'https://www.osha.gov/sites/default/files/publications/OSHA3842.pdf',
              type: 'osha',
              required: true,
            },
            {
              label: 'MA Hoisting Licensing & Exams (mass.gov)',
              url: 'https://www.mass.gov/hoisting-licensing-and-exams',
              type: 'reference',
              required: false,
            },
          ],
          selfCheck: [
            {
              question: 'A boom lift must be set up partly over a recently backfilled utility trench. The safest action is to:',
              options: [
                'Set up as planned — backfill is always compacted',
                'Reposition onto firm, undisturbed ground or properly support and assess the area before setup',
                'Set up but keep the platform under 10 feet',
                'Drive across it quickly to avoid sinking',
              ],
              correctIndex: 1,
              explanation:
                'Backfilled trenches are often uncompacted and can let a wheel or outrigger sink. Relocate to undisturbed ground, or properly assess and support the area — never assume backfill will hold.',
            },
            {
              question: 'During a pre-use inspection you find the platform gate latch is broken and will not stay closed. You should:',
              options: [
                'Tie the gate shut with wire and operate',
                'Tag the machine out of service until the gate is repaired',
                'Operate but keep the platform low',
                'Operate only with two workers in the basket',
              ],
              correctIndex: 1,
              explanation:
                'The gate is part of the guardrail system. A gate that will not latch leaves an open fall hazard — the machine must be tagged out and repaired before use.',
            },
            {
              question: 'Which combination of conditions presents the highest tip-over risk for a boom lift?',
              options: [
                'Platform stowed, machine on level pavement',
                'Boom extended horizontally, chassis out of level, with wind on the platform',
                'Platform raised straight up on level, firm ground in calm air',
                'Driving slowly with the boom cradled',
              ],
              correctIndex: 1,
              explanation:
                'Horizontal boom extension moves the load away from the chassis, an out-of-level chassis shifts the center of gravity, and wind adds a side force. Stacking these conditions can push the machine past its stability limits.',
            },
            {
              question: 'A MEWP emergency stop button at the platform does not work during the pre-use function test. What is the correct response?',
              options: [
                'Use the machine anyway since the controls still work',
                'Remove the machine from service and tag it until the emergency stop is repaired',
                'Test it again at full height',
                'Disconnect the battery to reset it and continue',
              ],
              correctIndex: 1,
              explanation:
                'An inoperative emergency stop is a removal-from-service condition. Safety devices must function before the machine is used — tag it out and have it repaired by qualified personnel.',
            },
            {
              question: 'An operator finishes the shift and parks the MEWP. To leave it safe, the operator should:',
              options: [
                'Leave the platform raised for the next crew',
                'Fully lower the platform, set the brakes, shut down, secure the controls, and report any defects',
                'Leave the keys in and the engine running',
                'Park it on a slope to save flat space',
              ],
              correctIndex: 1,
              explanation:
                'Proper shutdown means the platform is lowered and stowed, brakes set, machine off and secured, parked on firm level ground, and any defects reported so the next operator is not surprised.',
            },
            {
              question: 'Travel with the platform raised is permitted on a MEWP:',
              options: [
                'Always, as long as the operator is careful',
                'Never, under any circumstances',
                'Only within the manufacturer stated limits, on firm and level ground, with a clear path',
                'Only on public roads',
              ],
              correctIndex: 2,
              explanation:
                'Some MEWPs allow limited elevated travel, but only within the manufacturer limits and on firm, level ground with a clear route. Raised travel over uneven ground or near drop-offs is a major tip-over cause.',
            },
            {
              question: 'On the exam you find you keep missing questions about MEWP classification. The best use of your remaining study time is to:',
              options: [
                'Skip that topic — it is unlikely to appear again',
                'Focus your review on the A92 Group A/B and Type 1/2/3 system until you can apply it confidently',
                'Only re-read topics you already know well',
                'Memorize the answers without understanding why',
              ],
              correctIndex: 1,
              explanation:
                'Targeted review of weak areas is the most efficient way to raise your score. Understanding the A92 classification system — not just memorizing it — lets you answer scenario questions you have not seen before.',
            },
          ],
        },
      ],
    },
  ],
};
