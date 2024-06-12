import Container from "../../layout/container";
import app from '../../images/program.png'
import styles from "./program.module.scss";
import Buttons from "../../ui/buttons";

function Program() {
  return (
    <Container className={styles.program__container}>
      <div className={styles.program}>
        <div className={styles.program__content}>
          <h1 className={styles.program__title}>
            Ниндзя - это семья.Скачивайте наше приложение
          </h1>
          <p className={styles.program__text}>
            Станьте ниндзя! Будьте в курсе всех новинок и никогда не оставаться
            голодным.
          </p>

          <Buttons/>
        </div>

        <img src={app} alt="" className={styles.program__image} />
      </div>
    </Container>
  );
}

export default Program;
