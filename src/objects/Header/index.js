import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Icon from '@mdi/react'
import { 
  mdiWhatsapp, 
  mdiGoogleMaps, 
  mdiAccount,
  mdiMenu,
  mdiCart 
} from '@mdi/js';

import Logo from '../../assets/images/logo.svg';

import './style.css';

const Head = () => {
  return(
    <Container className="header-container" fluid>
        <Container>
        <Row expand="lg" className="header-top">
            <Col sx={8}><Icon path={mdiWhatsapp} size={0.8} /> (47) 9999-9999</Col>
            <Col className="text-right" >
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
          <Col> 
            <ul>
              <li><Icon path={ mdiMenu } size={0.8}/> Arethusa</li>
              <li> R$ 62,50</li>
            </ul>
          </Col>
          <Col > meio</Col>
          <Col className="text-right" > 
            <Icon path={ mdiCart } size={0.8} color="red"/> R$ 62,50
            </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Head;