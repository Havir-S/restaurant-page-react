import React from 'react';

class NavbarLogo extends React.Component {


  render() {
    return (
      <div className="navbar-logo">
        <div className="navbar-logo-background-fix" />
        <span className="navbar-span">
          {this.props.value}
        </span>
      </div>
    )
  }
}

export default NavbarLogo;
