import gallery01 from "../images/Screenshot 2026-06-06 233324.png";
import gallery02 from "../images/Screenshot 2026-06-06 233340.png";
import gallery03 from "../images/Screenshot 2026-06-06 233350.png";
import gallery04 from "../images/Screenshot 2026-06-06 233400.png";
import gallery05 from "../images/Screenshot 2026-06-06 233415.png";
import gallery06 from "../images/Screenshot 2026-06-06 233429.png";
import gallery07 from "../images/Screenshot 2026-06-06 233436.png";
import gallery08 from "../images/Screenshot 2026-06-06 233447.png";
import gallery09 from "../images/Screenshot 2026-06-06 233502.png";
import gallery10 from "../images/Screenshot 2026-06-06 233522.png";
import gallery11 from "../images/Screenshot 2026-06-06 233531.png";
import gallery12 from "../images/Screenshot 2026-06-06 233550.png";
import gallery13 from "../images/Screenshot 2026-06-06 233607.png";
import gallery14 from "../images/Screenshot 2026-06-06 233616.png";
import gallery15 from "../images/Screenshot 2026-06-06 233635.png";
import gallery16 from "../images/Screenshot 2026-06-06 233700.png";
import gallery17 from "../images/Screenshot 2026-06-06 233716.png";
import featured01 from "../images/Screenshot 2026-06-06 235813.png";
import featured02 from "../images/Screenshot 2026-06-06 235830.png";
import featured03 from "../images/Screenshot 2026-06-06 235858.png";
import featured04 from "../images/Screenshot 2026-06-06 235906.png";
import featured05 from "../images/Screenshot 2026-06-06 235950.png";
import featured06 from "../images/Screenshot 2026-06-07 000014.png";
import featured07 from "../images/Screenshot 2026-06-07 000048.png";
import tattooProject1 from "../images/tattooproject1.webp";
import tattooProject2 from "../images/tattooproject2.webp";
import tattooProject3 from "../images/tattooproject3.webp";
import tattooProject14 from "../images/tattooproject14.webp";

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
    featured01,
    featured02,
    featured03,
    featured04,
    featured05,
    featured06,
    featured07
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
    { category: "Memorial Tattoos", image: gallery01, title: "Lira Memorial Wings", description: "A delicate back-neck memorial tattoo with angel wings, a halo, paw detail, and script lettering for a loved companion." },
    { category: "Small Tattoos", image: gallery02, title: "Minimal Cosmic Spark", description: "A compact fine-line starburst with tiny celestial accents, designed for a subtle forearm placement." },
    { category: "Small Tattoos", image: gallery03, title: "Mystic Eye Linework", description: "Fine-line hands, eye, moon, and cloud details arranged as a balanced symbolic arm piece." },
    { category: "Lettering", image: gallery04, title: "Sanskrit Forearm Lettering", description: "Bold Devanagari script with clean curves and dark fill, placed vertically for strong forearm readability." },
    { category: "Religious Tattoos", image: gallery05, title: "Trishul Om Armband", description: "A spiritual armband composition combining Om, trishul-inspired forms, mountain details, and shaded bandwork." },
    { category: "Religious Tattoos", image: gallery06, title: "Damru Om Symbol", description: "A vertical devotional tattoo with damru, trishul flow, Om lettering, and smooth black-grey shading." },
    { category: "Lettering", image: gallery07, title: "555 Change Script", description: "A clean numerology and cursive lettering tattoo pairing bold 555 numbers with soft script detail." },
    { category: "Band Tattoos", image: gallery08, title: "Geometric Black Band", description: "A sharp blackwork armband with negative-space geometry and a centered triangular motif." },
    { category: "Lettering", image: gallery09, title: "Sword Initial Spine", description: "A slim back tattoo combining a vertical sword, initials, and fine detail for a personal symbolic piece." },
    { category: "Small Tattoos", image: gallery10, title: "Serpent Moon Sternum", description: "A centered sternum design with serpent flow, moon, starburst, and ornamental dotwork." },
    { category: "Lettering", image: gallery11, title: "Hindi Wrist Script", description: "A wrist lettering tattoo with flowing Hindi script and soft circular brush-stroke accents." },
    { category: "Portrait", image: gallery12, title: "Shiva Realism Shoulder", description: "A large black-grey Lord Shiva portrait with smooth shading, strong facial structure, and shoulder placement." },
    { category: "Small Tattoos", image: gallery13, title: "Lotus Ornament Sternum", description: "A symmetrical lotus and ornamental dotwork piece designed to follow the body's center line." },
    { category: "Portrait", image: gallery14, title: "Father And Child Portrait", description: "A sentimental framed portrait tattoo with floral accents and soft black-grey shading." },
    { category: "Portrait", image: gallery15, title: "Tattoo Session Detail", description: "A studio process image showing careful machine work, client comfort, and controlled tattoo application." },
    { category: "Small Tattoos", image: gallery16, title: "Radiant Lotus Forearm", description: "A fine black-grey lotus with rising sun rays, soft shading, and calm ornamental balance." },
    { category: "Geometric Tattoos", image: gallery17, title: "Family Compass", description: "A compass tattoo with family quote lettering, circular geometry, and clean directional linework." },
    { category: "Portrait", image: tattooProject1, title: "Buddha Forearm Portrait", description: "A calm Buddha portrait with soft black-grey shading and peaceful facial expression." },
    { category: "Religious Tattoos", image: tattooProject2, title: "Trishul Damru Detail", description: "A devotional trishul and damru tattoo with bead accents and compact forearm placement." },
    { category: "Religious Tattoos", image: tattooProject3, title: "Ganesha Back Piece", description: "A large Ganesha tattoo with ornamental crown detail, bold linework, and broad back placement." },
    { category: "Portrait", image: tattooProject14, title: "Shiva Black-Grey Portrait", description: "A detailed Lord Shiva shoulder portrait with deep contrast, smooth shading, and sacred markings." }
  ],
  artists: [
    unsplash("photo-1598371839696-5c5bb00bdc28", 900),
    unsplash("photo-1542727365-19732a80dcfd", 900),
    unsplash("photo-1562962230-16e4623d36e6", 900),
    unsplash("photo-1542727365-19732a80dcfd", 900)
  ],
  blogHero: pexels("28919353", 1600),
  blog: [
    pexels("20339302", 1000),
    pexels("13345926", 1000),
    pexels("28919353", 1000),
    pexels("11364054", 1000),
    pexels("28496766", 1000),
    pexels("11178572", 1000)
  ]
};
