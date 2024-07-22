import {NavLink} from "react-router-dom"


export default function Navbar(){
    return(
        <nav className="navbar">
            <img src="/logo-no-background.png" alt="Website logo" />
            <ul className="mainNav">
                <li><NavLink to={"/"} >Home</NavLink></li>
                <li><NavLink to={"/catalog"}>Catalog</NavLink></li>
                <li><NavLink to={"/createNewGame"}>Publish your games</NavLink></li>
                <li><NavLink to={"/about"}>About</NavLink></li>
            </ul>
            <ul className="registerNav">
            <li><NavLink to={"/login"}>Log in</NavLink></li>
            <li><NavLink to={"/register"}>Register</NavLink></li>
            {/* <li><NavLink to={"/logout"}>Log out</NavLink></li>
            <li><NavLink to={"/myAccount"}>My account</NavLink></li> */}
            </ul>
        </nav>
    )
}