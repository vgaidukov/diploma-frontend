import { Link } from 'react-router-dom';
import { useState } from 'react';

import './Profile.css'
import '../Link/Link.css'
import '../Button/Button.css'
import Form from '../Form/Form'
import Input from '../Input/Input'

function Profile() {
  const [isEditMode, setIsEditMode] = useState(false);

  const submitButtonHandler = (e) => {
    e.preventDefault();
    setIsEditMode(!isEditMode);
  }

  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Вадим!</h2>
      <Form
        className={"form_profile"}
        onSubmit={submitButtonHandler}
      >
        <label className="profile__label">
          Имя
          <Input
            className={`input_profile ${isEditMode && "input_profile_active"}`}
            placeholder={"Вадим"}
            disabled={!isEditMode}
            type={"text"}
          />
        </label>
        <label className="profile__label">
          E-mail
          <Input
            className={`input_profile ${isEditMode && "input_profile_active"}`}
            placeholder={"vgaidukov@gmail.com"}
            disabled={!isEditMode}
            type={"email"}
          />
        </label>
        <button
          className={`button profile__submit-button`}
          type="submit"
          onClick={submitButtonHandler}
        >
          {!isEditMode ? "Редактировать" : "Сохранить"}
        </button>
      </Form>
      <Link className="link profile__exit-button" to="/login">Выйти из аккаунта</Link>
    </section >
  );
}

export default Profile;