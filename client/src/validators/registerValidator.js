

async function checkRegister(registerFormData,setRegisterValid){
    if(registerFormData.username==""){

      setRegisterValid(false)
      console.log("1")
      return
    }
    if(registerFormData.email==""){
      setRegisterValid(false)
      console.log("2")
      return
    }if(registerFormData.password==""){
      setRegisterValid(false)
      console.log("4")
      return
    }if(registerFormData.password!==registerFormData.rePass){
      setRegisterValid(false)
      console.log("5")
      return
    }
    if(registerFormData.username.length<5){
      setRegisterValid(false)
      console.log("6")
      return
    }
    
    if(registerFormData.email.length<8){
      setRegisterValid(false)
      console.log("8")
      return
    }
    if(registerFormData.password.length<8){
      setRegisterValid(false)
      console.log("9")
      return
    }
    setRegisterValid(true)
  }

  export default checkRegister