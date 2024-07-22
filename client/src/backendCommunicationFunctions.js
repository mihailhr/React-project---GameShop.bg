import axios from 'axios';
const portForAxios='http://localhost:3000/'
async function connecting(){
    await axios.get(portForAxios)
    .then(res=>{console.log(res)})
    .catch(err=>console.log(err))
}


export {connecting}