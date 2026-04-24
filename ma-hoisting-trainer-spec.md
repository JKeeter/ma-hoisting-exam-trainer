# MA Hoisting Exam Trainer — Build Spec

A web app that generates a personalized study plan for any Massachusetts hoisting engineer license restriction, scaled to the user's available study hours per week.

---

## 1. Project Overview

**What it does:** User picks (a) a hoisting license restriction and (b) how many hours per week they can study. The app generates a week-by-week training plan with sessions, learning objectives, source material links, and self-check questions. User can track progress across sessions.

**Primary user:** Adult learner preparing for the OPSI-administered MA hoisting exam. Starts with no assumed prior experience. Needs to pass a 30–40 question multiple-choice test with a 70% minimum.

**Non-goals (v1):**
- No login / accounts — progress stored in `localStorage` only
- No backend / database
- No video content hosting — link out to OEM/OSHA/OPSI resources
- No practice exam bank beyond the curated self-check questions in each session
- No payment / gating

---

## 2. Tech Stack

- **Framework:** Next.js 14+ (App Router) with TypeScript
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui (Card, Button, Select, Checkbox, Progress, Accordion, Badge)
- **Icons:** lucide-react
- **State:** React state + `localStorage` (no Redux, no context gymnastics)
- **Content:** Static TypeScript module (`lib/curriculum.ts`) — no CMS
- **Deployment target:** Vercel (or any static host — the app is pure client-side after build)

Rationale: single-page feel, no server concerns, trivial to deploy, fast to build in Claude Code.

---

## 3. Core User Flow

```
  [Landing / Selector]
         |
         | user picks license + hours/week
         v
  [Generated Plan View]
         |
         | user clicks a session
         v
  [Session Detail View]
         |
         | user marks session complete
         v
  [Back to Plan — progress bar updates]
```

Three screens total. Keep navigation stupid-simple: URL routes `/`, `/plan`, `/plan/[sessionId]`.

---

## 4. Data Model

### 4.1 TypeScript types (put in `lib/types.ts`)

```typescript
export type LicenseRestriction = {
  code: string;                    // e.g., "2A/1C"
  name: string;                    // e.g., "Excavators, Backhoes & Loaders"
  description: string;             // one-sentence plain-English summary
  equipmentCovered: string[];      // ["Excavators", "Backhoes", ...]
  totalHours: number;              // total curriculum hours for this restriction
  modules: Module[];
};

export type Module = {
  id: string;                      // stable id, e.g., "2a1c-regs"
  title: string;                   // e.g., "Legal & Regulatory Foundation"
  orderInCourse: number;           // 1, 2, 3...
  estimatedHours: number;          // sum of sessions in module
  sessions: Session[];
};

export type Session = {
  id: string;                      // stable id, e.g., "2a1c-regs-01"
  title: string;
  durationHours: number;           // usually 1, 1.5, or 2
  learningObjectives: string[];    // 3-6 bullets, action verbs
  topics: string[];                // content outline
  resources: Resource[];           // primary + supplementary
  selfCheck: SelfCheckQuestion[];  // 3-5 multiple choice
};

export type Resource = {
  label: string;                   // "230 CMR 6.00 §6.01-6.04"
  url: string;
  type: "regulation" | "osha" | "manual" | "video" | "reference";
  required: boolean;
};

export type SelfCheckQuestion = {
  question: string;
  options: string[];               // 4 options
  correctIndex: number;
  explanation: string;             // shown after answer reveal; cite source
};

export type TrainingPlan = {
  licenseCode: string;
  hoursPerWeek: number;
  weeks: Week[];                   // generated from modules/sessions
};

export type Week = {
  weekNumber: number;
  sessions: Session[];
  totalHours: number;
};

export type UserProgress = {
  licenseCode: string;
  hoursPerWeek: number;
  completedSessionIds: string[];
  startedAt: string;               // ISO date
  lastUpdatedAt: string;
};
```

### 4.2 `localStorage` keys

- `ma-hoisting-trainer:progress` → `UserProgress` (JSON stringified)
- `ma-hoisting-trainer:selection` → `{ licenseCode, hoursPerWeek }` (for quick reload)

