/* ===== CONFIG: edit freely. Set src to your own image path/URL to replace placeholders. ===== */
const SITE = {
  heroArt: { src: "assets/art/deerd.webp" }, // your featured artwork (portrait 3:4 recommended; shown uncropped)
  portrait: { src: "assets/people/foto.jpg" },
  avatar: { src: "assets/people/avatar.svg" },
  projects: [
    {
      title: "Vacuum Cleaner robot",
      desc: "Integrating ultrasonic sensors for obstacle detection with DC motors for navigation and a suction fan cleaning mechanism using Arduino Uno.",
      tech: ["C", "Arduino Uno", "obstacle detection"],
      link: "",
      folder: "assets/projects/robotik",
    },
    {
      title: "SORA",
      desc: "A step tracking mobile application designed in Figma and developed with Android Studio.",
      tech: ["Kotlin", "Database", "App Development"],
      link: "",
      folder: "assets/projects/sora",
    },
    {
      title: "O.R.I.O.N",
      desc: "Orientation and Rocket Inertial Oscillation Navigation implemented with PID-Kalman filter  architecture on ESP32 for real-time sensor data processing and stabilization applied with system feedback.",
      tech: ["C", "ESP32", "PID-Kalman Filter"],
      link: "",
      folder: "assets/projects/orion",
    },
    {
      title: "UAV Trailing Edge Flap",
      desc: "Designed a fuzzy logic-based controller for UAV trailing edge flap actuation, defining fuzzy input categories and control rules to translate system feedback into actuator commands.",
      tech: ["ESP32", "Fuzzy Logic", "UAV"],
      link: "",
      folder: "assets/projects/uav",
    },
    {
      title: "Automated Tomato Leaf Disease Classification",
      desc: "Analyzed image classification workflows using SqueezeNet and InceptionV3 in Orange Data Mining sourcing Kaggle as dataset, comparing the model performance using accuracy, precision, recall, and F1-score, interpreting evaluation results to assess classification effectiveness.",
      tech: ["Image Classification", "Deep Learning", "Model Comparation"],
      link: "",
      folder: "assets/projects/dl",
    },
  ],
  works: [
    {
      title: "Brand: Nail Facade",
      desc: "Developed a visual identity for a nail art business, creating logo concepts, a coordinated color palette, and a price list.",
      src: "assets/art/nf_logo.png",
      hue: 0,
    },
    {
      title: "Brand: Cakestle",
      desc: "Designed a logo and brand identity for a family-owned cake business using Figma and MediBang Paint, developing visual assets for social media",
      src: "assets/art/logo.png",
      hue: 1,
    },
    {
      title: "HMW SAKRAB",
      desc: "Designed and curated the organization’s Instagram feed using Figma",
      src: "assets/art/sakrab.svg",
      hue: 2,
    },
    {
      title: "Window Seat",
      desc: "Interior study with morning light.",
      src: "assets/art/work-4.svg",
      hue: 3,
    },
    {
      title: "Food Ilustrations",
      desc: "Illustrated wide range of foods.",
      src: "assets/art/meal.png",
      hue: 4,
    },
    {
      title: "Wild Meadow",
      desc: "Layered florals, mixed media.",
      src: "assets/art/work-6.svg",
      hue: 5,
    },
  ],
  links: [
    /* url: "" => placeholder (inactive) until you add the real address */
    { label: "Instagram", icon: "◎", url: "" },
    {
      label: "LinkedIn",
      icon: "in",
      url: "https://www.linkedin.com/in/farsyazahra/",
    },
    { label: "Email", icon: "✉", url: "mailto:zfarsya@students.unnes.ac.id" },
    { label: "GitHub", icon: "⌘", url: "https://github.com/facakyr" },
    { label: "Repositories", icon: "▤", url: "" },
  ],
};
/* ===== placeholder sketch generator (used only when src is null) ===== */
const PAL = [
  ["#EBC6C9", "#78866A"],
  ["#A8B49A", "#D99BA6"],
  ["#F7F0E6", "#D99BA6"],
  ["#EBC6C9", "#A8B49A"],
  ["#CFD6C3", "#B3646F"],
  ["#F3DDD6", "#78866A"],
];
function art(i, w = 300, h = 400) {
  const [a, b] = PAL[i % PAL.length];
  const k = i % 3;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400"><rect width="300" height="400" fill="#FBF6EE"/><rect x="10" y="10" width="280" height="380" fill="${a}" stroke="#72513F" stroke-width="2"/><circle cx="${90 + k * 60}" cy="110" r="46" fill="#F7F0E6" opacity=".8" stroke="#72513F" stroke-width="1.5"/><path d="M150 380C140 300 160 240 150 170" stroke="#72513F" stroke-width="3" fill="none"/><path d="M150 300C110 290 90 260 80 240C120 240 145 260 150 300ZM150 250C190 240 215 210 220 190C180 195 155 220 150 250Z" fill="${b}" stroke="#72513F" stroke-width="1.8"/><g fill="#D99BA6" stroke="#72513F" stroke-width="1.8">${[0, 72, 144, 216, 288].map((r) => `<ellipse cx="150" cy="140" rx="16" ry="30" transform="rotate(${r} 150 170)"/>`).join("")}</g><circle cx="150" cy="170" r="12" fill="#F7F0E6" stroke="#72513F" stroke-width="1.8"/><g stroke="#72513F" stroke-width=".8" opacity=".5">${Array.from({ length: 12 }, (_, n) => `<path d="M${30 + n * 6} 340l30 40"/>`).join("")}</g><text x="30" y="60" font-size="22" fill="#72513F">✦ ✿ ✦</text></svg>`;
  return "data:image/svg+xml," + encodeURIComponent(svg);
}
const $ = (s) => document.querySelector(s);
const src = (o, i) => (o && o.src ? o.src : art(i));
/* hero image + drag */
const im = $("#art");
im.src = src(SITE.heroArt, 0);
im.decoding = "async";
$("#portrait").src = src(SITE.portrait, 2);
$("#avatar").src = src(SITE.avatar, 1);
const viewport = $(".oval"),
  artwork = im;
