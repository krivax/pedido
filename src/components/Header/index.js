import React from 'react';
import { Nav } from 'react-bootstrap';

import Head from '../../objects/Header';

import './style.css'


const Header = () => {

  return(
    <Nav className="top -fixed" fixed="top">
        <Head/>
    </Nav>

  );
}

export default Header;

