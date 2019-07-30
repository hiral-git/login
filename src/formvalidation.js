import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';


import * as serviceWorker from './serviceWorker';

class Form extends React.Component{
    constructor(props){
      super(props);
      this.state={ 
        name:'',
        email:'',
        address:'',
        city:'',
        username:'',
        password:'',
        nameError:'',
        emailError:'',
        addressError:'',
        passwordError:''
        
      };
      this.handleChange=this.handleChange.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
     
  this.setState({ 
    [event.target.name] : event.target.value});
    console.log("value",this.state.address);
    console.log("value",this.state.username);
    console.log("value",this.state.password);
    console.log("value",event.target.value);
    }
  validate(){
  let nameError=" ";
  let emailError=" ";
  let addressError=" ";
  let passwordError=" ";
  var re = new RegExp("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$");
   if(!this.state.name){
     nameError="name could not be blank";
   }
  if(!this.state.email.includes("@")){
    emailError="invalid email id";
  }
  if(!this.state.address){
  addressError="please enter address";
  }
  if(!this.state.password.match(re)) {
    passwordError="password should contain number,letter and special characters";
  }
  
  if(emailError || nameError || addressError || passwordError){
    this.setState({emailError,nameError,addressError,passwordError});
    return false;
  }
  //alert('Name : '+this.state.name + 'Email : '+this.state.email +'City : '+this.state.city+ 'Username submitted: ' + this.state.username +   ' password submitted: '  +this.state.password );
  return true;
  };
    handleSubmit(event){
      event.preventDefault();
      alert('Name : '+this.state.name + 'Email : '+this.state.email +'address : ' +this.state.address+ 'City : '+this.state.city+ 'Username submitted: ' + this.state.username +   ' password submitted: '  +this.state.password );
      const isValid=this.validate();
      if(isValid){
       // alert('Name : '+this.state.name + 'Email : '+this.state.email +'City : '+this.state.city+ 'Username submitted: ' + this.state.username +   ' password submitted: '  +this.state.password );
        console.log(this.state);
        }
        
    }
    render(){
      
      return(
  <div className="login-box">
   <center>  
  <form onSubmit={this.handleSubmit}>
  <fieldset>
  <legend>Login</legend>
  <label>
  Name :
  
  <input type="text" value1={this.state.value} name="name" placeholder="Name" onChange={this.handleChange} /><br /><br />
  </label>
  <div style={{fontSize:12, color:"red"}}>{this.state.nameError}</div>
  <label>
  Email :   
  <input type="text" value1={this.state.value} name="email" placeholder="Email" onChange={this.handleChange} /><br /><br />
  </label>
  <div style={{fontSize:12, color:"red"}}>{this.state.emailError}</div>
  <label>
  Address :
     
  <input type="text"  value1={this.state.value} name="address" placeholder="Address" onChange={this.handleChange} /><br /><br />
  </label>
  <div style={{fontSize:12, color:"red"}}>{this.state.addressError}</div>
  <label>
  City :   
  <select value1={this.state.value} onChange={this.handleChange}>
  <option value="Ahmedabad">Ahmedabad</option>
  <option value="Vadodra">Vadodra</option>
  <option value="Surat">
  Surat</option>
  <option value="Rajkot">Rajkot</option>
  </select>
  <br /><br />
  </label>
  <label>
  Username : 
  <input type="text" value1={this.state.value} name="username" placeholder="Username" onChange={this.handleChange} /><br /><br />
  </label>
  <label>Password :
  <input type="password" value={this.state.value} name="password" placeholder="Password" onChange={this.handleChange} /><br />
  <br /></label>
  <div style={{fontSize:12, color:"red"}}>{this.state.passwordError}</div>
  
  <input type="submit" value="Submit" />
  </fieldset>
  </form>
  </center>
  </div>
      );
    }
  }
  ReactDOM.render(<Form />, document.getElementById('root'));
  serviceWorker.unregister();