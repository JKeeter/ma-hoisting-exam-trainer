import { ReferencePageProps } from '@/components/ReferencePage';

const data: ReferencePageProps = {
  title: 'Renewal, Grace Period & Penalties',
  subtitle: 'MA 2A/1C Hoisting License · Module 1, Session 3',
  sections: [
    {
      id: 'sections',
      title: 'MGL §§ 64–67 — Safety Duties & Reporting',
      icon: '📜',
      color: 'border-slate-400',
      headerBg: 'bg-slate-100',
      content: [
        {
          heading: 'MGL §64 — General Safety Duties',
          body: `§64 establishes the general safety framework for hoisting engineers. It sets the foundation that operators must be "competent and trustworthy" before receiving a license, and that fitness — physical and mental — is a requirement.

**Key obligations:**
• Operators must be physically and mentally capable of safe operation at all times
• An operator who is impaired (by illness, injury, fatigue, drugs, or alcohol) must not operate hoisting machinery
• 230 CMR 6.00 expands on this: operators must maintain "full attentiveness" and cannot engage in practices that divert attention during operation`,
        },
        {
          heading: 'MGL §65 — Examination & Qualification',
          body: `§65 governs how licenses are issued. It requires that applicants pass an examination before receiving a license.

**What the exam tests (per §65):**
• **Practical knowledge** of all working parts of the machinery
• Safe operating practices specific to the machinery category
• Hand signals required by regulation
• Massachusetts laws and regulations governing hoisting operations

**Exam types:** The examination may be written, practical (hands-on), or both, at the commissioner's discretion.

**Revoked licenses:** If your license has been revoked for a safety violation, you must pass BOTH a written AND a practical examination before reinstatement — not just one.

**Passing score:** 70% minimum on written examination.`,
        },
        {
          heading: 'MGL §66 — Employer Responsibility',
          body: `§66 places responsibility on employers who use hoisting equipment. While the specific employer-verification language is in the broader regulatory framework:

**What employers are required to do:**
• Verify that any operator assigned to hoisting equipment holds a valid license in the correct restriction class before they begin work
• Designate a licensed operator as the "responsible person in charge" for public utility exemptions
• Not direct or permit an unlicensed person to operate hoisting machinery
• Ensure operators are not operating while impaired

**Employer liability:** An employer who knowingly directs an unlicensed person to operate hoisting equipment faces separate penalties — the fine for "allowing unlicensed operation" is **$1,000–$3,000 per violation**, higher than the fine for the unlicensed operator themselves.`,
        },
        {
          heading: 'MGL §67 — Accident Reporting',
          body: `§67 (implemented through 520 CMR 6.11) establishes mandatory accident reporting for hoisting machinery incidents.

**What must be reported:**
• Any serious injury involving hoisting machinery
• Property damage from a hoisting machinery incident
• Any condition involving hoisting machinery that creates a hazard to public health or safety

**Who reports:** The licensed operator, the equipment owner, or the owner's authorized representative.

**Reporting timeline — two-step requirement:**
• **Step 1:** Telephone report within **ONE HOUR** of the incident or its discovery
  - Hotline: **(508) 820-1444** (OPSI 24-hour incident reporting line)
• **Step 2:** Written report within **48 hours**

**Equipment restriction after incident:** Equipment involved in a serious incident **cannot be moved, dismantled, or altered** until OPSI inspects it and grants approval — except to prevent further injury to persons or to allow emergency vehicle access.

**Exam note:** The 1-hour phone/48-hour written timeline is testable. Do not confuse with OSHA's fatality reporting timeline (8 hours for fatality, 24 hours for in-patient hospitalization under 29 CFR 1904.39).`,
        },
      ],
    },
    {
      id: 'penalties',
      title: 'Penalties for Violations',
      icon: '⚖️',
      color: 'border-red-400',
      headerBg: 'bg-red-50',
      critical: true,
      content: [
        {
          heading: 'Civil & Criminal Penalties Under MGL §54A',
          body: `Massachusetts imposes both civil fines and potential imprisonment for hoisting license violations.

**General violation of MGL §53, §53A, or §54:**
• Fine: **$500 to $3,000**
• OR imprisonment: up to 3 months
• OR both

**Allowing unlicensed operation (employer who directs or permits unlicensed operator):**
• Fine: **$1,000 to $3,000**
• OR imprisonment: up to 3 months
• OR both

**Exam note:** The curriculum study materials reference "$500/day" — this reflects the enforcement approach where each day of continuous violation can be cited as a separate offense, making total liability $500–$3,000 per day. However, the statutory range per violation is $500–$3,000.

**Key point:** The employer's fine ($1,000–$3,000) is higher than the employee's fine ($500–$3,000). This is intentional — the legislature treats allowing unlicensed operation more seriously than being the unlicensed operator.`,
        },
        {
          heading: 'Willful vs. Negligent — Does Intent Matter?',
          body: `The statute (MGL §54A) uses a **uniform penalty structure** — the fine range is the same regardless of whether the violation was intentional (willful) or accidental (negligent).

However, intent matters in practice:
• A willful violation (knowingly and deliberately operating without a license) is more likely to result in prosecution for the criminal penalty (imprisonment) in addition to the fine
• A negligent violation (honest mistake, such as an expired renewal) is more likely to result in a civil fine only

**For exam purposes:** Know that both willful and negligent violations trigger penalties. Do not assume that accidentally operating with an expired license is consequence-free.`,
        },
        {
          heading: 'License Revocation & Reinstatement',
          body: `OPSI can revoke or suspend a hoisting license for:
• Safety violations
• Operating while impaired
• Failure to comply with inspection requirements
• A final adjudication of a federal or state OSHA violation related to hoisting operations

**Reinstatement after revocation:**
• Must reapply through OPSI
• Must pass BOTH written AND practical examination (not just one)
• No automatic reinstatement — a revocation requires a formal process

**Reinstatement after expiration (lapsed license):**
• Licenses expired for less than one year: May be renewed with fees and continuing education
• Licenses expired for more than one year: OPSI may require full re-examination`,
        },
      ],
    },
    {
      id: 'renewal',
      title: 'License Renewal Process',
      icon: '🔄',
      color: 'border-green-400',
      headerBg: 'bg-green-50',
      content: [
        {
          heading: 'Renewal Timeline & Fee',
          body: `**License duration:** 2 years from date of issuance. The license expires on the licensee's birthdate occurring between 12 and 24 months after issuance.

**When to renew:** You may submit renewal up to **60 days before** the expiration date. OPSI recommends allowing 5 weeks for processing.

**Renewal fee:** $60 (non-refundable processing fee). Note: this is the renewal fee; the initial application fee is $75 per class.

**February 29 birthdays:** Licenses for persons born on Feb. 29 expire on March 1 of the renewal year.

**Military service:** Active duty military personnel retain their valid licenses for at least 90 days after release from active duty, even if the license would otherwise have expired.`,
        },
        {
          heading: 'How to Renew',
          body: `**Online:** Through the OPSI mylicenseone portal at mass.gov
**By mail:** Send completed renewal form with check or money order to "Commonwealth of Massachusetts"

**What you need:**
• Renewal application (available at mass.gov)
• Payment of $60 renewal fee
• Continuing education certifications required for each restriction class (contact OPSI for current CE requirements)
• Photo: 2×2 inch photo meeting guidelines, OR authorization for OPSI to use your RMV driver's license photo

**Contact OPSI:**
• Phone: (617) 727-3200
• Email: OPSI-info@mass.gov

**OPSI website:** mass.gov/hoisting-licensing-and-exams`,
        },
        {
          heading: 'What Happens When Your License Expires',
          body: `**Operating with an expired license is the same as operating without a license.** There is no grace period that permits continued operation.

**Consequence timeline:**
• Day of expiration: License becomes void; operating is a §53 violation
• Up to 1 year after expiration: Renewal possible with fees and CE; no re-exam required under normal circumstances
• More than 1 year after expiration: OPSI may require re-examination before reinstatement

**Exam scenario:** Your 2A/1C license expires on a Monday. Can you operate the wheel loader on Tuesday while waiting for the renewal to process? **No** — the expired license is void and operating it is a violation.

**Best practice:** Set a calendar reminder 60 days before your expiration date. Renewal can be submitted that early, giving you buffer time for processing.`,
        },
        {
          heading: '2A/1C Combination — Both Classes Must Remain Current',
          body: `If you hold both the 2A and 1C restriction classes, both must be renewed and current for you to operate the full range of equipment.

**Scenario:** Your 2A class is current but your 1C has expired. You may legally operate excavators (2A equipment) but NOT wheel loaders or loader-backhoes (1C equipment) until the 1C class is renewed.

**Exam trap:** Do not assume a current 2A license covers all equipment from this course. Check both restriction classes independently.`,
        },
      ],
    },
  ],
  quickFacts: [
    { label: 'Violation fine range (operator)', value: '$500–$3,000 per violation' },
    { label: 'Allowing unlicensed operation (employer)', value: '$1,000–$3,000 per violation' },
    { label: 'Imprisonment maximum', value: 'Up to 3 months' },
    { label: 'Accident report — phone', value: 'Within 1 hour — call (508) 820-1444' },
    { label: 'Accident report — written', value: 'Within 48 hours' },
    { label: 'Equipment after incident', value: 'Cannot be moved until OPSI inspects' },
    { label: 'License renewal fee', value: '$60 (non-refundable)' },
    { label: 'Early renewal window', value: 'Up to 60 days before expiration' },
    { label: 'Revoked license reinstatement', value: 'Must pass both written AND practical exam' },
    { label: 'Military service license extension', value: 'At least 90 days after release from active duty' },
    { label: 'Expired license operation', value: 'Same as no license — violation on day of expiration' },
  ],
  defaultOpenSections: ['sections'],
};

export default data;
