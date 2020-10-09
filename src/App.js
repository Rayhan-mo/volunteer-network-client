import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Blog from './Components/Blog/Blog';
import Donation from './Components/Donation/Donation';
import Event from './Components/Event/Event';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';



function App() {
  return (
    <div>
 
    <Router>
    <Header></Header>
    
      <Switch>
      <Route exact path="/">
         <Home></Home>
      </Route>
        <Route path="/donation">
            <Donation></Donation>
        </Route>
        <Route path="/event">
           <Event></Event>
        </Route>
        <Route path="/blog">
          <Blog></Blog>
        </Route>
        <Route path="/Registration">
         <Registration></Registration>
        </Route>
        <Route path="/Login">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
      
    
    </div>
  );
}

export default App;
