import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./components/navbar"
import Home from "./layout/home"
import Order from './pages/order'
import About from './pages/about'
import News from './pages/news'
import Footer from './components/footer'

function App() {
  return (  
    <Router>

          <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="order" element={<Order/>}/>
              <Route path="about" element={<About/>}/>
              <Route path="news" element={<News/>}/>
            </Routes>
          <Footer/>
    </Router>
  )
}

export default App