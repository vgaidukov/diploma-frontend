import { Link } from 'react-router-dom';

import "./EntranceForm.css"
import '../Link/Link.css'
import '../Button/Button.css'
import Form from '../Form/Form'
import { useEffect } from 'react';
import { useState } from 'react';

function EntranceForm(
  {
    children,
    title,
    submitButtonName,
    submitButtonNameOnLoading,
    isLoading,
    text,
    linkText,
    onSubmit,
    linkTo,
    isValid,
    errorMessage,
    handleErrorMessage
  }
) {
  // const [isVisible, setIsVisible] = useState("false");

  // useEffect(() => {
  //   console.log("oshibka");
  //   // if (errorMessage !== "") {
  //   //   setIsVisible(true);
  //   //   setTimeout(() => {
  //   //     handleErrorMessage("");
  //   //     setIsVisible(false)
  //   //   }, 4000)
  //   // }
  // }, [errorMessage]);

  return (
    <section className="entrance-form">
      <h2 className="entrance-form__titile">{title}</h2>
      <Form
        className="entrance"
        onSubmit={onSubmit}
      >
        {children}
        <div className="entrance-form__error-container">
          <p className="entrance-form__error">
            {/* <p className={`${isVisible && "entrance-form__error"}`}> */}
            {errorMessage}
          </p>
        </div>
        <button
          className={`button entrance-form__submit-button ${!isValid && "button_disabled"}`}
          type="submit"
          disabled={!isValid}
        // onClick={onSubmit}
        >
          {!isLoading ? submitButtonName : submitButtonNameOnLoading}
        </button>
      </Form>
      <p className="entrance-form__text">{text}
        <Link className="link entrance-form__link-to-login" to={linkTo}>{linkText}</Link>
      </p>
    </section >
  );
}

export default EntranceForm;