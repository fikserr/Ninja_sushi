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
  const {error,sushi} = useSelector(state => state.data);
  const [seeAll, setSeeAll] = useState(8);
  const navigate = useNavigate()
  console.log(sushi);
  useEffect(() => {
    dispatch(getData('https://fayzullaev99.github.io/sushi-data/data.json'));
  }, [dispatch,error]);

  useEffect(() => {
    
  }, [sushi]);


  

  if (error || !sushi) return navigate('/error');
  return (
    <div className={styles.sushi}>
      <Container className={styles.sushi__container}>
        <div className={styles.sushi__content}>
          <h1 className={styles.sushi__title}>Суши</h1>
          <button className={styles.sushi__button} onClick={() => setSeeAll(13)}>Смотреть все</button>
        </div>
        <Filter/> 
        <div className={styles.sushi__cards}>
          {
            sushi.slice(0,seeAll).map((item) => (
              <Card key={item.id} data={item} />
            ))
          }
        </div>
      </Container>
    </div>
  );
}

export default Sushi;
