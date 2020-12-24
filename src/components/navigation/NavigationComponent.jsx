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

class NavigationComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'home',
    };
  }

  handleClick = (e) => {
    this.setState({ current: e.key });
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
            <Menu.Item key="home" icon={<HomeOutlined />} />
            <Menu.Item key="ranking" icon={<BarChartOutlined />} />
          </Menu>
          <Menu
            theme="light"
            selectedKeys={[current]}
            mode="horizontal"
            onClick={this.handleClick}
          >
            <Menu.Item key="settings" icon={<SettingOutlined />} />
            <Menu.Item key="profile" icon={<UserOutlined />} />
          </Menu>
        </div>
      </Header>
    );
  }
}

export default NavigationComponent;
