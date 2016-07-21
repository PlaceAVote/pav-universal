import React from 'react';
import Hero from './home/Hero.jsx';
import Footer from './home/Footer.jsx';

/**
 * A Home container for the home page.
 * Defines and imports all required containers/compontents
 * for the home page.
 */
const Home = () => {
  return (
    <div>
    <Hero />
    <Footer />
    </div>
  );
};

export default Home;
