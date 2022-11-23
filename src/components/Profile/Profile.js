import { Link } from 'react-router-dom';
import { useState } from 'react';

import './Profile.css'
import '../Link/Link.css'
import '../Button/Button.css'
import Form from '../Form/Form'
import Label from '../Label/Label'
import Input from '../Input/Input'

function Profile() {
  const [isEditMode, setIsEditMode] = useState(false);

  const submitButtonHandler = (e) => {
    e.preventDefault();
    setIsEditMode(!isEditMode);
  }

  return (
    <section className="profile">
      <div className="profile__container">
        <h2 className="profile__title">Привет, Вадим!</h2>
        <Form
          className={"profile"}
          onSubmit={submitButtonHandler}
        >
          <Label className="profile">
            Имя
            <Input
              className={`profile ${isEditMode && "input_profile_active"}`}
              placeholder={"Вадим"}
              disabled={!isEditMode}
              type={"text"}
            />
          </Label>
          <Label className="profile">
            E-mail
            <Input
              className={`profile ${isEditMode && "input_profile_active"}`}
              placeholder={"vgaidukov@gmail.com"}
              disabled={!isEditMode}
              type={"email"}
            />
          </Label>
          <button
            className={`button profile__submit-button`}
            type="submit"
            onClick={submitButtonHandler}
          >
            {!isEditMode ? "Редактировать" : "Сохранить"}
          </button>
        </Form>
        <Link className="link profile__exit-button" to="/login">Выйти из аккаунта</Link>
      </div>
    </section >
  );
}

export default Profile;