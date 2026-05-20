function Toggle({ enabled, label, onToggle }) {
  return (
    <button
      className={`toggle${enabled ? " is-on" : ""}`}
      type="button"
      role="switch"
      aria-checked={enabled}
      aria-label={`${label} ${enabled ? "enabled" : "disabled"}`}
      onClick={onToggle}
    ></button>
  );
}

export default Toggle;
