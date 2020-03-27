import React from 'react';
import '../App.css';

import CardInformacoesPessoais from './components/CardInformacoesPessoais';
import CardObservacoes from './components/CardObservacoes';
import CardMatricula from './components/CardMatricula';

import { withRouter, Link } from "react-router-dom";

import { MDBContainer, MDBTooltip, MDBIcon  } from 'mdbreact';

class Detalhes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            detalhesEstudante: [],
        }
    }

    componentDidMount(){
        this.setState({detalhesEstudante: this.props.location.state.detalhesEstudante}); 
    }

    render(){
        if( this.state.detalhesEstudante.id !== undefined ){
            return (
                <MDBContainer>
                    <Link className="marginArrowBack" to={{pathname: '/', state: {estudantes: this.props.location.state.listaEstudantes} }}>
                        <MDBTooltip domElement tag="span" placement="top">
                            <span><MDBIcon className="white-text pr-3" fas icon="arrow-left" size="2x"/></span>
                            <span>Voltar</span>
                        </MDBTooltip>
                    </Link>

                    <CardInformacoesPessoais detalhesEstudante={this.state.detalhesEstudante}/>
                    <CardObservacoes detalhesEstudante={this.state.detalhesEstudante}/>
                    <CardMatricula detalhesEstudante={this.state.detalhesEstudante}/>
                </MDBContainer>
            );
        }

        return <MDBContainer className="centralizarItens"><div className="spinner-border text-danger" role="status"/></MDBContainer>
    }
}

export default withRouter(Detalhes);
