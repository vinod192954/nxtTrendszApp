import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import "./index.css"

const Header = (props)=>{

    const onClickLogout=()=>{
        Cookies.remove("jwt_token")
        const {history} = props
        history.replace("/")
    }

    return (
        <div className="NavBar-container">
            <div className="logo-container">
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                alt="website logo" className="logo" />
            </div>
            <div className="header-links">
                <ul className="nav-links">
                    <li>Home</li>
                    <li>Products</li>
                    <li>Cart</li>
                    <button onClick={onClickLogout} type="button">
                        Logout
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default withRouter(Header)