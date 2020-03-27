import React from 'react';
import '../../App.css';

import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol  } from 'mdbreact';

export default class CardObservacoes extends React.Component {
    render(){
        return(
            <MDBRow className="rowCardDetalhes">
                <MDBCard className="tamCardDetalhes">
                    <MDBCardBody>
                        <MDBCardTitle>Observações</MDBCardTitle>
                        
                        <MDBRow className="cardMargin">
                            <MDBCol>
                                <MDBCardText>
                                    Possui Restrições: <MDBCardText>{this.props.detalhesEstudante.possuiRestricoes ? 'SIM' : 'NÃO'}</MDBCardText>
                                </MDBCardText>
                            </MDBCol>

                            <MDBCol>
                                <MDBCardText>
                                    Possui Avaliações: <MDBCardText>{this.props.detalhesEstudante.possuiAvaliacoes ? 'SIM' : 'NÃO'}</MDBCardText>
                                </MDBCardText>
                            </MDBCol>

                            <MDBCol>
                                <MDBCardText>
                                    Possui Modalidades: <MDBCardText>{this.props.detalhesEstudante.possuiModalidades ? 'SIM' : 'NÃO'}</MDBCardText>
                                </MDBCardText>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className="cardMargin">
                            <MDBCol>
                                <MDBCardText>
                                    Alergia: <MDBCardText>{this.props.detalhesEstudante.alergia !== null ? this.props.detalhesEstudante.alergia : "*Não Possui*"}</MDBCardText>
                                </MDBCardText>
                            </MDBCol>

                            <MDBCol>
                                <MDBCardText>
                                    Situação: <MDBCardText>{this.props.detalhesEstudante.situacaoDescricao !== null ? this.props.detalhesEstudante.situacaoDescricao : "*Não cadastrada*"}</MDBCardText>
                                </MDBCardText>
                            </MDBCol>

                            <MDBCol/>
                        </MDBRow>

                    </MDBCardBody>
                </MDBCard>
            </MDBRow>
        );
    }
}
