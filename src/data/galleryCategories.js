import OT1 from "../images/Religious_Tattoo/OT-1.jpeg";
import OT2 from "../images/Religious_Tattoo/OT-2.jpeg";
import OT3 from "../images/Religious_Tattoo/OT-3.jpeg";
import OT4 from "../images/Religious_Tattoo/OT-4.jpeg";
import OT5 from "../images/Religious_Tattoo/OT-5.jpeg";
import OT6 from "../images/Religious_Tattoo/OT-6.jpeg";
import OT7 from "../images/Religious_Tattoo/OT-7.jpeg";
import OT8 from "../images/Religious_Tattoo/OT-8.jpeg";
import OT9 from "../images/Religious_Tattoo/OT-9.jpeg";
import OT10 from "../images/Religious_Tattoo/OT-10.jpeg";
import OT11 from "../images/Religious_Tattoo/OT-11.jpeg";

const religiousTattooImages = [OT1, OT2, OT3, OT4, OT5, OT6, OT7, OT8, OT9, OT10, OT11];

import Pierce1 from "../images/Piercing_Tattoo/IMG_7425 - Lily Tattooz.jpeg";
import Pierce2 from "../images/Piercing_Tattoo/IMG_7907 - Lily Tattooz.jpeg";
import Pierce3 from "../images/Piercing_Tattoo/IMG_9339 - Lily Tattooz.jpeg";
import Pierce4 from "../images/Piercing_Tattoo/IMG_9340 - Lily Tattooz.jpeg";
import Pierce5 from "../images/Piercing_Tattoo/IMG_9342 - Lily Tattooz.jpeg";
import Pierce6 from "../images/Piercing_Tattoo/WhatsApp Image 2026-07-04 at 11.10.33 PM (1).jpeg";
import Pierce7 from "../images/Piercing_Tattoo/WhatsApp Image 2026-07-04 at 11.10.33 PM.jpeg";
import Pierce8 from "../images/Piercing_Tattoo/WhatsApp Image 2026-07-04 at 11.10.34 PM.jpeg";

import Portrait1 from "../images/Portrait_Tattoo/FullSizeRender - Lily Tattooz.jpeg";
import Portrait2 from "../images/Portrait_Tattoo/IMG_2490 - Lily Tattooz.jpeg";
import Portrait3 from "../images/Portrait_Tattoo/IMG_3461 - Lily Tattooz.jpeg";
import Portrait4 from "../images/Portrait_Tattoo/IMG_5669 - Lily Tattooz.jpeg";

import Small1 from "../images/Small_Tattoo/15846f88-d4c3-495b-a1e3-e70ceedf6f61 - Lily Tattooz.jpeg";
import Small2 from "../images/Small_Tattoo/4f5a4ed7-420b-46b6-a970-0165786d8524 - Lily Tattooz.jpeg";
import Small3 from "../images/Small_Tattoo/63C2FD0E-7387-42DF-B8FA-B566A7D5D34B - Lily Tattooz.jpeg";
import Small4 from "../images/Small_Tattoo/854e8563-0256-4053-8657-c5913a0e885d - Lily Tattooz.jpeg";
import Small5 from "../images/Small_Tattoo/8da2b59d-de75-4af1-a9b3-1c3570fcf85a - Lily Tattooz.jpeg";
import Small6 from "../images/Small_Tattoo/e9ab16c2-b069-44f0-97e8-60f0a44cead1 - Lily Tattooz.jpeg";
import Small7 from "../images/Small_Tattoo/IMG_4328 - Lily Tattooz.jpeg";
import Small8 from "../images/Small_Tattoo/IMG_4360 - Lily Tattooz.jpeg";
import Small9 from "../images/Small_Tattoo/IMG_5159 - Lily Tattooz.jpeg";
import Small10 from "../images/Small_Tattoo/IMG_7396 - Lily Tattooz.jpeg";
import Small11 from "../images/Small_Tattoo/IMG_8368 - Lily Tattooz.jpeg";

const bandImageModules = import.meta.glob("../images/Band_Tattoo/*.{jpg,jpeg,JPG,JPEG,png,PNG,webp,WEBP}", {
  eager: true,
  import: "default"
});
const animalImageModules = import.meta.glob("../images/Animal_Tattoo/*.{jpg,jpeg,JPG,JPEG,png,PNG,webp,WEBP}", {
  eager: true,
  import: "default"
});

