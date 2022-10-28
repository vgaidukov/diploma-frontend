import "./Input.css";

function Input({
  placeholder,
  className,
  disabled,
  type,
}) {
  return (
    <input
      className={`input input_${className}`}
      placeholder={placeholder}
      type={type}
      disabled={disabled}
    />
  );
}

export default Input;
