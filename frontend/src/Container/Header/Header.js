import React, { Component } from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className={classes.Header}>
        <div>
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/aboutus">ABOUT US</NavLink>
            </li>
            <li>
              <NavLink to="/services">SERVICES</NavLink>
            </li>
            <li>
              <span>LOGIN</span>
              <ul>
                <li>
                  <NavLink to="/">Office Page</NavLink>
                </li>
                <li>
                  <NavLink to="/">UserLogin</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/contactus">CONTACT US</NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
