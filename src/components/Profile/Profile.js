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
      <h2 className="profile__greeting">Привет, Вадим!</h2>
      <Form
        className={"form_profile"}
        onSubmit={submitButtonHandler}
      >
        <label className="profile__label">
          Имя
          <Input
            placeholder={"Вадим"}
            active={isEditMode}
          />
        </label>
        <label className="profile__label">
          E-mail
          <Input
            placeholder={"vgaidukov@gmail.com"}
            active={isEditMode}
          />
        </label>
        <button
          className={`button profile__button`}
          type="submit"
          onClick={submitButtonHandler}
        >
          {!isEditMode ? "Редактировать" : "Сохранить"}
        </button>
      </Form>
      <Link className="link profile__exit" to="/login">Выйти из аккаунта</Link>
    </section >
  );
}

export default Profile;