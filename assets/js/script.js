const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelector("[data-nav-links]");
const links = [...document.querySelectorAll(".nav-links a")];
const sections = [...document.querySelectorAll("main section[id]")];

const closeMenu = () => {
  navToggle?.classList.remove("is-open");
  navLinks?.classList.remove("is-open");
  document.body.classList.remove("menu-open");
  navToggle?.setAttribute("aria-expanded", "false");
};

navToggle?.addEventListener("click", () => {
  const isOpen = navLinks?.classList.toggle("is-open");
  navToggle.classList.toggle("is-open", Boolean(isOpen));
  document.body.classList.toggle("menu-open", Boolean(isOpen));
  navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

links.forEach((link) => link.addEventListener("click", closeMenu));

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      links.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-45% 0px -45% 0px" }
);

sections.forEach((section) => sectionObserver.observe(section));
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
