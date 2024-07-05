import Link from "next/link";
import React from "react";
import {Metadata} from "next";
import ReceitaLista from "@/components/receitas/receita-lista";
import getReceitas from "@/actions/receitas/get-receitas";

export const metadata: Metadata = {
    title: "Contas a receber",
    description: "Pagina  de listagem de contas a receber",
}


export default async function ContasPagarPage() {
    const {data: receitas} = await getReceitas();

    return (
        <div className="p-2 mt-4">
            <div className="d-flex justify-content-between mb-3">
                <h3>
                    <i className="bi bi-cash-coin h3"> </i>
                    Contas a Receber
                </h3>
                <Link href="/sgme/financeiro/contas-a-receber/novo" className="btn btn-success">
                    <i className="bi bi-plus text-white"> </i>
                    Adicionar receita</Link>
            </div>
            <div className="bg-primary p-2 d-flex flex-row rounded-top-2">
                <i className="h5 bi bi-gear text-white"> <span className="text-white"> Opções</span> </i>
            </div>

            <ReceitaLista receitas={receitas}/>

        </div>
    )
}