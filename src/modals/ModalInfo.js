import React, { Component } from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css';

class ModalInfo extends Component {
  render() {
    return (
      <Container>
        <Modal isOpen={this.props.visivel} toggle={this.props.alternar} centered>
          <ModalHeader className="primary-color text-white" toggle={this.props.alternar}>Aviso</ModalHeader>
          <ModalBody>
            <div className="text-center">
              <p id="mensagemModalInfo">{this.props.mensagem}</p>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button id="botaoInfo" color="primary" onClick={this.props.alternar}>Fechar</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default ModalInfo;