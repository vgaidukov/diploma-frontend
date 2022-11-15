import { Link } from 'react-router-dom';

import "./EntranceForm.css"
import '../Link/Link.css'
import '../Button/Button.css'
import Form from '../Form/Form'

function EntranceForm(
  { children,
    title,
    submitButtonName,
    submitButtonNameOnLoading,
    isLoading,
    text,
    linkText,
    onSubmit,
    linkTo
  }
) {
  return (
    <section className="entrance-form">
      <h2 className="entrance-form__titile">{title}</h2>
      <Form
        className="entrance"
        onSubmit={onSubmit}
      >
        {children}
        <button
          className={`button entrance-form__submit-button`}
          type="submit"
        // onClick={onSubmit}
        >
          {!isLoading ? submitButtonName : submitButtonNameOnLoading}
        </button>
      </Form>
      <p className="entrance-form__text">{text}
        <Link className="link entrance-form__link-to-login" to={linkTo}>{linkText}</Link>
      </p>
    </section>
  );
}

export default EntranceForm;