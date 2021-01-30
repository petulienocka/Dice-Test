import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AOS from 'aos'; 
import 'aos/dist/aos.css';

import Single from './pages/Single';
import Index from './pages/Index';
import Multiple from './pages/Multiple';
import Custom from './pages/Custom';

import './assets/style/main.scss';


const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 3000
    });
  })

  return (
    <>

      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={props => <Index />}></Route>
            <Route path="/single" component={props => <Single />}></Route>
           <Route path="/multiple" component={props => <Multiple  />}></Route>
            <Route path="/custom" component={props => <Custom />}></Route>
          </Switch>
        </div>
      </Router>

    </>
  );
}

export default App;
