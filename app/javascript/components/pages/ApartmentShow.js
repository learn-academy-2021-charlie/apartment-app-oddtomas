import React, { Component } from "react";
import { Button, Card, CardTitle, Col, Row } from "reactstrap";
import { Nav, NavItem, NavLink, Link } from "reactstrap";

class ApartmentShow extends Component {
  render() {
    const { apartment } = this.props;
    console.log(apartment);
    return (
      <div className="page-body">
        <h3>Apartment Features</h3>
        <br />
        <div className="cards">
          {apartment && (
            <div className="card">
              <h4>Location</h4>
              <h5>{apartment.street}</h5>
              <h5>
                {apartment.city}, {apartment.state}
              </h5>
              <br />
              <h4>Manager Info</h4>
              <h5>{apartment.manager}</h5>
              <h5>{apartment.email}</h5>
              <br />
              <h4>Details</h4>
              <h5>{apartment.price} per month</h5>
              <h5>Bedrooms: {apartment.bedrooms}</h5>
              <h5>Bathrooms: {apartment.bathrooms}</h5>
              <h5>Pets Allowed: {apartment.pets}</h5>
            </div>
          )}
        </div>
        <NavLink href="/apartmentsindex">back</NavLink>
      </div>
    );
  }
}
export default ApartmentShow;
