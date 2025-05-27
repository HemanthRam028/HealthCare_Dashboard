import React, { useState } from "react";
import * as Icons from "lucide-react";
import { navigationItems, toolsItems } from "../../data/navigation";
import "./Sidebar.css";

const SidebarItem = ({ label, icon, isActive, onClick }) => {
  const IconComponent = Icons[icon] || Icons.Circle;
  return (
    <div className={`nav-item ${isActive ? "active" : ""}`} onClick={onClick}>
      <span className="icon"><IconComponent size={20} /></span>
      <span className="label">{label}</span>
    </div>
  );
};

const Sidebar = () => {
  const [activeLabel, setActiveLabel] = useState("Dashboard");
  const [isOpen, setIsOpen] = useState(false);

  // Toggle sidebar open/close
  const toggleSidebar = () => setIsOpen((prev) => !prev);

  // Close sidebar when a nav item is clicked (on mobile)
  const handleNavClick = (label) => {
    setActiveLabel(label);
    setIsOpen(false);
  };

  return (
    <>
      {/* Toggle button - visible only on mobile/tablet */}
      <button
        className={`sidebar-toggle`}
        onClick={toggleSidebar}
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? <Icons.X size={24} /> : <Icons.Menu size={24} />}
      </button>

      {/* Overlay for mobile/tablet */}
      {isOpen && <div className="sidebar-overlay active" onClick={toggleSidebar} />}

      <div className={`sidebar${isOpen ? " open" : ""}`}>
        <div className="logo">
          <span className="gradient-text">Health</span>care.
        </div>

        <div className="nav-section">
          <div className="section-title">General</div>
          {navigationItems.map((item) => (
            <SidebarItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              isActive={activeLabel === item.label}
              onClick={() => handleNavClick(item.label)}
            />
          ))}
        </div>

        <div className="nav-section">
          <div className="section-title">Tools</div>
          {toolsItems.map((item) => (
            <SidebarItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              isActive={activeLabel === item.label}
              onClick={() => handleNavClick(item.label)}
            />
          ))}
        </div>

        <div className="setting">
          <SidebarItem
            icon="Settings"
            label="Setting"
            isActive={activeLabel === "Setting"}
            onClick={() => handleNavClick("Setting")}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
