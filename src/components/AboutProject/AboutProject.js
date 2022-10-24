import "../List/List.css";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project">
      <div className="about-project-container">
        <div className="about-project__header">
          <h2 className="about-project__title">О проекте</h2>
          <div className="about-project__underline"></div>
        </div>
        <ul className="project-info list">
          <li className="project-info__item">
            <h3 className="project-info__title">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="project-info__description">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </li>
          <li className="project-info__item">
            <h3 className="project-info__title">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="project-info__description">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>
        <div className="project-timeline">
          <p className="project-timeline__duration project-timeline__duration_backend">
            1 неделя
          </p>
          <p className="project-timeline__duration project-timeline__duration_frontend">
            4 недели
          </p>
          <p className="project-timeline__title">Back-end</p>
          <p className="project-timeline__title">Front-End</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
