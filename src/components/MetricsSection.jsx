import { useEffect, useRef, useState } from "react";
import { metrics } from "../data/content.js";

function MetricsSection() {
  const [values, setValues] = useState(metrics.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    let animationFrame = 0;
    let hasAnimated = false;

    const animate = () => {
      if (hasAnimated) return;
      hasAnimated = true;

      const duration = 900;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        setValues(metrics.map((metric) => Math.round(metric.value * progress)));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(tick);
        }
      };

      animationFrame = requestAnimationFrame(tick);
    };

    if (!("IntersectionObserver" in window)) {
      setValues(metrics.map((metric) => metric.value));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        animate();
        observer.disconnect();
      },
      { threshold: 0.5 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="section metrics-section" ref={sectionRef}>
      {metrics.map((metric, index) => (
        <div className="metric" key={metric.label}>
          <strong data-count={metric.value}>{values[index]}</strong>
          <span>{metric.label}</span>
        </div>
      ))}
    </section>
  );
}

export default MetricsSection;
