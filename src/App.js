import logo from './logo.svg';
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import Login from './Components/Pages/Login';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/dashboard" component={Home} />
        <Route exact path="/contactus" component={Contact} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  </div>
  );
}

export default App;
