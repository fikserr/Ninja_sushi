import { useEffect, useState } from 'react';
import styles from './sushi.module.scss';
import Container from '../../layout/container';
import Card from '../card';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../store/dataSlice';
import { useNavigate } from 'react-router-dom'
import Filter from '../filter';

function Sushi() {
  const dispatch = useDispatch();
  const {products,error} = useSelector(state => state.data);
  const [seeAll, setSeeAll] = useState(93);
  const navigate = useNavigate()
  
  useEffect(() => {
    dispatch(getData('https://fayzullaev99.github.io/sushi-data/data.json'));
  }, [dispatch,error]);
  

  if (error || !products) return navigate('/error');
  return (
    <div className={styles.sushi}>
      <Container className={styles.sushi__container}>
        <div className={styles.sushi__content}>
          <h1 className={styles.sushi__title}>Суши</h1>
          <button className={styles.sushi__button} onClick={() => setSeeAll(96)}>Смотреть все</button>
        </div>
        <Filter/> 
        <div className={styles.sushi__cards}>
          {
            products.slice(85, seeAll).map((item) => (
              <Card key={item.id} data={item} />
            ))
          }
        </div>
      </Container>
    </div>
  );
}

export default Sushi;
