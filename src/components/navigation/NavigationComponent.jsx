import React from 'react';

import { Header } from 'antd/lib/layout/layout';

import './NavigationComponent.css';
import { Link } from 'react-router-dom';

function NavigationComponent() {
  return (
    <Header className="nav-header">
      <div className="logo">
        pianotes
        <Link to="/" />
      </div>
    </Header>
  );
}

export default NavigationComponent;
