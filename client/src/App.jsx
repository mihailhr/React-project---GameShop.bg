/* eslint-disable no-unused-vars */
import { Route, Routes, useNavigate } from "react-router-dom";

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "./styles.css";
import Home from "./Components/Home";
import EditGame from "./Components/EditGame";
import Register from "./Components/Register";
import { useState,useEffect } from "react";
import checkRegister from "./validators/registerValidator";
import Logout from "./Components/Logout";
import { createGameAxios, loginAxios, registerAxios } from "./backendCommunicationFunctions";

import { useAuth } from "./authContext";
import Login from "./Components/Login";
import PublishGame from "./Components/PublishGame";
import MyAccount from "./Components/MyAccount";
import About from "./Components/About";
import Catalog from "./Components/Catalog";
import checkGame from "./validators/gameValidator";
import GameDetails from "./Components/GameDetails";
import NotFound from "./Components/NotFound";

export default function App() {
  const navigate = useNavigate();
  const { auth, setAuth,user } = useAuth();
  const [registerForm, setRegisterForm] = useState({
    username: "",
    email: "",
    password: "",
    rePass: "",
    gamesBougth:[]
  });
  const [registerIsValid, setIsRegisterValid] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  let additionalInfoRegister
  function handleLoginChanges(e) {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
        [name]:value
    })
  }
  useEffect(() => {
    if (registerIsValid) {
      (
        async () => {
        console.log("Valid register");
        const response = await registerAxios(registerForm);

        if (response === 200) {
          setAuth(true);
          setRegisterForm({
            username: "",
            email: "",
            password: "",
            rePass: "",
          });
          navigate("/");
        }
      })();
    }
  }, [registerIsValid]);
  
  async function handleLoginSubmit(e) {
    e.preventDefault();
  
    try {
      const serverRes = await loginAxios(loginForm); // Assume serverRes is directly the status code
  
      if (serverRes === 200) {
        console.log(serverRes + " good");
        setAuth(true);
  
        setLoginForm({
          username: "",
          password: "",
        });
        navigate("/");
      } else {
        console.log(serverRes + " bad");
        window.alert("Incorrect username or password");
      }
    } catch (error) {
      // Handle any unexpected errors
      console.error("An unexpected error occurred:", error);
      window.alert("Incorrect username or password");
    }
  }

  async function handleRegisterChanges(e) {
    const { name, value } = e.target;

    await setRegisterForm({
      ...registerForm,
      [name]: value,
    });
  }
  async function submitRegister(e) {
    e.preventDefault();
    console.log("submitted");
  
   
    additionalInfoRegister = await checkRegister(registerForm, setIsRegisterValid);
    
    console.log(registerIsValid);
    if (registerIsValid) {
      try {
        console.log("Valid register");
        const responseStatus = await registerAxios(registerForm);
        console.log("Status === " + responseStatus);
        
        if (responseStatus === 409) {
          additionalInfoRegister = "Username taken";
          return window.alert(additionalInfoRegister);
        } else if (responseStatus === 200) {
          setAuth(true);
          setRegisterForm({
            username: "",
            email: "",
            password: "",
            rePass: "",
          });
          navigate("/");
        } else {
          window.alert("An unexpected error occurred. Please try again later.");
        }
      } catch (error) {
        console.error("Unexpected error: ", error);
        window.alert("An unexpected error occurred. Please try again later.");
      }
    } else {
      window.alert(additionalInfoRegister);
    }
  }
  
   

  const [gameForm,setGameForm]=useState({name:"",category:"sports",mainImage:"",secondaryImage:"",trailer:"",description:"",price:""})
  const[isGameValid,setIsGameValid]=useState(false)

  function handleGameChanges(e){
    const {name,value}=e.target
    setGameForm({
      ...gameForm,
      [name]:value
    })
  }

  async function handleGameSubmit(e){
    e.preventDefault()
    await checkGame(gameForm,setIsGameValid)
    if(isGameValid){
      gameForm.creator=user
      const creatingGame=await createGameAxios(gameForm)
      
        console.log("Game created")
        setGameForm({name:"",category:"sports",mainImage:"",secondaryImage:"",trailer:"",description:"",price:""})
        navigate("/catalog")
      
    }
  }
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={
            <Register
              handleChanges={handleRegisterChanges}
              handleSubmit={submitRegister}
              registerFormData={registerForm}
            />
          }
        />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login  loginForm={loginForm} handleChanges={handleLoginChanges} handleSubmit={handleLoginSubmit} />} />
        <Route path="/createNewGame" element={<PublishGame handleChanges={handleGameChanges} formData={gameForm} handleSubmit={handleGameSubmit}/>}/>
        <Route path="/myAccount" element={<MyAccount/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path="/catalog/:id" element={<GameDetails/>}/>
        <Route path="/edit/:id" element={<EditGame/>} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>

      <Footer />
    </div>
  );
}
