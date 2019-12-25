import React from 'react';
// arrow

function MonthName(props) {
  return (
    <div className="calendar-information">
      <h2 className="month-name">{props.monthName}</h2>
    </div>
  )
}

// {"name":"December","reservedDays":[11,15,19],"eventDays":[26,27,28],"closed":[3,4]},

class CalendarGrid extends React.Component {


  render() {
    const { monthInfo, daysAmount, today, todayMonth } = this.props;
    let ElementsList = [];

    for(let i = 1; i <= daysAmount; i++) {
      if (!(monthInfo.reservedDays.indexOf(i) === -1)) {
        ElementsList.push(
          <div key={i} className="calendar-element calendar-element-closed">
            <span className="calendar-element-number">{i}</span>
          </div>
        )
      } else if (!(monthInfo.eventDays.indexOf(i) === -1)) {
        ElementsList.push(
          <div key={i} className="calendar-element calendar-element-event">
            <span className="calendar-element-number">{i}</span>
          </div>
        )
      } else if (!(monthInfo.closed.indexOf(i) === -1)) {
        ElementsList.push(
          <div key={i} className="calendar-element calendar-element-closed">
            <span className="calendar-element-number">{i}</span>
          </div>
        )
      } else if (monthInfo.name === todayMonth && i === today.getDate()) {
        ElementsList.push(
          <div key={i} className="calendar-element today">
            <span className="calendar-element-number">{i}</span>
          </div>
        )
      } else {
      ElementsList.push(
        <div key={i} className="calendar-element">
          <span className="calendar-element-number">{i}</span>
        </div>
      )
    }
    }

    return (
      <div className="calendar-grid">
        {ElementsList}
      </div>
    )
  }
}

class CalendarContent extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.props.handleChangeMonth(value);
  }

  render() {
    const DAYS = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    return (
      <div className="calendar-main">
        <div className="calendar-day-description">
          {DAYS.map(day => <div className="calendar-day-element" key={day}>{day}</div>)}
        </div>
        <div className="calendar-inside">
          <CalendarGrid monthInfo={this.props.monthInfo}
                        daysAmount={this.props.daysAmount}
                        todayMonth={this.props.todayMonth.name}
                        today={this.props.today}/>
        </div>
        <button className="calendar-button calendar-button-left"
                type="button"
                style={{fontSize: '55px'}}
                onClick={this.handleChange.bind(this,-1)}>
                &#129060;
                </button>
        <button className="calendar-button calendar-button-right"
                type="button"
                style={{fontSize: '55px'}}
                onClick={this.handleChange.bind(this,1)}>
                &#129062;
                </button>
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
              <div className='trivia' key={el}>
                <div className="trivia-box trivia-box-today" />
                <span className="trivia-text"> - today</span>
              </div>
            );
            case 'normal':
            return (
              <div className='trivia' key={el}>
                <div className="trivia-box trivia-box-normal" />
                <span className="trivia-text"> - normal</span>
              </div>
            );
            case 'reserved':
            return (
              <div className='trivia' key={el}>
                <div className="trivia-box trivia-box-reserved" />
                <span className="trivia-text"> - reserved</span>
              </div>
            );
            case 'event':
            return (
              <div className='trivia' key={el}>
                <div className="trivia-box trivia-box-event" />
                <span className="trivia-text"> - event</span>
              </div>
            );
            case 'closed':
            return (
              <div className='trivia' key={el}>
                <div className="trivia-box trivia-box-closed" />
                <span className="trivia-text"> - closed</span>
              </div>
            )
            default:
            return <span>error</span>
          }
        })}
      </div>
    )
  }
}

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.months = [['January',31],['February',28],['March',31],['April',30],
                  ['May',31],['June',30],['July',31],['August',31],['September',30],
                  ['October',31],['November',30],['December',31]];
    this.handleChangeMonth = this.handleChangeMonth.bind(this);
    this.state = {
      currentMonth: this.props.today.getMonth()
    }
  }

  handleChangeMonth(month) {
    if(this.state.currentMonth === 11 && month === 1) {
      this.setState({currentMonth: 0});
      return;
    } else if (this.state.currentMonth === 0 && month === -1) {
      this.setState({currentMonth: 11});
      return;
    }
    this.setState({currentMonth: (this.state.currentMonth + month)});
  }

  render() {
    const daysInfo = this.props.months.filter(month => month.name === this.months[this.state.currentMonth][0]);
    return (
    <div className='calendar-container'>
      <MonthName monthName={this.months[this.state.currentMonth][0]} />
      <CalendarContent today={this.props.today}
                       todayMonth={this.props.months[this.props.today.getMonth()]}
                       handleChangeMonth={this.handleChangeMonth}
                       daysAmount={this.months[this.state.currentMonth][1]}
                       monthInfo={daysInfo[0]}
                      />
      <CalendarTrivia  />
    </div>
  )
  }
}

export default Calendar;
