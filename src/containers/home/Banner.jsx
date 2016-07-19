import React from 'react';
import BannerComponent from '../../components/Banner.jsx';
const bannerImg = '/images/home/banner.png';
const bannerTitle = 'Be Loud, Be Heard, Be Represented';
const bannerSubTitle = `Welcome to PlaceAVote, a nonpartisan platform that gives you
                          the opportunity to read, debate, and vote on every bill that
                            is presented before Congress.`;

const HomeBanner = () => {
  return (
    <BannerComponent img={ bannerImg } title={ bannerTitle } subtitle={ bannerSubTitle } />
  );
};

export default HomeBanner;
