import React from "react";
import Image from "next/image";
import AdicionarReceitaForm from "@/components/receitas/adicionar-receita-form";
import getClientes from "@/actions/clientes/get-clientes";

export default async function NovaDespesapage(){
    const {data:clientes} =await getClientes();
    return(
        <div className="m-5 border border-1 border-secondary-subtle mt-3">
            <h3 className="bg-secondary-subtle p-2">
                <i className="h3 bi bi-cash-coin"> </i>
                Contas a receber
            </h3>
            <div className="d-sm-flex justify-content-between w-100">
                <AdicionarReceitaForm clientes={clientes} />

                <div className="w-100 d-flex justify-content-center">
                    <Image src="/img/icone_contas_receber.svg"
                           alt="Index de Cliente"
                           width={400}
                           height={400}
                           priority={true}
                           sizes="100vw"
                    />
                </div>
            </div>
        </div>
    )
}