

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
      return "Username should be at least 5 characters long."
    }
    
    if(registerFormData.email.length<8){
      setRegisterValid(false)
      console.log("8")
      return "Email should be at least 8 characters long."
    }
    if(registerFormData.password.length<8){
      setRegisterValid(false)
      console.log("9")
      return "Password should be at least 8 characters long."
    }
    setRegisterValid(true)
    return "Successful registration. Welcome!"
  }

  export default checkRegister