const state = { x: 0, y: 0, scale: 1, locked: false };
const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
function updateArtwork() {
  const lx = Math.max(
    0,
    (artwork.clientWidth * state.scale - viewport.clientWidth) / 2,
  );
  const ly = Math.max(
    0,
    (artwork.clientHeight * state.scale - viewport.clientHeight) / 2,
  );
  state.x = clamp(state.x, -lx, lx);
  state.y = clamp(state.y, -ly, ly);
  artwork.style.transform = `translate(-50%,-50%) translate3d(${state.x}px,${state.y}px,0) scale(${state.scale})`;
}
artwork.addEventListener("load", updateArtwork);
let isDragging = false,
  sx = 0,
  sy = 0,
  ix = 0,
  iy = 0;
viewport.addEventListener("pointerdown", (e) => {
  if (state.locked) return;
  isDragging = true;
  sx = e.clientX;
  sy = e.clientY;
  ix = state.x;
  iy = state.y;
  viewport.classList.add("dragging");
  viewport.setPointerCapture(e.pointerId);
});
viewport.addEventListener("pointermove", (e) => {
  if (!isDragging || state.locked) return;
  state.x = ix + e.clientX - sx;
  state.y = iy + e.clientY - sy;
  updateArtwork();
});
const stopDrag = (e) => {
  if (!isDragging) return;
  isDragging = false;
  viewport.classList.remove("dragging");
  try {
    viewport.releasePointerCapture(e.pointerId);
  } catch (_) {}
};
viewport.addEventListener("pointerup", stopDrag);
viewport.addEventListener("pointercancel", stopDrag);
viewport.addEventListener(
  "wheel",
  (e) => {
    if (state.locked) return; // optional: add  if(!e.ctrlKey)return;  to zoom only on trackpad pinch
    e.preventDefault();
    state.scale = clamp(state.scale - e.deltaY * 0.002, 1, 3); // min 1 so the oval is never left empty
    updateArtwork();
  },
  { passive: false },
);
viewport.addEventListener("dblclick", () => {
  state.x = state.y = 0;
  state.scale = 1;
  updateArtwork();
});
const lockBtn = $("#lock");
lockBtn.addEventListener("click", () => {
  state.locked = !state.locked;
  viewport.classList.toggle("locked", state.locked);

  // Replace the old textContent line with this image swap logic:
  lockBtn.innerHTML = state.locked
    ? '<img src="assets/lock.webp" alt="locked" style="width: 22px; pointer-events: none;">'
    : '<img src="assets/unlock.webp" alt="unlocked" style="width: 22px; pointer-events: none;">';

  lockBtn.setAttribute("aria-pressed", state.locked);
  lockBtn.setAttribute(
    "aria-label",
    state.locked ? "Unlock artwork" : "Lock artwork",
  );
});
/* projects */
/* projects: cover + hover popup + full gallery dialog */
const pg = $("#pgrid");
const pd = document.createElement("dialog");
pd.className = "pdlg";
pd.setAttribute("aria-label", "Project gallery");
pd.innerHTML = `<img alt=""><div class="pbar"><button type="button" data-d="-1" aria-label="Previous image">←</button><span></span><button type="button" data-d="1" aria-label="Next image">→</button></div><h3></h3><p></p><button type="button" class="px">close ✕</button>`;
document.body.appendChild(pd);
let pi = 0,
  pimgs = [],
  ptitle = "";
