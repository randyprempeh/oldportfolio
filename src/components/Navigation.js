import React from "react"
import { NavLink } from "react-router-dom";
import github from "../images/github.svg";



const Navigation = () => (
  <div className="navy">
    <NavLink activeClassName="active-link" exact to="/">Home </NavLink>
    <NavLink activeClassName="active-link" to="/about">About</NavLink>  {/* // eslint-disable-next-line */}
    <NavLink activeClassName="active-link" to="/contact">Contact</NavLink>
    <a activeClassName="active-link" target="_blank" href="https://github.com/randyprempeh"> <img src={github} alt=""/></a>

  </div>

)


export default Navigation;
