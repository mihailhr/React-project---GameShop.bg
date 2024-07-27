import { useEffect, useState } from "react"
import { deleteGameAxios, getGameDetailsAxios } from "../backendCommunicationFunctions"
import {useParams} from "react-router-dom"
import { useAuth } from "../authContext"
import { addBuyerAxios } from "../backendCommunicationFunctions"

import { useNavigate } from "react-router-dom"
export default function GameDetails(){
    const [gameDetails,setGameDetails]=useState({name:"",category:"sports",mainImage:"",secondaryImage:"",trailer:"",description:"",price:"",creator:"",buyers:[]})
    const {id}=useParams()
    const {auth,user}=useAuth()
    const [alreadyBought,setAlreadyBought]=useState(false)
    const navigate=useNavigate()
    useEffect(() => {
        async function getDetails() {
            try {
                console.log(id);
                console.log(alreadyBought)
                const details = await getGameDetailsAxios(id);
                if (details) {
                    setGameDetails(details);
                }
            } catch (error) {
                console.error("Failed to fetch game details:", error);
            }
        }
        getDetails();
    }, [id]);
    useEffect(()=>{
        if(gameDetails.buyers.includes(user)){
            setAlreadyBought(true)
        }
    },[gameDetails,user])
    let content
    let buyButton=<button onClick={()=>buyButtonHandler()}>Buy</button>
    let bought=<h1>You have already bought this game</h1>
    let editButton=<button onClick={()=>navigate("/edit/" +gameDetails._id)}>Edit</button>
    let deleteButton=<button onClick={()=>{deleteButtonHandler()}}>Delete</button>
    if(!auth){
        content= <h1>Log in to buy the game</h1>
    }else if(user===gameDetails.creator){
        content=<>{editButton}{deleteButton}</>
    }else if(gameDetails.buyers.includes(user)){
        
        content=bought
    }else{
        content=buyButton
    }   
    console.log(gameDetails)
    async function buyButtonHandler(){
        const axiosOperation=await addBuyerAxios(id,user)
        console.log(axiosOperation)
        setGameDetails((prevDetails) => ({
            ...prevDetails,
            buyers: [...prevDetails.buyers, user]
        }));
    }
     async function deleteButtonHandler(){
        const userConfirmed=window.confirm(`Do you really want to delete ${gameDetails.name}?`)
        if(userConfirmed){
            console.log("User said yes")
            await deleteGameAxios(id)
            navigate("/catalog")
        }else{
            console.log("User said no")
        }
    }
    const convertToEmbedUrl = (url) => {
        const videoId = url.split('youtu.be/')[1] || url.split('v=')[1];
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
    };
    return(
        <div className="gameDetails">
            <section className="title"><h1>Game details: {gameDetails.name}</h1></section>
            <article><section className="gameImages">
                <img className="mainImage" src={gameDetails.mainImage} alt={gameDetails.name +"Main Image"} />
                <img  className="secondaryImage" src={gameDetails.secondaryImage} alt={gameDetails.name +"Secondary Image"} />
                

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