
import styles from './navbar.module.scss'

function Basket() {
  return (
    <div className={styles.basket}>
        <Container className={styles.basket__container}>
                <div className={styles.basket__content}>
                        <div className={styles.basket__top}>
                            <h5 className={styles.basket__title}>
                            Ваш заказ
                            </h5>
                            <button className={styles.basket__cancel}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0879 4.55273C16.4239 4.88867 16.4239 5.43333 16.0879 5.76926L5.76535 16.0918C5.42942 16.4278 4.88476 16.4278 4.54883 16.0918C4.21289 15.7559 4.21289 15.2112 4.54883 14.8753L14.8714 4.55273C15.2073 4.2168 15.752 4.2168 16.0879 4.55273Z" fill="#1D1D1F"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.54883 4.55273C4.88476 4.2168 5.42942 4.2168 5.76535 4.55273L16.0879 14.8753C16.4239 15.2112 16.4239 15.7559 16.0879 16.0918C15.752 16.4278 15.2073 16.4278 14.8714 16.0918L4.54883 5.76926C4.21289 5.43333 4.21289 4.88867 4.54883 4.55273Z" fill="#1D1D1F"/>
                            </svg>
                            </button>
                        </div>


                        <div className={styles.basket__error}>

                        </div>

                </div>
        </Container>
    </div>
  )
}

export default Basket