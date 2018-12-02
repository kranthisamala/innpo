import React from 'react';
import './App.css';
import Navigation from '../src/Navigation/Navigation'
import Carousel from './Carousel/Carousel';
import classes from './App.css'
import About from '../src/About/About';
import Welcome from '../src/Welcome/Welcome';
import Services from './Services/Services';
import Contact from '../src/Contact/Contact';
import Footer from '../src/Footer/Footer'
import FullAbout from '../src/FullPages/About/about';
import {Route, Switch} from 'react-router-dom';

const home = () => {
    return (
        <> 
            <div className="App">
                <Carousel/>
                <About/>
                <Welcome/>
                <Services/>
                <Contact/>
                <Footer/>
            </div>
        </>
    );
}

export default home;