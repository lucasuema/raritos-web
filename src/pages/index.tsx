import React from 'react';
import Layout from '../components/Layout';
import Header from 'src/components/Header';
import Hero from 'src/components/Hero';

const IndexPage = () => {
  return (
    <Layout title="The Raritos">
      <Header />
      <Hero />
    </Layout>
  );
};

export default IndexPage;
