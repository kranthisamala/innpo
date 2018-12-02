import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from '../src/Navigation/Navigation'
// import Carousel from './Carousel/Carousel';
// import classes from './App.css'
// import About from '../src/About/About';
// import Welcome from '../src/Welcome/Welcome';
// import Services from './Services/Services';
// import Contact from '../src/Contact/Contact';
// import Footer from '../src/Footer/Footer'
import FullServices from '../src/FullPages/Services/fullServices';
import FullContact from '../src/FullPages/Contact/fullContact';
import FullAbout from '../src/FullPages/About/about';
import {Route, Switch} from 'react-router-dom';
import Home from '../src/Home';
import Layout from '../src/Layout';
class App extends Component {
  render() {
    return (
      <Layout>
        <Navigation/>
        <Switch>
          <Route path = "/contact" exact component = {FullContact}/>
          <Route path = "/services" exact component = {FullServices}/>
          <Route path = "/about" exact component = {FullAbout}/>
          <Route path = "/"  component = {Home}/>
        </Switch>
      </Layout> 
    );
  }
}

export default App;
