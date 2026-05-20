const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav-toggle");
const billingButtons = document.querySelectorAll("[data-billing]");
const priceMap = {
  monthly: {
    launch: "$2,400",
    scale: "$7,800",
    enterprise: "Custom",
  },
  annual: {
    launch: "$1,920",
    scale: "$6,240",
    enterprise: "Custom",
  },
};

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-menu a, .nav-actions a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

billingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const billing = button.dataset.billing;

    billingButtons.forEach((item) => item.classList.toggle("active", item === button));
    Object.entries(priceMap[billing]).forEach(([plan, price]) => {
      document.querySelector(`[data-price="${plan}"]`).textContent = price;
    });
  });
});

document.querySelectorAll(".toggle").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("is-on");
    const enabled = toggle.classList.contains("is-on");
    const label = toggle.getAttribute("aria-label").replace(/ enabled| disabled/g, "");
    toggle.setAttribute("aria-label", `${label} ${enabled ? "enabled" : "disabled"}`);
  });
});

const metricObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const number = entry.target;
      const target = Number(number.dataset.count);
      const duration = 900;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        number.textContent = Math.round(target * progress);

        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
      observer.unobserve(number);
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll("[data-count]").forEach((metric) => metricObserver.observe(metric));

document.querySelector(".demo-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const email = new FormData(form).get("email");
  form.querySelector(".form-message").textContent = `Thanks. We will follow up at ${email}.`;
  form.reset();
});
