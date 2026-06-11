const asset = (name) => `assets/${name}`;
const pexels = (id, width = 1400) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;

const images = {
  logo: asset("Oracle_Tattoo_Logo.PNG"),
  hero: pexels("13345926", 1800),
  galleryHero: pexels("11364054", 1800),
  consultation: pexels("28919353", 1600),
  blogHero: pexels("36170868", 1800),
  aboutHero: "https://images.pexels.com/photos/35426258/pexels-photo-35426258.jpeg?auto=compress&cs=tinysrgb&w=1800",
  jenny: asset("jenny.JPG"),
  jennyStudio: asset("Jenny_OracleTattoo.png.JPG"),
  studio: asset("alibaba-tattoos-studio-2-1024x685.webp"),
  featured: [
    "Screenshot 2026-06-06 235813.png",
    "Screenshot 2026-06-06 235830.png",
    "Screenshot 2026-06-06 235858.png",
    "Screenshot 2026-06-06 235906.png",
    "Screenshot 2026-06-06 235950.png",
    "Screenshot 2026-06-07 000014.png",
    "Screenshot 2026-06-07 000048.png"
  ].map(asset)
};

const gallery = [
  ["Memorial Tattoos", "Screenshot 2026-06-06 233324.png", "Lira Memorial Wings", "A delicate back-neck memorial tattoo with angel wings, a halo, paw detail, and script lettering."],
  ["Small Tattoos", "Screenshot 2026-06-06 233340.png", "Minimal Cosmic Spark", "A compact fine-line starburst with tiny celestial accents for a subtle forearm placement."],
  ["Small Tattoos", "Screenshot 2026-06-06 233350.png", "Mystic Eye Linework", "Fine-line hands, eye, moon, and cloud details arranged as a balanced symbolic arm piece."],
  ["Lettering", "Screenshot 2026-06-06 233400.png", "Sanskrit Forearm Lettering", "Bold Devanagari script with clean curves and dark fill, placed vertically for readability."],
  ["Religious Tattoos", "Screenshot 2026-06-06 233415.png", "Trishul Om Armband", "A spiritual armband combining Om, trishul-inspired forms, mountain detail, and shading."],
  ["Religious Tattoos", "Screenshot 2026-06-06 233429.png", "Damru Om Symbol", "A devotional tattoo with damru, trishul flow, Om lettering, and black-grey shading."],
  ["Lettering", "Screenshot 2026-06-06 233436.png", "555 Change Script", "Clean numerology and cursive lettering pairing bold 555 numbers with soft script."],
  ["Band Tattoos", "Screenshot 2026-06-06 233447.png", "Geometric Black Band", "A sharp blackwork armband with negative-space geometry and a centered triangular motif."],
  ["Lettering", "Screenshot 2026-06-06 233502.png", "Sword Initial Spine", "A slim back tattoo combining a vertical sword, initials, and fine detail."],
  ["Small Tattoos", "Screenshot 2026-06-06 233522.png", "Serpent Moon Sternum", "A centered sternum design with serpent flow, moon, starburst, and ornamental dotwork."],
  ["Lettering", "Screenshot 2026-06-06 233531.png", "Hindi Wrist Script", "A wrist lettering tattoo with flowing Hindi script and circular brush-stroke accents."],
  ["Portrait", "Screenshot 2026-06-06 233550.png", "Shiva Realism Shoulder", "A large black-grey Lord Shiva portrait with smooth shading and strong shoulder placement."],
  ["Small Tattoos", "Screenshot 2026-06-06 233607.png", "Lotus Ornament Sternum", "A symmetrical lotus and ornamental dotwork piece designed around the body center line."],
  ["Portrait", "Screenshot 2026-06-06 233616.png", "Father And Child Portrait", "A sentimental framed portrait tattoo with floral accents and soft black-grey shading."],
  ["Portrait", "Screenshot 2026-06-06 233635.png", "Tattoo Session Detail", "A studio process image showing careful machine work and controlled tattoo application."],
  ["Small Tattoos", "Screenshot 2026-06-06 233700.png", "Radiant Lotus Forearm", "A fine black-grey lotus with rising sun rays, soft shading, and ornamental balance."],
  ["Geometric Tattoos", "Screenshot 2026-06-06 233716.png", "Family Compass", "A compass tattoo with family quote lettering, circular geometry, and clean linework."],
  ["Portrait", "tattooproject1.webp", "Buddha Forearm Portrait", "A calm Buddha portrait with soft black-grey shading and peaceful expression."],
  ["Religious Tattoos", "tattooproject2.webp", "Trishul Damru Detail", "A devotional trishul and damru tattoo with bead accents and compact placement."],
  ["Religious Tattoos", "tattooproject3.webp", "Ganesha Back Piece", "A large Ganesha tattoo with ornamental crown detail, bold linework, and back placement."],
  ["Portrait", "tattooproject14.webp", "Shiva Black-Grey Portrait", "A detailed Lord Shiva shoulder portrait with deep contrast and sacred markings."]
].map(([category, image, title, description]) => ({ category, image: asset(image), title, description }));

