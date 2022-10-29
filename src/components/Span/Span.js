import "./Span.css"

function Span({ message }) {
  return (
    <span className="input-error input-error_entrance profile-name-input-error">
      {message}
    </span>
  );
}

export default Span;