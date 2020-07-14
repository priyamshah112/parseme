import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './components/home/Home';
import Features from './components/features/Features';
import Pricing from './components/pricing/Pricing';


function App() {
  
  return (
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/features" component={Features}/>
        <Route exact path="/pricing" component={Pricing}/>
      </Switch>
    </Suspense>
  </Router>
  );
}

export default App;
