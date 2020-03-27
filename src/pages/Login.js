import React from 'react';
import '../App.css';

import ModalInfo from '../modals/ModalInfo';

import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBRow, MDBInput, MDBContainer } from 'mdbreact';

import { withCookies } from 'react-cookie';
import { Redirect, withRouter } from "react-router-dom";

import { mascaraCPF } from './components/mascaraCPF';

import { URL_API_LOGIN } from '../Config';
import axios from 'axios';

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            cpf: '',
            mensagemModal: '',
            logado: false,
        }

        this.handleChangeCPF = this.handleChangeCPF.bind(this);
        this.fazerLogin = this.fazerLogin.bind(this);
        this.alterarExibicaoModal = this.alterarExibicaoModal.bind(this);
    }

    fazerLogin(e){
        e.preventDefault();
    
        let login = e.target.cpf.value;
        let senha = e.target.senha.value;
    
        let dadosLogin = {
            login,
            senha,
            invalidarSessoesAtivas: true,
        }
    
        axios.post(URL_API_LOGIN, dadosLogin)
        .then(
          res => {
              let dados = res.data.data;
              let token = dados.token;

              let { cookies } = this.props;
              cookies.set('token', token);

              this.setState({logado: true})
          },
          _err => {
            this.setState({mensagemModal: "O CPF ou a senha informados estão incorretos. Verifique os dados digitados e tente entrar novamente."});
          }
        )
    }

    alterarExibicaoModal(){
        this.setState({mensagemModal: ''});
    }

    handleChangeCPF(e){
        this.setState({cpf: mascaraCPF(e.target.value)});
    }

    render(){
        if(this.state.logado) return <Redirect to='/' push/>;

        return (
            <MDBContainer className="centralizarItens">
                <MDBRow className="tamCard">
                    <MDBCard className="card">
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg" style={{ width: '100%' }}  waves />
                        <MDBCardBody className="#e3f2fd blue lighten-5">
                            <MDBCardTitle className="text-center">Login</MDBCardTitle>
            
                            <form method="post" onSubmit={(event) => this.fazerLogin(event)}>
                                <div className="blue-text">
                                <MDBInput name="cpf" label="CPF" icon="address-card" group type="text" validate error="wrong" success="right" maxLength='14' value={this.state.cpf} onChange={(event) => this.handleChangeCPF(event)}/>
                                    <MDBInput name="senha" label="Senha" icon="lock" group type="password" validate />
                                </div>
                                <div className="text-center">
                                    <MDBBtn type="submit">Login</MDBBtn>
                                </div>
                            </form>
                            
                        </MDBCardBody>
                    </MDBCard>
                </MDBRow>
                <ModalInfo visivel={this.state.mensagemModal > ''} alternar={this.alterarExibicaoModal} mensagem={this.state.mensagemModal}/>
            </MDBContainer>
        );
    }
}

export default withCookies(withRouter(Login));
