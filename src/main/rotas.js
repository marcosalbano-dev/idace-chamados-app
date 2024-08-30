import React from "react";
import Login from "../views/login";
import Home from "../views/home";
import CadastroUsuario from "../views/cadastroUsuario";
import { AuthConsumer } from "./provedorAutenticacao";
import LandingPage from '../views/landingPage'

import {  Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import ConsultaLancamentos from "../views/lancamentos/consulta-lancamentos";
import CadastroLancamentos from "../views/lancamentos/cadastro-lancamentos";

function RotaAutenticada({ component: Component, isUsuarioAutenticado, ...props }) {
    return (
        <Route exact {...props} render={(componentProps) => {
            if (isUsuarioAutenticado) {
                return (
                    <Component {...componentProps} />
                )
            } else {
                return (
                    <Redirect to={{ pathname: '/login', state: { from: componentProps.location } }} />
                )
            }
        }} />
    )
}

function Rotas(props) {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/cadastro-usuarios" component={CadastroUsuario} />

            <RotaAutenticada isUsuarioAutenticado={props.isUsuarioAutenticado} path="/home" component={Home} />
            <RotaAutenticada isUsuarioAutenticado={props.isUsuarioAutenticado} path="/consulta-lancamentos" component={ConsultaLancamentos} />
            <RotaAutenticada isUsuarioAutenticado={props.isUsuarioAutenticado} path="/cadastro-lancamentos/:id?" component={CadastroLancamentos} />
        </Switch>
    </BrowserRouter>
    )
}

export default () => (
    <AuthConsumer>
        { (context) => (<Rotas isUsuarioAutenticado={context.isAutenticado} />) }
    </AuthConsumer>
)
