import "./Input.css";

function Input({ placeholder, className, disabled, type }) {
  return (
    <input
      className={`input ${className}`}
      placeholder={placeholder}
      type={type}
      disabled={disabled}
    />
  );
}

export default Input;
