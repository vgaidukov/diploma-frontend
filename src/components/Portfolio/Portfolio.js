import "../Link/Link.css";
import "../List/List.css";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="list portfolio__links">
          <li className="portfolio__item">
            <a
              className="link portfolio__link"
              href="https://vgaidukov.github.io/how-to-learn/"
              target="_blank"
              rel="noreferrer"
            >
              <p className="portfolio__link-name">Статичный сайт</p>
              <p className="portfolio__arrow">&#8599;</p>
            </a>
          </li>
          <li className="portfolio__item">
            <a
              className="link portfolio__link"
              href="https://vgaidukov.github.io/russian-travel/"
              target="_blank"
              rel="noreferrer"
            >
              <p className="portfolio__link-name">Адаптивный сайт</p>
              <p className="portfolio__arrow">&#8599;</p>
            </a>
          </li>
          <li className="portfolio__item">
            <a
              className="link portfolio__link"
              href="https://vgaidukov.students.nomoredomains.icu/"
              target="_blank"
              rel="noreferrer"
            >
              <p className="portfolio__link-name">Одностраничное приложение</p>
              <p className="portfolio__arrow">&#8599;</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
