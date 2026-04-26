export const navigation = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Notes", href: "/notes" },
  { label: "Contact", href: "/contact" },
];

export const heroFacts = [
  {
    label: "Framework",
    value: "Next.js App Router",
    detail: "One app for pages, route handlers, and future server-side features.",
  },
  {
    label: "Content",
    value: "Composable sections",
    detail: "Easy to grow into case studies, writing, or landing pages.",
  },
  {
    label: "Future",
    value: "AI + database ready",
    detail: "Stable folders already exist for model integration and persistent data.",
  },
];

export const highlightCards = [
  {
    kicker: "Structure",
    title: "Route code stays in app, feature logic does not.",
    summary:
      "Pages should compose sections and fetch data. Reusable UI and domain logic live outside the router so future features do not become file-system soup.",
  },
  {
    kicker: "AI",
    title: "Server boundaries first.",
    summary:
      "Model calls belong in route handlers or server-side modules, not browser components. That keeps secrets safe and makes experimentation easier to replace later.",
  },
  {
    kicker: "Data",
    title: "Delay the database, prepare the interface.",
    summary:
      "Use plain modules for content and adapters for persistence. That lets you add Postgres later without refactoring every page that reads data.",
  },
];

export const futureTrack = [
  {
    kicker: "Now",
    title: "Portfolio and notes",
    summary: "Launch the public shell and make it easy to publish work, writing, and contact info.",
  },
  {
    kicker: "Next",
    title: "Search or assistant",
    summary: "Add a route-backed AI helper that can answer from your projects, notes, or profile data.",
  },
  {
    kicker: "Later",
    title: "Accounts or submissions",
    summary: "Introduce auth and a database only when there is a real workflow that needs persistence.",
  },
];

export const systemLayers = [
  {
    kicker: "Presentation",
    title: "Components and sections",
    summary: "UI primitives, layout, and visual systems should remain easy to restyle without touching business logic.",
  },
  {
    kicker: "Domain",
    title: "Features and site data",
    summary: "Feature modules can later own schemas, transforms, search indexes, and page-level loading logic.",
  },
  {
    kicker: "Integrations",
    title: "AI, analytics, and db adapters",
    summary: "External systems should enter through narrow modules so provider swaps do not fan out across the codebase.",
  },
];

export const workCards = [
  {
    kicker: "Case study",
    title: "Flagship project",
    summary: "A long-form breakdown of a product, system, redesign, or engineering effort.",
  },
  {
    kicker: "Experiment",
    title: "Lab builds",
    summary: "Shorter entries for prototypes, interface explorations, or AI-assisted experiments.",
  },
  {
    kicker: "Archive",
    title: "Selected older work",
    summary: "A lighter-weight shelf for past projects that still matter but do not need full narrative treatment.",
  },
];

export const noteTopics = [
  {
    title: "Build logs",
    summary: "Write short progress notes as the website evolves. This makes future retrospectives and sharing easier.",
  },
  {
    title: "Systems thinking",
    summary: "Capture architecture decisions, tradeoffs, and the reasons behind tool choices while they are still fresh.",
  },
  {
    title: "AI experiments",
    summary: "Document prompts, evaluation notes, and product ideas as you test what is actually useful.",
  },
];
