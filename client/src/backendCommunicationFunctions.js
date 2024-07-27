import axios from "axios"




const serverInitialPort="http://localhost:3000/"

async function registerAxios(formData){
    const response=await axios.post(serverInitialPort+"register",formData,{withCredentials:true})
    console.log(response)
    if(response.status==200){
        console.log("All clear")
        
        return response.status
    }else{
        console.log("problem here")
        return response.status
    }
}
async function editAxios(gameId,formData){
    console.log(gameId)
    try {
        const response=await axios.put(serverInitialPort+"edit",{gameId,formData})
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
async function checkAuth(setUserLoggedIn,setUser) {
    try {
        const response = await axios.post(serverInitialPort + "auth", {}, { withCredentials: true });
        if (response.status === 200) {
            setUserLoggedIn(true);
            console.log("Logged in");
            console.log(response.data)
            setUser(response.data)
            

        } else {
            setUserLoggedIn(false);
            console.log("Not logged in");
        }
    } catch (error) {
        console.error("Error checking auth", error);
        setUserLoggedIn(false);
    }
}
async function loginAxios(formData){
    const response=await axios.post(serverInitialPort+"login",formData,{withCredentials:true})
    console.log(response)
    if(response.status==200){
        console.log("All clear")
        
        return response.status
    }else{
        console.log("problem here")
        return response.status
    }
}
async function createGameAxios(formData){
    const response=await axios.post(serverInitialPort+"createNewGame",formData)
    console.log(response)
}

async function getAllGamesAxios(){
    const response=await axios.get(serverInitialPort+"catalog")
    return response.data
}

async function getGameDetailsAxios(id){
    console.log(id)
    const response=await axios.post(serverInitialPort+"getDetails",{id})
    return response.data
}

async function addBuyerAxios(gameParams,user){
    const response =await axios.post(serverInitialPort+"addBuyer",{gameParams,user})
    console.log(response)
}


export {registerAxios,checkAuth,loginAxios,createGameAxios,getAllGamesAxios,getGameDetailsAxios,addBuyerAxios,editAxios}