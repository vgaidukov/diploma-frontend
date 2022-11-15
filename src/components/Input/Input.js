import "./Input.css";

function Input({
  id,
  name,
  type,
  className,
  placeholder,
  value,
  onChange,
  minLength,
  disabled,
  required
}) {

  return (
    <input
      id={id}
      name={name}
      type={type}
      className={`input input_${className}`}
      placeholder={placeholder}
      value={value || ""}
      onChange={onChange}
      minLength={minLength}
      disabled={disabled}
      required={required}
    />
  );
}

export default Input;
