import React from 'react';

import { Footer } from 'antd/lib/layout/layout';

import './FooterComponent.css';

function FooterComponent() {
  return (
    <Footer className="footer-container">
      <div>
        Icons made by{' '}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </Footer>
  );
}

export default FooterComponent;
