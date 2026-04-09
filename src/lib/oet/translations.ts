// OET UI Translations

export const TRANSLATIONS = {
  en: {
    hero_title: "Ace OET with confidence",
    hero_subtitle: "Practice questions · AI tutor · Score prediction",
    start_practice: "Start free practice",
    view_plans: "View plans",
    loading: "Loading...",
    error: "Something went wrong",
    back_home: "Back to Home",
    daily_limit: "Daily limit reached",
    upgrade_premium: "Upgrade to Premium",
    disclaimer: "This app is an independent study aid and is not affiliated with, endorsed by, or approved by OET or any official testing authority. All trademarks belong to their respective owners.",
  },

} as const;

export type TranslationKey = keyof typeof TRANSLATIONS.en;
export type Locale = keyof typeof TRANSLATIONS;
