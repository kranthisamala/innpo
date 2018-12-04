import React ,{Component} from 'react';
import classes from './Navigation.css';
import './Navigation.css';
import Carousel from '../Carousel/Carousel';
import {NavLink} from 'react-router-dom';
import SideDrawer from '../UI/SideDrawer/SideDrawer';
import BackDrop from '../UI/BackDrop/BackDrop';

const debounce = (func, wait) => {
    let timeout
    return (...args) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => func.apply(this, args), wait)
    }
  }

class navigation extends Component  {
    constructor(props) {
        super(props)
        this.state = {
          scrollPositionY: 0,
          showSideBar: false,
          showBackDrop: false
        }
      }
      componentDidMount() {
        // 32 is the number of milliseconds to debounce
        // I picked this because it's approx 1 frame (ie: 16.7ms)
        // You'll want to modulate that to your taste.
        // Add console.logs in handleScroll function to check if its flooding.
        return window.addEventListener('scroll', debounce(this.handleScroll, 16))
      }
      componentWillUnmount() {
        return window.removeEventListener('scroll', debounce(this.handleScroll, 16))
      }
      handleScroll = () => {
        // + is unary operator, same as Number(window.scrollY)
        const scrollPositionY = +window.scrollY
        return this.setState({ scrollPositionY })
      }

      toggleSideBar = () => {
          this.setState({
              showSideBar: true,
              showBackDrop: true
          })
      }
      toggleBackDrop = () => {
          this.setState({
            showBackDrop: false,
            showSideBar: false
          })
      }

    render(){
        let newClass =[];
        if (this.state.scrollPositionY > 100){
            newClass.push(classes.newNavBar);
        }
    return(
        <>
            <SideDrawer open = {this.state.showSideBar} hideSideBar = {this.toggleBackDrop}/>
            <BackDrop show = {this.state.showBackDrop} hideBackDrop = {this.toggleBackDrop}/>
            {/* <Carousel/> */}
            <div className = {classes.topBar}>links for social networks go here</div>
            <div>
                {/* <div className="container" 
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
                </div> */}
                <nav className = {newClass.join(' ')}>
                    <ul>
                        <li><div className = {classes.toggler}
                                    onClick = {this.toggleSideBar}
                        ><div></div>
                        <div></div>
                        <div></div></div></li> 
                        <li className = {classes.listItem}><NavLink to = "/" activeClassName = {classes.active} exact >Home</NavLink> </li>
                        <li className = {classes.listItem}><NavLink to = "/about" activeClassName = {classes.active} exact>About</NavLink> </li>
                        <li className = {classes.listItem}><NavLink to = "/services" activeClassName = {classes.active} exact>Sevices</NavLink> </li>
                        <li className = {classes.listItem}><NavLink to = "/contact" activeClassName = {classes.active} exact>Contact</NavLink> </li>
                        <li className = {classes.listItem}><button className = {classes.getQuoteButton}>Get a quote</button></li>
                    </ul>
                </nav>
            </div>
        </>
        
    );
}
}
export default navigation; 