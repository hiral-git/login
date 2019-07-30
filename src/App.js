import React, {Component} from 'react';
//import logo from './logo.svg';
//import './App.css';
import './style.css';
import  Registration from './examples/Registration';
import Home from './examples/Home';
import Login from './examples/Login';
import Logout from './examples/Logout';
//import Logout from './examples/Logout';
import {BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom';
class App extends Component{
  constructor(){
    super();
    this.state={ 
      loggedIn:false
    }
   
  }

  render(){
    return(
<Router>

<div className="App">
<ul className="nav-links">
<li>
<Link to="/">Registration</Link>
</li>
  <li>
    <Link to="/home">Home</Link>
  </li>
 
  <li>
    <Link to="/login">Login</Link>
  </li>
</ul>
<hr />
<Switch>

<Route exact path="/" component={Registration} />
<Route path="/home" component={Home} />
<Route path="/login" component={Login} />
<Route path="/logout" component={Logout} />
</Switch>
</div>
</Router>
 );
  }
}
// function Home() {
//   return (

//     <div>
   
//       <h1 style={{fontFamily:"sans-serif"}}>Home</h1>
    
//     </div>
//   );
// }
export default App;
