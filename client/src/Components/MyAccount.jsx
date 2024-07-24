
import { useAuth } from "../authContext"
export default function MyAccount(){
    const {user}=useAuth()
    console.log(user)
    return(
        <div className="myAccount">
            <h1>Welcome, {user}</h1>
        </div>
    )
}