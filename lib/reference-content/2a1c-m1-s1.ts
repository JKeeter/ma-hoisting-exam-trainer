import { ReferencePageProps } from '@/components/ReferencePage';

const data: ReferencePageProps = {
  title: 'MGL Chapter 146 — Licensing Requirements',
  subtitle: 'MA 2A/1C Hoisting License · Module 1, Session 1',
  sections: [
    {
      id: 'definition',
      title: 'What Is "Hoisting Machinery"?',
      icon: '📋',
      color: 'border-slate-400',
      headerBg: 'bg-slate-100',
      content: [
        {
          heading: 'Statutory Definition (MGL §53)',
          body: `MGL Chapter 146 §53 defines hoisting machinery as any power-driven apparatus used to raise, lower, or move materials — including derricks, cableways, cargo-discharge machinery, and excavating equipment.

The critical triggering thresholds operate on an **OR** basis — meeting any ONE is sufficient to require a license:

• **Height:** Lifting or lowering material more than **10 feet**
• **Weight:** Handling loads exceeding **500 pounds**
• **Bucket/dipper capacity:** Using a bucket or dipper larger than **¼ cubic yard** (0.25 yd³)

**Example application — excavator:** A tracked excavator using a ⅜-yard bucket (0.375 yd³) on a flat site, lifting materials only 4 feet, weighing 400 lbs — still requires a 2A license because the bucket capacity alone exceeds the ¼-yard threshold.

**Example application — wheel loader:** A wheel loader with a 1.5-yard bucket lifting palletized material to 6 feet at 350 lbs — the bucket capacity alone (1.5 yd³ >> 0.25 yd³) requires a 1C license.

**The catch-all clause:** The statute also includes any other power-operated lifting or digging apparatus of a similar nature — OPSI interprets this broadly. When in doubt, assume a license is required.`,
        },
        {
          heading: 'The OR Rule — A Common Exam Trap',
          body: `Many exam questions try to trick candidates into thinking ALL three thresholds must be met. They do not.

**Wrong assumption:** "The machine only lifts 400 lbs to 8 ft with a ⅛-yard bucket — none of the thresholds are met."

**Correct analysis:**
• Height: 8 ft → under 10 ft ✓ (not triggered)
• Weight: 400 lbs → under 500 lbs ✓ (not triggered)
• Bucket: ⅛ yard = 0.125 yd³ → under ¼ yard ✓ (not triggered)
• **Conclusion: No license required in this specific case**

**But change the bucket to ⅜ yard:** Even though height and weight are within limits, the bucket capacity alone (0.375 yd³ > 0.25 yd³) triggers the license requirement.

**Exam tip:** Read each option carefully and evaluate each threshold independently.`,
        },
      ],
    },
    {
      id: 'who-needs',
      title: 'Who Must Be Licensed',
      icon: '👷',
      color: 'border-blue-400',
      headerBg: 'bg-blue-50',
      content: [
        {
          heading: 'General Rule',
          body: `Any person who operates hoisting machinery meeting the statutory thresholds in Massachusetts must hold a valid hoisting engineer license in the appropriate restriction class.

This requirement applies regardless of:
• Whether the work is on public or private property
• Whether the operator is an employee or owner-operator
• Whether the equipment is owned or rented
• The duration of the operation (even a single shift)

The license must be in the correct **restriction class** for the equipment being operated:
• **2A** covers excavators, track hoes, and backhoes
• **1C** covers telescoping boom cranes, loader-backhoes, and wheel loaders
• **2A/1C combined** covers all of the above

A 2A-only license does NOT authorize operating a wheel loader. A 1C-only license does NOT authorize operating a standard excavator. The combined 2A/1C license is required for operators who use both equipment types on a job site.`,
        },
        {
          heading: 'Exemptions (Complete List)',
          body: `The following persons are exempt from the licensing requirement under MGL §53:

**1. Agricultural operators**
Persons operating excavating or hoisting equipment exclusively in agricultural use on agricultural land. This exemption is limited to true farming operations — not construction work that happens to occur on a farm.

**2. Public utilities (supervised)**
Employees of public utility companies (electric, gas, telephone) who operate under the direct supervision of a licensed hoisting engineer AND whose company has a OPSI-approved training program in place.

**3. Industrial operations on company property**
Persons operating lift trucks (forklifts), overhead cranes, and similar equipment exclusively within an industrial facility, on company property, not accessible to the public. Note: this exemption is narrow — it does NOT apply to construction equipment or equipment used on construction sites.

**4. Vocational/technical schools**
Students and instructors at public high school vocational programs operating equipment for educational purposes.

**5. Approved apprenticeship programs**
Apprentices enrolled in state-recognized apprenticeship programs, operating under the direct supervision of a licensed operator.

**Important:** "Private property" is NOT an exemption by itself. An unlicensed person operating a wheel loader on private land is still in violation of MGL §53 unless one of the above exemptions applies.`,
        },
      ],
    },
    {
      id: 'exam-license',
      title: 'Exam, Issuance & License Details',
      icon: '📝',
      color: 'border-green-400',
      headerBg: 'bg-green-50',
      content: [
        {
          heading: 'MGL §54 — Exam & Issuance',
          body: `MGL §54 requires that before a hoisting engineer license is issued, the applicant must pass an examination demonstrating:

• **Practical knowledge** of all working parts of the machinery in the restriction class
• **Safe operating practices** specific to that equipment
• Knowledge of Massachusetts laws and regulations governing hoisting operations
• Knowledge of hand signals required by 230 CMR 6.00

**Exam format:** Multiple choice, 30–40 questions. Administered by OPSI or an OPSI-approved testing center.

**Passing score:** 70% minimum. Below 70% = failed attempt.

**Failed attempt:** Must wait **60 days** before retesting. No exceptions. No appeals for oral examination.

**Application fee:** $75 per restriction class (non-refundable). Pay with the initial application — not after the exam.

**Minimum age:** 18 years old. No exceptions.`,
        },
        {
          heading: 'MGL §54A — Apprentice Licenses',
          body: `MGL §54A provides a pathway for apprentices who are not yet ready to take the full licensing exam:

**Who qualifies:** A person enrolled in a recognized apprenticeship training program who is learning to operate hoisting equipment.

**Conditions:**
• The apprentice may only operate under the **direct, on-site supervision** of a fully licensed operator who holds the appropriate restriction class
• The supervising operator must be physically present — not just available by radio
• The supervising operator is responsible for the apprentice's actions

**What "direct supervision" means:** The licensed operator must be close enough to observe the operation and intervene immediately if needed. Sitting in a site office does not qualify.

**Apprentice license restriction:** The apprentice license specifies which equipment may be operated and under what conditions.`,
        },
        {
          heading: 'License Duration & Renewal',
          body: `**License validity:** The 2A/1C hoisting engineer license is valid for **2 years** from the date of issuance.

**Renewal:** Must be completed before the expiration date. There is no official grace period that permits continued operation after expiration. An expired license is an invalid license.

**Renewal process:**
• Apply through the MA Division of Occupational Licensure (DOL) at mass.gov
• Pay the renewal fee
• No additional exam required for standard renewal
• Licenses that lapse for extended periods may require re-examination — contact OPSI for current rules

**Reciprocity:** Massachusetts does not automatically recognize out-of-state hoisting licenses. Out-of-state operators working in Massachusetts must obtain a MA license.`,
        },
        {
          heading: 'License Classes — Group Overview',
          body: `OPSI categorizes hoisting machinery into restriction classes. You must hold the correct class for your equipment:

**Group 1 — Cranes:**
• 1A: Friction winch drum cranes (conventional/lattice boom)
• 1B: Hydraulic cranes (non-telescoping)
• 1C: Telescoping boom cranes, loader-backhoes, wheel loaders
• 1D: Industrial lift trucks (forklifts, reach trucks, telehandlers)
• 1E: Specialty cranes (per OPSI scope)

**Group 2 — Excavating:**
• 2A: All excavating machinery — crawler and rubber-tired excavators, track hoes, backhoes, skid steers
• 2B: Specialty excavating (per OPSI scope)
• 2C: Aerial lifts and MEWPs (boom lifts, scissor lifts)

**Group 3 — Specialty:**
• 3A: Pile drivers, derricks, cableways

**Group 4 — Compact:**
• 4G: Compact hoisting equipment (mini-excavators, compact loaders) under 520 CMR 6.00

**The 2A/1C combination:** This course covers both restriction classes. To operate excavators AND wheel loaders on a Massachusetts job site, you need both 2A and 1C — or the combined 2A/1C credential earned through this program.`,
        },
      ],
    },
    {
      id: 'application',
      title: 'Application Process',
      icon: '📬',
      color: 'border-indigo-400',
      headerBg: 'bg-indigo-50',
      content: [
        {
          heading: 'Step-by-Step Application',
          body: `**1. Meet eligibility requirements**
• Age 18 or older
• Complete required training (contact OPSI for current education requirements)
• Gather documentation of experience or training

**2. Submit application**
• Apply online or by mail through the MA Division of Occupational Licensure (DOL) at mass.gov
• Pay the $75 non-refundable application fee per restriction class (so $150 total for both 2A and 1C)
• Submit proof of identity and any required training documentation

**3. Schedule and take the exam**
• OPSI or its approved testing centers administer the exam
• Bring a government-issued photo ID on exam day
• The exam is multiple choice, 30–40 questions, 70% passing score

**4. Receive your license**
• If you pass, OPSI issues your hoisting engineer license for the restriction class(es)
• License is valid for 2 years from date of issuance
• Keep the license card with you when operating — OPSI inspectors may request it on site`,
        },
        {
          heading: 'Education Requirements',
          body: `OPSI requires proof of qualifying education or training before sitting for the exam. Current requirements include:

• Completion of an approved hoisting engineer training program, OR
• Documented apprenticeship in the relevant equipment class, OR
• OPSI-recognized equivalent experience

**Contact OPSI directly** at mass.gov/hoisting-licensing-and-exams for the current list of approved training providers and exact documentation requirements — these can change and exam prep courses are not automatically OPSI-approved.`,
        },
      ],
    },
  ],
  quickFacts: [
    { label: 'Minimum passing score', value: '70%' },
    { label: 'Failed exam wait period', value: '60 days' },
    { label: 'Application fee (per class)', value: '$75 non-refundable' },
    { label: 'Minimum operator age', value: '18 years old' },
    { label: 'License duration', value: '2 years' },
    { label: 'Height threshold (OR rule)', value: '>10 feet' },
    { label: 'Weight threshold (OR rule)', value: '>500 lbs' },
    { label: 'Bucket threshold (OR rule)', value: '>¼ cubic yard (0.25 yd³)' },
    { label: 'Agricultural exemption', value: 'Farming on agricultural land only' },
    { label: 'Apprentice supervision requirement', value: 'Direct, on-site licensed operator' },
    { label: '2A covers', value: 'Excavators, track hoes, backhoes, skid steers' },
    { label: '1C covers', value: 'Telescoping boom cranes, loader-backhoes, wheel loaders' },
  ],
  defaultOpenSections: ['definition'],
};

export default data;
