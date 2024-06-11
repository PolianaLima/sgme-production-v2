import {Metadata} from "next";
import getVendas from "@/actions/vendas/getVendas";

export const metadata: Metadata = {
    title: "Cadastro de produtos",
    description: "Pagina  de cadastro de produto no sistema",
}


export default async  function CadastroProduto(){

    const {data} =await getVendas();

    console.log(data);

    return(
        <div className="mt-4 p-2">
            <h1>Cadastro de produtos</h1>

        </div>
    )
}