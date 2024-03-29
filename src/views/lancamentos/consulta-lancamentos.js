import React from "react"
import { withRouter } from 'react-router-dom'
import Card from "../../components/card"
import FormGroup from "../../components/form-group"
import SelectMenu from "../../components/selectMenu"
import LancamentosTable from '../lancamentosTable'




class ConsultaLancamentos extends React.Component {

    state = {
        ano: '',
        mes: '',
        tipo: '',
        descricao: '',
        showConfirmDialog: false,
        lancamentoDeletar: {},
        lancamentos: []
    }

    render() {

        const meses = [
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

        const tipos = [
            { label: 'Selecione...', value: '' },
            { label: 'Desenvolvimento', value: 'DESENVOLVIMENTO' },
            { label: 'Rede', value: 'REDE' },
            { label: 'Suporte', value: 'SUPORTE' }
        ]

        return (
            <Card title="Consulta Chamados">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="bs-component">
                            <FormGroup label="Ano: *" htmlFor="inputAno">
                                <input type="text"
                                    className="form-control"
                                    id="inputAno"
                                    value={this.state.ano}
                                    onChange={e => this.setState({ ano: e.target.value })}
                                    placeholder="Digite o Ano" />
                            </FormGroup>
                            <br />
                            <FormGroup htmlFor="inputMes" label="Mês: ">
                                <SelectMenu id="inputMes"
                                    className='form-control'
                                    value={this.state.mes}
                                    onChange={e => this.setState({ mes: e.target.value })}
                                    lista={meses} />
                            </FormGroup>
                            <br />
                            <FormGroup label="Descrição:" htmlFor="inputDescricao">
                                <input type="text"
                                    className="form-control"
                                    id="inputDescricao"
                                    value={this.state.descricao}
                                    onChange={e => this.setState({ descricao: e.target.value })}
                                    placeholder="Digite a Descrição" />
                            </FormGroup>
                            <br />
                            <FormGroup htmlFor="inputTipo" label="Tipo de Chamado: ">
                                <SelectMenu id="inputTipo"
                                    className='form-control'
                                    value={this.state.tipo}
                                    onChange={e => this.setState({ tipo: e.target.value })}
                                    lista={tipos} />
                            </FormGroup>
                            <br />
                            <button onClick={this.buscar}
                                type="button"
                                className="btn btn-success">
                                <i className="pi pi-search"></i> Buscar
                            </button>&nbsp;
                            <button onClick={this.preparaFormularioCadastro}
                                type="button"
                                className="btn btn-danger">
                                <i className="pi pi-plus"></i> Cadastrar
                            </button>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-component">
                            <LancamentosTable lancamentos={this.state.lancamentos}
                                // deletarLancamento={this.abrirConfirmacao}
                                // editarLancamento={this.editar} 
                                // alterarStatus={this.alterarStatus} />
                                />
                        </div>
                    </div>
                </div>
                {/* <div>
                    <Dialog header="Confirmação"
                        visible={this.state.showConfirmDialog}
                        style={{ width: '50vw' }}
                        footer={confirmDialogFooter}
                        modal={true}
                        onHide={() => this.setState({ showConfirmDialog: false })}>
                        <p className="m-0">
                            Confirma a exclusão desse Lançamento?
                        </p>
                    </Dialog>
                </div> */}
            </Card>
        )
    }
}

export default withRouter(ConsultaLancamentos);