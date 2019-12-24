import React from 'react';
import HiddenHeader from '../header-hidden.js';

class TopBar extends React.Component {

  render() {
    return (
      <div className="event-bar">
      <HiddenHeader value="EVENT BAR" />
        <div className="event-bar-div">
          <span className="event-bar-span">
            {this.props.value}
          </span>
        </div>
      </div>
    )
  }
}

export default TopBar;
