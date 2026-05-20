import { useState } from "react";
import { plans, priceMap } from "../data/pricing.js";

function PricingSection() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="section" id="pricing">
      <div className="section-heading">
        <p className="eyebrow">Pricing</p>
        <h2>Start lean, then scale with volume.</h2>
        <p>Use the toggle to adapt the template for monthly or annual commercial packaging.</p>
        <div className="billing-toggle" role="group" aria-label="Billing period">
          {Object.keys(priceMap).map((period) => (
            <button
              className={billing === period ? "active" : ""}
              type="button"
              data-billing={period}
              key={period}
              onClick={() => setBilling(period)}
            >
              {period === "monthly" ? "Monthly" : "Annual"}
            </button>
          ))}
        </div>
      </div>
      <div className="pricing-grid">
        {plans.map((plan) => (
          <article className={`price-card${plan.featured ? " featured" : ""}`} key={plan.id}>
            {plan.featured && <span className="plan-badge">Most popular</span>}
            <h3>{plan.title}</h3>
            <p>{plan.description}</p>
            <strong>
              <span data-price={plan.id}>{priceMap[billing][plan.id]}</span>
              {plan.id !== "enterprise" && <small>/mo</small>}
            </strong>
            <a className={`button${plan.featured ? "" : " button-secondary"}`} href="#contact">
              {plan.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PricingSection;
