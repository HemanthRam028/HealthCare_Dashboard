import React from 'react';
import * as LucideIcons from 'lucide-react';
import { healthStatus } from '../../../../data/healthStatus';
import './HealthStatusCards.css';

const HealthStatusCards = () => {
  const getHealthIconColor = (status) => {
    switch (status) {
      case 'critical': return '#EF4444';
      case 'good': return '#10B981';
      case 'warning': return '#F59E0B';
      default: return '#6B7280';
    }
  };

  const getProgressColor = (status) => {
    switch (status) {
      case 'critical': return '#EF4444';
      case 'good': return '#10B981';
      case 'warning': return '#F59E0B';
      default: return '#E5E7EB';
    }
  };

  return (
    <div className="health-status-cards">
      {healthStatus.map((item, index) => {
        const IconComponent = LucideIcons[item.icon];
        return (
          <div key={index} className="health-card">
            <div className="health-card-header">
              <IconComponent size={24} style={{ color: getHealthIconColor(item.status) }} />
              <div>
                <h3>{item.label}</h3>
                <p className="health-date">{item.date}</p>
              </div>
            </div>
            <div className="health-progress">
              <div
                className="progress-bar"
                style={{
                  width: `${item.progress}%`,
                  backgroundColor: getProgressColor(item.status),
                }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HealthStatusCards;
