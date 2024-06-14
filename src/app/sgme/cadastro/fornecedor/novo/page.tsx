import Image from "next/image";
import React from "react";
import CadastroFornecedorForm from "@/components/fornecedores/cadastro-fornecedor-form";

export default function CadastroFornecedorPage() {
    return (
        <div className="m-5 border border-1 border-secondary-subtle mt-3">
            <h3 className="bg-secondary-subtle p-2">
                <i className="h3 bi bi-person-fill-add"> </i>
                Cadastro de Fornecedores
            </h3>

            <div className="d-sm-flex justify-content-between w-100">
                <CadastroFornecedorForm/>
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