export const PRICING = {
  free: {
    name: "Free",
    price: 0,
    currency: "USD",
    interval: null,
    features: [
          "10 questions / day",
          "Basic analytics",
          "All sub-tests"
    ],
  },
  premium: {
    name: "Premium",
    price: 4.99,
    currency: "USD",
    interval: "month" as const,
    features: [
          "Unlimited questions",
          "AI writing feedback",
          "Speaking practice",
          "Offline mode",
          "Priority support"
    ],
  },
} as const;

export type PricingTier = keyof typeof PRICING;
