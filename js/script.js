  heroArt: {
    src: "assets/art/deerd.webp",
    // Where the artwork sits when the page first opens.
    // x / y = fraction of the oval's width / height (0 = centred, 0.1 = 10% right/down). scale = zoom, 1 to 3.
    // Tip: drag it where you like, press Shift+P, open the console (F12) and copy the printed "start:" line here.
    start: { x: 0, y: 0, scale: 1 },
  },
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
const mod = (a, m) => ((a % m) + m) % m;
const clamp = (v, lo, hi) => Math.min(Math.max(v, lo), hi);
let rect = null; // cached carousel rectangle (used by the cursor parallax)

/* ---------- lazy images: only load when they get near the screen ---------- */
const lazyIO =
  "IntersectionObserver" in window
    ? new IntersectionObserver(
        (es) =>
          es.forEach((e) => {
            if (!e.isIntersecting) return;
            lazyIO.unobserve(e.target);
            e.target.src = e.target.dataset.src;
          }),
        { rootMargin: "600px 0px" },
      )
    : null;
const lazy = (img, url) => {
  img.decoding = "async";
  if (lazyIO) {
    img.dataset.src = url;
    lazyIO.observe(img);
  } else img.src = url;
};
/* run fn once when el first gets near the screen */
const once = (el, fn, margin = "600px 0px") => {
  if (!("IntersectionObserver" in window)) return fn();
  new IntersectionObserver(
    (es, o) => {
      if (es.some((e) => e.isIntersecting)) {
        o.disconnect();
        fn();
      }
    },
    { rootMargin: margin },
  ).observe(el);
};

/* ---------- hero artwork: drag, pinch-zoom, wheel-zoom, start position ---------- */
const im = $("#art");
im.decoding = "async";
im.fetchPriority = "high";
im.src = src(SITE.heroArt, 0);
lazy($("#portrait"), src(SITE.portrait, 2));
lazy($("#avatar"), src(SITE.avatar, 1));

const viewport = $(".oval"),
  artwork = im,
  start = SITE.heroArt.start || {};
const state = { x: 0, y: 0, scale: 1, locked: false };
let touched = false, raf = 0;
function updateArtwork() {
  const lx = Math.max(0, (artwork.clientWidth * state.scale - viewport.clientWidth) / 2);
  const ly = Math.max(0, (artwork.clientHeight * state.scale - viewport.clientHeight) / 2);
  state.x = clamp(state.x, -lx, lx);
  state.y = clamp(state.y, -ly, ly);
  artwork.style.transform = `translate(-50%,-50%) translate3d(${state.x}px,${state.y}px,0) scale(${state.scale})`;
}
const schedule = () => raf || (raf = requestAnimationFrame(() => ((raf = 0), updateArtwork())));
function toStart() {
  state.scale = clamp(start.scale ?? 1, 1, 3);
  state.x = (start.x ?? 0) * viewport.clientWidth;
  state.y = (start.y ?? 0) * viewport.clientHeight;
  updateArtwork();
}
artwork.addEventListener("load", toStart);
if (artwork.complete && artwork.naturalWidth) toStart();
addEventListener("resize", () => (touched ? schedule() : toStart()));