Wrap in a `storage.ts` helper with try/catch — never crash on quota/parse errors. Don't use sessionStorage.

---

## 5. Plan Generation Algorithm

Given a `LicenseRestriction` and `hoursPerWeek`:

1. Flatten all sessions from all modules in `orderInCourse` → `sessions: Session[]`.
2. Greedy pack sessions into weeks:
   - For each session, if adding it to the current week keeps `weekHours <= hoursPerWeek + 0.5` tolerance, add it.
   - Otherwise, start a new week.
   - Rationale: tolerance prevents a 2hr session from pushing a "5 hours/week" user into 4-week-long weeks of 3hr.
3. Enforce a **minimum of 2 weeks** even for intensive pace — no cramming a full curriculum into one week.
4. Enforce a **maximum of 12 weeks** — if `hoursPerWeek` is too low, surface a warning banner: "At this pace you'll finish in N weeks. Consider 4+ hrs/week to stay exam-ready. Remember you cannot retest for 60 days if you fail."
5. Return `TrainingPlan` with populated `weeks`.

Pure function. Unit-testable. Put in `lib/generatePlan.ts`.

### Hours-per-week options on the selector

Radio buttons or a select with: `2`, `4`, `6`, `8`, `10`, `15`. Show derived week count live as the user picks.

---

## 6. UI Specification

### 6.1 Landing page (`app/page.tsx`)

- Hero: "Pass the Massachusetts Hoisting Exam" + one-sentence pitch.
- Two-step selector in a single card:
  1. **License restriction** — `Select` with all restrictions grouped by family (Group 1: Cranes; Group 2: Excavating; Group 3: Specialty; Group 4: Compact). Show `code — name` in options, full description below on select.
  2. **Hours per week** — segmented control or select.
- Live preview beneath: "Your plan: ~{totalHours} hours over {weekCount} weeks"
- Primary CTA: **Generate My Plan** → navigates to `/plan`.
- Small footer note: "This tool prepares you for the exam content. It does not replace hands-on operator training or OPSI's official application process."

### 6.2 Plan page (`app/plan/page.tsx`)

- Header: license code + name + total hours + week count.
- Overall progress bar: `completedSessions / totalSessions`.
- List of weeks as collapsible accordions. Each week shows:
  - Week number + total hours for that week
  - Sessions with: title, duration, completion checkbox, click-through to detail
- Sticky top-right: "Change plan" button → back to landing with current selection prefilled.
- "Reset progress" button in a small, non-alarming location with a confirmation dialog.

### 6.3 Session detail page (`app/plan/[sessionId]/page.tsx`)

Four sections in order:

1. **Learning objectives** — bulleted, imperative verbs ("Identify...", "List...", "Apply...").
2. **Topics covered** — outline/nested list.
3. **Required & recommended resources** — cards with external link icon. Mark required ones with a badge.
4. **Self-check quiz** — interactive: user picks answer, on submit the card reveals correct answer + explanation. Do NOT gate progress on passing the quiz; it's formative.

Bottom of page: **Mark session complete** button + prev/next session navigation.

### 6.4 Visual style

- Clean, minimal, construction-adjacent without being kitschy. Safety-yellow accent color (`#FACC15` or similar) for primary actions; slate grays for body.
- Generous line-height and ~65ch max content width on detail pages.
- Mobile-first — most users will check this on their phone between job sites.

---

## 7. Content: License Restrictions

Populate `lib/curriculum.ts` as a `LicenseRestriction[]`. The list below is the target coverage. **Verify exact restriction codes against the current 230 CMR 6.00 and the OPSI license type chart before shipping** — codes and scopes are updated periodically.

### 7.1 Restrictions to include

