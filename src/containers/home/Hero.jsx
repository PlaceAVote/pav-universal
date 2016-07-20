import React, { PropTypes } from 'react';
import HeroComponent from '../../components/Hero.jsx';
import ButtonComponent from '../../components/Button.jsx';
import { connect } from 'react-redux';
import { showModal } from '../../actions/modal.js';

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
export const HomeHero = ({ dispatch }) => {
  return (
    <HeroComponent img={ heroImg } title={ heroTitle } subtitle={ heroSubTitle } >
    <div>
    <ButtonComponent type='blue' text='Register Now' action={ () => { dispatch(showModal('register')); }} />
    <ButtonComponent type='green' text='Sign In' action={ () => { dispatch(showModal('signIn')); }}/>
    </div>
    </HeroComponent>
  );
};

HomeHero.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(HomeHero);
