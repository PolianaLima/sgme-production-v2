import Image from "next/image";
import React from "react";
import UpdateProdutoForm from "@/components/produtos/update-produto-form";
import getProdutoId from "@/actions/produtos/get-produto-id";
import {ProdutoId} from "@/types/produtos";
import {Metadata} from "next";
import {redirect} from "next/navigation";

type Props = {
    params: {
        idProduto: string
    }
}

export const metadata: Metadata = {
    title: "Alteração de produtos",
    description: "Pagina  de alteração de produto no sistema",
}


export default async function UpdateProdutoPage({ params }:Props){
    const { idProduto } = params;
    const {data: produto} = await getProdutoId(idProduto as unknown as ProdutoId);

    if(!produto){
        redirect('/global-error')
    }

    return (
        <div className="m-5 border border-1 border-secondary-subtle mt-3">
            <h3 className="bg-secondary-subtle p-2">
                <i className="h3 bi bi-box"> </i>
                Editar produtos
            </h3>

            <div className="d-sm-flex justify-content-between w-100">
                <UpdateProdutoForm produto={produto}/>
                <div className="w-100 d-flex justify-content-center">
                    <Image src="/img/icone_cad_produto.svg"
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