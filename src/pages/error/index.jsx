import { Link } from 'react-router-dom'
import Container from '../../layout/container'
import errorImage from '../../images/error.png'
import styles from './error.module.scss'
import { useEffect } from 'react';
import { getData } from '../../store/dataSlice';
import { useDispatch, useSelector } from 'react-redux';

function Error() {
  const dispatch = useDispatch();
  const {error} = useSelector(state => state.data);
  console.log(error);
    useEffect(() => {
      dispatch(getData('https://fayzullaev99.github.io/sushi-data/data.json'));
    }, [dispatch]);
  return (
    <div className={styles.error}>
      <Container className={styles.error__conatiner}>
        <div className={styles.error__content}>
          <img src={errorImage} alt="" className={styles.error__image} />

          <h2 className={styles.error__title}>
          Ошибка 404. Что-то пошло не так.
          </h2>
            <p className={styles.error__text}>Страница, которую вы ищите, временноне доступна или ее еже нет</p>
          <Link className={styles.error__link}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.2 1.63437C5.38885 1.38257 5.68524 1.23438 6 1.23438H18C18.3148 1.23438 18.6111 1.38257 18.8 1.63437L21.8 5.63438C21.9298 5.80747 22 6.018 22 6.23438V20.2344C22 21.03 21.6839 21.7931 21.1213 22.3557C20.5587 22.9183 19.7957 23.2344 19 23.2344H5C4.20435 23.2344 3.44129 22.9183 2.87868 22.3557C2.31607 21.7931 2 21.03 2 20.2344V6.23438C2 6.018 2.07018 5.80747 2.2 5.63438L5.2 1.63437ZM6.5 3.23438L4 6.56771V20.2344C4 20.4996 4.10536 20.7539 4.29289 20.9415C4.48043 21.129 4.73478 21.2344 5 21.2344H19C19.2652 21.2344 19.5196 21.129 19.7071 20.9415C19.8946 20.7539 20 20.4996 20 20.2344V6.56771L17.5 3.23438H6.5Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 6.23438C2 5.68209 2.44772 5.23438 3 5.23438H21C21.5523 5.23438 22 5.68209 22 6.23438C22 6.78666 21.5523 7.23438 21 7.23438H3C2.44772 7.23438 2 6.78666 2 6.23438Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 9.23438C8.55228 9.23438 9 9.68209 9 10.2344C9 11.03 9.31607 11.7931 9.87868 12.3557C10.4413 12.9183 11.2044 13.2344 12 13.2344C12.7956 13.2344 13.5587 12.9183 14.1213 12.3557C14.6839 11.7931 15 11.03 15 10.2344C15 9.68209 15.4477 9.23438 16 9.23438C16.5523 9.23438 17 9.68209 17 10.2344C17 11.5605 16.4732 12.8322 15.5355 13.7699C14.5979 14.7076 13.3261 15.2344 12 15.2344C10.6739 15.2344 9.40215 14.7076 8.46447 13.7699C7.52678 12.8322 7 11.5605 7 10.2344C7 9.68209 7.44772 9.23438 8 9.23438Z"
                fill="white"
              />
            </svg>
            Оформить повторно
          </Link>
        </div>
      </Container>
    </div>
  )
}

export default Error