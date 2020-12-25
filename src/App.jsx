import React from 'react';
import './App.css';
import Layout, { Content, Footer } from 'antd/lib/layout/layout';
import NavigationComponent from './components/navigation/NavigationComponent';
import Router from './routes/Router';

function App() {
  return (
    <Layout className="App">
      <NavigationComponent />
      <Content>
        <Router />
      </Content>
      <Footer>
        <div>
          Icons made by{' '}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{' '}
          and{' '}
          <a
            href="https://www.flaticon.com/authors/pixel-perfect"
            title="Pixel perfect"
          >
            Pixel perfect
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </Footer>
    </Layout>
  );
}

export default App;
