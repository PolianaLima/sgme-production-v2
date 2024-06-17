'use client';
import {Despesa} from "@/types/despesas";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {format, parseISO} from "date-fns";
import {ptBR} from "date-fns/locale";

type Props = {
    despesas?: Despesa[] | null;
}
export default function DespesaLista({despesas}: Props) {
    return (
        <div className='mt-3'>
            <table className="table table-borderless">
                <thead>
                <tr>
                    <th scope="col" style={{minWidth: 100}}>Codigo</th>
                    <th scope="col" className="w-100">Fornecedor</th>
                    <th scope="col" className="w-100">Valor</th>
                    <th scope="col" className="w-100" style={{minWidth: 150}}>Data Vencimento</th>
                    <th scope="col" className="w-100">Status</th>
                    <th scope="col" style={{minWidth: 100}}>Editar</th>
                </tr>
                </thead>
                <tbody>
                {despesas && despesas.length > 0 ? (
                    despesas?.map((despesa: Despesa, index: number) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{despesa.nome}</td>
                            <td>{despesa.valor.toLocaleString('pt-br', {
                                style: 'currency',
                                currency: 'BRL'
                            })}</td>
                            <td>{format(parseISO(despesa.data_vencimento),
                                'dd/MM/yyyy', {locale: ptBR})}
                            </td>
                            <td>{despesa.status.toLowerCase()}</td>
                            <td>
                                <Link href={`/sgme/financeiro/contas-a-pagar/${despesa.id}`} className="btn btn-success"> <i
                                    className="bi bi-pencil-square text-white">

                                </i></Link>
                            </td>

                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={6} className="text-center">
                            <Image src="/img/dado_nao_encontrado.svg" alt="Not Found" width={350} height={350}
                                   priority={false}/>
                            <h3>Você nao tem produtos cadastrado no sistema</h3>
                            <Link href="/sgme/cadastro/produto/novo" className="btn btn-primary">Adicione seu primeiro
                                produto aqui</Link>
                        </td>
                    </tr>
                )}

                </tbody>
            </table>
        </div>
    )
}