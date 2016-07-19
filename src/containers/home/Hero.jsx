import React from 'react';
import HeroComponent from '../../components/Hero.jsx';
const heroImg = '/images/home/banner.png';
const heroTitle = 'Be Loud, Be Heard, Be Represented';
const heroSubTitle = `Welcome to PlaceAVote, a nonpartisan platform that gives you
                          the opportunity to read, debate, and vote on every bill that
                            is presented before Congress.`;

const HomeHero = () => {
  return (
    <HeroComponent img={ heroImg } title={ heroTitle } subtitle={ heroSubTitle } />
  );
};

export default HomeHero;
