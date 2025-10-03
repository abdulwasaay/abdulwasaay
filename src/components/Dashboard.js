import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const tabs = ['Dashboard', 'Analytics', 'Reports', 'Settings'];

  const metrics = [
    {
      title: 'Total Revenue',
      value: '$45,231',
      change: '+20.1%',
      changeType: 'positive',
      icon: '💰'
    },
    {
      title: 'Active Users',
      value: '2,350',
      change: '+180.1%',
      changeType: 'positive',
      icon: '👥'
    },
    {
      title: 'Conversion Rate',
      value: '12.5%',
      change: '+19%',
      changeType: 'positive',
      icon: '📈'
    },
    {
      title: 'Avg. Order Value',
      value: '$89.50',
      change: '-2.4%',
      changeType: 'negative',
      icon: '🛒'
    }
  ];

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-content">
          <div className="header-left">
            <h1 className="dashboard-title">Dashboard</h1>
          </div>
          <div className="header-right">
            <div className="user-profile">
              <div className="user-avatar">
                <span className="avatar-text">JD</span>
              </div>
              <div className="user-info">
                <span className="user-name">John Doe</span>
                <span className="user-role">Administrator</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="dashboard-nav">
        <div className="nav-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`nav-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="dashboard-content">
          {/* Metrics Cards */}
          <div className="metrics-grid">
            {metrics.map((metric, index) => (
              <div key={index} className="metric-card">
                <div className="metric-header">
                  <div className="metric-icon">{metric.icon}</div>
                  <div className="metric-title">{metric.title}</div>
                </div>
                <div className="metric-value">{metric.value}</div>
                <div className={`metric-change ${metric.changeType}`}>
                  {metric.change} from last month
                </div>
              </div>
            ))}
          </div>

          {/* Additional Content Area */}
          <div className="content-section">
            <div className="section-header">
              <h2>Recent Activity</h2>
              <button className="view-all-btn">View All</button>
            </div>
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon">📊</div>
                <div className="activity-content">
                  <div className="activity-title">New report generated</div>
                  <div className="activity-time">2 hours ago</div>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">👤</div>
                <div className="activity-content">
                  <div className="activity-title">User registration completed</div>
                  <div className="activity-time">4 hours ago</div>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">💳</div>
                <div className="activity-content">
                  <div className="activity-title">Payment processed</div>
                  <div className="activity-time">6 hours ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;