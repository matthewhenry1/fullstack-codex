import { useState } from "react";
import { policies as initialPolicies, securityItems } from "../data/content.js";
import Toggle from "./Toggle.jsx";

function SecuritySection() {
  const [policies, setPolicies] = useState(initialPolicies);

  const togglePolicy = (id) => {
    setPolicies((items) =>
      items.map((item) => (item.id === id ? { ...item, enabled: !item.enabled } : item))
    );
  };

  return (
    <section className="section split-section" id="security">
      <div className="security-copy">
        <p className="eyebrow">Security and compliance</p>
        <h2>Controls built for regulated financial operations.</h2>
        <p>
          Keep sensitive workflows protected with granular permissions, immutable audit trails,
          policy enforcement, and continuous monitoring.
        </p>
        <ul className="check-list">
          {securityItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="control-panel">
        <div className="control-header">
          <span>Policy center</span>
          <strong>Active</strong>
        </div>
        {policies.map((policy) => (
          <div className="control-row" key={policy.id}>
            <span>{policy.label}</span>
            <Toggle
              enabled={policy.enabled}
              label={policy.label}
              onToggle={() => togglePolicy(policy.id)}
            />
          </div>
        ))}
        <div className="audit-box">
          <p>Latest audit event</p>
          <strong>Transfer policy updated by Compliance Admin</strong>
          <span>2 minutes ago</span>
        </div>
      </div>
    </section>
  );
}

export default SecuritySection;
