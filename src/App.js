import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
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
  const [cartList, setCartList] = useState([]);

  const addProductCartItem = (productData) => {
    setCartList(prevState => {
      const productExist = prevState.some(item => item.id === productData.id);
      if (productExist) {
        return prevState;
      } else {
        return [...prevState, { ...productData, originalPrice: productData.price }];
      }
    });
  };

  const removeCartItem = (id) => {
    const filteredItems = cartList.filter(eachItem => eachItem.id !== id);
    setCartList(filteredItems);
  };

  const increaseCartItemQuantity = (id) => {
    const updatedCartList = cartList.map(eachCart => {
      if (eachCart.id === id) {
        return { 
          ...eachCart, 
          quantity: eachCart.quantity + 1, 
          price: eachCart.originalPrice * (eachCart.quantity + 1) 
        };
      } else {
        return eachCart;
      }
    });
    setCartList(updatedCartList);
  };

  const decreaseCartItemQuantity = (id) => {
    const updatedCartList = cartList.map(eachCart => {
      if (eachCart.id === id && eachCart.quantity > 1) {
        return { 
          ...eachCart, 
          quantity: eachCart.quantity - 1, 
          price: eachCart.originalPrice * (eachCart.quantity - 1) 
        };
      } else {
        return eachCart;
      }
    });
    setCartList(updatedCartList);
  };

  const removeAllCartItems = () => {
    setCartList([]);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <CartContext.Provider value={{
          cartList,
          addProductCartItem,
          removeCartItem,
          removeAllCartItems,
          increaseCartItemQuantity,
          decreaseCartItemQuantity,
        }}>
          <Switch>
            <PublicRoute exact path="/" component={LoginForm} />
            <ProtectedRoute exact path="/home" component={Home} />
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
