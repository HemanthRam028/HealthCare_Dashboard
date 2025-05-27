import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/SiderBar/Sidebar';
import DashboardMainContent from './components/Dashboard/DashboardMainContent/DashboardMainContent';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar />
        <DashboardMainContent />
      </div>
    </div>
  );
};

export default App;