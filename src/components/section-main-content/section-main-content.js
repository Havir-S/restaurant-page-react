import React from 'react';
import HiddenHeader from '../header-hidden.js';
import Pillars from './components/pillars.js';
import AboutContainer from './components/about-container.js';
import Calendar from './components/calendar.js';
import MapContainer from './components/map-container.js';
import MenuContainer from './components/menu-container.js';

class SectionMainContent extends React.Component {

  render() {

    const currentTab = this.props.currentTab;
    let contentToRender;
    if (currentTab === 'menu') {
      contentToRender = <MenuContainer dishTypes={this.props.mealTypes} meals={this.props.meals} />;
    } else if (currentTab === 'map') {
      contentToRender = <MapContainer />;
    } else if (currentTab === 'about') {
      contentToRender = <AboutContainer />;
    }

    return (
      <section className="section section-main-content">
        <HiddenHeader value='NAVBAR SECTION' />
        <div className="main-content-container">
          <Pillars />
          <div className="main-content">
            {contentToRender}
          </div>

        </div>
        <div className="calendar-tab">
          <Calendar today={this.props.today}
                    months={this.props.months}/>
        </div>
      </section>
    )
  }
}

export default SectionMainContent;
