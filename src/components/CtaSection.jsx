import { useState } from "react";

function CtaSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedEmail = email.trim();

    if (!trimmedEmail) return;

    setMessage(`Thanks. We will follow up at ${trimmedEmail}.`);
    setEmail("");
  };

  return (
    <section className="cta-section" id="contact">
      <div>
        <p className="eyebrow">Ready to build</p>
        <h2>Give your team a cleaner way to launch and run financial products.</h2>
      </div>
      <form className="demo-form" onSubmit={handleSubmit}>
        <label>
          <span>Work email</span>
          <input
            type="email"
            name="email"
            placeholder="you@company.com"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <button className="button" type="submit">
          Request demo
        </button>
        <p className="form-message" role="status" aria-live="polite">
          {message}
        </p>
      </form>
    </section>
  );
}

export default CtaSection;
