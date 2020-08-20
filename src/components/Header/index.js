import React from 'react';
import { Container } from 'react-bootstrap';

import Head from '../../objects/Header';

import './style.css'

const Header = () => {
  return(
    <Container className="top" fluid>
        <Head/>
    </Container>
  );
}

export default Header;

