export const priceMap = {
  monthly: {
    launch: "$2,400",
    scale: "$7,800",
    enterprise: "Custom",
  },
  annual: {
    launch: "$1,920",
    scale: "$6,240",
    enterprise: "Custom",
  },
};

export const plans = [
  {
    id: "launch",
    title: "Launch",
    description: "For teams validating a new financial product.",
    cta: "Get started",
    featured: false,
  },
  {
    id: "scale",
    title: "Scale",
    description: "For growing platforms with multiple payment flows.",
    cta: "Book demo",
    featured: true,
  },
  {
    id: "enterprise",
    title: "Enterprise",
    description: "For regulated programs with custom controls.",
    cta: "Talk to sales",
    featured: false,
  },
];
