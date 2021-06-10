import React, { useState, useEffect} from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



import Dashboard from './Components/Dashboard/Dashboard';
import Navbar from './Components/Navbar/Navbar';



function App() {
  
  
  
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar />
        <Switch />
        <Route exact path="/">
          <Dashboard  />
         </Route>
      </div>
    </Router>


  );
}

export default App;
