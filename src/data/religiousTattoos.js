import religious01 from "../images/Religious_Tattoo/OT-1.jpeg";
import religious02 from "../images/Religious_Tattoo/OT-2.jpeg";
import religious03 from "../images/Religious_Tattoo/OT-3.jpeg";
import religious04 from "../images/Religious_Tattoo/OT-4.jpeg";
import religious05 from "../images/Religious_Tattoo/OT-5.jpeg";
import religious06 from "../images/Religious_Tattoo/OT-6.jpeg";
import religious07 from "../images/Religious_Tattoo/OT-7.jpeg";
import religious08 from "../images/Religious_Tattoo/OT-8.jpeg";
import religious09 from "../images/Religious_Tattoo/OT-9.jpeg";
import religious10 from "../images/Religious_Tattoo/OT-10.jpeg";
import religious11 from "../images/Religious_Tattoo/OT-11.jpeg";

const detailSections = {
  meaning: "Religious tattoos are chosen to keep faith, protection, blessings, and personal devotion close to the body. The final design should respect the symbol, stay readable, and feel deeply personal instead of decorative only.",
  design: "At Oracle Tattoo, we plan devotional artwork around the subject, body placement, skin tone, and long-term clarity. Fine lines, black-grey shading, mandala details, script, aura work, and negative space are balanced before the stencil is approved.",
  placement: "Forearm, shoulder, chest, back, wrist, and upper arm placements work well for religious tattoos because they give sacred details enough space. Smaller devotional symbols can also be created for the wrist, neck, or behind the ear.",
  process: "The session starts with a consultation, reference review, sizing, and stencil placement. Once the design feels right, the artist inks the piece with careful linework, steady shading, and clear aftercare guidance for healing."
};

const notes = [
  "Bring clear references for deity, symbol, script, or mantra accuracy.",
  "Choose a size that lets important spiritual details heal cleanly.",
  "Avoid overloading small tattoos with too many sacred elements.",
  "Follow aftercare properly so blackwork, shading, and fine lines stay sharp."
];

const religiousTattooItems = [
  ["religious-tattoo-01", "Shiv Tattoo", religious11],
  ["religious-tattoo-02", "Om Tattoo", religious01],
  ["religious-tattoo-03", "Shiv Blackwork Tattoo", religious02],
  ["religious-tattoo-04", "Ganesh Tattoo", religious03],
  ["religious-tattoo-05", "Hanuman Tattoo", religious04],
  ["religious-tattoo-06", "Krishna Tattoo", religious05],
  ["religious-tattoo-07", "Devotional Detail Tattoo", religious06],
  ["religious-tattoo-08", "Om Linework Tattoo", religious07],
  ["religious-tattoo-09", "Shiv Shaded Tattoo", religious08],
  ["religious-tattoo-10", "Small Om Tattoo", religious09],
  ["religious-tattoo-11", "Custom Religious Tattoo", religious10]
];

export const religiousTattoos = religiousTattooItems.map(([id, title, image], index) => ({
  id,
  title,
  category: "Religious Tattoos",
  image,
  detailPath: `/religious-tattoos/${id}`,
  description:
    "A meaningful religious tattoo designed around faith, devotion, and personal belief, with clean composition and careful detailing for a powerful healed result.",
  detailSections,
  notes,
  idealFor: [
    "Devotional symbols and sacred imagery",
    "Mantra, script, and spiritual linework",
    "Black-grey religious tattoo concepts",
    "Custom faith-based body art"
  ],
  sequence: String(index + 1).padStart(2, "0")
}));
