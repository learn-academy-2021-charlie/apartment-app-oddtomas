import React, { Component } from "react";
import { Button, Card, CardTitle, Col, Row } from "reactstrap";
import { NavLink } from "react-router-dom";

class ApartmentIndex extends Component {
  render() {
    return (
      <div className="page-body">
        <h3>All the Apartments</h3>
        <br />
        <br />
        <Row className="cards">
          {this.props.apartments &&
            this.props.apartments.map((apartment) => {
              return (
                <Card key={apartment.id}>
                  <div>
                    <h1>{apartment.street} </h1>
                  </div>
                  <div>
                    <h1>
                      {apartment.city}, {apartment.state}
                    </h1>
                  </div>
                  <br />
                  <NavLink to={`/apartmentshow/${apartment.id}`}>
                    <Button>More Info</Button>
                  </NavLink>
                </Card>
              );
            })}
        </Row>
      </div>
    );
  }
}
export default ApartmentIndex;