const services = [
  ["realistic-tattoos", "Realistic Tattoos", "TATTOO SERVICES", pexels("7147771", 900), "Realistic tattoos focus on fine details and natural shading to create artwork that feels alive."],
  ["religious-tattoos", "Religious Tattoos", "TATTOO SERVICES", pexels("11178572", 900), "Sacred tattoo designs inspired by spiritual symbols, deities, and scriptures."],
  ["couple-tattoo", "Couple Tattoo", "TATTOO SERVICES", pexels("13771118", 900), "A meaningful permanent symbol of love, trust, and deep connection."],
  ["small-tattoo-designs", "Small Tattoo Designs", "TATTOO SERVICES", pexels("8258889", 900), "Subtle, stylish, meaningful small tattoos for wrists, fingers, ankles, and collarbones."],
  ["custom-lettering", "Custom Tattoo Lettering", "TATTOO SERVICES", pexels("10435594", 900), "Refined scripts, names, quotes, and typographic tattoos composed for your body."],
  ["mandala-tattoos", "Mandala Tattoos", "TATTOO SERVICES", pexels("4799384", 900), "Symmetric mandala work with calibrated spacing and crisp linework."],
  ["sleeve-tattoos", "Sleeve Tattoos", "TATTOO SERVICES", pexels("1461816", 900), "Half and full sleeves designed as cohesive visual systems."],
  ["polynesian-tribal", "Polynesian Tribal Tattoos", "TATTOO SERVICES", pexels("2183131", 900), "Bold tribal compositions shaped around rhythm, symbolism, and anatomical movement."],
  ["piercing", "Piercing", "PIERCING SERVICES", pexels("7400018", 900), "Safe ear, nose, eyebrow, lip, and cartilage piercings with professional care."],
  ["nose-piercing", "Nose Piercing", "PIERCING SERVICES", pexels("12435651", 900), "Precise nose piercing for studs or rings, focused on symmetry and healing."],
  ["navel-piercing", "Navel Piercing", "PIERCING SERVICES", pexels("7230416", 900), "Clean navel piercing with placement guidance and clear aftercare direction."],
  ["tattoo-aftercare", "Tattoo Aftercare", "AFTERCARE & FINISHING", pexels("7147769", 900), "Healing guidance and care routines that protect detail and saturation."],
  ["cover-ups-reworkings", "Tattoo Cover-Ups & Reworkings", "AFTERCARE & FINISHING", pexels("12038947", 900), "Strategic redesigns that transform old tattoos into stronger, cleaner work."],
  ["tattoo-design", "Tattoo Design", "AFTERCARE & FINISHING", pexels("7504856", 900), "Custom concept development before the first session."],
  ["tattoo-finishing", "Tattoo Finishing", "AFTERCARE & FINISHING", pexels("8187555", 900), "Completion sessions that refine unfinished work with cleaner depth and balance."],
  ["tattoo-touch-ups", "Tattoo Touch-Ups", "AFTERCARE & FINISHING", pexels("7203741", 900), "Refresh sessions for healed tattoos that need sharper lines or restored contrast."]
].map(([id, name, category, image, description]) => ({ id, name, category, image, description }));

