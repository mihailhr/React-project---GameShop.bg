export default function Login(prop){
    return(
        <div className="login">
            <form onSubmit={prop.handleSubmit}>
                <h1>Log in</h1>
                <label> Username </label>
                <input type="text" name="username" value={prop.loginForm.username} onChange={prop.handleChanges}/> <br />
                <label> Password </label>
                <input type="password" name="password" value={prop.loginForm.password} onChange={prop.handleChanges} /> <br />
                <input type="submit" />
            </form>
            <section className="additional">
                <h3>Don't have an account yet?</h3>
                <button>Register</button>
            </section>
        </div>
    )
}