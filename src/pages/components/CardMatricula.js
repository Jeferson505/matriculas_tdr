import React from 'react';
import '../../App.css';

import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol  } from 'mdbreact';

export default class CardObservacoes extends React.Component {
    render(){
        return(
            <MDBRow className="rowCardDetalhes">
                <MDBCard className="tamCardDetalhes">
                    <MDBCardBody>
                        <MDBCardTitle>Matrícula</MDBCardTitle>
                        
                        <MDBRow className="cardMargin">
                            <MDBCol>
                                <MDBCardText>
                                    Data da Matrícula: <MDBCardText>{this.props.detalhesEstudante.dataMatricula !== null ? this.props.detalhesEstudante.dataMatricula : '*Não Consta*'}</MDBCardText>
                                </MDBCardText>
                            </MDBCol>

                            <MDBCol>
                                <MDBCardText>
                                    Situação da Matrícula: <MDBCardText>{this.props.detalhesEstudante.situacaoMatricula.descricao !== null ? this.props.detalhesEstudante.situacaoMatricula.descricao : '*Não Consta*'}</MDBCardText>
                                </MDBCardText>
                            </MDBCol>

                            <MDBCol>
                                <MDBCardText>
                                    Escola: <MDBCardText>{this.props.detalhesEstudante.turma.grade.escolaCurso.anoLetivo.escola.nome}</MDBCardText>
                                </MDBCardText>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className="cardMargin">
                            <MDBCol>
                                <MDBCardText>
                                    Curso: <MDBCardText>{this.props.detalhesEstudante.turma.grade.escolaCurso.curso.nome !== null ? this.props.detalhesEstudante.turma.grade.escolaCurso.curso.nome : '*Não Consta*'}</MDBCardText>
                                </MDBCardText>
                            </MDBCol>

                            <MDBCol>
                                <MDBCardText>
                                    Grade: <MDBCardText>{this.props.detalhesEstudante.turma.grade.descricao !== null ? this.props.detalhesEstudante.turma.grade.descricao : '*Não Consta*'}</MDBCardText>
                                </MDBCardText>
                            </MDBCol>

                            <MDBCol>
                                <MDBCardText>
                                    Turma: <MDBCardText>{this.props.detalhesEstudante.turma.nome !== null ? this.props.detalhesEstudante.turma.nome : '*Não Consta*'}</MDBCardText>
                                </MDBCardText>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className="cardMargin">
                            <MDBCol>
                                <MDBCardText>
                                    Regime: <MDBCardText>{this.props.detalhesEstudante.turma.grade.escolaCurso.regime.descricao !== null ? this.props.detalhesEstudante.turma.grade.escolaCurso.regime.descricao : '*Não Consta*'}</MDBCardText>
                                </MDBCardText>
                            </MDBCol>

                            <MDBCol>
                                <MDBCardText>
                                    Turno: <MDBCardText>{this.props.detalhesEstudante.turma.turno.descricao !== null ? this.props.detalhesEstudante.turma.turno.descricao : '*Não Consta*'}</MDBCardText>
                                </MDBCardText>
                            </MDBCol>

                            <MDBCol>
                                <MDBCardText>
                                    Nº Chamada: <MDBCardText>{this.props.detalhesEstudante.numeroChamada !== null ? this.props.detalhesEstudante.numeroChamada : '*Não Consta*'}</MDBCardText>
                                </MDBCardText>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </MDBRow>
        );
    }
}
