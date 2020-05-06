import React from 'react';
import './App.css';

//Import React Router DOM
import { Route, Switch } from "react-router";

//Import React Bootstrap Css
import 'bootstrap/dist/css/bootstrap.min.css';

//Pages Import 
import HomePage from './pages/homepage/homepage';
import SignIn from './pages/signIn/signIn.component';
import Dashboard from './pages/dashboard/dashboard';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/signIn" component={SignIn} />
      <Route path="/dashboard" component={Dashboard}/>
    </Switch>
  );
}

export default App;