const blogPosts = [
  ["Aftercare", "March 08, 2025", "Tattoo Aftercare Guide: How to Heal Your Tattoo Perfectly", images.featured[1], "Fresh tattoos need calm, clean healing. Learn the daily care routine that keeps linework crisp."],
  ["Style Guide", "April 14, 2025", "Top Tattoo Styles in 2025 - Which One Is Right for You?", images.featured[0], "From realism to fine line and mandala, compare visual language, healing needs, and placement."],
  ["Tribal", "May 22, 2025", "Polynesian & Tribal Tattoos: History, Meaning & Design Ideas", gallery[4].image, "Understand motifs, flow, and respect in tribal tattoo design before planning a statement piece."],
  ["Beginner", "June 17, 2025", "Your First Tattoo in Ranchi? Here's Everything You Need to Know", gallery[1].image, "A practical first-timer guide covering consultation, pain, pricing, prep, and aftercare."],
  ["Mandala", "August 09, 2025", "Mandala Tattoos: Symbolism, Styles and Placement Guide", gallery[12].image, "Explore how mandala tattoos use symmetry, sacred geometry, and body placement."],
  ["Cover-Up", "October 03, 2025", "Cover-Up Tattoos: Can Any Tattoo Be Covered? Expert Answers", images.featured[4], "Learn what makes a cover-up possible and when reworking is smarter."]
].map(([category, date, title, image, excerpt]) => ({ category, date, title, image, excerpt }));

