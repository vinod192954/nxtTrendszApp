import './App.css';
import {BrowserRouter,Switch} from 'react-router-dom'
import CartContext from './components/context/CartContext';
import { useState } from 'react';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import ProductItemDetails from './components/ProductItemDetails';
import Products from './components/Products';
import Cart from './components/Cart';
import PublicRoute from './components/PublicRoute';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  const [cartList,setCartList] = useState([])

  const addProductCartItem=(productData)=>{
    setCartList(prevState=>{
      const productExist  = prevState.some((item)=>item.id===productData.id);
      if (productExist){
        return prevState
      }
      else{
        return [...prevState,productData]
      }
    })
  }

  const removeCartItem=()=>{

  }
  const increaseCartItemQuantity=()=>{

  }
  const decreaseCartItemQuantity=()=>{

  }

  const removeAllCartItems=()=>{

  }

  return (
    <div className="App">
    <BrowserRouter>
    <CartContext.Provider value={{
      cartList,
      addProductCartItem:addProductCartItem,
      removeCartItem:removeCartItem,
      removeAllCartItems:removeAllCartItems,
      increaseCartItemQuantity:increaseCartItemQuantity,
      decreaseCartItemQuantity:decreaseCartItemQuantity,
    }}>
      <Switch>
        <PublicRoute exact path="/" component={LoginForm} />
        <ProtectedRoute exact path="/home" component={Home}/>
        <ProtectedRoute exact path="/products/:id" component={ProductItemDetails} />
        <ProtectedRoute exact path="/products" component={Products} />
        <ProtectedRoute exact path="/cart" component={Cart} />
      </Switch>
      </CartContext.Provider>
    </BrowserRouter>
    </div>
  );
}

export default App;
