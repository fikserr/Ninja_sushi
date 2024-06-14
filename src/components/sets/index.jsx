import useGetData from '../../hooks/useGetData'
import styles from './sets.module.scss'

function Sets() {
  const [data] = useGetData()
  console.log(data);
  return (
    <div className={styles.sets}>Sets</div>
  )
}

export default Sets