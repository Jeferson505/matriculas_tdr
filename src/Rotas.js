import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Login from './pages/Login';
import Matriculas from './pages/Matriculas';
import Detalhes from './pages/Detalhes';

let rotasAcesso = () => (
  <Router>
      <Route exact path="/">
        <Matriculas/>
      </Route>
      <Route path="/detalhes">
        <Detalhes />
      </Route>
    </Router>
);

let rotasLogin = () => (
  <Router>
      <Route path="/">
        <Login/>
      </Route>
    </Router>
);

export default {
  rotasAcesso,
  rotasLogin,
}
