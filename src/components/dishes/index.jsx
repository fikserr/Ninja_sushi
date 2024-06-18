import { useState } from 'react'
import useGetData from '../../hooks/useGetData'
import styles from './dishes.module.scss'
import Error from '../../pages/error'
import Container from '../../layout/container'
import Card from '../card'

function Dishes() {
    const [data] = useGetData()
    const [seeAll,setSeeAll] = useState(153)
    if (!data ) return <Error/>
    return (
      <div className={styles.dishes}>
        <Container className={styles.dishes__container}>
            <div className={styles.dishes__content}>
  
            <h1 className={styles.dishes__title}>Напитки</h1>
  
            <button className={styles.dishes__button} onClick={()=> setSeeAll(156)}>Смотреть все</button>
            </div>
  
            <div className={styles.dishes__cards}>
  
  
             {
                data.products.slice(145,seeAll).map((item) => (
                    <Card key={item.id} data={item}/>
                ))
              } 
            </div>
  
  
  
  
        </Container>
      </div>
    )
  }

export default Dishes