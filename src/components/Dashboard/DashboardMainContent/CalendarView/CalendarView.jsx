import React from 'react';
import './CalendarView.css';
import { ChevronLeft, ChevronRight, User, Activity } from 'lucide-react';
import { calendarData, appointmentCards } from '../../../../data/calendar';

const CalendarView = () => {
  return (
    <div className="calendar-section">
      <div className="calendar-header">
        <span className="week-indicator">This Week</span>
        <div className="month-navigation">
          <ChevronLeft size={20} />
          <span className="month-title">{calendarData.month}</span>
          <ChevronRight size={20} />
        </div>
      </div>

      <div className="calendar-grid">
        <div className="calendar-days-header">
          {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map(day => (
            <div key={day} className="day-header">{day}</div>
          ))}
        </div>

        <div className="calendar-days">
          {calendarData.days.map((dayData, index) => (
            <div key={index} className="calendar-day">
              <div className="day-number">{dayData.day}</div>
              <div className="day-appointments">
                {dayData.appointments.map((time, i) => (
                  <div key={i} className="appointment-time">{time}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="appointment-cards">
        {appointmentCards.map((card, index) => (
          <div key={index} className={`appointment-card ${card.type}`}>
            <div className="appointment-info">
              <h4>{card.title}</h4>
              <p>{card.time}</p>
              <p>{card.doctor}</p>
            </div>
            {card.type === 'dentist' ? <User size={24} /> : <Activity size={24} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
