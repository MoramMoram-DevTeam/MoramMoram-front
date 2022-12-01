import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import './Calendar.css';

// https://fullcalendar.io/docs/google-calendar
export default function Calendar() {
    // Apikey는 환경 변수를 이용해 숨겼다
    const apiKey = process.env.REACT_APP_API_KEY;

    return (
      <div className="cal-container">
        <FullCalendar
          plugins={[dayGridPlugin, googleCalendarPlugin]}
          initialView="dayGridMonth"
          googleCalendarApiKey={apiKey}
          events={{
            googleCalendarId: 'dev.moram@gmail.com',
          }}
          eventDisplay={'block'}
          eventTextColor={'#00084A'}
          eventColor={'#FFB600'}
        />
      </div> 
    );

}

