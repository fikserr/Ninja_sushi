import { useState } from 'react';
import Container from '../../layout/container';
import styles from './rolls.module.scss'
import useGetData from '../../hooks/useGetData';
import Card from '../card';
import Error from '../../pages/error';

function Rolls() {
  const [data] = useGetData()
  const [seeAll,setSeeAll] = useState(34)
  if (!data ) return <Error/>
  return (
    <div className={styles.rolls}>
      <Container className={styles.rolls__container}>
          <div className={styles.rolls__content}>

          <h1 className={styles.rolls__title}>Роллы</h1>

          <button className={styles.rolls__button} onClick={()=> setSeeAll(83)}>Смотреть все</button>
          </div>

          <div className={styles.rolls__cards}>


           {
              data.products.slice(26,seeAll).map((item) => (
                  <Card key={item.id} data={item}/>
              ))
            } 
          </div>




      </Container>
    </div>
  )
}

export default Rolls