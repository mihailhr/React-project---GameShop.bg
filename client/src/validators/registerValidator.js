

async function checkRegister(registerFormData,setRegisterValid){
    if(registerFormData.username==""){

      setRegisterValid(false)
      console.log("1")
      return "Invalid username"
    }
    if(registerFormData.email==""){
      setRegisterValid(false)
      console.log("2")
      return "Invalid email"
    }if(registerFormData.password==""){
      setRegisterValid(false)
      console.log("4")
      return "Invalid password"
    }if(registerFormData.password!==registerFormData.rePass){
      setRegisterValid(false)
      console.log("5")
      return "Invalid password confirmation"
    }
    if(registerFormData.username.length<5){
      setRegisterValid(false)
      console.log("6")
      return "Invalid username"
    }
    
    if(registerFormData.email.length<8){
      setRegisterValid(false)
      console.log("8")
      return "Invalid email"
    }
    if(registerFormData.password.length<8){
      setRegisterValid(false)
      console.log("9")
      return "Invalid password"
    }
    setRegisterValid(true)
    return "Successful registration. Welcome!"
  }

  export default checkRegister