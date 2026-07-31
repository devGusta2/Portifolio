const body = document.body;
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const themeIcon = themeToggle?.querySelector("i");
const yearNode = document.querySelector("#year");

let storedTheme = null;
try {
  storedTheme = window.localStorage.getItem("portfolio-theme");
} catch {
  storedTheme = null;
}

const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;

const setTheme = (theme) => {
  body.dataset.theme = theme;
  try {
    window.localStorage.setItem("portfolio-theme", theme);
  } catch {
    // Ignore storage failures in restricted browsing modes.
  }

  if (!themeToggle || !themeIcon) {
    return;
  }

  const darkMode = theme === "dark";
  themeIcon.classList.toggle("fa-moon", !darkMode);
  themeIcon.classList.toggle("fa-sun", darkMode);
  themeToggle.setAttribute("aria-label", darkMode ? "Ativar tema claro" : "Ativar tema escuro");
};

const setMenuOpen = (open) => {
  body.classList.toggle("nav-open", open);

  if (navToggle) {
    navToggle.setAttribute("aria-expanded", String(open));
  }
};

const toggleMenu = () => {
  setMenuOpen(!body.classList.contains("nav-open"));
};

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

setTheme(storedTheme ?? (prefersDark ? "dark" : "light"));

navToggle?.addEventListener("click", toggleMenu);
themeToggle?.addEventListener("click", () => {
  const nextTheme = body.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
  }
});

document.addEventListener("click", (event) => {
  if (!body.classList.contains("nav-open")) {
    return;
  }

  const target = event.target;
  if (!(target instanceof Node)) {
    return;
  }

  if (nav?.contains(target) || navToggle?.contains(target)) {
    return;
  }

  setMenuOpen(false);
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
  });
} else {
  document.querySelectorAll(".reveal").forEach((element) => {
    element.classList.add("is-visible");
  });
}

document.querySelectorAll(".reveal-image").forEach((image) => {
  const markLoaded = () => image.classList.add("is-loaded");

  if (image.complete) {
    markLoaded();
    return;
  }

  image.addEventListener("load", markLoaded, { once: true });
  image.addEventListener("error", markLoaded, { once: true });
});