const animalImages = Object.values(animalImageModules);
const bandImages = Object.values(bandImageModules);
const piercingImages = [Pierce1, Pierce2, Pierce3, Pierce4, Pierce5, Pierce6, Pierce7, Pierce8];
const portraitImages = [Portrait1, Portrait2, Portrait3, Portrait4];
const smallTattooImages = [
  Small1,
  Small2,
  Small3,
  Small4,
  Small5,
  Small6,
  Small7,
  Small8,
  Small9,
  Small10,
  Small11
];

export const galleryCategories = [
  {
    id: "religious-tattoos",
    title: "Religious Tattoos",
    eyebrow: "Faith / Devotion / Sacred Art",
    description: "Sacred symbols, deities, and spiritual stories shaped with devotion, detail, and respect.",
    detailIntro:
      "Religious tattoos are deeply personal pieces that carry belief, protection, gratitude, and memory. At Oracle Tattoo, every devotional design is planned with respect for the symbol, clean composition, and long-term clarity on the skin.",
    images: religiousTattooImages,
    alt: "Religious tattoo artwork at Oracle Tattoo",
    detailSections: [
      {
        title: "Meaning",
        text: "These tattoos can represent faith, inner strength, blessings, remembrance, or a spiritual journey. The design should feel personal instead of decorative."
      },
      {
        title: "Design Planning",
        text: "We balance deity faces, symbols, mantras, mandalas, and shading so the tattoo remains powerful without becoming crowded."
      },
      {
        title: "Best Placement",
        text: "Forearm, shoulder, chest, back, and upper arm placements work well because they allow enough space for detail and respectful visibility."
      },
      {
        title: "Studio Process",
        text: "References are refined into a custom stencil, sized for your body, and tattooed with careful contrast so the artwork ages cleanly."
      }
    ],
    idealFor: ["Lord Shiva and deity tattoos", "Spiritual symbols and mantras", "Large devotional compositions", "Meaningful first tattoos"],
    notes: ["Bring clear references of the deity or symbol you connect with.", "Detailed religious tattoos often need enough size for clean healing.", "We guide you on placement, visibility, and aftercare before the session."]
  },
  {
    id: "band-tattoos",
    title: "Band Tattoos",
    eyebrow: "Linework / Rhythm / Flow",
    description: "Clean armbands and wrist bands designed with rhythm, balance, and bold modern flow.",
    detailIntro:
      "Band tattoos wrap around the body like a designed rhythm. They can be minimal, geometric, ornamental, tribal-inspired, or bold blackwork, but the key is symmetry, clean spacing, and correct body alignment.",
    images: bandImages,
    alt: "Band tattoo design at Oracle Tattoo",
    detailSections: [
      {
        title: "Meaning",
        text: "A band tattoo can represent strength, discipline, milestones, protection, or simply a sharp modern visual statement."
      },
      {
        title: "Design Planning",
        text: "The stencil must wrap evenly around the arm, wrist, or leg. We plan line weight, negative space, and pattern repeat before tattooing."
      },
      {
        title: "Best Placement",
        text: "Forearm, bicep, wrist, ankle, and calf placements work beautifully when the design follows natural body curves."
      },
      {
        title: "Studio Process",
        text: "Band tattoos need precise measurement and calm execution, because even small alignment errors become visible in a wraparound design."
      }
    ],
    idealFor: ["Armband tattoos", "Wrist bands", "Geometric wraps", "Blackwork bands"],
    notes: ["Keep the arm relaxed during stencil placement.", "Thicker bands may need more time for even saturation.", "Symmetry is planned before the needle starts."]
  },
  {
    id: "small-tattoos",
    title: "Small Tattoos",
    eyebrow: "Minimal / Personal / Clean",
    description: "Minimal, meaningful pieces for wrists, fingers, ankles, and quiet personal moments.",
    detailIntro:
      "Small tattoos look simple, but they need careful design. The best tiny tattoos use clean shapes, enough breathing room, and details that will still read clearly after healing.",
    images: smallTattooImages,
    alt: "Small tattoo artwork at Oracle Tattoo",
    detailSections: [
      {
        title: "Meaning",
        text: "Small tattoos often hold private meaning: initials, dates, symbols, tiny florals, words, or a memory you want close."
      },
      {
        title: "Design Planning",
        text: "We simplify details, choose readable line weight, and avoid overpacking tiny spaces so the tattoo stays elegant."
      },
      {
        title: "Best Placement",
        text: "Wrist, ankle, collarbone, finger, behind the ear, and forearm placements are popular for small tattoos."
      },
      {
        title: "Studio Process",
        text: "The stencil is checked for size and visibility, then tattooed with steady fine-line control and clear aftercare instructions."
      }
    ],
    idealFor: ["First tattoos", "Minimal symbols", "Tiny lettering", "Subtle placement"],
    notes: ["Very tiny text can blur over time, so readable sizing matters.", "Finger tattoos may need touch-ups because of skin movement.", "Simple designs usually age better than crowded micro details."]
  },
  {
    id: "portrait",
    title: "Portrait",
    eyebrow: "Realism / Memory / Expression",
    description: "Lifelike faces and expressive realism crafted with soft shading and emotional depth.",
    detailIntro:
      "Portrait tattoos are built on trust, reference quality, and skilled shading. Whether it is a loved one, an icon, or a realistic subject, the goal is to capture expression and emotion with dignity.",
    images: portraitImages,
    alt: "Portrait tattoo artwork at Oracle Tattoo",
    detailSections: [
      {
        title: "Meaning",
        text: "Portraits often carry memory, admiration, grief, love, or identity. They should feel alive, not copied flat from a photo."
      },
      {
        title: "Design Planning",
        text: "We study the reference, lighting, contrast, facial proportions, and skin tone before creating the final stencil."
      },
      {
        title: "Best Placement",
        text: "Upper arm, forearm, chest, thigh, calf, and back are good choices because portraits need space for smooth shading."
      },
      {
        title: "Studio Process",
        text: "Portrait sessions are paced carefully, with layered shading and contrast checks to keep the face readable from a distance."
      }
    ],
    idealFor: ["Memorial tattoos", "Family portraits", "Celebrity portraits", "Realistic black and grey work"],
    notes: ["High-quality reference photos are essential.", "Portrait tattoos should not be too small.", "Good contrast helps the tattoo stay readable after healing."]
  },
  {
    id: "piercings",
    title: "Piercings",
    eyebrow: "Safe / Stylish / Hygienic",
    description: "Stylish, hygienic piercings planned with safe placement, clean tools, and proper aftercare.",
    detailIntro:
      "Piercing is a small procedure that still deserves professional care. We focus on safe placement, clean equipment, suitable jewelry, and clear healing guidance so the experience feels comfortable and controlled.",
    images: piercingImages,
    alt: "Professional piercing service at Oracle Tattoo",
    detailSections: [
      {
        title: "Meaning",
        text: "Piercings can be subtle, expressive, fashionable, or symbolic. The right placement should suit your face, ear shape, and personal style."
      },
      {
        title: "Planning",
        text: "We discuss placement, jewelry type, healing expectations, and lifestyle before marking the piercing point."
      },
      {
        title: "Best Options",
        text: "Ear, nose, eyebrow, lip, and cartilage piercings are popular choices depending on comfort and healing preference."
      },
      {
        title: "Studio Process",
        text: "The area is cleaned, placement is marked, and the piercing is done with professional hygiene followed by aftercare guidance."
      }
    ],
    idealFor: ["Ear piercings", "Nose piercings", "Cartilage piercings", "First-time piercing clients"],
    notes: ["Avoid touching fresh piercings with unwashed hands.", "Healing time depends on placement and aftercare.", "We help you choose jewelry that supports comfortable healing."]
  },
  {
      id: "animal-tattoos",
      title: "Animal Tattoos",
      eyebrow: "Wild / Symbolic / Fierce",
      description: "Lifelike and stylized animal portraits—lions, tigers, and pets—capturing spirit and movement.",
      detailIntro:
        "Animal tattoos range from realistic portraits to stylized symbols. We focus on expression, texture, and composition so the piece reads clearly and ages well.",
      images: animalImages,
      alt: "Animal tattoo artwork at Oracle Tattoo",
      detailSections: [
        {
          title: "Meaning",
          text: "Animal tattoos can represent strength, loyalty, spirit animals, or beloved pets. The right pose and style carry the emotion you want to keep."
        },
        {
          title: "Design Planning",
          text: "We choose reference, scale, and style—realism, blackwork, or illustrative—so the animal's features remain distinct over time."
        },
        {
          title: "Best Placement",
          text: "Forearm, calf, chest, and thigh allow space for facial detail and dynamic composition."
        }
      ],
      idealFor: ["Lions, tigers and wildlife", "Pet portraits", "Symbolic animal marks"],
      notes: ["Bring clear photo references for portraits.", "Larger pieces preserve detail best."]
    },
];
