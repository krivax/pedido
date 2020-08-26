import React from 'react';
import { Container } from 'react-bootstrap';

import Head from '../../objects/Header';

import './style.css'

const Header = () => {
  let className = 'top';
  if(window.scrollTo(0,0) > 10) {
    className += ' -fixed'
  }

  console.log(className);
  return(
    <Container className={className} fixed fluid>
        <Head/>
    </Container>
  );
}

export default Header;

