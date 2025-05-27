// src/components/DashboardMainContent/UpcomingSchedule/SimpleAppointmentCard.jsx
import React from 'react';

const SimpleAppointmentCard = ({ icon, title, time }) => {
  return (
    <div className="schedule-card">
      {icon}
      <div>
        <p>{title}</p>
        <span>{time}</span>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;