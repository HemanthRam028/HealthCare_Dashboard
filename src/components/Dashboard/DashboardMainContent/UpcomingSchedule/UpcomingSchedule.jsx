import React from 'react';
import { upcomingSchedule } from '../../../../data/schedule';
import eyeImg from '../../../../assets/eye.png';
import heartImg from '../../../../assets/heart.png';
import doctorImg from '../../../../assets/doctor.png';
import healthCheckImg from '../../../../assets/healthcheck.png';
import './UpcomingSchedule.css';

// Map icon keys to images
const iconMap = {
  eye: eyeImg,
  heart: heartImg,
  doctor: doctorImg,
  healthcheck: healthCheckImg,
};

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      {upcomingSchedule.map((daySchedule, index) => (
        <div key={index} className="schedule-day">
          <h4>On {daySchedule.day}</h4>
          <div className="schedule-appointments">
            {daySchedule.appointments.map((appointment, i) => {
              const icon = iconMap[appointment.icon];
              return (
                <div key={i} className="schedule-card">
                  <img 
                    src={icon} 
                    alt={appointment.title} 
                    className="schedule-img-icon"
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
