import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Redirect } from "react-router-dom";

class ApartmentEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        street: this.props.apartment.street,
        city: this.props.apartment.city,
        state: this.props.apartment.state,
        manager: this.props.apartment.manager,
        email: this.props.apartment.email,
        price: this.props.apartment.price,
        bedrooms: this.props.apartment.bedrooms,
        bathrooms: this.props.apartment.bathrooms,
        pets: this.props.apartment.pets,
      },
      submitted: false,
    };
  }
  handleChange = (e) => {
    let { form } = this.state;
    form[e.target.name] = e.target.value;
    this.setState({ form: form });
  };

  handleSubmit = () => {
    this.props.editApartment(this.state.form, this.props.apartment.id);
    this.setState({ submitted: true });
  };

  render() {
    const {
      street,
      city,
      state,
      manager,
      email,
      price,
      bedrooms,
      bathrooms,
      pets,
    } = this.state.form;
    return (
      <div className="page-body">
        <h3>Edit an Apartment</h3>
        <div className="cards">
          <div className="card">
            <Form>
              <FormGroup>
                <Label for="street">Street</Label>
                <br />
                <Input
                  type="text"
                  name="street"
                  onChange={this.handleChange}
                  value={street}
                />
              </FormGroup>
              <FormGroup>
                <Label for="city">City</Label>
                <br />
                <Input
                  type="text"
                  name="city"
                  onChange={this.handleChange}
                  value={city}
                />
              </FormGroup>
              <FormGroup>
                <Label for="state">State</Label>
                <br />
                <Input
                  type="text"
                  name="state"
                  onChange={this.handleChange}
                  value={state}
                />
              </FormGroup>
              <FormGroup>
                <Label for="manager">Manager</Label>
                <br />
                <Input
                  type="text"
                  name="manager"
                  onChange={this.handleChange}
                  value={manager}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <br />
                <Input
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                  value={email}
                />
              </FormGroup>
              <FormGroup>
                <Label for="price">Price</Label>
                <br />
                <Input
                  type="text"
                  name="price"
                  onChange={this.handleChange}
                  value={price}
                />
              </FormGroup>
              <FormGroup>
                <Label for="bedrooms">Bedrooms</Label>
                <br />
                <Input
                  type="number"
                  name="bedrooms"
                  min="0"
                  max="10"
                  onChange={this.handleChange}
                  value={bedrooms}
                />
              </FormGroup>
              <FormGroup>
                <Label for="bathrooms">Bathrooms</Label>
                <br />
                <Input
                  type="number"
                  name="bathrooms"
                  min="0"
                  max="10"
                  onChange={this.handleChange}
                  value={bathrooms}
                />
              </FormGroup>
              <FormGroup>
                <Label for="pets">Pets</Label>
                <br />
                <Input
                  type="text"
                  name="pets"
                  onChange={this.handleChange}
                  value={pets}
                />
              </FormGroup>
              <br />
              <Button onClick={this.handleSubmit}>Submit</Button>
            </Form>
            {this.state.submitted && <Redirect to="/myapartments" />}
          </div>
        </div>
      </div>
    );
  }
}
export default ApartmentEdit;