/* one finger = drag, two fingers = pinch zoom + pan, double tap/click = back to start */
const ptrs = new Map();
let g = null, tapT = 0, tapMoved = 0;
const pts = () => [...ptrs.values()];
const centre = (a, b) => (b ? { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 } : a);
const gap = (a, b) => (b ? Math.hypot(a.x - b.x, a.y - b.y) || 1 : 0);
function baseline() {
  const [a, b] = pts(), c = centre(a, b);
  g = { x: state.x, y: state.y, s: state.scale, cx: c.x, cy: c.y, d: gap(a, b) };
}
viewport.addEventListener("pointerdown", (e) => {
  if (state.locked) return;
  ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
  viewport.setPointerCapture(e.pointerId);
  viewport.classList.add("dragging");
  touched = true;
  tapMoved = 0;
  baseline();
});
viewport.addEventListener("pointermove", (e) => {
  const p = ptrs.get(e.pointerId);
  if (!p || state.locked) return;
  p.x = e.clientX;
  p.y = e.clientY;
  const [a, b] = pts(), c = centre(a, b);
  tapMoved = Math.max(tapMoved, Math.hypot(c.x - g.cx, c.y - g.cy));
  if (b) state.scale = clamp((g.s * gap(a, b)) / g.d, 1, 3);
  state.x = g.x + c.x - g.cx;
  state.y = g.y + c.y - g.cy;
  schedule();
});
const endPtr = (e) => {
  if (!ptrs.delete(e.pointerId)) return;
  try { viewport.releasePointerCapture(e.pointerId); } catch (_) {}
  if (ptrs.size) return baseline(); // one finger still down: keep dragging from here
  viewport.classList.remove("dragging");
  if (e.type === "pointerup" && tapMoved < 6) {
    const t = performance.now();
    if (t - tapT < 320) { toStart(); tapT = 0; } else tapT = t;
  }
};
viewport.addEventListener("pointerup", endPtr);
viewport.addEventListener("pointercancel", endPtr);
viewport.addEventListener(
  "wheel",
  (e) => {
    if (state.locked) return;
    e.preventDefault();
    touched = true;
    state.scale = clamp(state.scale - e.deltaY * (e.ctrlKey ? 0.01 : 0.002), 1, 3); // ctrlKey = trackpad pinch
    schedule();
  },
  { passive: false },
);
const lockBtn = $("#lock"), lockImg = lockBtn.querySelector("img");
new Image().src = "assets/lock.webp"; // warm the cache so the swap is instant
lockBtn.addEventListener("click", () => {
  state.locked = !state.locked;
  viewport.classList.toggle("locked", state.locked);
  if (state.locked) { ptrs.clear(); viewport.classList.remove("dragging"); }
  lockImg.src = state.locked ? "assets/lock.webp" : "assets/unlock.webp";
  lockImg.alt = state.locked ? "locked" : "unlocked";
  lockBtn.setAttribute("aria-pressed", state.locked);
  lockBtn.setAttribute("aria-label", state.locked ? "Unlock artwork" : "Lock artwork");
});
/* helper: Shift+P prints the current position as a ready-to-paste "start:" line */
addEventListener("keydown", (e) => {
  if (e.shiftKey && e.key === "P")
    console.log(`start: { x: ${(state.x / viewport.clientWidth).toFixed(3)}, y: ${(state.y / viewport.clientHeight).toFixed(3)}, scale: ${state.scale.toFixed(2)} },`);
});

