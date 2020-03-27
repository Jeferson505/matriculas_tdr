import React from 'react';
import '../../App.css';

import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol  } from 'mdbreact';

export default class CardInformacoesPessoais extends React.Component {
    render(){
        return(
            <MDBRow className="rowCardDetalhes">
                <MDBCard className="tamCardDetalhes">
                    <MDBCardBody>
                        <MDBCardTitle>Informações Pessoais</MDBCardTitle>
                        
                        <MDBRow className="cardMargin">
                            <MDBCol>
                                <MDBCardText>
                                    Nome: <MDBCardText>{this.props.detalhesEstudante.aluno.nome}</MDBCardText>
                                </MDBCardText>
                            </MDBCol>

                            <MDBCol>
                                <MDBCardText>
                                    Sexo: <MDBCardText>{this.props.detalhesEstudante.aluno.sexo.descricao}</MDBCardText>
                                </MDBCardText>
                            </MDBCol>

                            <MDBCol>
                                <MDBCardText>
                                    Idade: <MDBCardText>{this.props.detalhesEstudante.aluno.idade}</MDBCardText>
                                </MDBCardText>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className="cardMargin">
                            <MDBCol>
                                <MDBCardText>
                                    Nome Social: <MDBCardText>{this.props.detalhesEstudante.aluno.nomeSocial !== null ? this.props.detalhesEstudante.aluno.nomeSocial : "*Não Possui*"}</MDBCardText>
                                </MDBCardText>
                            </MDBCol>

                            <MDBCol>
                                <MDBCardText>
                                    CPF: <MDBCardText>{this.props.detalhesEstudante.aluno.cpf !== null ? this.props.detalhesEstudante.aluno.cpf : "*Não cadastrado*"}</MDBCardText>
                                </MDBCardText>
                            </MDBCol>

                            <MDBCol>
                                <MDBCardText>
                                    Data de nascimento: <MDBCardText>{this.props.detalhesEstudante.aluno.nascimento}</MDBCardText>
                                </MDBCardText>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className="cardMargin">
                            <MDBCol>
                                <MDBCardText>
                                    Nº SUS: <MDBCardText>{this.props.detalhesEstudante.aluno.numeroSus !== null ? this.props.detalhesEstudante.aluno.numeroSus : "*Não cadastado*"}</MDBCardText>
                                </MDBCardText>
                            </MDBCol>

                            <MDBCol>
                                <MDBCardText>
                                    Inep: <MDBCardText>{this.props.detalhesEstudante.aluno.numeroInep !== null ? this.props.detalhesEstudante.aluno.numeroInep : "*Não cadastrado*"}</MDBCardText>
                                </MDBCardText>
                            </MDBCol>

                            <MDBCol>
                                <MDBCardText>
                                    Nis: <MDBCardText>{this.props.detalhesEstudante.aluno.numeroNis !== null ? this.props.detalhesEstudante.aluno.numeroNis : "*Não cadastrado*"}</MDBCardText>
                                </MDBCardText>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className="cardMargin">
                            <MDBCol>
                                <MDBCardText>
                                    Filiação: <MDBCardText>{this.props.detalhesEstudante.aluno.filiacao !== null ? this.props.detalhesEstudante.aluno.filiacao : "*Não cadastado*"}</MDBCardText>
                                </MDBCardText>
                            </MDBCol>
                        </MDBRow>

                    </MDBCardBody>
                </MDBCard>
            </MDBRow>
        );
    }
}
