async function checkGame(formData,setValid){
    if(!formData.name || formData.name.length<2){
        console.log(1)
        return setValid(false)
    }
    if(!formData.mainImage || formData.mainImage.length<11){
        console.log(2)
        return setValid(false)
    }
    if(!formData.secondaryImage || formData.secondaryImage.length<11){
        console.log(3)
        return setValid(false)
    }
    if(!formData.trailer || formData.trailer.length<11){
        console.log(4)
        return setValid(false)
    }
    if(!formData.description || formData.description.length<21){
        console.log(5)
        return setValid(false)
    }
    if(!formData.price || formData.price<0){
        console.log(6)
        return setValid(false)
    }
    setValid(true)
}
export default checkGame