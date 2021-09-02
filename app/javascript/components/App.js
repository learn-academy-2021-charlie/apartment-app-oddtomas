import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ApartmentIndex from "./pages/ApartmentIndex";
import ApartmentShow from "./pages/ApartmentShow";
import Header from "./components/Header";
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
        {/* <Nav>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/apartmentindex">Apartments</NavLink>
          </NavItem>
        </Nav> */}
        <Header {...this.props} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/apartmentindex"
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
        </Switch>
      </Router>
    );
  }
}

export default App;
