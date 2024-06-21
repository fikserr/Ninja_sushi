import { useEffect, useState } from 'react'
import Error from '../../pages/error'
import Container from '../../layout/container'
import Card from '../card'
import styles from './souses.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../store/dataSlice'

function Souses() {
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.data);
    const [seeAll,setSeeAll] = useState(120)
    useEffect(() => {
      dispatch(getData('https://fayzullaev99.github.io/sushi-data/data.json'));
    }, [dispatch]);
  
    if (!products) return <Error />;
    return (
      <div className={styles.souses}>
        <Container className={styles.souses__container}>
            <div className={styles.souses__content}>
  
            <h1 className={styles.souses__title}>Напитки</h1>
  
            <button className={styles.souses__button} onClick={()=> setSeeAll(120)}>Смотреть все</button>
            </div>
  
            <div className={styles.souses__cards}>
  
  
             {
                products.slice(113,seeAll).map((item) => (
                    <Card key={item.id} data={item}/>
                ))
              } 
            </div>
  
  
  
  
        </Container>
      </div>
    )
  }

export default Souses