const showP = () => {
  const im = pd.querySelector("img");
  im.src = pimgs[pi];
  im.alt = `${ptitle} — image ${pi + 1}`;
  pd.querySelector(".pbar span").textContent = `${pi + 1} / ${pimgs.length}`;
  pd.querySelector(".pbar").hidden = pimgs.length < 2;
};
const stepP = (d) => {
  pi = (pi + d + pimgs.length) % pimgs.length;
  showP();
};
function openP(p, imgs) {
  pimgs = imgs;
  pi = 0;
  ptitle = p.title;
  pd.querySelector("h3").textContent = p.title;
  pd.querySelector("p").textContent = p.desc;
  showP();
  pd.showModal();
}
pd.addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (e.target === pd || (b && b.classList.contains("px"))) return pd.close();
  if (b && b.dataset.d) stepP(+b.dataset.d);
});
pd.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") stepP(-1);
  if (e.key === "ArrowRight") stepP(1);
});
function findImages(folder, max = 40) {
  // numbered files folder/1.jpg … folder/max.*  (gaps are skipped)
  const exts = [
    "jpg",
    "jpeg",
    "png",
    "webp",
    "JPG",
    "JPEG",
    "PNG",
    "WEBP",
    "svg",
  ];
  const imgTest = (u) =>
    new Promise((r) => {
      const i = new Image();
      i.onload = () => r(true);
      i.onerror = () => r(false);
      i.src = u;
    });
  const exists = (u) =>
    location.protocol === "file:"
      ? imgTest(u) // opened locally: fall back to loading the image
      : fetch(u, { method: "HEAD" })
          .then(
            (r) =>
              r.ok &&
              (r.headers.get("content-type") || "").startsWith("image/"),
          )
          .catch(() => false);
  const one = async (n) => {
    for (const e of exts) {
      const u = `${folder}/${n}.${e}`;
      if (await exists(u)) return u;
    }
    return null;
  };
  return Promise.all(Array.from({ length: max }, (_, i) => one(i + 1))).then(
    (a) => a.filter(Boolean),
  );
}
SITE.projects.forEach((p, i) => {
  const imgs = p.imgs && p.imgs.length ? p.imgs : [p.img || art(i + 3)];
  const c = document.createElement("article");
  c.className = "card";
  c.innerHTML = `<button type="button" class="pvbtn"><div class="pv"><img loading="lazy"></div></button><div class="bd"><h3></h3><p></p><div class="chips"></div></div>`;
  const btn = c.querySelector(".pvbtn"),
    cover = c.querySelector(".pv img");
  cover.src = imgs[0];
  cover.alt = `${p.title} preview`;
  btn.setAttribute(
    "aria-label",
    `Open gallery for ${p.title} (${imgs.length} image${imgs.length > 1 ? "s" : ""})`,
  );
  btn.addEventListener("click", () => openP(p, imgs));
  c.querySelector("h3").textContent = p.title;
  c.querySelector("p").textContent = p.desc;
  const ch = c.querySelector(".chips");
  p.tech.forEach((t) => {
    const s = document.createElement("span");
    s.textContent = t;
    ch.appendChild(s);
  });
  if (imgs.length > 1) {
    /* hover popup, only for projects with 2+ images */
    const pop = document.createElement("div");
    pop.className = "pop";
    pop.setAttribute("aria-hidden", "true");
    imgs.slice(0, 4).forEach((src) => {
      const im = document.createElement("img");
      im.src = src;
      im.alt = "";
      im.loading = "lazy";
      pop.appendChild(im);
    });
    const more = document.createElement("span");
    more.className = "popnote";
    more.textContent = `click to see all ${imgs.length} ✿`;
    pop.appendChild(more);
    pop.addEventListener("click", () => openP(p, imgs));
    c.appendChild(pop);
  }
  if (p.link) {
    const a = document.createElement("a");
    a.className = "lnk";
    a.href = p.link;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = "view project →";
    c.querySelector(".bd").appendChild(a);
  }
  if (p.folder)
    findImages(p.folder).then((list) => {
      if (!list.length) return;
      imgs.splice(0, imgs.length, ...list); // fill the same array the click handler uses
      cover.src = list[0];
      btn.setAttribute(
        "aria-label",
        `Open gallery for ${p.title} (${list.length} images)`,
      );
      if (list.length > 1 && !c.querySelector(".pop")) {
        const pop = document.createElement("div");
        pop.className = "pop";
        pop.setAttribute("aria-hidden", "true");
        list.slice(0, 4).forEach((s) => {
          const im = document.createElement("img");
          im.src = s;
          im.alt = "";
          im.loading = "lazy";
          pop.appendChild(im);
        });
        const more = document.createElement("span");
        more.className = "popnote";
        more.textContent = `click to see all ${list.length} ✿`;
        pop.appendChild(more);
        pop.addEventListener("click", () => openP(p, imgs));
        c.appendChild(pop);
      }
    });
  pg.appendChild(c);
});
/* carousel: continuous position + wrap-around */
const car = $("#car"),
  W = SITE.works,
  n = W.length;
