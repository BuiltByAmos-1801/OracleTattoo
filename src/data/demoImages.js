const unsplash = (id, width = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=88`;

const pexels = (id, width = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;

const instagramImage = (shortcode) =>
  `https://www.instagram.com/p/${shortcode}/media/?size=l`;

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
    { category: "Religious Tattoos", image: instagramImage("DR4b-JOEgNg"), title: "Oracle Tattoo Portfolio 01", description: "Selected studio tattoo work from Oracle Tattoo India's Instagram portfolio." },
    { category: "Portrait", image: instagramImage("DAXD2zfIfxF"), title: "Ink by Jenny Portfolio 02", description: "Selected tattoo work from Jenny's Instagram portfolio." },
    { category: "Religious Tattoos", image: instagramImage("DSIOiKrEoyS"), title: "Oracle Tattoo Portfolio 03", description: "Selected studio tattoo work from Oracle Tattoo India's Instagram portfolio." },
    { category: "Band Tattoos", image: instagramImage("DSTtTXKEseU"), title: "Oracle Tattoo Portfolio 04", description: "Selected studio tattoo work from Oracle Tattoo India's Instagram portfolio." },
    { category: "Small Tattoos", image: instagramImage("DT6q0K_kqBo"), title: "Oracle Tattoo Portfolio 05", description: "Selected studio tattoo work from Oracle Tattoo India's Instagram portfolio." },
    { category: "Portrait", image: instagramImage("DUcixmBEbNT"), title: "Oracle Tattoo Portfolio 06", description: "Selected studio tattoo work from Oracle Tattoo India's Instagram portfolio." },
    { category: "Couples Tattoos", image: instagramImage("DUaWBPSkl-8"), title: "Oracle Tattoo Portfolio 07", description: "Selected studio tattoo work from Oracle Tattoo India's Instagram portfolio." },
    { category: "Religious Tattoos", image: instagramImage("DUYJN_DEjV8"), title: "Oracle Tattoo Portfolio 08", description: "Selected studio tattoo work from Oracle Tattoo India's Instagram portfolio." },
    { category: "Small Tattoos", image: instagramImage("DUh5tvUElQq"), title: "Oracle Tattoo Portfolio 09", description: "Selected studio tattoo work from Oracle Tattoo India's Instagram portfolio." },
    { category: "Band Tattoos", image: instagramImage("DUkVgOoEjmq"), title: "Oracle Tattoo Portfolio 10", description: "Selected studio tattoo work from Oracle Tattoo India's Instagram portfolio." },
    { category: "Portrait", image: instagramImage("DVq8MMykgFw"), title: "Oracle Tattoo Portfolio 11", description: "Selected studio tattoo work from Oracle Tattoo India's Instagram portfolio." },
    { category: "Religious Tattoos", image: instagramImage("DVxubekkjqQ"), title: "Oracle Tattoo Portfolio 12", description: "Selected studio tattoo work from Oracle Tattoo India's Instagram portfolio." },
    { category: "Small Tattoos", image: instagramImage("DWVk3q1EkQO"), title: "Oracle Tattoo Portfolio 13", description: "Selected studio tattoo work from Oracle Tattoo India's Instagram portfolio." },
    { category: "Band Tattoos", image: instagramImage("DWl4gEKkrqR"), title: "Oracle Tattoo Portfolio 14", description: "Selected studio tattoo work from Oracle Tattoo India's Instagram portfolio." },
    { category: "Portrait", image: instagramImage("DWqRRKDkuUz"), title: "Oracle Tattoo Portfolio 15", description: "Selected studio tattoo work from Oracle Tattoo India's Instagram portfolio." },
    { category: "Religious Tattoos", image: instagramImage("DW5zgOKkrZG"), title: "Oracle Tattoo Portfolio 16", description: "Selected studio tattoo work from Oracle Tattoo India's Instagram portfolio." },
    { category: "Small Tattoos", image: instagramImage("DYKjIxpknaO"), title: "Oracle Tattoo Portfolio 17", description: "Selected studio tattoo work from Oracle Tattoo India's Instagram portfolio." },
    { category: "Couples Tattoos", image: instagramImage("DYhYg45klc8"), title: "Oracle Tattoo Portfolio 18", description: "Selected studio tattoo work from Oracle Tattoo India's Instagram portfolio." },
    { category: "Portrait", image: instagramImage("DYvxmZxBZAB"), title: "Ink by Jenny Portfolio 19", description: "Selected tattoo work from Jenny's Instagram portfolio." },
    { category: "Religious Tattoos", image: instagramImage("DYxGSrzEuWS"), title: "Oracle Tattoo Portfolio 20", description: "Selected studio tattoo work from Oracle Tattoo India's Instagram portfolio." }
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
