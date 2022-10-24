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
            <a
              className="link footer__link"
              href="https://practicum.yandex.ru/"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
            <a
              className="link footer__link"
              href="https://github.com/vgaidukov"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
