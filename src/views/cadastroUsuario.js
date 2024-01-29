import React from "react";
import Card from '../components/card'
import FormGroup from "../components/form-group";
import { withRouter } from 'react-router-dom'
import { mensagemErro, mensagemSucesso } from "../components/toastr";
import UsuarioService from "../app/service/usuarioService";

class CadastroUsuario extends React.Component {

    state = {
        nome: '',
        email: '',
        senha: '',
        senhaRepeticao: ''
    }

    constructor(){
        super();
        this.service = new UsuarioService();
    }

    validar(){
        const erros = []

        if(!this.state.nome){
            erros.push('O campo Nome é obrigatório')
        }

        if(!this.state.email){
            erros.push('O campo Email é obrigatório')
        } else if(!this.state.email.match(/^[a-z0-9]+@[a-z0-9]+\.[a-z]/)){
            erros.push('Informe um Email válido')
        }
        
        if(!this.state.senha || !this.state.senhaRepeticao){
            erros.push('Digite a senha 2x.')
        } else if(this.state.senha !== this.state.senhaRepeticao){
            erros.push('As senhas não batem.')
        }

        // if(erros && erros.length > 0){
        //     throw new ErroValidacao(erros);
        // }
    }



    cadastrar = () => {
        // const { nome, email, senha, senhaRepeticao } = this.state;
        // const usuario = { nome, email, senha, senhaRepeticao }
        const usuario = {
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha
        }

        try {
            this.service.validar(usuario)
        } catch (erro) {
            const msgs = erro.mensagens;
            msgs.forEach(msg => mensagemErro(msg));
            return false;
        }

        this.service.salvar(usuario)
            .then(response => {
                mensagemSucesso('Usuário cadastrado com sucesso! Faça o login para acessar o sistema.')
                this.props.history.push('/login')
            }).catch(error => {
                mensagemErro(error.response.data)
            })

    }

    cancelar = () => {
        this.props.history.push("/login")
    }

    render() {
        return (
            <Card title="Cadastro de Usuário">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <FormGroup label="Nome: *" htmlFor="inputNome">
                                <input type="text"
                                    id="inputNome"
                                    className="form-control"
                                    name="nome"
                                    onChange={e => this.setState({ nome: e.target.value })} />
                            </FormGroup>
                            <br />
                            <FormGroup label="Email: *" htmlFor="inputEmail">
                                <input type="text"
                                    id="inputEmail"
                                    className="form-control"
                                    name="email"
                                    onChange={e => this.setState({ email: e.target.value })} />
                            </FormGroup>
                            <br />
                            <FormGroup label="Senha: *" htmlFor="inputSenha">
                                <input type="password"
                                    id="inputSenha"
                                    className="form-control"
                                    name="senha"
                                    onChange={e => this.setState({ senha: e.target.value })} />
                            </FormGroup>
                            <br />
                            <FormGroup label="Repita a Senha: *" htmlFor="inputRepitaSenha">
                                <input type="password"
                                    id="inputRepitaSenha"
                                    className="form-control"
                                    name="senha"
                                    onChange={e => this.setState({ senhaRepeticao: e.target.value })} />
                            </FormGroup>
                            <br />
                            <button onClick={this.cadastrar}
                                type="button"
                                className="btn btn-success">
                                <i className="pi pi-save"></i>
                                Salvar</button>&nbsp;
                            <button onClick={this.cancelar}
                                type="button"
                                className="btn btn-danger">
                                <i className="pi pi-times"></i>
                                Cancelar</button>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

// Login.contextType = AuthContext;

export default withRouter(CadastroUsuario)