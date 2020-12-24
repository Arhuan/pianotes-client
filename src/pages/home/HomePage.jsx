import React from 'react';
import './HomePage.css';
import Layout, { Content, Footer } from 'antd/lib/layout/layout';
import NavigationComponent from '../../components/navigation/NavigationComponent';

function HomePage() {
  return (
    <Layout className="home-page">
      <NavigationComponent />
      <Content />
      <Footer />
    </Layout>
  );
}

export default HomePage;
