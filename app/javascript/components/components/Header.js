import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";

class Header extends Component {
  render() {
    const { logged_in, sign_in_route, sign_out_route } = this.props;
    return (
      <header>
        <br></br>
        <br></br>
        <Nav pills>
          <NavItem></NavItem>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavItem>
            <NavLink to="/apartmentsindex" className="nav-link">
              See All the Apartments
            </NavLink>
          </NavItem>
          <NavItem>
            {logged_in && (
              <a href={sign_out_route} className="nav-link">
                Sign Out
              </a>
            )}
          </NavItem>
          <NavItem>
            {!logged_in && (
              <a href={sign_in_route} className="nav-link">
                Sign In
              </a>
            )}
          </NavItem>
          <NavItem>
            {logged_in && (
              <NavLink to="/myapartments" className="nav-link">
                My Apartments
              </NavLink>
            )}
          </NavItem>
          <NavItem>
            {logged_in && (
              <NavLink to="/apartmentnew" className="nav-link">
                Add an Apartment
              </NavLink>
            )}
          </NavItem>
        </Nav>
      </header>
    );
  }
}
export default Header;
