import '../Link/Link.css'
import '../Button/Button.css'
import './Profile.css'

import { useState, useEffect, useContext } from 'react';
import { useForm } from '../../hooks/hooks';
import { CurrentUserContext } from '../../context/CurrentUserContext';

import Form from '../Form/Form'
import Label from '../Label/Label'
import Input from '../Input/Input'
import Preloader from '../Preloader/Preloader';

function Profile({
  onEditProfile,
  isLoading,
  onSignOut
}) {
  const [isEditMode, setIsEditMode] = useState(false);
  const { values, handleChange, setValues } = useForm({});
  const { currentUser } = useContext(CurrentUserContext);

  const submitButtonHandler = (e) => {
    e.preventDefault();
    if (isEditMode) {
      onEditProfile({
        name: values.name,
        email: values.email
      })
        .then(setIsEditMode(!isEditMode))
        .catch((result) => {
          result.json()
            .then((err) =>
              (result.status && err.message)
                ? console.log(result.status + ": " + err.message)
                : console.log('Что-то пошло не так'));
        });
    } else {
      setIsEditMode(!isEditMode);
    }
  }

  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email
    })
  }, [currentUser]);

  return (
    <section className="profile">
      <Preloader isLoading={isLoading} />
      <div className={`profile__container ${isLoading && "profile__container_hidden"}`}>
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <Form
          className={"profile"}
          onSubmit={submitButtonHandler}
        >
          <Label className="profile">
            Имя
            <Input
              id="name"
              name="name"
              type="text"
              className={`profile ${isEditMode && "input_profile_active"}`}
              placeholder={currentUser.name}
              value={values.name}
              onChange={handleChange}
              minLength="0"
              disabled={!isEditMode}
              required={true}
            />
          </Label>
          <Label className="profile">
            E-mail
            <Input
              id="email"
              name="email"
              type="email"
              className={`profile ${isEditMode && "input_profile_active"}`}
              placeholder={currentUser.email}
              value={values.email}
              onChange={handleChange}
              minLength="0"
              disabled={!isEditMode}
              required={true}
            />
          </Label>
          <button
            className={`button profile__submit-button`}
            type="submit"
          // onClick={submitButtonHandler}
          >
            {!isEditMode
              ? "Редактировать"
              : !isLoading
                ? "Сохранить"
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