import {NavLink} from "react-router-dom"
import { useAuth } from "../authContext";




export default function Navbar(){
    const { auth,user} = useAuth();
    
    
    return(
        <nav className="navbar">
            <img src="/logo-no-background.png" alt="Website logo" />
            <ul className="mainNav">
                <li><NavLink to={"/"} >Home</NavLink></li>
                <li><NavLink to={"/catalog"}>Catalog</NavLink></li>
                {auth && <li><NavLink to={"/createNewGame"}>Publish your games</NavLink></li>}
                <li><NavLink to={"/about"}>About</NavLink></li>
            </ul>
            <ul className="registerNav">
            
            {auth ? <><li><NavLink to={"/logout"}> Log out</NavLink></li>
            <li><NavLink to={"/myAccount/"+user}>My account</NavLink></li></> :  <><li><NavLink to={"/login"}>Log in</NavLink></li>
            <li><NavLink to={"/register"}>Register</NavLink></li></>}
            
            </ul>
        </nav>
    )
}