import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
//import ReactDOM from 'react-dom';
//import './style.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';
export default class Login extends Component{
  constructor(){
    super();
    const token=localStorage.getItem('token')
    //console.log(token)
     let loggedIn=true 
       this.state={
         loggedIn
       }
  
       if(token==null){
         loggedIn=false
       }
    //let loggedIn=false
    this.state={
      email:'',
      password:'',
     loggedIn
     
    };
    this.handleEmail=this.handleEmail.bind(this);
    this.handlePassword=this.handlePassword.bind(this);
    this.handleLogin=this.handleLogin.bind(this);
  }
  handleEmail(event){ 
    this.setState({email:event.target.value})
  }
  handlePassword(event){
        this.setState({password:event.target.value})
  }
  async handleLogin(event)
  {
    event.preventDefault();
    console.log("test");
    const obj={}
    obj.email=this.state.email;
    obj.password=this.state.password;
    console.log(obj);
    //http://192.168.1.53:5000/student_login'
    //http://192.168.1.54:5000/user/data
    //http://192.168.1.39:8000/application/view
    if(this.state.email && this.state.password){
   //localStorage.setItem('token', 'response.data')

     //this.setState({loggedIn:true})
    await fetch('http://192.168.1.54:5000/user/login',       
      {headers: {
        //"x-access-token":
        "Content-Type":"application/json",
        'Accept':"application/json"       // "Allow-Control-Allow-Origin": "*"
          },
      method: 'POST',
     
      body:JSON.stringify(obj) //{"email": "malvat.anim0@gmail.com", "password": "animhelly"}
        }).then((response)=>response.json()).then(response=>{
          if(response.data != null){
            localStorage.setItem('token', 'response.data')
            this.setState({loggedIn: true})}})
    }
      // ).then((response)=>response.json()
      //  ).then(response=>console.log(response))          
      //console.log(response.text())
  }

    render(){
      console.log("mystate",this.state.loggedIn);
    if(this.state.loggedIn===true){
      const token1=localStorage.getItem("token")
      console.log(token1)
      return(<Redirect to={'/home'} />)
      //const token1=localStorage.getItem("response.data")
    }
    
    return (
    <div className="login-box">
    <h2>Login Form</h2>
    <form onSubmit={this.handleLogin}>
    <div className="container">
    <label>
    Email:   
    <input type="text" value= {this.state.value} onChange={this.handleEmail} /><br /><br />
    </label>
    <label>Password: 
    <input type="password" value={this.state.value} onChange={this.handlePassword} /><br /><br />
    </label>
    <button type="submit" value="Login" >Login</button> 
    </div>
    </form>
    </div>
    );
    }
    }

// await fetch('http://192.168.1.54:5000/user/login',obj,       
// {headers: {
//   //"x-access-token":
//   "Content-Type":"application/json",
//   'Accept':"application/json"       // "Allow-Control-Allow-Origin": "*"
//     },
// method: 'POST',
// body:JSON.stringify(obj) //{"email": "malvat.anim0@gmail.com", "password": "animhelly"}
//   }
// ).then((response)=>response.text()).then(response=>console.log(response))
// //console.log(response.text())
// }
// }


// let loggedIn=false
// this.state={
//   email:'',
//   password:'',
//   loggedIn
// };
// this.handleEmail=this.handleEmail.bind(this);
// this.handlePassword=this.handlePassword.bind(this);
// this.handleLogin=this.handleLogin.bind(this);
// }
// handleEmail(event){ 
// this.setState({email:event.target.value})
// }
// handlePassword(event){
//     this.setState({password:event.target.value})
// }
// async handleLogin(event)
// {
// event.preventDefault();
// console.log("test");
// const obj={}
// obj.email=this.state.email;
// obj.password=this.state.password;
// console.log(obj);
// //http://192.168.1.53:5000/student_login'
// //http://192.168.1.54:5000/user/data
// //http://192.168.1.39:8000/application/view
// if(this.state.email && this.state.password){
//  sessionStorage.setItem('token',"res.data.token")

//   this.setState({loggedIn:true})
// await fetch('http://192.168.1.54:5000/user/login',       
//   {headers: {
//     //"x-access-token":
//     "Content-Type":"application/json",
//     'Accept':"application/json"       // "Allow-Control-Allow-Origin": "*"
//       },
//   method: 'POST',
//   body:JSON.stringify(obj) //{"email": "malvat.anim0@gmail.com", "password": "animhelly"}
//     }
//   ).then((response)=>response.json()
//    ).then(response=>console.log(response))          
//   //console.log(response.text())
// }
// }
// render(){
// if(this.state.loggedIn===true){
//   return(<Redirect to="/home"/>)
// }
// if(token==null){
//   return(<Redirect to="/login" />)
// }
// return (
// <div className="login-box">
// <h2>Login Form</h2>
// <form onSubmit={this.handleLogin}>
// <div className="container">
// <label>
// Email:   
// <input type="text" value= {this.state.value} onChange={this.handleEmail} /><br /><br />
// </label>
// <label>Password: 
// <input type="password" value={this.state.value} onChange={this.handlePassword} /><br /><br />
// </label>
// <button type="submit" value="Login" >Login</button> 
// </div>
// </form>
// </div>
// );
// }
// }


// await fetch('http://192.168.1.54:5000/user/login',       
//       { headers: {
//         //"x-access-token":
//         "Content-Type":"application/json",
//         'Accept':"application/json"       // "Allow-Control-Allow-Origin": "*"
//           },
//       method: 'POST',
//       body:JSON.stringify(obj) //{"email": "malvat.anim0@gmail.com", "password": "animhelly"}
//         }
//       ).then((response) =>
//       { 
//           let userresponse = response;
//           console.log(userresponse.data);
//           if(userresponse){
//           sessionStorage.setItem('data',JSON.stringify(userresponse));
//           this.setState({redirectToReferrer: true});
//           }
          
//       },this)
//       .catch((error) => alert(error))
//      this.setState({
//       email : '' ,
//       password : ''
//      })            
//   }
//   }

//   render() {
//     if (this.state.redirectToReferrer){
        
//       return (<Redirect to={'/home'}/>)
//       }
//       if (sessionStorage.getItem('data')){
      
//           return (<Redirect to={'/home'}/>)
//           }
    
//     return (
// <div className="login-box">
// <h2>Login Form</h2>
// <form onSubmit={this.handleLogin}>
// <div className="container">
// <label>
// Email:   
// <input type="text" value= {this.state.value} onChange={this.handleEmail} /><br /><br />
// </label>
// <label>Password: 
// <input type="password" value={this.state.value} onChange={this.handlePassword} /><br /><br />
// </label>
// <button type="submit" value="Login" >Login</button> 
// </div>
// </form>
// </div>
//  );
//   }
// }