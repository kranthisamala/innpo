import React, {Component} from 'react';
import classes from './SideDrawer.css';
import {NavLink} from 'react-router-dom';
class sideDrawer extends Component {
    render(){
        let sideDrawerClasses = [classes.SideDrawer, classes.open]
        if(!this.props.open){
            sideDrawerClasses = [classes.SideDrawer, classes.close]
        }
    
        return (
            <div className = {sideDrawerClasses.join(' ')}>
                    <ul className = {classes.list}>
                        <li className= {classes.logoItem}><NavLink to = "/">logo here</NavLink></li>
                        <li className= {classes.listItem}><NavLink activeClassName = {classes.active} to = "/"  exact onClick = {this.props.hideSideBar}>Home</NavLink></li>
                        <li className= {classes.listItem}><NavLink activeClassName = {classes.active} to = "/about" exact  onClick = {this.props.hideSideBar}>About</NavLink></li>
                        <li className= {classes.listItem}><NavLink activeClassName = {classes.active} to = "/services"  exact onClick = {this.props.hideSideBar}>Services</NavLink></li>
                        <li className= {classes.listItem}><NavLink activeClassName = {classes.active} to = "/contact" exact  onClick = {this.props.hideSideBar}>Contact</NavLink></li>
                    </ul>
            </div>
        );
    }
}
export default sideDrawer;