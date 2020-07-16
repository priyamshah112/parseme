import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './components/home/Home';
import Features from './components/features/Features';
import Pricing from './components/pricing/Pricing';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Terms from './components/terms/Terms';
import Policy from './components/policy/Policy';


function App() {
  
  return (
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/features" component={Features}/>
        <Route exact path="/pricing" component={Pricing}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/terms" component={Terms}/>
        <Route exact path="/privacy policy" component={Policy}/>
      </Switch>
    </Suspense>
  </Router>
  );
}

export default App;
