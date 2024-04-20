import ApiService from "../apiservice";
import ErroValidacao from "../exception/ErroValidacao";

class UsuarioService extends ApiService{

    constructor(){
        super('/api/usuarios')
    }

    autenticar(credenciais){
        return this.post('/autenticar', credenciais)
    }

    obterTotalLancamentosPorUsuario(id){
        return this.get(`/${id}/lancamentos-atendidos`)
    }

    salvar(usuario){
        return this.post('/', usuario)
    }

    validar(usuario){
        const erros = []

        if(!usuario.nome){
            erros.push('O campo Nome é obrigatório')
        }

        if(!usuario.email){
            erros.push('O campo Email é obrigatório')
        } else if (!this.state.email.match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/i)){
            erros.push('Informe um Email válido')
        }
        
        if(!usuario.senha || !usuario.senhaRepeticao){
            erros.push('Digite a senha 2x.')
        } else if(usuario.senha !== usuario.senhaRepeticao){
            erros.push('As senhas não batem.')
        }

        if(erros && erros.length > 0){
            throw new ErroValidacao(erros);
        }
    }
}

export default UsuarioService