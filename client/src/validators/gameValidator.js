async function checkGame(formData,setValid){
    if(!formData.name || formData.name.length<2){
        return setValid(false)
    }
    if(!formData.mainImage || formData.mainImage.length<11){
        return setValid(false)
    }
    if(!formData.secondaryImage || formData.secondaryImage.length<11){
        return setValid(false)
    }
    if(!formData.trailer || formData.trailer.length<11){
        return setValid(false)
    }
    if(!formData.description || formData.description.length<21){
        return setValid(false)
    }
    if(!formData.price || formData.price<0){
        return setValid(false)
    }
    setValid(true)
}
export default checkGame