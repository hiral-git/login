import React from 'react';
import ReactDOM from 'react-dom';
//import './style.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

//serviceWorker.unregister();
//class Clock extends React.Component{
   // constructor(props){
      //  super(props);
      //  this.state={date:new Date()};
    //}
   // componentDidMount(){
      //  this.timerID=setInterval(
        //    ()=>this.tick(),1000
       // );
    //}
    //componentWillUnmount(){
       // clearInterval(this.timerID);
   // }
   // tick()
   // {
        //this.setState({date:new Date()});
    //}
   // render(){
 // return(
  //<div>
  //<h2><font color="cyanide">Time is {this.state.date.toLocaleTimeString()}</font>
  //</h2> 
  //</div>
  //);
    //}   
//}
//function Appl(){
//return(
    //    <div>
    //<Clock />
    //<Clock />
    //<Clock />
    //<Clock />
    //</div>
    //);
//}
//ReactDOM.render(<Appl />,document.getElementById('root'));

//ReactDOM.render(<App />, document.getElementById('root'));
//function Clock(props){
//return(
  //<h2>{props.id}</h2>
//);
//}
// class Clock extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state=
//       {
//         number :  this.props.id,
//         plus: this.props.id
//       }
      
     
//    }

//     componentDidMount() {
//       console.log("props",this.props.id);
//       this.timerID=setInterval(()=> this.tick(),
//       1000       
//       );

//     //setId(id=>id + 1);},1000);
//     }
//       componentWillUnmount() {
//       clearInterval(this.timerID);
//     }
//     tick =(e)=>{
      
//       this.setState({number:this.state.number - 2 })
//       // this.setState({plus : this.state.plus + 2 })
//       // this.setState({number3:this.state.number3 + 1})
//       console.log('tick =>' ,this.state)
      
//       // this.setState({id:Appl.id + 1});
   
//      // );
//     } 
    
  
//     render() {
//       return (
//         <div>
//         <h1>{this.state.number}</h1>
//         <h1>{this.state.plus}</h1>
          
//       <h2><font color="blue">Id is {this.state.number}</font></h2>
//         </div>
//       );
//    }
//   }
  
//   function Appl() {
//     return (
//       <div>
//         <Clock id='1'/>
//         <Clock id='12121'/>
//         </div>

//     );
//   }
  
//   ReactDOM.render(<Appl />, document.getElementById('root'));

// function ActionLink()
// {
//   function handleClick(e){
//     e.preventDefault();
//     console.log('the link was clicked');

//   }
//   return(
//     // eslint-disable-next-line jsx-a11y/anchor-is-valid
//     <a href="#" onClick={handleClick}>
//    <h1>Click me</h1> 
//     </a>
//   );
// }
// ReactDOM.render(<ActionLink />,document.getElementById('root'));


// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
 
