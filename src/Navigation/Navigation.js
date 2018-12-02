import React ,{Component} from 'react';
import classes from './Navigation.css';
import './Navigation.css';
import Carousel from '../Carousel/Carousel';
import {NavLink} from 'react-router-dom';

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
    render(){
        let newClass =[];
        if (this.state.scrollPositionY > 100){
            newClass.push(classes.newNavBar);
        }
    return(
        <>
            {/* <Carousel/> */}
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
                <nav className = {newClass.join(' ')}>
                    <ul>
                        <li><NavLink to = "/" activeClassName = {classes.active} exact >Home</NavLink> </li>
                        <li><NavLink to = "/about" activeClassName = {classes.active} exact>About</NavLink> </li>
                        <li><NavLink to = "/services" activeClassName = {classes.active} exact>Sevices</NavLink> </li>
                        <li><NavLink to = "/contact" activeClassName = {classes.active} exact>Contact</NavLink> </li>
                        <li><button>Get a quote</button></li>
                    </ul>
                </nav>
            </div>
        </>
        
    );
}
}
export default navigation; 