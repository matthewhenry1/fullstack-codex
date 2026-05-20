import { resources } from "../data/content.js";

function ResourcesSection() {
  return (
    <section className="section resource-section" id="resources">
      <div>
        <p className="eyebrow">Resources</p>
        <h2>Designed for teams that ship financial products.</h2>
      </div>
      <div className="resource-list">
        {resources.map((resource) => (
          <a href="#contact" key={resource.title}>
            <span>{resource.type}</span>
            <strong>{resource.title}</strong>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ResourcesSection;
