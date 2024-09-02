import React from "react";
const CartContext=React.createContext({
    cartList:[],
    addProductCartItem:()=>{},
    removeCartItem:()=>{},
    increaseCartItemQuantity:()=>{},
    decreaseCartItemQuantity:()=>{},
    removeAllCartItems:()=>{},
})

export default CartContext