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
    pexels("35426254", 1200),
    pexels("35426244", 1000),
    pexels("35426242", 1000),
    pexels("35554665", 1200)
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
    { category: "Religious Tattoos", image: gallery01, title: "Oracle Tattoo Portfolio 01", description: "Selected tattoo work from Oracle Tattoo's local portfolio." },
    { category: "Portrait", image: gallery02, title: "Oracle Tattoo Portfolio 02", description: "Selected tattoo work from Oracle Tattoo's local portfolio." },
    { category: "Small Tattoos", image: gallery03, title: "Oracle Tattoo Portfolio 03", description: "Selected tattoo work from Oracle Tattoo's local portfolio." },
    { category: "Band Tattoos", image: gallery04, title: "Oracle Tattoo Portfolio 04", description: "Selected tattoo work from Oracle Tattoo's local portfolio." },
    { category: "Religious Tattoos", image: gallery05, title: "Oracle Tattoo Portfolio 05", description: "Selected tattoo work from Oracle Tattoo's local portfolio." },
    { category: "Portrait", image: gallery06, title: "Oracle Tattoo Portfolio 06", description: "Selected tattoo work from Oracle Tattoo's local portfolio." },
    { category: "Couples Tattoos", image: gallery07, title: "Oracle Tattoo Portfolio 07", description: "Selected tattoo work from Oracle Tattoo's local portfolio." },
    { category: "Small Tattoos", image: gallery08, title: "Oracle Tattoo Portfolio 08", description: "Selected tattoo work from Oracle Tattoo's local portfolio." },
    { category: "Band Tattoos", image: gallery09, title: "Oracle Tattoo Portfolio 09", description: "Selected tattoo work from Oracle Tattoo's local portfolio." },
    { category: "Religious Tattoos", image: gallery10, title: "Oracle Tattoo Portfolio 10", description: "Selected tattoo work from Oracle Tattoo's local portfolio." },
    { category: "Portrait", image: gallery11, title: "Oracle Tattoo Portfolio 11", description: "Selected tattoo work from Oracle Tattoo's local portfolio." },
    { category: "Small Tattoos", image: gallery12, title: "Oracle Tattoo Portfolio 12", description: "Selected tattoo work from Oracle Tattoo's local portfolio." },
    { category: "Band Tattoos", image: gallery13, title: "Oracle Tattoo Portfolio 13", description: "Selected tattoo work from Oracle Tattoo's local portfolio." },
    { category: "Religious Tattoos", image: gallery14, title: "Oracle Tattoo Portfolio 14", description: "Selected tattoo work from Oracle Tattoo's local portfolio." },
    { category: "Portrait", image: gallery15, title: "Oracle Tattoo Portfolio 15", description: "Selected tattoo work from Oracle Tattoo's local portfolio." },
    { category: "Couples Tattoos", image: gallery16, title: "Oracle Tattoo Portfolio 16", description: "Selected tattoo work from Oracle Tattoo's local portfolio." },
    { category: "Small Tattoos", image: gallery17, title: "Oracle Tattoo Portfolio 17", description: "Selected tattoo work from Oracle Tattoo's local portfolio." },
    { category: "Religious Tattoos", image: tattooProject1, title: "Oracle Tattoo Portfolio 18", description: "Selected tattoo work from Oracle Tattoo's local portfolio." },
    { category: "Small Tattoos", image: tattooProject2, title: "Oracle Tattoo Portfolio 19", description: "Selected tattoo work from Oracle Tattoo's local portfolio." },
    { category: "Religious Tattoos", image: tattooProject3, title: "Oracle Tattoo Portfolio 20", description: "Selected tattoo work from Oracle Tattoo's local portfolio." },
    { category: "Religious Tattoos", image: tattooProject14, title: "Oracle Tattoo Portfolio 21", description: "Selected tattoo work from Oracle Tattoo's local portfolio." }
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
