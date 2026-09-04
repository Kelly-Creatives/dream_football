import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
import Sports from '../components/Sports';
import Team from '../components/Team';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Programs />
      <Sports />
      <Team />
    </div>
  );
};

export default Home;
