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

import serviceRealistic from "../images/Screenshot 2026-06-06 233550.png";
import serviceReligious from "../images/Screenshot 2026-06-06 233429.png";
import serviceCouple from "../images/Screenshot 2026-06-06 233616.png";
import serviceSmall from "../images/Screenshot 2026-06-06 233340.png";
import serviceLettering from "../images/Screenshot 2026-06-06 233400.png";
import serviceMandala from "../images/Screenshot 2026-06-06 233607.png";
import serviceSleeve from "../images/Screenshot 2026-06-06 235906.png";
import serviceTribal from "../images/Screenshot 2026-06-06 233447.png";
import servicePiercing from "../images/Screenshot 2026-06-06 235950.png";
import serviceNosePiercing from "../images/Screenshot 2026-06-07 000014.png";
import serviceNavelPiercing from "../images/Screenshot 2026-06-07 000048.png";
import serviceAftercare from "../images/Screenshot 2026-06-06 235830.png";
import serviceCoverUp from "../images/Screenshot 2026-06-06 235813.png";
import serviceDesign from "../images/Screenshot 2026-06-06 233350.png";
import serviceFinishing from "../images/Screenshot 2026-06-06 235858.png";
import serviceTouchUps from "../images/Screenshot 2026-06-06 233700.png";

