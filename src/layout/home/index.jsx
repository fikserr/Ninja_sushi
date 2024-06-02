import Basket from "../../components/basket"
import Beverages from "../../components/beverages"
import Map from "../../components/map"
import Notification from "../../components/notification"
import Program from "../../components/program"
import Rolls from "../../components/rolls"
import Sets from "../../components/sets"
import SliderSushi from "../../components/sliderSushi"
import Snacks from "../../components/snacks"
import Sushi from "../../components/sushi"
import styles from './home.module.scss'

function Home() {
  return (
    <div className={styles.home}>
      <Notification/>
      <Basket/>
      <Sushi/>
      <Rolls/>
      <Sets/>
      <SliderSushi/>
      <Snacks/>
      <Beverages/>
      <Map/>
      <Program/>
    </div>
  )
}

export default Home