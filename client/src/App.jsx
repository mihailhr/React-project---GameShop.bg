/* eslint-disable no-unused-vars */
import { Route, Routes, useNavigate } from "react-router-dom";

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "./styles.css";
import Home from "./Components/Home";

import Register from "./Components/Register";
import { useState } from "react";
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

  function handleLoginChanges(e) {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
        [name]:value
    })
  }

  async function handleLoginSubmit(e){
      e.preventDefault()
      console.log(loginForm)
      const serverRes=await loginAxios(loginForm)
      if (serverRes === 200) {
        
        setAuth(true);
        
        setLoginForm({
          username: "",
          password: "",
          
        });
      }
      navigate("/");
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
    await checkRegister(registerForm, setIsRegisterValid);
    if (registerIsValid) {
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
      }
      navigate("/");
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
      </Routes>

      <Footer />
    </div>
  );
}
