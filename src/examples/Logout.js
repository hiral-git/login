import React, {Component} from 'react';
import {Link} from  'react-router-dom';

class Logout extends Component{
constructor(props){
    super(props)
    localStorage.removeItem("token")
}
    render(){
return(
<div>
<h1>
you have been logged out</h1>
<Link to='/login'> Login</Link></div>
);
    
}
}
export default Logout;