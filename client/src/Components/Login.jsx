import {useNavigate} from "react-router-dom"
import { useAuth } from "../authContext"
import {Navigate} from "react-router-dom"


export default function Login(prop){
    const navigate=useNavigate()
    const {auth}=useAuth()
    function handleClick(){
        navigate("/register")
    }
    return(
        auth?
        <Navigate to="/"/>
        :
        <div className="login">
            <form onSubmit={prop.handleSubmit}>
                <h1>Log in</h1>
                <label> Username </label>
                <input type="text" name="username" value={prop.loginForm.username} minLength={5} onChange={prop.handleChanges} required/> <br />
                <label> Password </label>
                <input type="password" name="password" value={prop.loginForm.password} minLength={8} onChange={prop.handleChanges} required/> <br />
                <input type="submit" className="submitBtn"/>
            </form>
            <section className="additional">
                <h3>{"Don't"} have an account yet?</h3>
                <button onClick={handleClick}>Register</button>
            </section>
        </div>
    )
}