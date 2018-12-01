import React from 'react';
import classes from './Welcome.css';
const welcome = () => {
    return (
        <div className = {classes.welcomeContainer}>
            <div className = {classes.innerContainer}>
                <strong><p>Let's make a better Business</p></strong>
            </div>
            <div className = {classes.innerContainer}>
                <strong><h2>Welcome to the <span style = {{color: 'rgb(0, 84, 158)'}}>TEAM</span></h2></strong>
            </div>
            <br/>
            <div className = {classes.innerContainer}>
                <p style = {{width: '60%', textAlign: 'center'}}>
                    Unlike in a typical office environment, those coworking are usually not employed same 
                    organization. It is attractive to freela nce professional Lorem ipsum dolor sit amet, con 
                    sectetur lorim upsm jimson nibah.
                </p>
            </div>
            <div className = {classes.iconContainer}>
                <div className= {classes.innerIconContainer}>
                     achievement 1
                </div>
                <div className= {classes.innerIconContainer}>
                    achievement 2
                </div>
                <div className= {classes.innerIconContainer}>
                    achievement 3
                </div>
            </div>
            <div className = {classes.partnerContainer}>
                <div className = {classes.innerContainer}>
                    <strong><h2>Our Partners</h2></strong>
                </div>
                <div className = {classes.innerPartnerContainer}>
                     
                </div>

            </div>
        </div>
    );
}
export default welcome;