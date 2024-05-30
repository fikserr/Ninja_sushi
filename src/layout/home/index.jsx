import Beverages from "../../components/beverages"
import Map from "../../components/map"
import Program from "../../components/program"
import Rolls from "../../components/rolls"
import Sets from "../../components/sets"
import SliderSushi from "../../components/sliderSushi"
import Snacks from "../../components/snacks"
import Sushi from "../../components/sushi"


function Home() {
  return (
    <div>
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