import { useEffect, useState } from 'react';
import Container from '../../layout/container';
import styles from './rolls.module.scss'
import Card from '../card';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../store/dataSlice';
import { useNavigate } from 'react-router';
import Filter from '../filter';

function Rolls() {
  const dispatch = useDispatch();
  const {roll,error} = useSelector(state => state.data);
  const [seeAll, setSeeAll] = useState(8);
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getData('https://fayzullaev99.github.io/sushi-data/data.json'));
  }, [dispatch,error]);
  

  if (error || !roll) return navigate('/error');
  return (
    <div className={styles.rolls}>
      <Container className={styles.rolls__container}>
          <div className={styles.rolls__content}>

          <h1 className={styles.rolls__title}>Роллы</h1>

          <button className={styles.rolls__button} onClick={()=> setSeeAll(58)}>Смотреть все</button>
          </div>
            <Filter/>
          <div className={styles.rolls__cards}>


           {
              roll?.slice(1,seeAll).map((item) => (
                  <Card key={item.id} data={item}/>
              ))
            } 
          </div>




      </Container>
    </div>
  )
}

export default Rolls