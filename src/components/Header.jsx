import { useEffect, useRef, useState } from "react";
import { navLinks } from "../data/content.js";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeMenu();
    };

    const handlePointerDown = (event) => {
      if (navRef.current?.contains(event.target)) return;
      closeMenu();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("hashchange", closeMenu);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("hashchange", closeMenu);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  return (
    <header className="site-header">
      <nav
        className={`nav${isOpen ? " is-open" : ""}`}
        aria-label="Primary navigation"
        ref={navRef}
      >
        <a className="brand" href="#top" aria-label="NovaLedger home" onClick={closeMenu}>
          <span className="brand-mark">N</span>
          <span>NovaLedger</span>
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="nav-menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="nav-menu" id="nav-menu">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <a className="ghost-link" href="#contact" onClick={closeMenu}>
            Sign in
          </a>
          <a className="button button-small" href="#contact" onClick={closeMenu}>
            Book demo
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
