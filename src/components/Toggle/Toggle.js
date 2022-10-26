import "./Toggle.css";

function Toggle() {
  return (
    <div className="toggle">
      <input type="checkbox" className="toggle-checkbox" id="toggle-checkbox" />
      <label className="toggle-label" htmlFor="toggle-checkbox">
        <span className="toggle-inner"></span>
        <span className="toggle-slider"></span>
      </label>
    </div>
  );
}

export default Toggle;
