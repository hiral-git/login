function App() {
    return (
      <Router>
        <div className="App">
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <hr />
  </div>
  <div>
          
  <Route exact path="/" component={Home} />
  <Route path="/about" component={About}  />
  <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
  
  function Home() {
    return (
      <div>
        <h1 style={{backgroundColor: "lightblue",fontFamily:"Georgia"}}>Home</h1>
      </div>
    );
  }
  
  function About() {
    return (
      <div>
        <h1 style={{backgroundColor: "lightblue",fontFamily:"Georgia"}}>About</h1>
      </div>
    );
  }
  
  function Contact({match}) {
    return (
      <div>
        <h1 style={{backgroundColor: "lightblue",fontFamily:"Georgia"}}>Contact</h1>
       <ul>
       <Link to={ '${match.url}/render'}></Link>
       <li>
       Render</li></ul>
      </div>
      );
  }
  // function Child({match}){
  //   return(
  //     <div>
  //     <h1>ID:{match.params.id}
  //     </h1></div>
  //   );
  // }
  
  // function ComponentWithRegex({match})
  // {
  //   return(
  // <div>
  // <h1> only asc/desc are allowed:{match.params.direction}
  // </h1></div>
  //   );
  // }