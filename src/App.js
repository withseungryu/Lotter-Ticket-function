import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link }  from 'react-router-dom'
import './App.css';

import Home from './components/Home';
import Lot from './components/Lot';
import Uos from './components/Uos';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      routes: [
        {path: "/", active: true, menu:"Home"},
        {path: "/lot", active: false, menu:"제비뽑기"},
        {path: "/uos", active: false, menu:"교양추천"},
      ],
    }
  }
  renderNav=()=>{
    const routes=this.state.routes;
    return routes.map((e,i)=>(
      <li key={i} className="nav-item">
      <Link onClick={()=>this.movePath(i)}
       to={e.path} className={(e.active)?"nav-link active":"nav-link"}>
      {e.menu}</Link>
      </li>
    ));
  }
  movePath=(i)=>{
    let routes=this.state.routes;
    let idx;
    for(idx=0;idx<routes.length;idx++){
      if(routes[idx].active) break;
    }
    routes[idx].active=false;
    routes[i].active=true;
    this.setState({
      routes:routes,
    })
  }

  render() {
    return (
      <Router>
        <div className="App container mt-2">
          
          <ul className="nav nav-tabs justify-content-center">
           {this.renderNav()}
            
          </ul>
          <Route exact path="/" component={Home}/>
          <Route exact path="/lot" component={Lot}/>
          <Route exact path="/uos" component={Uos}/>
        </div>
      </Router>
    );
  }
}

export default App;
