'use client';
import {Despesa} from "@/types/despesas";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {format, parseISO} from "date-fns";
import {ptBR} from "date-fns/locale";
import ModalExcluirDespesa from "@/components/despesas/modalExcluirDespesa";
import FiltroFinanceiro from "@/components/shared/filtro-financeiro";

type Props = {
    despesas?: Despesa[] | null;
}
export default function DespesaLista({despesas}: Props) {

    const [search, setSearch] = useState("");
    const [filteredDespesas, setFilteredDespesas] = useState(despesas);
    const [statusHidden, setStatusHidden] = useState<boolean>(true);

    useEffect(() => {
        if (!despesas) {
            setFilteredDespesas([]);
            return;
        }

        const newFilteredProdutos = despesas?.filter(despesa => {

            return despesa.data_vencimento.includes(search)
        });
        setFilteredDespesas(newFilteredProdutos);
    }, [search, despesas]);

    return (
        <>
            <FiltroFinanceiro onSearchChange={setSearch}  mPlaceholder="Filtre por data de venciemento" />
            <table className="table table-borderless mt-3">
                <thead>
                <tr>
                    <th scope="col" style={{minWidth: 100}}>Codigo</th>
                    <th scope="col" className="w-100">Fornecedor</th>
                    <th scope="col" className="w-100">Valor</th>
                    <th scope="col" className="w-100" style={{minWidth: 160}}>Forma Pagamento</th>
                    <th scope="col" className="w-100" style={{minWidth: 150}}>Data Vencimento</th>
                    <th scope="col" className="w-100">Status</th>
                    <th scope="col" className="w-100">Editar</th>
                    <th scope="col" className="w-100">Excluir</th>
                </tr>
                </thead>
                <tbody>
                {filteredDespesas && filteredDespesas.length > 0 ? (
                    filteredDespesas?.map((despesa: Despesa, index: number) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{despesa.nome}</td>
                            <td>{despesa.valor.toLocaleString('pt-br', {
                                style: 'currency',
                                currency: 'BRL'
                            })}</td>
                            <td>{despesa.forma_pagamento}</td>
                            <td>{format(parseISO(despesa.data_vencimento),
                                'dd/MM/yyyy', {locale: ptBR})}
                            </td>
                            <td>{despesa.status.toLowerCase()}</td>
                            <td>
                                <Link href={`/sgme/financeiro/contas-a-pagar/${despesa.id}`}
                                      className="btn btn-success"> <i
                                    className="bi bi-pencil-square text-white">
                                </i></Link>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={(event) => {
                                    event.preventDefault();
                                    setStatusHidden(false);
                                }}><i className="bi bi-trash text-white">
                                </i></button>
                            </td>

                            <ModalExcluirDespesa id={despesa.id}
                                                 statusHidden={statusHidden}
                                                 setStatusHidden={setStatusHidden}/>

                        </tr>


                    ))
                ) : (
                    <tr>
                        <td colSpan={6} className="text-center">
                            <Image src="/img/dado_nao_encontrado.svg" alt="Not Found" width={350} height={350}
                                   priority={false}/>
                            <h3>Nenhuma despesa encontrada!</h3>

                        </td>
                    </tr>
                )}

                </tbody>
            </table>

        </>

    )
}