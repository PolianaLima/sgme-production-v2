import {Metadata} from "next";
import ImagemButton from "@/components/dashboard/ImagemButton";
import {useUser} from "@/context/user-context";
import UsuarioName from "@/components/usuario/usuario";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Pagina de Dashboard do sistema",
}

export default async function HomePage() {
    return (
        <div className="container-fluid d-sm-flex flex-sm-column justify-content-center pb-5 mt-4">
            <div className="d-sm-flex justify-content-center align-items-center mb-4">
                <div>
                    <h1 className="w-100 text-center">SEJA BEM VINDO(A)</h1>
                    <UsuarioName/>
                </div>
            </div>
            <h2 className="text-app-sgme fs-2 text-center">Menu Rapido</h2>
            <div className="container-sm d-sm-flex flex-wrap justify-content-between">
                <ImagemButton img="/img/icone_pdv_venda.svg" link="#" titleLink="Nova Venda"/>
                <ImagemButton img="/img/icone_cad_produto.svg" link="/sgme/cadastro/produto/novo" titleLink="Novo Produto"/>
                <ImagemButton img="/img/icone_cad_cliente.svg" link="#" titleLink="Novo Cliente"/>
                <ImagemButton img="/img/icone_cad_fornecedor.png" link="#" titleLink="Novo Fornecedor"/>
                <ImagemButton img="/img/icone_contas_pagar.svg" link="#" titleLink="Nova Despesa"/>
                <ImagemButton img="/img/icone_contas_receber.svg" link="#" titleLink="Nova Receita"/>
            </div>
        </div>
    )
}