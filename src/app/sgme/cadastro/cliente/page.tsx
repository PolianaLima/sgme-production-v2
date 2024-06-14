import {Metadata} from "next";
import Link from "next/link";
import getClientes from "@/actions/clientes/get-clientes";
import ClientesLista from "@/components/clientes/clientes-lista";

export const metadata: Metadata = {
    title: "Clientes",
    description: "Pagina  de listagem de clientes",
}

export default async function ClientePage(){
    const {data:clientes} = await getClientes();
    return(
        <div className="p-2 mt-4">
            <div className="d-flex justify-content-between mb-3">
                <h3>
                    <i className="bi bi-person-fill h3"> </i>
                    Clientes
                </h3>
                <Link href="/sgme/cadastro/cliente/novo" className="btn btn-success">
                    <i className="bi bi-plus text-white"> </i>
                    Novo Cliente</Link>
            </div>

            <div className="bg-primary p-2 d-flex flex-row rounded-top-2">
                <i className="h5 bi bi-gear text-white"> <span className="text-white"> Opções</span> </i>
            </div>

         <ClientesLista clientes={clientes}/>
        </div>
    )
}