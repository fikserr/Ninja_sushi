import { useEffect, useState } from 'react';
import styles from './sushi.module.scss';
import Container from '../../layout/container';
import Card from '../card';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../store/dataSlice';
import { useLocation, useNavigate, } from 'react-router-dom'

function Sushi() {
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.data);
  const [seeAll, setSeeAll] = useState(93);
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location,products)
  useEffect(() => {
    dispatch(getData('https://fayzullaev99.github.io/dasdawedawdadfsushi-data/data.json'));
    if (!products) {
      navigate('/error');
    }
  }, [dispatch,products]);
  
  return (
    <div className={styles.sushi}>
      <Container className={styles.sushi__container}>
        <div className={styles.sushi__content}>
          <h1 className={styles.sushi__title}>Суши</h1>
          <button className={styles.sushi__button} onClick={() => setSeeAll(96)}>Смотреть все</button>
        </div>
        <div className={styles.sushi__cards}>
          {
            products?.slice(85, seeAll).map((item) => (
              <Card key={item.id} data={item} />
            ))
          }
        </div>
      </Container>
    </div>
  );
}

export default Sushi;
