import { useDispatch, useSelector } from 'react-redux'
import Footer from '../footer'
import styles from './detail.module.scss'
import Container from '../../layout/container'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import { sendDetail } from '../../store/dataSlice'

function Detail() {
  const {detailId} = useSelector(state => state.data)
  const dispatch = useDispatch()
  const {id} = useParams()
  useEffect(()=>{
    dispatch(sendDetail(id))
    console.log(id,detailId);
  },[id])
  return (
    <div className={styles.detail}>
      <Container>
          {
            detailId.map((item)=>(
              <div className={styles.detail__info} key={item?.id}>
                  <h1>{item?.price}</h1>
              </div>
            ))
          }



      </Container>

    </div>
  )
}

export default Detail