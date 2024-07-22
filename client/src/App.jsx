import {Route,Routes} from "react-router-dom"

import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import "./styles.css"
import Home from "./Components/Home"
import { connecting } from "./backendCommunicationFunctions"
export default function App(){
  connecting()
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