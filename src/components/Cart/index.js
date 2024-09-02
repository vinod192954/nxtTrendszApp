import CartContext from "../context/CartContext"
import CartItem from "../CartItem"
import Header from "../Header"
import EmptyCartView from "../EmptyCartView"
import "./index.css"
const Cart=()=>{
  return <CartContext.Consumer>
    {value=>{
        const {cartList} = value 
        console.log(cartList)
        const totalCartPrice= cartList.reduce((total,item)=>total + item.price,0)
        return (
            <>
                <Header />
                {cartList.length===0 ? <EmptyCartView/> : (<div>
                    <h1 >My Cart</h1>
                    <ul className="cart-items">
                       {cartList.map((eachCartItem)=>(
                        <CartItem cartItem={eachCartItem} key={eachCartItem.id} />
                       ))} 
                    </ul>
                    <div className="cart-total">
                      <div className="cart-summary">
                        <div className="price-container">
                        <h1>Order Total:</h1>
                        <p className="total-price">{`Rs ${totalCartPrice}/-`}</p>
                        </div>
                        <div>
                          <p>{`${cartList.length} items in cart`}</p>
                          <button className="checkout-btn" type="button">Checkout</button>
                        </div>
                       </div>
                    </div>
                </div>) }
                
            </>
        )
    }}
  </CartContext.Consumer>
   
}

export default Cart