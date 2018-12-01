import React from 'react';
import classes from './Services.css'
const services = (props) => {
    return (
        <div className = {classes.servicesContainer}>
            <div className = {classes.overLapper}>
               <div className = {classes.shape}>
                    <div className = {classes.serviceIconContainer}>
                        <div className = {classes.serviceIcon}>
                            <div className = {classes.serviceDescription}>
                                <p>Icon here</p>
                            </div>
                            <div className = {classes.serviceDescription}>
                                <p style = {{textAlign: 'center'}}>Lorem ipsum dolor sit amet, Nulla imper 
                                    diet nulla vel lectus interdum lobortis Cu 
                                    dolor sitNulla imper ultrices.
                                </p>
                            </div>
                        </div>
                        <div className = {classes.serviceIcon}>
                            <div className = {classes.serviceDescription}>
                                    <p>Icon here</p>
                                </div>
                                <div className = {classes.serviceDescription}>
                                    <p style = {{textAlign: 'center'}}>Lorem ipsum dolor sit amet, Nulla imper 
                                        diet nulla vel lectus interdum lobortis Cu 
                                        dolor sitNulla imper ultrices.
                                    </p>
                                </div>
                            </div>
                    </div>
               </div>
            </div>
            <div className = {classes.innerServiceContainer}>
                <h2>Our Services</h2>
            </div>
        </div>

    );
}

export default services;