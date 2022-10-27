import "./Input.css";

function Input({ placeholder, active }) {
  return (
    <input
      className={`input ${active && "input_active"}`}
      placeholder={placeholder}
      type="text"
      disabled={!active}
    />
  );
}

export default Input;
