import getDespesas from "@/actions/despesas/get-despesas";
import Link from "next/link";
import React from "react";
import {Metadata} from "next";
import DespesaLista from "@/components/despesas/despesa-lista";

export const metadata: Metadata = {
    title: "Contas a pagar",
    description: "Pagina  de listagem de contas a pagar",
}


export default async function ContasPagarPage() {
    const {data: despesas} = await getDespesas();

    return (
        <div className="p-2 mt-4">
            <div className="d-flex justify-content-between mb-3">
                <h3>
                    <i className="bi bi-cash-coin h3"> </i>
                    Contas a Pagar
                </h3>
                <Link href="/sgme/financeiro/contas-a-pagar/novo" className="btn btn-success">
                    <i className="bi bi-plus text-white"> </i>
                    Adicionar Despesa</Link>
            </div>
            <div className="bg-primary p-2 d-flex flex-row rounded-top-2">
                <i className="h5 bi bi-gear text-white"> <span className="text-white"> Opções</span> </i>
            </div>

            <DespesaLista despesas={despesas}/>

        </div>
    )
}