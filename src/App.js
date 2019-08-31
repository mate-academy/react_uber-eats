import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
// import interactionPlugin from '@fullcalendar/interaction';

import './App.css';

export default class DemoApp extends React.Component {
  state = {
    calendar: '',
  }

  render() {
    return (
      <div>
        <h1 className="calendar">
          Calendar View
          {this.state.calendar}
        </h1>
        <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]} />

      </div>
    );
  }
}
