import { LicenseRestriction } from '../types';

export const restriction_2a1c: LicenseRestriction = {
  code: '2A/1C',
  name: 'Excavators, Backhoes, Loaders & Skid Steers',
  description: 'The most common combo license. Covers excavators and track hoes (2A) plus loader-backhoes and wheel loaders (1C).',
  equipmentCovered: ['Excavators', 'Track hoes', 'Loader-backhoes', 'Wheel loaders', 'Skid steers'],
  totalHours: 24,
  modules: [
    {
      id: '2a1c-m1',
      title: 'Legal & Regulatory Foundation',
      orderInCourse: 1,
      estimatedHours: 6,
      sessions: [
        {
          id: '2a1c-m1-s1',
          title: 'MGL Chapter 146 §§ 53–54A',
          durationHours: 2,
          learningObjectives: [
            'Define "hoisting machinery" per MA statute',
            'State the 10 ft / 500 lb / ¼ cubic yard thresholds from memory',
            'Identify who must hold a hoisting license',
          ],
          topics: [
            '§53 licensing requirement',
            '§54 examination & issuance',
            '§54A apprentice licenses',
            'Definition of hoisting machinery and the catch-all clause',
          ],
          resources: [
            {
              label: 'MGL Chapter 146 — Licensing Requirements Reference',
              url: '/reference/2a1c-m1-s1',
              type: 'reference',
              required: true,
            },

            {
              label: 'MGL c. 146 §§ 53–54A',
              url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXX/Chapter146',
              type: 'regulation',
              required: true,
            },
          ],
          selfCheck: [
            {
              question: 'Which of the following triggers the MA hoisting license requirement?',
              options: [
                'Lifting 400 lbs to 8 ft with a ⅛ yard bucket',
                'Lifting 600 lbs to 9 ft with a ⅛ yard bucket',
                'Lifting 400 lbs to 12 ft with a ⅛ yard bucket',
                'Lifting 400 lbs to 8 ft with a ½ yard bucket',
              ],
              correctIndex: 3,
              explanation: 'The threshold is OR, not AND: over 10 ft OR over 500 lbs OR bucket over ¼ cubic yard. A ½ yard bucket alone triggers the requirement.',
            },
            {
              question: 'Who is exempt from holding a hoisting license in Massachusetts?',
              options: [
                'Equipment manufacturers testing their own machinery',
                'Homeowners doing excavation on their own property',
                'Licensed equipment operators under direct supervision',
                'All of the above',
              ],
              correctIndex: 0,
              explanation: 'Equipment manufacturers are exempt per MGL §53. Homeowners and supervised operators still require licenses for hoisting operations.',
            },
            {
              question: 'How long is a hoisting license valid in Massachusetts?',
              options: ['1 year', '2 years', '3 years', '5 years'],
              correctIndex: 2,
              explanation: 'Hoisting licenses are valid for 3 years from the date of issuance per MGL §54.',
            },
          ],
        },
        {
          id: '2a1c-m1-s2',
          title: 'MGL §§ 64–67 + 230 CMR 6.00 Overview',
          durationHours: 2,
          learningObjectives: [
            'Summarize MGL §§64-67 safety requirements',
            'List the six categories of hoisting equipment under 230 CMR 6.00',
            'Distinguish between Class A and Class B inspections',
          ],
          topics: [
            'MGL §64 – General safety requirements',
            'MGL §65 – Load limits and calculations',
            'MGL §66 – Operator qualifications',
            'MGL §67 – Accident reporting',
            '230 CMR 6.00 – Six equipment categories',
            'Annual and triennial inspection cycles',
          ],
          resources: [
            {
              label: '230 CMR 6.00 & MGL §§64-67 Operating Rules Reference',
              url: '/reference/2a1c-m1-s2',
              type: 'reference',
              required: true,
            },

            {
              label: '230 CMR 6.00 – Hoisting Equipment Safety',
              url: 'https://www.mass.gov/info-details/230-cmr-6-hoisting-equipment-and-fueling-equipment',
              type: 'regulation',
              required: true,
            },
          ],
          selfCheck: [
            {
              question: 'What is the primary difference between MGL and 230 CMR regulations?',
              options: [
                'MGL covers operators; CMR covers equipment',
                'MGL is state law; CMR is state code (implementing rules)',
                'MGL is federal; CMR is state',
                'There is no difference',
              ],
              correctIndex: 1,
              explanation: 'MGL (Massachusetts General Law) is statute passed by the legislature. 230 CMR is the state code of regulations implementing and expanding MGL.',
            },
          ],
        },
        {
          id: '2a1c-m1-s3',
          title: 'Renewal, Grace Period & Penalties',
          durationHours: 2,
          learningObjectives: [
            'State the renewal deadline and grace period',
            'List penalties for operating without a current license',
            'Understand reinstatement procedures',
          ],
          topics: [
            'Renewal 30 days before expiration',
            '30-day grace period after expiration',
            'Civil penalties (up to $500/day per MGL §53)',
            'Criminal penalties for repeat violations',
            'Reinstatement after lapse',
          ],
          resources: [
            {
              label: 'Renewal, Penalties & Licensing Compliance Reference',
              url: '/reference/2a1c-m1-s3',
              type: 'reference',
              required: true,
            },

            {
              label: 'OPSI Hoisting License Renewal',
              url: 'https://www.mass.gov/how-to/renew-a-hoisting-license',
              type: 'reference',
              required: true,
            },
          ],
          selfCheck: [
            {
              question: 'Your hoisting license expires on March 15. What is the latest date you can renew without losing your license?',
              options: [
                'March 15',
                'April 15',
                'May 15',
                'June 15',
              ],
              correctIndex: 2,
              explanation: 'You have a 30-day grace period after expiration. From March 15, 30 days brings you to April 14. After April 14, the grace period ends and you lose the license.',
            },
          ],
        },
      ],
    },
    {
      id: '2a1c-m2',
      title: 'Equipment Systems & Components',
      orderInCourse: 2,
      estimatedHours: 6,
      sessions: [
        {
          id: '2a1c-m2-s1',
          title: 'Excavator Anatomy & Controls',
          durationHours: 2,
          learningObjectives: [
            'Identify major structural components of tracked excavators',
            'Explain the function of boom, arm, and bucket',
            'Describe operator controls and their functions',
          ],
          topics: [
            'Track frame and undercarriage',
            'Boom, arm, bucket geometry and pivot points',
            'Hydraulic cylinders for boom, arm, bucket',
            'Slew bearing and slew motor',
            'Cabin placement and visibility',
            'Joystick vs. levers control systems',
          ],
          resources: [
            {
              label: 'Excavator & Track Hoe — Component Reference',
              url: '/reference/2a1c-m2-s1',
              type: 'reference',
              required: true,
            },

            {
              label: 'Excavator Component Reference — Anatomy, Hydraulics & Inspection',
              url: '/reference/excavator-anatomy',
              type: 'reference',
              required: true,
            },
          ],
          selfCheck: [
            {
              question: 'The boom of an excavator is primarily controlled by which hydraulic cylinders?',
              options: [
                'Boom cylinders (vertical movement) and arm cylinders',
                'Track drive motors',
                'Slew motor',
                'Bucket rotation cylinder only',
              ],
              correctIndex: 0,
              explanation: 'The boom is lifted and lowered by boom cylinders. Independent arm cylinders control the arm (dipper stick) angle.',
            },
          ],
        },
        {
          id: '2a1c-m2-s2',
          title: 'Loader & Backhoe Anatomy & Controls',
          durationHours: 2,
          learningObjectives: [
            'Identify loader bucket and loader-backhoe attachment systems',
            'Explain wheel loader vs. track loader differences',
            'Describe backhoe bucket orientation and hydraulic operation',
          ],
          topics: [
            'Loader bucket geometry and attachment frame',
            'Wheel loader tires and track loader undercarriage',
            'Backhoe bucket digging depth and orientation',
            'Backhoe boom and arm geometry',
            'Universal quick-attach systems',
            'Load distribution and stability triangle',
          ],
          resources: [
            {
              label: 'Loader & Backhoe — Anatomy & Controls Reference',
              url: '/reference/2a1c-m2-s2',
              type: 'reference',
              required: true,
            },

            {
              label: 'Caterpillar Loader Safety Guide',
              url: 'https://www.cat.com',
              type: 'manual',
              required: false,
            },
          ],
          selfCheck: [
            {
              question: 'What is the primary safety concern when using a loader in unstable ground?',
              options: [
                'The load will slip out of the bucket',
                'The machine may tip over due to destabilized support surface',
                'The hydraulic system will rupture',
                'The operator will lose visibility',
              ],
              correctIndex: 1,
              explanation: 'Loaders are heavy machines with a high center of gravity. Soft or sloping ground reduces the stability triangle, increasing tip-over risk.',
            },
          ],
        },
        {
          id: '2a1c-m2-s3',
          title: 'Hydraulics Fundamentals',
          durationHours: 2,
          learningObjectives: [
            'Explain Pascal\'s principle and pressure in hydraulic systems',
            'Identify hydraulic pressure relief and flow control components',
            'Recognize signs of hydraulic fluid degradation',
          ],
          topics: [
            'Pascal\'s principle and force multiplication',
            'Pump displacement (cc/rev) and flow (gpm)',
            'Pressure relief valves and safety settings',
            'Proportional and directional control valves',
            'Hydraulic fluid types (ISO VG, viscosity, additives)',
            'Filtering and heat management',
            'Common failure modes (cavitation, overheating)',
          ],
          resources: [
            {
              label: 'Hydraulic Systems — Safety & Inspection Reference',
              url: '/reference/2a1c-m2-s3',
              type: 'reference',
              required: true,
            },

            {
              label: 'Parker Hydraulics Handbook',
              url: 'https://www.parker.com',
              type: 'reference',
              required: false,
            },
          ],
          selfCheck: [
            {
              question: 'If a hydraulic pressure relief valve is set at 3000 psi, what happens if load pressure exceeds that setting?',
              options: [
                'The pump shuts down',
                'The relief valve opens and diverts flow back to tank',
                'The system pressure slowly increases beyond 3000 psi',
                'The hydraulic hose bursts',
              ],
              correctIndex: 1,
              explanation: 'Relief valves are designed to open at a set pressure, protecting the system from overpressure by diverting excess flow back to the tank.',
            },
          ],
        },
      ],
    },
    {
      id: '2a1c-m3',
      title: 'Safe Operation & Inspections',
      orderInCourse: 3,
      estimatedHours: 6,
      sessions: [
        {
          id: '2a1c-m3-s1',
          title: 'Pre-Shift Inspection & Daily Walkthrough',
          durationHours: 2,
          learningObjectives: [
            'Conduct a systematic pre-shift inspection of excavators, loaders, and backhoes',
            'Identify and document defects that prohibit operation',
            'Perform OSHA-required visual checks',
          ],
          topics: [
            'Structural cracks and welding integrity',
            'Hydraulic hose condition: abrasion, leaks, bulges',
            'Tire/track condition and pressure (where applicable)',
            'Bucket and attachment security',
            'Control linkage freedom and binding',
            'Fluids (coolant, hydraulic oil, fuel) levels and leaks',
            'Documentation and signage of defects',
            'When to tag out equipment ("Remove from Service")',
          ],
          resources: [
            {
              label: 'Pre-Shift Inspection Reference & Checklist',
              url: '/reference/2a1c-m3-s1',
              type: 'reference',
              required: true,
            },

            {
              label: '29 CFR 1926.550 – Cranes and Derricks',
              url: 'https://www.osha.gov/laws-regs/regulations/1910/1926/1926.550',
              type: 'regulation',
              required: true,
            },
          ],
          selfCheck: [
            {
              question: 'During pre-shift inspection, you notice a hydraulic hose has a small bulge but no visible leak. What should you do?',
              options: [
                'Continue operating; it\'s just cosmetic',
                'Document the defect and tag the machine "Do Not Operate"',
                'Apply sealant and continue operating',
                'Monitor it and replace at the end of the week',
              ],
              correctIndex: 1,
              explanation: 'A bulge in a hose indicates internal delamination and imminent failure. The hose must be replaced before operation to prevent sudden loss of hydraulic power or fluid spray.',
            },
          ],
        },
        {
          id: '2a1c-m3-s2',
          title: 'Operating Hazards & Safe Procedures',
          durationHours: 2,
          learningObjectives: [
            'Identify swing-radius and crush-point hazards',
            'Apply safe digging practices per OSHA Subpart P',
            'Use hand signals and communications',
          ],
          topics: [
            'Swing radius awareness and exclusion zones',
            'Crush points (bucket, arm, boom articulation)',
            'Visibility blind spots and spotters',
            'Trench entry depth limits (OSHA Subpart P)',
            'Adjacent utility location (Call Before You Dig)',
            'Load stability and center of gravity',
            'Weather considerations (wind, rain, unstable ground)',
            'Communication via hand signals and two-way radio',
          ],
          resources: [
            {
              label: 'Operating Hazards & Safe Procedures Reference',
              url: '/reference/2a1c-m3-s2',
              type: 'reference',
              required: true,
            },

            {
              label: 'OSHA Subpart P – Excavations',
              url: 'https://www.osha.gov/laws-regs/regulations/1910/1926/1926.650',
              type: 'regulation',
              required: true,
            },
            {
              label: 'OSHA Hand Signals for Excavation',
              url: 'https://www.osha.gov',
              type: 'reference',
              required: false,
            },
          ],
          selfCheck: [
            {
              question: 'What is the maximum trench depth an operator can dig with an excavator without a competent person and trench protection per OSHA Subpart P?',
              options: [
                '3 feet',
                '4 feet',
                '5 feet',
                'No depth is permitted without protection',
              ],
              correctIndex: 3,
              explanation: 'OSHA requires trench protection (shoring, sloping, or shields) for any trench deeper than 5 feet. Some jurisdictions and soil types require protection at lesser depths.',
            },
          ],
        },
        {
          id: '2a1c-m3-s3',
          title: 'Hand Signals & Communication Procedures',
          durationHours: 2,
          learningObjectives: [
            'Demonstrate standardized hand signals per 230 CMR 6.00',
            'Explain radio communication protocols',
            'Apply spotting and two-way communication best practices',
          ],
          topics: [
            'ANSI/ASABE B29.19 hand signals (raise, lower, swing, stop)',
            'Signaler positioning and visibility',
            'Radio protocols and channel discipline',
            'Spotter assignments and responsibilities',
            'Deaf or non-English-speaking operator accommodation',
            'Emergency hand signals (STOP)',
          ],
          resources: [
            {
              label: 'Hand Signals & Communication Reference',
              url: '/reference/2a1c-m3-s3',
              type: 'reference',
              required: true,
            },

            {
              label: '230 CMR 6.00 §6.20 – Hand Signals',
              url: 'https://www.mass.gov/info-details/230-cmr-6-hoisting-equipment-and-fueling-equipment',
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
              question: 'What hand signal means "STOP" universally per ANSI standards?',
              options: [
                'One hand raised with palm out',
                'Both hands raised above the head',
                'Crossed arms across the chest',
                'Pointing downward with both hands',
              ],
              correctIndex: 2,
              explanation: 'Crossed arms across the chest is the universal STOP signal in construction and hoisting. All operators and signalers must know and respect this signal immediately.',
            },
          ],
        },
      ],
    },
    {
      id: '2a1c-m4',
      title: 'OSHA Compliance & Exam Review',
      orderInCourse: 4,
      estimatedHours: 6,
      sessions: [
        {
          id: '2a1c-m4-s1',
          title: '29 CFR 1926 Highlights for Operators',
          durationHours: 2,
          learningObjectives: [
            'Apply OSHA 1926 subparts relevant to excavation and material handling',
            'Explain fall protection and PPE requirements',
            'Identify common OSHA citations and violations',
          ],
          topics: [
            '29 CFR 1926.500 – Fall Protection (excavation equipment)',
            '29 CFR 1926.550 – Cranes and Derricks in Construction',
            '29 CFR 1926.650 – Excavations (Subpart P)',
            'PPE requirements: hard hat, safety glasses, hearing protection',
            'Lock-out / Tag-out (LOTO) procedures',
            'Common violations: inadequate inspection, unsafe trenching, crushing hazards',
          ],
          resources: [
            {
              label: 'OSHA 29 CFR 1926 Highlights Reference',
              url: '/reference/2a1c-m4-s1',
              type: 'reference',
              required: true,
            },

            {
              label: '29 CFR 1926 Subpart R – Steel Erection',
              url: 'https://www.osha.gov/laws-regs/regulations/1910/1926/1926.500',
              type: 'regulation',
              required: false,
            },
          ],
          selfCheck: [
            {
              question: 'An operator on an excavator is working on a slope at a height of 8 feet above the ground. What is required?',
              options: [
                'Hard hat only',
                'Hard hat and safety harness with lanyard',
                'Hard hat, safety harness, and guardrails',
                'Nothing; the cabin is enclosed',
              ],
              correctIndex: 2,
              explanation: 'OSHA 1926.500 requires fall protection for work at heights above 6 feet. This typically includes guardrails, safety harnesses with lanyards, or personal fall arrest systems (PFAS).',
            },
          ],
        },
        {
          id: '2a1c-m4-s2',
          title: 'Practice Exam 1 – Mixed Content',
          durationHours: 2,
          learningObjectives: [
            'Apply knowledge from all modules to multi-part scenarios',
            'Identify the correct answer given competing wrong answers',
            'Build confidence for the official MA hoisting exam',
          ],
          topics: [
            'Scenario-based questions combining regulation, equipment, and safety',
            'Time management and question reading strategies',
            'Identifying distractor answers',
          ],
          resources: [
            {
              label: 'Practice Exam 1 — Critical Numbers & Strategy Reference',
              url: '/reference/2a1c-m4-s2',
              type: 'reference',
              required: true,
            },

            {
              label: 'MA OPSI Official Study Guide',
              url: 'https://www.mass.gov/info-details/opsi-publications-and-forms',
              type: 'reference',
              required: false,
            },
          ],
          selfCheck: [
            {
              question: 'You are operating an excavator near a utility pole. When should you call the utility location service?',
              options: [
                'Only if you plan to dig within 10 feet',
                'Always, before any excavation within 100 feet',
                'Only if the pole appears to be in your swing radius',
                'Never; it\'s the site supervisor\'s job',
              ],
              correctIndex: 1,
              explanation: 'Call Before You Dig rules require locating utilities before any excavation. The safe rule is: always call before starting any work that may disturb the ground.',
            },
            {
              question: 'A hydraulic hose on your loader is weeping (small drips) from the connection. Can you operate the machine?',
              options: [
                'Yes, if the leakage is minimal',
                'No, you must tag the machine out of service',
                'Yes, but only for brief operations',
                'Yes, if you monitor it closely',
              ],
              correctIndex: 1,
              explanation: 'Any leak is a defect that requires removal from service. A weeping connection can worsen suddenly, leading to loss of control.',
            },
            {
              question: 'If your hoisting license expires and you do not renew it, when can you legally operate hoisting equipment again?',
              options: [
                'Immediately after renewal',
                'After a 30-day waiting period',
                'Immediately after renewal; no waiting period',
                'Never; you must reapply from scratch',
              ],
              correctIndex: 2,
              explanation: 'Once your renewed license is issued by OPSI, you are legal to operate immediately. There is no waiting period for renewal.',
            },
          ],
        },
        {
          id: '2a1c-m4-s3',
          title: 'Practice Exam 2 & Review',
          durationHours: 2,
          learningObjectives: [
            'Take a second full-length practice exam',
            'Review weak areas and reinforce learning',
            'Prepare final strategy for official exam day',
          ],
          topics: [
            'Comprehensive scenario-based questions',
            'Time pacing and test-day strategy',
            'Final review of critical regulations and procedures',
            'Exam day logistics: what to bring, testing center protocols',
          ],
          resources: [
            {
              label: 'Practice Exam 2 & Exam Day Prep Reference',
              url: '/reference/2a1c-m4-s3',
              type: 'reference',
              required: true,
            },

            {
              label: 'OPSI Hoisting Exam Information',
              url: 'https://www.mass.gov/how-to/apply-for-a-hoisting-license',
              type: 'reference',
              required: false,
            },
          ],
          selfCheck: [
            {
              question: 'On exam day, you notice a question that contradicts what you learned in class. What should you do?',
              options: [
                'Raise your hand and ask the proctor for clarification',
                'Choose the answer that matches your training',
                'Guess and move on',
                'Report it after the exam to OPSI',
              ],
              correctIndex: 0,
              explanation: 'If you encounter an ambiguous question, raise your hand and ask the proctor. They can provide guidance or note the issue for review.',
            },
            {
              question: 'A typical MA hoisting exam has how many questions and what is the passing score?',
              options: [
                '20 questions, 60% passing',
                '30 questions, 70% passing',
                '40 questions, 80% passing',
                '50 questions, 75% passing',
              ],
              correctIndex: 1,
              explanation: 'The standard MA hoisting exam is approximately 30–40 multiple-choice questions with a 70% minimum passing score.',
            },
            {
              question: 'If you fail the MA hoisting exam, how soon can you retake it?',
              options: [
                'Immediately, at any time',
                '7 days after the failed attempt',
                '30 days after the failed attempt',
                '60 days after the failed attempt',
              ],
              correctIndex: 3,
              explanation: 'You cannot retake the hoisting exam until 60 days have passed after a failed attempt. Plan your study and retake accordingly.',
            },
          ],
        },
      ],
    },
  ],
};
