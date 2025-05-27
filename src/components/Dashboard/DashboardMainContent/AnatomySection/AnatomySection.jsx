// src/components/DashboardMainContent/AnatomySection/AnatomySection.jsx
import React from 'react';
import { Heart, Activity, ChevronRight } from 'lucide-react';
import HealthStatusCards from '../HealthStatusCards/HealthStatusCards';
import './AnatomySection.css';

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
  <div className="anatomy-container">
    <div className="anatomy-figure">
      <div className="human-body">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/13/Muscular_system.svg"
          alt="Human Anatomy"
          className="anatomy-image"
        />
        <div className="healthy-heart-badge">
          <Heart size={16} fill="white" />
          <span>Healthy Heart</span>
        </div>
        <div className="healthy-leg-badge">
          <Activity size={16} />
          <span>Healthy Leg</span>
        </div>
      </div>
    </div>
    <HealthStatusCards />
  </div>
  <div className="details-link">
    <span>Details</span>
    <ChevronRight size={16} />
  </div>
</div>

  );
};

export default AnatomySection;
