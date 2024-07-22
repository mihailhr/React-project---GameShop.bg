import {NavLink} from "react-router-dom"


export default function Navbar(){
    return(
        <nav className="navbar">
            <img src="/logo-no-background.png" alt="Website logo" />
            <ul className="mainNav">
                <li><NavLink>Home</NavLink></li>
                <li><NavLink>Catalog</NavLink></li>
                <li><NavLink>Publish your games</NavLink></li>
                <li><NavLink>About</NavLink></li>
            </ul>
            <ul className="registerNav">
            {/* <li><NavLink>Log in</NavLink></li>
            <li><NavLink>Register</NavLink></li> */}
            <li><NavLink>Log out</NavLink></li>
            <li><NavLink>My account</NavLink></li>
            </ul>
        </nav>
    )
}