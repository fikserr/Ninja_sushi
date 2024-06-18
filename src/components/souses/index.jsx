import { useState } from 'react'
import useGetData from '../../hooks/useGetData'
import Error from '../../pages/error'
import Container from '../../layout/container'
import Card from '../card'
import styles from './souses.module.scss'

function Souses() {
    const [data] = useGetData()
    const [seeAll,setSeeAll] = useState(120)
    if (!data ) return <Error/>
    return (
      <div className={styles.souses}>
        <Container className={styles.souses__container}>
            <div className={styles.souses__content}>
  
            <h1 className={styles.souses__title}>Напитки</h1>
  
            <button className={styles.souses__button} onClick={()=> setSeeAll(120)}>Смотреть все</button>
            </div>
  
            <div className={styles.souses__cards}>
  
  
             {
                data.products.slice(113,seeAll).map((item) => (
                    <Card key={item.id} data={item}/>
                ))
              } 
            </div>
  
  
  
  
        </Container>
      </div>
    )
  }

export default Souses