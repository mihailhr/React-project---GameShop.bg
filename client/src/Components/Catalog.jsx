import { useEffect, useState } from "react"
import { getAllGamesAxios } from "../backendCommunicationFunctions"


export default function Catalog(){
    const [allGames,setAllGames]=useState([])
   async function getAllGames(){
        const axiosData=await getAllGamesAxios()
         setAllGames(axiosData)
   }
   useEffect(()=>{
    getAllGames()
   },[])
   const content=allGames.map((game)=><li key={game.name + game.creator}> Name: {game.name}</li>)
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
                </ul>
            </section>
        </div>
    )
}