| Code    | Name                                           | Typical equipment                                         |
|---------|------------------------------------------------|-----------------------------------------------------------|
| 1A      | Hoisting apparatus w/ friction winch drum      | Conventional/lattice-boom crawler & truck cranes          |
| 1B      | Hydraulic cranes                               | Hydraulic mobile cranes (non-telescoping)                 |
| 1C      | Telescoping boom / loaders & backhoes          | Boom trucks, loader-backhoes, wheel loaders               |
| 1D      | Industrial lift trucks                         | Forklifts, reach trucks, telehandlers                     |
| 1E      | Specialty                                      | Per OPSI scope                                            |
| 2A      | Excavating machinery                           | Excavators, track hoes, skid steers                       |
| 2B      | Specialty excavating                           | Per OPSI scope                                            |
| 2C      | Aerial lifts / cherry pickers                  | Boom lifts, scissor lifts (note MEWP overlap)             |
| 3A      | Pile driving / derricks / cableways            | Pile drivers, fixed derricks                              |
| 4G      | Compact hoisting — specialty                   | Mini-excavators, compact loaders per 520 CMR 6.00         |

Combined restrictions (like **2A/1C**) are common in the real world. Model these as separate `LicenseRestriction` entries rather than computed combos — the curriculum overlaps but the sequencing is different enough that a dedicated track reads cleaner.

### 7.2 Fully worked example — `2A/1C`

Use this as the reference implementation. The other restrictions follow the same shape; adapt the equipment-specific modules (2 and 3) to the equipment in scope.

```typescript
{
  code: "2A/1C",
  name: "Excavators, Backhoes, Loaders & Skid Steers",
  description: "The most common combo license. Covers excavators and track hoes (2A) plus loader-backhoes and wheel loaders (1C).",
  equipmentCovered: ["Excavators", "Track hoes", "Loader-backhoes", "Wheel loaders", "Skid steers"],
  totalHours: 24,
  modules: [
    {
      id: "2a1c-m1",
      title: "Legal & Regulatory Foundation",
      orderInCourse: 1,
      estimatedHours: 6,
      sessions: [
        {
          id: "2a1c-m1-s1",
          title: "MGL Chapter 146 §§ 53–54A",
          durationHours: 2,
          learningObjectives: [
            "Define 'hoisting machinery' per MA statute",
            "State the 10 ft / 500 lb / ¼ cubic yard thresholds from memory",
            "Identify who must hold a hoisting license"
          ],
          topics: [
            "§53 licensing requirement",
            "§54 examination & issuance",
            "§54A apprentice licenses",
            "Definition of hoisting machinery and the catch-all clause"
          ],
          resources: [
            {
              label: "MGL c. 146 §§ 53–54A",
              url: "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXX/Chapter146",
              type: "regulation",
              required: true
            }
          ],
          selfCheck: [
            {
              question: "Which of the following triggers the MA hoisting license requirement?",
              options: [
                "Lifting 400 lbs to 8 ft with a ⅛ yard bucket",
                "Lifting 600 lbs to 9 ft with a ⅛ yard bucket",
                "Lifting 400 lbs to 12 ft with a ⅛ yard bucket",
                "Lifting 400 lbs to 8 ft with a ½ yard bucket"
              ],
              correctIndex: 3,
              explanation: "The threshold is OR, not AND: over 10 ft OR over 500 lbs OR bucket over ¼ cubic yard. A ½ yard bucket alone triggers the requirement."
            }
          ]
        },
        {
          id: "2a1c-m1-s2",
          title: "MGL §§ 64–67 + 230 CMR 6.00",
          durationHours: 2,
          // ...
        },
        {
          id: "2a1c-m1-s3",
          title: "Renewal, Grace Period & Penalties",
          durationHours: 2,
          // ...
        }
      ]
    },
    {
      id: "2a1c-m2",
      title: "Equipment Systems & Components",
      orderInCourse: 2,
      estimatedHours: 6,
      sessions: [
        // Excavator anatomy, Loader/backhoe anatomy, Hydraulics fundamentals, Controls
      ]
    },
    {
      id: "2a1c-m3",
      title: "Safe Operation & Inspections",
      orderInCourse: 3,
      estimatedHours: 6,
      sessions: [
        // Pre-shift inspection, Operation hazards, Excavation (OSHA Subpart P) + hand signals
      ]
    },
    {
      id: "2a1c-m4",
      title: "OSHA, Review & Practice",
      orderInCourse: 4,
      estimatedHours: 6,
      sessions: [
        // 29 CFR 1926 highlights, Practice exam 1, Practice exam 2 + flashcard review
      ]
    }
  ]
}
```

