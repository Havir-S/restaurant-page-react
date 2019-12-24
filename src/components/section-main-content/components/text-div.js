import React from 'react';


class TextDiv extends React.Component {
  render() {
    return(
<div className={"about-text-div " + this.props.classValue}>
        {this.props.children}
      </div>
    )
  }
}

export default TextDiv;
