import React from "react";
import Image from "next/image";
import UpdateClienteForm from "@/components/clientes/update-cliente-form";
import {Metadata} from "next";
import getClienteId from "@/actions/clientes/get-cliente-id";
import {ClienteId} from "@/types/clientes";

type Props = {
    params: {
        idCliente: string
    }
}

export const metadata: Metadata = {
    title: "Alteração de Clientes",
    description: "Pagina  de alteração de cliente no sistema",
}

export default async function UpdateClientePage ({params}:Props){
    const {idCliente} = params;
    const {data: cliente} = await getClienteId(idCliente as unknown as ClienteId);

    return(
        <div className="m-5 border border-1 border-secondary-subtle mt-3">
            <h3 className="bg-secondary-subtle p-2">
                <i className="h3 bi bi-person-fill-add"> </i>
                Editar clientes
            </h3>
            <div className="d-sm-flex justify-content-between w-100">
                <UpdateClienteForm cliente={cliente} />
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