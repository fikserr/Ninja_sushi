import { useEffect, useState } from "react"
import Container from "../../layout/container"
import Card from "../card"
import styles from './snacks.module.scss'
import { getData } from "../../store/dataSlice"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import Filter from "../filter"
function Snacks() {
  const dispatch = useDispatch();
  const {sneaks,error} = useSelector(state => state.data);
  const [seeAll, setSeeAll] = useState(8);
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getData('https://fayzullaev99.github.io/sushi-data/data.json'));
  }, [dispatch,error]);
  
  useEffect(() => {
    
  }, [sneaks]);

  if (error || !sneaks) return navigate('/error');

  return (
    <div className={styles.snacks}>
      <Container className={styles.snacks__container}>
          <div className={styles.snacks__content}>

          <h1 className={styles.snacks__title}>Закуски</h1>

          <button className={styles.snacks__button} onClick={()=> setSeeAll(16)}>Смотреть все</button>
          </div>
              <Filter/>
          <div className={styles.snacks__cards}>


           {
              sneaks?.slice(1,seeAll).map((item) => (
                  <Card key={item.id} data={item}/>
              ))
            } 
          </div>




      </Container>
    </div>
  )
}

export default Snacks