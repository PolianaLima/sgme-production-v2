import {Metadata} from "next";
import Link from "next/link";
import React from "react";
import FornecedorLista from "@/components/fornecedores/fornecedores-lista";
import getFornecedores from "@/actions/fornecedores/get-fornecedores";

export const metadata: Metadata = {
    title: "Fornecedores",
    description: "Pagina  de listagem de fornecedores",
}
export default async function FornecedorPage() {

    const {data: fornecedores} = await getFornecedores();
    return (
        <div className="p-2 mt-4">
                <div className="d-flex justify-content-between mb-3">
                    <h3>
                        <i className="h3 bi bi-person-fill-add"> </i>
                        Fornecedores
                    </h3>
                    <Link href="/sgme/cadastro/fornecedor/novo" className="btn btn-success">
                        <i className="bi bi-plus text-white"> </i>
                        Novo Fornecedor</Link>
                </div>

                <div className="bg-primary p-2 d-flex flex-row rounded-top-2">
                    <i className="h5 bi bi-gear text-white"> <span className="text-white"> Opções</span> </i>
                </div>

            <FornecedorLista  fornecedores={fornecedores}/>
        </div>
    )
}