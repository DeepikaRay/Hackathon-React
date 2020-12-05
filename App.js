import React from 'react';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import NavBar from './navBar';
import Profile from './profile';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <div>
          <ul>
            <li><NavLink to="/profile">My Profile</NavLink></li>
            <li><NavLink to="/trackStatus">View Application Status</NavLink></li>
          </ul></div>
        <div className="content">
          <Route path="/profile" component={Profile} />
          <Route path="/trackStatus" component={NavBar} />
        </div></div>
    </HashRouter>

  );
}

export default App;
