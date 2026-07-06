import blogImage01 from "../images/Screenshot 2026-06-06 233340.png";
import blogImage02 from "../images/Screenshot 2026-06-06 233415.png";
import blogImage03 from "../images/Screenshot 2026-06-06 233607.png";
import featured01 from "../images/Screenshot 2026-06-06 235813.png";
import featured02 from "../images/Screenshot 2026-06-06 235830.png";
import featured03 from "../images/Screenshot 2026-06-06 235858.png";
import featured04 from "../images/Screenshot 2026-06-06 235906.png";
import featured05 from "../images/Screenshot 2026-06-06 235950.png";
import featured06 from "../images/Screenshot 2026-06-07 000014.png";
import featured07 from "../images/Screenshot 2026-06-07 000048.png";

const unsplash = (id, width = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=88`;

const pexels = (id, width = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;

export const demoImages = {
  hero: pexels("11364054", 1800),
  studio: pexels("11364054", 1400),
  consultation: pexels("28919353", 1200),
  hygiene: featured02,
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
    pexels("11364054", 900),
    pexels("28919353", 900)
  ],
  artists: [
    unsplash("photo-1598371839696-5c5bb00bdc28", 900),
    unsplash("photo-1542727365-19732a80dcfd", 900),
    unsplash("photo-1562962230-16e4623d36e6", 900),
    unsplash("photo-1542727365-19732a80dcfd", 900)
  ],
  blogHero: pexels("36170868", 1800),
  blog: [
    featured02,
    featured01,
    blogImage02,
    blogImage01,
    blogImage03,
    featured05
  ]
};
