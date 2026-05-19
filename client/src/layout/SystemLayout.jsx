import { Outlet } from "react-router-dom"
import Navbar from "../components/common/Navbar"
import Footer from "./Footer"

const SystemLayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default SystemLayout
