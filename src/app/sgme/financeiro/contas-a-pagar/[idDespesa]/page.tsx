import {Metadata} from "next";
import {DespesaId} from "@/types/despesas";
import getDespesaId from "@/actions/despesas/get-despesa-id";
import Image from "next/image";
import React from "react";
import UpdateDespesaForm from "@/components/despesas/update-despesa-form";

type Props = {
    params: {
        idDespesa: DespesaId
    }

}
export const metadata: Metadata = {
    title: "Alteração de Despesas",
    description: "Pagina  de alteração de despesas no sistema",
}


export default async function UpdateDespesaPage({params}:Props){
    const {idDespesa} = params;
    const {data:despesa} = await getDespesaId(idDespesa as unknown as DespesaId);
    return (
        <div className="m-5 border border-1 border-secondary-subtle mt-3">
            <h3 className="bg-secondary-subtle p-2">
                <i className="h3 bi bi-box"> </i>
                Editar Despesa
            </h3>

            <div className="d-sm-flex justify-content-between w-100">
                <UpdateDespesaForm despesa={despesa}/>

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