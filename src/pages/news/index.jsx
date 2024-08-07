import { useDispatch, useSelector } from 'react-redux';
import styles from './news.module.scss'
import { useEffect } from 'react';
import { getData } from '../../store/dataSlice';
import Container from '../../layout/container';
import noImage from '../../images/noimage.jpg'
import Error from '../error';
import Footer from '../../components/footer';
import classNames from 'classnames';


function News() {
  const dispatch = useDispatch();
  const { news } = useSelector(state => state.data);
  useEffect(() => {
    dispatch(getData('https://fayzullaev99.github.io/sushi-data/data.json'));
  }, [dispatch]);
  if (!news) return <Error/>
  return (
     
    <div className={styles.news}>
      <Container className={styles.news__container}>
        <h1 className={styles.news__title}>Новости</h1>
        <div className={styles.news__top}>
          <div className={styles.news__btns}>
            <button className={styles.news__btn}>Все</button>
            <button className={styles.news__btn}>Обновления в меню</button>
            <button className={styles.news__btn}>SushiKino</button>
          </div>

          <div className={styles.news__search}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4ZM2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11Z" fill="#686870" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9413 15.9413C16.3319 15.5508 16.965 15.5508 17.3555 15.9413L21.7055 20.2913C22.0961 20.6819 22.0961 21.315 21.7055 21.7055C21.315 22.0961 20.6819 22.0961 20.2913 21.7055L15.9413 17.3555C15.5508 16.965 15.5508 16.3319 15.9413 15.9413Z" fill="#686870" />
            </svg>
            <input type="text" placeholder='Введите ключевые слова' />
          </div>

        </div>

        <div className={styles.news__content}>
          {
            news.slice(0,10).map((item)=>(
              <div className={classNames(item.id == 201 || item.id == 202 ? styles.news__big_images : styles.news__images)} key={item.id}>
                  <img src={!item.images ? noImage : item.images} alt={item.name}  className={classNames(item.id == 201 || item.id == 202 ? styles.news__big_image : styles.news__image)}/>
                    <h2 className={styles.news__images_title}>{item.name}</h2>
                  <div>
                      <button className={styles.news__images_detail}>Подробнее</button>
                      <p className={styles.news__images_date}>{item.date}</p>
                  </div>

              </div>
            ))
          }
        </div>




      </Container>




      <Footer/>
    </div>

    
  )
}

export default News