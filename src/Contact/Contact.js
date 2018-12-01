import React from 'react';
import classes from './Contact.css';
const contact = (props) => {
    return(
        <div>
        <div className = {classes.titleContainer}>
            <h2>Contact Us</h2>
        </div>
        <div className = {classes.contactContainer}>
            {/* <h2>Contact Us</h2> */}
            <div className = {classes.innerContactContainer}>
                <h3>Reach us out</h3>
                <br/>
                <p style = {{textAlign: 'center'}}>Lorem ipsum dolor sit amet, Nulla imper 
                                    diet nulla vel lectus interdum lobortis Cu 
                                    dolor sitNulla imper ultrices.
                </p>
                <div className = {classes.iconContainer}>
                    <div className = {classes.innerIconContainer}>
                        <div className = {classes.icon}>
                         <span style = {{fontSize: '25px'}} className="glyphicon glyphicon-map-marker"></span>
                        </div>
                        <div className = {classes.icon}>
                            <p style = {{textAlign: 'center'}}>80 Sawmill ln<br></br>Hanson MA 01760</p>
                        </div>
                    </div>
                    <div className = {classes.innerIconContainer}>
                        <div className = {classes.icon}>
                            <span style = {{fontSize: '25px'}} className="glyphicon glyphicon glyphicon-earphone"></span>
                        </div>
                        <div className = {classes.icon}>
                            <p style = {{textAlign: 'center'}}>(609) 206 2938</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className = {classes.innerContactContainer}>
                <h3>Request a callback</h3>
                <br></br>
                <p style = {{textAlign: 'center'}}>Lorem ipsum dolor sit amet, Nulla imper 
                                       diet nulla vel lectus interdum lobortis Cu 
                                       dolor sitNulla imper ultrices.
                </p>
                <div className = {classes.fieldContainer}>
                   
                        <input type="text" className="form-control" placeholder="Full Name"/>
                        <input type="text" className="form-control" placeholder="Email address"/>
                        <input type="text" className="form-control" placeholder="Phone Number"/>
                        <select className="form-control">
                            <option>select your country</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <textarea  type="text" className="form-control" placeholder="Please tell us your concern"></textarea>
                        <button type="submit" class="btn btn-primary">Send Request</button>
                    
                    
                </div>

            </div>
        </div>
        </div>
    );
}
export default contact;