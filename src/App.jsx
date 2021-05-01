import React from 'react';
import './App.css';
import Layout, { Content } from 'antd/lib/layout/layout';
import NavigationComponent from './components/navigation/NavigationComponent';
import Router from './routes/Router';
import FooterComponent from './components/footer/FooterComponent';

function App() {
  return (
    <Layout className="App">
      <NavigationComponent />
      <Content>
        <Router />
      </Content>
      <FooterComponent />
    </Layout>
  );
}

export default App;
