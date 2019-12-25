import React from 'react';

function Iframe(props) {
  return (
    <iframe className="map-iframe"
            src={props.iframeSrc}
            frameBorder="0"
            scrolling="yes"
            marginHeight="0"
            marginWidth="0"
            title="iframe"/>
  )
}

class MapContainer extends React.Component {

  render() {

    const IFRAMELINK = "https://maps.google.com/maps?width=100%&height=600&hl=en&coord=64.1058263,-21.8730367&q=Somewhere%2C%20hell%20I%20dont%20know+(Under%20the%20Pillars)&ie=UTF8&t=&z=13&iwloc=B&output=embed";

    return (
      <div className="map-container">
        <div className="map-text-div">
          <div className="map-text-main">
            <div className="map-text-address">
              <h3>Address</h3>
              <p>Reykjavik</p>
              <p>Skipholt</p>
              <p>Hafnarfjörður 220</p>
              <p className="warning">*All of the above is completely random and fake*</p>
            </div>
            <div className="map-text-hours">
                <h3>OPEN HOURS</h3>
                <p>We are open:</p>
                <p>Monday - Friday <span className="time-stamp">09:00 - 22:00</span></p>
                <p>Saturday - Sunday <span className="time-stamp">14:00 - 22:00</span></p>
              </div>
            </div>
          </div>
          <Iframe iframeSrc={IFRAMELINK} />
          <button className="map-button" type="button">
            <a target="_blank"
               rel="noopener noreferrer"
               href="https://www.google.com/maps/@-63.3990818,-56.9876793,2462m/">
               Open in GOOGLE MAPS
            </a>
          </button>
      </div>
    )
  }
}


export default MapContainer;
