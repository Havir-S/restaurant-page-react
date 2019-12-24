import React from 'react';

class HiddenHeader extends React.Component {

  render() {
    return (
      <header className="hidden">
        <h3 className="hidden">
          {this.props.value}
        </h3>
      </header>
    )
  }
}

export default HiddenHeader;
