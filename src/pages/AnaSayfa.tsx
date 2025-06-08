import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Skills from '../components/home/Skills';
import CTASection from '../components/home/CTASection';
import Layout from '../components/layout/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProjects />
      <Skills />
      <CTASection />
    </Layout>
  );
};

export default Home;