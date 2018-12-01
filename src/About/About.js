import React from 'react';
import classes from './About.css';

const about = (props) => {
    return(
        <div className = {classes.aboutContainer}>
            <div className = {classes.contentContainer}>
                <div className = {classes.IconContainer}>
                    Icon
                </div>
                <div className = {classes.aboutText}>
                    <h5>Lorem ipsum dolor sit amet, Nulla imper 
                    diet nulla vel lectus interdum lobortis Cu 
                    dolor sitNulla imper ultrices.</h5>
                </div>
            </div>
            <div className = {classes.contentContainer}>
                <div className = {classes.IconContainer}>
                    Icon
                </div>
                <div className = {classes.aboutText}>
                    <h5>Lorem ipsum dolor sit amet, Nulla imper 
                    diet nulla vel lectus interdum lobortis Cu 
                    dolor sitNulla imper ultrices.</h5>
                </div>
            </div>
            <div className = {classes.contentContainer}>
                <div className = {classes.IconContainer}>
                    Icon
                </div>
                <div className = {classes.aboutText}>
                    <h5>Lorem ipsum dolor sit amet, Nulla imper 
                    diet nulla vel lectus interdum lobortis Cu 
                    dolor sitNulla imper ultrices.</h5>
                </div>
            </div>
        </div>
    );
}
export default about;