import './App.css';
import {BrowserRouter,Switch} from 'react-router-dom'
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import PublicRoute from './components/PublicRoute';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <PublicRoute exact path="/" component={LoginForm} />
        <ProtectedRoute exact path="/home" component={Home}/>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
