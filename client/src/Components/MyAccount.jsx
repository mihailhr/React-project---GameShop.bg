
import { useAuth } from "../authContext"
import {Navigate} from "react-router-dom"
export default function MyAccount(){
    const {user,auth}=useAuth()
    
   return auth ?
   <div className="myAccount">
            <h1>Welcome, {user}</h1>
        </div>
    :
    <Navigate to={"/login"}/>


    
}