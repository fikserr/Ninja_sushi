import styles from './map.module.scss'
import map from '../../images/map.png'

function Map() {
  return (
    <div className={styles.map}>
      <h1 className={styles.map__title}>Каждая кухня работает со своей зоной доставки, чтобы привезти еду максимально быстро</h1>
          <div className={styles.map__deliver}>
              <div className={styles.map__deliver_content}>
                <div className={styles.map__deliver_content_green}></div>
                <span>—</span>
                <p className={styles.map__deliver_content_text}>Бесплатная доставка</p>
              </div>  
              <div className={styles.map__deliver_content}>
                <div className={styles.map__deliver_content_yellow}></div>
                <span>—</span>
                <p className={styles.map__deliver_content_text}>Платная доставка</p>
              </div>
              <div className={styles.map__deliver_content}>
                <div className={styles.map__deliver_content_red}></div>
                <span>—</span>
                <p className={styles.map__deliver_content_text}>Доставку не делаем</p>
              </div>


          </div>

          <img src={map} alt="map image" className={styles.map__image} />
    </div>
  )
}

export default Map