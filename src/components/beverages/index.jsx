import { useState } from 'react'
import useGetData from '../../hooks/useGetData'
import styles from './beverages.module.scss'
import Container from '../../layout/container'
import Card from '../card'

function Beverages() {
  const [data] = useGetData()
  const [seeAll,setSeeAll] = useState(129)
  return (
    <div className={styles.beverages}>
      <Container className={styles.beverages__container}>
          <div className={styles.beverages__content}>

          <h1 className={styles.beverages__title}>Напитки</h1>

          <button className={styles.beverages__button} onClick={()=> setSeeAll(144)}>Смотреть все</button>
          </div>

          <div className={styles.beverages__cards}>


           {
              data?.products.slice(121,seeAll).map((item) => (
                  <Card key={item.id} data={item}/>
              ))
            } 
          </div>




      </Container>
    </div>
  )
}

export default Beverages