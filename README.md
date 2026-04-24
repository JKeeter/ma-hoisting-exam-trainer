# MA Hoisting Exam Trainer

A personalized study plan generator for Massachusetts hoisting engineer license exams, scaled to the user's available study hours per week.

## Features

- **Personalized Study Plans**: Select any of 10 hoisting license restrictions and your available study hours per week
- **Week-by-Week Breakdown**: Intelligent packing of sessions respecting your study pace
- **Interactive Self-Check Questions**: Test your knowledge with formative quiz questions (no gate on progress)
- **Progress Tracking**: Monitor your completion status across all sessions (stored in localStorage)
- **Comprehensive Curriculum**: Full 2A/1C course with learning objectives, topics, resources, and Q&A
- **Mobile-First Design**: Optimized for job site study on mobile devices
- **No Login Required**: All progress saved locally in your browser

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Storage**: Browser localStorage (no backend)
- **Icons**: lucide-react
- **Deployment**: Vercel (or any static host)

## Project Structure

```
app/
  layout.tsx              # Root layout with footer disclaimers
  page.tsx                # Landing page with selector
  globals.css             # Global styles
  plan/
    page.tsx              # Plan view with week accordion
    [sessionId]/
      page.tsx            # Session detail with quiz

lib/
  types.ts                # TypeScript definitions
  storage.ts              # localStorage helpers
  generatePlan.ts         # Plan generation algorithm
  curriculum.ts           # Course content (2A/1C fully populated)

public/
  favicon.ico
```

## Curriculum Coverage

### Fully Populated
- **2A/1C**: Excavators, Backhoes, Loaders & Skid Steers (24 hours)
  - Legal & Regulatory Foundation (6 hours)
  - Equipment Systems & Components (6 hours)
  - Safe Operation & Inspections (6 hours)
  - OSHA Compliance & Exam Review (6 hours)

### Stubs for Future Content
- 1A: Hoisting apparatus w/ friction winch drum
- 1B: Hydraulic cranes
- 1C: Telescoping boom / loaders & backhoes
- 1D: Industrial lift trucks
- 1E: Specialty cranes
- 2A: Excavating machinery
- 2B: Specialty excavating
- 2C: Aerial lifts / cherry pickers
- 3A: Pile driving / derricks / cableways
- 4G: Compact hoisting — specialty

## Plan Generation Algorithm

The app packs sessions into weeks using a greedy algorithm:

1. Sort all sessions by module order
2. For each session, add to current week if `weekHours + sessionHours <= hoursPerWeek + 0.5`
3. Otherwise start a new week
4. Enforce minimum of 2 weeks, maximum warning at 8+ weeks

Example: A 24-hour 2A/1C course at 6 hrs/week → 4 weeks

## localStorage Keys

- `ma-hoisting-trainer:progress` → UserProgress (JSON)
- `ma-hoisting-trainer:selection` → { licenseCode, hoursPerWeek } (JSON)

All data is client-side only; no backend storage.

## Disclaimers

⚠️ **Important Notes**:
- This is an unofficial study aid, not affiliated with OPSI
- Always verify current 230 CMR 6.00 and MGL Chapter 146
- Does not substitute for hands-on operator training or supervised practical experience
- You cannot retake the MA hoisting exam for 60 days after a failed attempt

## Future Features (v2)

- Printable/PDF export of study plans
- Full practice exam mode (50 questions, shuffled, timed)
- Spaced-repetition flashcard mode
- Import/export progress JSON
- Spanish translation
- OPSI exam schedule integration

## License

Unlicensed - Educational tool.
