import {FaGithub} from "react-icons/fa"
import {Link} from "react-router-dom"

export default function Footer(){
    return(
        <footer>
            <p>&copy; GamesShop.bg 2024. All rights reserved.</p>  
               <div className="git"><Link to={"https://github.com/mihailhr/React-project---GameShop.bg"} target="_blank"><FaGithub/></Link></div> 
        </footer>
    )
}