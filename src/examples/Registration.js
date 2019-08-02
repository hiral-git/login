import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
//import ReactDOM from 'react-dom';
//import './style.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';
class Registration extends Component{
  constructor(){  
    super();
    this.state={
        name:'',
      email:'',
      password:''
    };
    this.handleName=this.handleName.bind(this);
    this.handleEmail=this.handleEmail.bind(this);
    this.handlePassword=this.handlePassword.bind(this);
    this.handleSignup=this.handleSignup.bind(this);
  }
  handleName(event){ 
    this.setState({name:event.target.value})
  }
  handleEmail(event){ 
    this.setState({email:event.target.value})
  }
  handlePassword(event){
        this.setState({password:event.target.value})
  }
  async handleSignup(event)
  {
    event.preventDefault();
    console.log("test");
    // let erp={}
    // erp.name=" ";
    // erp.email=" ";
    // erp.password=" ";
    //console.log(erp);
    const obj={
        name:this.state.name,
        email:this.state.email,
        password:this.state.password
    };
    console.log(obj);
    //http://192.168.1.53:5000/student_login'
    //http://192.168.1.54:5000/user/data
    //http://192.168.1.39:8000/application/view
    await fetch('http://192.168.1.54:5000/user/signup',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      }).then(function(response) {
        console.log(response);
        if(response.status===200){
          
          alert('registration successful')
          
       // return response.json();
        }
      }).catch((error) => alert("User Already exists"))
      // .then(function(body) {
        
      //   console.log(body);
        
        
      // });
      //.then(function(response){
    //     if(response.data === 200){
    //      // console.log("hello")
    //         //alert("user registered successfully!!")
    //    return(<Redirect to={'/login'} />)
    //     }
    // }
    //  )
    //  .catch((error) => alert("User Already exists"))
    //   {headers: {
    //     //"x-access-token":
    //     "Content-Type":"application/json",
    //     'Accept':"application/json"       // "Allow-Control-Allow-Origin": "*"
    //       },
    //   method: 'POST',
      //body:JSON.stringify(erp) //{"email": "malvat.anim0@gmail.com", "password": "animhelly"}
    //    }
     // )
             // .then((response)=>response.text()).then(response=>console.log(response))
      //console.log(response.text())
  }

  render(){
    // if(response.status===200){

    // }

    return(
<div className="reg-box">
<h2>Registration form</h2>
<form onSubmit={this.handleSignup}>
<div className="container">
<label>
Name 
<input type="text" value= {this.state.value} onChange={this.handleName} /><br /><br />
</label>
<label>
Email:   
<input type="text" value= {this.state.value} onChange={this.handleEmail} /><br /><br />
</label>
<label>Password: 
<input type="password" value={this.state.value} onChange={this.handlePassword} /><br /><br />
</label>
<button type="submit" value="Signup" >Register</button> 
</div>
</form>
</div>
 );
  }
}
export default Registration;
