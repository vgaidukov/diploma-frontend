import "./AboutMe.css";
import "../Link/Link.css";
import studentPhoto from "../../images/student-photo.png";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <div className="about-me__container">
        <div className="about-me__header">
          <h2 className="about-me__title">Студент</h2>
          <div className="about-me__underline"></div>
        </div>
        <div className="student">
          <div className="student__info">
            <h3 className="student__name">Вадим</h3>
            <p className="student__specialization">
              Фронтенд-разработчик, 34 года
            </p>
            <div className="student__description">
              <p>
                Я родился в Алтайском крае, в старших классах с семьей переехал
                в г. Рыбинск Ярославской области, закончил Рыбинский
                государственный авиационный технический университет по
                специальности Вычислительные машины, комплексы, системы и сети.
              </p>
              <p>
                Долгое время проработал в области строительства, переехал в
                Москву и почувствовал желание кардинально сменить сферу
                деятельности. Сохранив интерес и некоторые навыки
                программирования с институтских времен, решил снова окунуться в
                эту область. В 2022 году успешно окончил курс по веб-разработке
                в Яндекс.Практикуме.
              </p>
              <p>
                Сейчас нахожусь в поиске новой работы и для своего развития
                участвую в двух проектах (обновление интернет-магазина и
                создание социального сервиса), разрабатываемых совместно со
                своими друзьями.
              </p>
            </div>
            <a
              className="link student__link"
              href="https://github.com/vgaidukov"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
          <img className="student__photo" src={studentPhoto} alt="Фото" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