const app = document.querySelector("#app");
const menuPanel = document.querySelector("[data-menu-panel]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const header = document.querySelector("[data-header]");

const pageHero = ({ image, eyebrow, title, lead, className = "" }) => `
  <section class="image-hero ${className}">
    <img src="${image}" alt="${title}">
    <div class="section-shell image-hero-content">
      <p class="eyebrow">${eyebrow}</p>
      <h1 class="display">${title}</h1>
      <p class="lead">${lead}</p>
    </div>
  </section>
`;

const serviceCards = (items = services) => items.map((service) => `
  <article class="card has-image reveal">
    <img src="${service.image}" alt="${service.name}">
    <div class="card-content">
      <small>${service.category}</small>
      <h3>${service.name}</h3>
      <p>${service.description}</p>
      <div class="cta-row">
        <a href="#/services" class="small-cta ghost">Read More</a>
        <a href="https://wa.me/917667059851?text=${encodeURIComponent(`Hi Oracle Tattoo, I want to book ${service.name}.`)}" class="small-cta">Book</a>
      </div>
    </div>
  </article>
`).join("");

function homePage() {
  const cats = ["Religious Tattoos", "Portrait", "Small Tattoos", "Lettering", "Band Tattoos", "Geometric Tattoos"];
  return `
    <section class="hero">
      <img src="${images.hero}" alt="Professional tattoo studio">
      <div class="section-shell hero-content">
        <h1 class="display">Welcome to Oracle Tattoo</h1>
        <p class="lead">A bold custom tattoo studio in Ranchi for clean blackwork, realism, meaningful designs, and a safe personal tattoo experience from idea to healing.</p>
        <div class="cta-row">
          <a class="cta" href="#/booking">Book Your Appointment</a>
          <a class="cta ghost" href="#/gallery">View Gallery</a>
        </div>
      </div>
    </section>
    <section class="band"><div class="section-shell band-grid">
      <span>Custom Tattoo Studio</span><span>Hygienic Setup</span><span>Tilta, Ranchi</span><span>Mon-Sat, 11 AM-8 PM</span>
    </div></section>
    <section class="page-section">
      <div class="section-shell two-col">
        <div class="media-frame reveal"><img src="${images.jennyStudio}" alt="Oracle Tattoo studio artist"></div>
        <div class="reveal">
          <p class="eyebrow">Studio Introduction</p>
          <h2 class="section-title">Best Tattoo Studio in Ranchi</h2>
          <div class="copy-stack">
            <p>At Oracle Tattoo, we believe every tattoo tells a story. Our skilled artists are passionate about turning your ideas into stunning body art with precision, creativity, and attention to detail.</p>
            <p>We follow strict hygiene standards and use high-quality equipment to ensure a safe and comfortable tattoo experience.</p>
            <p>From consultation to aftercare guidance, we make sure every client leaves with a tattoo they are proud to wear for life.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="page-section" style="background: var(--coal)">
      <div class="section-shell">
        <p class="eyebrow">Explore Styles</p>
        <h2 class="section-title tight">Find the design that connects.</h2>
        <div class="card-grid" style="margin-top: 38px">
          ${cats.map((cat) => {
            const item = gallery.find((g) => g.category === cat) || gallery[0];
            return `<article class="card has-image reveal"><img src="${item.image}" alt="${cat}"><div class="card-content"><small>${cat}</small><h3>${cat}</h3><p>${item.description}</p></div></article>`;
          }).join("")}
        </div>
      </div>
    </section>
    <section class="page-section">
      <div class="section-shell">
        <p class="eyebrow">Featured Work</p>
        <h2 class="section-title">A sharper eye for black, skin, and silence.</h2>
        <div class="mosaic" style="margin-top: 42px">${images.featured.map((image) => `<div class="tile reveal"><img src="${image}" alt="Oracle Tattoo featured work"></div>`).join("")}</div>
      </div>
    </section>
    <section class="page-section" style="background: var(--coal)">
      <div class="section-shell two-col">
        <div class="media-frame reveal"><img src="${images.featured[1]}" alt="Clean tattoo process"></div>
        <div class="reveal">
          <p class="eyebrow">Hygiene Protocol</p>
          <h2 class="section-title">Clean work is the first luxury.</h2>
          <div class="copy-stack">
            <p>Single-use needles and sterile setup.</p>
            <p>Custom artwork, never copied without intent.</p>
            <p>Placement guidance before final sizing.</p>
            <p>WhatsApp-first booking for fast confirmation.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

function aboutPage() {
  return `
    ${pageHero({ image: images.aboutHero, eyebrow: "Home / About Us", title: "Professional tattoo work with a personal story.", lead: "A Ranchi tattoo studio built around custom design, calm consultation, safe hygiene, and artwork you can wear with pride." })}
    <section class="page-section">
      <div class="section-shell stats-grid reveal">
        ${[
          ["1,250+", "Satisfied Customers"],
          ["15th", "Years of Experience"],
          ["750+", "Tattoos & Artworks"],
          ["45+", "Creative Concepts"]
        ].map(([value, label]) => `<div class="stat"><strong>${value}</strong><span>${label}</span></div>`).join("")}
      </div>
    </section>
    <section class="page-section" style="background: var(--coal)">
      <div class="section-shell two-col">
        <div class="reveal">
          <p class="eyebrow">Why Choose Us</p>
          <h2 class="section-title tight">Always provide satisfactory work.</h2>
        </div>
        <div class="copy-stack reveal">
          <p>At Oracle Tattoo, we believe every tattoo tells a story. Our skilled artists are passionate about turning your ideas into stunning body art with precision, creativity, and attention to detail.</p>
          <p>We follow strict hygiene standards and use high-quality equipment to ensure a safe and comfortable tattoo experience.</p>
          <p>Customer satisfaction is our priority, from consultation to aftercare guidance.</p>
        </div>
      </div>
    </section>
    <section class="page-section">
      <div class="section-shell two-col">
        <div class="reveal">
          <p class="eyebrow">About Oracle Tattoo</p>
          <h2 class="section-title">We are a professional tattoo studio.</h2>
          <div class="copy-stack"><p>Our artists specialize in custom designs, fine line tattoos, detailed artwork, religious tattoos, cover-ups, and clean black-grey compositions tailored to your vision.</p></div>
        </div>
        <div class="media-frame reveal"><img src="${images.studio}" alt="Inside Oracle Tattoo studio"></div>
      </div>
    </section>
    <section class="page-section" style="background: var(--coal)">
      <div class="section-shell two-col">
        <div class="media-frame reveal"><img src="${images.jenny}" alt="Jenny, Oracle Tattoo artist"></div>
        <div class="reveal">
          <p class="eyebrow">The Artist</p>
          <h2 class="section-title">Jenny</h2>
          <div class="copy-stack">
            <p>Hi, my name is Jenny and my journey as a tattoo artist is not just about art. It is about passion, struggle, and believing in a dream.</p>
            <p>The road to becoming an artist was not easy. Today, every tattoo I create carries patience, care, and personal connection.</p>
          </div>
          <div class="cta-row"><a class="cta" href="#/booking">Book Consultation</a></div>
        </div>
      </div>
    </section>
  `;
}

function servicesPage() {
  return `
    ${pageHero({ image: images.consultation, eyebrow: "Home / Services", title: "Our Service", lead: "Explore realistic tattoos, religious designs, couple tattoos, small tattoo designs, and professional piercing services." })}
    <section class="page-section">
      <div class="section-shell">
        <p class="eyebrow">What We Do</p>
        <h2 class="section-title tight">Meaningful tattoos and safe piercings.</h2>
        <div class="card-grid" style="margin-top: 42px">${serviceCards()}</div>
      </div>
    </section>
  `;
}

function galleryPage() {
  const filters = ["All", ...new Set(gallery.map((item) => item.category))];
  return `
    ${pageHero({ image: images.galleryHero, eyebrow: "Oracle Tattoo Portfolio", title: "Ink that looks intentional.", lead: "A curated studio gallery for religious tattoos, realistic portraits, lettering, bands, and small pieces." })}
    <section class="page-section">
      <div class="section-shell">
        <div class="filter-row">${filters.map((filter, index) => `<button class="${index === 0 ? "active" : ""}" data-filter="${filter}">${filter}</button>`).join("")}</div>
        <div class="gallery-grid" data-gallery-grid>${galleryCards(gallery)}</div>
      </div>
    </section>
  `;
}

function galleryCards(items) {
  return items.map((item) => `
    <button class="gallery-card reveal" data-open-image="${item.image}" data-title="${item.title}" data-desc="${item.description}" data-category="${item.category}">
      <img src="${item.image}" alt="${item.title}">
      <div class="gallery-info">
        <span class="pill">${item.category}</span>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    </button>
  `).join("");
}

function artistsPage() {
  return `
    ${pageHero({ image: images.jennyStudio, eyebrow: "Artist", title: "Jenny", lead: "Tattoo work shaped by patience, clean detail, and a personal connection with each client." })}
    <section class="page-section">
      <div class="section-shell two-col">
        <div class="media-frame reveal"><img src="${images.jenny}" alt="Jenny Oracle Tattoo"></div>
        <div class="copy-stack reveal">
          <p>Jenny's tattoo journey is about art, passion, struggle, and believing in a dream.</p>
          <p>Her work focuses on devotional pieces, black-grey tattoos, fine details, and client-led custom concepts.</p>
          <div class="cta-row"><a class="cta" href="#/booking">Book With Jenny</a></div>
        </div>
      </div>
    </section>
  `;
}

function bookingPage() {
  return `
    ${pageHero({ image: images.consultation, eyebrow: "Booking", title: "Book Your Session", lead: "Tell us your idea, placement, size, and references. We will confirm on WhatsApp." })}
    <section class="page-section">
      <div class="section-shell two-col">
        <div class="reveal">
          <p class="eyebrow">Appointment</p>
          <h2 class="section-title tight">Start with a calm consultation.</h2>
          <p class="lead">You can send your idea directly through this form or message us on WhatsApp for faster confirmation.</p>
        </div>
        <form class="form-grid reveal" data-booking-form>
          <input class="form-field" name="name" placeholder="Your name" required>
          <input class="form-field" name="phone" placeholder="Phone number" required>
          <select class="form-field" name="service">${services.map((s) => `<option>${s.name}</option>`).join("")}</select>
          <input class="form-field" name="placement" placeholder="Placement / body area">
          <textarea class="form-field" name="notes" placeholder="Tell us about your idea, size, references, old tattoo, or deadline."></textarea>
          <button class="cta" type="submit">Send on WhatsApp</button>
        </form>
      </div>
    </section>
  `;
}

function contactPage() {
  return `
    ${pageHero({ image: images.hero, eyebrow: "Contact", title: "Visit Oracle Tattoo", lead: "Reach us for consultation, tattoo planning, piercing, aftercare, or appointment confirmation." })}
    <section class="page-section">
      <div class="section-shell card-grid">
        <article class="card reveal"><small>Address</small><h3>Tilta, Ranchi</h3><p>First floor NH-75, Ratu Rd, beside Devi Mandap Tilta, Opp. Sharda Automobiles TVS, Jharkhand 835222.</p></article>
        <article class="card reveal"><small>Phone</small><h3>Call Studio</h3><p><a href="tel:+917667059851">+91 76670 59851</a></p></article>
        <article class="card reveal"><small>Email</small><h3>Write To Us</h3><p><a href="mailto:oracletattoo23@gmail.com">oracletattoo23@gmail.com</a></p></article>
      </div>
    </section>
  `;
}

function blogPage() {
  return `
    ${pageHero({ image: images.blogHero, eyebrow: "Blog", title: "Tattoo Tips & Guides", lead: "Read studio guidance for first tattoos, aftercare, style choices, cover-ups, and piercing care.", className: "blog-hero" })}
    <section class="page-section">
      <div class="section-shell card-grid">
        ${blogPosts.map((post) => `
          <article class="card blog-card reveal">
            <div style="height: 250px; margin: -28px -28px 24px; overflow: hidden"><img src="${post.image}" alt="${post.title}"></div>
            <small>${post.category} · 5-min read · ${post.date}</small>
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

const routes = {
  "/": homePage,
  "/about": aboutPage,
  "/services": servicesPage,
  "/gallery": galleryPage,
  "/artists": artistsPage,
  "/booking": bookingPage,
  "/contact": contactPage,
  "/blog": blogPage
};

function getRoute() {
  return location.hash.replace("#", "") || "/";
}

function render() {
  const route = routes[getRoute()] ? getRoute() : "/";
  app.innerHTML = routes[route]();
  document.querySelectorAll("[data-nav]").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${route}`);
  });
  menuPanel.classList.remove("open");
  bindPageEvents();
  revealVisible();
  window.scrollTo({ top: 0, behavior: "instant" });
}

