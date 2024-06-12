import {Metadata} from "next";
import Link from "next/link";
import getProdutos from "@/actions/produtos/get-produtos";
import ProdutosLista from "@/components/produtos/produtos-lista";

export const metadata: Metadata = {
    title: "Cadastro de produtos",
    description: "Pagina  de cadastro de produto no sistema",
}


export default async function CadastroProduto() {

    const {data: produtos} = await getProdutos();
    return (
        <div className="p-2 mt-4">
            <div className="d-flex justify-content-between mb-3">
                <h3>
                    <i className="bi bi-box-seam h3"> </i>
                    Produtos
                </h3>
                <Link href="/sgme/cadastro/produto/novo" className="btn btn-success">
                    <i className="bi bi-plus text-white"> </i>
                    Novo Produto</Link>
            </div>

            <div className="bg-primary p-2 d-flex flex-row rounded-top-2">
                <i className="h5 bi bi-gear text-white"> <span className="text-white"> Opções</span> </i>
            </div>
            <ProdutosLista produtos={produtos}/>

            {/*<FiltroDados/>
            */}

        </div>
    )
}