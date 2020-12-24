import React from 'react';

import { Menu, Typography } from 'antd';
import {
  BarChartOutlined,
  HomeOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Header } from 'antd/lib/layout/layout';

import './NavigationComponent.css';
import { Link } from 'react-router-dom';

class NavigationComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'home',
    };
  }

  handleClick = (event) => {
    this.setState({ current: event.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Header className="nav-header">
        <Typography.Title className="logo" underline>
          pianotes
        </Typography.Title>
        <div className="nav-menu">
          <Menu
            theme="light"
            selectedKeys={[current]}
            mode="horizontal"
            onClick={this.handleClick}
          >
            <Menu.Item key="home" icon={<HomeOutlined />}>
              <Link to="/" />
            </Menu.Item>
            <Menu.Item key="ranking" icon={<BarChartOutlined />}>
              <Link to="/ranking" />
            </Menu.Item>
          </Menu>
          <Menu
            theme="light"
            selectedKeys={[current]}
            mode="horizontal"
            onClick={this.handleClick}
          >
            <Menu.Item key="settings" icon={<SettingOutlined />}>
              <Link to="/settings" />
            </Menu.Item>
            <Menu.Item key="profile" icon={<UserOutlined />}>
              <Link to="/user" />
            </Menu.Item>
          </Menu>
        </div>
      </Header>
    );
  }
}

export default NavigationComponent;
