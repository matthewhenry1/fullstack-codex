const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav-toggle");
const billingButtons = document.querySelectorAll("[data-billing]");
const chatLog = document.querySelector("[data-chat-log]");
const chatForm = document.querySelector("[data-chat-form]");
const promptButtons = document.querySelectorAll("[data-prompt]");
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
const agentReplies = [
  "I checked the batch context and found no new high-severity items. The next useful step is to verify the two customer account updates before releasing funds.",
  "The current risk score is driven by return volume, transaction size, and reserve coverage. Reserve coverage is healthy, so the score remains low.",
  "I drafted a customer-safe update: We are reviewing two payment exceptions and will confirm settlement timing after account details are verified.",
];

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

const addChatMessage = (author, message) => {
  const item = document.createElement("article");
  item.className = `chat-message ${author === "You" ? "user-message" : "agent-message"}`;

  const label = document.createElement("span");
  label.textContent = author;

  const body = document.createElement("p");
  body.textContent = message;

  item.append(label, body);
  chatLog.append(item);
  chatLog.scrollTop = chatLog.scrollHeight;
};

const mockAgentReply = (message) => {
  const normalized = message.toLowerCase();

  if (normalized.includes("exception")) return agentReplies[0];
  if (normalized.includes("risk")) return agentReplies[1];
  if (normalized.includes("draft") || normalized.includes("update")) return agentReplies[2];

  return "I can help with this batch. I would start by checking exceptions, exposure, reserve coverage, and the latest audit event.";
};

const submitAgentPrompt = (message) => {
  if (!message.trim()) return;

  addChatMessage("You", message.trim());
  window.setTimeout(() => addChatMessage("Agent", mockAgentReply(message)), 260);
};

promptButtons.forEach((button) => {
  button.addEventListener("click", () => submitAgentPrompt(button.dataset.prompt));
});

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = chatForm.elements.message;
  submitAgentPrompt(input.value);
  input.value = "";
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
