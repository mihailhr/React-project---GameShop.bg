import {useNavigate} from "react-router-dom"
import { useAuth } from "../authContext"
import {Navigate} from "react-router-dom"


export default function Register(prop){
    const navigate=useNavigate()
    const {auth}=useAuth()
    function redirectToLogin(){
        navigate("/login")
    }
    return(
        auth?
        <Navigate to="/"/>
        :
        <div className="registerDiv">
            
        <form className="register"  onSubmit={prop.handleSubmit}>
        <h1>Create an account</h1>
            <label>Username </label> <input type="text" name="username" value={prop.registerFormData.username} onChange={prop.handleChanges} />   <br />
            
            <label>Email</label> 
            <input type="email" name="email" value={prop.registerFormData.email} onChange={prop.handleChanges} /> <br />
            
            <label>Password</label> 
            <input type="password" name="password" value={prop.registerFormData.password} onChange={prop.handleChanges}/> <br />
            <label>Confirm password</label> 
            <input type="password" name="rePass" value={prop.registerFormData.rePass} onChange={prop.handleChanges}/> <br />
            <input type="submit" className="inputButton" /> 

        </form>

        <div className="redirect">
            <h1>Registration requirements</h1>
            <ul>
                <li>Your username should be at least 5 characters long.</li>
                <li>Enter a valid email that is longer than 7 characters.</li>
                <li>Minimal allowed length for passwords - 8 characters.</li>
                
            </ul>

        <p>Already have an account?</p>
        <button onClick={redirectToLogin}>Log in</button>
        </div>
        </div>
    )
}