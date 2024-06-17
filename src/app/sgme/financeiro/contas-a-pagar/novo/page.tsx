import React from "react";
import Image from "next/image";
import AdicionarDespesaForm from "@/components/despesas/adicionar-despesa-form";
import getFornecedores from "@/actions/fornecedores/get-fornecedores";

export default async function NovaDespesapage(){
    const {data:fornecedores} =await getFornecedores();
    console.log("Fornecedores",fornecedores)
    return(
        <div className="m-5 border border-1 border-secondary-subtle mt-3">
            <h3 className="bg-secondary-subtle p-2">
                <i className="h3 bi bi-cash-coin"> </i>
                Contas a pagar
            </h3>
            <div className="d-sm-flex justify-content-between w-100">
                <AdicionarDespesaForm fornecedores={fornecedores} />

                <div className="w-100 d-flex justify-content-center">
                    <Image src="/img/icone_contas_pagar.svg"
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