import { Link } from "react-router-dom";
import "../Link/Link.css";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <div className="footer__conteiner">
        <p className="footer__text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__bottom">
          <p className="footer__copyright">&#169; 2022</p>
          <div className="footer__links">
            <Link className="link footer__link" to="#">
              Яндекс.Практикум
            </Link>
            <Link className="link footer__link" to="#">
              Github
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
