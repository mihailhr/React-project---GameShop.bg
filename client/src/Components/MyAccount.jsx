
import { useAuth } from "../authContext"
import {Navigate} from "react-router-dom"
export default function MyAccount(){
    const {user,auth}=useAuth()
    console.log(user)
   return auth ?
   <div className="myAccount">
            <h1>Welcome, {user}</h1>
            <section className="leftAndRight">
                <article className="leftInfo"> 
                    
                    <h1>Here are all the games that you have published</h1>
                    <section className="publishedGames"></section>
                    </article>
                <article className="rightInfo">
                    <h1>Keep track of the games that you have bought</h1>
                    <section className="gamesBought"></section>
                    </article>
            </section>
        </div>
    :
    <Navigate to={"/login"}/>


    
}