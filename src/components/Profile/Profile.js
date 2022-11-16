import '../Link/Link.css'
import '../Button/Button.css'
import './Profile.css'

import { useEffect, useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { EMAIL_PATTERN } from '../../constants/constants';
import { NAME_PATTERN } from '../../constants/constants';

import Form from '../Form/Form'
import Label from '../Label/Label'
import Input from '../Input/Input'
import Preloader from '../Preloader/Preloader';

function Profile({
  onEditProfile,
  isLoading,
  onSignOut,
  errorMessage,
  handleErrorMessage
}) {
  const { values, handleChange, setValues, isValid, setIsValid } = useForm({});
  const { currentUser } = useContext(CurrentUserContext);

  const submitButtonHandler = (e) => {
    e.preventDefault();
    onEditProfile({
      name: values.name,
      email: values.email
    })
      .then(() => setIsValid(false))
      .catch((result) => {
        result.json()
          .then((err) =>
            (result.status && err.message)
              ? console.log(result.status + ": " + err.message)
              : console.log('Что-то пошло не так'));
      })
  }

  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email
    })
  }, [currentUser]);

  useEffect(() => {
    handleErrorMessage("");
  }, []);

  return (
    <section className="profile">
      <Preloader isLoading={isLoading} />
      <div className={`profile__container ${isLoading && "profile__container_hidden"}`}>
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <Form
          className={"profile form"}
          onSubmit={submitButtonHandler}
        >
          <Label className="profile ">
            Имя
            <Input
              id="name"
              name="name"
              type="text"
              title="латиница, кириллица, пробел или дефис"
              className={` input_profile`}
              value={values.name}
              onChange={handleChange}
              minLength="2"
              maxLength="30"
              required={true}
              autocomplete="off"
              pattern={NAME_PATTERN}
            />
          </Label>
          <Label className="profile">
            E-mail
            <Input
              id="email"
              name="email"
              type="email"
              title="электронная почта"
              className={`profile input_profile_active`}
              value={values.email}
              onChange={handleChange}
              required={true}
              autocomplete="off"
              pattern={EMAIL_PATTERN}

            />
          </Label>
          <div className="profile__error-container">
            <p className="profile__error">
              {errorMessage}
            </p>
          </div>
          <button
            className={`button profile__submit-button`}
            type="submit"
            disabled={!(isValid
              && (currentUser.email !== values.email
                || currentUser.name !== values.name))}
          >
            {!isLoading
              ? "Редактировать"
              : "Сохранение..."
            }
          </button>
        </Form>
        <button className="button profile__exit-button" onClick={onSignOut}>Выйти из аккаунта</button>
      </div>
    </section >
  );
}

export default Profile;