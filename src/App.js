import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from '../src/Navigation/Navigation'
import Carousel from './Carousel/Carousel';
import classes from './App.css'
import About from '../src/About/About';
import Welcome from '../src/Welcome/Welcome';
import Services from './Services/Services';
import Contact from '../src/Contact/Contact';
import Footer from '../src/Footer/Footer'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className = {classes.overLapper}>
            <Carousel/>
            <Navigation/>
            <About/>
            
        </div>
        <Welcome/>
        <Services/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
