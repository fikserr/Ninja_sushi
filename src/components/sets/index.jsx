import { useState } from 'react';
import useGetData from '../../hooks/useGetData'
import Container from '../../layout/container';
import Card from '../card';
import styles from './sets.module.scss'
import Error from '../../pages/error';

function Sets() {
  const [data] = useGetData()
  const [seeAll,setSeeAll] = useState(8)
  if (!data ) return <Error/>
  return (
    <div className={styles.sets}>
      <Container className={styles.sets__container}>
          <div className={styles.sets__content}>

          <h1 className={styles.sets__title}>Сеты</h1>

          <button className={styles.sets__button} onClick={()=> setSeeAll(25)}>Смотреть все</button>
          </div>

          <div className={styles.sets__cards}>


           {
              data.products.slice(0,seeAll).map((item) => (
                  <Card key={item.id} data={item}/>
              ))
            } 
          </div>




      </Container>
    </div>
  )
}

export default Sets