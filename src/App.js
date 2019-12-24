import React from 'react';
import './scss/mainStyle.scss';
import TopBar from './components/top-bar/top-bar.js';
import SectionMainPicture from './components/section-main-picture/section-main-picture.js';
import SectionNavBar from './components/section-navbar/section-nav-bar.js';
import SectionMainContent from './components/section-main-content/section-main-content.js';

//imgs
import mainImg from './imgs/restaurant1.jpg';

class App extends React.Component {
  render() {
  return (
    <div className="wrapper">
      <TopBar value='Check out our special events throughout the month!' />
      <SectionMainPicture value='helo' imgSrc={mainImg} />
      <SectionNavBar />
      <SectionMainContent />
    </div>
  );
}
}

export default App;
