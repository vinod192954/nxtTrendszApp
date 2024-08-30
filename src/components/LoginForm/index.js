import { useState } from "react"
import Cookies from 'js-cookie'
import "./index.css"
const LoginForm=(props)=>{
    const [username,setUserName] = useState('')
    const [password,setPassword] = useState('')

    const onChangeUsername=(event)=>{
        setUserName(event.target.value)
    }
    const onChangePassword=(event)=>{
        setPassword(event.target.value)
    }
    

    const authenticateSuccessfully=(jwtToken)=>{
        Cookies.set("jwt_token",jwtToken,{expires:30}) 
        const {history} = props 
        history.replace('/home')
    }

    const onSubmitUserDetais=async(event)=>{
        event.preventDefault()
        const userDetails = {username,password} 
        const url = "https://apis.ccbp.in/login"
        const options={
            method:"POST",
            body:JSON.stringify(userDetails),
        }
        const response = await fetch(url,options)
        const data = await response.json()
      if (response.ok===true){
         const {jwt_token} = data
         authenticateSuccessfully(jwt_token)
      }

      setUserName('')
      setPassword('')
    }

    return (
        <div className="Login-page">
            <div className="login-image-container">
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png" 
                alt="website login" className="website-login"/>
            </div>
            <div className="right-side-section">
            <div className="login-form-container">
                <div>
                    <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                    alt="website logo"
                    className="website-logo"/>
                 </div>
                 <form onSubmit={onSubmitUserDetais} className="login-card">
                    <div>
                        <label className="Name">USERNAME</label>
                        <br/>
                        <input value={username} onChange={onChangeUsername} className="user-input" type="text"placeholder="Username" />
                    </div>
                    <div>
                        <label className="Name">PASSWORD</label>
                        <br/>
                        <input value={password} onChange={onChangePassword} className="user-input" type="password"placeholder="Password" />
                    </div>
                    <button  className="submit-button" type="submit">Login</button>
                 </form>
            </div>
            </div>
        </div>
    )
}
export default LoginForm