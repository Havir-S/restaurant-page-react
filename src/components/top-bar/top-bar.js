import React from 'react';

class TopBar extends React.Component {

  render() {
    return (
      <div className="event-bar">
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
