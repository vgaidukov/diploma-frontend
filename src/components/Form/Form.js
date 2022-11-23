import "./Form.css";

function Form({ children, className, onSubmit }) {
  return (
    <form
      className={`form form_${className}`}
      onSubmit={onSubmit}
    >
      {children}
    </form >
  );
}

export default Form;
