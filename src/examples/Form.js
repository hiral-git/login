import React from 'react';
//import ReactDOM from 'react-dom';
import './style.css';


class Form extends React.Component{
        constructor(props){
          super(props);
          this.state={ 
            name:'',
            username:'',
            password:''
          };
          this.handleChange=this.handleChange.bind(this);
          this.handleSubmit=this.handleSubmit.bind(this);
        }
        handleChange(event){
         
      this.setState({ 
        [event.target.name] : event.target.value});
        console.log("value",this.state.username);
        console.log("value",this.state.password);
        console.log("value",event.target.value);
        }
      
        handleSubmit(event){
          alert('Username submitted: ' + this.state.username +   ' password submitted: '  +this.state.password );
          event.preventDefault();
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
      <label>
      Username : 
      <input type="text" value1={this.state.value} name="username" placeholder="Username" onChange={this.handleChange} /><br /><br />
      </label>
      <label>Password :
      <input type="password" value={this.state.pwd} name="password" placeholder="Password" onChange={this.handleChange} /><br />
      <br /></label>
      <input type="submit" value="Submit" />
      </fieldset>
      </form>
      </center>
      </div>
          );
        }
      }
      ReactDOM.render(<Form />, document.getElementById('root'));