
import jsCookie from 'js-cookie';
import {useNavigate} from "react-router-dom"
import { useAuth } from "../authContext";
export default function Logout(){
const navigate=useNavigate()
const {setAuth} =useAuth()
    function logout(){
        if(jsCookie.get("token")){
             jsCookie.remove("token")
             setAuth(false)
        }
            navigate("/")
        

    }
    return(
        <div className='logout'>
            <article><h1>Do you really want to log out?</h1>
            <h3>You might miss some great offers!</h3>
            <button onClick={logout}>Log out</button></article>
            
        </div>
        
    )
}