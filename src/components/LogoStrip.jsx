import { customerCategories } from "../data/content.js";

function LogoStrip() {
  return (
    <section className="logo-strip" aria-label="Customer categories">
      {customerCategories.map((category) => (
        <span key={category}>{category}</span>
      ))}
    </section>
  );
}

export default LogoStrip;
