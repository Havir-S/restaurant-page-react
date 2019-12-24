import React from 'react';
import BricksLeftMiddleRight from './components/bricks.js';
import BackgroundImg from './components/background-img.js';

class SectionMainPicture extends React.Component {

  render() {

    const leftBrickText = 'Welcome to Under the Pillars',
          rightBrickText = 'Restaurant and Pizzeria',
          middleBrickText = 'I could put a logo here';

    return (
      <section className="section section-main-picture">
        <div className="main-picture-container">
          <BackgroundImg imgSrc={this.props.imgSrc} />
          <BricksLeftMiddleRight bricksDirection='left' textSpans={leftBrickText} />
          <BricksLeftMiddleRight bricksDirection='right' textSpans={rightBrickText} />
          <BricksLeftMiddleRight bricksDirection='middle' textSpans={middleBrickText} />
        </div>
      </section>
    )
  }
}

export default SectionMainPicture;
