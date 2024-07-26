
import { useAuth } from "../authContext"
import {Navigate} from "react-router-dom"
export default function MyAccount(){
    const {user,auth}=useAuth()
    console.log(user)
   return auth ?
   <div className="myAccount">
            <h1>Welcome, {user}</h1>
            <h2>Here are all the games you have published</h2>
        </div>
    :
    <Navigate to={"/login"}/>


    
}