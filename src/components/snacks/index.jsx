import { useEffect, useState } from "react"
import Container from "../../layout/container"
import Card from "../card"
import styles from './snacks.module.scss'
import { getData } from "../../store/dataSlice"
import { useDispatch, useSelector } from "react-redux"
function Snacks() {
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.data);
  const [seeAll,setSeeAll] = useState(105)
  useEffect(() => {
    dispatch(getData('https://fayzullaev99.github.io/sushi-data/data.json'));
  }, [dispatch]);

  return (
    <div className={styles.snacks}>
      <Container className={styles.snacks__container}>
          <div className={styles.snacks__content}>

          <h1 className={styles.snacks__title}>Закуски</h1>

          <button className={styles.snacks__button} onClick={()=> setSeeAll(112)}>Смотреть все</button>
          </div>

          <div className={styles.snacks__cards}>


           {
              products?.slice(97,seeAll).map((item) => (
                  <Card key={item.id} data={item}/>
              ))
            } 
          </div>




      </Container>
    </div>
  )
}

export default Snacks