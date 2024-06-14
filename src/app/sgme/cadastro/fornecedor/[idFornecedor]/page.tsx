import {Metadata} from "next";
import React from "react";
import UpdateFornecedorForm from "@/components/fornecedores/update-fornecedor-form";
import Image from "next/image";
import getFornecedorId from "@/actions/fornecedores/get-fornecedor-id";
import {FornecedorId} from "@/types/fornecedores";

type Props = {
    params: {
        idFornecedor: string
    }
}

export const metadata: Metadata = {
    title: "Alteração de Fornecedores",
    description: "Pagina  de alteração de fornecedor no sistema",
}

export default async function UpdateFornecedorPage ({params}:Props){
    const {idFornecedor} = params;
    const {data: fornecedor} = await getFornecedorId(idFornecedor as unknown as FornecedorId);

    return(
        <div className="m-5 border border-1 border-secondary-subtle mt-3">
            <h3 className="bg-secondary-subtle p-2">
                <i className="h3 bi bi-person-fill-add"> </i>
                Editar Forncedor
            </h3>
            <div className="d-sm-flex justify-content-between w-100">
                <UpdateFornecedorForm  fornecedor={fornecedor} />
                <div className="w-100 d-flex justify-content-center">
                    <Image src="/img/icone_cad_fornecedor.png"
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