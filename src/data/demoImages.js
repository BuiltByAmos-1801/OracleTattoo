import tattooProject2 from "../images/tattooproject2.webp";
import tattooProject3 from "../images/tattooproject3.webp";
import tattooProject14 from "../images/tattooproject14.webp";
import tattooProject15 from "../images/tattooproject15.webp";
import tattooProject17 from "../images/tattooproject17.webp";
import tattooProject20 from "../images/tattooproject20.webp";
import tattooProject123 from "../images/tattooproject123.webp";

const unsplash = (id, width = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=88`;

const pexels = (id, width = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;

export const demoImages = {
  hero: pexels("11364054", 1800),
  studio: pexels("13345926", 1400),
  consultation: pexels("28919353", 1200),
  hygiene: pexels("20339302", 1200),
  featured: [
    pexels("13345926", 1000),
    pexels("11364054", 1000),
    pexels("28919353", 1000),
    pexels("20339302", 1000)
  ],
  services: [
    pexels("28496766", 900),
    pexels("11178572", 900),
    pexels("13771118", 900),
    pexels("8258889", 900),
    pexels("13345926", 900),
    pexels("7400018", 900)
  ],
  gallery: [
    { category: "Religious Tattoos", image: pexels("11178572", 1200), title: "Sacred floral mandala", description: "A clean mandala piece with religious motifs and delicate sacred detailing for meaningful placement." },
    { category: "Portrait", image: pexels("28496766", 1200), title: "Portrait realism study", description: "A realistic portrait composition capturing fine hair texture and soft shadows for a bold personal tribute." },
    { category: "Couples Tattoos", image: pexels("13771118", 1200), title: "Connected partner symbols", description: "Matching symbols designed for couples who want shared meaning and subtle body placement." },
    { category: "Small Tattoos", image: pexels("8258889", 1200), title: "Fine devotional mini piece", description: "A compact devotional tattoo featuring crisp linework for a personal, elegant accent." },
    { category: "Band Tattoos", image: pexels("13345926", 1200), title: "Bold wrist band design", description: "A strong black band with rich contrast and balanced spacing around the wrist." },
    { category: "Piercings", image: pexels("7400018", 1200), title: "Clean piercing detail", description: "Detailed capture of piercing jewelry and placement to showcase precision and style." },
    { category: "Religious Tattoos", image: pexels("4799384", 1200), title: "Minimal sacred icon", description: "A minimal icon with spiritual value, made for quiet significance and clean skin flow." },
    { category: "Couples Tattoos", image: pexels("13771118", 1200), title: "Matching story marks", description: "Paired tattoo elements created to mirror one another across two people in a meaningful way." },
    { category: "Small Tattoos", image: pexels("10435594", 1200), title: "Delicate wrist line art", description: "A tiny wrist tattoo with subtle detail and elegant line work for everyday wear." },
    { category: "Band Tattoos", image: pexels("2183131", 1200), title: "Classic black band", description: "A timeless black band tattoo with smooth edges and visual balance for the arm." },
    { category: "Portrait", image: pexels("34257469", 1200), title: "Detailed face portrait", description: "A precise facial portrait composition with defined contrast and expressive eyes." },
    { category: "Small Tattoos", image: pexels("11364054", 1200), title: "Subtle finger symbol", description: "A small finger symbol rendered with crisp black lines and compact design." },
    { category: "Portrait", image: pexels("7147771", 1200), title: "Soft shaded portrait", description: "A soft-shaded portrait with gentle transition tones and strong emotional expression." },
    { category: "Religious Tattoos", image: "https://oracleinktattoo.com/wp-content/uploads/2026/04/New-Project.webp", title: "Sacred heritage detail", description: "An inked heritage piece with religious symbolism and refined sacred geometry." },
    { category: "Band Tattoos", image: "https://oracleinktattoo.com/wp-content/uploads/2026/04/New-Project-1.webp", title: "Bold band composition", description: "A powerful tattoo band design built for strength, contrast, and wrist or arm placement." },
    { category: "Small Tattoos", image: pexels("10435594", 1200), title: "Tiny ornamental accent", description: "A delicate ornamental tattoo that works as a small accent for hands or arms." },
    { category: "Portrait", image: pexels("28496766", 1200), title: "Expressive portrait study", description: "A portrait study with expressive features and bold shading details." },
    { category: "Couples Tattoos", image: pexels("20264127", 1200), title: "Shared commitment pair", description: "A couples tattoo concept that links each piece through shared shape and meaning." },
    { category: "Piercings", image: pexels("19875392", 1200), title: "Piercing jewelry close-up", description: "A close-up look at piercing jewelry, placement, and clean studio finish." },
    { category: "Small Tattoos", image: pexels("8258889", 1200), title: "Minimal fine line tattoo", description: "A minimalist fine line tattoo designed for subtle elegance and precise line quality." },
    { category: "Band Tattoos", image: pexels("2183131", 1200), title: "Textured band detail", description: "A textured band tattoo with layered blackwork for dynamic wrist or forearm styling." },
    { category: "Portrait", image: pexels("11666112", 1200), title: "Bold portrait contrast", description: "A portrait rendered with strong contrast and textured ink depth for dramatic impact." },
    { category: "Religious Tattoos", image: "https://oracleinktattoo.com/wp-content/uploads/2026/04/New-Project-11.webp", title: "Devotional symbol close-up", description: "A detailed devotional symbol with sharp black lines and reverent styling." }
  ],
  artists: [
    unsplash("photo-1598371839696-5c5bb00bdc28", 900),
    unsplash("photo-1542727365-19732a80dcfd", 900),
    unsplash("photo-1562962230-16e4623d36e6", 900),
    unsplash("photo-1542727365-19732a80dcfd", 900)
  ],
  blogHero: tattooProject123,
  blog: [
    tattooProject15,
    tattooProject14,
    tattooProject17,
    tattooProject2,
    tattooProject3,
    tattooProject20
  ]
};
