'use client';
import React, {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {format, parseISO} from "date-fns";
import {ptBR} from "date-fns/locale";
import ModalExcluirReceita from "@/components/receitas/modalExcluirReceita";
import {Receita} from "@/types/receitas";
import FiltroReceitas from "@/components/receitas/filtro-receitas";

type Props = {
    receitas?: Receita[] | null;
}
export default function ReceitaLista({receitas}: Props) {

    const [search, setSearch] = useState("");
    const [filteredReceitas, setFilteredReceitas] = useState(receitas);

    const [statusHidden, setStatusHidden] = useState<boolean>(true);

    useEffect(() => {
        if (!receitas) {
            setFilteredReceitas([]);
            return;
        }

        const newFilteredProdutos = receitas?.filter(receita => {

            return receita.data_vencimento.includes(search)
        });
        setFilteredReceitas(newFilteredProdutos);
    }, [search, receitas]);


    return (
        <div className="mt-3">
            <FiltroReceitas onSearchChange={setSearch} mPlaceholder="Filtre por data de venciemento"/>
            <table className="table table-borderless mt-3">
                <thead>
                <tr>
                    <th scope="col" style={{minWidth: 100}}>Codigo</th>
                    <th scope="col" className="w-100">Cliente</th>
                    <th scope="col" className="w-100">Valor</th>
                    <th scope="col" className="w-100" style={{minWidth: 160}}>Forma Pagamento</th>
                    <th scope="col" className="w-100" style={{minWidth: 150}}>Data Vencimento</th>
                    <th scope="col" className="w-100">Status</th>
                    <th scope="col" className="w-100">Editar</th>
                    <th scope="col" className="w-100">Excluir</th>
                </tr>
                </thead>
                <tbody>
                {filteredReceitas && filteredReceitas.length > 0 ? (
                    filteredReceitas?.map((receita: Receita, index: number) => (
                        <>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{receita.nome}</td>
                                <td>{receita.valor.toLocaleString('pt-br', {
                                    style: 'currency',
                                    currency: 'BRL'
                                })}</td>
                                <td>{receita.forma_pagamento}</td>
                                <td>{format(parseISO(receita.data_vencimento),
                                    'dd/MM/yyyy', {locale: ptBR})}
                                </td>
                                <td>{receita.status.toLowerCase()}</td>
                                <td>
                                    <Link href={`/sgme/financeiro/contas-a-receber/${receita.id}`}
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

                            </tr>
                            <ModalExcluirReceita id={receita.id}
                                                 statusHidden={statusHidden}
                                                 setStatusHidden={setStatusHidden}/>
                        </>


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
        </div>

    )
}