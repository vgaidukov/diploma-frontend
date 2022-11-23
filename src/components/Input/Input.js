import "./Input.css";

function Input({
  placeholder,
  className,
  disabled,
  type,
  minLength
}) {
  return (
    <input
      className={`input input_${className}`}
      placeholder={placeholder}
      type={type}
      disabled={disabled}
      minLength={minLength}
    />
  );
}

export default Input;
