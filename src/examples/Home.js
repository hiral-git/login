import React, {Component} from 'react';
//import logo from './logo.svg';
//import './App.css';
//import Logout from './Logout';
import {Redirect,Link} from 'react-router-dom';
//import Login from './Login';
// import About from '../About';
// import Contact from '../Contact';

class Home extends Component {
  constructor(props){
    super(props);
    
  const token=localStorage.getItem('token')
  console.log(token)
   let loggedIn=true
     this.state={
       loggedIn
     }

     if(token==null){
       loggedIn=false
     }
     this.state={
       loggedIn
     }
      
   }
  render(){
    console.log("hello",this.state.loggedIn)
    if(this.state.loggedIn===false)
    { 
      
         return<Redirect to={'/login'} />
       }
  //   const user=localStorage.getItem('token1')
  //   console.log(user);
  //  if(!user){
  //    return<Redirect to={'/login'} />
  //  }
     return (
       <div> 
      <h1>Home</h1>
      <Link to="/logout">Logout</Link>
       </div>
     
     );
   }
  }
  

    

// render(){
//   if (this.state.redirectToReferrer) {
//     return (<Redirect to={'/login'}/>)
//   }
//     return (
//       <div> 
      
//      <h1>Home page</h1>
      
//       </div>
    
//     );
//   }

 

export default Home;



//  // export default Home;
//  const token=sessionStorage.getItem("token")
//  //  let loggedIn=true;
//    this.state={
//      loggedIn:true
//    }
//    if(token==null){
//      loggedIn=false
//    }
//    else{
//      this.setState={
//        loggedIn
//      }
//    }
//  }
// render(){
//  if(this.state.loggedIn===false){
//    return<Redirect to="/login" />
//  }
//    return (
//      <div> 
     
//     <h1>Home page</h1>
     
//      </div>
   
//    );
//  }
// }


// export default Home;
