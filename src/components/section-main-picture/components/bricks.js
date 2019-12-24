import React from 'react';

class BricksLeftMiddleRight extends React.Component {

  render() {
    let brickDirectionClass = "", brickTextDiv = "", brickSpanDirection = "";

    if (this.props.bricksDirection === 'left') {
      brickDirectionClass = 'bricks bricks-left';
      brickTextDiv = 'bricks-text-div brick-text-div-left';
      brickSpanDirection = 'bricks-span';
    } else if (this.props.bricksDirection === 'right') {
      brickDirectionClass = 'bricks bricks-right';
      brickTextDiv = 'bricks-text-div';
      brickSpanDirection = 'bricks-span bricks-span-scaled';
    } else if (this.props.bricksDirection ==='middle') {
      brickDirectionClass = 'middle-brick';
      brickTextDiv = 'middle-brick-text';
      brickSpanDirection = 'haa';
    }

    const textSpans = this.props.bricksDirection === 'middle' ?
                      this.props.textSpans :
                      this.props.textSpans.split(" ").map((text,index) => <span key={index} className={brickSpanDirection}>{text}</span> );

    return (
      <div className={brickDirectionClass}>
        <div className={brickTextDiv}>
        {textSpans}
        </div>
      </div>
    )
  }
}

// {numbers.map((number) =>
//   <ListItem key={number.toString()}
//             value={number} />
// )}

export default BricksLeftMiddleRight;
