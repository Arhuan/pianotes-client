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
      <Footer />
    </Layout>
  );
}

export default App;
