import {
  BadgeCheck,
  Brush,
  CircleDot,
  Feather,
  Flower2,
  Heart,
  IterationCcw,
  Layers3,
  PenLine,
  ShieldCheck,
  Sparkles,
  Waves
} from "lucide-react";

const pexelsImage = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=900`;

export const services = [
  {
    id: "realistic-tattoos",
    name: "Realistic Tattoos",
    category: "TATTOO SERVICES",
    icon: Brush,
    image: pexelsImage("7147771"),
    link: "https://oracleinktattoo.com/reliable-tattoos/",
    description: "Realistic tattoos focus on fine details and natural shading to create artwork that feels alive. Every design is carefully crafted to capture depth, expression, and beauty, making it a unique and eye-catching tattoo style."
  },
  {
    id: "religious-tattoos",
    name: "Religious Tattoos",
    category: "TATTOO SERVICES",
    icon: Sparkles,
    image: pexelsImage("11178572"),
    link: "https://oracleinktattoo.com/religious-tattoo/",
    description: "Sacred tattoo designs inspired by spiritual symbols, deities, and scriptures, crafted with precision to express faith, devotion, and timeless meaning."
  },
  {
    id: "couple-tattoo",
    name: "Couple Tattoo",
    category: "TATTOO SERVICES",
    icon: Heart,
    image: pexelsImage("13771118"),
    link: "https://oracleinktattoo.com/couple-tattoo/",
    description: "A couple tattoo is a meaningful and permanent symbol of love, trust, and deep connection between two people. It represents shared memories and the unique bond of a relationship."
  },
  {
    id: "small-tattoo-designs",
    name: "Small Tattoo Designs",
    category: "TATTOO SERVICES",
    icon: Feather,
    image: pexelsImage("8258889"),
    link: "https://oracleinktattoo.com/small-tattoo-design/",
    description: "Small tattoos are subtle, stylish, and meaningful. Perfect for wrists, fingers, ankles, and collarbones, we create tiny designs like symbols, words, or minimal patterns that reflect your personality."
  },
  {
    id: "custom-lettering",
    name: "Custom Tattoo Lettering",
    category: "TATTOO SERVICES",
    icon: PenLine,
    image: pexelsImage("10435594"),
    description: "Refined scripts, names, quotes, and typographic tattoos composed for your body and story."
  },
  {
    id: "mandala-tattoos",
    name: "Mandala Tattoos",
    category: "TATTOO SERVICES",
    icon: Flower2,
    image: pexelsImage("4799384"),
    description: "Symmetric mandala work with calibrated spacing, crisp linework, and meditative structure."
  },
  {
    id: "sleeve-tattoos",
    name: "Sleeve Tattoos",
    category: "TATTOO SERVICES",
    icon: Layers3,
    image: pexelsImage("1461816"),
    description: "Half and full sleeves designed as cohesive visual systems, not disconnected patches."
  },
  {
    id: "polynesian-tribal",
    name: "Polynesian Tribal Tattoos",
    category: "TATTOO SERVICES",
    icon: Waves,
    image: pexelsImage("2183131"),
    description: "Bold tribal compositions shaped around rhythm, symbolism, and anatomical movement."
  },
  {
    id: "piercing",
    name: "Piercing",
    category: "PIERCING SERVICES",
    icon: BadgeCheck,
    image: pexelsImage("7400018"),
    description: "Get stylish and safe body piercings at our Ranchi studio. We offer ear, nose, eyebrow, lip, and cartilage piercings with professional care and high-quality jewelry for a trendy, comfortable, and hygienic experience."
  },
  {
    id: "nose-piercing",
    name: "Nose Piercing",
    category: "PIERCING SERVICES",
    icon: Sparkles,
    image: pexelsImage("12435651"),
    description: "Precise nose piercing for studs or rings, focused on symmetry, comfort, and healing."
  },
  {
    id: "navel-piercing",
    name: "Navel Piercing",
    category: "PIERCING SERVICES",
    icon: CircleDot,
    image: pexelsImage("7230416"),
    description: "Clean, careful navel piercing with placement guidance and clear aftercare direction."
  },
  {
    id: "tattoo-aftercare",
    name: "Tattoo Aftercare",
    category: "AFTERCARE & FINISHING",
    icon: ShieldCheck,
    image: pexelsImage("7147769"),
    description: "Healing guidance and care routines that protect detail, saturation, and long-term clarity."
  },
  {
    id: "cover-ups-reworkings",
    name: "Tattoo Cover-Ups & Reworkings",
    category: "AFTERCARE & FINISHING",
    icon: IterationCcw,
    image: pexelsImage("12038947"),
    description: "Strategic redesigns that transform old tattoos into stronger, cleaner work."
  },
  {
    id: "tattoo-design",
    name: "Tattoo Design",
    category: "AFTERCARE & FINISHING",
    icon: Brush,
    image: pexelsImage("7504856"),
    description: "Custom concept development for clients who want a piece created before the first session."
  },
  {
    id: "tattoo-finishing",
    name: "Tattoo Finishing",
    category: "AFTERCARE & FINISHING",
    icon: BadgeCheck,
    image: pexelsImage("8187555"),
    description: "Completion sessions that refine unfinished work with cleaner depth, balance, and detail."
  },
  {
    id: "tattoo-touch-ups",
    name: "Tattoo Touch-Ups",
    category: "AFTERCARE & FINISHING",
    icon: Sparkles,
    image: pexelsImage("7203741"),
    description: "Careful refresh sessions for healed tattoos that need sharper lines or restored contrast."
  }
];

export const serviceCategories = [
  "TATTOO SERVICES",
  "PIERCING SERVICES",
  "AFTERCARE & FINISHING"
];
