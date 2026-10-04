/* ========================================
   ELEMENTS
======================================== */
const viewport = document.getElementById("artworkViewport");
const artwork = document.getElementById("mainArtwork");
const lockButton = document.getElementById("lockButton");
const lockIcon = document.getElementById("lockIcon");
const navbar = document.getElementById("navbar");
const worldButtons = document.querySelectorAll(".world-button");
const hobbyCards = document.querySelectorAll(".hobby-card");

/* ========================================
   ARTWORK STATE
======================================== */
const state = {
  x: 0,
  y: 0,
  scale: 1,
  locked: false, // Default: FALSE (Terbuka & bisa langsung digeser)
};

/* ========================================
   FUNGSI PEMBATAS (CLAMP) & UPDATE ARTWORK
======================================== */
// Fungsi untuk menahan nilai x dan y agar tidak melebihi batas
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function updateArtwork() {
  // Hitung ukuran gambar setelah efek zoom
  const scaledWidth = artwork.clientWidth * state.scale;
  const scaledHeight = artwork.clientHeight * state.scale;

  // Ambil ukuran oval (viewport)
  const viewportWidth = viewport.clientWidth;
  const viewportHeight = viewport.clientHeight;

  // Hitung seberapa jauh gambar boleh digeser (maksimal X dan Y)
  // (Lebar gambar dikurangi lebar oval, lalu dibagi dua karena anchor point ada di tengah)
  const limitX = Math.max(0, (scaledWidth - viewportWidth) / 2);
  const limitY = Math.max(0, (scaledHeight - viewportHeight) / 2);

  // Kunci pergerakan gambar! Kalau mencoba geser lebih dari limit, akan ditahan.
  state.x = clamp(state.x, -limitX, limitX);
  state.y = clamp(state.y, -limitY, limitY);

  artwork.style.transform = `translate(-50%, -50%) translate3d(${state.x}px, ${state.y}px, 0) scale(${state.scale})`;
}

/* ========================================
   DRAG & ZOOM LOGIC
======================================== */
let isDragging = false;
let startX = 0,
  startY = 0,
  initialArtworkX = 0,
  initialArtworkY = 0;

// 1. Fungsi Klik & Tarik (Drag)
viewport.addEventListener("pointerdown", (e) => {
  if (state.locked) return; // Kalau terkunci, stop.

  isDragging = true;
  startX = e.clientX;
  startY = e.clientY;
  initialArtworkX = state.x;
  initialArtworkY = state.y;

  viewport.classList.add("dragging");
  viewport.setPointerCapture(e.pointerId);
});

viewport.addEventListener("pointermove", (e) => {
  if (!isDragging || state.locked) return;

  const dx = e.clientX - startX;
  const dy = e.clientY - startY;
  state.x = initialArtworkX + dx;
  state.y = initialArtworkY + dy;
  updateArtwork();
});

const stopDrag = (e) => {
  if (!isDragging) return;
  isDragging = false;
  viewport.classList.remove("dragging");
  try {
    viewport.releasePointerCapture(e.pointerId);
  } catch (err) {}
};

viewport.addEventListener("pointerup", stopDrag);
viewport.addEventListener("pointercancel", stopDrag);

// 2. Fungsi Zoom (Trackpad Pinch / Mouse Wheel)
viewport.addEventListener(
  "wheel",
  (e) => {
    if (state.locked) return;
    e.preventDefault();

    const zoomSensitivity = 0.002;
    state.scale -= e.deltaY * zoomSensitivity;

    if (state.scale < 0.5) state.scale = 0.5;
    if (state.scale > 3) state.scale = 3;

    updateArtwork();
  },
  { passive: false },
);

/* ========================================
   LOCK / UNLOCK
======================================== */
lockButton.addEventListener("click", () => {
  state.locked = !state.locked;

  if (state.locked) {
    // Kalau sedang TERKUNCI (locked: true)
    lockIcon.src = "assets/lock.webp";
    lockButton.setAttribute("aria-label", "Unlock artwork");
  } else {
    // Kalau sedang TERBUKA (locked: false)
    lockIcon.src = "assets/unlock.webp";
    lockButton.setAttribute("aria-label", "Lock artwork");
  }
});

/* ========================================
   HOBBY CARDS (1 by 1 Hover/Click Fix)
======================================== */
hobbyCards.forEach((card) => {
  // Untuk HP (Touch): Kalau diklik, yang lain menutup, cuma ini yang buka
  card.addEventListener("click", () => {
    hobbyCards.forEach((c) => {
      if (c !== card) c.classList.remove("active");
    });
    card.classList.toggle("active");
  });
});

/* ========================================
   WORLD NAVIGATION & NAVBAR
======================================== */
worldButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.dataset.target);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

let lastScrollY = window.scrollY;
let navbarTicking = false;
window.addEventListener("scroll", () => {
  if (!navbarTicking) {
    window.requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 10) navbar.classList.remove("hidden");
      else if (currentScrollY > lastScrollY) navbar.classList.add("hidden");
      else if (currentScrollY < lastScrollY) navbar.classList.remove("hidden");
      lastScrollY = currentScrollY;
      navbarTicking = false;
    });
    navbarTicking = true;
  }
});

/* ========================================
   INITIAL STATE
======================================== */
updateArtwork();
