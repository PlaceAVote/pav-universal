import React, { PropTypes } from 'react';
import HeroComponent from '../../components/Hero.jsx';
import ButtonComponent from '../../components/Button.jsx';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

// Specific visual parameters
const heroImg = '/images/home/banner.png';
const heroTitle = 'Be Loud, Be Heard, Be Represented';
const heroSubTitle = `Welcome to PlaceAVote, a nonpartisan platform that gives you
                          the opportunity to read, debate, and vote on every bill that
                            is presented before Congress.`;

/**
 * Specific Hero for the home page, defined children and actions as well as
 * specific content.
 */
export const HomeHero = ({ history }) => {
  return (
    <HeroComponent img={ heroImg } title={ heroTitle } subtitle={ heroSubTitle } >
    <div className="o-row-desktop">
    <ButtonComponent type='green' text='Register Now' action={ () => {
      history.push('/signup');
    }} />
    <ButtonComponent type='blue' text='Sign In' action={ () => {
      history.push('/signin');
    }}/>
    </div>
    </HeroComponent>
  );
};

HomeHero.propTypes = {
  history: PropTypes.object,
};

HomeHero.defaultProps = {
  history: browserHistory,
};

export default connect()(HomeHero);
