import { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import CartContext from "../context/CartContext";
import { withRouter } from 'react-router-dom';
import "./index.css";

const Header = (props) => {
    const [isShow, setShow] = useState(false);

    const onClickLogout = () => {
        Cookies.remove("jwt_token");
        const { history } = props;
        history.replace("/");
    };

    const onClickToChangeVisibility = () => {
        setShow(prevState => !prevState);
    };

    const onClickToChangeButton = () => {
        setShow(false);
    };

    return (
        <CartContext.Consumer>
            {value => {
                const { cartList } = value;
                const cartCount = cartList.length;
                return (
                    <div className="NavBar-container">
                        <div className="logo-container">
                            <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                                alt="website logo" className="logo" />
                        </div>
                        <div className="header-links">
                            <ul className="nav-links">
                                <Link className="link" to="/home">
                                    <li>Home</li>
                                </Link>
                                <Link className="link" to="/products">
                                    <li>Products</li>
                                </Link>
                                <Link className="link" to="/cart">
                                    <li>Cart <span className="count">{cartCount}</span></li>
                                </Link>
                                <button onClick={onClickLogout} type="button">
                                    Logout
                                </button>
                            </ul>
                        </div>
                        {isShow === false ? (
                            <div className='hamburger-icon'>
                                <RxHamburgerMenu onClick={onClickToChangeVisibility} />
                            </div>
                        ) : ""}
                        {isShow && (
                            <div className='mobile-view-links'>
                                <ul className="mobile-nav-links">
                                    <Link className="link" to="/home">
                                        <li>Home</li>
                                    </Link>
                                    <Link className="link" to="/products">
                                        <li>Products</li>
                                    </Link>
                                    <Link className="link" to="/cart">
                                        <li>Cart</li>
                                    </Link>
                                    <button onClick={onClickLogout} type="button">
                                        Logout
                                    </button>
                                    <button className="close-button" onClick={onClickToChangeButton}>
                                        <IoMdClose />
                                    </button>
                                </ul>
                            </div>
                        )}
                    </div>
                );
            }}
        </CartContext.Consumer>
    );
}

export default withRouter(Header);
