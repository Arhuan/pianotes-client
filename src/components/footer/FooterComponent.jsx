import React from 'react';

import { Footer } from 'antd/lib/layout/layout';
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from '@ant-design/icons';

import './FooterComponent.css';

function FooterComponent() {
  return (
    <Footer className="footer-container">
      <div className="footer-content">
        <div>
          Icons made by{' '}
          <a
            href="https://www.flaticon.com/authors/freepik"
            target="_blank"
            rel="noreferrer noopener"
            title="Freepik"
          >
            Freepik
          </a>{' '}
          from{' '}
          <a
            href="https://www.flaticon.com/"
            target="_blank"
            rel="noreferrer noopener"
            title="Flaticon"
          >
            www.flaticon.com
          </a>
        </div>
        <div className="footer-contact">
          <a
            href="https://github.com/Arhuan"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="contact-item">
              <GithubOutlined className="footer-icon" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/aahuangg/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="contact-item">
              <LinkedinOutlined className="footer-icon" />
            </div>
          </a>
          <a
            href="mailto:aaronhuangwork@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="contact-item">
              <MailOutlined className="footer-icon" />
            </div>
          </a>
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;
