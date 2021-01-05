import React from 'react';

import { Typography } from 'antd';
import { Header } from 'antd/lib/layout/layout';

import './NavigationComponent.css';
import { Link } from 'react-router-dom';

function NavigationComponent() {
  return (
    <Header className="nav-header">
      <Typography.Title className="logo" underline>
        pianotes
        <Link to="/" />
      </Typography.Title>
    </Header>
  );
}

export default NavigationComponent;
