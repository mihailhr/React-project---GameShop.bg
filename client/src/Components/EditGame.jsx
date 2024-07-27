
import { useState,useEffect } from "react"
import { useAuth } from "../authContext"
import { useParams } from "react-router-dom"
import { editAxios, getGameDetailsAxios } from "../backendCommunicationFunctions"
import checkGame from "../validators/gameValidator"
import { useNavigate } from "react-router-dom"

export default function EditGame(){
    const navigate=useNavigate()
    const {user} =useAuth()
    const {id}=useParams()
    const[gameDetails,setGameDetails]=useState({name:"",category:"sports",mainImage:"",secondaryImage:"",trailer:"",description:"",price:"",creator:"",buyers:[],_id:id})
    const [isCreator,setIsCreator]=useState(false)
    const [editIsValid,setEditIsValid]=useState(false)


    useEffect(() => {
        async function getDetails() {
            try {
                
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
    function handleEditChanges(e){
        const {name,value}=e.target
        setGameDetails({
            ...gameDetails,
            [name]:value
        })
        console.log(gameDetails)
    }

    useEffect(()=>{
        if(gameDetails.creator==user){
            setIsCreator(true)
        }
    },[gameDetails,user])
    console.log(user,gameDetails.creator,isCreator)


    async function handleEditSubmit(e){
        e.preventDefault()
        await checkGame(gameDetails,setEditIsValid)
        if(editIsValid){
            console.log(gameDetails.id)
            await editAxios(gameDetails._id,gameDetails)
            navigate("/catalog/" + gameDetails._id)
        }else{
            console.log("edit is not valid")
        }
        
    }
    return( 
        isCreator?
        <div className="publish">
            <article>
                <h1>
                    Edit your game
                </h1>
                <form onSubmit={handleEditSubmit} >
                    <label>Game name</label> <br />
                    <input type="text" name="name" value={gameDetails.name} onChange={handleEditChanges} required /> <br />
                    <label>Category</label> <br />
                    <select name="category"  value={gameDetails.category} onChange={handleEditChanges} required> 
                        <option value="sports" >Sports</option>
                        <option value="action">Action</option>
                        <option value="horror">Horror</option>
                        <option value="adventure">Adventure</option>
                        <option value="kids">Family friendly</option>
                        <option value="other">Other</option>
                    </select> <br />
                    <label >Main image</label> <br />
                    <input type="text" name="mainImage" value={gameDetails.mainImage} onChange={handleEditChanges}  required/><br />
                    <label >Secondary image</label><br />
                    <input type="text" name="secondaryImage" value={gameDetails.secondaryImage}  onChange={handleEditChanges} required/><br />
                    <label >Trailer</label><br />
                    <input type="text" name="trailer" value={gameDetails.trailer}  onChange={handleEditChanges} required/><br />
                    <label>Description</label><br />
                    <input type="text" name="description" value={gameDetails.description}  onChange={handleEditChanges} required/><br />
                    <label >Price</label><br />
                    <input type="number" required name="price" value={gameDetails.price}  onChange={handleEditChanges} /><br />
                    <input type="submit" className="submitBtn"/>
                </form>
            </article>
        </div>
        
        :
        <div className="publish"><h1>You have to be the creator of the game to edit it.</h1></div>
    )
}