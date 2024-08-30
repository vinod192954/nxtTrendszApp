import { Redirect,Route } from "react-router-dom"
import Cookies from 'js-cookie'
const PublicRoute=(props)=>{
    const jwtToken=Cookies.get("jwt_token")
    if (jwtToken!==undefined){
        return <Redirect to="/home"/>
    }
    return <Route {...props} />
}

export default PublicRoute