/* ---------- projects: cover + hover popup + full gallery dialog ---------- */
const pg = $("#pgrid");
const pd = document.createElement("dialog");
pd.className = "pdlg";
pd.setAttribute("aria-label", "Project gallery");
pd.innerHTML = `<img alt=""><div class="pbar"><button type="button" data-d="-1" aria-label="Previous image">←</button><span></span><button type="button" data-d="1" aria-label="Next image">→</button></div><h3></h3><p></p><button type="button" class="px">close ✕</button>`;
document.body.appendChild(pd);
let pi = 0, pimgs = [], ptitle = "";
const showP = () => {
  const x = pd.querySelector("img");
  x.src = pimgs[pi];
  x.alt = `${ptitle} — image ${pi + 1}`;
  pd.querySelector(".pbar span").textContent = `${pi + 1} / ${pimgs.length}`;
  pd.querySelector(".pbar").hidden = pimgs.length < 2;
};
const stepP = (d) => { pi = mod(pi + d, pimgs.length); showP(); };
function openP(p, imgs) {
  pimgs = imgs; pi = 0; ptitle = p.title;
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

/* find numbered images in a folder. With p.count it builds the list directly (no requests). */
const EXTS = ["webp", "jpg", "png", "jpeg", "svg", "JPG", "PNG", "JPEG", "WEBP"];
const exists = (u) =>
  location.protocol === "file:"
    ? new Promise((r) => { const i = new Image(); i.onload = () => r(true); i.onerror = () => r(false); i.src = u; })
    : fetch(u, { method: "HEAD" })
        .then((r) => r.ok && (r.headers.get("content-type") || "").startsWith("image/"))
        .catch(() => false);
async function findImages(p) {
  if (p.count) return Array.from({ length: p.count }, (_, i) => `${p.folder}/${i + 1}.${p.ext || "webp"}`);
  const out = [];
  let ext = null; // extension that worked last time is tried first -> ~1 request per image
  for (let n = 1, miss = 0; n <= 40 && miss < 2; n++) { // stops after 2 missing numbers in a row
    let hit = null;
    for (const e of ext ? [ext, ...EXTS.filter((x) => x !== ext)] : EXTS) {
      const u = `${p.folder}/${n}.${e}`;
      if (await exists(u)) { hit = u; ext = e; break; }
    }
    if (hit) { out.push(hit); miss = 0; } else miss++;
  }
  return out;
}
SITE.projects.forEach((p, i) => {
  let imgs = p.imgs && p.imgs.length ? [...p.imgs] : p.img ? [p.img] : [];
  const c = document.createElement("article");
  c.className = "card";
  c.innerHTML = `<button type="button" class="pvbtn"><div class="pv"><img decoding="async" alt=""></div></button><div class="bd"><h3></h3><p></p><div class="chips"></div></div>`;
  const btn = c.querySelector(".pvbtn"), cover = c.querySelector(".pv img");
  cover.alt = `${p.title} preview`;
  const setImgs = (list) => {
    imgs = list;
    cover.src = list[0];
    btn.setAttribute("aria-label", `Open gallery for ${p.title} (${list.length} image${list.length > 1 ? "s" : ""})`);
  };
  btn.addEventListener("click", () => imgs.length && openP(p, imgs));
  c.querySelector("h3").textContent = p.title;
  c.querySelector("p").textContent = p.desc;
  const ch = c.querySelector(".chips");
  p.tech.forEach((t) => { const s = document.createElement("span"); s.textContent = t; ch.appendChild(s); });
  /* hover popup is built the first time the card is hovered/focused, not up front */
  let pop = null;
  const ensurePop = () => {
    if (pop || imgs.length < 2) return;
    pop = document.createElement("div");
    pop.className = "pop";
    pop.setAttribute("aria-hidden", "true");
    imgs.slice(0, 4).forEach((s) => { const x = document.createElement("img"); x.src = s; x.alt = ""; x.decoding = "async"; pop.appendChild(x); });
    const more = document.createElement("span");
    more.className = "popnote";
    more.textContent = `click to see all ${imgs.length} ✿`;
    pop.appendChild(more);
    pop.addEventListener("click", () => openP(p, imgs));
    c.appendChild(pop);
  };
  c.addEventListener("pointerenter", ensurePop);
  c.addEventListener("focusin", ensurePop);
  if (p.link) {
    const a = document.createElement("a");
    a.className = "lnk"; a.href = p.link; a.target = "_blank"; a.rel = "noopener"; a.textContent = "view project →";
    c.querySelector(".bd").appendChild(a);
  }
  /* images are looked up only when the card is near the screen */
  if (p.folder) once(c, () => findImages(p).then((l) => setImgs(l.length ? l : [art(i + 3)])), "400px 0px");
  else setImgs(imgs.length ? imgs : [art(i + 3)]);
  pg.appendChild(c);
});

/* ---------- creative works carousel ---------- */
const dlg = $("#dlg");
function openD(w, s) {
  $("#dimg").src = s;
  $("#dimg").alt = w.title;
  $("#dt").textContent = w.title;
  $("#dd").textContent = w.desc;
  dlg.showModal();
}
$("#dx").onclick = () => dlg.close();
dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });

