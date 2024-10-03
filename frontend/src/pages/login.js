import { useState } from "react"
import {useLogin} from "../hooks/useLogin"
import { Link  } from "react-router-dom"

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, isLoading, error} = useLogin()

    const handleSubmit = async(e) => {
        e.preventDefault() //do not refresh page on submit
        await login(email, password)
    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <h3>Login</h3>

            <label>Email:</label>
            <input 
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}/>
            <label>Password</label>
            <input //if form is loading we need to disable the button
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}/>
            <button disabled={isLoading}>Login</button><br/>
            <Link to="/signup">
                <button type="button">Sign up</button>
            </Link>
            {error && <div className="error">{error}</div>}
        </form>
    )
}
export default Login