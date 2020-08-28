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
          <span><Icon path={ mdiTruck } size={1}/> Delivery apenas para Joinville</span>
          <span><Icon path={ mdiTag } size={1}/> Desconto de 10% nas compras acima de R$ 200,00</span>
          <span><Icon path={ mdiCreditCardOutline } size={1}/> Pague em até 12x no cartão</span>
        </Row>
        </Container>
        </Container>
          <Row className="text-center title">
            <Col>Carrinho</Col>
          </Row>
        <Container>
          <Row>
            <Col >
                <Itens />
            </Col>
            <Col >
              <Summary/>
            </Col>
          </Row>
      </Container>
    </>
  )
}

export default Cart;