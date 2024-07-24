
import jsCookie from 'js-cookie';
import {useNavigate,Navigate} from "react-router-dom"
import { useAuth } from "../authContext";
export default function Logout(){
const navigate=useNavigate()
const {setAuth,auth} =useAuth()
    function logout(){
        if(jsCookie.get("token")){
             jsCookie.remove("token")
             setAuth(false)
        }
            navigate("/")
        

    }
    return(
        auth?
        <div className='logout'>
            <article><h1>Do you really want to log out?</h1>
            <h3>You might miss some great offers!</h3>
            <button onClick={logout}>Log out</button></article>
            
        </div>
        :
        <Navigate to={"/"}/>
        
    )
}