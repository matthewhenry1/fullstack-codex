import { useEffect, useRef } from "react";
import { metrics } from "../data/content.js";

function MetricsSection() {
  const sectionRef = useRef(null);
  const valueRefs = useRef([]);

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
      let lastRenderedProgress = -1;

      const renderValues = (progress) => {
        if (progress === lastRenderedProgress) return;
        lastRenderedProgress = progress;

        metrics.forEach((metric, index) => {
          if (!valueRefs.current[index]) return;
          valueRefs.current[index].textContent = Math.round(metric.value * progress);
        });
      };

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        renderValues(progress);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(tick);
        }
      };

      animationFrame = requestAnimationFrame(tick);
    };

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      metrics.forEach((metric, index) => {
        if (!valueRefs.current[index]) return;
        valueRefs.current[index].textContent = metric.value;
      });
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
          <strong data-count={metric.value}>
            <span
              ref={(element) => {
                valueRefs.current[index] = element;
              }}
            >
              0
            </span>
            {metric.suffix}
          </strong>
          <span>{metric.label}</span>
        </div>
      ))}
    </section>
  );
}

export default MetricsSection;
