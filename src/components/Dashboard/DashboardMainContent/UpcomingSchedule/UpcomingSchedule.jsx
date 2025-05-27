import React from 'react';
import * as LucideIcons from 'lucide-react';
import { upcomingSchedule } from '../../../../data/schedule';
import './UpcomingSchedule.css';

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h3>   The Upcoming Schedule</h3>
      {upcomingSchedule.map((daySchedule, index) => (
        <div key={index} className="schedule-day">
          <h4>On {daySchedule.day}</h4>
          <div className="schedule-appointments">
            {daySchedule.appointments.map((appointment, i) => {
              const IconComponent = LucideIcons[appointment.icon];
              return (
                <div key={i} className="schedule-card">
                  <IconComponent 
                    size={20} 
                    className={`schedule-icon ${appointment.iconColor}`} 
                  />
                  <div>
                    <p>{appointment.title}</p>
                    <span>{appointment.time}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
