import React from 'react';
import { 
  Form,
  Col,
  Row,
  Container
} from 'react-bootstrap';

import Summary from '../../components/Cart/Summary';

import './styles.css';

const Pay = () => {
  return (
    <>
        <Container className="info-pay">
          <Row className="title-pay"> Pagamento </Row>
          <div style={{display: "flex", marginLeft:"10%"}}>
          <div style={{width: "60%"}}>
          <Form>
            <Form.Row className="align-items-center">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Nome" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Sobrenome</Form.Label>
                <Form.Control type="text" placeholder="Sobrenome" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Endereço</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Complemento</Form.Label>
              <Form.Control placeholder="Apartamento, casa, trabalho" />
            </Form.Group>

            <Form.Row className="align-items-center">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Cidade</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Estado</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>CEP</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>

            <Form.Row className="align-items-center">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Numero do Cartão</Form.Label>
                <Form.Control className="my-1 mr-sm-2"  placeholder="xxxx xxxx xxxx xxxx" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>CCV</Form.Label>
                <Form.Control className="my-1 mr-sm-2" placeholder="xxx" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Validade</Form.Label>
                <Form.Control type="date" className="my-1 mr-sm-2" placeholder="xx/xx" />
              </Form.Group>
            </Form.Row>

            <Form.Row className="align-items-center">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Nome" />
              </Form.Group>
            </Form.Row>
          </Form>
          </div>  
          <div style={{width: "20%", paddingLeft:"30px"}}>
            <Summary />
          </div>
          </div>
        </Container>  
    </>
  );
}

export default Pay; 