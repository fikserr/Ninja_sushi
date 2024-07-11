import { useDispatch, useSelector } from 'react-redux'
import styles from './detail.module.scss'
import Container from '../../layout/container'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import { setDetail } from '../../store/basket'
import classNames from 'classnames'


function Detail() {
  const {detailId} = useSelector(state => state.basketData)
  const {products} = useSelector(state => state.data)
  const dispatch = useDispatch()
  const {id} = useParams()
  console.log(detailId);
  useEffect(()=>{
    dispatch(setDetail(products?.filter(item => item.id == id)))
    console.log(detailId);
  },[id])
  return (
    <div className={styles.detail}>
      <Container className={styles.detail__container}>


          {
            detailId?.map((item)=>(
              <div className={styles.detail__info} key={item.id}>
                    <img src={item.images} alt="images" className={styles.detail__info_images}/>

                    <div className={styles.detail__right}>
                      <div className={styles.detail__images}>
                        <p className={classNames(styles.detail__images_hit, item?.status[0] == "hit" ? styles.active : "")}>{item.status[0]}</p>
                        <p className={classNames(styles.detail__images_new, item?.status[1] == "new" ? styles.active : "")}>{item.status[1]}</p>
                      </div>
                      <h1 className={styles.detail__title}>{item.name}</h1>
                      <p className={styles.detail__weight}>Вес: {item.weight}</p>
                      <p className={styles.detail__ingridient}>{item.incredients?.join(', ')}</p>
                      <p className={styles.detail__price}>{item.price} <span>грн</span></p>

                    </div>

              </div>
            ))
          }






      </Container>
    </div>
  )
}

export default Detail