import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages';
import SignInPage from './pages/signin';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component= {Home}/>
          <Route path="/sign-in" exact component= {SignInPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
