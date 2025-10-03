import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const sidebarItems = [
    { name: 'Dashboard', icon: '📊', active: true },
    { name: 'Analytics', icon: '📈' },
    { name: 'Customers', icon: '👥' },
    { name: 'Orders', icon: '📦' },
    { name: 'Products', icon: '🛍️' },
    { name: 'Reviews', icon: '⭐' },
    { name: 'Settings', icon: '⚙️' }
  ];

  const metrics = [
    { title: 'Total Revenue', value: '$45,231.89', change: '+20.1%', icon: '💰' },
    { title: 'Total Orders', value: '2,350', change: '+180.1%', icon: '📦' },
    { title: 'Total Customers', value: '12,234', change: '+19%', icon: '👥' },
    { title: 'Total Products', value: '2,350', change: '+201', icon: '🛍️' }
  ];

  const recentOrders = [
    { id: '#281209', customer: 'Dianne Russell', amount: '$72,398', status: 'Completed', date: '7 July, 2023' },
    { id: '#281210', customer: 'Jacob Jones', amount: '$87,245', status: 'Completed', date: '7 July, 2023' },
    { id: '#281211', customer: 'Ronald Richards', amount: '$91,768', status: 'Pending', date: '6 July, 2023' },
    { id: '#281212', customer: 'Jenny Wilson', amount: '$12,398', status: 'Completed', date: '6 July, 2023' },
    { id: '#281213', customer: 'Marvin McKinney', amount: '$56,142', status: 'Pending', date: '5 July, 2023' }
  ];

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Dashboard</h2>
        </div>
        <nav className="sidebar-nav">
          {sidebarItems.map((item, index) => (
            <div key={index} className={`nav-item ${item.active ? 'active' : ''}`}>
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.name}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="header">
          <h1>Dashboard</h1>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button>🔍</button>
          </div>
        </header>

        {/* Metrics Cards */}
        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <div key={index} className="metric-card">
              <div className="metric-header">
                <span className="metric-icon">{metric.icon}</span>
                <span className="metric-change">{metric.change}</span>
              </div>
              <div className="metric-content">
                <h3 className="metric-title">{metric.title}</h3>
                <p className="metric-value">{metric.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Orders */}
        <div className="orders-section">
          <h2>Recent Orders</h2>
          <div className="orders-table">
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order, index) => (
                  <tr key={index}>
                    <td>{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.amount}</td>
                    <td>
                      <span className={`status ${order.status.toLowerCase()}`}>
                        {order.status}
                      </span>
                    </td>
                    <td>{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;