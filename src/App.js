import React from 'react';
import './App.css';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import { withCookies } from 'react-cookie';

import Rotas from './Rotas';

function App(props) {
  let { cookies } = props;
  let token = cookies.get('token');
  
  return (
    <div className="App">
      {token ? <Rotas.rotasAcesso/> : <Rotas.rotasLogin/>}
    </div>
  );
}

export default withCookies(App);
