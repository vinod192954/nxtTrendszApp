import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './components/Home';
import LoginForm from './components/LoginForm';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/home" component={Home}/>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