let pos = 0,
  cur = 0,
  step = 260;
const mod = (a, m) => ((a % m) + m) % m,
  clamp01 = (x) => Math.max(0, Math.min(1, x));
const slides = W.map((w, i) => {
  const f = document.createElement("figure");
  f.className = "slide";
  f.innerHTML = `<img alt="${w.title}" loading="lazy" decoding="async"><figcaption></figcaption>`;
  f.querySelector("img").src = w.src || art(w.hue ?? i);
  f.querySelector("figcaption").textContent = w.title;
  f.addEventListener("click", () => {
    if (i === cur) openD(w, f.querySelector("img").src);
    else go(i);
  });
  car.appendChild(f);
  return f;
});
function layout() {
  step = Math.min(car.clientWidth * 0.3, slides[0].offsetWidth * 0.95);
  const vis = n >= 5 ? 2 : 1,
    limit = Math.min(vis + 1, n / 2);
  cur = mod(Math.round(pos), n);
  slides.forEach((s, i) => {
    let d = mod(i - pos, n);
    if (d > n / 2) d -= n;
    const a = Math.abs(d);
    const fade = n <= 2 ? 1 : clamp01((limit - a) / (limit - vis));
    const op =
      (a < 1 ? 1 - 0.38 * a : Math.max(0.2, 0.62 - (a - 1) * 0.3)) * fade;
    const sc = Math.max(0.45, 1.12 - a * 0.26);
    s.style.transform = `translate(calc(-50% + ${Math.max(-3, Math.min(3, d)) * step}px),-50%) scale(${sc})`;
    s.style.opacity = op;
    s.style.zIndex = Math.round(100 - a * 10);
    s.classList.toggle("hid", fade <= 0.01);
    s.setAttribute("aria-hidden", a < 0.5 ? "false" : "true");
  });
  $("#ct").textContent = W[cur].title;
  $("#cd").textContent = W[cur].desc;
}
function go(t) {
  const b = Math.round(pos);
  let d = mod(t - b, n);
  if (d > n / 2) d -= n;
  pos = b + d;
  layout();
}
$("#prev").onclick = () => go(cur - 1);
$("#next").onclick = () => go(cur + 1);
if (n < 2) document.querySelectorAll(".cbtn").forEach((b) => (b.hidden = true));
car.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") go(cur - 1);
  if (e.key === "ArrowRight") go(cur + 1);
});
addEventListener("resize", layout);

/* pointer drag: follows the finger/mouse live, snaps with momentum on release */
let down = false,
  drag = false,
  moved = false,
  x0 = 0,
  p0 = 0,
  lt = 0,
  v = 0;
car.addEventListener("pointerdown", (e) => {
  if (e.target.closest(".cbtn") || (e.pointerType === "mouse" && e.button))
    return;
  down = true;
  drag = false;
  moved = false;
  x0 = e.clientX;
  p0 = pos;
  lt = performance.now();
  v = 0;
});
car.addEventListener("pointermove", (e) => {
  if (!down) return;
  const dx = e.clientX - x0;
  if (!drag) {
    if (Math.abs(dx) < 6) return;
    drag = true;
    moved = true;
    car.classList.add("live", "dragging");
    car.setPointerCapture(e.pointerId);
  }
  const now = performance.now(),
    np = p0 - dx / step;
  if (now > lt) v = (np - pos) / (now - lt);
  lt = now;
  pos = np;
  layout();
});
const endDrag = (e) => {
  if (!down) return;
  down = false;
  if (!drag) return;
  drag = false;
  car.classList.remove("live", "dragging");
  try {
    car.releasePointerCapture(e.pointerId);
  } catch (_) {}
  if (performance.now() - lt > 80) v = 0;
  go(Math.round(pos + Math.max(-2, Math.min(2, v * 180))));
};
car.addEventListener("pointerup", endDrag);
car.addEventListener("pointercancel", endDrag);
car.addEventListener(
  "click",
  (e) => {
    if (moved) {
      e.stopPropagation();
      e.preventDefault();
      moved = false;
    }
  },
  true,
);

