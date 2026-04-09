export const EXAM_CONFIG = {
  examId: "EXAM016",
  slug: "oet",
  name: "OET",
  fullName: "Occupational English Test",
  description:
    "Free OET practice for Listening, Reading, Writing, and Speaking in healthcare English with AI analytics.",
  url: "https://oet.koydo.app",
  category: "Language proficiency",
  subcategory: "Healthcare English",
  country: "Global",
  region: "Global",
  languages: ["English"] as const,
  primaryLanguage: "en",
  sections: [
    "Listening",
    "Reading",
    "Writing",
    "Speaking",
  ] as const,
  testFormat: "Computer-based / Paper" as const,
  questionFormat: "MCQ, Short Answer, Referral Letter, Role-play" as const,
  scoring: "A–E per sub-test" as const,
  themeColor: "#2563EB",
  themeColorDark: "#1D4ED8",
  ipRisk: "High" as const,
  ipDisclaimer:
    "OET® is a registered trademark of Cambridge Boxhill Language Assessment (CBLA), which was not involved in the production of, and does not endorse, this product.",
  freemiumGate: {
    dailyQuestions: 10,
  },
  contentReuseCluster: "language_healthcare",
  uiEngineProfile: "4skills_professional_context",
} as const;

export type ExamConfig = typeof EXAM_CONFIG;
