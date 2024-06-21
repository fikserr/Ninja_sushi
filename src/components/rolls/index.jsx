import { useEffect, useState } from 'react';
import Container from '../../layout/container';
import styles from './rolls.module.scss'
import Card from '../card';
import Error from '../../pages/error';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../store/dataSlice';

function Rolls() {
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.data);
  const [seeAll,setSeeAll] = useState(34)
  useEffect(() => {
    dispatch(getData('https://fayzullaev99.github.io/sushi-data/data.json'));
  }, [dispatch]);

  if (!products) return <Error />;
  return (
    <div className={styles.rolls}>
      <Container className={styles.rolls__container}>
          <div className={styles.rolls__content}>

          <h1 className={styles.rolls__title}>Роллы</h1>

          <button className={styles.rolls__button} onClick={()=> setSeeAll(83)}>Смотреть все</button>
          </div>

          <div className={styles.rolls__cards}>


           {
              products.slice(26,seeAll).map((item) => (
                  <Card key={item.id} data={item}/>
              ))
            } 
          </div>




      </Container>
    </div>
  )
}

export default Rolls