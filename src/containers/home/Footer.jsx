import React, { PropTypes } from 'react';
import FooterComponent from '../../components/Footer.jsx';
import { connect } from 'react-redux';

const links = [
  {url: '/team', label: 'Team'},
  {url: '/faq', label: 'FAQs'},
  {url: '/press', label: 'Press'},
  {url: '/contact', label: 'Contact'},
];


export const HomeFooter = ({ dispatch }) => {

  return (
    <FooterComponent links={links} />
  );
};

export default connect()(HomeFooter);
