import { Outlet } from 'react-router'
import Menu from '../../components/menu'
import Footer from '../../components/footer'
import About from '../../pages/about'

function HomeMenu() {
  return (
    <>
    <Menu/>
    <Outlet/>
    <About/>
    <Footer/>
    </>
  )
}

export default HomeMenu