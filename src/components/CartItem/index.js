import { BsPlusSquare } from "react-icons/bs";
import { BsDashSquare } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import "./index.css"
const CartItem=(props)=>{
    const {cartItem} = props
    const {title,brand,price,imageUrl,quantity} = cartItem
    return (
        <li>
            <div className="cart-list-item">
                <div className="cart-details">
                    <img src={imageUrl} className="p-image" alt="product image"/>
                    <div>
                        <h1 className="cart-item-title">{title}</h1>
                        <p>{`by ${brand}`}</p>
                    </div>
                </div>
                <div className="quantity-controls">
                    <div>
                    <button className="btn" type="button">
                        <BsDashSquare/>
                    </button>
                    </div>
                    <p>{quantity}</p>
                    <div>
                    <button className="btn" type="button">
                        <BsPlusSquare/>
                    </button>
                    </div>
                </div>
                <p className="cart-item-price">{`Rs ${price}/-`}</p>
                <button className="btn" type="button">
                    <AiFillCloseCircle />
                </button>
            </div>
        </li>
    )
}
export default CartItem