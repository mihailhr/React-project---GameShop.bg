import { useEffect, useState } from "react"
import { getAllGamesAxios } from "../backendCommunicationFunctions"
import {Navigate, useNavigate} from "react-router-dom"

export default function Catalog(){
    const navigate=useNavigate()
    const [allGames,setAllGames]=useState([])
   async function getAllGames(){
        const axiosData=await getAllGamesAxios()
         setAllGames(axiosData)
   }
   function clickHandler(id){
    navigate("/catalog/" + id)
   }
   useEffect(()=>{
    getAllGames()
   },[])
   const content=allGames.map((game)=><li className="gameItem" key={game.name + game.creator}> 
   <img src={game.mainImage} alt={game.name +"Image"}/>
   <h1>{game.name}</h1>
   Price: {game.price} lv.
   <button onClick={()=>{clickHandler(game._id)}}>More info</button></li>)
    return(
        <div className="catalog">
            <section className="title">
            <h1>Games for sale</h1>
            </section>
            
            <section className="items">
                <ul>
                    {content}
                    {content}
                    {content}
                    {content}
                    {content}
                    {content}
                    {content}
                    {content}
                    {content}
                    {content}
                    {content}
                    {content}
                    {content}
                    {content}
                    {content}
                    {content}
                    {content}
                    {content}{content}
                    {content}
                    {content}
                    {content}
                    {content}
                    {content}{content}
                    {content}
                    {content}
                    {content}
                    {content}
                    {content}{content}
                    {content}
                    {content}
                    {content}
                    {content}
                    {content}{content}
                    {content}
                    {content}
                    {content}
                    {content}
                    {content}{content}
                    {content}
                    {content}
                    {content}
                    {content}
                    {content}{content}
                    {content}
                    {content}
                    {content}
                    {content}
                    {content}{content}
                    {content}
                    {content}
                    {content}
                    {content}
                    {content}
                    
                    
                </ul>
            </section>
        </div>
    )
}