/**
 * Calculation-Tools - Central Data Registry
 */
export const SITE_CONFIG = {
  name: "Calculation-Tools",
  domain: "https://seusite.com", // Altere para o seu domínio final
};

export const CATEGORIES = {
  math: { name: "Mathematics", icon: "📐" },
  finance: { name: "Finance", icon: "💵" },
  health: { name: "Health & Fitness", icon: "🩸" },
  conversions: { name: "Conversions", icon: "🔄" },
  datetime: { name: "Date & Time", icon: "📅" }
};

export const CALCULATORS = [
  {
    id: "percentage-calculator",
    title: "Percentage Calculator",
    slug: "calculators/percentage-calculator/",
    category: "math",
    description: "Calculate percentages, percentage increases, decreases, and differences quickly.",
    popular: true,
    keywords: ["percentage", "percent", "math", "discount", "ratio"]
  },
  {
    id: "bmi-calculator",
    title: "BMI Calculator",
    slug: "calculators/bmi-calculator/",
    category: "health",
    description: "Calculate your Body Mass Index (BMI) and discover your ideal weight category.",
    popular: true,
    keywords: ["bmi", "body mass index", "health", "weight", "fitness"]
  }
];
