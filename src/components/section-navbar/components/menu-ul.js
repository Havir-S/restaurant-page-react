import React from 'react';

class MenuLi extends React.Component {

  render() {
    return (
    <li className="navbar-li">
      <div className="navbar-li-background-fix" />
      <a className="navbar-a">{this.props.value}</a>
    </li>
  )
  }
}

class MenuUl extends React.Component {

  render() {
    const navbarLinks = this.props.navbarLinks;

    return (
      <ul className="navbar-ul">
        {navbarLinks.map((el,index) =>
          <MenuLi value={el} key={index}/>
        )}
      </ul>
    )
  }
}

export default MenuUl;
