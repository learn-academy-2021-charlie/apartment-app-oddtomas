import React, { Component } from "react";
import { Button, Card, CardTitle, Col, Row } from "reactstrap";
import { NavLink } from "react-router-dom";

class ProtectedApartment extends Component {
  render() {
    return (
      <div className="page-body">
        <h3>My Apartments</h3>

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
                  <br />
                  <br />
                  <NavLink to={`/apartmentedit/${apartment.id}`}>
                    <Button>Edit Listing</Button>
                  </NavLink>
                  <NavLink to={"/myapartments"}>
                    <Button
                      onClick={() => this.props.deleteApartment(apartment.id)}
                    >
                      Delete Your Apartment
                    </Button>
                  </NavLink>
                </Card>
              );
            })}
        </Row>
      </div>
    );
  }
}
export default ProtectedApartment;
