



export default function Register(prop){
    return(
        <div className="registerDiv">
        <form className="register"  onSubmit={prop.handleSubmit}>

            <label>Username </label> <input type="text" name="username" value={prop.registerFormData.username} onChange={prop.handleChanges} />   <br />
            
            <label>Email</label> 
            <input type="email" name="email" value={prop.registerFormData.email} onChange={prop.handleChanges} /> <br />
            <label>Age</label> 
            <input type="number" name="age" value={prop.registerFormData.age} onChange={prop.handleChanges} /> <br />
            <label>Password</label> 
            <input type="password" name="password" value={prop.registerFormData.password} onChange={prop.handleChanges}/> <br />
            <label>Confirm password</label> 
            <input type="password" name="rePass" value={prop.registerFormData.rePass} onChange={prop.handleChanges}/> <br />
            <input type="submit" /> 

        </form>
        </div>
    )
}