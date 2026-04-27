export const learners = {
  ellie: {
    slug: "ellie",
    name: "Ellie",
    ageLabel: "8 years old",
    summary: "Patterns, puzzles, questions, and bigger ideas she can reason about.",
  },
  eva: {
    slug: "eva",
    name: "Eva",
    ageLabel: "4 years old",
    summary: "Playful, hands-on discovery with short activities and simple language.",
  },
} as const;

export const subjects = [
  {
    slug: "math",
    title: "Number Garden",
    eyebrow: "Count, sort, and spot patterns",
    summary: "A sunny place for numbers, shapes, puzzles, and tiny brain games.",
    icon: "123",
    splashClass: "subject-card-math",
  },
  {
    slug: "science",
    title: "Wonder Lab",
    eyebrow: "Ask why and see what happens",
    summary: "A curious place for nature, experiments, discoveries, and big questions.",
    icon: "WOW",
    splashClass: "subject-card-science",
  },
] as const;

export const subjectPages = {
  math: {
    title: "Number Garden",
    eyebrow: "Count, compare, and play",
    summary:
      "This is where numbers, shapes, and patterns feel like play instead of homework.",
    focusPoints: [
      "Ellie gets puzzles, measurement, clocks, patterns, and bigger thinking games.",
      "Eva gets counting, sorting, matching, shapes, and movement-based play.",
    ],
  },
  science: {
    title: "Wonder Lab",
    eyebrow: "Look closely and try things out",
    summary:
      "This is where questions turn into noticing, testing, splashing, mixing, and discovering.",
    focusPoints: [
      "Ellie gets to compare, predict, record, and explain what she notices.",
      "Eva gets to touch, pour, watch, and ask what happens next.",
    ],
  },
} as const;

export const learnerPages = {
  math: {
    ellie: {
      title: "Ellie's Number Garden",
      intro: "A place for patterns, number adventures, logic games, and everyday problem-solving.",
      ideas: ["Number puzzles", "Fractions with food", "Money and measurement", "Pattern hunts"],
    },
    eva: {
      title: "Eva's Number Garden",
      intro: "A place for counting, shapes, matching, sorting, and playful early number ideas.",
      ideas: ["Count toys", "Shape scavenger hunts", "Sort by color and size", "Compare more and less"],
    },
  },
  science: {
    ellie: {
      title: "Ellie's Wonder Lab",
      intro: "A place for asking why, testing ideas, and keeping track of simple observations.",
      ideas: ["Weather journal", "Plant growth tracking", "Kitchen experiments", "Magnet and motion questions"],
    },
    eva: {
      title: "Eva's Wonder Lab",
      intro: "A place for touching, watching, mixing, and noticing what changes.",
      ideas: ["Sink or float", "Nature walks", "Color mixing", "Ice and water play"],
    },
  },
} as const;

export type SubjectSlug = keyof typeof subjectPages;
export type LearnerSlug = keyof typeof learners;

export function isSubjectSlug(value: string): value is SubjectSlug {
  return value in subjectPages;
}

export function isLearnerSlug(value: string): value is LearnerSlug {
  return value in learners;
}
