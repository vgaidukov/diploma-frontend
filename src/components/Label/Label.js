import "./Label.css"

function Label({ children }) {
  return (
    <label className="label">
      {children}
    </label>
  );
}

export default Label;