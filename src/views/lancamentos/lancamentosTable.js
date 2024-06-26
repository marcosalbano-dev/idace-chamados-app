﻿import React from 'react'
// import currencyFormatter from 'currency-formatter'
import 'primeicons/primeicons.css';
import consultaLancamentos from './consulta-lancamentos';

export default props => {

    const rows = props.lancamentos.map(lancamento => {
        return (
            <tr key={lancamento.id}>
                <td>{lancamento.usuario.nome}</td>
                <td>{lancamento.setor}</td>
                <td>{lancamento.descricao}</td>
                {/* <td>{currencyFormatter.format(lancamento.valor, { locale: 'pt-BR' })}</td> */}
                <td>{lancamento.tipo}</td>
                <td>{lancamento.mes}</td>
                <td>{lancamento.status}</td>
                <td>
                    {/* <button className="btn btn-success" title="Efetivar"
                        disabled={ lancamento.status !== 'PENDENTE'}
                        onClick={e => props.alterarStatus(lancamento, 'EFETIVADO')}
                        type="button">
                        <i className="pi pi-check"></i>
                    </button> */}
                    {/* <button className="btn btn-warning" title="Cancelar"
                        disabled={ lancamento.status !== 'PENDENTE'}
                        onClick={e => props.alterarStatus(lancamento, 'CANCELADO')}
                        type="button">
                        <i className="pi pi-times"></i>
                    </button> */}
                    <button type="button" title="Editar"
                        className="btn btn-primary"
                        onClick={e => props.editarLancamento(lancamento.id)}>
                        <i className="pi pi-pencil"></i>
                    </button>
                    <button type="button" title="Excluir"
                        className="btn btn-danger"
                        onClick={e => props.deletarLancamento(lancamento)}>
                        <i className="pi pi-trash"></i>
                    </button>
                </td>
            </tr>
        )
    })

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Técnico</th>
                    <th scope="col">Setor</th>
                    <th scope="col">Descrição</th>
                    {/* <th scope="col">Valor</th> */}
                    <th scope="col">Tipo</th>
                    <th scope="col">Mês</th>
                    <th scope="col">Situação</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}