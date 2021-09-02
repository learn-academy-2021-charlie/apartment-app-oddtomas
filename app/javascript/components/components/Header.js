import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    const { logged_in, sign_in_route, sign_out_route } = this.props;
    return (
      <header>
        <NavLink to="/">Home</NavLink>
        {/* second link for visuals while running rails s */}
        <NavLink to="/">Home</NavLink>

        <NavLink to="/apartmentindex" className="nav-link">
          See All the Apartments
        </NavLink>

        {logged_in && (
          <a href={sign_out_route} className="nav-link">
            Sign Out
          </a>
        )}
        {!logged_in && (
          <a href={sign_in_route} className="nav-link">
            Sign In
          </a>
        )}
      </header>
    );
  }
}
export default Header;
