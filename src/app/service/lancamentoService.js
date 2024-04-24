import ApiService from "../apiservice";
import ErroValidacao from "../exception/ErroValidacao";

export default class LancamentoService extends ApiService {

    constructor() {
        super('api/lancamentos')
    }

    obterListaMeses() {
        return [
            { label: 'Selecione...', value: '' },
            { label: 'Janeiro', value: 1 },
            { label: 'Fevereiro', value: 2 },
            { label: 'Março', value: 3 },
            { label: 'Abril', value: 4 },
            { label: 'Maio', value: 5 },
            { label: 'Junho', value: 6 },
            { label: 'Julho', value: 7 },
            { label: 'Agosto', value: 8 },
            { label: 'Setembro', value: 9 },
            { label: 'Outubro', value: 10 },
            { label: 'Novembro', value: 11 },
            { label: 'Dezembro', value: 12 },
        ]
    }

    obterListaTipos() {
        return [
            { label: 'Selecione...', value: '' },
            { label: 'Chamado para o SIGA', value: 'SERVIÇO NO SIGA' },
            { label: 'Chamado para o TITULA', value: 'SERVIÇO NO TITULA' },
            { label: 'Chamado para o SERVIÇO DE EMAIL', value: 'SERVIÇO DE EMAIL' },
            { label: 'Chamado para o SERVIÇO DE REDE', value: 'SERVIÇO DE REDE' },
            { label: 'Chamado para RELATÓRIOS GERENCIAIS', value: 'RELATÓRIOS GERENCIAIS' },
            { label: 'Chamado para MANUTENÇÃO E SUPORTE', value: 'MANUTENÇÃO E SUPORTE' },
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

    obterPorId(id) {
        return this.get(`/${id}`);
    }

    alterarStatus(id, status){
        return this.put(`/${id}/atualiza-status`, { status })
    }

    validar(lancamento) {
        const erros = [];

        if (!lancamento.ano) {
            erros.push("Informe o ano")
        }
        if (!lancamento.mes) {
            erros.push("Informe o mês")
        }
        if (!lancamento.descricao) {
            erros.push("Informe a descrição")
        }
        if (!lancamento.setor) {
            erros.push("Informe o setor")
        }
        if (!lancamento.tipo) {
            erros.push("Informe o tipo")
        }
        if (!lancamento.data_cadastro) {
            erros.push("Informe a da ta do cadastro")
        }

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

        if (lancamentoFiltro.mes) {
            params = `${params}&mes=${lancamentoFiltro.mes}`
        }

        if (lancamentoFiltro.tipo) {
            params = `${params}&tipo=${lancamentoFiltro.tipo}`
        }

        if (lancamentoFiltro.status) {
            params = `${params}&status=${lancamentoFiltro.status}`
        }
        
        if (lancamentoFiltro.usuario) {
            params = `${params}&usuario=${lancamentoFiltro.usuario}`
        }

        if (lancamentoFiltro.descricao) {
            params = `${params}&descricao=${lancamentoFiltro.descricao}`
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