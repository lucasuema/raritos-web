import React from 'react';
import Layout from '../components/Layout';
import Header from 'src/components/Header';
import Hero from 'src/components/Hero';
import Footer from 'src/components/Footer';

const IndexPage = () => {
  return (
    <Layout title="The Raritos">
      <Header />
      <Hero />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