export const services = [
  {
    id: "realistic-tattoos",
    name: "Realistic Tattoos",
    category: "TATTOO SERVICES",
    icon: Brush,
    image: serviceRealistic,
    link: "https://oracleinktattoo.com/reliable-tattoos/",
    galleryCategory: "Portrait",
    description: "Realistic tattoos focus on fine details and natural shading to create artwork that feels alive. Every design is carefully crafted to capture depth, expression, and beauty, making it a unique and eye-catching tattoo style.",
    detailText: "Realistic tattoos at Oracle Tattoo are based on natural shapes, refined shading, and lifelike contrast. We create portraits, animal realism, and natural subjects with crisp detail and soft tonal depth.",
    detailPoints: [
      "Portrait and realism work with lifelike shading",
      "Custom sizing and placement for best body flow",
      "Reference-based artwork adapted to your skin tone"
    ]
  },
  {
    id: "religious-tattoos",
    name: "Religious Tattoos",
    category: "TATTOO SERVICES",
    icon: Sparkles,
    image: serviceReligious,
    link: "https://oracleinktattoo.com/religious-tattoo/",
    galleryCategory: "Religious Tattoos",
    description: "Sacred tattoo designs inspired by spiritual symbols, deities, and scriptures, crafted with precision to express faith, devotion, and timeless meaning.",
    detailText: "Religious tattoos at Oracle Tattoo are created with care for symbolism and spiritual meaning. Each design reflects your faith story while keeping the work clean, balanced, and powerful.",
    detailPoints: [
      "Custom spiritual imagery and sacred symbols",
      "Blackwork and soft shading for devotional pieces",
      "Placement guidance for meaningful result"
    ]
  },
  {
    id: "couple-tattoo",
    name: "Couple Tattoo",
    category: "TATTOO SERVICES",
    icon: Heart,
    image: serviceCouple,
    link: "https://oracleinktattoo.com/couple-tattoo/",
    galleryCategory: "Couples Tattoos",
    description: "A couple tattoo is a meaningful and permanent symbol of love, trust, and deep connection between two people. It represents shared memories and the unique bond of a relationship.",
    detailText: "Couple tattoos are designed to match and complement each partner’s style. Our artists create paired work that feels personal, symbolic, and wearable on both people.",
    detailPoints: [
      "Matching or mirrored designs for partners",
      "Shared symbolism for love and memory",
      "Flexible placement for wrists, arms, and ankles"
    ]
  },
  {
    id: "small-tattoo-designs",
    name: "Small Tattoo Designs",
    category: "TATTOO SERVICES",
    icon: Feather,
    image: serviceSmall,
    link: "https://oracleinktattoo.com/small-tattoo-design/",
    galleryCategory: "Small Tattoos",
    description: "Small tattoos are subtle, stylish, and meaningful. Perfect for wrists, fingers, ankles, and collarbones, we create tiny designs like symbols, words, or minimal patterns that reflect your personality.",
    detailText: "Small tattoos demand precision and thoughtful composition. We design tiny pieces that look crisp in small spaces and keep their detail through healing.",
    detailPoints: [
      "Fine line symbols and small meaningful imagery",
      "Perfect for fingers, wrists, ankles, and behind-ear placement",
      "Minimal designs that stay clean and timeless"
    ]
  },
  {
    id: "custom-lettering",
    name: "Custom Tattoo Lettering",
    category: "TATTOO SERVICES",
    icon: PenLine,
    image: serviceLettering,
    description: "Refined scripts, names, quotes, and typographic tattoos composed for your body and story."
  },
  {
    id: "mandala-tattoos",
    name: "Mandala Tattoos",
    category: "TATTOO SERVICES",
    icon: Flower2,
    image: serviceMandala,
    description: "Symmetric mandala work with calibrated spacing, crisp linework, and meditative structure."
  },
  {
    id: "sleeve-tattoos",
    name: "Sleeve Tattoos",
    category: "TATTOO SERVICES",
    icon: Layers3,
    image: serviceSleeve,
    description: "Half and full sleeves designed as cohesive visual systems, not disconnected patches."
  },
  {
    id: "polynesian-tribal",
    name: "Polynesian Tribal Tattoos",
    category: "TATTOO SERVICES",
    icon: Waves,
    image: serviceTribal,
    description: "Bold tribal compositions shaped around rhythm, symbolism, and anatomical movement."
  },
  {
    id: "piercing",
    name: "Piercing",
    category: "PIERCING SERVICES",
    icon: BadgeCheck,
    image: servicePiercing,
    link: "https://oracleinktattoo.com/piercing/",
    description: "Get stylish and safe body piercings at our Ranchi studio. We offer ear, nose, eyebrow, lip, and cartilage piercings with professional care and high-quality jewelry for a trendy, comfortable, and hygienic experience."
  },
  {
    id: "nose-piercing",
    name: "Nose Piercing",
    category: "PIERCING SERVICES",
    icon: Sparkles,
    image: serviceNosePiercing,
    description: "Precise nose piercing for studs or rings, focused on symmetry, comfort, and healing."
  },
  {
    id: "navel-piercing",
    name: "Navel Piercing",
    category: "PIERCING SERVICES",
    icon: CircleDot,
    image: serviceNavelPiercing,
    description: "Clean, careful navel piercing with placement guidance and clear aftercare direction."
  },
  {
    id: "tattoo-aftercare",
    name: "Tattoo Aftercare",
    category: "AFTERCARE & FINISHING",
    icon: ShieldCheck,
    image: serviceAftercare,
    description: "Healing guidance and care routines that protect detail, saturation, and long-term clarity."
  },
  {
    id: "cover-ups-reworkings",
    name: "Tattoo Cover-Ups & Reworkings",
    category: "AFTERCARE & FINISHING",
    icon: IterationCcw,
    image: serviceCoverUp,
    description: "Strategic redesigns that transform old tattoos into stronger, cleaner work."
  },
  {
    id: "tattoo-design",
    name: "Tattoo Design",
    category: "AFTERCARE & FINISHING",
    icon: Brush,
    image: serviceDesign,
    description: "Custom concept development for clients who want a piece created before the first session."
  },
  {
    id: "tattoo-finishing",
    name: "Tattoo Finishing",
    category: "AFTERCARE & FINISHING",
    icon: BadgeCheck,
    image: serviceFinishing,
    description: "Completion sessions that refine unfinished work with cleaner depth, balance, and detail."
  },
  {
    id: "tattoo-touch-ups",
    name: "Tattoo Touch-Ups",
    category: "AFTERCARE & FINISHING",
    icon: Sparkles,
    image: serviceTouchUps,
    description: "Careful refresh sessions for healed tattoos that need sharper lines or restored contrast."
  }
];

export const serviceCategories = [
  "TATTOO SERVICES",
  "PIERCING SERVICES",
  "AFTERCARE & FINISHING"
];
