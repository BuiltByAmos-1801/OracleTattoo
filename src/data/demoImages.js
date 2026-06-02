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
    { category: "Portrait & Realism", image: unsplash("photo-1598371839696-5c5bb00bdc28", 1000), title: "Black and grey realism" },
    { category: "Mandala", image: unsplash("photo-1542727365-19732a80dcfd", 1000), title: "Mandala geometry" },
    { category: "Tribal & Polynesian", image: unsplash("photo-1562962230-16e4623d36e6", 1000), title: "Tribal blackwork" },
    { category: "Religion", image: unsplash("photo-1542727365-19732a80dcfd", 1000), title: "Sacred symbol study" },
    { category: "Lettering", image: unsplash("photo-1565058379802-bbe93b2f703a", 1000), title: "Custom script" },
    { category: "Sleeve", image: unsplash("photo-1611501275019-9b5cda994e8d", 1000), title: "Sleeve study" },
    { category: "Cover-Up", image: unsplash("photo-1515626553181-0f218cb03f14", 1000), title: "Cover-up planning" },
    { category: "Piercings", image: unsplash("photo-1602751584552-8ba73aad10e1", 1000), title: "Piercing detail" },
    { category: "Portrait & Realism", image: unsplash("photo-1542727365-19732a80dcfd", 1000), title: "Portrait shading" },
    { category: "Mandala", image: unsplash("photo-1515626553181-0f218cb03f14", 1000), title: "Ornamental placement" },
    { category: "Religion", image: unsplash("photo-1562962230-16e4623d36e6", 1000), title: "Devotional blackwork" },
    { category: "Religion", image: unsplash("photo-1598371839696-5c5bb00bdc28", 1000), title: "Spiritual fine detail" },
    { category: "Sleeve", image: unsplash("photo-1598371839696-5c5bb00bdc28", 1000), title: "Large-scale flow" },
    { category: "Lettering", image: unsplash("photo-1565058379802-bbe93b2f703a", 1000), title: "Lettering placement" },
    { category: "Piercings", image: unsplash("photo-1602751584552-8ba73aad10e1", 1000), title: "Jewelry detail" }
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