### 7.3 Shared / reusable modules

Several modules are identical regardless of restriction. Build them once and reference:

- **Regulatory foundation** (MGL 146 + 230 CMR 6.00) — same for every restriction
- **OSHA 29 CFR 1926 overview** — same PPE, fall protection, LO/TO for all
- **Hand signals** — required for all crane/excavator tracks per 230 CMR 6.00

Pattern: export these as standalone `Module` objects and spread them into each restriction's `modules` array with a restriction-specific `id` prefix.

### 7.4 What differs per restriction

Only modules 2 (Equipment Systems) and 3 (Safe Operation specifics) are restriction-unique. Specifically:

- **1A, 1B, 1C, 3A:** load charts, rigging (slings, shackles, hitches), critical lift planning, wire rope inspection, crane setup, outrigger placement, LMI.
- **1D:** load capacity plates, mast/fork inspection, stability triangle, warehouse OSHA (1910.178 not 1926).
- **2A, 2B:** OSHA Subpart P excavation depth-first, spoil pile setback, trench protection at 5 ft.
- **2C:** ANSI A92 MEWP standards (updated 2020), fall arrest in boom lifts, ground assessment.
- **4G:** compact-specific scope under 520 CMR — attachment swapping, smaller machine stability quirks.

---

## 8. Acceptance Criteria

A build is done when:

1. User can land on `/`, pick any of the 10 restrictions listed in §7.1 from a grouped select, pick hours/week, and click **Generate My Plan**.
2. The plan page renders week-by-week with all sessions listed in order and respects the `hoursPerWeek + 0.5` packing rule.
3. The selection persists across page reloads via `localStorage`.
4. Checking a session as complete updates the overall progress bar and persists.
5. Session detail pages render all four sections; quiz questions are interactive and reveal explanations after answer.
6. Reset progress works and requires confirmation.
7. The low-hours warning banner appears when generated plan > 8 weeks.
8. Mobile layout is usable down to 375px wide (no horizontal scroll, tap targets ≥44px).
9. Lighthouse performance score ≥90 on desktop.
10. At minimum, **2A/1C is fully populated** (all modules, sessions, resources, self-check questions). Other restrictions may ship with module-level stubs and session placeholders as long as the data model validates — but the app must not crash on a restriction with sparse content; instead render a "Content coming soon" note for any module missing sessions.

---

## 9. Suggested build order for Claude Code

1. Scaffold Next.js + Tailwind + shadcn/ui.
2. Define types in `lib/types.ts`.
3. Build `lib/storage.ts` with safe `localStorage` wrappers.
4. Build `lib/generatePlan.ts` with pure function + unit tests (Vitest).
5. Seed `lib/curriculum.ts` with the 2A/1C fully worked example + stubs for the other 9 restrictions.
6. Build landing page + selector.
7. Build plan page with accordion + progress.
8. Build session detail page with interactive quiz.
9. Wire up persistence + progress calculations.
10. Polish: low-hours warning, reset flow, mobile pass, empty-state handling.

---

## 10. Stretch features (v2, don't build yet)

- Printable / PDF export of the plan
- Actual practice exam mode (50-question timed, shuffled from a pool)
- Flashcard spaced-repetition mode for regulations
- Import/export progress JSON (for people switching devices without accounts)
- Spanish translation (significant portion of MA hoisting workforce is Spanish-speaking per OPSI MEWP materials)
- OPSI exam schedule integration (scrape/embed the published 2026 exam dates page)

---

## 11. Disclaimers to surface in the app footer

- "Unofficial study aid. Not affiliated with the MA Office of Public Safety and Inspections (OPSI)."
- "Always verify regulatory requirements against the current 230 CMR 6.00 and MGL Chapter 146 on mass.gov."
- "This tool does not substitute for hands-on operator training or supervised practical experience."
