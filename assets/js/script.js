const header = document.querySelector("[data-header]");
const navLinks = document.querySelector("[data-nav-links]");
const navIndicator = document.querySelector(".nav-indicator");
const links = [...document.querySelectorAll(".nav-item")];
const sections = [...document.querySelectorAll("main section[id]")];
const shimmerButtons = [...document.querySelectorAll(".shimmer-button")];

const moveNavIndicator = (activeLink = document.querySelector(".nav-item.is-active")) => {
  if (!navLinks || !navIndicator || !activeLink) return;

  const navRect = navLinks.getBoundingClientRect();
  const linkRect = activeLink.getBoundingClientRect();

  navLinks.style.setProperty("--indicator-x", `${linkRect.left - navRect.left}px`);
  navLinks.style.setProperty("--indicator-y", `${linkRect.top - navRect.top}px`);
  navLinks.style.setProperty("--indicator-width", `${linkRect.width}px`);
  navLinks.style.setProperty("--indicator-height", `${linkRect.height}px`);
};

const setActiveLink = (activeLink) => {
  links.forEach((link) => link.classList.toggle("is-active", link === activeLink));
  moveNavIndicator(activeLink);
};

links.forEach((link) => {
  link.addEventListener("click", () => setActiveLink(link));
});

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

      const activeLink = links.find((link) => link.getAttribute("href") === `#${entry.target.id}`);
      setActiveLink(activeLink);
    });
  },
  { rootMargin: "-45% 0px -45% 0px" }
);

sections.forEach((section) => sectionObserver.observe(section));
shimmerButtons.forEach((button) => {
  button.addEventListener("pointerdown", () => {
    button.animate(
      [
        { transform: "translateY(1px) scale(0.99)" },
        { transform: "translateY(0) scale(1)" },
      ],
      { duration: 180, easing: "ease-out" }
    );
  });
});

window.addEventListener("scroll", updateHeader, { passive: true });
window.addEventListener("resize", () => moveNavIndicator(), { passive: true });
updateHeader();
moveNavIndicator();
