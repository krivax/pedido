import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiCreditCardOutline, mdiTag, mdiTruck } from '@mdi/js';

import Itens from '../../components/Cart/Itens';
import Summary from '../../components/Cart/Summary';

import './styles.css'


const Cart = () => {
  return (
    <>
      <Container fluid style={{backgroundColor:'#f5f5f5'}}>
        <Container>
        <Row className="info">
          <Col><Icon path={ mdiTruck } size={1}/> Delivery apenas para Joinville</Col>
          <Col><Icon path={ mdiTag } size={1}/> Desconto de 10% nas compras acima de R$ 200,00</Col>
          <Col><Icon path={ mdiCreditCardOutline } size={1}/> Pague em até 12x no cartão</Col>
        </Row>
        </Container>
        </Container>
          <Row className="text-center title">
            <Col>Carrinho</Col>
          </Row>
        <Container>
          <Row>
            <Col lg={8}>
                <Itens />
            </Col>
            <Col lg={4}>
              <Summary/>
            </Col>
          </Row>
      </Container>
    </>
  )
}

export default Cart;