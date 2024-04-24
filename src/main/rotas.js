import React from "react";
import Login from "../views/login";
import CadastroUsuario from "../views/cadastroUsuario";
import LandingPage from '../views/landingPage';

import {  Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from "../views/home";
import ConsultaLancamentos from "../views/lancamentos/consulta-lancamentos";
import CadastroLancamentos from "../views/lancamentos/cadastro-lancamentos";

function Rotas() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/cadastro-usuarios" component={CadastroUsuario} />
                <Route exact path="/consulta-lancamentos" component={ConsultaLancamentos} />
                <Route exact path="/cadastro-lancamentos" component={CadastroLancamentos} />
            </Switch>
        </BrowserRouter>
    )
}

export default Rotas;
