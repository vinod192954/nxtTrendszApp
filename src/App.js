import './App.css';
import {BrowserRouter,Switch} from 'react-router-dom'
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import ProductItemDetails from './components/ProductItemDetails';
import Products from './components/Products';
import Cart from './components/Cart';
import PublicRoute from './components/PublicRoute';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <PublicRoute exact path="/" component={LoginForm} />
        <ProtectedRoute exact path="/home" component={Home}/>
        <ProtectedRoute exact path="/products/:id" component={ProductItemDetails} />
        <ProtectedRoute exact path="/products" component={Products} />
        <ProtectedRoute exact path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
