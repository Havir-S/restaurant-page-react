import React from 'react';

class Dish extends React.Component {

  render() {
    const { name, ingredients, cost, imgSrc} = this.props.meal;
    return (
      <div className="dish-row">
        <div className="dish-img-container">
          <img className="dish-img" src={imgSrc} alt="" />
        </div>
        <div className="dish-description">
          <h3 className="dish-name">{name}</h3>
          <h4 className="dish-ingredients">{ingredients}</h4>
        </div>
        <div className="dish-order">
          <p className="dish-price">
            {cost} <span className="eur">EUR</span>
          </p>
          <button className="dish-button" type="button">
            Order
          </button>
        </div>
      </div>
    )
  }
}

class MenuContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentType : 'main dishes'}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({currentType : e.target.innerText.toLowerCase()});
  }

  render() {
    const types= this.props.dishTypes,
          meals = this.props.meals;

    return (
      <div className='menu-container'>
        <div className='menu-options'>
          {types.map(type => {
            if (this.state.currentType === type) {
              return (
                <div className='menu-option selected-option' data-option={type} key={type} onClick={this.handleChange}>
                  {type.toUpperCase()}
                </div>
              )
            } else {
            return (
              <div className='menu-option' data-option={type} key={type} onClick={this.handleChange}>
                {type.toUpperCase()}
              </div>
            )
            }
          })}
        </div>
        <div className="menu-main">
          {meals.filter(meal => {
            return meal.type === this.state.currentType;
          }).map((meal,index) => {
            return <Dish meal={meal} key={index} />
          })}
        </div>

      </div>
    )
  }
}

export default MenuContainer;
