import React from 'react';
import { 
  Container, 
  Row, 
  Col, 
  InputGroup, 
  FormControl, 
  Button 
} from 'react-bootstrap';

import Icon from '@mdi/react'
import { 
  mdiWhatsapp, 
  mdiGoogleMaps, 
  mdiAccount,
  mdiMenu,
  mdiCart,
  mdiMagnify 
} from '@mdi/js';

import Logo from '../../assets/images/logo.svg';

import './style.css';

const Head = () => {
  return(
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
              <li><a href="#setores"><Icon path={ mdiMenu } size={1}/> Setores</a></li>
              <li><a href="#setores"> Ofertas</a></li>
            </ul>
          </Col>
          <Col> 
            <form className="input-search">
              <input className="content" type="search" placeholder="O que você Procura?" /><i className="fa fa-search"></i>
            </form>
          </Col>
          <Col className="text-right" > 
            <Icon path={ mdiCart } size={0.8} color="red"/> R$ 62,50
            </Col>
        </Row>
      </Container>
  );
}

export default Head;