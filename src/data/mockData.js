import { 
  RiShieldCheckLine, 
  RiFileList3Line, 
  RiCopperCoinLine, 
  RiKakaoTalkLine, 
  RiSecurePaymentLine,
  RiDatabaseLine,
  RiGamepadLine,
  RiBankCardLine,
  RiSpeedUpLine,
  RiPercentLine,
  RiSmartphoneLine
} from "react-icons/ri";

export const FEATURES_DATA = [
  {
    id: "card-bills",
    title: "Credit Card Bill Payments",
    description: "Pay all your credit card bills in one place. Get reminders, avoid late fees, and track your payment history seamlessly.",
    icon: RiBankCardLine,
    color: "#6ee7b7", // Mint
    accentText: "zero late fees"
  },
  {
    id: "rewards",
    title: "Exclusive Rewards",
    description: "Earn assured rewards and cashback every time you pay your bills. Access handpicked deals from premium brands.",
    icon: RiGamepadLine,
    color: "#f43f5e", // Rose
    accentText: "premium brands"
  },
  {
    id: "credit-score",
    title: "Credit Score Tracking",
    description: "Check your credit score for free. Monitor changes over time, get personalized insights, and improve your credit health.",
    icon: RiSpeedUpLine,
    color: "#3b82f6", // Blue
    accentText: "free monthly reports"
  },
  {
    id: "upi-payments",
    title: "CRED UPI Payments",
    description: "Experience lightning-fast UPI payments. Pay contacts, scan QR codes, and send money instantly with top-tier protection.",
    icon: RiSmartphoneLine,
    color: "#a855f7", // Purple
    accentText: "instant & secure"
  },
  {
    id: "cred-coins",
    title: "CRED Coins",
    description: "Earn CRED Coins for every rupee you pay. Burn your coins to unlock jackpot rewards, dynamic deals, and luxury prizes.",
    icon: RiCopperCoinLine,
    color: "#eab308", // Yellow
    accentText: "earn on every payment"
  },
  {
    id: "cashback",
    title: "Cashback Benefits",
    description: "Get direct cashback into your bank account or credit card statement. Enjoy exclusive cash-back offers on selected merchants.",
    icon: RiPercentLine,
    color: "#10b981", // Emerald
    accentText: "direct-to-card cashback"
  }
];

export const STATS_DATA = [
  {
    id: "members",
    value: 12,
    suffix: "M+",
    label: "members trust CRED"
  },
  {
    id: "rewards-given",
    value: 1200,
    suffix: "Cr+",
    label: "rewards claimed so far"
  },
  {
    id: "app-rating",
    value: 4.8,
    suffix: "/5",
    label: "average rating on stores"
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: "rev-1",
    name: "Aman Gupta",
    role: "Co-Founder, boAt Lifestyle",
    rating: 5,
    comment: "Paying credit card bills was always a chore. With CRED, it's not just seamless, it's actually rewarding. The UI is absolutely gorgeous.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120"
  },
  {
    id: "rev-2",
    name: "Rhea Sen",
    role: "Product Designer",
    rating: 5,
    comment: "The visual design and micro-interactions of CRED are in a league of their own. As a designer, I'm always blown away by the detail in their execution.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120"
  },
  {
    id: "rev-3",
    name: "Vikram Malhotra",
    role: "Investment Banker",
    rating: 5,
    comment: "Managing multiple premium credit cards used to be a nightmare of spreadsheets and calendars. CRED solved it all. The coin burn is addictive!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120"
  },
  {
    id: "rev-4",
    name: "Sneha Nair",
    role: "Tech Lead",
    rating: 4.8,
    comment: "I love the secure feel and the NeoPOP design patterns. Being able to check my credit score monthly and pay instantly via UPI is a huge plus.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120&h=120"
  }
];

export const SECURITY_DATA = [
  {
    id: "encryption",
    title: "256-bit encryption",
    description: "Your financial details and personal credentials are encrypted with bank-grade security protocols.",
    icon: RiSecurePaymentLine,
  },
  {
    id: "transactions",
    title: "Secure transactions",
    description: "Every payment is processed through encrypted gateways, ensuring zero leakage of transaction information.",
    icon: RiShieldCheckLine,
  },
  {
    id: "privacy",
    title: "Privacy protection",
    description: "Your data is completely confidential. We do not sell your personal information or financial data to third parties.",
    icon: RiFileList3Line,
  },
  {
    id: "trusted",
    title: "Trusted systems",
    description: "Monitored round the clock for anomalies. Our platform integrates with trusted financial authorities.",
    icon: RiDatabaseLine,
  }
];

export const FOOTER_LINKS = {
  products: [
    { label: "CRED Pay", href: "#" },
    { label: "CRED Cash", href: "#" },
    { label: "CRED Flash", href: "#" },
    { label: "CRED Coins", href: "#" }
  ],
  resources: [
    { label: "Credit Score Check", href: "#" },
    { label: "Card Payment Guide", href: "#" },
    { label: "Fintech Articles", href: "#" },
    { label: "Customer Stories", href: "#" }
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers (We are hiring)", href: "#" },
    { label: "Press & Media", href: "#" },
    { label: "Brand Kits", href: "#" }
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Security Safeguards", href: "#" },
    { label: "Merchant Terms", href: "#" }
  ]
};
