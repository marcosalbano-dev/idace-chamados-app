import React from "react";
import LocalStorageService from "../app/service/localstorageService";

 import UsuarioService from "../app/service/usuarioService";
// import { AuthContext } from "../main/provedorAutenticacao";

class Home extends React.Component {

    state = {
        totalLancamentos: 0
    }

    constructor() {
        super();
        this.usuarioService = new UsuarioService();
    }

    componentDidMount(){
        const usuarioLogado = LocalStorageService.obterItem('_usuario_logado')
        this.usuarioService
            .obterTotalLancamentosPorUsuario(usuarioLogado.id)
            .then( response => {
                this.setState({totalLancamentos: response.data})
            }).catch( error => {
                console.log(error.response)
            })
    }

    render() {
        return (
            
            <div className="jumbotron" style={{ padding: '30px', backgroundColor: '#f8f8f8', borderRadius: '10px', border: '1px solid #dee2e6' }}>
                
                <h1 className="display-3">Bem vindo!</h1>
                <p className="lead">Esse é o Sistema de Chamados do IDACE.</p>
                <p className="lead">O seu total de Chamados para o mês atual é de: {this.state.totalLancamentos}</p>
                <hr className="my-4" />
                <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg"
                        href="/cadastro-usuarios" 
                        role="button">
                        <i className="pi pi-users"></i> Cadastrar Usuário</a>&nbsp;
                    <a className="btn btn-warning btn-lg"
                        href="/cadastro-lancamentos" 
                        role="button">
                        <i className="pi pi-money-bill"></i> Cadastrar Chamado</a>
                </p>
            </div>
        )
    }
}

// Home.contextType = AuthContext;

export default Home