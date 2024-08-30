import ApiService from "../apiservice";
import ErroValidacao from "../exception/ErroValidacao";

export default class LancamentoService extends ApiService {

    constructor() {
        super('api/lancamentos')
    }

    obterListaMeses() {
        return [
            { label: 'Selecione...', value: '' },
            { label: 'Janeiro', value: 'Janeiro' },
            { label: 'Fevereiro', value: 'Fevereiro' },
            { label: 'Março', value: 'Março' },
            { label: 'Abril', value: 'Abril' },
            { label: 'Maio', value: 'Maio' },
            { label: 'Junho', value: 'Junho' },
            { label: 'Julho', value: 'Julho' },
            { label: 'Agosto', value: 'Agosto' },
            { label: 'Setembro', value: 'Setembro' },
            { label: 'Outubro', value: 'Outubro' },
            { label: 'Novembro', value: 'Novembro' },
            { label: 'Dezembro', value: 'Dezembro' },
        ]
    }

    obterListaTipos() {
        return [
            { label: 'Selecione...', value: '' },
            { label: 'Chamado para o SIGA', value: 'SIGA' },
            { label: 'Chamado para o TITULA', value: 'TITULA' },
            { label: 'Chamado para o SERVIÇO DE EMAIL', value: 'EMAIL' },
            { label: 'Chamado para o SERVIÇO DE REDE', value: 'REDE' },
            { label: 'Chamado para RELATÓRIOS GERENCIAIS', value: 'RELATORIOS' },
            { label: 'Chamado para MANUTENÇÃO E SUPORTE', value: 'SUPORTE' },
            { label: 'Chamado para SERVIÇO DA EMPRESA TOPODATUM', value: 'TOPODATUM' }
        ]
    }

    obterListaSetores() {
        return [
            { label: 'Selecione...', value: '' },
            { label: 'ADINS - Assesoria de Desenvolvimento Institucional', value: 'ADINS' },
            { label: 'ASSEJUR - Assessoria Jurídica', value: 'ASSEJUR' },
            { label: 'DIAF - Diretoria Administrativo-Financeira', value: 'DIAF' },
            { label: 'DITEO - Diretoria Técnica e de Operações', value: 'DITEO' },
            { label: 'GEAD - Gerência de Administração', value: 'GEAD' },
            { label: 'GEDEF - Gerência de Desenvolvimento Fundiário', value: 'GEDEF' },
            { label: 'GEGEF - Gerência de Gestão Fundiária', value: 'GEGEF' },
            { label: 'GEGEO - Gerência de Cartografia, Geoprocessamento e Diagnóstico Fundiário', value: 'GEGEO' },
            { label: 'NECAF - Núcleo Estudos, Cadastro e Levantamento Fundiário', value: 'NECAF' },
            { label: 'NUART - Núcleo de Apoio a Assentamentos, Reassentamentos Rurais e Acesso a Terra', value: 'NUART' },
            { label: 'NUPAF - Núcleo de Titulação e Patrimônio Fundiário', value: 'NUPAF' },
            { label: 'NUGEP - Núcleo de Gestão de Pessoas', value: 'NUGEP' },
            { label: 'OUVID - Ouvidoria', value: 'OUVID' },
            { label: 'SUPER - Superintendência', value: 'SUPER' },
            { label: 'SUPAD - Superintendência Adjunta', value: 'SUPAD' },
            { label: 'UNITI - Unidade de Tecnologia da Informação', value: 'UNITI' }

        ]
    }

    obterListaStatus() {
        return [
            { label: 'Selecione...', value: '' },
            { label: 'ABERTO', value: 'ABERTO' },
            { label: 'PROGRESSO', value: 'PROGRESSO' },
            { label: 'ATENDIDO', value: 'ATENDIDO' }
        ]
    }

    obterPorId(id) {
        return this.get(`/${id}`);
    }

    alterarStatus(id, status){
        return this.put(`/${id}/atualiza-status`, { status })
    }

   
    validar(lancamento) {
        const erros = [];

        if (!lancamento.descricao) {
            erros.push("Informe a descrição")
        }

        if (!lancamento.mes) {
            erros.push("Informe o mês")
        }

        if (!lancamento.ano) {
            erros.push("Informe o ano")
        }
        
        if (!lancamento.setor) {
            erros.push("Informe o setor")
        }

        if (!lancamento.tipo) {
            erros.push("Informe o tipo")
        }
        // if (!lancamento.data_cadastro) {
        //     erros.push("Informe a data do cadastro")
        // }

        if (erros && erros.length > 0) {
            throw new ErroValidacao(erros);
        }
    }

    salvar(lancamento) {
        return this.post('/', lancamento);
    }

    atualizar(lancamento) {
        return this.put(`/${lancamento.id}`, lancamento)
    }

    consultar(lancamentoFiltro) {
        let params = `?ano=${lancamentoFiltro.ano}`

        if (lancamentoFiltro.descricao) {
            params = `${params}&descricao=${lancamentoFiltro.descricao}`
        }

        if (lancamentoFiltro.mes) {
            params = `${params}&mes=${lancamentoFiltro.mes}`
        }

        if (lancamentoFiltro.tipo) {
            params = `${params}&tipo=${lancamentoFiltro.tipo}`
        }

        // if (lancamentoFiltro.status) {
        //     params = `${params}&status=${lancamentoFiltro.status}`
        // }
        
        if (lancamentoFiltro.usuario) {
            params = `${params}&usuario=${lancamentoFiltro.usuario}`
        }

        if (lancamentoFiltro.setor) {
            params = `${params}&setor=${lancamentoFiltro.setor}`
        }

        return this.get(params)
    }

    deletar(id) {
        return this.delete(`/${id}`)
    }
}