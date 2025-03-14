import React from 'react';

const DashboardSideBar = () => {
  return (
    <ul className="dashboardSideBar">
      <img alt="logo" style={{ height: '125px', width: '200px' }} />
      <li className="li1">
        <a href="dashboardHome.html">Overview</a>
      </li>
      <li className="li1">
        <a href="reports.html">Reports</a>
      </li>
      <li className="li1">
        <a href="settings.html">Settings</a>
      </li>
      <li className="li1" style={{ margin: '225% 0px 5% 0px' }}>
        <a href="#login/logout">Login/Logout</a>
      </li>
    </ul>
  );
};

export default DashboardSideBar;