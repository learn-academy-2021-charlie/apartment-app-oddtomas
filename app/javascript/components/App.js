import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ApartmentIndex from "./pages/ApartmentIndex";
import ApartmentShow from "./pages/ApartmentShow";
import Header from "./components/Header";
import ApartmentNew from "./pages/ApartmentNew";
import { Nav, NavItem, NavLink } from "reactstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apartments: [],
    };
  }
  componentDidMount() {
    this.readApartment();
  }
  readApartment = () => {
    fetch("/apartments")
      .then((response) => response.json())
      .then((payload) => this.setState({ apartments: payload }))
      .catch((errors) => console.log("index errors:", errors));
  };

  createApartment = (newApartment) => {
    return fetch("/apartments", {
      body: JSON.stringify(newApartment),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (response.status === 422) {
          alert("Please check your submission.");
        }
        return response.json();
      })
      .then((payload) => {
        this.readApartment();
      })
      .catch((errors) => {
        console.log("apartment create errors", errors);
      });
  };
  /////////////////////////
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;
    return (
      <Router>
        <Header {...this.props} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/apartmentsindex"
            render={(props) => {
              return <ApartmentIndex apartments={this.state.apartments} />;
            }}
          />
          <Route
            path="/apartmentshow/:id"
            render={(props) => {
              let id = +props.match.params.id;
              let apartment = this.state.apartments.find((a) => a.id === +id);
              return <ApartmentShow apartment={apartment} />;
            }}
          />
          {this.props.logged_in && (
            <Route
              path="/apartmentNew"
              render={(props) => {
                return (
                  <ApartmentNew
                    createApartment={this.createApartment}
                    current_user={this.props.current_user}
                  />
                );
              }}
            />
          )}
        </Switch>
      </Router>
    );
  }
}

export default App;
