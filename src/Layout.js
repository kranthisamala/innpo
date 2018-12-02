import React from 'react';
import classes from './Layout.css';

const layout = (props) => {
    return (
        <div className = {classes.overLapper}>
            {props.children}
        </div>

    );
}
export default layout;