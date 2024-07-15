import { useEffect, useState } from 'react'
import styles from './beverages.module.scss'
import Container from '../../layout/container'
import Card from '../card'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { getData } from '../../store/dataSlice'

function Beverages() {
  const dispatch = useDispatch();
  const {drink,error} = useSelector(state => state.data);
  const [seeAll, setSeeAll] = useState(8);
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getData('https://fayzullaev99.github.io/sushi-data/data.json'));
  }, [dispatch,error]);
  

  if (error || !drink) return navigate('/error');
  return (
    <div className={styles.beverages}>
      <Container className={styles.beverages__container}>
          <div className={styles.beverages__content}>

          <h1 className={styles.beverages__title}>Напитки</h1>

          <button className={styles.beverages__button} onClick={()=> setSeeAll(24)}>Смотреть все</button>
          </div>

          <div className={styles.beverages__cards}>


           {
              drink.slice(1,seeAll).map((item) => (
                  <Card key={item.id} data={item}/>
              ))
            } 
          </div>




      </Container>
    </div>
  )
}

export default Beverages