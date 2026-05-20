import { trustMetrics } from "../data/content.js";
import DashboardPreview from "./DashboardPreview.jsx";

function Hero() {
  return (
    <section className="hero section-band">
      <div className="hero-content">
        <p className="eyebrow">Banking infrastructure for modern finance teams</p>
        <h1>Move money, manage risk, and reconcile every transaction from one operating layer.</h1>
        <p className="hero-copy">
          NovaLedger helps fintech companies launch accounts, card programs, payment flows, and
          real-time treasury controls without stitching together fragmented tools.
        </p>
        <div className="hero-actions">
          <a className="button" href="#contact">
            Start building
          </a>
          <a className="button button-secondary" href="#platform">
            Explore platform
          </a>
        </div>
        <div className="trust-row" aria-label="Company metrics">
          {trustMetrics.map((metric) => (
            <span key={metric.label}>
              <strong>{metric.value}</strong> {metric.label}
            </span>
          ))}
        </div>
      </div>
      <DashboardPreview />
    </section>
  );
}

export default Hero;
