import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Icon from '@mdi/react'
import { mdiWhatsapp, mdiGoogleMaps, mdiAccount } from '@mdi/js';

import Logo from '../../assets/images/logo.svg';

import './style.css';

const Head = () => {
  return(
    <Container className="header-container" fluid>
        <Container>
        <Row expand="lg" className="header-top">
            <Col sx={8}><Icon path={mdiWhatsapp} size={0.8} /> (47) 9999-9999</Col>
            <Col sx={4}>
              <ul>
                <li><Icon path={ mdiAccount } size={0.8}/> Arethusa</li>
                <li><Icon path={ mdiGoogleMaps } size={0.8}/> Bom Retiro - Joinville, SC</li>
              </ul>
            </Col>
        </Row>
        <Row>
          <img className="header-top logo" src={Logo} alt="Logo sua marca"/>
        </Row>
        <Row className="menu">
          <Col sx={4}> esquerdo</Col>
          <Col className="justify-content-sx-center" sx={4}> meio</Col>
          <Col sx={4}> direito</Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Head;