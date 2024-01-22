import React from "react";
import Login from "../views/login";
import CadastroUsuario from "../views/cadastroUsuario";

import {  Route, Switch, BrowserRouter } from 'react-router-dom';

function Rotas() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/cadastro-usuarios" component={CadastroUsuario} />
            </Switch>
        </BrowserRouter>
    )
}

export default Rotas;
