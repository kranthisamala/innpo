import React from 'react';
import classes from './Navigation.css';
import './Navigation.css';
import Carousel from '../Carousel/Carousel';

const navigation = (props) => {
    return(
        <>
            <Carousel/>
            <div className = {classes.topBar}>links for social networks go here</div>
            <div>
                <div className="container" 
                     style = {{
                         padding: '10px'
                     }}>
                    <div className = "row">
                        <div className = "col-sm-6"> 
                            <div>
                                logo here
                            </div>
                        </div>
                        <div className = "col-sm-3"> 
                            <div>
                                email here
                            </div>
                        </div>
                        <div className = "col-sm-3"> 
                            <div>
                                address here
                            </div>
                        </div>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                        <li><button>Get a quote</button></li>
                    </ul>
                </nav>
            </div>
        </>
        
    );
}
export default navigation; 