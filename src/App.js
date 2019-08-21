import React from 'react';
// import Home from '../src/components/home'
import Home from '../src/pages/Home';
import Rooms from '../src/pages/Rooms';
import SingleRoom from '../src/pages/SingleRoom';
import Error from '../src/pages/Error';
import Navbar from '../src/components/Navbar';
 import './App.css';
 import {Route,BrowserRouter as Router, Switch} from 'react-router-dom';
function App() {
  return (
   <>
   <Router>
     <Navbar/>
     <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/rooms" component={Rooms}/>
        <Route exact path="/rooms/:slug" component={SingleRoom}/>
        <Route component={Error}/>
     </Switch>
   </Router>
  
   </>
  );
}
export default App;

  {/* <div className="vid">
          <Home/>
      </div> */}