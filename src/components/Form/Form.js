import "./Form.css";

function Form({ children, className }) {
  return (
    <form className={`form form_${className}`}>
      {children}
    </form>
  );
}

export default Form;
