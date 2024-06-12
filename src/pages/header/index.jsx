import Container from '../../layout/container'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import sushi from '../../images/sliderimage-1.jpg'
import sets from '../../images/sliderimage-2.jpg'
import ninjaGirl from '../../images/sliderimage-3.jpg'
import sushis from '../../images/sliderimage-4.jpg'
import styles from './header.module.scss'

function Header() {
  return (
    
      <Container>
        <div className={styles.header}>
            <Swiper
            pagination={true}
            modules={[Autoplay,Pagination]}
            autoplay={{
              delay:5000,
              disableOnInteraction: false,
          }}
            className={styles.header__swiper}>

              <SwiperSlide className={styles.header__slide}>
                  <div className={styles.header__content}>
                          <h1 className={styles.header__title}>Ninja Sushi в Киеве! Пока только на левом берегу</h1>

                          <p className={styles.header__text}>Доставку делаем с 10:00 до 19:30</p>
                          <button className={styles.header__button}>Перейти к новости</button>

                  </div>

                  <img src={sushi} alt="image" className={styles.header__image}/>
              </SwiperSlide>
              <SwiperSlide className={styles.header__slide}>
                  <div className={styles.header__content}>
                          <h1 className={styles.header__title}>Ninja Sushi в Киеве! Пока только на левом берегу</h1>

                          <p className={styles.header__text}>Доставку делаем с 10:00 до 19:30</p>
                          <button className={styles.header__button}>Перейти к новости</button>

                  </div>

                  <img src={sets} alt="image" className={styles.header__image}/>
              </SwiperSlide>
              <SwiperSlide className={styles.header__slide}>
                  <div className={styles.header__content}>
                          <h1 className={styles.header__title}>Ninja Sushi в Киеве! Пока только на левом берегу</h1>

                          <p className={styles.header__text}>Доставку делаем с 10:00 до 19:30</p>
                          <button className={styles.header__button}>Перейти к новости</button>

                  </div>

                  <img src={ninjaGirl} alt="image" className={styles.header__image}/>
              </SwiperSlide>
              <SwiperSlide className={styles.header__slide}>
                  <div className={styles.header__content}>
                          <h1 className={styles.header__title}>Ninja Sushi в Киеве! Пока только на левом берегу</h1>

                          <p className={styles.header__text}>Доставку делаем с 10:00 до 19:30</p>
                          <button className={styles.header__button}>Перейти к новости</button>

                  </div>

                  <img src={sushis} alt="image" className={styles.header__image}/>
              </SwiperSlide>


            </Swiper>

        </div>
      </Container>
    
  )
}

export default Header