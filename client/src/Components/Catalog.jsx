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
   
   if(allGames.length>0){
    return(
        
        <div className="catalog">
            <section className="title">
            <h1>Games for sale</h1>
            </section>
            
            <section className="items">
                <ul>
                    {content}
                    
                    
                    
                </ul>
            </section>
        </div>
    )
   }else{
    return(
        <div className="catalog">
        <section className="titleSp">
        <h1>No games have been published yet.</h1>
        <img src="https://w0.peakpx.com/wallpaper/677/966/HD-wallpaper-sad-face-background-black-screen-styles.jpg" alt="" />
        </section>
        </div>
    )
   }
    
}