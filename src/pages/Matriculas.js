import React from 'react';
import '../App.css';

import { withCookies } from 'react-cookie';
import { withRouter, Link } from "react-router-dom";

import { URL_API_MATRICULAS } from '../Config';
import axios from 'axios';

import { MDBContainer, MDBDataTable, MDBIcon, MDBTooltip } from 'mdbreact';

class Matriculas extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            dados: [],
            dadosTabela: [],
            loading: true,
        }
        this.mostrarTurmas = this.mostrarTurmas.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidMount(){
        if(this.props.location.state === undefined){
            let {cookies} = this.props;
            let token = cookies.get("token"); 
            
            let headers = {
                "Content-Type": "application/json",
                "Authorization": token,
                "CLIENTE": "2000000",
                "SISTEMA": "20",
                "MODULO": "201",
                "ANO_LETIVO": "2000546",
                "UNIDADE": "2004730",
            }

            axios.get(URL_API_MATRICULAS,  { headers })
            .then(
                res => {
                    let dados = res.data.content;
                    this.setState({dados, loading: false});
                    this.mostrarTurmas();
                },
                err => {
                this.setState({loading: false});
                console.log(err);
                }
            );
        }else{
            this.setState({loading: false});
            this.mostrarTurmas();
        }
        
    }

    logout(){
        let {cookies} = this.props;
        cookies.remove("token");
    }

    mostrarTurmas(){
        let estudantes = this.props.location.state ? this.props.location.state.estudantes : this.state.dados;
        
        let rowTabela = [];

        if(estudantes !== undefined){
            estudantes.forEach((estudante) => {
                let dadosEstudante = {
                    nome: estudante.aluno.nome,
                    turma: estudante.turma.nome,
                    situacao: estudante.situacaoAluno.descricao,
                    matricula: estudante.situacaoMatricula.descricao,
                    detalhes: (
                      <Link to={{pathname: '/detalhes', state: {detalhesEstudante: estudante, listaEstudantes: estudantes} }} className="text-center">
                            <MDBTooltip domElement tag="span" placement="top">
                                <span className="btnVisualizar"> <MDBIcon size="lg" className="cyan-text pr-3" far icon="eye"/> </span>
                                <span>Visualizar</span>
                            </MDBTooltip>
                      </Link>  
                    ),
                }
                rowTabela.push(dadosEstudante);
            });
        }

        let dadosTabela = {
            columns: [
            {
                label: 'Nome',
                field: 'nome',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Turma',
                field: 'turma',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Situação',
                field: 'situacao',
                sort: 'asc',
                width: 200
              },
              {
                label: 'Matricula',
                field: 'matricula',
                sort: 'asc',
                width: 100
              },
              {
                label: 'Detalhes',
                field: 'detalhes',
                sort: 'asc',
                width: 100
              },
            ],
            rows: rowTabela,
        }

        this.setState({dadosTabela});
    }

    render(){

        if(this.state.loading) return  <MDBContainer className="centralizarItens"><div className="spinner-border text-danger" role="status"/></MDBContainer>

        return (
            <MDBContainer>
                <Link className="iconLogout" onClick={() => this.logout()} to="/">
                    <MDBTooltip domElement tag="span" placement="top">
                        <span><MDBIcon className="white-text pr-3" fas icon="sign-out-alt" size="2x"/></span>
                        <span>Sair</span>
                    </MDBTooltip>
                </Link>

                <MDBDataTable
                    striped
                    bordered
                    borderless
                    hover
                    scrollX
                    noBottomColumns
                    data={this.state.dadosTabela}
                    theadColor="white"
                    tbodyColor="white"
                    entriesLabel="Quantidade por página"
                    infoLabel={["Mostrando", "até", "de", "matrículas"]}
                    noRecordsFoundLabel="Nenhuma matrícula encontrada"
                    paginationLabel={["Anterior", "Próximo"]}
                    searchLabel="Pesquisar"
                />
            </MDBContainer>
        );
    }
}

export default withCookies(withRouter(Matriculas));
