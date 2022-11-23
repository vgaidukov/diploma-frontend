import "./Label.css"

function Label({ children, className }) {
  return (
    <label className={`label label_${className}`}>
      {children}
    </label>
  );
}

export default Label;