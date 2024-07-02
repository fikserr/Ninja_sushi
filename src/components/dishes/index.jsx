import { useEffect, useState } from 'react'
import styles from './dishes.module.scss'
import Container from '../../layout/container'
import Card from '../card'
import { getData } from '../../store/dataSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

function Dishes() {
  const dispatch = useDispatch();
  const {products,error} = useSelector(state => state.data);
  const [seeAll, setSeeAll] = useState(153);
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getData('https://fayzullaev99.github.io/sushi-data/data.json'));
  }, [dispatch,error]);
  

  if (error || !products) return navigate('/error');
    return (
      <div className={styles.dishes}>
        <Container className={styles.dishes__container}>
            <div className={styles.dishes__content}>
  
            <h1 className={styles.dishes__title}>Напитки</h1>
  
            <button className={styles.dishes__button} onClick={()=> setSeeAll(156)}>Смотреть все</button>
            </div>
  
            <div className={styles.dishes__cards}>
  
  
             {
                products?.slice(145,seeAll).map((item) => (
                    <Card key={item.id} data={item}/>
                ))
              } 
            </div>
  
  
  
  
        </Container>
      </div>
    )
  }

export default Dishes