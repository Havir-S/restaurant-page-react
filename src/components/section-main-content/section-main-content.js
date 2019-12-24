import React from 'react';
import HiddenHeader from '../header-hidden.js';
import Pillars from './components/pillars.js';
import AboutContainer from './components/about-container.js';
import Calendar from './components/calendar.js';

class MainContent extends React.Component {

  render() {
    return (
      <div className="main-content">
      {this.props.children}
      </div>
    )
  }
}

class SectionMainContent extends React.Component {

  render() {

    return (
      <section className="section section-main-content">
        <HiddenHeader value='NAVBAR SECTION' />
        <div className="main-content-container">
          <Pillars />
          <MainContent>
            <AboutContainer />
          </MainContent>

        </div>
        <div className="calendar-tab">
          <Calendar />
        </div>
      </section>
    )
  }
}

export default SectionMainContent;
