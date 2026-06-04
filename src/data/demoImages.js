import tp1 from "../images/tattooproject1.webp";
import tp2 from "../images/tattooproject2.webp";
import tp3 from "../images/tattooproject3.webp";
import tp14 from "../images/tattooproject14.webp";
import tp15 from "../images/tattooproject15.webp";
import tp16 from "../images/tattooproject16.webp";
import tp17 from "../images/tattooproject17.webp";
import tp18 from "../images/tattooproject18.webp";
import tp19 from "../images/tattooproject19.webp";
import tp20 from "../images/tattooproject20.webp";
import tp21 from "../images/tattooproject21.webp";
import tp22 from "../images/tattooproject22.webp";
import tp123 from "../images/tattooproject123.webp";

const unsplash = (id, width = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=88`;

export const demoImages = {
  hero: unsplash("photo-1598371839696-5c5bb00bdc28", 1600),
  studio: unsplash("photo-1611501275019-9b5cda994e8d", 1400),
  consultation: unsplash("photo-1565058379802-bbe93b2f703a", 1200),
  hygiene: unsplash("photo-1515626553181-0f218cb03f14", 1200),
  featured: [
    unsplash("photo-1611501275019-9b5cda994e8d", 1000),
    unsplash("photo-1565058379802-bbe93b2f703a", 1000),
    unsplash("photo-1515626553181-0f218cb03f14", 1000),
    unsplash("photo-1542727365-19732a80dcfd", 1000)
  ],
  services: [
    unsplash("photo-1598371839696-5c5bb00bdc28", 900),
    unsplash("photo-1542727365-19732a80dcfd", 900),
    unsplash("photo-1562962230-16e4623d36e6", 900),
    unsplash("photo-1565058379802-bbe93b2f703a", 900),
    unsplash("photo-1611501275019-9b5cda994e8d", 900),
    unsplash("photo-1515626553181-0f218cb03f14", 900)
  ],
  gallery: [
    { category: "Religious Tattoos", image: tp1, title: "Sacred floral mandala", description: "A clean mandala piece with religious motifs and delicate sacred detailing for meaningful placement." },
    { category: "Portrait", image: tp2, title: "Portrait realism study", description: "A realistic portrait composition capturing fine hair texture and soft shadows for a bold personal tribute." },
    { category: "Couples Tattoos", image: tp3, title: "Connected partner symbols", description: "Matching symbols designed for couples who want shared meaning and subtle body placement." },
    { category: "Small Tattoos", image: tp14, title: "Fine devotional mini piece", description: "A compact devotional tattoo featuring crisp linework for a personal, elegant accent." },
    { category: "Band Tattoos", image: tp15, title: "Bold wrist band design", description: "A strong black band with rich contrast and balanced spacing around the wrist." },
    { category: "Piercings", image: tp16, title: "Clean piercing detail", description: "Detailed capture of piercing jewelry and placement to showcase precision and style." },
    { category: "Religious Tattoos", image: tp17, title: "Minimal sacred icon", description: "A minimal icon with spiritual value, made for quiet significance and clean skin flow." },
    { category: "Couples Tattoos", image: tp18, title: "Matching story marks", description: "Paired tattoo elements created to mirror one another across two people in a meaningful way." },
    { category: "Small Tattoos", image: tp19, title: "Delicate wrist line art", description: "A tiny wrist tattoo with subtle detail and elegant line work for everyday wear." },
    { category: "Band Tattoos", image: tp20, title: "Classic black band", description: "A timeless black band tattoo with smooth edges and visual balance for the arm." },
    { category: "Portrait", image: tp21, title: "Detailed face portrait", description: "A precise facial portrait composition with defined contrast and expressive eyes." },
    { category: "Small Tattoos", image: tp22, title: "Subtle finger symbol", description: "A small finger symbol rendered with crisp black lines and compact design." },
    { category: "Portrait", image: tp123, title: "Soft shaded portrait", description: "A soft-shaded portrait with gentle transition tones and strong emotional expression." },
    { category: "Religious Tattoos", image: "https://oracleinktattoo.com/wp-content/uploads/2026/04/New-Project.webp", title: "Sacred heritage detail", description: "An inked heritage piece with religious symbolism and refined sacred geometry." },
    { category: "Band Tattoos", image: "https://oracleinktattoo.com/wp-content/uploads/2026/04/New-Project-1.webp", title: "Bold band composition", description: "A powerful tattoo band design built for strength, contrast, and wrist or arm placement." },
    { category: "Small Tattoos", image: "https://oracleinktattoo.com/wp-content/uploads/2026/04/New-Project-2.webp", title: "Tiny ornamental accent", description: "A delicate ornamental tattoo that works as a small accent for hands or arms." },
    { category: "Portrait", image: "https://oracleinktattoo.com/wp-content/uploads/2026/04/New-Project-3.webp", title: "Expressive portrait study", description: "A portrait study with expressive features and bold shading details." },
    { category: "Couples Tattoos", image: "https://oracleinktattoo.com/wp-content/uploads/2026/04/New-Project-4.webp", title: "Shared commitment pair", description: "A couples tattoo concept that links each piece through shared shape and meaning." },
    { category: "Piercings", image: "https://oracleinktattoo.com/wp-content/uploads/2026/04/New-Project-6.webp", title: "Piercing jewelry close-up", description: "A close-up look at piercing jewelry, placement, and clean studio finish." },
    { category: "Small Tattoos", image: "https://oracleinktattoo.com/wp-content/uploads/2026/04/New-Project-7.webp", title: "Minimal fine line tattoo", description: "A minimalist fine line tattoo designed for subtle elegance and precise line quality." },
    { category: "Band Tattoos", image: "https://oracleinktattoo.com/wp-content/uploads/2026/04/New-Project-9.webp", title: "Textured band detail", description: "A textured band tattoo with layered blackwork for dynamic wrist or forearm styling." },
    { category: "Portrait", image: "https://oracleinktattoo.com/wp-content/uploads/2026/04/New-Project-10.webp", title: "Bold portrait contrast", description: "A portrait rendered with strong contrast and textured ink depth for dramatic impact." },
    { category: "Religious Tattoos", image: "https://oracleinktattoo.com/wp-content/uploads/2026/04/New-Project-11.webp", title: "Devotional symbol close-up", description: "A detailed devotional symbol with sharp black lines and reverent styling." }
  ],
  artists: [
    unsplash("photo-1598371839696-5c5bb00bdc28", 900),
    unsplash("photo-1542727365-19732a80dcfd", 900),
    unsplash("photo-1562962230-16e4623d36e6", 900),
    unsplash("photo-1542727365-19732a80dcfd", 900)
  ],
  blog: [
    unsplash("photo-1611501275019-9b5cda994e8d", 900),
    unsplash("photo-1565058379802-bbe93b2f703a", 900),
    unsplash("photo-1562962230-16e4623d36e6", 900),
    unsplash("photo-1515626553181-0f218cb03f14", 900),
    unsplash("photo-1542727365-19732a80dcfd", 900),
    unsplash("photo-1598371839696-5c5bb00bdc28", 900)
  ]
};
