import React from 'react';
import HiddenHeader from '../header-hidden.js';
import NavbarLogo from './components/navbar-logo.js';
import MenuUl from './components/menu-ul.js';




class SectionNavBar extends React.Component {

  render() {

    const navbarLinks = ['Menu','Map','About'];

    return (
      <section className="section section-navbar">
      <HiddenHeader value='NAVBAR SECTION' />
        <div className="navbar-middle">
          <div className="navbar-menu">
            <MenuUl navbarLinks={navbarLinks} />
          </div>
          <div className="navbar-middle-effect">
          </div>
        </div>
        <NavbarLogo value="Welcome" />
      </section>
    )
  }
}

export default SectionNavBar;
