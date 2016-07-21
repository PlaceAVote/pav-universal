import React, { PropTypes } from 'react';
import { Link } from 'react-router'
const Footer = ({ links }) => {
  const linkComponents = links.map((link, index) => { return (<Link key={index} to={ link.url }> {link.label} </Link>) })
  return (
    <footer className='c-footer o-row'>
      <img src="images/logo/mark_full_color.svg" />
      <div className='o-row'>
        { linkComponents }
      </div>
    </footer>
  );
};

Footer.propTypes = {
  links: PropTypes.array,
}

export default Footer;
