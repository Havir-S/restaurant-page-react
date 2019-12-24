import React from 'react';
import './scss/mainStyle.scss';
import TopBar from './components/top-bar/top-bar.js';
import SectionMainPicture from './components/section-main-picture/section-main-picture.js';
import SectionNavBar from './components/section-navbar/section-nav-bar.js';

//imgs
import mainImg from './imgs/restaurant1.jpg';

function App() {
  return (
    <div className="wrapper">
      <TopBar value='Check out our special events throughout the month!' />
      <SectionMainPicture value='helo' imgSrc={mainImg} />
      <SectionNavBar />

    </div>
  );
}

export default App;
