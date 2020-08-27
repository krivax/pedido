import React from 'react';
import { Row, Col,Card, Table, Button } from 'react-bootstrap';



const Summary = () => {
  return (
    <>
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
                  <Col className="text-right">R$ 62,50</Col>
                  </Row>
                </Card.Subtitle>
                <Card.Body>
                  <Button href="#finalizar" className="btn btn-block btn-lg btn-danger no-radius">Finalizar a compra</Button>
                </Card.Body>
              </Card>
            
    </>
  )
}

export default Summary;