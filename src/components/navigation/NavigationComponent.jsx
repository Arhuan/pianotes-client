import React from 'react';

import { Header } from 'antd/lib/layout/layout';

import './NavigationComponent.css';
import { Link } from 'react-router-dom';
import { HomeFilled, InfoCircleOutlined } from '@ant-design/icons';

function NavigationComponent() {
  return (
    <Header className="nav-header">
      <div className="logo">
        <Link to="/">pianotes</Link>
      </div>
      <div className="nav-bar">
        <div className="nav-bar-item">
          <Link to="/">
            <HomeFilled />
          </Link>
        </div>
        <div className="nav-bar-item">
          <Link to="/about">
            <InfoCircleOutlined />
          </Link>
        </div>
      </div>
    </Header>
  );
}

export default NavigationComponent;
