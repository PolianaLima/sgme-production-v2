import {Metadata} from "next";
import Link from "next/link";
import getProdutos from "@/actions/produtos/get-produtos";
import Image from "next/image";
import FiltroDados from "@/components/shared/filtro-dados";

export const metadata: Metadata = {
    title: "Cadastro de produtos",
    description: "Pagina  de cadastro de produto no sistema",
}


export default async function CadastroProduto() {

    const {data:produtos} = await getProdutos();
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

            <FiltroDados/>
            <div className="mt-3">
                <table className="table table-borderless">
                    <thead>
                    <tr>
                        <th scope="col" style={{minWidth: 100}}>Codigo</th>
                        <th scope="col" className="w-100">Nome</th>
                        <th scope="col" className="w-100">Custo</th>
                        <th scope="col" className="w-100">Preço</th>
                        <th scope="col" className="w-100">Status</th>
                        <th scope="col" style={{minWidth: 100}}>Editar</th>
                    </tr>
                    </thead>
                    <tbody>
                    {produtos && produtos.length > 0 ? (
                        produtos.map((produto: any) => (
                            <tr key={produto.id}>
                                <td>{produto.codigo}</td>
                                <td>{produto.nome}</td>
                                <td>{produto.custo.toLocaleString('pt-br', {
                                    style: 'currency',
                                    currency: 'BRL'
                                })}</td>
                                <td>{produto.preco.toLocaleString('pt-br', {
                                    style: 'currency',
                                    currency: 'BRL'
                                })}</td>
                                <td>{produto.status.toLowerCase()}</td>
                                <td>
                                    <Link href={`/sgme/cadastro/produto/${produto.id}`} className="btn btn-primary"> <i
                                        className="bi bi-pencil-square text-white">

                                    </i></Link>
                                </td>
                            </tr>
                        ))) : (
                        <tr>
                            <td colSpan={6} className="text-center">
                                <Image src="/img/dado_nao_encontrado.svg" alt="Not Found" width={500} height={500}
                                       priority={false}/>
                                <h1>Nenhum produto encontrado!</h1>
                            </td>
                        </tr>

                    )}

                    </tbody>
                </table>
            </div>

        </div>
    )
}