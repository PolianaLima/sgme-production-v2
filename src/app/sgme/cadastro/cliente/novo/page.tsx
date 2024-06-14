import React from "react";
import Image from "next/image";

export default function NovoClientePage() {
    return (
        <div className="m-5 border border-1 border-secondary-subtle mt-3">
            <h3 className="bg-secondary-subtle p-2">
                <i className="h3 bi bi-person-fill-add"> </i>
                Cadastro de clientes
            </h3>

            <div className="d-sm-flex justify-content-between w-100">
               {/* <CadastroClienteForm/>*/}

                <div className="w-100 d-flex justify-content-center">
                    <Image src="/img/icone_cad_cliente.svg"
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