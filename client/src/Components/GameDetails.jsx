import { useEffect, useState } from "react"
import { getGameDetailsAxios } from "../backendCommunicationFunctions"
import {useParams} from "react-router-dom"
import { useAuth } from "../authContext"
export default function GameDetails(){
    const [gameDetails,setGameDetails]=useState({name:"",category:"sports",mainImage:"",secondaryImage:"",trailer:"",description:"",price:"",creator:""})
    const {id}=useParams()
    const {auth,user}=useAuth()
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
    let content
    let buyButton=<button>Buy</button>
    let bought=<h1>You have already bought this game</h1>
    let editButton=<button>Edit</button>
    let deleteButton=<button>Delete</button>
    if(!auth){
        content= <h1>Log in to buy the game</h1>
    }else if(user===gameDetails.creator){
        content=<>{editButton}{deleteButton}</>
    }else{
        content=buyButton
    }
    console.log(gameDetails)
    const convertToEmbedUrl = (url) => {
        const videoId = url.split('youtu.be/')[1] || url.split('v=')[1];
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
    };
    return(
        <div className="gameDetails">
            <section className="title"><h1>Game details: {gameDetails.name}</h1></section>
            <article><section className="gameImages">
                <img src={gameDetails.mainImage} alt={gameDetails.name +"Main Image"} />
                <img src={gameDetails.secondaryImage} alt={gameDetails.name +"Secondary Image"} />
                

            </section>
            <article className="right">
            <section className="info">
                <article><h2>Description</h2>
                <p>{gameDetails.description}</p></article>
            
            <h2>Category: {gameDetails.category}</h2>
            <h2>Price: {gameDetails.price} leva.</h2>
            <iframe
                width="300"
                height="200"
                
                src={convertToEmbedUrl(gameDetails.trailer)}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube Video"
            ></iframe>
            </section>
           
            
            </article>
            
            
            </article>
            
            <div className="functionality">{content}</div>
            
            </div>

            
        
    )
}