import { useHistory } from "react-router-dom";

import "./NotFound.css"
import "../Button/Button.css"

function NotFound() {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  }

  return (
    <div className="not-found">
      <div className="not-found__container">
        <p className="not-found__status">404</p>
        <p className="not-found__message">Страница не найдена</p>
      </div>
      <button className="button not-found__button" type="button" onClick={handleClick}>Назад</button>
    </div>
  );
}

export default NotFound;