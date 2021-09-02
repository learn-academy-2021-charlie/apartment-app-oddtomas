import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Home from "../Home";

Enzyme.configure({ adapter: new Adapter() });

describe("Home page renders some descriptive text", () => {
  it("home displays contents of an h1 tag", () => {
    const renderHome = shallow(<Home />).find("h1");
    expect(renderHome.text()).toEqual("THIS IS THE HOME PAGE");
  });
});
