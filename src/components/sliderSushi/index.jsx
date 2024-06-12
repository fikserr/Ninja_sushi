import Container from "../../layout/container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import philadelphia from '../../images/sliderSushiImage.png'
import styles from "./sliderSushi.module.scss";
import './style.css'

function SliderSushi() {
  return (
    <div className={styles.slidersushi}>
      <Container >
        <Swiper
          navigation={true}
          pagination={true}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay:100000,
            disableOnInteraction: false,}}
          className={styles.slidersushi__swiper}
        >
          <SwiperSlide className={styles.slidersushi__slider}>
                    <h2 className={styles.slidersushi__title}>Филадельфия <br /> с лососем</h2>
                    <p className={styles.slidersushi__text}>Сир вершковий, шиітаке <br /> теріякі, краб-крем, лосось</p>
                    <div>
                        <button className={styles.slidersushi__buttons}>В корзину</button>
                        <p className={styles.slidersushi__price}>190 <span>грн</span></p>
                    </div>

                    <img src={philadelphia} alt="image" className={styles.slidersushi__image} />
                    <p className={styles.slidersushi__bestWeek}>Лучшее предложение недели!</p>
          </SwiperSlide>
          <SwiperSlide className={styles.slidersushi__slider}>
                    <h2 className={styles.slidersushi__title}>Филадельфия <br /> с лососем</h2>
                    <p className={styles.slidersushi__text}>Сир вершковий, шиітаке <br /> теріякі, краб-крем, лосось</p>
                    <div>
                        <button className={styles.slidersushi__buttons}>В корзину</button>
                        <p className={styles.slidersushi__price}>190 <span>грн</span></p>
                    </div>

                    <img src={philadelphia} alt="image" className={styles.slidersushi__image} />
                    <p className={styles.slidersushi__bestWeek}>Лучшее предложение недели!</p>
          </SwiperSlide>
          <SwiperSlide className={styles.slidersushi__slider}>
                    <h2 className={styles.slidersushi__title}>Филадельфия <br /> с лососем</h2>
                    <p className={styles.slidersushi__text}>Сир вершковий, шиітаке <br /> теріякі, краб-крем, лосось</p>
                    <div>
                        <button className={styles.slidersushi__buttons}>В корзину</button>
                        <p className={styles.slidersushi__price}>190 <span>грн</span></p>
                    </div>

                    <img src={philadelphia} alt="image" className={styles.slidersushi__image} />
                    <p className={styles.slidersushi__bestWeek}>Лучшее предложение недели!</p>
          </SwiperSlide>
          <SwiperSlide className={styles.slidersushi__slider}>
                    <h2 className={styles.slidersushi__title}>Филадельфия <br /> с лососем</h2>
                    <p className={styles.slidersushi__text}>Сир вершковий, шиітаке <br /> теріякі, краб-крем, лосось</p>
                    <div>
                        <button className={styles.slidersushi__buttons}>В корзину</button>
                        <p className={styles.slidersushi__price}>190 <span>грн</span></p>
                    </div>

                    <img src={philadelphia} alt="image" className={styles.slidersushi__image} />
                    <p className={styles.slidersushi__bestWeek}>Лучшее предложение недели!</p>
          </SwiperSlide>


        </Swiper>
      </Container>
    </div>
  );
}

export default SliderSushi;
