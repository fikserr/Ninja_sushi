import { Link, NavLink } from "react-router-dom";
import Container from "../../layout/container";
import styles from "./about.module.scss";

function About() {
  return (
    <Container className={styles.about__container}>
      <div className={styles.about}>
        <p className={styles.about__text}>
          В Сети полно всевозможных сервисов учета, начиная от учета времени или
          калорий, заканчивая учетом финансов. А вот сервиса учета инструментов
          до сих пор не было. Теперь – есть. Вообще, конечно, идея учета
          рабочего инструмента, расходных материалов и комплект... Теперь –
          есть.
        </p>
        <NavLink to='/about' className={styles.about__link}>
          Читать больше{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.40944 6.91205C4.73488 6.58661 5.26252 6.58661 5.58795 6.91205L9.9987 11.3228L14.4094 6.91205C14.7349 6.58661 15.2625 6.58661 15.588 6.91205C15.9134 7.23748 15.9134 7.76512 15.588 8.09056L10.588 13.0906C10.2625 13.416 9.73488 13.416 9.40944 13.0906L4.40944 8.09056C4.08401 7.76512 4.08401 7.23748 4.40944 6.91205Z"
                fill="#00CC2D"
              />
            </svg>
          </span>
        </NavLink>
      </div>
    </Container>
  );
}

export default About;
