import { useEffect, useState } from "react";
import styles from "./card.module.scss";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";

function Card({ data }) {
  const dispatch = useDispatch()
  const basket = useSelector((state) => state.data.basket);
  const [pepper, setPepper] = useState(false);
  const [blackmarks, setBlackmarks] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const statusHit = data.status?.filter(item => item == 'hit');
  const statusNew = data.status?.filter(item => item == 'new')
  const word = data.incredients?.join(', ')

  useEffect(() => {
    if (data.catalog?.some(ingredient => ingredient === 'Острые')) {
      setPepper(!pepper);
    }
    if (data.catalog?.some(ingredient => ingredient === 'Безлактозные')) {
      setBlackmarks(!blackmarks);
    }
    if (data.catalog?.some(ingredient => ingredient === 'Вегетарианские')) {
      setVegetarian(!vegetarian);
    }
  }, [data.catalog]);


  return (
    <div className={styles.card}>
      <div className={styles.card__images}>
        <div className={styles.card__images_txt}>
          <p className={classNames(styles.card__images_hit, statusHit == "hit" ? styles.active : "")}>{statusHit}</p>
          <p className={classNames(styles.card__images_new, statusNew == "new" ? styles.active : "")}>{statusNew}</p>
        </div>
        <img src={data?.images} alt={data?.name} className={styles.card__images_img} />
        <div className={styles.card__images_svgs}>
          <svg className={pepper ? styles.active : ""}
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="26"
            viewBox="0 0 27 26"
            fill="none"
          >
            <path
              d="M16.6978 6.26207C16.6723 6.02023 16.7131 5.76848 16.8294 5.53483C17.1535 4.88335 17.9419 4.61928 18.5903 4.94502L20.1789 5.7432L22.1612 2.75539C22.5633 2.14934 23.3782 1.98558 23.9813 2.38961C24.5845 2.79364 24.7475 3.61247 24.3454 4.21851L22.5451 6.93198L23.8403 7.5827C24.4886 7.90844 24.7514 8.70064 24.4272 9.35212C24.3368 9.53379 24.2103 9.68534 24.0608 9.80237C24.3757 11.1991 24.3013 12.8556 23.831 14.5584C22.7445 18.4927 19.8345 21.8483 15.7934 23.2019C11.3772 24.681 7.65151 24.0571 4.72776 22.0985C3.64727 21.3747 2.91412 20.638 2.5158 20.1043C1.83014 19.1857 2.5593 17.8865 3.6964 18.0007C8.42436 18.4758 10.5286 16.8692 12.454 12.7123C12.5816 12.4369 12.7082 12.1541 12.8759 11.7724C12.924 11.6628 12.9797 11.5355 13.0835 11.2983C13.1677 11.1063 13.2304 10.9638 13.2922 10.8247C14.3239 8.50355 15.3503 6.97936 16.6978 6.26207Z"
              fill="#FF6633"
            />
          </svg>
          <svg className={blackmarks ? styles.active : ""}
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="26"
            viewBox="0 0 27 26"
            fill="none"
          >
            <path
              d="M13.7956 21.4106C13.7984 21.7628 13.6658 22.0874 13.4455 22.3287C13.2137 22.5803 12.894 22.7381 12.5382 22.7494C12.1821 22.7609 11.8534 22.6238 11.6107 22.3914C11.3721 22.1608 11.22 21.8454 11.2014 21.4936C11.1505 20.6578 11.124 19.8495 11.1219 19.0689C11.1018 18.7832 11.0778 18.5049 11.0498 18.2339C6.61664 17.7001 3.7346 14.6376 2.57649 9.29978L2.25 7.79495L3.75124 7.68519C7.58205 7.40513 10.3281 8.88872 11.9704 11.982C13.5927 6.24269 17.5351 3.25 23.7475 3.25H24.8733L25.0325 4.39152C25.0968 4.85249 25.1458 5.60811 25.1124 6.56592C25.0568 8.16025 24.778 9.75945 24.1985 11.2702C22.6293 15.3615 19.213 17.9524 13.7183 18.2824C13.7144 18.5202 13.7129 18.7616 13.714 19.0066C13.7681 19.7714 13.7954 20.5729 13.7956 21.4106Z"
              fill="#84C502"
            />
          </svg>
          <svg className={vegetarian ? styles.active : ""}
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="24"
            viewBox="0 0 15 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.15527 1.07552C2.15527 0.477212 2.65895 -0.0078125 3.28027 -0.0078125H11.8145C12.4358 -0.0078125 12.9395 0.477212 12.9395 1.07552C12.9395 1.63863 12.4933 2.10139 11.9228 2.15389L11.9601 4.92368C11.9601 5.24728 12.1321 5.75778 12.4931 6.40032C12.8357 7.01021 13.2732 7.60956 13.6369 8.0766C13.6712 8.12061 13.7019 8.16708 13.7288 8.21559C14.5626 9.71662 15.0049 11.3995 15.0049 13.1179V20.9382C15.0049 22.6334 13.5778 24.0077 11.8174 24.0077H3.27734C1.51697 24.0077 0.0898438 22.6334 0.0898438 20.9382V13.1179C0.0898438 11.3995 0.532088 9.71662 1.36588 8.21559C1.39283 8.16708 1.42357 8.12061 1.45785 8.0766C1.82157 7.60956 2.25902 7.01021 2.60165 6.40032C2.96262 5.75778 3.13469 5.24728 3.13469 4.92368V4.90962L3.1719 2.15389C2.60143 2.10139 2.15527 1.63863 2.15527 1.07552ZM5.42202 2.15885L5.38467 4.93147C5.38232 5.81401 4.98115 6.71831 4.58063 7.43125C4.17958 8.14514 3.69337 8.81353 3.31144 9.30753C2.67629 10.4779 2.33984 11.7844 2.33984 13.1179V20.9382C2.33984 21.4368 2.75961 21.841 3.27734 21.841H11.8174C12.3351 21.841 12.7549 21.4368 12.7549 20.9382V13.1179C12.7549 11.7844 12.4184 10.4779 11.7833 9.30753C11.4013 8.81353 10.9151 8.14513 10.5141 7.43125C10.1136 6.71832 9.71241 5.81403 9.71005 4.9315L9.6727 2.15885H5.42202Z"
              fill="#1D1D1F"
            />
          </svg>
        </div>
      </div>

      <div className={styles.card__content}>
        <h5 className={styles.card__content_name}>{data.name} </h5>
        <p className={styles.card__content_gram}>Вес: {data.weight} г</p>
        <p className={styles.card__content_incredients}>
         {word}
        </p>

        <div className={styles.card__bottom}>
          <p className={styles.card__bottom_price}>
            190 <span>грн</span>
          </p>

          <div>
            <button className={styles.card__bottom_like}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.67231 6.88373C2.99301 8.03334 2.76944 9.54025 2.98536 10.8356C3.41005 13.3834 5.61967 15.6795 7.96408 17.4158C9.10741 18.2625 10.2252 18.9342 11.0586 19.3944C11.4433 19.6068 11.7654 19.7731 11.999 19.8898C12.2326 19.7731 12.5547 19.6068 12.9394 19.3944C13.7728 18.9342 14.8906 18.2625 16.034 17.4158C18.3784 15.6795 20.588 13.3835 21.0127 10.8356C21.2286 9.54027 21.005 8.03335 20.3256 6.88373C19.6716 5.77693 18.6052 5 16.9991 5C15.3919 5 14.4126 5.78198 13.799 6.60001C13.4861 7.01722 13.2741 7.43971 13.1408 7.75963C13.0747 7.91826 13.0295 8.04799 13.0018 8.13415C12.988 8.17712 12.9786 8.20893 12.9733 8.2277L12.9683 8.24572L12.9687 8.24416C12.9685 8.24522 12.9686 8.24466 12.9683 8.24572C12.9682 8.24607 12.9684 8.2455 12.9683 8.24572C12.8556 8.68873 12.4565 9.00001 11.999 9C11.5415 8.99999 11.1425 8.68955 11.0299 8.24651C11.0298 8.2463 11.0299 8.24684 11.0299 8.24651L11.0247 8.22766C11.0193 8.2089 11.01 8.17709 10.9962 8.13412C10.9685 8.04796 10.9233 7.91823 10.8572 7.7596C10.7239 7.43969 10.5119 7.0172 10.199 6.59999C9.5855 5.78198 8.60615 4.99999 6.99893 5C5.39271 5.00001 4.3263 5.77695 3.67231 6.88373ZM11.999 8C11.0288 8.24252 11.029 8.24295 11.0291 8.24337L11.0296 8.24538L11.0299 8.24651M11.999 5.68095C11.9361 5.58783 11.8695 5.49398 11.799 5.4C10.9125 4.218 9.39184 2.99999 6.99893 3C4.60502 3.00001 2.92142 4.22307 1.95045 5.86628C1.00478 7.46667 0.728432 9.45975 1.01258 11.1644C1.57439 14.5349 4.36478 17.2389 6.77376 19.023C8.00712 19.9364 9.20437 20.6551 10.0918 21.1452C10.5364 21.3907 10.9056 21.5801 11.1655 21.709C11.2955 21.7734 11.3984 21.8229 11.4699 21.8567C11.5057 21.8736 11.5337 21.8866 11.5532 21.8957L11.5763 21.9063L11.583 21.9094L11.5852 21.9104C11.5855 21.9105 11.5865 21.9109 11.999 21L11.5865 21.9109C11.8487 22.0297 12.1493 22.0297 12.4115 21.911L11.999 21C12.4115 21.911 12.4112 21.9111 12.4115 21.911L12.4149 21.9094L12.4217 21.9063L12.4447 21.8957C12.4643 21.8866 12.4923 21.8736 12.528 21.8567C12.5996 21.8229 12.7024 21.7734 12.8325 21.709C13.0924 21.5801 13.4616 21.3907 13.9062 21.1452C14.7936 20.6551 15.9909 19.9364 17.2243 19.023C19.6333 17.2389 22.4237 14.5349 22.9855 11.1644C23.2696 9.45973 22.9932 7.46665 22.0475 5.86627C21.0765 4.22307 19.3929 3 16.9991 3C14.6062 3 13.0855 4.21802 12.199 5.39999C12.1285 5.49398 12.0619 5.58783 11.999 5.68095Z"
                  fill="#FF6633"
                />
              </svg>
            </button>
            <button className={styles.card__bottom_firstplus} onClick={() => dispatch(getData('https://fayzullaev99.github.io/sushi-data/data.json'))}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9987 4.66797C14.643 4.66797 15.1654 5.1903 15.1654 5.83464V22.168C15.1654 22.8123 14.643 23.3346 13.9987 23.3346C13.3544 23.3346 12.832 22.8123 12.832 22.168V5.83464C12.832 5.1903 13.3544 4.66797 13.9987 4.66797Z" fill="#00CC2D"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.66797 13.9987C4.66797 13.3544 5.1903 12.832 5.83464 12.832H22.168C22.8123 12.832 23.3346 13.3544 23.3346 13.9987C23.3346 14.643 22.8123 15.1654 22.168 15.1654H5.83464C5.1903 15.1654 4.66797 14.643 4.66797 13.9987Z" fill="#00CC2D"/>
          </svg>
            </button>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
