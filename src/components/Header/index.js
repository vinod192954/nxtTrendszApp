import {useState} from "react"
import Cookies from 'js-cookie'
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

import {withRouter} from 'react-router-dom'
import "./index.css"

const Header = (props)=>{
    const [isShow,setShow] = useState(false)

    const onClickLogout=()=>{
        Cookies.remove("jwt_token")
        const {history} = props
        history.replace("/")
    }

    const onClickToChangeVisibility=()=>{
        setShow(prevState=>!prevState)
    }

    const onClickToChangeButton=()=>{
        setShow(false)
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
            {isShow===false ?  ( <div className='hamburger-icon'>
               <RxHamburgerMenu onClick={onClickToChangeVisibility} />
            </div>) : ""}
           
            {isShow && ( <div className='mobile-view-links'>
            <ul className="mobile-nav-links">
                    <li>Home</li>
                    <li>Products</li>
                    <li>Cart</li>
                    <button onClick={onClickLogout} type="button">
                        Logout
                    </button>
                    <button className="close-button" onClick={onClickToChangeButton}>
                    <IoMdClose />
                    </button>
                </ul>
            </div>)}
           
        </div>
    )
}

export default withRouter(Header)