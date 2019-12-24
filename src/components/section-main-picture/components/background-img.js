import React from 'react';


class BackgroundImg extends React.Component {

  render() {
    console.log(this.props.imgSrc);
    return (
      <div className="main-picture-img-container">
        <img className="main-picture-img" src={this.props.imgSrc} alt={this.props.imgSrc} />
        <div className="main-picture-effects" />
      </div>
    )
  }
}

export default BackgroundImg;
