function Toggle({ enabled, label, onToggle }) {
  return (
    <button
      className={`toggle${enabled ? " is-on" : ""}`}
      type="button"
      aria-label={`${label} ${enabled ? "enabled" : "disabled"}`}
      onClick={onToggle}
    ></button>
  );
}

export default Toggle;
