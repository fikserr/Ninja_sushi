import Container from "../../layout/container"
import logo from '../../images/logo.png'
import { NavLink } from "react-router-dom"
import russia from '../../images/russia.jpg'
import uzbek from '../../images/uzbek.jpg'
import classNames from "classnames"
import styles from './navbar.module.scss'
import { useState } from "react"




function Navbar() {
  const [flag,setFlag] = useState(false)

  return (
    <div>
      <Container className={styles.navbar__container}>
        <div className={styles.navbar}>
          <img src={logo} alt='logo' className={styles.navbar__logo}/>
          <div className={styles.navbar__links}>
            <button className={styles.navbar__flag} onClick={()=>setFlag(!flag)}>
              <div className={classNames(styles.navbar__flag_russia, flag ? styles.active : "")}>
                <img src={russia} alt="" />
                <p>RU</p>
              </div>
              <div className={classNames(styles.navbar__flag_uzbek, flag == false ? styles.active : "")}>
                <img src={uzbek} alt="" />
                <p>UZ</p>
              </div>
            </button>
            <NavLink to="/" className={styles.navbar__link}>Главная</NavLink>
            <NavLink to="order"  className={styles.navbar__link}>Доставка</NavLink>
            <NavLink to="about" className={styles.navbar__link}>О нас</NavLink>
            <NavLink to="news" className={styles.navbar__link}>Новости</NavLink>
            <div className={styles.navbar__number}>
              <p className={styles.navbar__number_svg}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4029 12.2225C21.8186 12.2225 22.1555 11.8856 22.1555 11.4699C22.1555 6.06637 17.9368 1.84766 12.5333 1.84766C12.1176 1.84766 11.7807 2.18461 11.7807 2.60027C11.7807 3.01593 12.1176 3.35288 12.5333 3.35288C17.1055 3.35288 20.6503 6.89768 20.6503 11.4699C20.6503 11.8856 20.9873 12.2225 21.4029 12.2225ZM9.87213 9.51862C10.7539 8.63688 10.7539 7.20729 9.87213 6.32555L7.74342 4.19682C6.86168 3.31508 5.43209 3.31508 4.55035 4.19682L2.50897 6.23821C2.06341 6.68376 1.82432 7.29524 1.84946 7.92485C1.97677 11.1111 3.60098 14.2458 6.67906 17.3239C9.75713 20.402 12.8919 22.0262 16.0781 22.1535C16.7077 22.1787 17.3192 21.9396 17.7647 21.494L19.8061 19.4526C20.6879 18.5709 20.6879 17.1413 19.8061 16.2595L17.6774 14.1308C16.7957 13.2491 15.3661 13.2491 14.4843 14.1308L13.3368 15.2784C13.2474 15.3678 13.1053 15.3767 13.0054 15.299L12.1081 14.6011C11.0972 13.8148 10.1881 12.9058 9.40185 11.8948L8.70397 10.9976C8.62629 10.8977 8.63514 10.7556 8.7246 10.6662L9.87213 9.51862ZM3.5734 7.30244L5.61478 5.26106C5.90869 4.96715 6.38522 4.96715 6.67913 5.26106L8.80784 7.38978C9.10176 7.6837 9.10176 8.16023 8.80784 8.45414L7.66031 9.60167C7.03407 10.2279 6.97215 11.2225 7.51588 11.9216L8.21377 12.8188C9.07675 13.9284 10.0745 14.9262 11.1841 15.7891L12.0814 16.487C12.7804 17.0308 13.775 16.9688 14.4012 16.3426L15.5488 15.1951C15.8427 14.9012 16.3192 14.9012 16.6131 15.1951L18.7419 17.3238C19.0358 17.6177 19.0358 18.0942 18.7419 18.3881L16.7004 20.4295C16.5519 20.578 16.3481 20.6577 16.1382 20.6494C13.3704 20.5388 10.5738 19.0898 7.74349 16.2594C4.91312 13.4291 3.46415 10.6325 3.35356 7.86466C3.34518 7.6548 3.42488 7.45096 3.5734 7.30244ZM18.9622 11.8247C18.9622 12.2404 18.6252 12.5773 18.2096 12.5773C17.7939 12.5773 17.4569 12.2404 17.4569 11.8247C17.4569 9.19222 14.8107 6.54597 12.1782 6.54597C11.7625 6.54597 11.4256 6.20902 11.4256 5.79336C11.4256 5.3777 11.7625 5.04075 12.1782 5.04075C15.642 5.04075 18.9622 8.36091 18.9622 11.8247Z" fill="#FF6633" />
                </svg>
              </p>
              <p className={styles.navbar__number_num}>+38 097 699 34 38</p>
            </div>
          </div>
          <div className={styles.navbar__buttons}>
            <button className={styles.navbar__buttons_btn}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#F63;">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.05033 3.05025C8.36309 1.7375 10.1436 1 12.0001 1C13.8566 1 15.6371 1.7375 16.9498 3.05025C18.2626 4.36301 19.0001 6.14349 19.0001 8C19.0001 11.3527 19.7171 13.4346 20.378 14.6461C20.7098 15.2544 21.0329 15.6535 21.2573 15.8904C21.3698 16.0091 21.4581 16.0878 21.5114 16.1322C21.538 16.1544 21.5558 16.168 21.5635 16.1737C21.5647 16.1746 21.5657 16.1753 21.5664 16.1758C21.9249 16.4221 22.0835 16.8725 21.9572 17.2898C21.8295 17.7115 21.4407 18 21.0001 18H3.00008C2.55941 18 2.17068 17.7115 2.04299 17.2898C1.91664 16.8725 2.07528 16.4221 2.43377 16.1758C2.43447 16.1753 2.43542 16.1746 2.43663 16.1737C2.44432 16.168 2.46218 16.1544 2.4888 16.1322C2.54202 16.0878 2.6304 16.0091 2.74288 15.8904C2.9673 15.6535 3.29039 15.2544 3.62218 14.6461C4.28301 13.4346 5.00008 11.3527 5.00008 8C5.00008 6.14348 5.73758 4.36301 7.05033 3.05025ZM2.44388 16.169C2.44395 16.1689 2.44403 16.1688 2.44411 16.1688C2.44411 16.1688 2.4441 16.1688 2.4441 16.1688L2.44388 16.169ZM5.1494 16H18.8508C18.7747 15.8753 18.6983 15.7434 18.6222 15.6039C17.783 14.0654 17.0001 11.6473 17.0001 8C17.0001 6.67392 16.4733 5.40215 15.5356 4.46447C14.5979 3.52678 13.3262 3 12.0001 3C10.674 3 9.40223 3.52678 8.46454 4.46447C7.52686 5.40215 7.00008 6.67392 7.00008 8C7.00008 11.6473 6.21715 14.0654 5.37797 15.6039C5.30188 15.7434 5.22549 15.8753 5.1494 16Z" fill="#686870" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.77183 20.1352C10.2496 19.858 10.8615 20.0207 11.1386 20.4984C11.2265 20.6499 11.3527 20.7757 11.5045 20.8632C11.6563 20.9506 11.8284 20.9966 12.0036 20.9966C12.1788 20.9966 12.3509 20.9506 12.5027 20.8632C12.6545 20.7757 12.7807 20.6499 12.8686 20.4984C13.1457 20.0207 13.7576 19.858 14.2354 20.1352C14.7131 20.4123 14.8757 21.0242 14.5986 21.5019C14.3349 21.9566 13.9564 22.3339 13.5009 22.5962C13.0455 22.8586 12.5292 22.9966 12.0036 22.9966C11.478 22.9966 10.9617 22.8586 10.5063 22.5962C10.0508 22.3339 9.67232 21.9566 9.4086 21.5019C9.13148 21.0242 9.2941 20.4123 9.77183 20.1352Z" fill="#686870" />
            </svg></button>
            <button className={styles.navbar__buttons_btn}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.67231 6.88373C2.99301 8.03334 2.76944 9.54025 2.98536 10.8356C3.41005 13.3834 5.61967 15.6795 7.96408 17.4158C9.10741 18.2625 10.2252 18.9342 11.0586 19.3944C11.4433 19.6068 11.7654 19.7731 11.999 19.8898C12.2326 19.7731 12.5547 19.6068 12.9394 19.3944C13.7728 18.9342 14.8906 18.2625 16.034 17.4158C18.3784 15.6795 20.588 13.3835 21.0127 10.8356C21.2286 9.54027 21.005 8.03335 20.3256 6.88373C19.6716 5.77693 18.6052 5 16.9991 5C15.3919 5 14.4126 5.78198 13.799 6.60001C13.4861 7.01722 13.2741 7.43971 13.1408 7.75963C13.0747 7.91826 13.0295 8.04799 13.0018 8.13415C12.988 8.17712 12.9786 8.20893 12.9733 8.2277L12.9683 8.24572L12.9687 8.24416C12.9685 8.24522 12.9686 8.24466 12.9683 8.24572C12.9682 8.24607 12.9684 8.2455 12.9683 8.24572C12.8556 8.68873 12.4565 9.00001 11.999 9C11.5415 8.99999 11.1425 8.68955 11.0299 8.24651C11.0298 8.2463 11.0299 8.24684 11.0299 8.24651L11.0247 8.22766C11.0193 8.2089 11.01 8.17709 10.9962 8.13412C10.9685 8.04796 10.9233 7.91823 10.8572 7.7596C10.7239 7.43969 10.5119 7.0172 10.199 6.59999C9.5855 5.78198 8.60615 4.99999 6.99893 5C5.39271 5.00001 4.3263 5.77695 3.67231 6.88373ZM11.999 8C11.0288 8.24252 11.029 8.24295 11.0291 8.24337L11.0296 8.24538L11.0299 8.24651M11.999 5.68095C11.9361 5.58783 11.8695 5.49398 11.799 5.4C10.9125 4.218 9.39184 2.99999 6.99893 3C4.60502 3.00001 2.92142 4.22307 1.95045 5.86628C1.00478 7.46667 0.728432 9.45975 1.01258 11.1644C1.57439 14.5349 4.36478 17.2389 6.77376 19.023C8.00712 19.9364 9.20437 20.6551 10.0918 21.1452C10.5364 21.3907 10.9056 21.5801 11.1655 21.709C11.2955 21.7734 11.3984 21.8229 11.4699 21.8567C11.5057 21.8736 11.5337 21.8866 11.5532 21.8957L11.5763 21.9063L11.583 21.9094L11.5852 21.9104C11.5855 21.9105 11.5865 21.9109 11.999 21L11.5865 21.9109C11.8487 22.0297 12.1493 22.0297 12.4115 21.911L11.999 21C12.4115 21.911 12.4112 21.9111 12.4115 21.911L12.4149 21.9094L12.4217 21.9063L12.4447 21.8957C12.4643 21.8866 12.4923 21.8736 12.528 21.8567C12.5996 21.8229 12.7024 21.7734 12.8325 21.709C13.0924 21.5801 13.4616 21.3907 13.9062 21.1452C14.7936 20.6551 15.9909 19.9364 17.2243 19.023C19.6333 17.2389 22.4237 14.5349 22.9855 11.1644C23.2696 9.45973 22.9932 7.46665 22.0475 5.86627C21.0765 4.22307 19.3929 3 16.9991 3C14.6062 3 13.0855 4.21802 12.199 5.39999C12.1285 5.49398 12.0619 5.58783 11.999 5.68095Z" fill="#686870" />
            </svg></button>
            <button className={styles.navbar__buttons_btn}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.46447 15.4645C5.40215 14.5268 6.67392 14 8 14H16C17.3261 14 18.5978 14.5268 19.5355 15.4645C20.4732 16.4021 21 17.6739 21 19V21C21 21.5523 20.5523 22 20 22C19.4477 22 19 21.5523 19 21V19C19 18.2044 18.6839 17.4413 18.1213 16.8787C17.5587 16.3161 16.7956 16 16 16H8C7.20435 16 6.44129 16.3161 5.87868 16.8787C5.31607 17.4413 5 18.2044 5 19V21C5 21.5523 4.55228 22 4 22C3.44772 22 3 21.5523 3 21V19C3 17.6739 3.52678 16.4021 4.46447 15.4645Z" fill="#686870" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C10.3431 4 9 5.34315 9 7C9 8.65686 10.3431 10 12 10C13.6569 10 15 8.65686 15 7C15 5.34315 13.6569 4 12 4ZM7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7Z" fill="#686870" />
            </svg></button>
            <button className={classNames(styles.navbar__buttons_btn,styles.navbar__buttons_basket)}>Корзина <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.7 1.4C5.88885 1.14819 6.18524 1 6.5 1H18.5C18.8148 1 19.1111 1.14819 19.3 1.4L22.3 5.4C22.4298 5.5731 22.5 5.78363 22.5 6V20C22.5 20.7957 22.1839 21.5587 21.6213 22.1213C21.0587 22.6839 20.2957 23 19.5 23H5.5C4.70435 23 3.94129 22.6839 3.37868 22.1213C2.81607 21.5587 2.5 20.7957 2.5 20V6C2.5 5.78363 2.57018 5.5731 2.7 5.4L5.7 1.4ZM7 3L4.5 6.33333V20C4.5 20.2652 4.60536 20.5196 4.79289 20.7071C4.98043 20.8946 5.23478 21 5.5 21H19.5C19.7652 21 20.0196 20.8946 20.2071 20.7071C20.3946 20.5196 20.5 20.2652 20.5 20V6.33333L18 3H7Z" fill="#686870" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 6C2.5 5.44772 2.94772 5 3.5 5H21.5C22.0523 5 22.5 5.44772 22.5 6C22.5 6.55228 22.0523 7 21.5 7H3.5C2.94772 7 2.5 6.55228 2.5 6Z" fill="#686870" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 9C9.05228 9 9.5 9.44772 9.5 10C9.5 10.7956 9.81607 11.5587 10.3787 12.1213C10.9413 12.6839 11.7044 13 12.5 13C13.2956 13 14.0587 12.6839 14.6213 12.1213C15.1839 11.5587 15.5 10.7956 15.5 10C15.5 9.44772 15.9477 9 16.5 9C17.0523 9 17.5 9.44772 17.5 10C17.5 11.3261 16.9732 12.5979 16.0355 13.5355C15.0979 14.4732 13.8261 15 12.5 15C11.1739 15 9.90215 14.4732 8.96447 13.5355C8.02678 12.5979 7.5 11.3261 7.5 10C7.5 9.44772 7.94772 9 8.5 9Z" fill="#686870" />
            </svg></span></button>        
          </div>



        </div>

      </Container>
    </div>
  )
}

export default Navbar