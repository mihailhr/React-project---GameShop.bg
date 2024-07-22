import {Route,Routes} from "react-router-dom"
import Content from "./Components/Content"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import "./styles.css"
import Home from "./Components/Home"
export default function App(){
  return(
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>

      </Routes>
      <Footer/>
    </div>
  )
}