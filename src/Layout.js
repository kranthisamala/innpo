import React from 'react';
import classes from './Layout.css';


const layout = (props) => {
    return (
        <div>
            <div className = {classes.overLapper}>
                {props.children}
            </div>
        </div>
    );
}
export default layout;