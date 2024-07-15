import { useEffect, useState } from 'react'
import Container from '../../layout/container'
import Card from '../card'
import styles from './souses.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../store/dataSlice'
import { useNavigate } from 'react-router'

function Souses() {
  const dispatch = useDispatch();
  const {souses,error} = useSelector(state => state.data);
  const [seeAll, setSeeAll] = useState(8);
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getData('https://fayzullaev99.github.io/sushi-data/data.json'));
  }, [dispatch,error]);
  
  useEffect(() => {
    
  }, [souses]);

  if (error || !souses) return navigate('/error');
    return (
      <div className={styles.souses}>
        <Container className={styles.souses__container}>
            <div className={styles.souses__content}>
  
            <h1 className={styles.souses__title}>Напитки</h1>
  
            <button className={styles.souses__button} onClick={()=> setSeeAll(8)}>Смотреть все</button>
            </div>
  
            <div className={styles.souses__cards}>
  
  
             {
                souses?.slice(1,seeAll).map((item) => (
                    <Card key={item.id} data={item}/>
                ))
              } 
            </div>
  
  
  
  
        </Container>
      </div>
    )
  }

export default Souses