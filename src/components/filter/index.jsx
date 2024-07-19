import styles from "./filter.module.scss";
import lasos from '../../images/lasos.png'
import grib from '../../images/grib.png'
import file from '../../images/file.png'
import pomidor from '../../images/pomidor.png'
import avakado from '../../images/avakado.png'
import sir from '../../images/sir.png'
import tunech from '../../images/tunech.png'
import tofu from '../../images/tofu.png'
import ugor from '../../images/ugor.png'
import { useState } from "react";
import classNames from "classnames";
import { useDispatch} from "react-redux";
import { filterCatalog, filterIngredient,} from "../../store/dataSlice";
import { useLocation } from "react-router";


function Filter() {
  const [filter,setFilter] = useState(false)
  const [activeType,setActiveType] = useState('Все')
  const dispatch = useDispatch()
  const {pathname} = useLocation()
  const [activeIng,setActiveIng] = useState('')
  const [activeCatalog,setActiveCatalog] = useState('')

  const handleFilter = (el) => {
    dispatch(filterIngredient(el.toLowerCase()));
    setActiveIng(el)
  };
  const handleFilterCategory = (category) => {
    dispatch(filterCatalog(category.toLowerCase()));
    setActiveCatalog(category)
  };



  console.log(activeIng);
  return (  
    <div className={ pathname == '/rolls' || pathname == '/sushi' || pathname == '/sets' || pathname == '/snacks' ? classNames(styles.filter,styles.active) : styles.filter}>
      <div className={styles.filter__top}>
        <div>
          <button className={activeType == 'Все' ? classNames(styles.filter__buttons,styles.active) : styles.filter__buttons} onClick={(e)=>setActiveType(e.target.textContent)}>Все</button>
          <button className={activeType == 'Классические' ? classNames(styles.filter__buttons,styles.active) : styles.filter__buttons} onClick={(e)=>setActiveType(e.target.textContent)}>Классические</button>
          <button className={activeType == 'Маки' ? classNames(styles.filter__buttons,styles.active) : styles.filter__buttons} onClick={(e)=>setActiveType(e.target.textContent)}>Маки</button>
          <button className={activeType == 'Драконы' ? classNames(styles.filter__buttons,styles.active) : styles.filter__buttons} onClick={(e)=>setActiveType(e.target.textContent)}>Драконы</button>
          <button className={activeType == 'Запеченные' ? classNames(styles.filter__buttons,styles.active) : styles.filter__buttons} onClick={(e)=>setActiveType(e.target.textContent)}>Запеченные</button>
          <button className={activeType == 'Феликсы' ? classNames(styles.filter__buttons,styles.active) : styles.filter__buttons} onClick={(e)=>setActiveType(e.target.textContent)}>Феликсы</button>
          <button className={activeType == 'Сладкие' ? classNames(styles.filter__buttons,styles.active) : styles.filter__buttons} onClick={(e)=>setActiveType(e.target.textContent)}>Сладкие</button>
        </div>

        <p className={styles.filter__top_text}>
          От дорогих к дешевым
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.41009 6.91205C4.73553 6.58661 5.26317 6.58661 5.5886 6.91205L9.99935 11.3228L14.4101 6.91205C14.7355 6.58661 15.2632 6.58661 15.5886 6.91205C15.914 7.23748 15.914 7.76512 15.5886 8.09056L10.5886 13.0906C10.2632 13.416 9.73553 13.416 9.41009 13.0906L4.41009 8.09056C4.08466 7.76512 4.08466 7.23748 4.41009 6.91205Z"
              fill="#1D1D1F"
            />
          </svg>
        </p>
      </div>

      <div className={styles.filter__bottom}>
        <div className={styles.filter__catalog}>                                                                                
          <button className={activeCatalog == 'Острые' ? classNames(styles.filter__catalog_btn,styles.active) : styles.filter__catalog_btn} onClick={(e)=>handleFilterCategory(e.target.textContent)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M16.0787 6.26207C16.0542 6.02023 16.0934 5.76848 16.2054 5.53483C16.5176 4.88335 17.2768 4.61928 17.9011 4.94502L19.4309 5.7432L21.3398 2.75539C21.727 2.14934 22.5117 1.98558 23.0925 2.38961C23.6733 2.79364 23.8302 3.61247 23.443 4.21851L21.7094 6.93198L22.9566 7.5827C23.581 7.90844 23.834 8.70064 23.5219 9.35212C23.4348 9.53379 23.313 9.68534 23.169 9.80237C23.4722 11.1991 23.4006 12.8556 22.9478 14.5584C21.9014 18.4927 19.0993 21.8483 15.2078 23.2019C10.9552 24.681 7.36747 24.0571 4.552 22.0985C3.51154 21.3747 2.80554 20.638 2.42197 20.1043C1.7617 19.1857 2.46386 17.8865 3.55884 18.0007C8.11169 18.4758 10.138 16.8692 11.9921 12.7123C12.115 12.4369 12.2369 12.1541 12.3983 11.7724C12.4447 11.6628 12.4983 11.5355 12.5983 11.2983C12.6793 11.1063 12.7397 10.9638 12.7993 10.8247C13.7928 8.50355 14.7811 6.97936 16.0787 6.26207Z"
                fill="#FF6633"
              />
            </svg>
            Острые
          </button>
          <button className={activeCatalog == 'Вегетарианские' ? classNames(styles.filter__catalog_btn,styles.active) : styles.filter__catalog_btn} onClick={(e)=>handleFilterCategory(e.target.textContent)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M13.284 21.4106C13.2867 21.7628 13.159 22.0874 12.9468 22.3287C12.7237 22.5803 12.4158 22.7381 12.0732 22.7494C11.7303 22.7609 11.4137 22.6238 11.18 22.3914C10.9503 22.1608 10.8038 21.8454 10.7858 21.4936C10.7368 20.6578 10.7114 19.8495 10.7093 19.0689C10.69 18.7832 10.6668 18.5049 10.6399 18.2339C6.37093 17.7001 3.59563 14.6376 2.48042 9.29978L2.16602 7.79495L3.61165 7.68519C7.30058 7.40513 9.94489 8.88872 11.5264 11.982C13.0886 6.24269 16.885 3.25 22.8673 3.25H23.9514L24.1048 4.39152C24.1667 4.85249 24.2138 5.60811 24.1816 6.56592C24.1281 8.16025 23.8596 9.75945 23.3016 11.2702C21.7905 15.3615 18.5007 17.9524 13.2096 18.2824C13.2058 18.5202 13.2044 18.7616 13.2054 19.0066C13.2576 19.7714 13.2838 20.5729 13.284 21.4106Z"
                fill="#84C502"
              />
            </svg>
            Вегетарианские
          </button>
          <button className={activeCatalog == 'Безлактозные' ? classNames(styles.filter__catalog_btn,styles.active) : styles.filter__catalog_btn} onClick={(e)=>handleFilterCategory(e.target.textContent)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="24"
              viewBox="0 0 16 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.85417 1.07552C2.85417 0.477212 3.33919 -0.0078125 3.9375 -0.0078125H12.1556C12.7539 -0.0078125 13.2389 0.477212 13.2389 1.07552C13.2389 1.63863 12.8093 2.10139 12.26 2.15389L12.2959 4.92368C12.2959 5.24728 12.4615 5.75778 12.8091 6.40032C13.139 7.01021 13.5603 7.60956 13.9105 8.0766C13.9435 8.12061 13.9731 8.16708 13.9991 8.21559C14.802 9.71662 15.2279 11.3995 15.2279 13.1179V20.9382C15.2279 22.6334 13.8536 24.0077 12.1584 24.0077H3.93468C2.23951 24.0077 0.865234 22.6334 0.865234 20.9382V13.1179C0.865234 11.3995 1.2911 9.71662 2.09401 8.21559C2.11996 8.16708 2.14957 8.12061 2.18257 8.0766C2.53282 7.60956 2.95407 7.01021 3.28401 6.40032C3.63161 5.75778 3.7973 5.24728 3.7973 4.92368V4.90962L3.83314 2.15389C3.28379 2.10139 2.85417 1.63863 2.85417 1.07552ZM5.99993 2.15885L5.96396 4.93147C5.9617 5.81401 5.57538 6.71831 5.18969 7.43125C4.8035 8.14514 4.3353 8.81353 3.96752 9.30753C3.35589 10.4779 3.0319 11.7844 3.0319 13.1179V20.9382C3.0319 21.4368 3.43612 21.841 3.93468 21.841H12.1584C12.657 21.841 13.0612 21.4368 13.0612 20.9382V13.1179C13.0612 11.7844 12.7372 10.4779 12.1256 9.30753C11.7578 8.81353 11.2896 8.14513 10.9034 7.43125C10.5177 6.71832 10.1314 5.81403 10.1291 4.9315L10.0932 2.15885H5.99993Z"
                fill="#1D1D1F"
              />
            </svg>
            Безлактозные
          </button>
        </div>

        <div className={styles.filter__catalog}>
          <button className={activeIng == 'Лосось' ? classNames(styles.filter__catalog_btn,styles.active) : styles.filter__catalog_btn} onClick={(e)=>handleFilter(e.target.textContent)}><img src={lasos} alt="image" />Лосось</button>
          <button className={activeIng == 'Угорь' ? classNames(styles.filter__catalog_btn,styles.active) : styles.filter__catalog_btn}  onClick={(e)=>handleFilter(e.target.textContent)}><img src={ugor} alt="image" />Угорь</button>
          <button className={activeIng == 'Тунец' ? classNames(styles.filter__catalog_btn,styles.active) : styles.filter__catalog_btn} onClick={(e)=>handleFilter(e.target.textContent)}><img src={tunech} alt="image" />Тунец</button>
          <button className={activeIng == 'Куриное филе' ? classNames(styles.filter__catalog_btn,styles.active) : styles.filter__catalog_btn} onClick={(e)=>handleFilter(e.target.textContent)}><img src={file} alt="image" />Куриное филе</button>
          <button className={filter ? classNames(styles.filter__catalog_btn,styles.active) : styles.filter__catalog_btn} onClick={()=>setFilter(!filter)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 23 16"
              fill="none"
            >
              <path
                d="M0.984375 1C0.984375 0.447715 1.43209 0 1.98438 0H21.9844C22.5367 0 22.9844 0.447715 22.9844 1C22.9844 1.55228 22.5367 2 21.9844 2H1.98438C1.43209 2 0.984375 1.55228 0.984375 1Z"
                fill="#686870"
              />
              <path
                d="M4.48438 8C4.48438 7.44772 4.93209 7 5.48438 7H18.4844C19.0367 7 19.4844 7.44772 19.4844 8C19.4844 8.55228 19.0367 9 18.4844 9H5.48437C4.93209 9 4.48438 8.55228 4.48438 8Z"
                fill="#686870"
              />
              <path
                d="M8.48438 15C8.48438 14.4477 8.93209 14 9.48438 14H14.4844C15.0367 14 15.4844 14.4477 15.4844 15C15.4844 15.5523 15.0367 16 14.4844 16H9.48437C8.93209 16 8.48438 15.5523 8.48438 15Z"
                fill="#686870"
              />
            </svg>
          </button>
        </div>
        <div className={ filter ? classNames( styles.filter__ingrident,styles.active ): styles.filter__ingrident}>
          <div className={styles.filter__ingrident_top}>
            <h3 className={styles.filter__ingrident_top_title}>Инградиенты</h3>
            <div>
              <button className={styles.filter__ingrident_top_reset}>
                Сбросить все
              </button>
              <button className={styles.filter__ingrident_top_cancel} onClick={()=>setFilter(!filter)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.6928 4.89245C16.0077 5.20739 16.0077 5.71801 15.6928 6.03295L6.01537 15.7104C5.70043 16.0253 5.18981 16.0253 4.87488 15.7104C4.55994 15.3954 4.55994 14.8848 4.87488 14.5699L14.5523 4.89245C14.8672 4.57752 15.3778 4.57752 15.6928 4.89245Z"
                    fill="#1D1D1F"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.87488 4.89245C5.18981 4.57752 5.70043 4.57752 6.01537 4.89245L15.6928 14.5699C16.0077 14.8848 16.0077 15.3954 15.6928 15.7104C15.3778 16.0253 14.8672 16.0253 14.5523 15.7104L4.87488 6.03295C4.55994 5.71801 4.55994 5.20739 4.87488 4.89245Z"
                    fill="#1D1D1F"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className={styles.filter__catalog}>
            <button className={activeIng == 'Лосось' ? classNames(styles.filter__catalog_btn,styles.active) : styles.filter__catalog_btn} onClick={(e)=>handleFilter(e.target.textContent)}><img src={lasos} alt="image" />Лосось</button>
            <button className={activeIng == 'Угорь' ? classNames(styles.filter__catalog_btn,styles.active) : styles.filter__catalog_btn} onClick={(e)=>handleFilter(e.target.textContent)}><img src={ugor} alt="image" />Угорь</button>
            <button className={activeIng == 'Тунец' ? classNames(styles.filter__catalog_btn,styles.active) : styles.filter__catalog_btn} onClick={(e)=>handleFilter(e.target.textContent)}><img src={tunech} alt="image" />Тунец</button>
            <button className={activeIng == 'Куриное филе' ? classNames(styles.filter__catalog_btn,styles.active) : styles.filter__catalog_btn} onClick={(e)=>handleFilter(e.target.textContent)}><img src={file} alt="image" />Куриное филе</button>
            <button className={activeIng == 'Тофу' ? classNames(styles.filter__catalog_btn,styles.active) : styles.filter__catalog_btn} onClick={(e)=>handleFilter(e.target.textContent)}><img src={tofu} alt="image" />Тофу</button>
            <button className={activeIng == 'Сливочный сыр' ? classNames(styles.filter__catalog_btn,styles.active) : styles.filter__catalog_btn} onClick={(e)=>handleFilter(e.target.textContent)}><img src={sir} alt="image" />Сливочный сыр</button>
            <button className={activeIng == 'Авокадо' ? classNames(styles.filter__catalog_btn,styles.active) : styles.filter__catalog_btn} onClick={(e)=>handleFilter(e.target.textContent)}><img src={avakado} alt="image" />Авокадо</button>
            <button className={activeIng == 'Помидор' ? classNames(styles.filter__catalog_btn,styles.active) : styles.filter__catalog_btn} onClick={(e)=>handleFilter(e.target.textContent)}><img src={pomidor} alt="image" />Помидор</button>
            <button className={activeIng == 'Гриб шитаки' ? classNames(styles.filter__catalog_btn,styles.active) : styles.filter__catalog_btn} onClick={(e)=>handleFilter(e.target.textContent)}><img src={grib} alt="image" />Гриб шитаки</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
