// src/components/DashboardMainContent/ActivityFeed/ActivityFeed.jsx
import React from 'react';
import './ActivityFeed.css';

const ActivityFeed = () => {
  return (
    <div className="activity-section">
      <h3>Activity</h3>
      <p className="activity-subtitle">3 appointments on this week</p>
      <div className="activity-chart">
        <div className="chart-bars">
          {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map((day, index) => (
            <div key={day} className="chart-day">
              <div className="chart-bar-container">
                <div 
                  className="chart-bar primary" 
                  style={{ height: `${Math.random() * 60 + 20}%` }}
                ></div>
                <div 
                  className="chart-bar secondary" 
                  style={{ height: `${Math.random() * 40 + 10}%` }}
                ></div>
              </div>
              <span className="chart-day-label">{day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;