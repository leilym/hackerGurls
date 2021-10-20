import React from "react";
import { asset, Environment } from "react-360";

import locations from "../../consts/locations";

const locationName = locations.DavisDoor.name;
const wrappers = [];

export function changeLocation(location) {
  locationName = location;
  Environment.setBackgroundImage(asset(`img/${locations[`${location}`].img}`));

  wrappers.forEach((update) => {
    update();
  });
}

export function wrap(Component) {
  return class Wrapper extends React.Component {
    state = {
      name: locationName,
    };

    componentDidMount() {
      wrappers.push(() => {
        this.setState({
          name: locationName,
        });
      });
    }

    render() {
      return <Component {...this.props} name={this.state.name} />;
    }
  };
}