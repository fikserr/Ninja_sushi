import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./components/navbar"
import Home from "./layout/home"
import Order from './pages/order'
import About from './pages/about'
import News from './pages/news'
import Contract from './pages/contract'
import Basket from './components/basket'
import Notification from './components/notification'
import HomeMenu from './layout/homeMenu'
import Rolls from './components/rolls'
import Sushi from './components/sushi'
import Snacks from './components/snacks'
import Beverages from './components/beverages'
import Sets from './components/sets'
import Souses from './components/souses'


function App() {
  return (  
    <Router>

          <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/" element={<HomeMenu/>}>
                <Route path="rolls" element={<Rolls/>}/>
                <Route path="sushi" element={<Sushi/>}/>
                <Route path="sets" element={<Sets/>}/>
                <Route path="snacks" element={<Snacks/>}/>
                <Route path="beverages" element={<Beverages/>}/>
                <Route path="souses" element={<Souses/>}/>
              </Route>
              <Route path="order" element={<Order/>}/>
              <Route path="about" element={<About/>}/>
              <Route path="news" element={<News/>}/>
              <Route path='contract' element={<Contract/>}/>
              <Route path='basket' element={<Basket/>}/>
              <Route path='notification' element={<Notification/>}/>
            </Routes>

    </Router>
  )
}

export default App