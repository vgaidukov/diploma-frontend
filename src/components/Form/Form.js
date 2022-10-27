import "./Form.css";

function Form({ children, className }) {
  return (
    <form className={`form ${className}`}>
      {children}
    </form>
  );
}

export default Form;