/* trackpad two-finger swipe: continuous, snaps once the gesture ends */
let settle;
car.addEventListener(
  "wheel",
  (e) => {
    if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
    e.preventDefault();
    car.classList.add("live");
    pos += (e.deltaX / step) * 0.9;
    layout();
    clearTimeout(settle);
    settle = setTimeout(() => {
      car.classList.remove("live");
      go(Math.round(pos));
    }, 110);
  },
  { passive: false },
);

/* cursor parallax */
car.addEventListener("pointermove", (e) => {
  const r = car.getBoundingClientRect();
  car.style.setProperty(
    "--mx",
    (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3),
  );
  car.style.setProperty(
    "--my",
    (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3),
  );
});
car.addEventListener("pointerleave", () => {
  car.style.setProperty("--mx", 0);
  car.style.setProperty("--my", 0);
});
const dlg = $("#dlg");
function openD(w, s) {
  $("#dimg").src = s;
  $("#dimg").alt = w.title;
  $("#dt").textContent = w.title;
  $("#dd").textContent = w.desc;
  dlg.showModal();
}
/* two-finger horizontal swipe = next/prev (one swipe, one slide) */
let acc = 0,
  swipeLock = false,
  idle;
car.addEventListener(
  "wheel",
  (e) => {
    if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return; // vertical scroll still scrolls the page
    e.preventDefault();
    clearTimeout(idle);
    idle = setTimeout(() => {
      swipeLock = false;
      acc = 0;
    }, 140);
    if (swipeLock) return;
    acc += e.deltaX;
    if (Math.abs(acc) > 50) {
      go(cur + (acc > 0 ? 1 : -1));
      acc = 0;
      swipeLock = true;
    }
  },
  { passive: false },
);
/* cursor parallax */
car.addEventListener("pointermove", (e) => {
  const r = car.getBoundingClientRect();
  car.style.setProperty(
    "--mx",
    (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3),
  );
  car.style.setProperty(
    "--my",
    (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3),
  );
});
car.addEventListener("pointerleave", () => {
  car.style.setProperty("--mx", 0);
  car.style.setProperty("--my", 0);
});
$("#dx").onclick = () => dlg.close();
dlg.addEventListener("click", (e) => {
  if (e.target === dlg) dlg.close();
});
n ? layout() : ($("#works").hidden = true);
/* contact links */
SITE.links.forEach((l) => {
  const li = document.createElement("li"),
    a = document.createElement("a");
  a.innerHTML = `<b aria-hidden="true">${l.icon}</b> `;
  a.append(l.label);
  if (l.url) {
    a.href = l.url;
    if (!l.url.startsWith("mailto")) a.target = "_blank";
    a.rel = "noopener";
  } else {
    a.href = "#contact";
    a.title = "Add your URL in SITE.links";
    a.addEventListener("click", (e) => e.preventDefault());
  }
  li.appendChild(a);
  $("#links").appendChild(li);
});
$("#yr").textContent = new Date().getFullYear();
/* navbar scroll logic */
const SHOW_ON_SCROLL_DOWN = true;
const bar = $(".topbar");
let lastY = scrollY;
bar.classList.toggle("show", !SHOW_ON_SCROLL_DOWN);
addEventListener(
  "scroll",
  () => {
    const y = scrollY;
    if (Math.abs(y - lastY) < 8) return;
    const down = y > lastY;
    lastY = y;
    bar.classList.toggle(
      "show",
      y <= 40 ? !SHOW_ON_SCROLL_DOWN : down === SHOW_ON_SCROLL_DOWN,
    );
  },
  { passive: true },
);
/* Scroll-Reactive Navbar */
const topbar = document.querySelector(".topbar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  // 1. Always show the navbar if we are at the very top of the page
  if (window.scrollY <= 0) {
    topbar.classList.add("show");
    lastScrollY = window.scrollY;
    return;
  }

  // 2. Scrolling Down: Show navbar (per your custom rule)
  if (window.scrollY > lastScrollY) {
    topbar.classList.add("show");
  }
  // 3. Scrolling Up: Hide navbar
  else if (window.scrollY < lastScrollY) {
    topbar.classList.remove("show");
  }

  lastScrollY = window.scrollY;
});
