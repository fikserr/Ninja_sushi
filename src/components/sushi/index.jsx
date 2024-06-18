import { useState } from 'react'
import useGetData from '../../hooks/useGetData'
import styles from './sushi.module.scss'
import Error from '../../pages/error'
import Container from '../../layout/container'
import Card from '../card'

function Sushi() {
  const [data] = useGetData()
  const [seeAll,setSeeAll] = useState(93)
  if (!data ) return <Error/>
  return (
    <div className={styles.sushi}>
      <Container className={styles.sushi__container}>
          <div className={styles.sushi__content}>

          <h1 className={styles.sushi__title}>Суши</h1>

          <button className={styles.sushi__button} onClick={()=> setSeeAll(96)}>Смотреть все</button>
          </div>

          <div className={styles.sushi__cards}>


           {
              data.products.slice(85,seeAll).map((item) => (
                  <Card key={item.id} data={item}/>
              ))
            } 
          </div>




      </Container>
    </div>
  )
}

export default Sushi