function bindPageEvents() {
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-filter]").forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      const filter = button.dataset.filter;
      const items = filter === "All" ? gallery : gallery.filter((item) => item.category === filter);
      document.querySelector("[data-gallery-grid]").innerHTML = galleryCards(items);
      bindPageEvents();
      revealVisible();
    });
  });

  document.querySelectorAll("[data-open-image]").forEach((button) => {
    button.addEventListener("click", () => openLightbox(button.dataset));
  });

  const form = document.querySelector("[data-booking-form]");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(form));
      const message = `Hi Oracle Tattoo, my name is ${data.name}. I want to book ${data.service}. Phone: ${data.phone}. Placement: ${data.placement || "not decided"}. Notes: ${data.notes || "none"}.`;
      window.open(`https://wa.me/917667059851?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    });
  }
}

function openLightbox(data) {
  const lightbox = document.querySelector("[data-lightbox]");
  lightbox.querySelector("[data-lightbox-img]").src = data.openImage;
  lightbox.querySelector("[data-lightbox-img]").alt = data.title;
  lightbox.querySelector("[data-lightbox-title]").textContent = data.title;
  lightbox.querySelector("[data-lightbox-desc]").textContent = data.desc;
  lightbox.classList.add("open");
}

document.querySelector("[data-lightbox-close]").addEventListener("click", () => {
  document.querySelector("[data-lightbox]").classList.remove("open");
});

document.querySelector("[data-lightbox]").addEventListener("click", (event) => {
  if (event.target.matches("[data-lightbox]")) event.currentTarget.classList.remove("open");
});

menuToggle.addEventListener("click", () => menuPanel.classList.toggle("open"));

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 24);
  revealVisible();
});

function revealVisible() {
  document.querySelectorAll(".reveal").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 70) el.classList.add("visible");
  });
}

window.addEventListener("hashchange", render);
window.addEventListener("load", render);
