import React from 'react';
import { 
  Container, 
  Row, 
  Col, 
  InputGroup,
  FormControl
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
            <Col sm={8}><Icon path={mdiWhatsapp} size={0.8} /> (47) 9999-9999</Col>
            <Col className="text-right " >
              <ul>
                <li><Icon path={ mdiAccount } size={0.8}/> <span className="hover">Arethusa</span></li>
                <li><Icon path={ mdiGoogleMaps } size={0.8}/> <span className="hover">Bom Retiro - Joinville, SC</span></li>
              </ul>
            </Col>
        </Row>
        
        <Row>
          <img className="header-top logo" src={Logo} alt="Logo sua marca"/>
        </Row>

        <Row className="menu">
          <Col> 
            <ul>
              <li><a href="#setores"><Icon path={ mdiMenu } size={1}/></a></li>
              <li><a href="#setores">Setores</a></li>
              <li><a href="#setores"> Ofertas</a></li>
            </ul>
          </Col>
          <Col > 
            <InputGroup className="search">
              <FormControl  size="sm" placeholder="O que você procura?"/>
              <InputGroup.Append  className="input-search">
                <a href="#search"><Icon className="icon" path={ mdiMagnify } size={1}/></a>
              </InputGroup.Append>
            </InputGroup>
          </Col>
          <Col className="text-right mobile" > 
            <Icon path={ mdiCart } size={1} color="#E53935"/> R$ 62,50
            </Col>
        </Row>
      </Container>
  );
}

export default Head;