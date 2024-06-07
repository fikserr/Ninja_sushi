import Basket from "../../components/basket"
import Beverages from "../../components/beverages"
import Map from "../../components/map"
import Menu from "../../components/menu"
import Notification from "../../components/notification"
import Program from "../../components/program"
import Rolls from "../../components/rolls"
import Sets from "../../components/sets"
import SliderSushi from "../../components/sliderSushi"
import Snacks from "../../components/snacks"
import Sushi from "../../components/sushi"
import About from "../../pages/about"
import Header from "../../pages/header"
import styles from './home.module.scss'

function Home() {
  return (
    <div className={styles.home}>
      <Notification/>
      <Basket/>
      <Menu/>
      <Header/>
      <Sushi/>
      <Rolls/>
      <Sets/>
      <SliderSushi/>
      <Snacks/>
      <Beverages/>
      <Map/>
      <Program/>
      <About/>
    </div>
  )
}

export default Home