import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./components/navbar"
import Home from "./layout/home"
import Order from './pages/order'
import About from './pages/about'
import News from './pages/news'
import Footer from './components/footer'
import Contract from './pages/contract'
import Basket from './components/basket'


function App() {
  return (  
    <Router>

          <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="order" element={<Order/>}/>
              <Route path="about" element={<About/>}/>
              <Route path="news" element={<News/>}/>
              <Route path='basket' element={<Basket/>}/>
              <Route path='contract' element={<Contract/>}/>
            </Routes>
          <Footer/>
    </Router>
  )
}

export default App