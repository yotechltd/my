import Meta from '../components/Meta'
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
const key = 'AIzaSyB3fzeCZKjCEOl74s33u5yUcFx5lRutehM';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
class About extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: key }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={91.87638759613037}
            lng={24.903408971010283}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default About;
