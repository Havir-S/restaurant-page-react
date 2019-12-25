import React from 'react';

class MenuLi extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.clickEvent(this.props.value.toLowerCase());
  }

  render() {
    return (
    <li className="navbar-li" onClick={this.handleClick}>
      <div className="navbar-li-background-fix" />
      <a className="navbar-a" >{this.props.value}</a>
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
          <MenuLi value={el} key={el} clickEvent={this.props.handleTabChange}/>
        )}
      </ul>
    )
  }
}

export default MenuUl;