const car = $("#car"), W = SITE.works, n = W.length;
if (!n) $("#works").hidden = true;
else {
  let pos = 0, cur = -1, step = 260, r2 = 0;
  const slides = W.map((w, i) => {
    const f = document.createElement("figure");
    f.className = "slide";
    f.innerHTML = `<img alt="" decoding="async"><figcaption></figcaption>`;
    f.querySelector("img").alt = w.title;
    f.querySelector("figcaption").textContent = w.title;
    f.addEventListener("click", () => {
      if (i === cur) openD(w, f.querySelector("img").src);
      else go(i);
    });
    car.appendChild(f);
    return f;
  });
  /* all carousel images load together as the gallery nears the screen (so swiping never shows blanks) */
  once($("#works"), () => slides.forEach((s, i) => (s.querySelector("img").src = W[i].src || art(W[i].hue ?? i))), "1000px 0px");

  const clamp01 = (x) => Math.max(0, Math.min(1, x));
  function measure() { step = Math.min(car.clientWidth * 0.3, slides[0].offsetWidth * 0.95); }
  function layout() {
    const vis = n >= 5 ? 2 : 1, limit = Math.min(vis + 1, n / 2);
    const nc = mod(Math.round(pos), n);
    slides.forEach((s, i) => {
      let d = mod(i - pos, n);
      if (d > n / 2) d -= n;
      const a = Math.abs(d);
      const fade = n <= 2 ? 1 : clamp01((limit - a) / (limit - vis));
      const op = (a < 1 ? 1 - 0.38 * a : Math.max(0.2, 0.62 - (a - 1) * 0.3)) * fade;
      const sc = Math.max(0.45, 1.12 - a * 0.26);
      s.style.transform = `translate(calc(-50% + ${clamp(d, -3, 3) * step}px),-50%) scale(${sc})`;
      s.style.opacity = op;
      s.style.zIndex = Math.round(100 - a * 10);
      s.classList.toggle("hid", fade <= 0.01);
      s.setAttribute("aria-hidden", a < 0.5 ? "false" : "true");
    });
    if (nc !== cur) { // caption only changes when the centre slide changes
      cur = nc;
      $("#ct").textContent = W[cur].title;
      $("#cd").textContent = W[cur].desc;
    }
  }
  const sched = () => r2 || (r2 = requestAnimationFrame(() => ((r2 = 0), layout())));
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
  addEventListener("resize", () => { measure(); rect = null; layout(); });
  measure();
  layout();

  /* drag / swipe: follows the finger live, snaps with momentum on release */
  let down = false, drag = false, moved = false, x0 = 0, p0 = 0, lt = 0, v = 0;
  car.addEventListener("pointerdown", (e) => {
    if (e.target.closest(".cbtn") || (e.pointerType === "mouse" && e.button)) return;
    down = true; drag = false; moved = false; x0 = e.clientX; p0 = pos; lt = performance.now(); v = 0;
  });
  car.addEventListener("pointermove", (e) => {
    if (!down) return;
    const dx = e.clientX - x0;
    if (!drag) {
      if (Math.abs(dx) < 6) return;
      drag = moved = true;
      car.classList.add("live", "dragging");
      car.setPointerCapture(e.pointerId);
    }
    const now = performance.now(), np = p0 - dx / step;
    if (now > lt) v = (np - pos) / (now - lt);
    lt = now; pos = np;
    sched();
  });
  const endDrag = (e) => {
    if (!down) return;
    down = false;
    if (!drag) return;
    drag = false;
    car.classList.remove("live", "dragging");
    try { car.releasePointerCapture(e.pointerId); } catch (_) {}
    if (performance.now() - lt > 80) v = 0;
    go(Math.round(pos + clamp(v * 180, -2, 2)));
  };
  car.addEventListener("pointerup", endDrag);
  car.addEventListener("pointercancel", endDrag);
  car.addEventListener("click", (e) => { if (moved) { e.stopPropagation(); e.preventDefault(); moved = false; } }, true); // a drag is not a click

  /* trackpad two-finger swipe: continuous, snaps once the gesture ends */
  let settle;
  car.addEventListener(
    "wheel",
    (e) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return; // vertical scroll still scrolls the page
      e.preventDefault();
      car.classList.add("live");
      pos += (e.deltaX / step) * 0.9;
      sched();
      clearTimeout(settle);
      settle = setTimeout(() => { car.classList.remove("live"); go(Math.round(pos)); }, 110);
    },
    { passive: false },
  );

  /* cursor parallax (mouse only, one update per frame, rect cached) */
  let mx = 0, my = 0, pr = 0;
  car.addEventListener("pointermove", (e) => {
    if (e.pointerType !== "mouse") return;
    rect = rect || car.getBoundingClientRect();
    mx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    my = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    pr = pr || requestAnimationFrame(() => {
      pr = 0;
      car.style.setProperty("--mx", mx.toFixed(3));
      car.style.setProperty("--my", my.toFixed(3));
    });
  });
  car.addEventListener("pointerleave", () => {
    rect = null;
    car.style.setProperty("--mx", 0);
    car.style.setProperty("--my", 0);
  });
}

/* ---------- contact links ---------- */
SITE.links.forEach((l) => {
  const li = document.createElement("li"), a = document.createElement("a");
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

/* ---------- scroll-reactive navbar (one listener, one frame at a time) ---------- */
const SHOW_ON_SCROLL_DOWN = true; // true = shows while scrolling down, hides while scrolling up. false = the reverse
const bar = $(".topbar");
let lastY = scrollY, tick = false;
bar.classList.toggle("show", !SHOW_ON_SCROLL_DOWN);
addEventListener(
  "scroll",
  () => {
    rect = null; // carousel position on screen changed
    if (tick) return;
    tick = true;
    requestAnimationFrame(() => {
      tick = false;
      const y = scrollY;
      if (y <= 0) { bar.classList.add("show"); lastY = y; } // always visible at the very top
      else if (Math.abs(y - lastY) >= 4) {
        bar.classList.toggle("show", y > lastY === SHOW_ON_SCROLL_DOWN);
        lastY = y;
      }
    });
  },
  { passive: true },
);
