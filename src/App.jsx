import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import './index.css';
import Footer from './Footer';

const App = () => {
  return(
    <>
      <Navbar/>
      <Switch> 
        <Route excat path='/about' component={About}/>
        <Route excat path='/service' component={Service}/>
        <Route excat path='/contact' component={Contact}/>
        <Route path='/' component={Home}/>
        <Redirect to ="/" />
      </Switch>
      <Footer/>
    </>
  );
};

export default App;