import { features } from "../data/content.js";

function PlatformSection() {
  return (
    <section className="section" id="platform">
      <div className="section-heading">
        <p className="eyebrow">Platform</p>
        <h2>Launch the financial products your customers expect.</h2>
        <p>
          Modular APIs, operational dashboards, and compliance controls give product, finance, and
          risk teams the same source of truth.
        </p>
      </div>
      <div className="feature-grid">
        {features.map((feature) => (
          <article className="feature-card" key={feature.id}>
            <span className="feature-icon">{feature.id}</span>
            <h3>{feature.title}</h3>
            <p>{feature.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PlatformSection;
