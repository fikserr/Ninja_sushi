import { useEffect, useState } from 'react';
import Container from '../../layout/container';
import Card from '../card';
import styles from './sets.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../store/dataSlice';
import { useNavigate } from 'react-router';


function Sets() {
  const dispatch = useDispatch();
  const {products,error} = useSelector(state => state.data);
  const [seeAll, setSeeAll] = useState(8);
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getData('https://fayzullaev99.github.io/sushi-data/data.json'));
  }, [dispatch,error]);
  

  if (error || !products) return navigate('/error');
  return (
    <div className={styles.sets}>
      <Container className={styles.sets__container}>
          <div className={styles.sets__content}>

          <h1 className={styles.sets__title}>Сеты</h1>

          <button className={styles.sets__button} onClick={()=> setSeeAll(25)}>Смотреть все</button>
          </div>

          <div className={styles.sets__cards}>


           {
              products?.slice(0,seeAll).map((item) => (
                  <Card key={item.id} data={item}/>
              ))
            } 
          </div>




      </Container>
    </div>
  )
}

export default Sets