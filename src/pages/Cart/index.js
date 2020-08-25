import React from 'react';
import { Container, Row, Col,Card, Table, Button } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiCreditCardOutline, mdiTag, mdiTruck, mdiMessageOutline, mdiDelete, mdiPlus, mdiMinus } from '@mdi/js';
import ProductImage from '../../assets/images/product.jpg';

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
                <div className="product-itens">
                        <figure>
                          <img src={ ProductImage } alt="produto" />
                        </figure>
                        <span className="itens">
                          <h4><a href="#teste">Nome de Produto XPTO Qualquer - Marca TantoFaz</a></h4>
                          <h5>SKU1254023653</h5>
                          <p><a href="#teste"><Icon path={ mdiMessageOutline } size={1} color="#E53935"/> Adicionar observação</a></p>
                        </span>
                        <span className="itens-input"><Icon path={ mdiMinus } size={1} /><input value="2" /><Icon path={ mdiPlus } size={1} color="#E53935"/></span>
                        <span className="itens-total-trash">R$ 12,50 <Icon path={ mdiDelete } size={1} color="#E53935" style={{marginTop: 55}}/> </span>
                </div>
                <div className="product-itens">
                        <figure>
                          <img src={ ProductImage } alt="produto" />
                        </figure>
                        <span className="itens">
                          <h4><a href="#teste">Nome de Produto XPTO Qualquer - Marca TantoFaz</a></h4>
                          <h5>SKU1254023653</h5>
                          <p><a href="#teste"><Icon path={ mdiMessageOutline } size={1} color="#E53935"/> Adicionar observação</a></p>
                        </span>
                        <span className="itens-input"><Icon path={ mdiMinus } size={1} /><input value="2" /><Icon path={ mdiPlus } size={1} color="#E53935"/></span>
                        <span className="itens-total-trash">R$ 12,50 <Icon path={ mdiDelete } size={1} color="#E53935" style={{marginTop: 55}}/> </span>
                </div>
                <div className="product-itens">
                        <figure>
                          <img src={ ProductImage } alt="produto" />
                        </figure>
                        <span className="itens">
                          <h4><a href="#teste">Nome de Produto XPTO Qualquer - Marca TantoFaz</a></h4>
                          <h5>SKU1254023653</h5>
                          <p><a href="#teste"><Icon path={ mdiMessageOutline } size={1} color="#E53935"/> Adicionar observação</a></p>
                        </span>
                        <span className="itens-input"><Icon path={ mdiMinus } size={1} /><input value="2" /><Icon path={ mdiPlus } size={1} color="#E53935"/></span>
                        <span className="itens-total-trash">R$ 12,50 <Icon path={ mdiDelete } size={1} color="#E53935" style={{marginTop: 55}}/> </span>
                </div>
                <div className="product-itens">
                        <figure>
                          <img src={ ProductImage } alt="produto" />
                        </figure>
                        <span className="itens">
                          <h4><a href="#teste">Nome de Produto XPTO Qualquer - Marca TantoFaz</a></h4>
                          <h5>SKU1254023653</h5>
                          <p><a href="#teste"><Icon path={ mdiMessageOutline } size={1} color="#E53935"/> Adicionar observação</a></p>
                        </span>
                        <span className="itens-input"><Icon path={ mdiMinus } size={1} /><input value="2" /><Icon path={ mdiPlus } size={1} color="#E53935"/></span>
                        <span className="itens-total-trash">R$ 12,50 <Icon path={ mdiDelete } size={1} color="#E53935" style={{marginTop: 55}}/> </span>
                </div>
                <div className="product-itens">
                        <figure>
                          <img src={ ProductImage } alt="produto" />
                        </figure>
                        <span className="itens">
                          <h4><a href="#teste">Nome de Produto XPTO Qualquer - Marca TantoFaz</a></h4>
                          <h5>SKU1254023653</h5>
                          <p><a href="#teste"><Icon path={ mdiMessageOutline } size={1} color="#E53935"/> Adicionar observação</a></p>
                        </span>
                        <span className="itens-input"><Icon path={ mdiMinus } size={1} /><input value="2" /><Icon path={ mdiPlus } size={1} color="#E53935"/></span>
                        <span className="itens-total-trash">R$ 12,50 <Icon path={ mdiDelete } size={1} color="#E53935" style={{marginTop: 55}}/> </span>
                </div>
            </Col>
            <Col lg={4}>
              <Card className="card-custom no-radius">
                <Card.Header className="bg-light card-info">
                  Resumo do pedido
                </Card.Header>
                <Row className="summary">
                  <Col sm={8}>
                    <Table>
                        <tr>Itens</tr>
                        <tr>Total em produtos</tr>
                        <tr>Descontos</tr>
                    </Table>
                  </Col>
                  <Col sm={4} className="text-right bold">
                    <Table>
                        <tr>5</tr>
                        <tr>R$ 62,50</tr>
                        <tr>R$ 0,00</tr>
                    </Table>
                  </Col>
                </Row>
                <Card.Subtitle>
                  <Row className="card-info total">
                  <Col>Total</Col> 
                  <Col className="text-right">R$ 62,00</Col>
                  </Row>
                </Card.Subtitle>
                <Card.Body>
                  <Button href="#finalizar" className="btn btn-block btn-lg btn-danger no-radius">Finalizar a compra</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
      </Container>
    </>
  )
}

export default Cart;