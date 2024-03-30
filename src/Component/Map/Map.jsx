import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
  // Define the center of the map and zoom level
  const center = {
    lat: 59.95,
    lng: 30.33
  };
  const zoom = 11;

  return (
    // Important! Always set the height of the container element explicitly
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'YOUR_API_KEY' }} // Replace 'YOUR_API_KEY' with your Google Maps API key
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}

export default Map;
