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
            <p className="student__description">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
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
