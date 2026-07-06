import {
  BadgeCheck,
  Brush,
  CircleDot,
  Feather,
  Flower2,
  IterationCcw,
  Layers3,
  PenLine,
  ShieldCheck,
  Sparkles,
  Waves
} from "lucide-react";

const religiousTattooImageModules = import.meta.glob("../images/Religious_Tattoo/*.{jpg,jpeg,JPG,JPEG,png,PNG,webp,WEBP}", {
  eager: true,
  import: "default"
});
const bandTattooImageModules = import.meta.glob("../images/Band_Tattoo/*.{jpg,jpeg,JPG,JPEG,png,PNG,webp,WEBP}", {
  eager: true,
  import: "default"
});
const smallTattooImageModules = import.meta.glob("../images/Small_Tattoo/*.{jpg,jpeg,JPG,JPEG,png,PNG,webp,WEBP}", {
  eager: true,
  import: "default"
});
const portraitTattooImageModules = import.meta.glob("../images/Portrait_Tattoo/*.{jpg,jpeg,JPG,JPEG,png,PNG,webp,WEBP}", {
  eager: true,
  import: "default"
});
const piercingTattooImageModules = import.meta.glob("../images/Piercing_Tattoo/*.{jpg,jpeg,JPG,JPEG,png,PNG,webp,WEBP}", {
  eager: true,
  import: "default"
});
const animalTattooImageModules = import.meta.glob("../images/Animal_Tattoo/*.{jpg,jpeg,JPG,JPEG,png,PNG,webp,WEBP}", {
  eager: true,
  import: "default"
});

const imageList = (modules) =>
  Object.entries(modules)
    .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
    .map(([, image]) => image);

const categoryImages = {
  "Religious Tattoos": imageList(religiousTattooImageModules),
  "Band Tattoos": imageList(bandTattooImageModules),
  "Small Tattoos": imageList(smallTattooImageModules),
  Portrait: imageList(portraitTattooImageModules),
  Piercings: imageList(piercingTattooImageModules),
  "Animal Tattoos": imageList(animalTattooImageModules)
};

const firstCategoryImage = (category) => categoryImages[category]?.[0] ?? "";

export const services = [
  {
    id: "portrait-tattoos",
    name: "Portrait Tattoos",
    category: "Portrait",
    icon: Brush,
    image: firstCategoryImage("Portrait"),
    images: categoryImages.Portrait,
    link: "https://oracleinktattoo.com/portrait-tattoos/",
    description: "Portrait tattoos capture faces and lifelike subjects with depth, expression, and realistic shading for a personal body art statement.",
    detailText: "Portrait tattoos at Oracle Tattoo are crafted with strong shading, detail, and soft contrast. We create expressive face work, photo-realistic visuals, and illustrative portraits that feel alive on the skin.",
    detailPoints: [
      "Detailed portrait and facial shading with expressive depth",
      "Custom sizing and placement for natural body flow",
      "Reference-based artwork adapted to your skin tone"
    ]
  },
  {
    id: "religious-tattoos",
    name: "Religious Tattoos",
    category: "Religious Tattoos",
    icon: Sparkles,
    image: firstCategoryImage("Religious Tattoos"),
    images: categoryImages["Religious Tattoos"],
    link: "https://oracleinktattoo.com/religious-tattoo/",
    description: "Sacred tattoo designs inspired by spiritual symbols, deities, and scriptures, crafted with precision to express faith, devotion, and timeless meaning.",
    detailText: "Religious tattoos at Oracle Tattoo are created with care for symbolism and spiritual meaning. Each design reflects your faith story while keeping the work clean, balanced, and powerful.",
    detailPoints: [
      "Custom spiritual imagery and sacred symbols",
      "Blackwork and soft shading for devotional pieces",
      "Placement guidance for meaningful result"
    ]
  },
  {
    id: "band-tattoos",
    name: "Band Tattoos",
    category: "Band Tattoos",
    icon: CircleDot,
    image: firstCategoryImage("Band Tattoos"),
    images: categoryImages["Band Tattoos"],
    link: "https://oracleinktattoo.com/band-tattoos/",
    description: "Bold armband and wrist band tattoos designed with clean linework, geometric flow, and strong contrast for modern body art.",
    detailText: "Band tattoos at Oracle Tattoo are designed to wrap the body with balanced rhythm and strong visual flow. We blend linework, negative space, and pattern so each band feels sharp and wearable.",
    detailPoints: [
      "Clean armband and wrist band compositions",
      "Geometric, blackwork, and ornamental band styles",
      "Placement that follows muscle and bone structure"
    ]
  },
  {
    id: "animal-tattoos",
    name: "Animal Tattoos",
    category: "Animal Tattoos",
    icon: ShieldCheck,
    image: firstCategoryImage("Animal Tattoos"),
    images: categoryImages["Animal Tattoos"],
    link: "https://oracleinktattoo.com/animal-tattoos/",
    description: "Animal tattoos capture wildlife, pets, and symbolic creatures with expressive detail, texture, and strong composition.",
    detailText: "Animal tattoos at Oracle Tattoo are designed from clear references and shaped for strong expression. We create wildlife pieces, pet portraits, and symbolic animal artwork with clean contrast and body-friendly placement.",
    detailPoints: [
      "Wildlife, pet, and symbolic animal tattoo designs",
      "Realistic shading and texture adapted to your reference",
      "Placement planning for clear expression and long-term detail"
    ]
  },
  {
    id: "small-tattoo-designs",
    name: "Small Tattoos",
    category: "Small Tattoos",
    icon: Feather,
    image: firstCategoryImage("Small Tattoos"),
    images: categoryImages["Small Tattoos"],
    link: "https://oracleinktattoo.com/small-tattoo-design/",
    description: "Small tattoos are subtle, stylish, and meaningful. Perfect for wrists, fingers, ankles, and collarbones, we create tiny designs like symbols, words, or minimal patterns that reflect your personality.",
    detailText: "Small tattoos demand precision and thoughtful composition. We design tiny pieces that look crisp in small spaces and keep their detail through healing.",
    detailPoints: [
      "Fine line symbols and small meaningful imagery",
      "Perfect for fingers, wrists, ankles, and behind-ear placement",
      "Minimal designs that stay clean and timeless"
    ]
  },
  {
    id: "piercing",
    name: "Piercings",
    category: "Piercings",
    icon: BadgeCheck,
    image: firstCategoryImage("Piercings"),
    images: categoryImages.Piercings,
    link: "https://oracleinktattoo.com/piercing/",
    description: "Get stylish and safe body piercings at our Ranchi studio. We offer ear, nose, eyebrow, lip, and cartilage piercings with professional care and high-quality jewelry for a trendy, comfortable, and hygienic experience.",
    detailText: "Piercing at Oracle Tattoo is planned around safe placement, clean tools, and comfortable healing. We guide you on jewelry, aftercare, and placement before the piercing is done.",
    detailPoints: [
      "Ear, nose, eyebrow, lip, and cartilage piercing options",
      "Hygienic setup with professional placement checks",
      "Aftercare guidance for clean and comfortable healing"
    ]
  }
];

export const serviceCategories = [
  "Religious Tattoos",
  "Band Tattoos",
  "Small Tattoos",
  "Portrait",
  "Piercings",
  "Animal Tattoos"
];
