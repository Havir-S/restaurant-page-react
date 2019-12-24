import React from 'react';
// arrow

function MonthName(props) {
  return (
    <div className="calendar-information">
      <h2 className="month-name">{props.monthName}</h2>
    </div>
  )
}

class CalendarGrid extends React.Component {


  render() {
    return (
      <div className="calendar-grid">
        <div className="calendar-element">
        <span className="calendar-element-number">1</span>
        </div>
      </div>
    )
  }
}

class CalendarContent extends React.Component {

  render() {
    const DAYS = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    return (
      <div className="calendar-main">
        <div className="calendar-day-description">
          {DAYS.map(day => <div className="calendar-day-element" key={day}>{day}</div>)}
        </div>
        <div className="calendar-inside">
          <CalendarGrid />
        </div>
        <button className="calendar-button calendar-button-left" type="button" style={{fontSize: '55px'}}>&#129060;</button>
        <button className="calendar-button calendar-button-right" type="button" style={{fontSize: '55px'}}>&#129062;</button>
      </div>
    )
  }
}

class CalendarTrivia extends React.Component {

  render() {

    const TRIVIA = ['today','normal','reserved','event','closed'];

    return (
      <div className="calendar-trivia">
        {TRIVIA.map(el => {
          switch (el) {
            case 'today':
            return (
              <div className='trivia'>
                <div className="trivia-box trivia-box-today" />
                <span className="trivia-text"> - today</span>
              </div>
            )
            break;
            case 'normal':
            return (
              <div className='trivia'>
                <div className="trivia-box trivia-box-normal" />
                <span className="trivia-text"> - normal</span>
              </div>
            )
            case 'reserved':
            return (
              <div className='trivia'>
                <div className="trivia-box trivia-box-reserved" />
                <span className="trivia-text"> - reserved</span>
              </div>
            )
            case 'event':
            return (
              <div className='trivia'>
                <div className="trivia-box trivia-box-event" />
                <span className="trivia-text"> - event</span>
              </div>
            )
            case 'closed':
            return (
              <div className='trivia'>
                <div className="trivia-box trivia-box-closed" />
                <span className="trivia-text"> - closed</span>
              </div>
            )
            break;
            default:
            return <span>yeah</span>
            break;
          }
        })}
      </div>
    )
  }

}

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('ding');
  }

  render() {
    return (
    <div className='calendar-container'>
      <MonthName monthName='December' />
      <CalendarContent />
      <CalendarTrivia />
    </div>
  )
  }
}

export default Calendar;
