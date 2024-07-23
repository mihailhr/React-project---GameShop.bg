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
import { loginAxios, registerAxios } from "./backendCommunicationFunctions";

import { useAuth } from "./authContext";
import Login from "./Components/Login";

export default function App() {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const [registerForm, setRegisterForm] = useState({
    username: "",
    age: 0,
    email: "",
    password: "",
    rePass: "",
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

    setRegisterForm({
      ...registerForm,
      [name]: value,
    });
  }
  async function submitRegister(e) {
    e.preventDefault();
    console.log("submitted");
    checkRegister(registerForm, setIsRegisterValid);
    if (registerIsValid) {
      console.log("Valid register");
      const response = await registerAxios(registerForm);

      if (response === 200) {
        
        setAuth(true);
        setRegisterForm({
          username: "",
          age: 0,
          email: "",
          password: "",
          rePass: "",
        });
      }
      navigate("/");
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
        <Route path="/login" element={<Login 
        loginForm={loginForm}
        handleChanges={handleLoginChanges}
        handleSubmit={handleLoginSubmit}
        
        />} />
      </Routes>

      <Footer />
    </div>
  );
}
