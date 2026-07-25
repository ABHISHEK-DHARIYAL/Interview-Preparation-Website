# StudyNotebook 📘

A visual, "premium interview notebook" study site — converts placement-prep PDFs (CN, OS, DBMS, OOP)
into structured, memorable study pages instead of raw text. React + Vite, no backend, no database,
everything is plain JS data.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

To build a static, deployable version:

```bash
npm run build
npm run preview   # to test the production build locally
```

The output lands in `dist/` — you can drag that folder into Netlify/Vercel/GitHub Pages, or serve it
from any static host.

## What's fully built right now

**All four subjects have complete, rich study content** — quick definitions, easy explanations,
key-point checklists, memory tricks, diagrams (flow / circle / tree / timeline / comparison / table),
real-world examples, interview Q&A, common mistakes, 30-second revision, and "study next" chains:

- **Computer Networks** — 18 topics (topologies, OSI model, TCP/UDP, HTTP/HTTPS, DNS, ARP, routing,
  switch/hub/bridge, subnetting, congestion control, sliding window, VPN)
- **Operating System** — 12 topics (OS types, process scheduling, threads, CPU scheduling algorithms,
  critical section, synchronization, deadlocks, memory management, paging/segmentation/virtual memory,
  page replacement, disk scheduling, key OS terms)
- **DBMS** — 10 topics (DBMS basics, ER diagrams, keys & constraints, normalization, transactions/ACID,
  schedules & serializability, relational algebra, indexing & B/B+ trees, SQL basics, joins)
- **OOP** — 10 topics (classes/objects, inheritance, encapsulation, abstraction, polymorphism,
  constructors/destructors, virtual functions, access specifiers, `this`/friend/aggregation,
  namespaces/overloading vs overriding)

Plus the whole app shell: home page with subject cards + progress rings, subject pages with topic cards,
search across all topics, and the full study-page layout & every diagram component.

## Extending or editing content

Every topic lives as a plain JS object in its subject's `topics.js` file:

- `src/data/CN/topics.js`
- `src/data/OS/topics.js`
- `src/data/DBMS/topics.js`
- `src/data/OOP/topics.js`

To edit a topic, just edit its object — no component code needs to change. To add a brand new topic to
an existing subject, copy the shape of a neighboring topic object in the same file (see below), and it
appears automatically in that subject's topic grid, search results, and progress tracking.

### Topic object shape

```js
{
  id: 'kebab-case-id',            // used in the URL
  title: 'Display Title',
  description: 'One-line teaser shown on the topic card.',
  readingTime: 5,                 // minutes, shown on the card
  difficulty: 'Easy' | 'Medium' | 'Hard',

  quickDefinition: '≤3 lines.',
  easyExplanation: 'Explain like teaching a beginner.',
  whyImportant: 'Why this matters for interviews.',

  keyPoints: ['Point one', 'Point two', ...],

  memoryTrick: { type: 'mnemonic' | 'story' | 'acronym', text: '...' },

  // Zero or more diagrams, rendered in order:
  visuals: [
    { type: 'flow', title: '...', steps: ['Step 1', 'Step 2', ...] },
    { type: 'circle', title: '...', center: 'X', satellites: ['A', 'B', 'C'] },
    { type: 'tree', title: '...', root: 'X', children: [{ label: 'A', children: [...] }] },
    { type: 'timeline', title: '...', events: ['First', 'Then', ...] },
    { type: 'comparison', title: '...', left: { title: 'A', points: [...] }, right: { title: 'B', points: [...] } },
    { type: 'table', title: '...', columns: ['Col1', 'Col2'], rows: [['a', 'b'], ...] },
  ],

  realWorldExample: '"Imagine..." — one relatable scenario.',

  interviewQuestions: [{ q: '...', a: '...' }, ...],

  commonMistakes: [{ title: '...', detail: '...' }, ...],

  revision: ['Bullet 1', 'Bullet 2', ...],   // 30-second recap

  relatedTopics: ['other-topic-id', ...],    // must be ids within the SAME subject
}
```

## How to add a brand new subject (e.g. Java, DSA, System Design)

1. Create `src/data/<SUBJECT>/topics.js` exporting an array of topic objects (same shape as above).
2. Open `src/data/subjects.js`, import that file, and add one entry to the `subjects` array:

```js
{
  id: 'java',
  name: 'Java',
  shortName: 'Java',
  icon: '☕',
  color: 'blue' | 'green' | 'orange' | 'purple',
  description: 'One-line subject description.',
  topics: javaTopics,
}
```

That's it — the home page, search, routing, and progress tracking all pick it up automatically.
No other file needs to change.

## Progress tracking

Visited topics are tracked client-side in `localStorage` (see `src/utils/progress.js`) — no backend,
no login. Progress rings on the home page and subject pages reflect how many topics in that subject
you've opened at least once.

## Tech stack

- React 19 + Vite
- react-router-dom for navigation
- Plain CSS (custom properties for the design system, one `.css` file per component)
- No UI framework, no backend, no database — matches the original brief exactly.
