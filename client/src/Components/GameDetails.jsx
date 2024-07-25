import { useEffect, useState } from "react"
import { getGameDetailsAxios } from "../backendCommunicationFunctions"
import {useParams} from "react-router-dom"

export default function GameDetails(){
    const [gameDetails,setGameDetails]=useState({name:"",category:"sports",mainImage:"",secondaryImage:"",trailer:"",description:"",price:"",creator:""})
    const {id}=useParams()
    
    useEffect(()=>  {
     async function getDetails(){
        console.log(id)
        const details=await getGameDetailsAxios(id)
        if(details){
            setGameDetails(details)
        }
     }
     getDetails()
    },[id])
    console.log(gameDetails)
    return(
        <div className="gameDetails">
            <h1>Game details: {gameDetails.name}</h1>
            <section className="gameImages">
                <img src={gameDetails.mainImage} alt={gameDetails.name +"Main Image"} />
                <img src={gameDetails.secondaryImage} alt={gameDetails.name +"Secondary Image"} />
                <video  controls autoPlay>
                    <source src={gameDetails.trailer} />
                 </video>

            </section>
            <h2>Description</h2>
            <p>{gameDetails.description}</p>
            <h2>Category: {gameDetails.category}</h2>
            <h2>Price: {gameDetails.price} leva.</h2>
            </div>
        
    )
}