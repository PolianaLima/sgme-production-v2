import {Metadata} from "next";
import Image from "next/image";
import React from "react";
import {ReceitaId} from "@/types/receitas";
import UpdateReceitaForm from "@/components/receitas/update-receita-form";
import getReceitaId from "@/actions/receitas/get-receita-id";

type Props = {
    params: {
        idReceita: ReceitaId
    }

}
export const metadata: Metadata = {
    title: "Alteração de Receitas",
    description: "Pagina  de alteração de receitas no sistema",
}


export default async function UpdateReceitaPage({params}:Props){
    const {idReceita} = params;
    const {data:receita} = await getReceitaId(idReceita as unknown as ReceitaId);
    return (
        <div className="m-5 border border-1 border-secondary-subtle mt-3">
            <h3 className="bg-secondary-subtle p-2">
                <i className="h3 bi bi-box"> </i>
                Editar Receita
            </h3>

            <div className="d-sm-flex justify-content-between w-100">
                <UpdateReceitaForm receita={receita}/>

                <div className="w-100 d-flex justify-content-center">
                    <Image src="/img/icone_contas_receber.svg"
                           alt="Index de Cliente"
                           width={450}
                           height={450}
                           priority={true}
                           sizes="100vw"
                    />
                </div>
            </div>
        </div>
    )
}