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
                </div>) }
                
            </>
        )
    }}
  </CartContext.Consumer>
   
}

export default Cart