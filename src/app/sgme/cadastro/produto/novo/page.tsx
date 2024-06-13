import {Metadata} from "next";
import React from "react";
import Image from "next/image";
import CadastroProdutoForm from "@/components/produtos/cadastro-produto-form";

export const metadata: Metadata = {
    title: "Cadastro de produtos",
    description: "Pagina  de cadastro de produto no sistema",
}


export default function ProdutoNovo() {
    return (
        <div className="m-5 border border-1 border-secondary-subtle mt-3">
            <h3 className="bg-secondary-subtle p-2">
                <i className="h3 bi bi-box"> </i>
                Cadastro de produtos
            </h3>

            <div className="d-sm-flex justify-content-between w-100">
                <CadastroProdutoForm/>

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